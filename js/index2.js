/* - - - - - - - - - - - - - - - - - - - - - - 回天印象 START - - - - - - - - - - - - - - - - - - - - - - */
/**
 * 回天印象 - 人口、地域、产业、事务、组织 导航
 */
(function($){
    var _dataList = [
        {"id": 1, "name": "人口"},
        {"id": 2, "name": "地域"},
        {"id": 3, "name": "产业"},
        {"id": 4, "name": "事务"},
        {"id": 5, "name": "组织"}
    ], _dataIndex = 0,
        _handle,
        _targetName = '#HTYXBottomBox';

    //渲染导航
    function renderNavHtml(){
        $('#leftTabChartNav').html(template('tplJTQKNavHtml', {
            dataList: _dataList,
            index: _dataIndex
        }));
    }

    //
    function renderContentHtml(_tpl, _data){
        $(_targetName).html(template(_tpl, _data));
    }

    //
    function triggerChange(){
        $.ListenTabChnage.trigger({
            id: _dataList[_dataIndex]['id'],
            name: _dataList[_dataIndex]['name']
        }, renderContentHtml);
    }

    //
    function startLoading(){
        $(_targetName).html('<div class="loading-flex-box"><div class="loading"></div></div>');
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            renderNavHtml();
            startLoading();
            triggerChange();
        }, 6000);
    }

    //添加事件
    function addEvent(){
        setTime();

        $(document).on('click', '#leftTabChartNav li', function(){
            _dataIndex = $(this).index();
            renderNavHtml();
            startLoading();
            triggerChange();
        });

        $('#HTYXBottomBox').hover(function(){
           clearInterval(_handle);
        }, function(){
            setTime();
        });
    }

    $(function(){
        renderNavHtml();
        addEvent();
        startLoading();
        setTimeout(function(){
            triggerChange();
        }, 1200);
    });

})(jQuery);

/**
 * 回天印象 人口 - 人口属性趋势、人品职业化趋势
 */
(function($){
    var _dataList = [
            {"id": 1, "name": "人口属性趋势", "list": [
                {"id": 1, "name": "65岁以上", "list": [
                    {"id": 1, "name": "2016", "value": 70},
                    {"id": 2, "name": "2017", "value": 50},
                    {"id": 3, "name": "2018", "value": 80},
                    {"id": 4, "name": "2019", "value": 75},
                    {"id": 5, "name": "2020", "value": 72}
                ]},
                {"id": 2, "name": "41-65岁", "list": [
                    {"id": 1, "name": "2016", "value": 52},
                    {"id": 2, "name": "2017", "value": 50},
                    {"id": 3, "name": "2018", "value": 78},
                    {"id": 4, "name": "2019", "value": 25},
                    {"id": 5, "name": "2020", "value": 55}
                ]},
                {"id": 3, "name": "18-40岁", "list": [
                    {"id": 1, "name": "2016", "value": 32},
                    {"id": 2, "name": "2017", "value": 30},
                    {"id": 3, "name": "2018", "value": 38},
                    {"id": 4, "name": "2019", "value": 35},
                    {"id": 5, "name": "2020", "value": 35}
                ]},
                {"id": 4, "name": "0-17岁", "list": [
                    {"id": 1, "name": "2016", "value": 52},
                    {"id": 2, "name": "2017", "value": 60},
                    {"id": 3, "name": "2018", "value": 78},
                    {"id": 4, "name": "2019", "value": 85},
                    {"id": 5, "name": "2020", "value": 25}
                ]}
            ]},
            {"id": 2, "name": "人口职业变化趋势", "list": [
                {"id": 1, "name": "65岁以上", "list": [
                    {"id": 1, "name": "2016", "value": 80},
                    {"id": 2, "name": "2017", "value": 70},
                    {"id": 3, "name": "2018", "value": 80},
                    {"id": 4, "name": "2019", "value": 85},
                    {"id": 5, "name": "2020", "value": 82}
                ]},
                {"id": 2, "name": "41-65岁", "list": [
                    {"id": 1, "name": "2016", "value": 62},
                    {"id": 2, "name": "2017", "value": 60},
                    {"id": 3, "name": "2018", "value": 78},
                    {"id": 4, "name": "2019", "value": 35},
                    {"id": 5, "name": "2020", "value": 35}
                ]},
                {"id": 2, "name": "18-40岁", "list": [
                    {"id": 1, "name": "2016", "value": 60},
                    {"id": 2, "name": "2017", "value": 59},
                    {"id": 3, "name": "2018", "value": 72},
                    {"id": 4, "name": "2019", "value": 32},
                    {"id": 5, "name": "2020", "value": 45}
                ]},
                {"id": 2, "name": "0-17岁", "list": [
                    {"id": 1, "name": "2016", "value": 52},
                    {"id": 2, "name": "2017", "value": 20},
                    {"id": 3, "name": "2018", "value": 38},
                    {"id": 4, "name": "2019", "value": 65},
                    {"id": 5, "name": "2020", "value": 55}
                ]}
            ]},
        ],
        _dataIndex = 0,
        _colors = ['#5176ee', '#ba1ffa', '#ff70cf', '#fff09b'],
        _dataInfo = {
            HJValue: 99.99,
            SYValue: 98.4
        },
        _chartList = [
            {"id": 1, "name": "65岁以上", "value": 7.1, "max": 50},
            {"id": 2, "name": "41-65岁", "value": 31.1, "max": 50},
            {"id": 3, "name": "18-40岁", "value": 48.0, "max": 50},
            {"id": 4, "name": "0-17岁", "value": 2.7, "max": 50}
        ],
        _handle;

    function checkValByName(_arr, _list){
        for(var i in _arr){
            if(!(function(){
                    for(var j in _list){
                        if(_list[j]==_arr[i]['name']) return true;
                    }
                    return false;
                })()){
                _list[_list.length] = _arr[i]['name'];
            }
            //if end
        }
        //for end
        return _list;
    }

    //获取标题
    function getTitles(){
        var _arr = _dataList[_dataIndex]['list'];
        var _title = [];
        for(var i in _arr){
            _title = checkValByName(_arr[i]['list'], _title);

        }
        return _title;
    }

    //获取分组数据
    function getSeries(){
        var _arr = _dataList[_dataIndex]['list'],
            _result = [];

        for(var i in _arr){
            _result[_result.length] = {
                data: _arr[i]['list'],
                type: 'bar',
                name: _arr[i]['name'],
                barWidth: 15,
                barGap: i!=0?"-100%":"",
                areaStyle: {
                    normal: {
                        color: _colors[i]
                    }
                }
            }
        }
        return _result;
    }

    //获取切换项
    function getLegend(){
        var _result = [], _arr = _dataList[_dataIndex];
        for(var i in _arr['list']){
            _result[_result.length] = _arr['list'][i]['name'];
        }
        return _result;
    }

    //获取参数
    function getParams(){
        return {
            tooltip : {
                show: true,
                backgroundColor: 'transparent',
                trigger : 'item',
                //formatter: '{a}<br />{b}: {c}%',
                position:'top',
                padding: [1, 10],
                textStyle:{
                    fontSize:12
                }
            },
            color: _colors,
            grid: {
                left: '10%',
                top: '26%',
                bottom: '30px',
                right: '2%'
            },
            legend: {
                right: 0,
                top: 0,
                itemWidth: 8,
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 12
                },
                icon: 'circle',
                data: getLegend()
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    color: '#FFFFFF',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                },
                data: getTitles()
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    //formatter: '{value}%',
                    color: '#FFFFFF',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                }
            },
            series: getSeries()
        }
    }

    //创建图表
    function createChartBox(){
        var _chart = echarts.init(document.getElementById('leftQSChartBox'));
        _chart.setOption(getParams());
    }

    //渲染导航模板
    function renderNavHtml(){
        $('#leftQSChartNav').html(template('tplJTQKNavHtml', {
            dataList: _dataList,
            index: _dataIndex
        }));
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            renderNavHtml();
            createChartBox();
        }, 5000);
    }

    function addEvent(){
        setTime();
        //点击事件
        $(document).off('click', '#leftQSChartNav li');
        $(document).on('click', '#leftQSChartNav li', function(){
            _dataIndex = $(this).index();
            renderNavHtml();
            createChartBox();
        });

        $('#leftTabContentBox').parent().hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        });
        //end
    }

    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==1){
                clearInterval(_handle);

                data.render('tplTabRKContentHtml', {
                    dataInfo: _dataInfo,
                    dataList: _chartList
                });

                _dataIndex = 0;
                setTimeout(function(){
                    renderNavHtml();
                    createChartBox();
                    addEvent();
                }, 200)
            }else{
                clearInterval(_handle);
            }
            //if end
        });
    });
})(jQuery);

/**
 * 回天印象 地域 - 五年端来用地与住宅趋势对比，文体用地面积趋势
 */
(function($){
    var _dataInfo = {
        ZMJValue: 99.99,
        SQSLValue: 98.4
    }, _dataBarList = [
        {"id": 1, "name": "商业用地", "color": "#82c6ec", "list": [
            {"id": 1, "name": "2016", "value": 70},
            {"id": 2, "name": "2017", "value": 60},
            {"id": 3, "name": "2018", "value": 90},
            {"id": 4, "name": "2019", "value": 75},
            {"id": 5, "name": "2020", "value": 72}
        ]},
        {"id": 2, "name": "住宅用地", "color": "#ffa93a", "list": [
            {"id": 1, "name": "2016", "value": 52},
            {"id": 2, "name": "2017", "value": 50},
            {"id": 3, "name": "2018", "value": 78},
            {"id": 4, "name": "2019", "value": 25},
            {"id": 5, "name": "2020", "value": 55}
        ]},
    ], _dataLineList = [
        {"id": 1, "name": "文体用地", "color": "#e05f57", "list": [
            {"id": 1, "name": "2016", "value": 52},
            {"id": 2, "name": "2017", "value": 50},
            {"id": 3, "name": "2018", "value": 78},
            {"id": 4, "name": "2019", "value": 25},
            {"id": 5, "name": "2020", "value": 55}
        ]}
    ];

    function checkValByName(_arr, _list){
        for(var i in _arr){
            if(!(function(){
                    for(var j in _list){
                        if(_list[j]==_arr[i]['name']) return true;
                    }
                    return false;
                })()){
                _list[_list.length] = _arr[i]['name'];
            }
            //if end
        }
        //for end
        return _list;
    }

    function getLegend(_arr){
        var _result = [];
        for(var i in _arr){
            _result[_result.length] = _arr[i]['name'];
        }
        return _result;
    }

    function getTitles(_arr){
        var _title = [];
        for(var i in _arr){
            _title = checkValByName(_arr[i]['list'], _title);

        }
        return _title;
    }

    function getBarColor(_arr){
        var _result = [];
        for(var i in _arr){
            _result[i] = _arr[i]['color'];
        }
        return _result;
    }

    function getBarSeries(){
        var _result = [];
        for(var i in _dataBarList){
            _result[_result.length] = {
                data: _dataBarList[i]['list'],
                type: 'bar',
                name: _dataBarList[i]['name'],
                barWidth: 15,
                barGap: i!=0?"-100%":"",
                areaStyle: {
                    normal: {
                        color: _dataBarList[i]['color']
                    }
                }
            }
        }
        return _result;
    }

    function getBarParams(){
        return {
            tooltip : {
                show: true,
                backgroundColor: 'transparent',
                trigger : 'item',
                position:'top',
                padding: [1, 10],
                textStyle:{
                    fontSize:12
                }
            },
            color: getBarColor(_dataBarList),
            grid: {
                left: '10%',
                top: '26%',
                bottom: '30px',
                right: '2%'
            },
            legend: {
                right: 0,
                top: 0,
                itemWidth: 8,
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 12
                },
                icon: 'circle',
                data: getLegend(_dataBarList)
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    color: '#FFFFFF',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                },
                data: getTitles(_dataBarList)
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: '#FFFFFF',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                }
            },
            series: getBarSeries()
        }
    }

    function createBarChartBox(){
       var _charts = echarts.init(document.getElementById('WNSYYDYZZQSDBChartBox'));
        _charts.setOption(getBarParams());
    }

    function getLineSeries(){
        var _result = [];
        for(var i in _dataLineList){
            _result[_result.length] = {
                data: _dataLineList[i]['list'],
                type: 'line',
                name: _dataLineList[i]['name'],
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                { offset: 0, color: _dataLineList[i]['color'] },
                                { offset: .3, color: _dataLineList[i]['color'] },
                                { offset: 1, color: 'transparent' }
                            ],
                            global: false // 缺省为 false
                        }
                    }
                },
                //smooth: true,
                itemStyle:{
                    /* normal: {
                     color: new echarts.graphic.LinearGradient(
                     0, 0, 0, 1,
                     [
                     {offset: 0, color: '#51e1ff'},
                     {offset: 0.5, color: '#4bd4f3'},
                     {offset: 1, color: '#0c2749'}
                     ]
                     )
                     }*/
                }
            }
        }
        return _result;
    }

    function getLineParams(){
        return {
            tooltip : {
                show: true,
                backgroundColor: 'transparent',
                trigger : 'item',
                formatter: '{a}<br />{b}: {c}%',
                position:'top',
                padding: [1, 10],
                textStyle:{
                    fontSize:12
                }
            },
            color: getBarColor(_dataLineList),
            grid: {
                left: '15%',
                top: '26%',
                bottom: '30px',
                right: '5%'
            },
            legend: {
                right: 0,
                top: 0,
                itemWidth: 8,
                textStyle: {
                    color: '#FFFFFF'
                },
                icon: 'circle',
                data: getLegend(_dataLineList)
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: getTitles(_dataLineList),
                splitLine:{
                    show: false,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    interval:0,
                    //rotate: 25,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 14      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    interval:0,
                    //formatter: "{value}%",
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 14      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            series: getLineSeries()
        }
    }

    function createLineChartBox(){
        var _chart = echarts.init(document.getElementById('WTYDMJQSChartBox'));
        _chart.setOption(getLineParams());
    }

    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==2){
                data.render('tplTabDYContentHtml', {
                    dataInfo: _dataInfo
                });
                setTimeout(function(){
                    createBarChartBox();
                    createLineChartBox();
                }, 200);
            }
            //if end
        });
    });
})(jQuery);

/**
 * 回天印象 产业 - 产业分类占比，5年注册与经营企业及个体增长趋势
 */
(function($){
    var _dataInfo = {
        ZCValue: 99.9,
        JYValue: 98.4
    }, _pieDataList = [
        {"id": 1, "name": "信息技术", "value": 50, 'color': '#3aa9ff'},
        {"id": 2, "name": "餐饮住宿", "value": 40, 'color': '#43ca26'},
        {"id": 3, "name": "建筑业", "value": 30, 'color': '#ffa93a'},
        {"id": 4, "name": "其他", "value": 20, 'color': '#ffef95'}
    ], _lineDataList = [
        {"id": 1, "name": "注册企业及个体", 'color': '#5665c8', "list": [
            {"id": 1, "name": "2016", "value": 52},
            {"id": 2, "name": "2017", "value": 20},
            {"id": 3, "name": "2018", "value": 38},
            {"id": 4, "name": "2019", "value": 65},
            {"id": 5, "name": "2020", "value": 55}
        ]},
        {"id": 2, "name": "经营企业及个体", 'color': '#5665c8', "list": [
            {"id": 1, "name": "2016", "value": 80},
            {"id": 2, "name": "2017", "value": 70},
            {"id": 3, "name": "2018", "value": 80},
            {"id": 4, "name": "2019", "value": 85},
            {"id": 5, "name": "2020", "value": 82}
        ]}
    ], _colors = ['#5665c8', '#5665c8', '#ff70cf', '#f2e495'];

    function getPieParam(){
        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: ['#3aa9ff', '#43ca26', '#ffa93a', '#ffef95'],
            series: [
                {
                    name: '产业分类占比',
                    type: 'pie',
                    radius: "70%",
                    center: ['50%', '55%'],
                    data: (function(){
                        var _result = [];
                        for(var i in _pieDataList){
                            _result[i] = _pieDataList[i];
                        }
                        return _result;
                    })(),
                    minAngle: 4,
                    avoidLabelOverlap: true,
                    label: {
                        lineHeight: 14,
                        color: '#FFFFFF',
                        formatter: '{b} {c}%' + '\n',
                        fontSize: 14,
                        fontFamily: '"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        borderWidth: 20,
                        borderRadius: 4,
                        padding: [0, -50]
                    },
                    labelLine: {
                        length: 10,
                        length2: 20,
                        lineStyle: {
                            color: '#FFFFFF'
                        }
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    function createPieChartBox(){
        var _chart = echarts.init(document.getElementById('CYFLZBChartBox'));
        _chart.setOption(getPieParam());
    }

    function checkValByName(_arr, _list){
        for(var i in _arr){
            if(!(function(){
                    for(var j in _list){
                        if(_list[j]==_arr[i]['name']) return true;
                    }
                    return false;
                })()){
                _list[_list.length] = _arr[i]['name'];
            }
            //if end
        }
        //for end
        return _list;
    }

    //获取标题
    function getTitles(){
        var _title = [];
        for(var i in _lineDataList){
            _title = checkValByName(_lineDataList[i]['list'], _title);

        }
        return _title;
    }

    //获取切换项
    function getLegend(){
        var _result = [];
        for(var i in _lineDataList){
            _result[_result.length] = _lineDataList[i]['name'];
        }
        return _result;
    }

    function getSeries(){
        var _result = [];

        for(var i in _lineDataList){
            _result[_result.length] = {
                data: _lineDataList[i]['list'],
                type: 'line',
                name: _lineDataList[i]['name'],
                lineStyle: {
                    color: _lineDataList[i]['color']
                },
                label: {
                    color: _lineDataList[i]['color']
                }
            }
        }
        return _result;
    }

    //获取参数
    function getLineParams(){
        return {
            tooltip : {
                show: true,
                backgroundColor: 'transparent',
                trigger : 'item',
                formatter: '{a}<br />{b}: {c}%',
                //formatter : function (prams){
                //    return "";
                //},
                position:'top',
                padding: [1, 10],
                textStyle:{
                    fontSize:12
                }
            },
            grid: {
                left: '12%',
                top: '28%',
                bottom: '32px',
                right: '4%'
            },
            legend: {
                right: 0,
                top: 0,
                textStyle: {
                    color: '#FFFFFF'
                },
                icon: 'circle',
                data: getLegend()
            },
            color: _colors,
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: getTitles(),
                splitLine:{
                    show: false,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    interval:0,
                    //rotate: 25,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 14      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    interval:0,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 16      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            series: getSeries()
        }
    }

    function createLineChartBox(){
        var _chart = echarts.init(document.getElementById('5NZCYJYQYJGTZZQSChartBox'));
        _chart.setOption(getLineParams());
    }

    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==3){
                data.render('tplTabCYContentHtml', {
                    dataInfo: _dataInfo
                });
                setTimeout(function(){
                    createPieChartBox();
                    createLineChartBox();
                }, 200);
            }
            //if end
        });
    });
})(jQuery);

/**
 * 回天印象 事务 - 投诉分类占比，三率趋势变化
 */
(function($){
    var _dataInfo = {
        ZWValue: 99.9,
        WSValue: 98.4
    }, _pieDataList = [
        {"id": 1, "name": "噪音", "value": 50, 'color': '#3aa9ff'},
        {"id": 2, "name": "投诉内容", "value": 40, 'color': '#43ca26'},
        {"id": 3, "name": "未诉内容", "value": 30, 'color': '#ffa93a'},
        {"id": 4, "name": "其他", "value": 20, 'color': '#ffef95'}
    ], _lineDataList = [
        {"id": 1, "name": "响应率", 'color': '#5665c8', "list": [
            {"id": 1, "name": "2016", "value": 52},
            {"id": 2, "name": "2017", "value": 20},
            {"id": 3, "name": "2018", "value": 38},
            {"id": 4, "name": "2019", "value": 65},
            {"id": 5, "name": "2020", "value": 55}
        ]},
        {"id": 2, "name": "解决率", 'color': '#5665c8', "list": [
            {"id": 1, "name": "2016", "value": 80},
            {"id": 2, "name": "2017", "value": 70},
            {"id": 3, "name": "2018", "value": 80},
            {"id": 4, "name": "2019", "value": 85},
            {"id": 5, "name": "2020", "value": 82}
        ]},
        {"id": 3, "name": "满意率", 'color': '#ff70cf', "list": [
            {"id": 1, "name": "2016", "value": 62},
            {"id": 2, "name": "2017", "value": 60},
            {"id": 3, "name": "2018", "value": 78},
            {"id": 4, "name": "2019", "value": 35},
            {"id": 5, "name": "2020", "value": 35}
        ]}
    ], _colors = ['#5665c8', '#5665c8', '#ff70cf', '#f2e495'];

    function getPieParam(){
        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: ['#3aa9ff', '#43ca26', '#ffa93a', '#ffef95'],
            series: [
                {
                    name: '社会组织分类',
                    type: 'pie',
                    radius: "70%",
                    center: ['50%', '55%'],
                    data: (function(){
                        var _result = [];
                        for(var i in _pieDataList){
                            _result[i] = _pieDataList[i];
                        }
                        return _result;
                    })(),
                    minAngle: 4,
                    avoidLabelOverlap: true,
                    label: {
                        lineHeight: 14,
                        color: '#FFFFFF',
                        formatter: '{b} {c}%' + '\n',
                        fontSize: 14,
                        fontFamily: '"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        borderWidth: 20,
                        borderRadius: 4,
                        padding: [0, -50]
                    },
                    labelLine: {
                        length: 10,
                        length2: 20,
                        lineStyle: {
                            color: '#FFFFFF'
                        }
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    function createPieChartBox(){
        var _chart = echarts.init(document.getElementById('TSFLZBChartBox'));
        _chart.setOption(getPieParam());
    }

    function checkValByName(_arr, _list){
        for(var i in _arr){
            if(!(function(){
                    for(var j in _list){
                        if(_list[j]==_arr[i]['name']) return true;
                    }
                    return false;
                })()){
                _list[_list.length] = _arr[i]['name'];
            }
            //if end
        }
        //for end
        return _list;
    }

    //获取标题
    function getTitles(){
        var _title = [];
        for(var i in _lineDataList){
            _title = checkValByName(_lineDataList[i]['list'], _title);

        }
        return _title;
    }

    //获取切换项
    function getLegend(){
        var _result = [];
        for(var i in _lineDataList){
            _result[_result.length] = _lineDataList[i]['name'];
        }
        return _result;
    }

    function getSeries(){
        var _result = [];

        for(var i in _lineDataList){
            _result[_result.length] = {
                data: _lineDataList[i]['list'],
                type: 'line',
                name: _lineDataList[i]['name'],
                lineStyle: {
                    color: _lineDataList[i]['color']
                },
                label: {
                    color: _lineDataList[i]['color']
                }
            }
        }
        return _result;
    }

    //获取参数
    function getLineParams(){
        return {
            tooltip : {
                show: true,
                backgroundColor: 'transparent',
                trigger : 'item',
                formatter: '{a}<br />{b}: {c}%',
                //formatter : function (prams){
                //    return "";
                //},
                position:'top',
                padding: [1, 10],
                textStyle:{
                    fontSize:12
                }
            },
            grid: {
                left: '12%',
                top: '28%',
                bottom: '32px',
                right: '4%'
            },
            legend: {
                right: 0,
                top: 0,
                textStyle: {
                    color: '#FFFFFF'
                },
                icon: 'circle',
                data: getLegend()
            },
            color: _colors,
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: getTitles(),
                splitLine:{
                    show: false,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    interval:0,
                    //rotate: 25,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 14      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    interval:0,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 16      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            series: getSeries()
        }
    }

    function createLineChartBox(){
        var _chart = echarts.init(document.getElementById('SLQSBHChartBox'));
        _chart.setOption(getLineParams());
    }

    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==4){
                data.render('tplTabSWContentHtml', {
                    dataInfo: _dataInfo
                });
                setTimeout(function(){
                    createPieChartBox();
                    createLineChartBox();
                }, 200);
            }
            //if end
        });
    });
})(jQuery);

/**
 * 回天印象 组织 - 社会组织分类，各机构变化趋势
 */
(function($){
    var _dataInfo = {
        SHValue: 99.9,
        JYValue: 99.9,
        YLValue: 99.9,
        YL2Value: 99.9
    }, _pieDataList = [
        {"id": 1, "name": "竞争性营利组织", "value": 50, 'color': '#3aa9ff'},
        {"id": 2, "name": "竞争性非营利组织", "value": 40, 'color': '#43ca26'},
        {"id": 3, "name": "独占性营利组织", "value": 30, 'color': '#ffa93a'},
        {"id": 4, "name": "独占性非营利性组织", "value": 20, 'color': '#ffef95'}
    ], _lineDataList = [
        {"id": 1, "name": "社会机构", 'color': '#5665c8', "list": [
            {"id": 1, "name": "2016", "value": 52},
            {"id": 2, "name": "2017", "value": 20},
            {"id": 3, "name": "2018", "value": 38},
            {"id": 4, "name": "2019", "value": 65},
            {"id": 5, "name": "2020", "value": 55}
        ]},
        {"id": 2, "name": "教育机构", 'color': '#5665c8', "list": [
            {"id": 1, "name": "2016", "value": 80},
            {"id": 2, "name": "2017", "value": 70},
            {"id": 3, "name": "2018", "value": 80},
            {"id": 4, "name": "2019", "value": 85},
            {"id": 5, "name": "2020", "value": 82}
        ]},
        {"id": 3, "name": "养老机构", 'color': '#ff70cf', "list": [
            {"id": 1, "name": "2016", "value": 62},
            {"id": 2, "name": "2017", "value": 60},
            {"id": 3, "name": "2018", "value": 78},
            {"id": 4, "name": "2019", "value": 35},
            {"id": 5, "name": "2020", "value": 35}
        ]},
        {"id": 4, "name": "医疗机构", 'color': '#f2e495', "list": [
            {"id": 1, "name": "2016", "value": 60},
            {"id": 2, "name": "2017", "value": 59},
            {"id": 3, "name": "2018", "value": 72},
            {"id": 4, "name": "2019", "value": 32},
            {"id": 5, "name": "2020", "value": 45}
        ]},
    ], _colors = ['#5665c8', '#5665c8', '#ff70cf', '#f2e495'];

    function getPieParam(){
        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: ['#3aa9ff', '#43ca26', '#ffa93a', '#ffef95'],
            series: [
                {
                    name: '社会组织分类',
                    type: 'pie',
                    radius: "70%",
                    center: ['50%', '55%'],
                    data: (function(){
                        var _result = [];
                        for(var i in _pieDataList){
                            _result[i] = _pieDataList[i];
                        }
                        return _result;
                    })(),
                    minAngle: 4,
                    avoidLabelOverlap: true,
                    label: {
                        lineHeight: 14,
                        color: '#FFFFFF',
                        formatter: '{b} {c}%' + '\n',
                        fontSize: 14,
                        fontFamily: '"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        borderWidth: 20,
                        borderRadius: 4,
                        padding: [0, -50]
                    },
                    labelLine: {
                        length: 10,
                        length2: 20,
                        lineStyle: {
                            color: '#FFFFFF'
                        }
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    function createPieChartBox(){
        var _chart = echarts.init(document.getElementById('SHZZFLChartBox'));
        _chart.setOption(getPieParam());
    }

    function checkValByName(_arr, _list){
        for(var i in _arr){
            if(!(function(){
                    for(var j in _list){
                        if(_list[j]==_arr[i]['name']) return true;
                    }
                    return false;
                })()){
                _list[_list.length] = _arr[i]['name'];
            }
            //if end
        }
        //for end
        return _list;
    }

    //获取标题
    function getTitles(){
        var _title = [];
        for(var i in _lineDataList){
            _title = checkValByName(_lineDataList[i]['list'], _title);

        }
        return _title;
    }

    //获取切换项
    function getLegend(){
        var _result = [];
        for(var i in _lineDataList){
            _result[_result.length] = _lineDataList[i]['name'];
        }
        return _result;
    }

    function getSeries(){
        var _result = [];

        for(var i in _lineDataList){
            _result[_result.length] = {
                data: _lineDataList[i]['list'],
                type: 'line',
                name: _lineDataList[i]['name'],
                lineStyle: {
                    color: _lineDataList[i]['color']
                },
                label: {
                    color: _lineDataList[i]['color']
                }
            }
        }
        return _result;
    }

    //获取参数
    function getLineParams(){
        return {
            tooltip : {
                show: true,
                backgroundColor: 'transparent',
                trigger : 'item',
                formatter: '{a}<br />{b}: {c}%',
                //formatter : function (prams){
                //    return "";
                //},
                position:'top',
                padding: [1, 10],
                textStyle:{
                    fontSize:12
                }
            },
            grid: {
                left: '12%',
                top: '28%',
                bottom: '32px',
                right: '4%'
            },
            legend: {
                right: 0,
                top: 0,
                textStyle: {
                    color: '#FFFFFF'
                },
                icon: 'circle',
                data: getLegend()
            },
            color: _colors,
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: getTitles(),
                splitLine:{
                    show: false,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    interval:0,
                    //rotate: 25,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 14      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    interval:0,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 16      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            series: getSeries()
        }
    }

    function createLineChartBox(){
        var _chart = echarts.init(document.getElementById('GJGBHQSChartBox'));
        _chart.setOption(getLineParams());
    }

    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==5){
                data.render('tplTabZZContentHtml', {
                    dataInfo: _dataInfo
                });

                setTimeout(function(){
                    createPieChartBox();
                    createLineChartBox();
                }, 200);
            }
            //if end
        });
    });
})(jQuery);

/* - - - - - - - - - - - - - - - - - - - - - - 回天印象 END - - - - - - - - - - - - - - - - - - - - - - */

/**
 * 中间地图信息
 */
(function($){
    var _dataList = {
        ycValue: "2.13",
        rlValue: "1209738",
        ylValue: "426"
    };

    function renderHtml(){
        $('#mapTopInfo').html(template('tplMidTopList', {
            dataInfo: _dataList
        }));
    }

    $(function(){
        renderHtml();
    });
})(jQuery);

/**
 * 突发事件 和 诉求热点
 */
(function($){
    var _dataList = [
            {"id": 1, "title": "22点 群体性斗殴", "intro": "龙泽园小区20余人持械斗殴"},
            {"id": 2, "title": "19点 交通严重拥堵", "intro": "回龙观东大街8车连撞"},
            {"id": 3, "title": "15点 小学生食物中毒", "intro": "小学中午发生集体食物中毒"},
            {"id": 4, "title": "12点 商场突发踩踏事件", "intro": "商场酬宾 人员管理不善导致踩踏"},
        ],
        _dataIndex = 0,
        _handle,
        _dataList2 = [
            {"id": 1, "title": "12.25 万润家园马路扰民", "intro": "道路拓宽 噪音增大 缺少隔音"},
            {"id": 2, "title": "12.21 幼升小政策咨询", "intro": "有工作居住证 无房产"},
            {"id": 3, "title": "12.21 隔断房严重", "intro": "天通苑北二区隔断房严重"},
            {"id": 4, "title": "12.17 垃圾无人清理", "intro": "小区垃圾混投且无人清理"},
            {"id": 5, "title": "12.8 普惠幼儿园收费标准", "intro": "每月保育费900元合理吗"},
        ],
        _dataIndex2 = 0,
        _handle2;

    function renderHtml(){
        //突发事件
        $('#TFSJBox').html(template('tplTFListHtml', {
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 2),
            index: _dataIndex
        }));
        //诉求热点
        $('#SQRDBox').html(template('tplTFListHtml', {
            dataList: $.getArrayByIndex(_dataList2, _dataIndex2, 2),
            index: _dataIndex2
        }));
    }

    //突发事件 定时器
    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length?0:_dataIndex+1;
            renderHtml();
        }, 5000);
    }

    //诉求热点 定时器
    function setTime2(){
        _handle2 = setInterval(function(){
            _dataIndex2 = _dataIndex2 + 1 >= _dataList2.length?0:_dataIndex2+1;
            renderHtml();
        }, 5000);
    }

    function addEvent(){
        setTime();
        setTime2();

        //突发事件
        $('#TFSJBox').hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        });

        //诉求热点
        $('#SQRDBox').hover(function(){
            clearInterval(_handle2);
        }, function(){
            setTime2();
        });
    }

    $(function(){
        renderHtml();
        addEvent();
    });
})(jQuery);

/**
 * 三年行动计划
 */
(function($){
    var _dataList = [
        {"id": 1, "name": "项目总数", "value": 120},
        {"id": 2, "name": "完工投用", "value": 33},
        {"id": 3, "name": "续建复工", "value": 17},
        {"id": 4, "name": "新建未开", "value": 10},
        {"id": 5, "name": "超时项目", "value": 60}
    ], _dataIndex = 0, _handle;

    function renderHtml(){
        $('#SNXDJHList').html(template('tplSNXDJHHtml', {
            dataList: _dataList,
            index: _dataIndex
        }))
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            renderHtml();
        }, 5000);
    }

    function addEvent(){
        setTime();

        $('#SNXDJHList').hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        });
    }

    $(function(){
        renderHtml();
        addEvent();
    });

})(jQuery);

/**
 * 交通情况
 */
(function($){
    var _dataList = [
        {"id": 1, "name": "通行效率提升比率", "list": [
            {"id": 1, "name": "早高峰", "list": [
                {"id": 1, "name": "2016", "value": 0.7},
                {"id": 2, "name": "2017", "value": 0.5},
                {"id": 3, "name": "2018", "value": 0.8},
                {"id": 4, "name": "2019", "value": 0.75},
                {"id": 5, "name": "2020", "value": 0.72}
            ]},
            {"id": 1, "name": "晚高峰", "list": [
                {"id": 1, "name": "2016", "value": 0.52},
                {"id": 2, "name": "2017", "value": 0.5},
                {"id": 3, "name": "2018", "value": 0.78},
                {"id": 4, "name": "2019", "value": 0.25},
                {"id": 5, "name": "2020", "value": 0.55}
            ]}
        ]},
        {"id": 2, "name": "车辆平均通行率", "list": [
            {"id": 1, "name": "早高峰", "list": [
                {"id": 1, "name": "2016", "value": 0.8},
                {"id": 2, "name": "2017", "value": 0.7},
                {"id": 3, "name": "2018", "value": 0.8},
                {"id": 4, "name": "2019", "value": 0.85},
                {"id": 5, "name": "2020", "value": 0.82}
            ]},
            {"id": 1, "name": "晚高峰", "list": [
                {"id": 1, "name": "2016", "value": 0.62},
                {"id": 2, "name": "2017", "value": 0.6},
                {"id": 3, "name": "2018", "value": 0.78},
                {"id": 4, "name": "2019", "value": 0.35},
                {"id": 5, "name": "2020", "value": 0.35}
            ]}
        ]},
    ], _dataIndex = 0,
        _colors = ['#d55b55', '#f1ac4a'],
        _handle;

    function checkValByName(_arr, _list){
        for(var i in _arr){
            if(!(function(){
                    for(var j in _list){
                        if(_list[j]==_arr[i]['name']) return true;
                    }
                    return false;
                })()){
                _list[_list.length] = _arr[i]['name'];
            }
            //if end
        }
        //for end
        return _list;
    }

    //获取标题
    function getTitles(){
        var _arr = _dataList[_dataIndex]['list'];
        var _title = [];
        for(var i in _arr){
            _title = checkValByName(_arr[i]['list'], _title);

        }
        return _title;
    }

    //获取分组数据
    function getSeries(){
        var _arr = _dataList[_dataIndex]['list'],
            _result = [];

        for(var i in _arr){
            _result[_result.length] = {
                data: _arr[i]['list'],
                type: 'line',
                name: _arr[i]['name'],
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                { offset: 0, color: _colors[i]  },
                                { offset:.3, color: _colors[i]  },
                                { offset: 1, color: 'transparent' }
                            ],
                            global: false // 缺省为 false
                        }
                    }
                },
                //smooth: true,
                itemStyle:{
                   /* normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#51e1ff'},
                                {offset: 0.5, color: '#4bd4f3'},
                                {offset: 1, color: '#0c2749'}
                            ]
                        )
                    }*/
                }
            }
        }
        return _result;
    }

    //获取切换项
    function getLegend(){
        var _result = [], _arr = _dataList[_dataIndex];
        for(var i in _arr['list']){
            _result[_result.length] = _arr['list'][i]['name'];
        }
        return _result;
    }

    function getParams(){
        return {
            tooltip : {
                show: true,
                backgroundColor: 'transparent',
                trigger : 'item',
                formatter: '{a}<br />{b}: {c}%',
                position:'top',
                padding: [1, 10],
                textStyle:{
                    fontSize:12
                }
            },
            color: _colors,
            grid: {
                left: '15%',
                top: '26%',
                bottom: '30px',
                right: '5%'
            },
            legend: {
                right: 0,
                top: 0,
                itemWidth: 8,
                textStyle: {
                    color: '#FFFFFF'
                },
                icon: 'circle',
                data: getLegend()
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: getTitles(),
                splitLine:{
                    show: false,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    interval:0,
                    //rotate: 25,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 14      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    interval:0,
                    //formatter: "{value}%",
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize : 14      //更改坐标轴文字大小
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#0d244f' //更改坐标轴颜色
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            series: getSeries()
        }
    }

    //创建图表
    function createChartBox(){
        var _chart = echarts.init(document.getElementById('JTQKChartBox'));
        _chart.setOption(getParams());
    }

    //渲染导航模板
    function renderNavHtml(){
        $('#JTQKNavList').html(template('tplJTQKNavHtml', {
            dataList: _dataList,
            index: _dataIndex
        }));
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            renderNavHtml();
            createChartBox();
        }, 5000);
    }

    function addEvent(){
        setTime();
        //点击事件
        $(document).on('click', '#JTQKNavList li', function(){
            _dataIndex = $(this).index();
            renderNavHtml();
            createChartBox();
        });

        $('#JTQKTopNavBox').parent().hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        });
        //end
    }

    $(function(){
        renderNavHtml();
        setTimeout(function(){
            createChartBox();
            addEvent();
        }, 200)
    });
})(jQuery);

/**
 * 基层治理
 */
(function($){

    var _leftDataInfo = {
            xylValue: "30.33%",
            jjlValue: "80.53%",
            mylValue: "80.23%"
        },
        _dataList = [
            {"id": 1, "name": "未诉先办", "list": [
                {"id": 101, "name": "2016", "value": 159},
                {"id": 102, "name": "2017", "value": 60},
                {"id": 103, "name": "2018", "value": 166},
                {"id": 104, "name": "2019", "value": 68},
                {"id": 105, "name": "2020", "value": 172},
            ]},
            {"id": 2, "name": "接诉即办", "list": [
                {"id": 201, "name": "2016", "value": 69},
                {"id": 202, "name": "2017", "value": 170},
                {"id": 203, "name": "2018", "value": 76},
                {"id": 204, "name": "2019", "value": 188},
                {"id": 205, "name": "2020", "value": 82},
            ]},
            {"id": 2, "name": "吹哨报道", "list": [
                {"id": 201, "name": "2016", "value": 169},
                {"id": 202, "name": "2017", "value": 70},
                {"id": 203, "name": "2018", "value": 176},
                {"id": 204, "name": "2019", "value": 88},
                {"id": 205, "name": "2020", "value": 182},
            ]},
        ],
        _dataIndex = 0,
        _showSize = 5;

    function checkValByName(_arr, _list){
        for(var i in _arr){
            if(!(function(){
                    for(var j in _list){
                        if(_list[j]==_arr[i]['name']) return true;
                    }
                    return false;
                })()){
                _list[_list.length] = _arr[i]['name'];
            }
            //if end
        }
        //for end
        return _list;
    }

    //获取标题
    function getTitles(){
        var _title = [];
        for(var i in _dataList){
            _title = checkValByName(_dataList[i]['list'], _title);

        }
        return _title;
    }

    //获取列表
    function getList(){
        var _series = [];
        var _sIndex = 0;
        for(var i in _dataList){
            _series[_sIndex] = {
                type: 'bar',
                name: _dataList[i]['name'],
                barWidth: 10
            };

            if(_dataList[i]['list'].length!=12){
                _dataList[i]['list'].length = 12;
            }

            _series[_sIndex]['data'] =  $.getArrayByIndex(_dataList[i]['list'], _dataIndex, _showSize);
            _sIndex++;
        }

        return _series;
    }

    function getParam(){
        var _titles = getTitles();
        _titles = $.getArrayByIndex(_titles, _dataIndex, _showSize);
        return {
            color: ['#70c6e1', '#4c71ed', '#ffb33e'],
            tooltip : {
                show: true,
                backgroundColor: 'transparent',
                trigger : 'item',
                position:'top',
                textStyle:{
                    fontSize:12
                }
            },
            legend: {
                show: true,
                right: 0,
                top: 0,
                icon: 'circle',
                itemWidth: 8,
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 10
                },
                data: (function(){
                    var _result = [];
                    for(var i in _dataList){
                        _result[i] = _dataList[i]['name'];
                    }
                    return _result;
                })()
            },
            grid: {
                top: '20%',
                right: '2%',
                left: '40px',
                bottom: '30px',
                containLabel: false
            },
            xAxis: {
                type: 'category',
                data: _titles,
                axisLabel: {
                    color: '#FFFFFF',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    //formatter: '{value}%',
                    color: '#FFFFFF',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                }
            },
            series: getList()
        }
    }

    function renderHtml(){
        $('#JCZLNavInfo').html(template('tplJCZLListHtml', {
            dataInfo: _leftDataInfo
        }))
    }

    //渲染图表
    function renderChartBox(){
        var _chart = echarts.init(document.getElementById('JCZLChartBox'));
        _chart.setOption(getParam());
    }

    $(function(){
        renderHtml();

        setTimeout(function(){
            renderChartBox();
        }, 200);
    });

})(jQuery);

/**
 * 社区管理
 */
(function($){
    var _dataList = [
        {"id": 1, "name1": "日健康状", "name2": "态核验数", "value": "9703"},
        {"id": 2, "name1": "月群租房", "name2": "发现数量", "value": "386"},
    ],
        _dataList2 = [
            {"id": 1, "name": "厨余垃圾分出率", "list": [
                {"id": 101, "name": "1月", "value": 59},
                {"id": 102, "name": "2月", "value": 60},
                {"id": 103, "name": "3月", "value": 66},
                {"id": 104, "name": "4月", "value": 68},
                {"id": 105, "name": "5月", "value": 72},
                {"id": 106, "name": "6月", "value": 75},
                {"id": 107, "name": "7月", "value": 78},
                {"id": 108, "name": "8月", "value": 92},
                {"id": 109, "name": "9月", "value": 93},
                {"id": 110, "name": "10月", "value": 95},
                {"id": 111, "name": "11月", "value": 98},
                {"id": 112, "name": "12月", "value": 99},
            ]},
            {"id": 2, "name": "线上培训点击率", "list": [
                {"id": 201, "name": "1月", "value": 69},
                {"id": 202, "name": "2月", "value": 70},
                {"id": 203, "name": "3月", "value": 76},
                {"id": 204, "name": "4月", "value": 88},
                {"id": 205, "name": "5月", "value": 82},
                {"id": 206, "name": "6月", "value": 85},
                {"id": 207, "name": "7月", "value": 88},
                {"id": 208, "name": "8月", "value": 82},
                {"id": 209, "name": "9月", "value": 83},
                {"id": 210, "name": "10月", "value": 85},
                {"id": 211, "name": "11月", "value": 88},
                {"id": 212, "name": "12月", "value": 88},
            ]},
        ],
        _dataIndex2 = 0,
        _showSize = 4,
        _handle;

    //渲染左侧内容
    function renderHtml(){
        $('#HT05RightList').html(template('tplSQListHtml', {
            dataList: _dataList
        }));
    }

    function checkValByName(_arr, _list){
        for(var i in _arr){
            if(!(function(){
                    for(var j in _list){
                        if(_list[j]==_arr[i]['name']) return true;
                    }
                    return false;
                })()){
                _list[_list.length] = _arr[i]['name'];
            }
            //if end
        }
        //for end
        return _list;
    }

    //获取标题
    function getTitles(){
        var _title = [];
        for(var i in _dataList2){
            _title = checkValByName(_dataList2[i]['list'], _title);

        }
        return _title;
    }

    //获取列表
    function getList(){
        var _series = [];
        var _sIndex = 0;
        for(var i in _dataList2){
            _series[_sIndex] = {
                type: 'bar',
                name: _dataList2[i]['name'],
                barWidth: 10
            };

            if(_dataList2[i]['list'].length!=12){
                _dataList2[i]['list'].length = 12;
            }

            _series[_sIndex]['data'] =  $.getArrayByIndex(_dataList2[i]['list'], _dataIndex2, _showSize);
            _sIndex++;
        }

        return _series;
    }

    function getParam(){
        var _titles = getTitles();
        _titles = $.getArrayByIndex(_titles, _dataIndex2, _showSize);
        return {
            color: ['#3cffcf', '#08b6ff'],
            tooltip : {
                show: true,
                backgroundColor: 'transparent',
                trigger : 'item',
                position:'top',
                textStyle:{
                    fontSize:12
                }
            },
            legend: {
                show: true,
                right: 0,
                top: 0,
                icon: 'circle',
                itemWidth: 8,
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 10
                },
                data: (function(){
                    var _result = [];
                    for(var i in _dataList2){
                        _result[i] = _dataList2[i]['name'];
                    }
                    return _result;
                })()
            },
            grid: {
                top: '20%',
                right: '2%',
                left: '40px',
                bottom: '30px',
                containLabel: false
            },
            xAxis: {
                type: 'category',
                data: _titles,
                axisLabel: {
                    color: '#FFFFFF',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}%',
                    color: '#FFFFFF',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#3b3d55'
                    }
                }
            },
            series: getList()
        }
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex2 = _dataIndex2 + 1 >=12 ? 0 : _dataIndex2 + 1;
            renderChartBox();
        }, 3000);
    }


    //渲染图表
    function renderChartBox(){
        var _chart = echarts.init(document.getElementById('HT05RightChart'));
        _chart.setOption(getParam());
    }

    function addEvent(){
        setTime();

        $('#HT05RightChart').hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        });
    }

    $(function(){
        renderHtml();

        setTimeout(function(){
            renderChartBox();
            addEvent();
        }, 200);
    });

})(jQuery);

/**
* 媒体聚焦（字符云）
*/
(function($){
    var _wordsChart;

    //获取单词参数
    function getWordsParams(_data, _name){
        _data = 'object' === typeof _data ? _data : [];
        return {
            tooltip: {
                show: true,
                formatter: '{b} : {c} ',
            },
            //color: ['#EA4E41', '#DD8043', '#EDCF36'],
            series: [{
                name: _name,
                type: 'wordCloud',
                size: ['100%', '100%'],
                left: 'center',
                top: 'center',
                shape: 'circle',
                gridSize: 8,
                drawOutOfBound: false,
                // 文字旋转角度可选列表，默认会随机从水平（0）和垂直（90）两个方向中选择，可以设置多个可选角度，例如 [0, -45, 45, 90]
                textRotation : [0, 0, 0, 0],
                rotationRange: [0, 0],
                //rotationStep: 45,
                sizeRange: [12, 20],
                textPadding: 10,
                autoSize: {
                    enable: true,
                    minSize: 12
                },
                textStyle: {
                    normal: {
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        // Color can be a callback function or a color string
                        color: function(param){
                            return param.data['color'];
                        }
                        //color: function () {
                        //    // Random color
                        //    return 'rgb(' + [
                        //            Math.round(Math.random() * 160),
                        //            Math.round(Math.random() * 160),
                        //            Math.round(Math.random() * 160)
                        //        ].join(',') + ')';
                        //}
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: _data
            }]
        }
    }

    var _dataList = [
            { name: "睡城 堵城 大城市病", value: 10000, color: "#ea4c3e" },
            { name: "潮汐紧密", value: 6181, color: "#f48d46" },
            { name: "公共服务配套滞后", value: 4386, color: "#ea4c3e" },
            { name: "交通拥堵", value: 4055, color: "#f48d46" },
            { name: "土地资源稀缺", value: 2467, color: "#f1d236" },
            { name: "“睡城 堵城 大城市病”", value: 2244, color: "#ea4c3e" },
            { name: "潮汐紧密",value: 1898, color: "#f48d46" },
            { name: "公共服务配套滞后", value: 1484, color: "#ea4c3e" },
            { name: "交通拥堵", value: 1484, color: "#f48d46" },
            { name: "土地资源稀缺", value: 1484, color: "#f1d236" },
        ],
        _dataList2 = [
            { name: "回+双创社区", value: 599, color: "#00a15c" },
            { name: "家门口就业", value: 3213, color: "#00a15c" },
            { name: "社会治理柔性引导", value: 2366, color: "#00a15c" },
            { name: "交通便利", value: 3677, color: "#00a15c" },
            { name: "就医便利", value: 1442, color: "#00a15c" },
            { name: "幸福感", value: 1743, color: "#00a15c" },
            { name: "获得感",value: 1898, color: "#00a15c" },
            { name: "回+双创社区", value: 1484, color: "#00a15c" },
            { name: "家门口就业", value: 2321, color: "#00a15c" },
            { name: "就医便利", value: 12345, color: "#00a15c" },
            { name: "幸福感", value: 1484, color: "#00a15c" },
        ];

    //添加访问量导航
    function addWords(){
        _wordsChart = echarts.init(document.getElementById('bottomLeftChartBox'));
        _wordsChart.setOption(getWordsParams(_dataList, '2016-2017'));

        _wordsChart = echarts.init(document.getElementById('bottomRightChartBox'));
        _wordsChart.setOption(getWordsParams(_dataList2, '2017-2020'));
    }

    $(function(){
        //setTimeout(function(){
        //    addWords();
        //}, 500);
    });

    function renderWorldHtml(){
        var _chart1 = $('<div class="child-box">'+template('tplCouldHtml', {dataList: _dataList})+'</div>');
        var _chart2 = $('<div class="child-box">'+template('tplCouldHtml', {dataList: _dataList2})+'</div>');
        $('#bottomLeftChartBox').append(_chart1);
        $('#bottomRightChartBox').append(_chart2);
    }

    $(function(){
        renderWorldHtml();
        var _radius = $('#bottomLeftChartBox').width()*2;
        tagcloud({
            selector: "#bottomLeftChartBox .child-box",  //元素选择器
            fontsize: 18,       //基本字体大小, 单位px
            radius: _radius,         //滚动半径, 单位px
            mspeed: "slow",   //滚动最大速度, 取值: slow, normal(默认), fast
            ispeed: "slow",   //滚动初速度, 取值: slow, normal(默认), fast
            direction: 135,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
            keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
        });

        tagcloud({
            selector: "#bottomRightChartBox .child-box",  //元素选择器
            fontsize: 18,       //基本字体大小, 单位px
            radius: _radius,         //滚动半径, 单位px
            mspeed: "slow",   //滚动最大速度, 取值: slow, normal(默认), fast
            ispeed: "slow",   //滚动初速度, 取值: slow, normal(默认), fast
            direction: 35,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
            keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
        });
    });
})(jQuery);