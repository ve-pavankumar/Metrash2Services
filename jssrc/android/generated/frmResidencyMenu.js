//Form JS File
function frmResidencyMenu_button19320370194647_onClick_seq0(eventobject) {
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

function frmResidencyMenu_button19320370194651_onClick_seq0(eventobject) {
    callPersonalRenewalResidencyService.call(this);
    /* 
frmPersonalResidencyInput.show();
	
 */
};

function frmResidencyMenu_button19320370194838_onClick_seq0(eventobject) {
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

function frmResidencyMenu_button19320370194844_onClick_seq0(eventobject) {
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

function frmResidencyMenu_button19320370194850_onClick_seq0(eventobject) {
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

function addWidgetsfrmResidencyMenu() {
    var button19320370194647 = new kony.ui.Button({
        "id": "button19320370194647",
        "isVisible": true,
        "text": null,
        "skin": "btnPersCancel",
        "focusSkin": "btnFocus",
        "onClick": frmResidencyMenu_button19320370194647_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 75
    }, {});
    var label19320370194648 = new kony.ui.Label({
        "id": "label19320370194648",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.res.perscancel"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 25
    }, {});
    var vbox19320370194644 = new kony.ui.Box({
        "id": "vbox19320370194644",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 31,
        "margin": [4, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "skin": "btnCompanyRenewal",
        "focusSkin": "btnFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 76
    }, {});
    var label19320370194650 = new kony.ui.Label({
        "id": "label19320370194650",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.res.comprenewal"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {});
    var vbox19320370194645 = new kony.ui.Box({
        "id": "vbox19320370194645",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 35,
        "margin": [1, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "skin": "btnPersonalRenewal",
        "focusSkin": "btnFocus",
        "onClick": frmResidencyMenu_button19320370194651_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 76
    }, {});
    var label19320370194652 = new kony.ui.Label({
        "id": "label19320370194652",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.res.persrenewal"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {});
    var vbox19320370194646 = new kony.ui.Box({
        "id": "vbox19320370194646",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [1, 0, 4, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "margin": [0, 5, 0, 3],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19320370194643.add(
    vbox19320370194644, vbox19320370194645, vbox19320370194646);
    var button19320370194838 = new kony.ui.Button({
        "id": "button19320370194838",
        "isVisible": true,
        "text": null,
        "skin": "btnSepAccPassport",
        "focusSkin": "btnFocus",
        "onClick": frmResidencyMenu_button19320370194838_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 75
    }, {});
    var label19320370194840 = new kony.ui.Label({
        "id": "label19320370194840",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.res.sepaccpass"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 25
    }, {});
    var vbox19320370194836 = new kony.ui.Box({
        "id": "vbox19320370194836",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 31,
        "margin": [4, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "skin": "btnChangePassport",
        "focusSkin": "btnFocus",
        "onClick": frmResidencyMenu_button19320370194844_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 76
    }, {});
    var label19320370194846 = new kony.ui.Label({
        "id": "label19320370194846",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.res.changepass"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {});
    var vbox19320370194842 = new kony.ui.Box({
        "id": "vbox19320370194842",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 36,
        "margin": [0, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "skin": "btnCompanyCancel",
        "focusSkin": "btnFocus",
        "onClick": frmResidencyMenu_button19320370194850_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 76
    }, {});
    var label19320370194852 = new kony.ui.Label({
        "id": "label19320370194852",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("menu.res.compcancel"),
        "skin": "lblBlackNorm80"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 24
    }, {});
    var vbox19320370194848 = new kony.ui.Box({
        "id": "vbox19320370194848",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [1, 0, 4, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "margin": [0, 3, 0, 3],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19320370194834.add(
    vbox19320370194836, vbox19320370194842, vbox19320370194848);
    frmResidencyMenu.add(
    hbox19320370194643, hbox19320370194834);
};

function frmResidencyMenuGlobals() {
    var MenuId = [];
    frmResidencyMenu = new kony.ui.Form2({
        "id": "frmResidencyMenu",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox192843230833323],
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "addWidgets": addWidgetsfrmResidencyMenu
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