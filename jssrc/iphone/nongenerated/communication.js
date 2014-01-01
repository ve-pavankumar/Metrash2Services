function callPersonalRenewalResidencyService() {
    var qid = "27163400125";
    //var userName = "micsbcn";
    //	var password = "iyadaw";
    //kony.application.showLoadingScreen(loader,"  loading...  ",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true,true,null);
    //var inputParams={serviceID:"getEligibleSposoredListForRenewRPForPersonal",userName:userName,password:password,qid:qid};
    var inputParams = {
        serviceID: "residencyComposite",
        qid: qid
    };
    kony.print("I/P params " + inputParams);
    appmiddlewareinvokerasync(inputParams, residencyServiceCallbackFunction);
}

function residencyServiceCallbackFunction(status, output) {
    recidencyrenwalObject = [];
    kony.print("Entering into residencyServiceCallbackFunction");
    kony.print("status: " + status);
    if (null != status && status == 400) {
        kony.print("responseFromResidencyService: " + output);
        kony.print("OPSTATUS " + output["opstatus"]);
        if (null != output && null != output["opstatus"] && 0 == output["opstatus"]) {
            kony.print("responseFromResidencyService[opstatus]: " + output["opstatus"]);
            var sponserDetails = output.sponserDetails;
            kony.print("number of sponsers " + sponserDetails.length);
            if (null != sponserDetails && sponserDetails.length > 0) {
                recidencyrenwalObject.sponsorDTOforRecidencyRenewal = output.sponserDetailsBulk || [];
                //recidencyrenwalObject.DeliveryDetailsDTO=output["deliveryDetailsDTO"][0] ||[];
                var sponserDetailsArray = []; //Array
                for (var sponser in sponserDetails) {
                    sponserDetails[sponser]["renewPeriod"] = sponserDetails[sponser]["renewPeriod"] || "1";
                    kony.print("Year Value" + sponserDetails[sponser]["renewPeriod"]);
                    recidencyrenwalObject.qid = sponserDetails[sponser]["qid"];
                    var segmentData = {
                        qid: sponserDetails[sponser]["qid"],
                        btnPersResCheckbox: {
                            skin: btnCheck
                        },
                        lblQID: sponserDetails[sponser]["qid"],
                        lblExpiryDate: sponserDetails[sponser]["expiryDate"],
                        lblName: sponserDetails[sponser]["engName"],
                        btnPersResDetails: "test",
                        btnYear: sponserDetails[sponser]["renewPeriod"],
                        clickedInfo: "0",
                        nationality: sponserDetails[sponser]["nationalityEng"],
                        relation: sponserDetails[sponser]["relationEng"],
                        sex: sponserDetails[sponser]["sexEng"],
                        dob: "",
                        age: "",
                        residencyDate: "",
                        passportNo: sponserDetails[sponser]["passportNum"],
                        maximumAllowDuration: sponserDetails[sponser]["maxAllowDuration"],
                        workFees: sponserDetails[sponser]["workFees"],
                        renewFees: sponserDetails[sponser]["renewFees"],
                        cardFees: sponserDetails[sponser]["cardFees"],
                        delayFees: sponserDetails[sponser]["delayFees"]
                    }
                    sponserDetailsArray.push(segmentData);
                }
                frmPersonalResidencyInput.segResPersonalInput.setData(sponserDetailsArray);
                frmPersonalResidencyInput.show();
            } else {
                var basicConf = {
                    message: "Service did not return any records",
                    alertType: constants.ALERT_TYPE_INFO,
                    alertTitle: "",
                    yesLabel: "OK",
                    noLabel: "",
                    alertHandler: null
                };
                var pspConf = {};
                var infoAlert = kony.ui.Alert(basicConf, pspConf);
                return;
            }
        } else {
            var basicConf = {
                message: "Error Code" + output.errcode,
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "",
                yesLabel: "OK",
                noLabel: "",
                alertHandler: null
            };
            var pspConf = {};
            var infoAlert = kony.ui.Alert(basicConf, pspConf);
            return;
        }
    }
}

function detailsIconClicked() {
    var rowIndex = frmPersonalResidencyInput.segResPersonalInput.selectedIndex[1];
    var selectedSegmentData = frmPersonalResidencyInput.segResPersonalInput.data[rowIndex];
    kony.print("DATA " + selectedSegmentData);
    var segmentData = [{
        lblPersResKey: "Name",
        lblPersResValue: selectedSegmentData[lblName]
    }, {
        lblPersResKey: "QID",
        lblPersResValue: selectedSegmentData[lblQID]
    }];
    frmPersonalResidencyDetails.segmentPersResDetails.setData(segmentData);
    kony.print("SEGMENT DATA" + segmentData);
    frmPersonalResidencyDetails.show();
}

function yearButtonClicked() {
    var rowIndex = frmPersonalResidencyInput.segResPersonalInput.selectedIndex[1];
    var selectedSegmentData = frmPersonalResidencyInput.segResPersonalInput.data[rowIndex];
    if (selectedSegmentData["maximumAllowDuration"] == "0") return;
    var maxAllowDur = selectedSegmentData["maximumAllowDuration"];
    if (maxAllowDur > selectedSegmentData["btnYear"]) selectedSegmentData["btnYear"] = Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"]) + 1) + "";
    else selectedSegmentData["btnYear"] = "1";
    frmPersonalResidencyInput.segResPersonalInput.setDataAt(selectedSegmentData, rowIndex);
    refreshTotalAmount();
}

function getCheckedRowsInResidency() {
    var checkedItem = [];
    var row = 0;
    var fullData = frmPersonalResidencyInput.segResPersonalInput.data;
    for (var item in fullData) {
        if (fullData[item]["clickedInfo"] == "1") {
            checkedItem.push(row + "");
        }
        row = row + 1;
    }
    return checkedItem;
}

function checkboxClicked() {
    var rowIndex = frmPersonalResidencyInput.segResPersonalInput.selectedIndex[1];
    var selectedSegmentData = frmPersonalResidencyInput.segResPersonalInput.data[rowIndex];
    var oldSegmentData = frmPersonalResidencyInput.segResPersonalInput.data;
    kony.print("asdf" + selectedSegmentData.btnPersResCheckbox.clickedInfo);
    var segmentData = [];
    if (selectedSegmentData.clickedInfo == "0") {
        segmentData = selectedSegmentData;
        segmentData["btnPersResCheckbox"] = {
            skin: btnCheckBoxClicked
        };
        segmentData["clickedInfo"] = "1";
    } else {
        segmentData = selectedSegmentData;
        segmentData["btnPersResCheckbox"] = {
            skin: btnCheckbox
        };
        segmentData["clickedInfo"] = "0";
    }
    frmPersonalResidencyInput.segResPersonalInput.setDataAt(segmentData, rowIndex);
    recidencyrenwalObject.selectedRecidencyRenewalBulkData = selectedRecidencyRenewalBulkData();
    refreshTotalAmount();
}

function selectedRecidencyRenewalBulkData() {
    var t = getCheckedRowsInResidency();
    var selectedRenewalBulk = [];
    for (var x in t) {
        selectedRenewalBulk.push(recidencyrenwalObject.sponsorDTOforRecidencyRenewal[x]);
    }
    return selectedRenewalBulk;
}

function refreshTotalAmount() {
    var totalAmount = 0;
    for (var row in frmPersonalResidencyInput.segResPersonalInput.data) {
        var selectedSegmentData = frmPersonalResidencyInput.segResPersonalInput.data[row];
        var amount = 0;
        var discountComponent = 1;
        if (Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"])) >= 3) discountComponent = 0.8;
        amount = (kony.os.toNumber(selectedSegmentData["renewFees"]) * Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"])) * discountComponent) + kony.os.toNumber(selectedSegmentData["cardFees"]) + (kony.os.toNumber(selectedSegmentData["workFees"]) * Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"]))) + kony.os.toNumber(selectedSegmentData["delayFees"]);
        kony.print("Amount " + amount); {
            if ((selectedSegmentData.clickedInfo == "1")) {
                totalAmount = totalAmount + amount;
            }
        }
    }
    frmPersonalResidencyInput.lblAmountValue.text = totalAmount + "";
    recidencyrenwalObject.totalAmount = totalAmount;
}

function residencyPaymentPostShow() {
    frmResidencyPayment.calExpiryDate.dateFormat = "mm/YY";
    frmResidencyPayment.lblAmountValue.text = recidencyrenwalObject.totalAmount;
}