var myChart4 = echarts.init(document.getElementById('age'));

    var option4 =



//以上为模板，从本行后，直接粘贴［baidu图说］的配置代码
            {
                
                calculable: false,
                series: [
                    {
                        name: "面积模式",
                        type: "pie",
                        radius: [40, 120],
                        center: ["50%", "50%"],
                        roseType: "area",
                        data: [
                            {
                                value: 4.74,
                                name: "12岁以下"
                            },
                            {
                                value: 8.89,
                                name: "12-18岁"
                            },
                            {
                                value: 25.3,
                                name: "19-24岁"
                            },
                            {
                                value: 34.32,
                                name: "25-34岁"
                            },
                            {
                                value: 18.81,
                                name: "25-50岁"
                            },
                            {
                                value: 7.95,
                                name: "51-80岁"
                            }
                        ],
                        label: {
                            normal: {
                                    
                                    textStyle: {
                                        color: "#eeeeee",
                                        fontSize: 15,
                                        fontFamily:'Yuanti SC',
                                        
                                    }
                                
                            }
                        },
                        lineStyle:{
                            normal:{
                                smooth:true,
                                length:20
                            }
                        }
                    }
                ],
                color: ["rgb(230,157,135)", "rgb(115,185,188)"]
            }
//粘贴段落结束，本行以下为模板


    ;
