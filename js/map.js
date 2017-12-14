var myChart3 = echarts.init(document.getElementById('map'),'dark');

    var option3 =



//以上为模板，从本行后，直接粘贴［baidu图说］的配置代码
            {
                title: {
                    x: "center"
                },
                tooltip: {
                    trigger: "item"
                },
                visualMap: {
                    min: 0,
                    max: 0.12,
                    splitNumber: 6,
                    color: ["#e69d87","#e69d87","#73b9bc"],
                    textStyle: {
                        color: '#fff'
                    },
                    left:50,
                    bottom:40
                },
                /*dataRange: {
                    // min: 0,
                    // max: 0.12,
                    x: "left",
                    y: "bottom",
                    text: ["高", "低"],
                    calculable: true,
                    color: ["#e69d87","#e69d87","#73b9bc"],
                    textStyle: {
                        color: "#fff",
                        fontSize: 15,
                        fontFamily:'Yuanti SC'
                    },
                    itemWidth: 15,
                    padding: 5,
                    show:true
                },*/
                
                roamController: {
                    mapTypeControl: {
                        china: true
                    }
                },
                series: [
                    {
                        type: "map",
                        mapType:'china',
                        name: "热议度",
                        itemStyle:{
                            emphasis:{
                                areaColor:'rgb(238,238,238)'
                            }
                        },
                        data: [
                            {
                                value: 0.1148,
                                name: "北京"
                            },
                            {
                                value: 0.0785,
                                name: "广东"
                            },
                            {
                                value: 0.0632,
                                name: "山东"
                            },
                            {
                                value: 0.0451,
                                name: "江苏"
                            },
                            {
                                value: 0.0444,
                                name: "河南"
                            },
                            {
                                value: 0.0368,
                                name: "上海"
                            },
                            {
                                value: 0.0349,
                                name: "四川"
                            },
                            {
                                value: 0.034,
                                name: "浙江"
                            },
                            {
                                value: 0.0325,
                                name: "河北"
                            },
                            {
                                value: 0.0306,
                                name: "辽宁"
                            },
                            {
                                value: 0.0287,
                                name: "黑龙江"
                            },
                            {
                                value: 0.0285,
                                name: "福建"
                            },
                            {
                                value: 0.0221,
                                name: "山西"
                            },
                            {
                                value: 0.0219,
                                name: "陕西"
                            },
                            {
                                value: 0.0213,
                                name: "安徽"
                            },
                            {
                                value: 0.0208,
                                name: "吉林"
                            },
                            {
                                value: 0.02,
                                name: "湖北"
                            },
                            {
                                value: 0.016,
                                name: "湖南"
                            },
                            {
                                value: 0.0142,
                                name: "天津"
                            },
                            {
                                value: 0.0138,
                                name: "江西"
                            },
                            {
                                value: 0.0136,
                                name: "广西"
                            },
                            {
                                value: 0.0128,
                                name: "重庆"
                            },
                            {
                                value: 0.0125,
                                name: "内蒙古"
                            },
                            {
                                value: 0.0117,
                                name: "云南"
                            },
                            {
                                value: 0.0109,
                                name: "贵州"
                            },
                            {
                                value: 0.0083,
                                name: "新疆"
                            },
                            {
                                value: 0.0072,
                                name: "甘肃"
                            },
                            {
                                value: 0.0057,
                                name: "香港"
                            },
                            {
                                value: 0.004,
                                name: "海南"
                            },
                            {
                                value: 0.0036,
                                name: "青海"
                            },
                            {
                                value: 0.003,
                                name: "西藏"
                            },
                            {
                                value: 0.0025,
                                name: "澳门"
                            },
                            {
                                value: 0.0021,
                                name: "台湾"
                            },
                            {
                                value: 0.0021,
                                name: "宁夏"
                            },
                            {
                                value: 0.0000,
                                name: "南海诸岛"
                            }
                        ]
                    }
                ]
            }