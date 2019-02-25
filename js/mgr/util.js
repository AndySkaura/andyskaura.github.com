/*
* name;
*/
var util = /** @class */ (function () {
    function util() {
    }
    util.getInstance = function () {
        if (!this._util) {
            this._util = new util();
        }
        return this._util;
    };
    util.prototype.popupEffect = function () {
        if (!this._popupEffect) {
            this._popupEffect = Handler.create(this, function (spr) {
                spr.pos(0, 1334);
                Laya.Tween.to(spr, { y: 1334 - spr.height }, 500);
            }, null, false);
        }
        return this._popupEffect;
    };
    util.prototype.closeEffect = function () {
        if (!this._closeEffect) {
            this._closeEffect = Handler.create(this, function (spr) {
                Laya.Tween.to(spr, { y: 1334 }, 300, null, Handler.create(Dialog.manager, Dialog.manager.doClose, [spr, null]));
            }, null, false);
        }
        return this._closeEffect;
    };
    return util;
}());
//# sourceMappingURL=util.js.map