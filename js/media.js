var myChart6 = echarts.init(document.getElementById('media'));

    var option6 =



//以上为模板，从本行后，直接粘贴［baidu图说］的配置代码


     {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        xAxis : [
            {
                max:35,
                type : 'value',
                nameTextStyle: {
                    color: "rgba(255, 255,255,0.3)",
                    fontSize: 13,
                    fontFamily:'Yuanti SC',
                },
                // name: "报道媒体数量",
                axisTick : {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgb(115,185,188)",
                        width: 1
                    }

                },splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(238,238,238,0.5)",
                        fontSize: 12,
                        fontFamily:'Yuanti SC'
                    }
                }


            }
        ],
        yAxis : [
            {
                type : 'category',
                zlevel:5,
                axisTick : {show: false},
                data : ['    《人民的名义》全集泄露 湖南卫视称将彻查到底','    《人民的名义》尺度大?来看看贪官忏悔录的尺度','      男子吸毒后感觉自己是祁同伟 报警寻求保护被抓','    《人民的名义》取景地成旅游新热点 95%场景南京拍摄','      周梅森谈《人民的名义》:原本想让李达康腐败掉','      社会治理创新要主动拥抱互联网','    《人民的名义》原版“再现” 南京东南大学别样“毕业照”','    《人民的名义》收视破7 创十年国产剧史最高纪录'],
                // data : ['    《人民的名义》等参评第23届上海电视节白玉兰奖','    《人民的名义》缘何成为“现象级”电视剧','    《人民的名义》全集泄露 湖南卫视称将彻查到底','    《人民的名义》尺度大?来看看贪官忏悔录的尺度','      男子吸毒后感觉自己是祁同伟 报警寻求保护被抓','    《人民的名义》取景地成旅游新热点 95%场景南京拍摄','      周梅森谈《人民的名义》:原本想让李达康腐败掉','      社会治理创新要主动拥抱互联网','    《人民的名义》原版“再现” 南京东南大学别样“毕业照”','    《人民的名义》收视破7 创十年国产剧史最高纪录'],
                axisLabel: {
                    show: true,
                    inside:true,
                    textStyle: {
                        color: "rgba(26,36,44,0.8)",
                        fontSize: 15,
                        fontFamily:'Yuanti SC',
                         // align: "left",

                    }
                },
                splitLine: {
                    show: false
                },
                splitArea: {
                    show: false
                }
            }
        ],
        series : [
            {
                name:'报道媒体数量',
                type:'bar',
                barCategoryGap:'30%',
                label: {
                    normal: {
                        show: false,
                        // position: 'inside'
                    }
                },
                // data:[27, 28, 29, 30, 31, 32, 33,33,35,35],
                data:[ 29, 30, 31, 32, 33,33,35,35],

                itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#c4d6f0'},
                            {offset: 0.7, color: '#859fc7'},
                            {offset: 1, color: '#7289ab'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 1, color: '#98b8e6'},
                            {offset: 0.7, color: '#859fc7'},
                            {offset: 0, color: '#7289ab'}
                        
                        ]
                    )
                }
            },
            }


        ],
        color: [ "rgb(114,137,171)"]
    };
