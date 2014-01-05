function changeLocaleToEnglish() {
    if (kony.i18n.getCurrentLocale() != "en") kony.i18n.setCurrentLocaleAsync("en", onsuccessLocaleChangeToEnglishCallback, onfailiureLocaleChangeCallback, "")
    else frmActivation.show();
}

function onsuccessLocaleChangeToEnglishCallback() {
    locale = "en";
    frmActivation.show();
}

function changeLocaleToArabic() {
    if (kony.i18n.getCurrentLocale() != "ar") kony.i18n.setCurrentLocaleAsync("ar", onsuccessLocaleChangeToArabicCallback, onfailiureLocaleChangeCallback, "")
    else frmActivation.show();
}

function onsuccessLocaleChangeToArabicCallback() {
    locale = "ar";
    frmActivation.show();
}

function onfailiureLocaleChangeCallback() {
    kony.print("locale chage fail");
}