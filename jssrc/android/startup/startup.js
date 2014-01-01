//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "MetrashTwo",
    appName: "Metrash",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "mdstest.moi.gov.qa/admin",
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://mdstest.moi.gov.qa/admin/middleware/MWServlet",
    secureurl: "https://mdstest.moi.gov.qa/admin/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeheaderFrmLang();
    initializeheaderfrmLogin();
    initializeheaderMainMenu();
    initializeheaderResidencyMenu();
    frmActivationGlobals();
    frmLanguageSelectGlobals();
    frmLoginNewGlobals();
    frmMainMenuGlobals();
    frmPersonalResidencyDetailsGlobals();
    frmPersonalResidencyInputGlobals();
    frmPersonalResidencyResultGlobals();
    frmResidencyMenuGlobals();
    frmResidencyPaymentGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmResidencyMenu.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("ar_QA", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;