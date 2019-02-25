var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
//初始化微信小游戏
Laya.MiniAdpter.init();
//程序入口
Laya.init(750, 1334, WebGL);
Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    Laya.loader.load("res/atlas/img.atlas", Handler.create(null, onLoaded));
}
function onLoaded() {
    //实例UI界面
    var testUI = new t1.selectView();
    Laya.stage.addChild(testUI);
}
//# sourceMappingURL=LayaUISample.js.map