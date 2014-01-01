//Template File
function initializeheaderFrmLang() {
    hbox117712665799116 = new kony.ui.BoxTemplate({
        "id": "hbox117712665799116",
        "isVisible": true,
        "skin": "hboxHeaderMenu",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox117712665799116
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

    function addWidgetshbox117712665799116() {
        var label19320370194643 = new kony.ui.Label({
            "id": "label19320370194643",
            "isVisible": true,
            "text": "Metrash2",
            "skin": "lblWhiteBold"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [15, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": true,
            "paddingInPixel": true,
            "containerWeight": 0
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        hbox117712665799116.add(
        label19320370194643);
    }
};