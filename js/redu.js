
    // 基于准备好的dom，初始化echarts图表
    var myChart2 = echarts.init(document.getElementById('redu'),'dark');

    var option2 =



//以上为模板，从本行后，直接粘贴［baidu图说］的配置代码
            {   
                animationDurationUpdate: 3500,
                animationDuration:4500,
                animationEasingUpdate: 'quinticInOut',
                tooltip: {
                    trigger: "axis"
                },
                toolbox: {
                    show: false,
                    feature: {
                        dataView: {
                            readOnly: true
                        },
                        magicType: {
                            type: ["line", "bar"],
                            show: false
                        }
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: "category",
                        boundaryGap: false,
                        data: ["3月15日", "3月16日", "3月17日", "3月18日", "3月19日", "3月20日", "3月21日", "3月22日", "3月23日", "3月24日", "3月25日", "3月26日", "3月27日", "3月28日", "3月29日", "3月30日", "3月31日", "4月1日", "4月2日", "4月3日", "4月4日", "4月5日", "4月6日", "4月7日", "4月8日", "4月9日", "4月10日", "4月11日", "4月12日", "4月13日", "4月14日", "4月15日", "4月16日", "4月17日", "4月18日", "4月19日", "4月20日", "4月21日", "4月22日", "4月23日", "4月24日", "4月25日", "4月26日", "4月27日", "4月28日", "4月29日", "4月30日", "5月1日", "5月2日", "5月3日", "5月4日", "5月5日", "5月6日", "5月7日", "5月8日", "5月9日", "5月10日", "5月11日", "5月12日", "5月13日", "5月14日", "5月15日", "5月16日", "5月17日", "5月18日", "5月19日", "5月20日", "5月21日", "5月22日", "5月23日", "5月24日", "5月25日", "5月26日", "5月27日", "5月28日", "5月29日"],
                        nameTextStyle: {
                            color: "rgb(255, 170, 170)",
                            fontSize: 16,
                            fontFamily:'Yuanti SC',
                        },
                        name: "日期",
                        nameLocation: "end",
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255, 255, 255,0.5)",
                                width: 0.5,
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        splitArea: {
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
                yAxis: [
                    {
                        type: "value",
                        name: "热词指数",
                        nameLocation: "end",
                        nameTextStyle: {
                            color: "rgb(255, 170, 170)",
                            fontSize: 16,
                            fontFamily:'Yuanti SC'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(238,238,238,0.5)",
                                type: "dashed",
                                width: 1
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        splitArea: {
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
                series: [
                    {
                        type: "line",
                        name: "热词指数",
                        smooth:true,
                        nameTextStyle: {
                            color: "rgb(255, 170, 170)",
                            fontSize: 16,
                            fontFamily:'Yuanti SC',
                        },
                        symbolSize:8,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                               
                            ],
                            animationDuration:2000,
                            animationDelay:1800
                        },
                        data: [451, 10396, 18421, 4859, 11500, 7679, 14013, 8690, 3330, 845, 5955, 4207, 8384, 17225, 13558, 41755, 36626, 50852, 36690, 78612, 126046, 117718, 157791, 155541, 172716, 193935, 173075, 168317, 175695, 270428, 241472, 150569, 129151, 169218, 125500, 136561, 171149, 247190, 117571, 96198, 107230, 119230, 101200, 87988, 94655, 74886, 52854, 49631, 37977, 32527, 26544, 38178, 27219, 17364, 18676, 24192, 17848, 15923, 10273, 9227, 21272, 8839, 15637, 11231, 23158, 40238, 6580, 21545, 30365, 7079, 16488, 29480, 23276, 11095, 6393, 5297]
                    }
                ],
                color: ["rgb(230,157,135)", "rgb(255, 86, 86)", "rgb(191, 0, 0)"]
            }
//粘贴段落结束，本行以下为模板


    ;