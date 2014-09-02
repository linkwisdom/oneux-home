/**
 * @file esui3 extension - 凤巢皮肤样式定制
 * @author Leo Wang(wangkemiao@baidu.com)
 */

define(function (require) {

    var lib = require('esui/lib');
    var Extension = require('esui/Extension');

    /**
     * 凤巢皮肤定制
     * @constructor
     * @extends {Extension}
     */
    function FcUiSkin() {
        Extension.apply(this, arguments);
    }
    lib.inherits(FcUiSkin, Extension);

    /**
     * 指定扩展类型，始终为`"FcUiSkin"`
     *
     * @type {string}
     */
    FcUiSkin.prototype.type = 'FcUiSkin';

    /**
     * 激活扩展
     *
     * @override
     */
    FcUiSkin.prototype.activate = function () {
        // 重设皮肤
        if (!this.target.skin) {
            this.target.skin = 'ui-fc';
        }
        Extension.prototype.activate.apply(this, arguments);
    };

    /**
     * 取消扩展的激活状态
     *
     * @override
     */
    FcUiSkin.prototype.inactivate = function () {
        Extension.prototype.inactivate.apply(this, arguments);
    };

    require('esui').registerExtension(FcUiSkin);

    return FcUiSkin;
});