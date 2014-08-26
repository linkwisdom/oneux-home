exports.port = 8818;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;

var etpl = require('etpl');
var systemConf = require('./systemConf');

function parseTpl(context) {
    var content = context.content.toString();
    context.content = etpl.compile(content)(systemConf);
}

exports.getLocations = function () {
    return [
        { 
            location: /\.(tpl|html)$/,
            handler: [file(), parseTpl]
        },
        { 
            location: /\/$/, 
            handler: [ home( 'index.html' ), parseTpl ]
        },
        { 
            location: /^\/redirect-local/, 
            handler: redirect('redirect-target', false) 
        },
        { 
            location: /^\/redirect-remote/, 
            handler: redirect('http://www.baidu.com', false) 
        },
        { 
            location: /^\/redirect-target/, 
            handler: content('redirectd!') 
        },
        { 
            location: '/empty', 
            handler: empty() 
        },
        { 
            location: /\.css($|\?)/, 
            handler: [
                autocss()
            ]
        },
        { 
            location: /\.less($|\?)/, 
            handler: [
                file(),
                less()
            ]
        },
        { 
            location: /\.styl($|\?)/, 
            handler: [
                file(),
                stylus()
            ]
        },
        {
            location: /(\.md|\.text)/,
            handler: [
                require('./server/markDown')()
            ]
        },
        { 
            location: /^.*$/, 
            handler: [
                file(),
                proxyNoneExists()
            ]
        }
    ];
};

exports.injectResource = function ( res ) {
    for ( var key in res ) {
        global[ key ] = res[ key ];
    }
};
