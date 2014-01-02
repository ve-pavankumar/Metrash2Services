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
                recidencyrenwalObject.sponsorDeatils = {
                    "sponsorEnglishName": output["sponsorEnglishName"],
                    "sponsorArabicName": output["sponsorArabicName"],
                    "sponsorQidNum": output["sponsorQidNum"]
                };
                mapSponsorDetailsOnDisplay(output["sponsorEnglishName"], output["sponsorArabicName"], output["sponsorQidNum"], frmPersonalResidencyInput);
                var sponserDetailsArray = []; //Array
                for (var sponser in sponserDetails) {
                    sponserDetails[sponser]["renewPeriod"] = sponserDetails[sponser]["renewPeriod"] || "1";
                    kony.print("Year Value" + sponserDetails[sponser]["renewPeriod"]);
                    recidencyrenwalObject.qid = sponserDetails[sponser]["qid"];
                    var localeSpecificDisplayValues = getLocaleSpecificDisplayValuesForSponseredDataSet(sponserDetails[sponser]);
                    var segmentData = {
                        qid: sponserDetails[sponser]["qid"],
                        btnPersResCheckbox: "btn_check_off.png",
                        lblQID: assignSkinForRejectedQID(sponserDetails[sponser]["rejectionReasonCode"], sponserDetails[sponser]["qid"]),
                        lblExpiryDate: sponserDetails[sponser]["expiryDate"],
                        lblName: localeSpecificDisplayValues["name"],
                        btnPersResDetails: "moi_det_right.png",
                        btnYear: assignYearRejectedQID(sponserDetails[sponser]["rejectionReasonCode"], sponserDetails[sponser]["renewPeriod"]),
                        clickedInfo: "0",
                        nationality: localeSpecificDisplayValues["nationality"],
                        relation: localeSpecificDisplayValues["relation"],
                        sex: localeSpecificDisplayValues["sex"],
                        dob: "",
                        age: "",
                        residencyDate: "",
                        passportNo: sponserDetails[sponser]["passportNum"],
                        maximumAllowDuration: sponserDetails[sponser]["maxAllowDuration"],
                        workFees: sponserDetails[sponser]["workFees"],
                        renewFees: sponserDetails[sponser]["renewFees"],
                        cardFees: sponserDetails[sponser]["cardFees"],
                        delayFees: sponserDetails[sponser]["delayFees"],
                        rejectionReason: localeSpecificDisplayValues["rejectionReason"],
                        rejectionReasonCode: sponserDetails[sponser]["rejectionReasonCode"],
                        vbxPersResCheckbox: assignCheckBoxClickForSponseredItems(sponserDetails[sponser]["rejectionReasonCode"])
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
    if (maxAllowDur > selectedSegmentData["btnYear"]["text"]) selectedSegmentData["btnYear"]["text"] = Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"]["text"]) + 1) + "";
    else selectedSegmentData["btnYear"]["text"] = "1";
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
        segmentData["btnPersResCheckbox"] = "btn_check_on.png";
        segmentData["clickedInfo"] = "1";
    } else {
        segmentData = selectedSegmentData;
        segmentData["btnPersResCheckbox"] = "btn_check_off.png";
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
        amount = (kony.os.toNumber(selectedSegmentData["renewFees"]) * Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"]["text"])) * discountComponent) + kony.os.toNumber(selectedSegmentData["cardFees"]) + (kony.os.toNumber(selectedSegmentData["workFees"]) * Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"]["text"]))) + kony.os.toNumber(selectedSegmentData["delayFees"]);
        kony.print("Amount " + amount); {
            if ((selectedSegmentData.clickedInfo == "1")) {
                totalAmount = totalAmount + amount;
            }
        }
    }
    frmPersonalResidencyInput.lblAmountValue.text = totalAmount + "";
    recidencyrenwalObject.totalAmount = totalAmount;
}

function getLocaleSpecificDisplayValuesForSponseredDataSet(dataSet) {
    var locale = "ar_QR";
    var LocaleSpecificDisplayValues = [];
    if (locale == "ar_QR") {
        LocaleSpecificDisplayValues["name"] = dataSet["arabicName"];
        LocaleSpecificDisplayValues["nationality"] = dataSet["nationalityAr"];
        LocaleSpecificDisplayValues["relation"] = dataSet["relationAr"];
        LocaleSpecificDisplayValues["sex"] = dataSet["sexAr"];
        LocaleSpecificDisplayValues["rejectionReason"] = dataSet["rejectionReasonArabic"];
    } else if (locale = "en_QR") {
        LocaleSpecificDisplayValues["name"] = dataSet["engName"];
        LocaleSpecificDisplayValues["nationality"] = dataSet["nationalityEng"];
        LocaleSpecificDisplayValues["relation"] = dataSet["relationEng"];
        LocaleSpecificDisplayValues["sex"] = dataSet["sexEng"];
        LocaleSpecificDisplayValues["rejectionReason"] = dataSet["rejectionReasonEnglish"];
    }
    return LocaleSpecificDisplayValues;
}

function getLocaleSpecificDisplayValuesForSponsor(engName, arabicName) {
    var locale = "ar_QR";
    var name = "";
    if (locale == "ar_QR") {
        name = arabicName;
    } else if (locale = "en_QR") {
        name = engName;
    }
    return name;
}

function mapSponsorDetailsOnDisplay(engName, arabicName, qid, formObj) {
    var name = getLocaleSpecificDisplayValuesForSponsor(engName, arabicName);
    formObj.lblSponsorQID.text = qid;
    formObj.lblSponsorName.text = name;
}

function assignCheckBoxClickForSponseredItems(rejectedCode) {
    rejectedCode = rejectedCode || "";
    var vbxPersResCheckboxEvent = {};
    if (rejectedCode != "") {
        vbxPersResCheckboxEvent = {
            "onClick": ""
        };
    } else vbxPersResCheckboxEvent = {
        "onClick": checkboxClicked
    };
    return vbxPersResCheckboxEvent;
}

function assignSkinForRejectedQID(rejectedCode, labelText) {
    rejectedCode = rejectedCode || "";
    var lblQIDItem = {};
    if (rejectedCode != "") {
        lblQIDItem = {
            "text": labelText,
            "skin": lblRed
        };
    } else lblQIDItem = {
        "text": labelText,
        "skin": lblBlackNor
    };
    return lblQIDItem;
}

function assignYearRejectedQID(rejectedCode, bntText) {
    rejectedCode = rejectedCode || "";
    var yearButtonItem = {};
    if (rejectedCode != "") {
        yearButtonItem = {
            "text": "0",
            "onClick": ""
        };
    } else yearButtonItem = {
        "text": bntText,
        "onClick": yearButtonClicked
    };
    return yearButtonItem;
}