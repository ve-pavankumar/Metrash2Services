//Template File
function initializeheaderfrmLogin() {
    hboxLogin = new kony.ui.BoxTemplate({
        "id": "hboxLogin",
        "isVisible": true,
        "skin": "hboxHeaderMenu",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshboxLogin
    }, {
        "containerWeight": 10,
        "percent": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshboxLogin() {
        var lblLogin = new kony.ui.Label({
            "id": "lblLogin",
            "isVisible": true,
            "text": "Metrash2 Services",
            "skin": "lblWhiteBold"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": true,
            "containerWeight": 0
        }, {});
        hboxLogin.add(
        lblLogin);
    }
};