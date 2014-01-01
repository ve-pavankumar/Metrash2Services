//@Method Name : setEnglishLanguage()
//@Desc : This Method call i18n api to set current local to English
//@Param : --
//@Callback: onsuccesscallbackEng(),onfailurecallbackEng()
//@Developer : Bhalchandra Deogaonkar
function setEnglishLanguage() {
    kony.print("@@@@English Language Set@@@@");
    frmActivation.show();
    //kony.i18n.setCurrentLocaleAsync("en_US", onsuccesscallbackEng, onfailurecallbackEng);
}

function onsuccesscallbackEng() {
    //kony.print("@@@@ onsuccesscallbackEng Locale @@@@ : "+kony.i18n.getCurrentDeviceLocale());
    frmActivation.show();
}

function onfailurecallbackEng() {
    kony.print("@@@@Language selection failed..@@@@");
}
//@Method Name : setArabicLanguage()
//@Desc : This Method call i18n api to set current local to Arabic
//@Param : --
//@Callback: onsuccesscallbackAra(),onfailurecallbackAra()
//@Developer : Bhalchandra Deogaonkar
function setArabicLanguage() {
    kony.print("@@@@Arabic Language Set@@@@");
    frmActivation.show();
    //kony.i18n.setCurrentLocaleAsync("ar_QA", onsuccesscallbackAra, onfailurecallbackAra);
}

function onsuccesscallbackAra() {
    kony.print("@@@@ onsuccesscallbackAra Locale @@@@ : " + kony.i18n.getCurrentDeviceLocale());
    frmActivation.show();
}

function onfailurecallbackAra() {
    kony.print("@@@@Language selection failed..@@@@");
}
//@Method Name : showAlertForDisable()
//@Desc : This Method Shows Alert to user
//@Param : --
//@Developer : Bhalchandra Deogaonkar
function showAlertForDisable(eventobject) {
    var showAlert = kony.ui.Alert({
        "message": kony.i18n.getLocalizedString("alert.disableservice"),
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": kony.i18n.getLocalizedString("m.app.title"),
        "yesLabel": kony.i18n.getLocalizedString("m.btnok"),
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
}

function destoyActivationScreen() {
    frmActivation.destroy();
}