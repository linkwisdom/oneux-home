/**
 * @file server端处理 - markDown文件处理
 * @author Leo Wang(wangkemiao@baidu.com)
 */

var markdown = require( "markdown" ).markdown;
var fs = require('fs');

module.exports = exports = function markDown (compileOptions, encoding) {
    encoding = encoding || 'utf8';

    return function (context) {
        var docRoot  = context.conf.documentRoot;
        var pathname = context.request.pathname;
        var file = docRoot + pathname;

        if (fs.existsSync(file)) {
            context.content = markdown.toHTML(
                fs.readFileSync(file, encoding)
            );

            context.start();
        }
        else {
            context.status = 404;
            context.start();
        }
    };
};