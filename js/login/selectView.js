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
    var selectView = /** @class */ (function (_super) {
        __extends(selectView, _super);
        function selectView() {
            var _this = _super.call(this) || this;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.addValue();
            return _this;
        }
        selectView.prototype.addValue = function () {
            this.list.array = [0, 1, 2, 3, 4, 5];
        };
        selectView.prototype.addEevnt = function () {
        };
        selectView.prototype.renderHandler = function (item) {
        };
        return selectView;
    }(ui.login.selectViewUI));
    t1.selectView = selectView;
})(t1 || (t1 = {}));
//# sourceMappingURL=selectView.js.map