//Form JS File
function frmMainMenu_button19320370194647_onClick_seq0(eventobject) {
    showAlertForDisable.call(this, eventobject);
};

function frmMainMenu_button19320370194649_onClick_seq0(eventobject) {
    frmResidencyMenu.show();
};

function frmMainMenu_button19320370194651_onClick_seq0(eventobject) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "Service is not ready..",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": kony.i18n.getLocalizedString("m.app.title"),
        "yesLabel": "Ok",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function frmMainMenu_button19320370194838_onClick_seq0(eventobject) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "Service is not ready..",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": kony.i18n.getLocalizedString("m.app.title"),
        "yesLabel": "Ok",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function frmMainMenu_button19320370194844_onClick_seq0(eventobject) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "Service is not ready..",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": kony.i18n.getLocalizedString("m.app.title"),
        "yesLabel": "Ok",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function frmMainMenu_button19320370194850_onClick_seq0(eventobject) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "Service is not ready..",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": kony.i18n.getLocalizedString("m.app.title"),
        "yesLabel": "Ok",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function frmMainMenu_button19320370195198_onClick_seq0(eventobject) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "Service is not ready..",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": kony.i18n.getLocalizedString("m.app.title"),
        "yesLabel": "Ok",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function frmMainMenu_button19320370195204_onClick_seq0(eventobject) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "Service is not ready..",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": kony.i18n.getLocalizedString("m.app.title"),
        "yesLabel": "Ok",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function frmMainMenu_button19320370195210_onClick_seq0(eventobject) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "Service is not ready..",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": kony.i18n.getLocalizedString("m.app.title"),
        "yesLabel": "Ok",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function addWidgetsfrmMainMenu() {
    var button19320370194647 = new kony.ui.Button({
        "id": "button19320370194647",
        "isVisible": true,
        "text": null,
        "skin": "btnExitPermit",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenu_button19320370194647_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label19320370194648 = new kony.ui.Label({
        "id": "label19320370194648",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.exitpermit"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 25
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox19320370194644 = new kony.ui.Box({
        "id": "vbox19320370194644",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 31,
        "margin": [10, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19320370194644.add(
    button19320370194647, label19320370194648);
    var button19320370194649 = new kony.ui.Button({
        "id": "button19320370194649",
        "isVisible": true,
        "text": null,
        "skin": "btnResidency",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenu_button19320370194649_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 76
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label19320370194650 = new kony.ui.Label({
        "id": "label19320370194650",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.residency"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox19320370194645 = new kony.ui.Box({
        "id": "vbox19320370194645",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 35,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19320370194645.add(
    button19320370194649, label19320370194650);
    var button19320370194651 = new kony.ui.Button({
        "id": "button19320370194651",
        "isVisible": true,
        "text": null,
        "skin": "btnTraffic",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenu_button19320370194651_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 76
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label19320370194652 = new kony.ui.Label({
        "id": "label19320370194652",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.traffic"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox19320370194646 = new kony.ui.Box({
        "id": "vbox19320370194646",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [3, 0, 10, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19320370194646.add(
    button19320370194651, label19320370194652);
    var hbox19320370194643 = new kony.ui.Box({
        "id": "hbox19320370194643",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 21,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 15, 0, 7],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19320370194643.add(
    vbox19320370194644, vbox19320370194645, vbox19320370194646);
    var button19320370194838 = new kony.ui.Button({
        "id": "button19320370194838",
        "isVisible": true,
        "text": null,
        "skin": "btnQueries",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenu_button19320370194838_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label19320370194840 = new kony.ui.Label({
        "id": "label19320370194840",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.queries"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 25
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox19320370194836 = new kony.ui.Box({
        "id": "vbox19320370194836",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 31,
        "margin": [10, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19320370194836.add(
    button19320370194838, label19320370194840);
    var button19320370194844 = new kony.ui.Button({
        "id": "button19320370194844",
        "isVisible": true,
        "text": null,
        "skin": "btnEgate",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenu_button19320370194844_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 76
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label19320370194846 = new kony.ui.Label({
        "id": "label19320370194846",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.egate"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox19320370194842 = new kony.ui.Box({
        "id": "vbox19320370194842",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 36,
        "margin": [0, 0, 0, 0],
        "padding": [3, 0, 3, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19320370194842.add(
    button19320370194844, label19320370194846);
    var button19320370194850 = new kony.ui.Button({
        "id": "button19320370194850",
        "isVisible": true,
        "text": null,
        "skin": "btnVisa",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenu_button19320370194850_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 76
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label19320370194852 = new kony.ui.Label({
        "id": "label19320370194852",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.visa"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox19320370194848 = new kony.ui.Box({
        "id": "vbox19320370194848",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [3, 0, 10, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19320370194848.add(
    button19320370194850, label19320370194852);
    var hbox19320370194834 = new kony.ui.Box({
        "id": "hbox19320370194834",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 21,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 7, 0, 7],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19320370194834.add(
    vbox19320370194836, vbox19320370194842, vbox19320370194848);
    var button19320370195198 = new kony.ui.Button({
        "id": "button19320370195198",
        "isVisible": true,
        "text": null,
        "skin": "btnSetting",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenu_button19320370195198_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label19320370195200 = new kony.ui.Label({
        "id": "label19320370195200",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.setting"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 25
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox19320370195196 = new kony.ui.Box({
        "id": "vbox19320370195196",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 31,
        "margin": [10, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19320370195196.add(
    button19320370195198, label19320370195200);
    var button19320370195204 = new kony.ui.Button({
        "id": "button19320370195204",
        "isVisible": true,
        "text": null,
        "skin": "btnGenServices",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenu_button19320370195204_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 76
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label19320370195206 = new kony.ui.Label({
        "id": "label19320370195206",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.generalservice"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox19320370195202 = new kony.ui.Box({
        "id": "vbox19320370195202",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 36,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19320370195202.add(
    button19320370195204, label19320370195206);
    var button19320370195210 = new kony.ui.Button({
        "id": "button19320370195210",
        "isVisible": true,
        "text": null,
        "skin": "btnHRServices",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenu_button19320370195210_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 76
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label19320370195212 = new kony.ui.Label({
        "id": "label19320370195212",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.hrservice"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox19320370195208 = new kony.ui.Box({
        "id": "vbox19320370195208",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [3, 0, 10, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19320370195208.add(
    button19320370195210, label19320370195212);
    var hbox19320370195194 = new kony.ui.Box({
        "id": "hbox19320370195194",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 21,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 7, 0, 15],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19320370195194.add(
    vbox19320370195196, vbox19320370195202, vbox19320370195208);
    frmMainMenu.add(
    hbox19320370194643, hbox19320370194834, hbox19320370195194);
};

function frmMainMenuGlobals() {
    var MenuId = [];
    frmMainMenu = new kony.ui.Form2({
        "id": "frmMainMenu",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxLogin],
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "addWidgets": addWidgetsfrmMainMenu
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};