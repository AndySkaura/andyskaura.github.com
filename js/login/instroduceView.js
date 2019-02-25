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
    var instroduceView = /** @class */ (function (_super) {
        __extends(instroduceView, _super);
        function instroduceView() {
            var _this = _super.call(this) || this;
            _this.bu_return.on(Laya.Event.CLICK, _this, _this.clickHanlder);
            _this.bu_get.on(Laya.Event.CLICK, _this, _this.clickHanlder);
            return _this;
        }
        instroduceView.prototype.clickHanlder = function (e) {
            switch (e.currentTarget) {
                case this.bu_return:
                    this.removeSelf();
                    break;
                case this.bu_get:
                    var gView = new t1.gameView();
                    Laya.stage.addChild(gView);
                    console.log("开始领养");
                    break;
            }
        };
        return instroduceView;
    }(ui.login.introduceViewUI));
    t1.instroduceView = instroduceView;
})(t1 || (t1 = {}));
//# sourceMappingURL=instroduceView.js.map