/**
 * @file [Please input file description]
 * @author wangkemiao(wangkemiao@baidu.com)
 */

define( function (require, exports, module ) {
    var loader = require('common/pageLoader');
    var cindex = 1;
    var pages = $('.page');
    var prePos = document.body.scrollTop;
    var timeStamp = 0;


    function notify() {

    }

    function detectScroll(index) {
        clearTimeout(timer);

        return function () {
            $(pages.get(index)).scrollintoview({
                duration: 'normal',
                complete: function () {
                    cindex = index;
                    prePos = document.body.scrollTop;
                }
            });
        }
    }

    function bindClick () {
        var vh = document.body.clientHeight;

        pages = $('.page');

        $(document).scroll(function (e) {
            var ht = document.body.scrollTop;
            var index = Math.ceil((ht + 50)/ vh) + 1;
            var diff = ht - prePos;

            if (e.timeStamp - timeStamp < 700) {
                return;
            } else {
                timeStamp = e.timeStamp;
            }

            if ( diff > 30 ) {
                index = cindex + 1;
            } else if (diff < -30) {
                index = cindex - 1;
            } else {
                return;
            }

            $(pages.get(index)).scrollintoview({
                duration: 500,
                complete: function () {
                    cindex = index;
                    prePos = document.body.scrollTop;
                }
            });
        });

        $('a').click(function (e) {
            debugger;
            var it = $(this);
            var link = it.attr('href');
            if (link.charAt(0) == '#') {
                e.preventDefault();
                $(link).scrollintoview({ duration: "normal", complete: notify });
            }
        });
    }


    // 引入一个依赖的模块，可以使用require( relative/top-level id ) 
    // var dependModule = require( './dependModule' );

    /**
     * [Please input module description]
     */
    function start() {
        $('.loading-content').each(function () {
            var url = $(this).attr('data-url');
            if (url) {
                loader.render(url, this);
            }
        });

        setTimeout(bindClick, 1000);
    }

    start();

    // return模块
    return start;
} );