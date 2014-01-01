function capturePaymentDetailsForResidencyServices() {
    var paymentDetails = [];
    paymentDetails.totalAmount = frmResidencyPayment.lblAmountValue.text;
    paymentDetails.cctype = frmResidencyPayment.lbCardType.selectedKeyValue[0];
    paymentDetails.ccnumber = frmResidencyPayment.tbCardNumber.text;
    paymentDetails.holdername = frmResidencyPayment.tbHolderName.text;
    var twoDigityearstring = frmResidencyPayment.calExpiryDate.year + "";
    paymentDetails.expirationdate = appendZeroToMonth(frmResidencyPayment.calExpiryDate.month) + "/" + twoDigityearstring.substring(2, 4);
    paymentDetails.cvv2 = frmResidencyPayment.tbCVV.text;
    return paymentDetails;
}

function callPaymentService(paymentDetails) {
    var payment_inputparam = {};
    payment_inputparam["serviceID"] = "RecidencyRenwalComposite";
    payment_inputparam["httpheaders"] = {};
    payment_inputparam["httpconfigs"] = {};
    payment_inputparam["clientQid"] = "27163400125";
    payment_inputparam["serviceId"] = "PRR";
    payment_inputparam["totalAmount"] = paymentDetails.totalAmount;
    payment_inputparam["cctype"] = paymentDetails.cctype;
    payment_inputparam["holdername"] = paymentDetails.holdername;
    payment_inputparam["expirationdate"] = paymentDetails.expirationdate;
    payment_inputparam["cvv2"] = paymentDetails.cvv2;
    payment_inputparam["ccnumber"] = paymentDetails.ccnumber;
    payment_inputparam["qid"] = recidencyrenwalObject.qid;
    payment_inputparam["sponserDetailsBulk"] = JSON.stringify(recidencyrenwalObject.selectedRecidencyRenewalBulkData);
    //"[{"fullName":"","arbName4":" ","passportIssuePlace":"","natArabicDesc":"??????? ","engName2":"SAEED","cardFees":"100","qidNum":"24373657525","arbName1":"????? ","personType":"3","renewalPeriod":"1","passportNum":"637945","exitEntryDate":"0001-01-01","passportOwnIndicator":"1","engName4":"","professionCode":"","statusCode":"","exitEntryInd":"","passportissueDate":"2000-08-02","renewFees":"300","arbName3":"??? ???? ","cancelFees":"0","relationArabicDesc":"???","rpExpiryDate":"2013-01-01","engName1":"DHAFYAH","exitPermitFees":"0","numAccompanies":"0","arbName5":"??????? ","sexEnglishDesc":"MALE","relationEnglishDesc":"Work","englishName":"DHAFYAH SAEED   AL-SAADON","arabicNamearabicName":"?????  ????  ??? ????    ???????","relationCode":"0","engName3":"","sexCode":"1","passportExpiryDate":"2018-01-01","natCode":"736","arbName2":"???? ","passportNatEngDesc":"","passportType":"","professionArabicDesc":"","dateOfBirth":"1985-10-25","passportNatCode":"","maxAllowedDurForRenew":"3","natEnglishDesc":"SUDAN","delayFees":"2740","passportNatArabicDesc":"","engName5":"AL-SAADON","sexArabicDesc":"???","feeIndicator":""}]";
    //payment_inputparam["userID"] = "MD3";
    payment_inputparam["ipAddress"] = "172.20.164.42";
    //payment_inputparam["systemName"] = "MOB";
    //payment_inputparam["paymentResponse"] =JSON.stringify(recidencyrenwalObject.paymentDTO;
    payment_inputparam["deliveryDTO"] = JSON.stringify(recidencyrenwalObject.DeliveryDetailsDTO);
    kony.print("I/P params " + payment_inputparam);
    paymentHandle = appmiddlewareinvokerasync(payment_inputparam, callPaymentCallBack);
}

function callPaymentCallBack(status, output) {
    kony.print("Entering into callPaymentCallBack");
    kony.print("status: " + status);
    if (null != status && status == 400) {
        kony.print("callPaymentCallBack output: " + output);
        kony.print("OPSTATUS " + output["opstatus"]);
        if (null != output && null != output["opstatus"] && 0 == output["opstatus"]) {
            recidencyrenwalObject.paymentDTO = output.paymentResponse;
        }
    }
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

function paymentAmountZero() {
    var paymentDetails = [];
    var paymentAmount = kony.os.toNumber(recidencyrenwalObject.totalAmount);
    if (recidencyrenwalObject.totalAmount == 0) {
        paymentDetails.totalAmount = "0";
        paymentDetails.cctype = "";
        paymentDetails.ccnumber = "";
        paymentDetails.holdername = "";
        var twoDigityearstring = "";
        paymentDetails.expirationdate = "";
        paymentDetails.cvv2 = "";
        executePaymentSubmit();
    } else {
        frmResidencyPayment.show();
    }
}