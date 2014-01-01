//Form JS File
function frmResidencyPayment_frmResidencyPayment_postshow_seq0(eventobject, neworientation) {
    residencyPaymentPostShow.call(this);
};

function frmResidencyPayment_btnPersResPaymentBack_onClick_seq0(eventobject) {
    frmPersonalResidencyInput.show();
};

function frmResidencyPayment_btnPersResPaymentSubmit_onClick_seq0(eventobject) {
    executePaymentSubmit.call(this);
    frmPersonalResidencyResult.show();
};

function addWidgetsfrmResidencyPayment() {
    var lblCreditCardInfo = new kony.ui.Label({
        "id": "lblCreditCardInfo",
        "isVisible": true,
        "text": "Enter your Credit Card Informations",
        "skin": "lblBlackBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAmount = new kony.ui.Label({
        "id": "lblAmount",
        "isVisible": true,
        "text": "Amount (QAR)",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAmountValue = new kony.ui.Label({
        "id": "lblAmountValue",
        "isVisible": true,
        "text": "2200.00",
        "skin": "lblBlackBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 55
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hboxAmount = new kony.ui.Box({
        "id": "hboxAmount",
        "isVisible": true,
        "skin": "hboxWhiteRound",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [7, 16, 7, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxAmount.add(
    lblAmount, lblAmountValue);
    var lblCardType = new kony.ui.Label({
        "id": "lblCardType",
        "isVisible": true,
        "text": "Card Type",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 7, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lbCardType = new kony.ui.ListBox({
        "id": "lbCardType",
        "isVisible": true,
        "masterData": [
            ["1", "Master Card"],
            ["2", "Visa"]
        ],
        "selectedKey": "1",
        "skin": "listboxNormal",
        "focusSkin": "listboxFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 7, 7, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "dropDownImage": null,
        "placeholder": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lblCardNumber = new kony.ui.Label({
        "id": "lblCardNumber",
        "isVisible": true,
        "text": "Card Number",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbCardNumber = new kony.ui.TextBox2({
        "id": "tbCardNumber",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "txtBoxTransRounded",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 7,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
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
    var lblHolderName = new kony.ui.Label({
        "id": "lblHolderName",
        "isVisible": true,
        "text": "Holder Name",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbHolderName = new kony.ui.TextBox2({
        "id": "tbHolderName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "txtBoxTransRounded",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 7,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
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
    var lblExpiryDate = new kony.ui.Label({
        "id": "lblExpiryDate",
        "isVisible": true,
        "text": "Expiry Date",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var calExpiryDate = new kony.ui.Calendar({
        "id": "calExpiryDate",
        "isVisible": true,
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "placeholder": null,
        "skin": "calNormal",
        "focusSkin": "calFocus",
        "viewType": constants.CALENDAR_VIEW_TYPE_WHEEL_POPUP,
        "calendarIcon": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 0, 7, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var lblCVV = new kony.ui.Label({
        "id": "lblCVV",
        "isVisible": true,
        "text": "CVV",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbCVV = new kony.ui.TextBox2({
        "id": "tbCVV",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "txtBoxTransRounded",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 7,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
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
    var btnPersResPaymentBack = new kony.ui.Button({
        "id": "btnPersResPaymentBack",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.btnback"),
        "skin": "btnBack",
        "focusSkin": "btnBackFcs",
        "onClick": frmResidencyPayment_btnPersResPaymentBack_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [6, 5, 0, 5],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnPersResPaymentSubmit = new kony.ui.Button({
        "id": "btnPersResPaymentSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.btnsubmit"),
        "skin": "btnNextNorm",
        "focusSkin": "btnNextFcs",
        "onClick": frmResidencyPayment_btnPersResPaymentSubmit_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [10, 5, 0, 5],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
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
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19284323084890.add(
    btnPersResPaymentBack, btnPersResPaymentSubmit);
    frmResidencyPayment.add(
    lblCreditCardInfo, hboxAmount, lblCardType, lbCardType, lblCardNumber, tbCardNumber, lblHolderName, tbHolderName, lblExpiryDate, calExpiryDate, lblCVV, tbCVV, hbox19284323084890);
};

function frmResidencyPaymentGlobals() {
    var MenuId = [];
    frmResidencyPayment = new kony.ui.Form2({
        "id": "frmResidencyPayment",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox3323200773],
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "postShow": frmResidencyPayment_frmResidencyPayment_postshow_seq0,
        "addWidgets": addWidgetsfrmResidencyPayment
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
        "titleBar": true,
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