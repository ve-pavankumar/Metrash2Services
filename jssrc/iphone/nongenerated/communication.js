function callPersonalRenewalResidencyService() {
    //var qid= "27163400125";
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
    residencyPersonalRenewalDeliveryFeesObject = [];
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
                collectDeliveryDetails(output);
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
                        rejectionReason: assignSkinForRejectedQID(sponserDetails[sponser]["rejectionReasonCode"], localeSpecificDisplayValues["rejectionReason"]),
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
            //var infoAlert = kony.ui.Alert(basicConf,pspConf);
            showErrorPopup(output.errcode);
            return;
        }
    }
}

function detailsIconClicked() {
    var rowIndex = frmPersonalResidencyInput.segResPersonalInput.selectedIndex[1];
    var selectedSegmentData = frmPersonalResidencyInput.segResPersonalInput.data[rowIndex];
    var rejectionCode = selectedSegmentData["rejectionReasonCode"];
    kony.print("Rejection Code " + rejectionCode);
    if (rejectionCode != null) {
        kony.i18n.getLocalizedString(locale)
        var segmentData = [{
            lblPersResKey: kony.i18n.getLocalizedString("m.all.reject.reason"),
            lblPersResValue: selectedSegmentData.rejectionReason
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("rr.name"),
            lblPersResValue: selectedSegmentData.lblName
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("rr.qid"),
            lblPersResValue: changeQIDSkinToBlack(selectedSegmentData.lblQID)
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.ps.epf.detail.nationality"),
            lblPersResValue: selectedSegmentData.nationality
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("rr.relation"),
            lblPersResValue: selectedSegmentData.relation
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("rr.sex"),
            lblPersResValue: selectedSegmentData.sex
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("rr.dob"),
            lblPersResValue: selectedSegmentData.dob
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.ps.epf.detail.age"),
            lblPersResValue: ""
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.residencyDate"),
            lblPersResValue: ""
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.passport"),
            lblPersResValue: selectedSegmentData.passportNo
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.ps.expiryDate"),
            lblPersResValue: selectedSegmentData.passportExpDate
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.residency.fees"),
            lblPersResValue: ""
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.residency.delayFees"),
            lblPersResValue: selectedSegmentData.delayFees
        }, {
            lblPersResKey: "Entry Date",
            lblPersResValue: ""
        }];
    } else {
        var segmentData = [{
            lblPersResKey: kony.i18n.getLocalizedString("rr.name"),
            lblPersResValue: selectedSegmentData.lblName
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("rr.qid"),
            lblPersResValue: changeQIDSkinToBlack(selectedSegmentData.lblQID)
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.ps.epf.detail.nationality"),
            lblPersResValue: selectedSegmentData.nationality
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("rr.relation"),
            lblPersResValue: selectedSegmentData.relation
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("rr.sex"),
            lblPersResValue: selectedSegmentData.sex
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("rr.dob"),
            lblPersResValue: selectedSegmentData.dob
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.ps.epf.detail.age"),
            lblPersResValue: ""
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.residencyDate"),
            lblPersResValue: ""
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.passport"),
            lblPersResValue: selectedSegmentData.passportNo
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.ps.expiryDate"),
            lblPersResValue: selectedSegmentData.passportExpDate
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.residency.fees"),
            lblPersResValue: ""
        }, {
            lblPersResKey: kony.i18n.getLocalizedString("m.residency.delayFees"),
            lblPersResValue: selectedSegmentData.delayFees
        }, {
            lblPersResKey: "Entry Date",
            lblPersResValue: ""
        }];
    }
    frmPersonalResidencyDetails.segmentPersResDetails.setData(segmentData);
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
    recidencyrenwalObject.totalAmount = kony.os.toNumber(recidencyrenwalObject.totalAmount) || "0";
    for (var row in frmPersonalResidencyInput.segResPersonalInput.data) {
        var selectedSegmentData = frmPersonalResidencyInput.segResPersonalInput.data[row];
        var amount = 0;
        var discountComponent = 1;
        if (Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"]["text"])) >= 3)
        //discountComponent=0.8;
        discountComponent = residencyPersonalRenewalConfigurationObject.persRen3YearDiscount;
        amount = (kony.os.toNumber(selectedSegmentData["renewFees"]) * Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"]["text"])) * discountComponent) + kony.os.toNumber(selectedSegmentData["cardFees"]) + (kony.os.toNumber(selectedSegmentData["workFees"]) * Math.floor(kony.os.toNumber(selectedSegmentData["btnYear"]["text"]))) + kony.os.toNumber(selectedSegmentData["delayFees"]);
        kony.print("Amount " + amount); {
            if ((selectedSegmentData.clickedInfo == "1")) {
                totalAmount = totalAmount + amount;
            }
        }
    }
    recidencyrenwalObject.totalAmount = totalAmount + "";
    recidencyrenwalObject.finalPaymentAmount = Math.floor(kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) + kony.os.toNumber(recidencyrenwalObject.totalAmount));
    frmPersonalResidencyInput.lblAmountValue.text = recidencyrenwalObject.finalPaymentAmount + "";
}

function QPostOptionClicked() {
    recidencyrenwalObject.qpostOrImmigrationAmount = kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) || "0";
    recidencyrenwalObject.totalAmount = kony.os.toNumber(recidencyrenwalObject.totalAmount) || "0";
    kony.print("QPost fees" + residencyPersonalRenewalDeliveryFeesObject.QPostFees)
    if (frmPersonalResidencyInput.btnQPost.skin == "btnCheckbox") {
        frmPersonalResidencyInput.btnQPost.skin = "btnCheckBoxClicked";
        if (frmPersonalResidencyInput.btnImmigration.skin == "btnCheckBoxClicked") recidencyrenwalObject.qpostOrImmigrationAmount = kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) - kony.os.toNumber(residencyPersonalRenewalDeliveryFeesObject.immigrationFees);
        frmPersonalResidencyInput.btnImmigration.skin = "btnCheckbox";
        recidencyrenwalObject.qpostOrImmigrationAmount = kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) + kony.os.toNumber(residencyPersonalRenewalDeliveryFeesObject.QPostFees);
        residencyPersonalRenewalDeliveryFeesObject.option = "1";
    } else if (frmPersonalResidencyInput.btnQPost.skin == "btnCheckBoxClicked") {
        frmPersonalResidencyInput.btnQPost.skin = "btnCheckbox";
        recidencyrenwalObject.qpostOrImmigrationAmount = kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) - kony.os.toNumber(residencyPersonalRenewalDeliveryFeesObject.QPostFees);
    }
    recidencyrenwalObject.finalPaymentAmount = Math.floor(kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) + kony.os.toNumber(recidencyrenwalObject.totalAmount));
    frmPersonalResidencyInput.lblAmountValue.text = recidencyrenwalObject.finalPaymentAmount + "";
}

function ImmigrationOptionClicked() {
    recidencyrenwalObject.qpostOrImmigrationAmount = kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) || "0";
    recidencyrenwalObject.totalAmount = kony.os.toNumber(recidencyrenwalObject.totalAmount) || "0";
    recidencyrenwalObject.totalAmount = kony.os.toNumber(recidencyrenwalObject.totalAmount) || "0";
    if (frmPersonalResidencyInput.btnImmigration.skin == "btnCheckbox") {
        frmPersonalResidencyInput.btnImmigration.skin = "btnCheckBoxClicked";
        if (frmPersonalResidencyInput.btnQPost.skin == "btnCheckBoxClicked") recidencyrenwalObject.qpostOrImmigrationAmount = kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) - kony.os.toNumber(residencyPersonalRenewalDeliveryFeesObject.QPostFees);
        frmPersonalResidencyInput.btnQPost.skin = "btnCheckbox";
        recidencyrenwalObject.qpostOrImmigrationAmount = kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) + kony.os.toNumber(residencyPersonalRenewalDeliveryFeesObject.immigrationFees);
        residencyPersonalRenewalDeliveryFeesObject.option = "2";
    } else if (frmPersonalResidencyInput.btnImmigration.skin == "btnCheckBoxClicked") {
        frmPersonalResidencyInput.btnImmigration.skin = "btnCheckbox";
        recidencyrenwalObject.qpostOrImmigrationAmount = kony.os.toNumber(recidencyrenwalObject.totalAmount) - kony.os.toNumber(residencyPersonalRenewalDeliveryFeesObject.immigrationFees);
    }
    recidencyrenwalObject.finalPaymentAmount = Math.floor(kony.os.toNumber(recidencyrenwalObject.qpostOrImmigrationAmount) + kony.os.toNumber(recidencyrenwalObject.totalAmount));
    frmPersonalResidencyInput.lblAmountValue.text = recidencyrenwalObject.finalPaymentAmount + "";
}

function getLocaleSpecificDisplayValuesForSponseredDataSet(dataSet) {
    //locale="ar_QA";
    var LocaleSpecificDisplayValues = [];
    if (locale == "ar_QA") {
        LocaleSpecificDisplayValues["name"] = dataSet["arabicName"];
        LocaleSpecificDisplayValues["nationality"] = dataSet["nationalityAr"];
        LocaleSpecificDisplayValues["relation"] = dataSet["relationAr"];
        LocaleSpecificDisplayValues["sex"] = dataSet["sexAr"];
        LocaleSpecificDisplayValues["rejectionReason"] = dataSet["rejectionReasonArabic"];
    } else if (locale = "en_QA") {
        LocaleSpecificDisplayValues["name"] = dataSet["engName"];
        LocaleSpecificDisplayValues["nationality"] = dataSet["nationalityEng"];
        LocaleSpecificDisplayValues["relation"] = dataSet["relationEng"];
        LocaleSpecificDisplayValues["sex"] = dataSet["sexEng"];
        LocaleSpecificDisplayValues["rejectionReason"] = dataSet["rejectionReasonEnglish"];
    }
    return LocaleSpecificDisplayValues;
}

function getLocaleSpecificDisplayValuesForSponsor(engName, arabicName) {
    //locale="ar_QA";
    var name = "";
    if (locale == "ar") {
        name = arabicName;
    } else if (locale = "en") {
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
            visible: false
        };
    } else vbxPersResCheckboxEvent = {
        visible: true
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
            "text": bntText,
            visible: false
        };
    } else yearButtonItem = {
        "text": bntText,
        visible: true
    };
    return yearButtonItem;
}

function residencyInputPreShow() {
    kony.print("SHOW DELI SECTION " + residencyPersonalRenewalConfigurationObject.showPersRenDeliveryMethodSection);
    //Do not show Delivery Section.
    if (residencyPersonalRenewalConfigurationObject.showPersRenDeliveryMethodSection == "0") {
        frmPersonalResidencyInput.remove(frmPersonalResidencyInput.hboxDelivery);
    }
    //Delivery Section to be displayed.
    else {
        frmPersonalResidencyInput.lblDeliveryMsg.text = residencyPersonalRenewalConfigurationObject.persRenDeliveryOptionMsg;
        if (residencyPersonalRenewalConfigurationObject.enablePersRenQPostDeliveryOption == "0") {
            frmPersonalResidencyInput.btnQPost.setEnabled(false);
        }
        if (residencyPersonalRenewalConfigurationObject.enablePersRenRpDeliveryOption == "0") {
            frmPersonalResidencyInput.btnImmigration.setEnabled(false);
        }
    }
}

function residencyInputScreenPostShow() {
    frmPersonalResidencyInput.lblAmountValue.text = 0;
}

function personalResidencyInputScreenValidations() {
    var numberOfSelectedRecords = personalResidencyInputSelectedRecords();
    kony.print("SELCTED RECORDS " + numberOfSelectedRecords);
    if (numberOfSelectedRecords == 0) {
        var basicConf = {
            message: "Please Select minimum one record",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Residency Renewal",
            yesLabel: "OK",
            alertHandler: null
        };
        var pspConf = {};
        var infoAlert = kony.ui.Alert(basicConf, pspConf);
        return;
    }
    if (residencyPersonalRenewalConfigurationObject.showPersRenDeliveryMethodSection != "0") {
        if (frmPersonalResidencyInput.btnQPost.skin == "btnCheckbox" && frmPersonalResidencyInput.btnImmigration.skin == "btnCheckbox") {
            var basicConf = {
                message: "Please Select Delivery Option",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Residency Renewal",
                yesLabel: "OK",
                alertHandler: null
            };
            var pspConf = {};
            var infoAlert = kony.ui.Alert(basicConf, pspConf);
            return;
        } else {
            paymentAmountZero();
        }
    }
}

function residencyInputBackEvet() {
    frmResidencyMenu.show();
    frmPersonalResidencyInput.destroy();
}

function collectDeliveryDetails(output) {
    residencyPersonalRenewalDeliveryFeesObject.immigrationFees = output["deliveryDetails"][0]["deliveryFee"]; //rohan did this i dont want to change so repeating
    residencyPersonalRenewalDeliveryFeesObject.immigration = [];
    residencyPersonalRenewalDeliveryFeesObject.immigration.deliveryFee = output["deliveryDetails"][0]["deliveryFee"];
    residencyPersonalRenewalDeliveryFeesObject.immigration.deliveryOptionID = output["deliveryDetails"][0]["deliveryOptionID"];
    residencyPersonalRenewalDeliveryFeesObject.QPostFees = output["deliveryDetailsDTO"][0]["deliveryFee"]; //rohan did this i dont want to change so repeating
    residencyPersonalRenewalDeliveryFeesObject.Qpost = [];
    residencyPersonalRenewalDeliveryFeesObject.Qpost.carrier = output["deliveryDetailsDTO"][0]["carrier"];
    residencyPersonalRenewalDeliveryFeesObject.Qpost.deliveryFee = output["deliveryDetailsDTO"][0]["deliveryFee"];
    residencyPersonalRenewalDeliveryFeesObject.Qpost.deliveryOptionID = output["deliveryDetailsDTO"][0]["deliveryOptionID"];
    residencyPersonalRenewalDeliveryFeesObject.Qpost.departmentType = output["deliveryDetailsDTO"][0]["departmentType"];
    residencyPersonalRenewalDeliveryFeesObject.Qpost.functionCode = output["deliveryDetailsDTO"][0]["functionCode"];
    residencyPersonalRenewalDeliveryFeesObject.Qpost.receivingType = output["deliveryDetailsDTO"][0]["receivingType"];
    residencyPersonalRenewalDeliveryFeesObject.Qpost.returnOldDocument = output["deliveryDetailsDTO"][0]["returnOldDocument"];
    residencyPersonalRenewalDeliveryFeesObject.Qpost.sourceType = output["deliveryDetailsDTO"][0]["sourceType"];
    residencyPersonalRenewalDeliveryFeesObject.Qpost.applierQID = output["deliveryDetailsDTO"][0]["applierQID"];
    residencyPersonalRenewalDeliveryFeesObject.option = "0";
}

function changeQIDSkinToBlack(data) {
    if (data["skin"]) {
        data["skin"] = lblBlackNor;
    }
    return data;
}