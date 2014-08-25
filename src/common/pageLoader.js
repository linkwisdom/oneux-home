define(function (require, exports) {

    exports.load = function (url) {
        return $.get(url);
    }

    exports.render = function (url, container) {
        return this.load(url).then(function(data) {
            $(container).html(data);
        });
    }
});