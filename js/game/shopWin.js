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
/**
* name
*/
var t1;
(function (t1) {
    var shopWin = /** @class */ (function (_super) {
        __extends(shopWin, _super);
        function shopWin() {
            return _super.call(this) || this;
        }
        shopWin.open = function () {
            var win = new shopWin();
            win.popupEffect = util.getInstance().popupEffect();
            win.closeEffect = util.getInstance().closeEffect();
            win.popup(true, true);
        };
        return shopWin;
    }(ui.game.shopWinUI));
    t1.shopWin = shopWin;
})(t1 || (t1 = {}));
//# sourceMappingURL=shopWin.js.map