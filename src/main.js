/**
 * @file [Please input file description]
 * @author wangkemiao(wangkemiao@baidu.com)
 */

define( function (require, exports, module ) {
    var loader = require('common/pageLoader');
    var cindex = 1;
    var index = 0;
    var pages = $('.page');
    var prePos = document.body.scrollTop;
    var timeStamp = 0;


    function updatePos() {
        cindex = index;
        prePos = document.body.scrollTop;
    }

    function bindClick () {
        var vh = document.body.clientHeight;
        pages = $('.page');

        $(document).scroll(function (e) {
            var ht = document.body.scrollTop;
            var diff = ht - prePos;
           // var diffPage = Math.min(Math.round(Math.abs(diff / vh)), 1);

            if (e.timeStamp - timeStamp < 600) {
                return;
            }
            
            timeStamp = e.timeStamp;

            if ( diff > 30 ) {
                index = cindex + 1;
            } else if (diff < -30) {
                index = cindex - 1;
            } else {
                return;
            }

            $(pages.get(index)).scrollintoview({
                duration: 500,
                complete: updatePos
            });
        });

        $('a').click(function (e) {
            var it = $(this);
            var link = it.attr('href');

            var ht = document.body.scrollTop;
            index = Math.ceil(ht / vh) + 1;

            if (link.charAt(0) == '#') {
                e.preventDefault();
                $(link).scrollintoview(
                    {
                        duration: 500,
                        complete: updatePos 
                    }
                );
            }
        });

        // $('.enter').click(function (e) {
        //     e.preventDefault();
        //     $('#feature').scrollintoview(
        //         {
        //             duration: 500,
        //             complete: updatePos 
        //         }
        //     );
        // });
        $('.enter').click(function (e) {
            e.preventDefault();
            location.href = location.href + 'oneux.html';
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