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
    var gameView = /** @class */ (function (_super) {
        __extends(gameView, _super);
        function gameView() {
            var _this = _super.call(this) || this;
            _this.addEvent();
            return _this;
        }
        gameView.prototype.addEvent = function () {
            this.bu_home.on(Laya.Event.CLICK, this, this.clickHandler);
            this.bu_rank.on(Laya.Event.CLICK, this, this.clickHandler);
            this.bu_shop.on(Laya.Event.CLICK, this, this.clickHandler);
        };
        gameView.prototype.clickHandler = function (e) {
            switch (e.currentTarget) {
                case this.bu_home:
                    t1.homeWin.open();
                    break;
                case this.bu_rank:
                    t1.rankWin.open();
                    break;
                case this.bu_shop:
                    t1.shopWin.open();
                    break;
            }
        };
        return gameView;
    }(ui.game.gameViewUI));
    t1.gameView = gameView;
})(t1 || (t1 = {}));
//# sourceMappingURL=gameView.js.map