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
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var TestUI = /** @class */ (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        var _this = _super.call(this) || this;
        _this.num = 0;
        _this.url0 = "lourouqiu/face_lourouqiu0.png,lourouqiu/face_lourouqiu1.png";
        _this.url1 = "lourouqiu/go_face_lourouqiu0.png,lourouqiu/go_face_lourouqiu1.png,lourouqiu/go_face_lourouqiu2.png,lourouqiu/go_face_lourouqiu3.png,lourouqiu/go_face_lourouqiu4.png";
        _this.url2 = "lourouqiu/back_face_lourouqiu0.png,lourouqiu/back_face_lourouqiu1.png,lourouqiu/back_face_lourouqiu2.png,lourouqiu/back_face_lourouqiu3.png,lourouqiu/back_face_lourouqiu4.png";
        _this.less();
        _this.addEvent();
        _this.aniPlay(_this.url0);
        return _this;
    }
    TestUI.prototype.aniPlay = function (url) {
        this.ani.source = url;
        this.ani.play(null, true);
        this.ani.offAll();
        this.ani.on(Laya.Event.COMPLETE, this, function () {
            this.num++;
            if (this.num >= 3) {
                this.num = 0;
            }
            switch (this.num) {
                case 0:
                    this.aniPlay(this.url1);
                    break;
                case 1:
                    this.aniPlay(this.url0);
                    break;
                case 2:
                    this.aniPlay(this.url2);
                    break;
            }
        });
    };
    TestUI.prototype.addEvent = function () {
        this.on(Laya.Event.CLICK, this, this.clickHandler);
    };
    TestUI.prototype.clickHandler = function () {
        this.role.height += 5;
        this.checkDie();
    };
    TestUI.prototype.checkDie = function () {
        if (this.role.height > 1315) {
            this.role.height = 250;
        }
    };
    TestUI.prototype.less = function () {
        if (this.role.height > 250) {
            this.role.height -= 2;
        }
        Laya.timer.once(200, this, this.less);
    };
    return TestUI;
}(ui.mainViewUI));
//程序入口
Laya.init(750, 1334, WebGL);
Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}
function onLoaded() {
    //实例UI界面
    var testUI = new TestUI();
    Laya.stage.addChild(testUI);
}
//# sourceMappingURL=LayaUISample.js.map