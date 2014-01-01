//startup.js file
function Metrash2Rapreappinit_seq0(params) {
    initGlobalVaribles.call(this);
};
var globalhttpheaders = {};
var appConfig = {
    appId: "Metrash2Ra",
    appName: "Metrash2Services",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "mdstest.moi.gov.qa",
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://mdstest.moi.gov.qa/middleware/MWServlet",
    secureurl: "https://mdstest.moi.gov.qa/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeheaderFrmLang();
    initializeheaderfrmLogin();
    initializeheaderMainMenu();
    initializeheaderResidencyMenu();
    kony.application.setAppHeaders([hbox117712665799116, hbox192843230833323, hbox3323200773, hboxLogin]);
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
        applyMarginPaddingInBCGMode: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        preappinit: initGlobalVaribles,
        init: appInit,
        showstartupform: function() {
            frmLanguageSelect.show();
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