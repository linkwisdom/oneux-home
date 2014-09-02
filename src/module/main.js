/**
 * @file module的入口模块
 * @author Wang Yi(wangyi25@baidu.com)
 */
define(function (require) {
    var MENU_ITEM_CLASS = 'menu-item';

    var ITEM_NAME_CLASS = 'menu-item-name';

    var SUB_ITEM_NAME_CLASS = 'sub-menu-item-name';

    var ITEM_SELECTED_CLASS = 'menu-item-selected';

    var SUB_ITEM_SELECTED_CLASS = 'sub-menu-item-selected';

    $('.menu-item').on('click', getMenuClickHandler());

    $('#oneux-modules-container iframe').on('load', function (e) {
        var newHeight = $(this).contents().height();
        $(this).height(newHeight);
    });

    function getMenuClickHandler() {
        return function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            var tar = $(target);
            // 更新DOM
            if (tar.hasClass(ITEM_NAME_CLASS)
                || tar.hasClass(SUB_ITEM_NAME_CLASS)) {
                updateMenuItemDom(tar);
                var data = getMenuItemData();
                changeContentByItem(data);
                changeTitle(data);
            }
            e.stopPropagation();
        };
    }

    function updateMenuItemDom(item) {
        $('.' + ITEM_NAME_CLASS).removeClass(ITEM_SELECTED_CLASS);
        $('.' + SUB_ITEM_NAME_CLASS).removeClass(SUB_ITEM_SELECTED_CLASS);

        if (item.hasClass(ITEM_NAME_CLASS)) {
            item.addClass(ITEM_SELECTED_CLASS);
            item.next().find('.' + SUB_ITEM_NAME_CLASS).first()
                .addClass(SUB_ITEM_SELECTED_CLASS);
        } else if(item.hasClass(SUB_ITEM_NAME_CLASS)) {
            item.addClass(SUB_ITEM_SELECTED_CLASS);
            item.parents('.' + MENU_ITEM_CLASS).find('.' + ITEM_NAME_CLASS)
                .addClass(ITEM_SELECTED_CLASS);
        }
    }

    function getMenuItemData() {
        var menuItem = $('.' + ITEM_SELECTED_CLASS);
        var subMenuItem = $('.' + SUB_ITEM_SELECTED_CLASS);
        var data = {
            item: {
                name: menuItem.text() || menuItem.html(),
                value: menuItem.attr('value')
            }
        };
        if (subMenuItem.length) {
            data.subItem = {
                name: subMenuItem.text() || subMenuItem.html(),
                value: subMenuItem.attr('value')
            };
        }
        return data;
    }

    function changeContentByItem(data) {
        var htmlPath = window.modulePath + data.item.value;
        if (data.subItem) {
            htmlPath = htmlPath + '/' + data.subItem.value + '.html';
        } else {
            htmlPath += '.html';
        }
        $('#oneux-modules-container iframe').attr('src', htmlPath);
    }

    function changeTitle(data) {
        var title = data.item.name;
        if (data.subItem) {
            title = title + ' > ' + data.subItem.name;
        }
        $('#oneux-modules-title-bar').html(title);
    }
});