//Form JS File
function frmLoginNew_frmLoginNew_preshow_seq0(eventobject, neworientation) {
    frmLoginNew.txtQID.text = "";
};

function frmLoginNew_txtQID_onTextChange_seq0(eventobject, changedtext) {
    onTextChangeTextBox.call(this);
};

function frmLoginNew_btnLoginBack_onClick_seq0(eventobject) {
    frmLanguageSelect.show();
};

function frmLoginNew_btnLoginSubmit_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function addWidgetsfrmLoginNew() {
    var label1182816738148709 = new kony.ui.Label({
        "id": "label1182816738148709",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.lbl.qid"),
        "skin": "lblRed100"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [7, 5, 0, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 36
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label1182816738151614 = new kony.ui.Label({
        "id": "label1182816738151614",
        "isVisible": true,
        "text": null,
        "skin": "lblDarkgrey"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [7, 5, 0, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 64
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1182816738148707 = new kony.ui.Box({
        "id": "hbox1182816738148707",
        "isVisible": true,
        "skin": "hboxTopLightGrey",
        "focusSkin": "hboxTopLightGrey",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1182816738148707.add(
    label1182816738148709, label1182816738151614);
    var line1182816738148740 = new kony.ui.Line({
        "id": "line1182816738148740",
        "isVisible": true,
        "skin": "lineGrey"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label1182816738148710 = new kony.ui.Label({
        "id": "label1182816738148710",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.lbl.name"),
        "skin": "lblRed100"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [7, 5, 0, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 36
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label1182816738151628 = new kony.ui.Label({
        "id": "label1182816738151628",
        "isVisible": true,
        "text": null,
        "skin": "lblDarkgrey"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [7, 5, 0, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 64
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1182816738148708 = new kony.ui.Box({
        "id": "hbox1182816738148708",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1182816738148708.add(
    label1182816738148710, label1182816738151628);
    var vbox1182816738148706 = new kony.ui.Box({
        "id": "vbox1182816738148706",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1182816738148706.add(
    hbox1182816738148707, line1182816738148740, hbox1182816738148708);
    var hbox1182816738148705 = new kony.ui.Box({
        "id": "hbox1182816738148705",
        "isVisible": true,
        "skin": "hboxRoundedGrey",
        "focusSkin": "hboxRoundedGrey",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 30,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 7, 4, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1182816738148705.add(
    vbox1182816738148706);
    var label1182816738149011 = new kony.ui.Label({
        "id": "label1182816738149011",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.lbl.pincode.note"),
        "skin": "lblGreyLoginNew"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [10, 7, 0, 7],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1182816738148996 = new kony.ui.Box({
        "id": "hbox1182816738148996",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 8, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1182816738148996.add(
    label1182816738149011);
    var label1182816738149032 = new kony.ui.Label({
        "id": "label1182816738149032",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.lbl.pincode"),
        "skin": "lblDarkgrey"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 5, 7, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 35
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtQID = new kony.ui.TextBox2({
        "id": "txtQID",
        "isVisible": true,
        "text": "26581800001",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 11,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmLoginNew_txtQID_onTextChange_seq0,
        "skin": "txtBoxTransRounded",
        "focusSkin": "txtBoxTransRounded"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 4, 10, 4],
        "padding": [2, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var hbox1182816738149022 = new kony.ui.Box({
        "id": "hbox1182816738149022",
        "isVisible": true,
        "skin": "hboxDarkgrey",
        "focusSkin": "hboxDarkgrey",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 0, 4, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1182816738149022.add(
    label1182816738149032, txtQID);
    var btnLoginBack = new kony.ui.Button({
        "id": "btnLoginBack",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.btnback"),
        "skin": "btnBack",
        "focusSkin": "btnBackFcs",
        "onClick": frmLoginNew_btnLoginBack_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [2, 2, 0, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnLoginSubmit = new kony.ui.Button({
        "id": "btnLoginSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.btnsubmit"),
        "skin": "btnNextNorm",
        "focusSkin": "btnNextFcs",
        "onClick": frmLoginNew_btnLoginSubmit_onClick_seq0
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbox19284323084890 = new kony.ui.Box({
        "id": "hbox19284323084890",
        "isVisible": true,
        "skin": "hboxGradiant",
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19284323084890.add(
    btnLoginBack, btnLoginSubmit);
    frmLoginNew.add(
    hbox1182816738148705, hbox1182816738148996, hbox1182816738149022, hbox19284323084890);
};

function frmLoginNewGlobals() {
    var MenuId = [];
    frmLoginNew = new kony.ui.Form2({
        "id": "frmLoginNew",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxLogin],
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "preShow": frmLoginNew_frmLoginNew_preshow_seq0,
        "addWidgets": addWidgetsfrmLoginNew
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