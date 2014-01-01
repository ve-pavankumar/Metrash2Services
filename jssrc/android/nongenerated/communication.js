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
                var sponserDetailsArray = []; //Array
                for (var sponser in sponserDetails) {
                    sponserDetails[sponser]["renewPeriod"] = sponserDetails[sponser]["renewPeriod"] || "1";
                    kony.print("Year Value" + sponserDetails[sponser]["renewPeriod"]);
                    var segmentData = {
                        qid: sponserDetails[sponser]["qid"],
                        btnPersResCheckbox: "test",
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
                        maximumAllowDuration: sponserDetails[sponser]["maxAllowDuration"]
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
    if (maxAllowDur > this.text) this.text = Math.floor(kony.os.toNumber(this.text) + 1) + "";
    else this.text = "1";
}

function checkboxClicked() {
    var rowIndex = frmPersonalResidencyInput.segResPersonalInput.selectedIndex[1];
    var selectedSegmentData = frmPersonalResidencyInput.segResPersonalInput.data[rowIndex];
    var oldSegmentData = frmPersonalResidencyInput.segResPersonalInput.data;
    kony.print("asdf" + selectedSegmentData.btnPersResCheckbox.clickedInfo);
    var segmentData = [];
    if (selectedSegmentData.clickedInfo == "0") {
        segmentData = {
            qid: selectedSegmentData["qid"],
            btnPersResCheckbox: {
                skin: btnCheckBoxClicked
            },
            lblQID: selectedSegmentData["lblQID"],
            lblExpiryDate: selectedSegmentData["lblExpiryDate"],
            lblName: selectedSegmentData["lblName"],
            btnPersResDetails: selectedSegmentData["btnPersResDetails"],
            btnYear: selectedSegmentData["btnYear"]
        };
    } else {
        segmentData = {
            qid: selectedSegmentData["qid"],
            btnPersResCheckbox: {
                skin: btnCheckbox
            },
            lblQID: selectedSegmentData["lblQID"],
            lblExpiryDate: selectedSegmentData["lblExpiryDate"],
            lblName: selectedSegmentData["lblName"],
            btnPersResDetails: selectedSegmentData["btnPersResDetails"],
            btnYear: selectedSegmentData["btnYear"]
        }
    }
    frmPersonalResidencyInput.segResPersonalInput.setDataAt(segmentData, rowIndex);
}