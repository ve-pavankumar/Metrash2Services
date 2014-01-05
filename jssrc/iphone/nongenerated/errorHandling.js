function showErrorPopup(messageId) {
    kony.print("inside showErrorPopup " + messageId);
    var inputParams = {
        serviceID: "getErrorMessage",
        messageId: messageId,
        lang: "en"
    };
    appmiddlewareinvokerasync(inputParams, errorServiceCallback);
}

function errorServiceCallback(status, output) {
    if (null != status && status == 400) {
        if (null != output && null != output["opstatus"] && 0 == output["opstatus"]) {
            var basicConf = {
                message: output.messageText,
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Residency Renewal",
                yesLabel: "OK",
                noLabel: "",
                alertHandler: null
            };
            var pspConf = {};
            var infoAlert = kony.ui.Alert(basicConf, pspConf);
            // return;
        }
    }
}