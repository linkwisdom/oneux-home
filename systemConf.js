exports.system = {
    title: 'FC-FE Tech 百度商业平台研发部前端团队 - 基础技术组',
    orgization: '百度商业平台研发部前端团队',
    nav: {
        links: [
            { url: '/oneux', title: '首页' },
            { url: './oneux.html', title: '规范' },
            { url: '/oneux/guide.html', title: '使用指南' },
            { url: '/oneux/scense.html', title: '应用场景' },
            { url: 'http://fcfe.github.io/', title: '关于我们' }
        ]
    }
};

exports.content = {
    pages: [
        { id: 'index', url: './src/page/index.tpl', title: 'index' },
        { id: 'feature', url: './src/page/feature.tpl', title: 'feature' },
        { id: 'fonticon', url: './src/page/fonticon.tpl', title: 'fonticon' },
        { id: 'esui', url: './src/page/esui.tpl', title: 'esui' },
        { id: 'layout', url: './src/page/layout.tpl', title: 'layout' },
        { id: 'application', url: './src/page/application.tpl', title: 'application' }
    ]
};

exports.page = {
    content: '正文内容'
};

exports.menuItems = {
    items: [
        {
            name: '控件规范',
            value: 'esui',
            subItems: [
                {
                    name: '日历',
                    value: 'calendar',
                    selected: true
                },
                {
                    name: '地域',
                    value: 'region'
                },
                {
                    name: '按钮',
                    value: 'button'
                },
                {
                    name: '下拉菜单',
                    value: 'select'
                },
            ],
            selected: true
        },
        {
            name: '风格规范',
            value: 'style',
            subItems: [
                {
                    name: '色彩',
                    value: 'color'
                },
                {
                    name: '字体',
                    value: 'font'
                },
                {
                    name: '图标',
                    value: 'icon'
                }
            ]
        },
        {
            name: '页面规范',
            value: 'page'
        }
    ]
};