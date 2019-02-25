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
    var game;
    (function (game) {
        var gameViewUI = /** @class */ (function (_super) {
            __extends(gameViewUI, _super);
            function gameViewUI() {
                return _super.call(this) || this;
            }
            gameViewUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.gameViewUI.uiView);
            };
            gameViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "skin": "img/u4.jpg" } }, { "type": "Box", "props": { "y": 1170, "x": 49, "width": 114, "var": "bu_home", "height": 123 } }, { "type": "Box", "props": { "y": 1170, "x": 196, "width": 114, "var": "bu_rank", "height": 123 } }, { "type": "Box", "props": { "y": 1173, "x": 349, "width": 114, "var": "bu_shop", "height": 123 } }] };
            return gameViewUI;
        }(View));
        game.gameViewUI = gameViewUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var homeWinUI = /** @class */ (function (_super) {
            __extends(homeWinUI, _super);
            function homeWinUI() {
                return _super.call(this) || this;
            }
            homeWinUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.homeWinUI.uiView);
            };
            homeWinUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 3, "width": 750, "height": 535 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "img/u5.png", "height": 536 } }] };
            return homeWinUI;
        }(Dialog));
        game.homeWinUI = homeWinUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var rankWinUI = /** @class */ (function (_super) {
            __extends(rankWinUI, _super);
            function rankWinUI() {
                return _super.call(this) || this;
            }
            rankWinUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.rankWinUI.uiView);
            };
            rankWinUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 700 }, "child": [{ "type": "Image", "props": { "width": 750, "skin": "img/u6.png", "height": 700 } }] };
            return rankWinUI;
        }(Dialog));
        game.rankWinUI = rankWinUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var shopWinUI = /** @class */ (function (_super) {
            __extends(shopWinUI, _super);
            function shopWinUI() {
                return _super.call(this) || this;
            }
            shopWinUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.shopWinUI.uiView);
            };
            shopWinUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 747 }, "child": [{ "type": "Image", "props": { "width": 750, "skin": "img/u7.png", "height": 747 } }] };
            return shopWinUI;
        }(Dialog));
        game.shopWinUI = shopWinUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var login;
    (function (login) {
        var introduceViewUI = /** @class */ (function (_super) {
            __extends(introduceViewUI, _super);
            function introduceViewUI() {
                return _super.call(this) || this;
            }
            introduceViewUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.login.introduceViewUI.uiView);
            };
            introduceViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "skin": "img/u3.png" } }, { "type": "Box", "props": { "y": 42, "x": -2, "width": 129, "var": "bu_return", "height": 88 } }, { "type": "Box", "props": { "y": 1179, "x": 168, "width": 409, "var": "bu_get", "height": 88 } }] };
            return introduceViewUI;
        }(View));
        login.introduceViewUI = introduceViewUI;
    })(login = ui.login || (ui.login = {}));
})(ui || (ui = {}));
(function (ui) {
    var login;
    (function (login) {
        var item;
        (function (item) {
            var petSelectUI = /** @class */ (function (_super) {
                __extends(petSelectUI, _super);
                function petSelectUI() {
                    return _super.call(this) || this;
                }
                petSelectUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.login.item.petSelectUI.uiView);
                };
                petSelectUI.uiView = { "type": "View", "props": { "width": 750, "height": 306 }, "child": [{ "type": "Image", "props": { "width": 750, "skin": "img/u2.png", "renderType": "render", "height": 304 } }] };
                return petSelectUI;
            }(View));
            item.petSelectUI = petSelectUI;
        })(item = login.item || (login.item = {}));
    })(login = ui.login || (ui.login = {}));
})(ui || (ui = {}));
(function (ui) {
    var login;
    (function (login) {
        var selectViewUI = /** @class */ (function (_super) {
            __extends(selectViewUI, _super);
            function selectViewUI() {
                return _super.call(this) || this;
            }
            selectViewUI.prototype.createChildren = function () {
                View.regComponent("t1.petSelect", t1.petSelect);
                _super.prototype.createChildren.call(this);
                this.createView(ui.login.selectViewUI.uiView);
            };
            selectViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "img/u0.jpg" } }, { "type": "List", "props": { "y": 235, "x": 0, "width": 786, "var": "list", "vScrollBarSkin": " ", "height": 910 }, "child": [{ "type": "petSelect", "props": { "runtime": "t1.petSelect", "renderType": "render" } }] }, { "type": "TextInput", "props": { "y": 148, "x": 164, "width": 400, "var": "input", "height": 62, "fontSize": 40 } }] };
            return selectViewUI;
        }(View));
        login.selectViewUI = selectViewUI;
    })(login = ui.login || (ui.login = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map