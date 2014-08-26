var fs = require('fs');
var etpl = require('etpl');
var systemConf = require('./systemConf');

function build() {
    var content = fs.readFileSync('index.html');
    content = content.toString();

    content = etpl.compile(content)(systemConf);

    fs.writeFileSync('main.html', content);
}

build();