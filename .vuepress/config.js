module.exports = {
    title: '物联大师',
    description: '物联大师是开源免费的物联网智能网关系统，集成了标准Modbus和主流PLC等多种协议，支持数据采集、公式计算、定时控制、自动控制、异常报警、流量监控、Web组态、远程调试等功能，适用于大部分物联网和工业互联网应用场景。',

    themeConfig: {
        logo: '/iot.svg',
        smoothScroll: true,
        repo: 'zgwit/iot-master',
        docsRepo: 'zgwit/iot-master-docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: '最后更新',
        nav: [
            {text: '首页', link: '/'},
            {text: '文档', link: '/docs/'},
            {text: '下载', link: 'https://gitee.com/zgwit_labs/iot-master/releases'},
            {text: '在线演示', link: 'http://demo.iot-master.com:8080'},
            {text: 'Gitee', link: 'https://gitee.com/zgwit_labs/iot-master/'},
        ],
        sidebar: {
            "/docs/": [
                "/",
                "hmi/",
                "device/",
            ]
        }
    }

}
