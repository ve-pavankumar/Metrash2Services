//Form JS File
function frmPersonalResidencyInput_btnPersResCheckbox_onClick_seq0(eventobject, context) {
    checkboxClicked.call(this);
};

function frmPersonalResidencyInput_btnYear_onClick_seq0(eventobject, context) {
    yearButtonClicked.call(this);
};

function frmPersonalResidencyInput_btnPersResDetails_onClick_seq0(eventobject, context) {
    frmPersonalResidencyDetails.show();
    /* 
detailsIconClicked.call(this);

 */
};

function frmPersonalResidencyInput_btnPersResInputBack_onClick_seq0(eventobject) {
    frmResidencyMenu.show();
};

function frmPersonalResidencyInput_btnPersResInputSubmit_onClick_seq0(eventobject) {
    frmResidencyPayment.show();
};

function addWidgetsfrmPersonalResidencyInput() {
    var label1953273106241700 = new kony.ui.Label({
        "id": "label1953273106241700",
        "isVisible": true,
        "text": "QID",
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {});
    var label1953273106241701 = new kony.ui.Label({
        "id": "label1953273106241701",
        "isVisible": true,
        "text": "12345678901",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 84
    }, {});
    var hbox1953273106238085 = new kony.ui.Box({
        "id": "hbox1953273106238085",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 57,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1953273106238085.add(
    label1953273106241700, label1953273106241701);
    var label1953273106241699 = new kony.ui.Label({
        "id": "label1953273106241699",
        "isVisible": true,
        "text": "TMAM IBRAHIM AL HAMAD",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1953273106241418 = new kony.ui.Box({
        "id": "hbox1953273106241418",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 43,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1953273106241418.add(
    label1953273106241699);
    var vbox1953273106233352 = new kony.ui.Box({
        "id": "vbox1953273106233352",
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
    vbox1953273106233352.add(
    hbox1953273106238085, hbox1953273106241418);
    var hbox1953273106183651 = new kony.ui.Box({
        "id": "hbox1953273106183651",
        "isVisible": true,
        "skin": "hboxQidDetails",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 3, 3, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1953273106183651.add(
    vbox1953273106233352);
    var lblPress = new kony.ui.Label({
        "id": "lblPress",
        "isVisible": true,
        "text": "Please Press",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 28
    }, {});
    var imgCheckboxDisplay = new kony.ui.Image2({
        "id": "imgCheckboxDisplay",
        "isVisible": true,
        "src": "btn_check_off.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {});
    var lblChooseQid = new kony.ui.Label({
        "id": "lblChooseQid",
        "isVisible": true,
        "text": "to Choose the QID's",
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var hbox195327310624641 = new kony.ui.Box({
        "id": "hbox195327310624641",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 3, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox195327310624641.add(
    lblPress, imgCheckboxDisplay, lblChooseQid);
    var lblQidName = new kony.ui.Label({
        "id": "lblQidName",
        "isVisible": true,
        "text": "QID/Name",
        "skin": "lblWhite"
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
    var lblExpiryDateDisplay = new kony.ui.Label({
        "id": "lblExpiryDateDisplay",
        "isVisible": true,
        "text": "Expiry Date",
        "skin": "lblWhite"
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
    var lblYear = new kony.ui.Label({
        "id": "lblYear",
        "isVisible": true,
        "text": "Year",
        "skin": "lblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20
    }, {});
    var hbxResidencyPersInput = new kony.ui.Box({
        "id": "hbxResidencyPersInput",
        "isVisible": true,
        "skin": "hboxHeaderMenu",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxResidencyPersInput.add(
    lblQidName, lblExpiryDateDisplay, lblYear);
    var segResPersonalInputbox = new kony.ui.Box({
        "id": "segResPersonalInputbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 13
    }, {});
    var segResPersonalInput = new kony.ui.SegmentedUI2({
        "id": "segResPersonalInput",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "btnPersResDetails": "btnPersResDetails",
            "sex": "sex",
            "workFees": "workFees",
            "maxAllowDuration": "maxAllowDuration",
            "qid": "qid",
            "relation": "relation",
            "btnYear": "btnYear",
            "lblQID": "lblQID",
            "lblName": "lblName",
            "hbxTop": "hbxTop",
            "renewFees": "renewFees",
            "btnPersResCheckbox": "btnPersResCheckbox",
            "hbxBottom": "hbxBottom",
            "lblExpiryDate": "lblExpiryDate",
            "cancelFees": "cancelFees",
            "nationality": "nationality",
            "residencyDate": "residencyDate",
            "cardFees": "cardFees",
            "exitPermitFees": "exitPermitFees",
            "age": "age",
            "dob": "dob",
            "clickedInfo": "clickedInfo",
            "delayFees": "delayFees",
            "PassportNo": "PassportNo"
        },
        "data": [{
            "btnPersResDetails": "test",
            "sex": "",
            "workFees": "",
            "maxAllowDuration": "",
            "qid": "",
            "relation": "",
            "btnYear": "1",
            "lblQID": "24373657525",
            "lblName": "Wajiha Rabia Parera",
            "renewFees": "",
            "btnPersResCheckbox": "test",
            "lblExpiryDate": "2013-01-01",
            "cancelFees": "",
            "nationality": "",
            "residencyDate": "",
            "cardFees": "",
            "exitPermitFees": "",
            "dob": "",
            "age": "",
            "clickedInfo": "",
            "delayFees": "",
            "PassportNo": ""
        }, {
            "btnPersResDetails": "test",
            "sex": "",
            "workFees": "",
            "maxAllowDuration": "",
            "qid": "",
            "relation": "",
            "btnYear": "1",
            "lblQID": "12345678901",
            "lblName": "Wajiha Rabia Parea",
            "renewFees": "",
            "btnPersResCheckbox": "test",
            "lblExpiryDate": "2013-01-01",
            "cancelFees": "",
            "nationality": "",
            "residencyDate": "",
            "cardFees": "",
            "exitPermitFees": "",
            "dob": "",
            "age": "",
            "clickedInfo": "",
            "delayFees": "",
            "PassportNo": ""
        }, {
            "btnPersResDetails": "test",
            "sex": "",
            "workFees": "",
            "maxAllowDuration": "",
            "qid": "",
            "relation": "",
            "btnYear": "1",
            "lblQID": "23456789011",
            "lblName": "TMAM IBRAHIM AL HAMAD",
            "renewFees": "",
            "btnPersResCheckbox": "test",
            "lblExpiryDate": "2015-01-01",
            "cancelFees": "",
            "nationality": "",
            "residencyDate": "",
            "cardFees": "",
            "exitPermitFees": "",
            "dob": "",
            "age": "",
            "clickedInfo": "",
            "delayFees": "",
            "PassportNo": ""
        }],
        "rowTemplate": segResPersonalInputbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "alternateRowSkin": "sengreyNorm",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "pressedSkin": "seg2Focus"
    });
    var btnPersResCheckbox = new kony.ui.Button({
        "id": "btnPersResCheckbox",
        "isVisible": true,
        "skin": "btnCheckbox",
        "focusSkin": "btnFocus",
        "onClick": frmPersonalResidencyInput_btnPersResCheckbox_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var lblQID = new kony.ui.Label({
        "id": "lblQID",
        "isVisible": true,
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 5, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var lblExpiryDate = new kony.ui.Label({
        "id": "lblExpiryDate",
        "isVisible": true,
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {});
    var btnYear = new kony.ui.Button({
        "id": "btnYear",
        "isVisible": true,
        "skin": "btnYear",
        "focusSkin": "btnFocus",
        "onClick": frmPersonalResidencyInput_btnYear_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {});
    var hbxTop = new kony.ui.Box({
        "id": "hbxTop",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 36,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxTop.add(
    btnPersResCheckbox, lblQID, lblExpiryDate, btnYear);
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "skin": "lblBlackNor"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {});
    var btnPersResDetails = new kony.ui.Button({
        "id": "btnPersResDetails",
        "isVisible": true,
        "skin": "btnDetails",
        "focusSkin": "btnFocus",
        "onClick": frmPersonalResidencyInput_btnPersResDetails_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var hbxBottom = new kony.ui.Box({
        "id": "hbxBottom",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 64,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxBottom.add(
    lblName, btnPersResDetails);
    segResPersonalInputbox.add(
    hbxTop, hbxBottom);
    var line1953273106244171 = new kony.ui.Line({
        "id": "line1953273106244171",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblAmount = new kony.ui.Label({
        "id": "lblAmount",
        "isVisible": true,
        "text": "Amount",
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 38
    }, {});
    var lblAmountValue = new kony.ui.Label({
        "id": "lblAmountValue",
        "isVisible": true,
        "text": "200.00",
        "skin": "lblBlackBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    var lblQar = new kony.ui.Label({
        "id": "lblQar",
        "isVisible": true,
        "text": "QAR",
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 29
    }, {});
    var hbxAmountResidencyPers = new kony.ui.Box({
        "id": "hbxAmountResidencyPers",
        "isVisible": true,
        "skin": "hboxAmountBackground",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [3, 5, 3, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAmountResidencyPers.add(
    lblAmount, lblAmountValue, lblQar);
    var btnPersResInputBack = new kony.ui.Button({
        "id": "btnPersResInputBack",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.btnback"),
        "skin": "btnBack",
        "focusSkin": "btnBackFcs",
        "onClick": frmPersonalResidencyInput_btnPersResInputBack_onClick_seq0
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
    }, {});
    var btnPersResInputSubmit = new kony.ui.Button({
        "id": "btnPersResInputSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.btnsubmit"),
        "skin": "btnNextNorm",
        "focusSkin": "btnNextFcs",
        "onClick": frmPersonalResidencyInput_btnPersResInputSubmit_onClick_seq0
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
    btnPersResInputBack, btnPersResInputSubmit);
    frmPersonalResidencyInput.add(
    hbox1953273106183651, hbox195327310624641, hbxResidencyPersInput, segResPersonalInput, line1953273106244171, hbxAmountResidencyPers, hbox19284323084890);
};

function frmPersonalResidencyInputGlobals() {
    var MenuId = [];
    frmPersonalResidencyInput = new kony.ui.Form2({
        "id": "frmPersonalResidencyInput",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox3323200773],
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "addWidgets": addWidgetsfrmPersonalResidencyInput
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
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