function capturePaymentDetailsForResidencyServices() {
    var paymentDetails = [];
    paymentDetails.totalAmount = frmResidencyPayment.lblAmountValue.text;
    paymentDetails.cctype = frmResidencyPayment.lbCardType.selectedKeyValue[0];
    paymentDetails.ccnumber = frmResidencyPayment.tbCardNumber.text;
    paymentDetails.holdername = frmResidencyPayment.tbHolderName.text;
    //var twoDigityearstring=frmResidencyPayment.calExpiryDate.year+"";
    //paymentDetails.expirationdate=appendZeroToMonth(frmResidencyPayment.calExpiryDate.month)+"/"+twoDigityearstring.substring(2, 4);
    paymentDetails.expirationdate = getCardExpiryDate();
    paymentDetails.cvv2 = frmResidencyPayment.tbCVV.text;
    return paymentDetails;
}

function callPaymentService(paymentDetails) {
    var payment_inputparam = {};
    payment_inputparam["serviceID"] = "RecidencyRenwalComposite";
    payment_inputparam["httpheaders"] = {};
    payment_inputparam["httpconfigs"] = {};
    payment_inputparam["clientQid"] = qid //"27163400125";
    payment_inputparam["serviceId"] = "PRR";
    payment_inputparam["totalAmount"] = paymentDetails.totalAmount;
    payment_inputparam["cctype"] = paymentDetails.cctype;
    payment_inputparam["holdername"] = paymentDetails.holdername;
    payment_inputparam["expirationdate"] = paymentDetails.expirationdate;
    payment_inputparam["cvv2"] = paymentDetails.cvv2;
    payment_inputparam["ccnumber"] = paymentDetails.ccnumber;
    //delivery details
    if (residencyPersonalRenewalDeliveryFeesObject.option == "1") {
        payment_inputparam["carrier"] = residencyPersonalRenewalDeliveryFeesObject.Qpost.carrier;
        payment_inputparam["deliveryFee"] = residencyPersonalRenewalDeliveryFeesObject.Qpost.deliveryFee;
        payment_inputparam["deliveryOptionID"] = residencyPersonalRenewalDeliveryFeesObject.Qpost.deliveryOptionID;
        payment_inputparam["departmentType"] = residencyPersonalRenewalDeliveryFeesObject.Qpost.departmentType;
        payment_inputparam["functionCode"] = residencyPersonalRenewalDeliveryFeesObject.Qpost.functionCode;
        payment_inputparam["receivingType"] = residencyPersonalRenewalDeliveryFeesObject.Qpost.receivingType;
        payment_inputparam["returnOldDocument"] = residencyPersonalRenewalDeliveryFeesObject.Qpost.returnOldDocument;
        payment_inputparam["sourceType"] = residencyPersonalRenewalDeliveryFeesObject.Qpost.sourceType;
        payment_inputparam["applierQID"] = residencyPersonalRenewalDeliveryFeesObject.Qpost.applierQID;
    } else if (residencyPersonalRenewalDeliveryFeesObject.option == "2") {
        payment_inputparam["deliveryFee"] = residencyPersonalRenewalDeliveryFeesObject.immigration.deliveryFee;
        payment_inputparam["deliveryOptionID"] = residencyPersonalRenewalDeliveryFeesObject.immigration.deliveryOptionID;
        payment_inputparam["carrier"] = ""
        payment_inputparam["departmentType"] = "";
        payment_inputparam["functionCode"] = "";
        payment_inputparam["receivingType"] = "";
        payment_inputparam["returnOldDocument"] = "";
        payment_inputparam["sourceType"] = "";
        payment_inputparam["applierQID"] = "";
    }
    payment_inputparam["qid"] = recidencyrenwalObject.qid;
    payment_inputparam["sponserDetailsBulk"] = JSON.stringify(recidencyrenwalObject.selectedRecidencyRenewalBulkData);
    //"[{"fullName":"","arbName4":" ","passportIssuePlace":"","natArabicDesc":"??????? ","engName2":"SAEED","cardFees":"100","qidNum":"24373657525","arbName1":"????? ","personType":"3","renewalPeriod":"1","passportNum":"637945","exitEntryDate":"0001-01-01","passportOwnIndicator":"1","engName4":"","professionCode":"","statusCode":"","exitEntryInd":"","passportissueDate":"2000-08-02","renewFees":"300","arbName3":"??? ???? ","cancelFees":"0","relationArabicDesc":"???","rpExpiryDate":"2013-01-01","engName1":"DHAFYAH","exitPermitFees":"0","numAccompanies":"0","arbName5":"??????? ","sexEnglishDesc":"MALE","relationEnglishDesc":"Work","englishName":"DHAFYAH SAEED   AL-SAADON","arabicNamearabicName":"?????  ????  ??? ????    ???????","relationCode":"0","engName3":"","sexCode":"1","passportExpiryDate":"2018-01-01","natCode":"736","arbName2":"???? ","passportNatEngDesc":"","passportType":"","professionArabicDesc":"","dateOfBirth":"1985-10-25","passportNatCode":"","maxAllowedDurForRenew":"3","natEnglishDesc":"SUDAN","delayFees":"2740","passportNatArabicDesc":"","engName5":"AL-SAADON","sexArabicDesc":"???","feeIndicator":""}]";
    //payment_inputparam["userID"] = "MD3";
    payment_inputparam["ipAddress"] = "172.20.164.42";
    //payment_inputparam["systemName"] = "MOB";
    //payment_inputparam["paymentResponse"] =JSON.stringify(recidencyrenwalObject.paymentDTO;
    payment_inputparam["deliveryDTO"] = JSON.stringify(recidencyrenwalObject.DeliveryDetailsDTO);
    kony.print("I/P params " + payment_inputparam);
    paymentHandle = appmiddlewareinvokerasync(payment_inputparam, callPersonalResidencyResultCallBack);
}

function callPersonalResidencyResultCallBack(status, output) {
    kony.print("Entering into callPaymentCallBack");
    kony.print("status: " + status);
    if (null != status && status == 400) {
        if (output.errorMessage == "") {
            kony.print("callPaymentCallBack output: " + output);
            kony.print("OPSTATUS " + output["opstatus"]);
            if (null != output && null != output["opstatus"] && 0 == output["opstatus"]) {
                output.errorCode = output.errorCode || "";
                var segmentData = [];
                if (output.errorCode != "") {
                    recidencyrenwalObject.paymentDTO = output.paymentResponse;
                    if (null != output.responseSet && output.responseSet.length > 0) {
                        //output.responseSet=[{"qidNum":"1234","rpExpiryDate":"234","duration":"23","duration":"45"}];
                        for (var item in output.responseSet) {
                            var reseltSet = [];
                            var rowItem = output.responseSet[item];
                            reseltSet = {
                                lblPersResQidResult: rowItem.qidNum,
                                lblPersResExpDateResult: rowItem.rpExpiryDate,
                                lblPersResYearResult: rowItem.duration,
                                lblPersResNameResult: getLocaleSpecificDisplayValuesForRecidencyRenewalResult(rowItem.residentEnglishName, rowItem.residentArabicName)
                            }
                            segmentData.push(reseltSet);
                        }
                        frmPersonalResidencyResult.segmentPersResidencyResult.setData(segmentData);
                    }
                }
                frmPersonalResidencyResult.show();
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
            }
        } else {
            var basicConf = {
                message: "Error Code" + output.errorMessage,
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "",
                yesLabel: "OK",
                noLabel: "",
                alertHandler: null
            };
            var pspConf = {};
            var infoAlert = kony.ui.Alert(basicConf, pspConf);
        }
    }
}

function showPaymentConfirmationPopup() {
    var cardNumber = frmResidencyPayment.tbCardNumber.text;
    var holderName = frmResidencyPayment.tbHolderName.text;
    var cvvValue = frmResidencyPayment.tbCVV.text;
    if (cardNumber == "" || holderName == "" || cvvValue == "") {
        var basicConf = {
            message: "Please enter all Payment Details",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Residency Renewal",
            yesLabel: "OK",
            noLabel: "",
            alertHandler: null
        };
        var pspConf = {};
        var infoAlert = kony.ui.Alert(basicConf, pspConf);
    } else {
        var basicConf = {
            message: "Please confirm to submit your request",
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            alertTitle: "Residency Renewal",
            yesLabel: "Yes",
            noLabel: "No",
            alertHandler: confirmationPopupCallback
        };
        var pspConf = {};
        var infoAlert = kony.ui.Alert(basicConf, pspConf);
    }
}

function confirmationPopupCallback(response) {
    if (response == true) {
        executePaymentSubmit();
    } else if (response == false) {}
}

function executePaymentSubmit() {
    var recidencysubmit = capturePaymentDetailsForResidencyServices()
    callPaymentService(recidencysubmit);
}

function jsonTricker(str) {
    var jsonarrayOrobject = "";
    var jsonArray = JSON.parse(str);
    if (jsonArray.len > 1) return str;
    else jsonarrayOrobject = str.substring(1, (str.length - 1));
    return jsonarrayOrobject;
}

function appendZeroToMonth(month) {
    month = month + "";
    var monthInteger = Math.floor(kony.os.toNumber(month));
    if (monthInteger > 9) return month;
    else return "0" + month;
}

function personalResidencyInputSelectedRecords() {
    var selectedRecordCount = 0;
    var fullData = frmPersonalResidencyInput.segResPersonalInput.data;
    for (var item in fullData) {
        if (fullData[item]["clickedInfo"] == "1") {
            selectedRecordCount++;
        }
    }
    kony.print("selectedRecordCount " + selectedRecordCount);
    return selectedRecordCount;
}

function paymentAmountZero() {
    recidencyrenwalObject.finalPaymentAmount = recidencyrenwalObject.finalPaymentAmount || "0";
    var paymentDetails = [];
    var paymentAmount = kony.os.toNumber(recidencyrenwalObject.finalPaymentAmount);
    if (recidencyrenwalObject.finalPaymentAmount == 0) {
        paymentDetails.finalPaymentAmount = "0";
        paymentDetails.cctype = "";
        paymentDetails.ccnumber = "";
        paymentDetails.holdername = "";
        var twoDigityearstring = "";
        paymentDetails.expirationdate = "";
        paymentDetails.cvv2 = "";
        var basicConf = {
            message: "Please confirm to submit your request",
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            alertTitle: "Residency Renewal",
            yesLabel: "Yes",
            noLabel: "No",
            alertHandler: confirmationPopupCallback
        };
        var pspConf = {};
        var infoAlert = kony.ui.Alert(basicConf, pspConf);
    } else {
        frmResidencyPayment.show();
    }
}

function populateYearComboBox() {
    var d = new Date();
    var currentYear = Math.floor(kony.os.toNumber(d.getFullYear()));
    var yearComboBoxData = [];
    for (var i = currentYear; i >= currentYear && i <= currentYear + 10; i++) {
        var yearComboBoxDataItem = []
        var iString = i + "";
        yearComboBoxDataItem[0] = iString;
        yearComboBoxDataItem[1] = iString;
        yearComboBoxData.push(yearComboBoxDataItem);
    }
    frmResidencyPayment.cmbYear.masterData = yearComboBoxData;
}

function residencyPaymentPostShow() {
    populateYearComboBox();
    frmResidencyPayment.lblAmountValue.text = recidencyrenwalObject.finalPaymentAmount + "";
}

function getCardExpiryDate() {
    var date = "";
    var month = appendZeroToMonth(frmResidencyPayment.cmbMonth.selectedKey);
    var yearString = frmResidencyPayment.cmbYear.selectedKey + "";
    var year = yearString.substring(2, 4);
    date = month + "/" + year;
    kony.print(date);
    return date;
}

function getLocaleSpecificDisplayValuesForRecidencyRenewalResult(engName, arabicName) {
    //locale="ar_QA";
    var name = "";
    if (locale == "ar_QA") {
        name = arabicName;
    } else if (locale = "en_QA") {
        name = engName;
    }
    return name;
}

function PersonalResidencyResultPostShow() {
    mapSponsorDetailsOnDisplay(recidencyrenwalObject.sponsorDeatils["sponsorEnglishName"], recidencyrenwalObject.sponsorDeatils["sponsorArabicName"], recidencyrenwalObject.sponsorDeatils["sponsorQidNum"], frmPersonalResidencyResult);
}

function showAlert(message, title) {
    var basicConf = {
        message: message,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: title,
        yesLabel: "OK",
        noLabel: "",
        alertHandler: null
    };
    var pspConf = {};
    var infoAlert = kony.ui.Alert(basicConf, pspConf);
}