//Template File
function headerMainMenu_btnHomeId_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function initializeheaderMainMenu() {
    hbox192843230833323 = new kony.ui.BoxTemplate({
        "id": "hbox192843230833323",
        "isVisible": true,
        "skin": "hboxHeaderMenu",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox192843230833323
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox192843230833323() {
        var btnHomeId = new kony.ui.Button({
            "id": "btnHomeId",
            "isVisible": true,
            "text": null,
            "skin": "btnHomeNorm",
            "focusSkin": "btnHomeNorm",
            "onClick": headerMainMenu_btnHomeId_onClick_seq0
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
            "containerWeight": 15
        }, {});
        var label19320370194643 = new kony.ui.Label({
            "id": "label19320370194643",
            "isVisible": true,
            "text": "Residency",
            "skin": "lblWhiteBold"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 48, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": true,
            "containerWeight": 85
        }, {});
        hbox192843230833323.add(
        btnHomeId, label19320370194643);
    }
};