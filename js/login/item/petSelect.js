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
    var petSelect = /** @class */ (function (_super) {
        __extends(petSelect, _super);
        function petSelect() {
            var _this = _super.call(this) || this;
            _this.addEvenet();
            return _this;
        }
        petSelect.prototype.addEvenet = function () {
            this.on(Laya.Event.CLICK, this, this.clickHandler);
        };
        petSelect.prototype.clickHandler = function () {
            console.log("gotonext" + this.dataSource);
            var insView = new t1.instroduceView();
            Laya.stage.addChild(insView);
        };
        return petSelect;
    }(ui.login.item.petSelectUI));
    t1.petSelect = petSelect;
})(t1 || (t1 = {}));
//# sourceMappingURL=petSelect.js.map