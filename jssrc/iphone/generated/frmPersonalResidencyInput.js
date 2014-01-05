//Form JS File
function frmPersonalResidencyInput_frmPersonalResidencyInput_preshow_seq0(eventobject, neworientation) {
    residencyInputPreShow.call(this);
};

function frmPersonalResidencyInput_frmPersonalResidencyInput_postshow_seq0(eventobject, neworientation) {
    residencyPaymentPostShow.call(this);
};

function frmPersonalResidencyInput_vbxPersResCheckbox_onClick_seq0(eventobject, context) {
    checkboxClicked.call(this);
};

function frmPersonalResidencyInput_btnYear_onClick_seq0(eventobject, context) {
    yearButtonClicked.call(this);
};

function frmPersonalResidencyInput_vbxPersResDetails_onClick_seq0(eventobject, context) {
    detailsIconClicked.call(this);
};

function frmPersonalResidencyInput_btnQPost_onClick_seq0(eventobject) {
    QPostOptionClicked.call(this);
};

function frmPersonalResidencyInput_btnImmigration_onClick_seq0(eventobject) {
    ImmigrationOptionClicked.call(this);
};

function frmPersonalResidencyInput_btnPersResInputBack_onClick_seq0(eventobject) {
    residencyInputBackEvet.call(this);
};

function frmPersonalResidencyInput_btnPersResInputSubmit_onClick_seq0(eventobject) {
    personalResidencyInputScreenValidations.call(this);
};

function addWidgetsfrmPersonalResidencyInput() {
    var label1953273106241700 = new kony.ui.Label({
        "id": "label1953273106241700",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.qid"),
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSponsorQID = new kony.ui.Label({
        "id": "lblSponsorQID",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
    label1953273106241700, lblSponsorQID);
    var lblSponsorName = new kony.ui.Label({
        "id": "lblSponsorName",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
    lblSponsorName);
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
        "text": kony.i18n.getLocalizedString("m.rrc.label1"),
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblChooseQid = new kony.ui.Label({
        "id": "lblChooseQid",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.rrc.label2"),
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
        "text": kony.i18n.getLocalizedString("m.rrc.result.titleQid"),
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblExpiryDateDisplay = new kony.ui.Label({
        "id": "lblExpiryDateDisplay",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.rrc.result.titleDate"),
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblYear = new kony.ui.Label({
        "id": "lblYear",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.rrc.result.titleYear"),
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
            "vbxPersResCheckbox": "vbxPersResCheckbox",
            "maxAllowDuration": "maxAllowDuration",
            "workFees": "workFees",
            "renewFees": "renewFees",
            "hbxBottom": "hbxBottom",
            "btnPersResCheckbox": "btnPersResCheckbox",
            "cancelFees": "cancelFees",
            "residencyDate": "residencyDate",
            "exitPermitFees": "exitPermitFees",
            "age": "age",
            "vbxPersResDetails": "vbxPersResDetails",
            "rejectionReason": "rejectionReason",
            "qid": "qid",
            "relation": "relation",
            "rejectionReasonCode": "rejectionReasonCode",
            "btnYear": "btnYear",
            "lblName": "lblName",
            "lblQID": "lblQID",
            "hbxTop": "hbxTop",
            "lblExpiryDate": "lblExpiryDate",
            "nationality": "nationality",
            "cardFees": "cardFees",
            "dob": "dob",
            "clickedInfo": "clickedInfo",
            "delayFees": "delayFees",
            "PassportNo": "PassportNo"
        },
        "data": [{
            "rejectionReason": "",
            "btnPersResDetails": "",
            "sex": "",
            "workFees": "",
            "maxAllowDuration": "",
            "qid": "",
            "relation": "",
            "rejectionReasonCode": "",
            "btnYear": "1",
            "lblQID": "24373657525",
            "lblName": "Wajiha Rabia Parera",
            "renewFees": "",
            "btnPersResCheckbox": "",
            "lblExpiryDate": "2013-01-01",
            "cancelFees": "",
            "nationality": "",
            "residencyDate": "",
            "cardFees": "",
            "exitPermitFees": "",
            "age": "",
            "dob": "",
            "clickedInfo": "",
            "delayFees": "",
            "PassportNo": ""
        }, {
            "rejectionReason": "",
            "btnPersResDetails": "",
            "sex": "",
            "workFees": "",
            "maxAllowDuration": "",
            "qid": "",
            "relation": "",
            "rejectionReasonCode": "",
            "btnYear": "1",
            "lblQID": "12345678901",
            "lblName": "Wajiha Rabia Parea",
            "renewFees": "",
            "btnPersResCheckbox": "",
            "lblExpiryDate": "2013-01-01",
            "cancelFees": "",
            "nationality": "",
            "residencyDate": "",
            "cardFees": "",
            "exitPermitFees": "",
            "age": "",
            "dob": "",
            "clickedInfo": "",
            "delayFees": "",
            "PassportNo": ""
        }, {
            "rejectionReason": "",
            "btnPersResDetails": "",
            "sex": "",
            "workFees": "",
            "maxAllowDuration": "",
            "qid": "",
            "relation": "",
            "rejectionReasonCode": "",
            "btnYear": "1",
            "lblQID": "23456789011",
            "lblName": "TMAM IBRAHIM AL HAMAD",
            "renewFees": "",
            "btnPersResCheckbox": "",
            "lblExpiryDate": "2015-01-01",
            "cancelFees": "",
            "nationality": "",
            "residencyDate": "",
            "cardFees": "",
            "exitPermitFees": "",
            "age": "",
            "dob": "",
            "clickedInfo": "",
            "delayFees": "",
            "PassportNo": ""
        }],
        "rowTemplate": segResPersonalInputbox,
        "rowSkin": "seg2Normal",
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
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var btnPersResCheckbox = new kony.ui.Image2({
        "id": "btnPersResCheckbox",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxPersResCheckbox = new kony.ui.Box({
        "id": "vbxPersResCheckbox",
        "isVisible": true,
        "onClick": frmPersonalResidencyInput_vbxPersResCheckbox_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 11,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxPersResCheckbox.add(
    btnPersResCheckbox);
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
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
    vbxPersResCheckbox, lblQID, lblExpiryDate, btnYear);
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnPersResDetails = new kony.ui.Image2({
        "id": "btnPersResDetails",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxPersResDetails = new kony.ui.Box({
        "id": "vbxPersResDetails",
        "isVisible": true,
        "onClick": frmPersonalResidencyInput_vbxPersResDetails_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 10,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxPersResDetails.add(
    btnPersResDetails);
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
    lblName, vbxPersResDetails);
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
    var lblDeliveryMsg = new kony.ui.Label({
        "id": "lblDeliveryMsg",
        "isVisible": true,
        "text": null,
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
        "containerWeight": 43
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnQPost = new kony.ui.Button({
        "id": "btnQPost",
        "isVisible": true,
        "text": "Button",
        "skin": "btnCheckbox",
        "focusSkin": "btnFocus",
        "onClick": frmPersonalResidencyInput_btnQPost_onClick_seq0
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
        "containerWeight": 12
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblQPost = new kony.ui.Label({
        "id": "lblQPost",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.qPost"),
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
        "containerWeight": 36
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnImmigration = new kony.ui.Button({
        "id": "btnImmigration",
        "isVisible": true,
        "text": "Button",
        "skin": "btnCheckbox",
        "focusSkin": "btnFocus",
        "onClick": frmPersonalResidencyInput_btnImmigration_onClick_seq0
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
        "containerWeight": 13
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblImmigration = new kony.ui.Label({
        "id": "lblImmigration",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.rPDept"),
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
        "containerWeight": 39
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1563352826303729 = new kony.ui.Box({
        "id": "hbox1563352826303729",
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
    hbox1563352826303729.add(
    btnQPost, lblQPost, btnImmigration, lblImmigration);
    var vbox1563352826303726 = new kony.ui.Box({
        "id": "vbox1563352826303726",
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
    vbox1563352826303726.add(
    lblDeliveryMsg, hbox1563352826303729);
    var hboxDelivery = new kony.ui.Box({
        "id": "hboxDelivery",
        "isVisible": true,
        "skin": "hboxWhiteRound",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 15,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxDelivery.add(
    vbox1563352826303726);
    var lblAmount = new kony.ui.Label({
        "id": "lblAmount",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.ps.epf.pay.amount"),
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAmountValue = new kony.ui.Label({
        "id": "lblAmountValue",
        "isVisible": true,
        "text": "0.00",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblQar = new kony.ui.Label({
        "id": "lblQar",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.qar"),
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxAmountResidencyPers = new kony.ui.Box({
        "id": "hbxAmountResidencyPers",
        "isVisible": true,
        "skin": "hboxAmountBackground",
        "position": constants.BOX_POSITION_AS_FOOTER,
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
        "text": kony.i18n.getLocalizedString("m.back"),
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnPersResInputSubmit = new kony.ui.Button({
        "id": "btnPersResInputSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("m.done"),
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
    btnPersResInputBack, btnPersResInputSubmit);
    frmPersonalResidencyInput.add(
    hbox1953273106183651, hbox195327310624641, hbxResidencyPersInput, segResPersonalInput, line1953273106244171, hboxDelivery, hbxAmountResidencyPers, hbox19284323084890);
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
        "preShow": frmPersonalResidencyInput_frmPersonalResidencyInput_preshow_seq0,
        "postShow": frmPersonalResidencyInput_frmPersonalResidencyInput_postshow_seq0,
        "addWidgets": addWidgetsfrmPersonalResidencyInput
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