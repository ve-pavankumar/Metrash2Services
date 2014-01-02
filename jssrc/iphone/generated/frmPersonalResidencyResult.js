//Form JS File
function frmPersonalResidencyResult_frmPersonalResidencyResult_postshow_seq0(eventobject, neworientation) {
    PersonalResidencyResultPostShow.call(this);
};

function frmPersonalResidencyResult_btnPersResidencyDone_onClick_seq0(eventobject) {
    frmResidencyMenu.show();
};

function addWidgetsfrmPersonalResidencyResult() {
    var label195327310678167 = new kony.ui.Label({
        "id": "label195327310678167",
        "isVisible": true,
        "text": "QID",
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 15
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
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 85
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox195327310675877 = new kony.ui.Box({
        "id": "hbox195327310675877",
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
    hbox195327310675877.add(
    label195327310678167, lblSponsorQID);
    var lblSponsorName = new kony.ui.Label({
        "id": "lblSponsorName",
        "isVisible": true,
        "text": "TMAM IBRAHIM AL HAMAD",
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
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox195327310677286 = new kony.ui.Box({
        "id": "hbox195327310677286",
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
    hbox195327310677286.add(
    lblSponsorName);
    var vbox195327310673732 = new kony.ui.Box({
        "id": "vbox195327310673732",
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
    vbox195327310673732.add(
    hbox195327310675877, hbox195327310677286);
    var hbox195327310673459 = new kony.ui.Box({
        "id": "hbox195327310673459",
        "isVisible": true,
        "skin": "hboxQidDetails",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [10, 10, 10, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox195327310673459.add(
    vbox195327310673732);
    var lblQidName = new kony.ui.Label({
        "id": "lblQidName",
        "isVisible": true,
        "text": "QID/Name",
        "skin": "lblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblExpiryDateDisplay = new kony.ui.Label({
        "id": "lblExpiryDateDisplay",
        "isVisible": true,
        "text": "Expiry Date",
        "skin": "lblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblYear = new kony.ui.Label({
        "id": "lblYear",
        "isVisible": true,
        "text": "Year",
        "skin": "lblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
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
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 16, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxResidencyPersInput.add(
    lblQidName, lblExpiryDateDisplay, lblYear);
    var segmentPersResidencyResultbox = new kony.ui.Box({
        "id": "segmentPersResidencyResultbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 17
    }, {});
    var segmentPersResidencyResult = new kony.ui.SegmentedUI2({
        "id": "segmentPersResidencyResult",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblPersResQidResult": "lblPersResQidResult",
            "hbox1953273106104387": "hbox1953273106104387",
            "lblPersResYearResult": "lblPersResYearResult",
            "lblPersResExpDateResult": "lblPersResExpDateResult",
            "hbox1953273106100497": "hbox1953273106100497",
            "lblPersResNameResult": "lblPersResNameResult"
        },
        "data": [{
            "lblPersResQidResult": "24373657525",
            "lblPersResYearResult": "3",
            "lblPersResExpDateResult": "2013-01-01",
            "lblPersResNameResult": "SAEED AL SADAN"
        }, {
            "lblPersResQidResult": "24373684166",
            "lblPersResYearResult": "2",
            "lblPersResExpDateResult": "2015-02-13",
            "lblPersResNameResult": "WAJIHI RBIA PERERA"
        }, {
            "lblPersResQidResult": "26981800944",
            "lblPersResYearResult": "2",
            "lblPersResExpDateResult": "2014-04-06",
            "lblPersResNameResult": " TMAM IBRAHIM AL HAMAD"
        }],
        "rowTemplate": segmentPersResidencyResultbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
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
        "containerWeight": 17
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblPersResQidResult = new kony.ui.Label({
        "id": "lblPersResQidResult",
        "isVisible": true,
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
        "containerWeight": 40
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPersResExpDateResult = new kony.ui.Label({
        "id": "lblPersResExpDateResult",
        "isVisible": true,
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
        "containerWeight": 40
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPersResYearResult = new kony.ui.Label({
        "id": "lblPersResYearResult",
        "isVisible": true,
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
        "containerWeight": 20
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1953273106100497 = new kony.ui.Box({
        "id": "hbox1953273106100497",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 39,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1953273106100497.add(
    lblPersResQidResult, lblPersResExpDateResult, lblPersResYearResult);
    var lblPersResNameResult = new kony.ui.Label({
        "id": "lblPersResNameResult",
        "isVisible": true,
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
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1953273106104387 = new kony.ui.Box({
        "id": "hbox1953273106104387",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 61,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1953273106104387.add(
    lblPersResNameResult);
    segmentPersResidencyResultbox.add(
    hbox1953273106100497, hbox1953273106104387);
    var line1953273106119046 = new kony.ui.Line({
        "id": "line1953273106119046",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var btnPersResidencyDone = new kony.ui.Button({
        "id": "btnPersResidencyDone",
        "isVisible": true,
        "text": "Done",
        "skin": "btnNextNorm",
        "focusSkin": "btnNextFcs",
        "onClick": frmPersonalResidencyResult_btnPersResidencyDone_onClick_seq0
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
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19284323084890.add(
    btnPersResidencyDone);
    frmPersonalResidencyResult.add(
    hbox195327310673459, hbxResidencyPersInput, segmentPersResidencyResult, line1953273106119046, hbox19284323084890);
};

function frmPersonalResidencyResultGlobals() {
    var MenuId = [];
    frmPersonalResidencyResult = new kony.ui.Form2({
        "id": "frmPersonalResidencyResult",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox3323200773],
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "postShow": frmPersonalResidencyResult_frmPersonalResidencyResult_postshow_seq0,
        "addWidgets": addWidgetsfrmPersonalResidencyResult
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