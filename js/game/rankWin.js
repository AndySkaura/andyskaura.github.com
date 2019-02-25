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
    var rankWin = /** @class */ (function (_super) {
        __extends(rankWin, _super);
        function rankWin() {
            return _super.call(this) || this;
        }
        rankWin.open = function () {
            var win = new rankWin();
            win.popupEffect = util.getInstance().popupEffect();
            win.closeEffect = util.getInstance().closeEffect();
            win.popup(true, true);
        };
        return rankWin;
    }(ui.game.rankWinUI));
    t1.rankWin = rankWin;
})(t1 || (t1 = {}));
//# sourceMappingURL=rankWin.js.map