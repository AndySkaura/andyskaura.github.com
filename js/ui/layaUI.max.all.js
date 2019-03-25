var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var mainViewUI = /** @class */ (function (_super) {
        __extends(mainViewUI, _super);
        function mainViewUI() {
            return _super.call(this) || this;
        }
        mainViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.mainViewUI.uiView);
        };
        mainViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "comp/bg.png", "sizeGrid": "32,21,17,25", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 0, "x": 290, "var": "role", "skin": "comp/image.png", "sizeGrid": "111,61,65,55", "bottom": 0 } }, { "type": "Animation", "props": { "y": 520, "x": 285, "var": "ani", "interval": 100 } }] };
        return mainViewUI;
    }(View));
    ui.mainViewUI = mainViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map