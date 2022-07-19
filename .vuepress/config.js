module.exports = {
    title: '物联大师',
    description: '物联大师是开源免费的物联网智能网关系统，集成了标准Modbus和主流PLC等多种协议，支持数据采集、公式计算、定时控制、自动控制、异常报警、流量监控、Web组态、远程调试等功能，适用于大部分物联网和工业互联网应用场景。',
    dest: 'docs',
    themeConfig: {
        logo: '/iot.svg',
        smoothScroll: true,
        repo: 'zgwit/iot-master',
        docsRepo: 'zgwit/iot-master-docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '编辑此页',
        lastUpdated: '最后更新',
        nav: [
            {text: '首页', link: '/'},
            {text: '使用手册', link: '/manual/'},
            {text: '项目案例', link: '/cases/'},
            {text: '招贤纳士', link: '/jobs/'},
            {text: '产品下载', link: 'https://gitee.com/zgwit_labs/iot-master/releases'},
            {text: '在线演示', link: 'http://demo.iot-master.com:8080'},
            {text: 'Gitee', link: 'https://gitee.com/zgwit_labs/iot-master/'},
        ],
        sidebar: {
            "/manual/": [
                "start/install",
                "start/quick",
                "start/config",
                "start/compare",
                "start/gateway",
                {
                    title: '通道',
                    collapsable: false,
                    children: [
                        "tunnel/serial",
                        "tunnel/tcp",
                        "tunnel/udp",
                        "tunnel/server",
                        "tunnel/heartbeat",
                        "tunnel/transfer",
                    ]
                },
                {
                    title: '协议',
                    collapsable: false,
                    children: [
                        "protocol/modbus",
                        "protocol/omron",
                        "protocol/mitsubishi",
                        "protocol/simatic",
                    ]
                },
                {
                    title: '设备',
                    collapsable: false,
                    children: [
                        "device/poller",
                        "device/calculator",
                        "device/command",
                        "device/alarm",
                        "device/product",
                        "device/history",
                        "device/filter",
                    ]
                },
                {
                    title: '项目',
                    collapsable: false,
                    children: [
                        "project/job",
                        "project/aggregator",
                        "project/strategy",
                        "project/template",
                    ]
                },
                {
                    title: '组态',
                    collapsable: false,
                    children: [
                        "hmi/editor",
                        "hmi/component",
                    ]
                },
            ],
        }
    }

}
