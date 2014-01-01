//Template File
function headerResidencyMenu_btnHomeId_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function initializeheaderResidencyMenu() {
    hbox3323200773 = new kony.ui.BoxTemplate({
        "id": "hbox3323200773",
        "isVisible": true,
        "skin": "hboxHeaderMenu",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox3323200773
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox3323200773() {
        var btnHomeId = new kony.ui.Button({
            "id": "btnHomeId",
            "isVisible": true,
            "text": null,
            "skin": "btnHomeNorm",
            "focusSkin": "btnHomeNorm",
            "onClick": headerResidencyMenu_btnHomeId_onClick_seq0
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
            "containerWeight": 15
        }, {
            "glowEffect": false,
            "showProgressIndicator": true
        });
        var label19320370194643 = new kony.ui.Label({
            "id": "label19320370194643",
            "isVisible": true,
            "text": "Residency Renewal",
            "skin": "lblWhiteBold"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 48, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": true,
            "paddingInPixel": true,
            "containerWeight": 85
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        hbox3323200773.add(
        btnHomeId, label19320370194643);
    }
};