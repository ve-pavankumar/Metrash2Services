//Form JS File
function frmPersonalResidencyDetails_btnPersResidencyDetails_onClick_seq0(eventobject) {
    frmPersonalResidencyInput.show();
};

function addWidgetsfrmPersonalResidencyDetails() {
    var label1953273106244169 = new kony.ui.Label({
        "id": "label1953273106244169",
        "isVisible": true,
        "text": "Personal Details",
        "skin": "lblBlackBold100"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [10, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1953273106244168 = new kony.ui.Box({
        "id": "hbox1953273106244168",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1953273106244168.add(
    label1953273106244169);
    var segmentPersResDetailsbox = new kony.ui.Box({
        "id": "segmentPersResDetailsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 10
    }, {});
    var segmentPersResDetails = new kony.ui.SegmentedUI2({
        "id": "segmentPersResDetails",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox1953273106244173": "hbox1953273106244173",
            "lblPersResValue": "lblPersResValue",
            "lblPersResKey": "lblPersResKey"
        },
        "data": [{
            "lblPersResValue": "TMAM IBRAHIM AL HAMAD",
            "lblPersResKey": "Name"
        }, {
            "lblPersResValue": "12345678901",
            "lblPersResKey": "QID"
        }, {
            "lblPersResValue": "Qatar",
            "lblPersResKey": "Nationality"
        }, {
            "lblPersResValue": "Father",
            "lblPersResKey": "Relation"
        }, {
            "lblPersResValue": "Male",
            "lblPersResKey": "Sex"
        }, {
            "lblPersResValue": "01-01-1967",
            "lblPersResKey": "Date of Birth"
        }, {
            "lblPersResValue": "40",
            "lblPersResKey": "Age"
        }, {
            "lblPersResValue": "01-12-2013",
            "lblPersResKey": "Residency Date"
        }, {
            "lblPersResValue": "ABCDEFGH",
            "lblPersResKey": "Passport #"
        }],
        "rowTemplate": segmentPersResDetailsbox,
        "widgetSkin": "segDetails",
        "rowSkin": "segDetails",
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
        "margin": [3, 3, 3, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblPersResKey = new kony.ui.Label({
        "id": "lblPersResKey",
        "isVisible": true,
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPersResValue = new kony.ui.Label({
        "id": "lblPersResValue",
        "isVisible": true,
        "skin": "lblBlackBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1953273106244173 = new kony.ui.Box({
        "id": "hbox1953273106244173",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1953273106244173.add(
    lblPersResKey, lblPersResValue);
    segmentPersResDetailsbox.add(
    hbox1953273106244173);
    var btnPersResidencyDetails = new kony.ui.Button({
        "id": "btnPersResidencyDetails",
        "isVisible": true,
        "text": "Back",
        "skin": "btnNextNorm",
        "focusSkin": "btnNextFcs",
        "onClick": frmPersonalResidencyDetails_btnPersResidencyDetails_onClick_seq0
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
    btnPersResidencyDetails);
    frmPersonalResidencyDetails.add(
    hbox1953273106244168, segmentPersResDetails, hbox19284323084890);
};

function frmPersonalResidencyDetailsGlobals() {
    var MenuId = [];
    frmPersonalResidencyDetails = new kony.ui.Form2({
        "id": "frmPersonalResidencyDetails",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox3323200773],
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "addWidgets": addWidgetsfrmPersonalResidencyDetails
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