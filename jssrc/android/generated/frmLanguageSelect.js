//Form JS File
function frmLanguageSelect_btnAraLang_onClick_seq0(eventobject) {
    setArabicLanguage.call(this);
};

function frmLanguageSelect_btnEngLang_onClick_seq0(eventobject) {
    setEnglishLanguage.call(this);
};

function addWidgetsfrmLanguageSelect() {
    var label1177126657101441 = new kony.ui.Label({
        "id": "label1177126657101441",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.lang.welcomeara"),
        "skin": "lblBlack80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 0
    }, {});
    var hbox1177126657101439 = new kony.ui.Box({
        "id": "hbox1177126657101439",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_CENTER,
        "margin": [0, 4, 0, 4],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1177126657101439.add(
    label1177126657101441);
    var label1177126657101442 = new kony.ui.Label({
        "id": "label1177126657101442",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.lang.welcomeeng"),
        "skin": "lblBlack80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 0
    }, {});
    var hbox1177126657101440 = new kony.ui.Box({
        "id": "hbox1177126657101440",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_CENTER,
        "margin": [0, 0, 0, 4],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1177126657101440.add(
    label1177126657101442);
    var image240127117525200 = new kony.ui.Image2({
        "id": "image240127117525200",
        "isVisible": true,
        "src": "logoarabic2.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 10, 0, 7],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {});
    var label23461460889969 = new kony.ui.Label({
        "id": "label23461460889969",
        "isVisible": true,
        "text": "v.1.3.19",
        "skin": "skinVersionNo"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var label23461460889970 = new kony.ui.Label({
        "id": "label23461460889970",
        "isVisible": true,
        "text": "bundle 1.3.35",
        "skin": "skinVersionNo"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var hbox23461460889968 = new kony.ui.Box({
        "id": "hbox23461460889968",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 20, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox23461460889968.add(
    label23461460889969, label23461460889970);
    var btnAraLang = new kony.ui.Button({
        "id": "btnAraLang",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.lang.buttonara"),
        "skin": "btnNextNorm",
        "focusSkin": "btnNextFcs",
        "onClick": frmLanguageSelect_btnAraLang_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [4, 2, 0, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var btnEngLang = new kony.ui.Button({
        "id": "btnEngLang",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.lang.buttoneng"),
        "skin": "btnNextNorm",
        "focusSkin": "btnNextFcs",
        "onClick": frmLanguageSelect_btnEngLang_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [4, 2, 0, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var hboxcompanyvisa = new kony.ui.Box({
        "id": "hboxcompanyvisa",
        "isVisible": true,
        "skin": "hboxGradiant",
        "focusSkin": "hboxGradiant",
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxcompanyvisa.add(
    btnAraLang, btnEngLang);
    frmLanguageSelect.add(
    hbox1177126657101439, hbox1177126657101440, image240127117525200, hbox23461460889968, hboxcompanyvisa);
};

function frmLanguageSelectGlobals() {
    var MenuId = [];
    frmLanguageSelect = new kony.ui.Form2({
        "id": "frmLanguageSelect",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox117712665799116],
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "addWidgets": addWidgetsfrmLanguageSelect
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};