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
        _clickIndex = -1,                //记录点击触发事件
        _isDefault = true,              //是否为默认项
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
        $(_targetName).find('.counter').countUp();
        return $(_targetName);
    }

    //
    function triggerChange(_type){
        _type = _type || '';
        $.ListenTabChnage.trigger({
            id: _dataList[_dataIndex]['id'],
            name: _dataList[_dataIndex]['name'],
            triggerType: _type,                         //触发类型
            isDefault: _isDefault,                      //是否为默认项
        }, renderContentHtml);
    }

    //
    function startLoading(){
        $(_targetName).html('<div class="loading-flex-box"><div class="loading"></div></div>');
    }

    function setTime(){
        clearInterval(_handle);
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            renderNavHtml();
            startLoading();
            _isDefault = false;
            triggerChange('auto');
        }, 9000);
    }

    //添加事件
    function addEvent(){
        setTime();

        $(document).on('click', '#leftTabChartNav li', function(){
            if(_clickIndex==$(this).index()) return false;

            _dataIndex = $(this).index();
            _clickIndex = $(this).index();      //
            renderNavHtml();
            startLoading();

            _isDefault = false;
            triggerChange('click');
        });

        var _isHover = false;           //记录是否在“回天印象”操作区域

        $('#HTYXBottomBox').parent().hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        });

        $('#HTHomeContainer').hover(function(){
            _isHover = true;
        }, function(){
            _isHover = false;
        });

        //切换到默认项
        $(document).on('click', function(){
            if(!_isHover) {
                _isDefault = true;
                triggerChange();
            }
            //if end
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
            {"id": 1, "title": "户籍人口", "value": 99.9, "icon": "images/sp_icon_17.png", "unit": "*万人"},
            {"id": 2, "title": "实有人口", "value": 120.6, "icon": "images/sp_icon_17.png", "unit": "*万人"},
            {"id": 3, "title": "参保人员", "value": 89.2, "icon": "images/sp_icon_17.png", "unit": "*万人"},
            {"id": 4, "title": "重点人群", "value": 14.2, "icon": "images/sp_icon_17.png", "unit": "*万人"},
            {"id": 5, "title": "特困人员", "value": 8.9, "icon": "images/sp_icon_17.png", "unit": "*万人"},
            {"id": 6, "title": "低保低收入", "value": 2.4, "icon": "images/sp_icon_17.png", "unit": "*万人"},
            {"id": 7, "title": "幼儿人数", "value": 46.2, "icon": "images/sp_icon_17.png", "unit": "*万人"},
            {"id": 8, "title": "老年人数", "value": 20.3, "icon": "images/sp_icon_17.png", "unit": "*万人"},
            {"id": 9, "title": "适龄中小学人数", "value": 30.4, "icon": "images/sp_icon_17.png", "unit": "*万人"},
        ];

    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==1){
                data.render('tplTabRKContentHtml', {
                    dataList: _dataList
                });
            }
            //if end
        });
    });
})(jQuery);

/**
 * 回天印象 地域 - 五年端来用地与住宅趋势对比，文体用地面积趋势
 */
(function($){
    var _dataList = [
            {"id": 1, "title": "回天总面积", "icon": "images/sp_icon_01.png", "value": 99.9, "unit": "*ha"},
            {"id": 2, "title": "回天绿地总面积", "icon": "images/sp_icon_01.png", "value": 89.2, "unit": "*ha"},
            {"id": 3, "title": "回天文体总面积", "icon": "images/sp_icon_01.png", "value": 120.6, "unit": "*ha"},
            {"id": 4, "title": "回天社区总数", "icon": "images/sp_icon_01.png", "value": 89, "unit": "*个"},
            {"id": 5, "title": "回天楼宇总数", "icon": "images/sp_icon_07.png", "value": 18707, "unit": "*栋"},
            {"id": 6, "title": "保障性住房", "icon": "images/sp_icon_08.png", "value": 700, "unit": "*个"},
            {"id": 7, "title": "摄像头总数", "icon": "images/sp_icon_09.png", "value": 1807, "unit": "*个"},
            {"id": 8, "title": "停车场总数", "icon": "images/sp_icon_10.png", "value": 800, "unit": "*个"},
            {"id": 9, "title": "道路数量", "icon": "images/sp_icon_15.png", "value": 8000, "unit": "*条"},
            {"id": 10, "title": "文化设施数量", "icon": "images/sp_icon_16.png", "value": 7896, "unit": "*个"},
    ], _dataIndex = 0, _handle;


    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==2){
                data.render('tplTabDYContentHtml', {
                    dataList: _dataList,
                    index: _dataIndex
                });
            }
            //if end
        });
    });
})(jQuery);

/**
 * 回天印象 产业 - 产业分类占比，5年注册与经营企业及个体增长趋势
 */
(function($){
    var _dataList = [
        {"id": 1, "title": "企业数量", "icon": "images/sp_icon_02.png", "value": 13869, "unit": "*个"},
        {"id": 2, "title": "企业个体数量", "icon": "images/sp_icon_02.png", "value": 10090, "unit": "*个"},
        {"id": 3, "title": "商业网点", "icon": "images/sp_icon_02.png", "value": 13869, "unit": "*个"},
        {"id": 4, "title": "交通出行订单", "icon": "images/sp_icon_06.png", "value": 10090, "unit": "*个"},
        {"id": 5, "title": "夜间交易额", "icon": "images/sp_icon_11.png", "value": 13869, "unit": "*个"},
        {"id": 6, "title": "夜间交易用户数", "icon": "images/sp_icon_12.png", "value": 10090, "unit": "*个"},
    ], _dataIndex = 0, _handle;

    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==3){
                data.render('tplTabCYContentHtml', {
                    dataList: _dataList,
                    index: _dataIndex
                });
            }
            //if end
        });
    });
})(jQuery);

/**
 * 回天印象 事务 - 投诉分类占比，三率趋势变化
 */
(function($){
    var _dataList = [
        {"id": 1, "title": "政务服务事项", "icon": "images/sp_icon_03.png", "value": 13869, "unit": "*件"},
        {"id": 2, "title": "未诉先办", "icon": "images/sp_icon_04.png", "value": 10090, "unit": "*件"},
        {"id": 3, "title": "党建活动", "icon": "images/sp_icon_02.png", "value": 13869, "unit": "*个"},
        {"id": 4, "title": "网格责任人", "icon": "images/sp_icon_12.png", "value": 10090, "unit": "*个"},
        {"id": 5, "title": "接警数量", "icon": "images/sp_icon_13.png", "value": 13869, "unit": "*个"},
        {"id": 6, "title": "法律援助", "icon": "images/sp_icon_14.png", "value": 10090, "unit": "*件"},
    ], _dataIndex = 0, _handle;

    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==4){
                data.render('tplTabSWContentHtml', {
                    dataList: _dataList,
                    index: _dataIndex
                });
            }
            //if end
        });
    });
})(jQuery);

/**
 * 回天印象 组织 - 社会组织分类，各机构变化趋势
 */
(function($){
    var _dataList = [
        {"id": 1, "title": "医疗机构数量", "icon": "images/sp_icon_05.png", "value": 13869, "unit": "*个"},
        {"id": 2, "title": "教育机构数量", "icon": "images/sp_icon_05.png", "value": 13869, "unit": "*个"},
        {"id": 3, "title": "养老机构数量", "icon": "images/sp_icon_05.png", "value": 13869, "unit": "*个"},
        {"id": 4, "title": "机关事业单位", "icon": "images/sp_icon_05.png", "value": 13869, "unit": "*个"},
    ], _dataIndex = 0, _handle, _dataObj;

    function setTime(){
        if('undefined'===typeof _dataObj){
            clearInterval(_handle);
            return false;
        }
        clearInterval(_handle);
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            _dataObj.render('tplTabZZContentHtml', {
                dataList: _dataList,
                index: _dataIndex
            });
        }, 6000);
    }

    function addEvent(){
        setTime();
    }

    $(function(){
        $.ListenTabChnage.listen(function(data){
            if(data['id']==5){
                //clearInterval(_handle);
                _dataObj = data;
                data.render('tplTabZZContentHtml', {
                    dataList: _dataList,
                    index: _dataIndex
                });
                //addEvent();
            }
            //if end
        });
    });
})(jQuery);

/* - - - - - - - - - - - - - - - - - - - - - - 回天印象 END - - - - - - - - - - - - - - - - - - - - - - */

/**
 * 突发事件
 */
(function($){
    var _firstInfo = {
            "id": 1, "title": "[突发事件] 21点 天通苑北二区", "intro": "30栋住宅楼发生大面积停电", "color": "#eb4e40"
        },
        _dataList = [
            {"id": 2, "title": "[接诉即办] 回龙观街道", "intro": "供暖不足问题投诉量巨大", "color": "#f1d236"},
            {"id": 3, "title": "[未诉先办] 回龙观街道", "intro": "供暖不足问题投诉量巨大", "color": "#52d043"},
            {"id": 5, "title": "[接诉即办] 回龙观街道", "intro": "供暖不足问题投诉量巨大", "color": "#f1d236"},
        ],
        _dataIndex = 0,
        _handle,
        _pieDataList = [
            {"id": 1, "name": "未诉先办", "value": 50, "color": "#52d043"},
            {"id": 2, "name": "接诉即办", "value": 30, "color": "#ffdd34"},
            {"id": 3, "name": "突发事件", "value": 10, "color": "#eb4e40"}
        ], _chart;

    function renderHtml(){
        //突发事件
        $('#TFSJBox').html(template('tplTFListHtml', {
            firstInfo: _firstInfo,
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 2),
            index: _dataIndex
        }));
    }

    //突发事件 定时器
    function setTime(){
        clearInterval(_handle);
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length?0:_dataIndex+1;
            renderHtml();
        }, 5000);
    }

    function addEvent(){
        setTime();

        //突发事件
        $('#TFSJBox').hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        });
    }

    //获取参数
    function getParams(){
        return {
            color: (function(){
                var _list = [];
                for(var i in _pieDataList){
                    _list[i] = _pieDataList[i]['color'];
                }
                return _list;
            })(),
            tooltip: {
                trigger: 'item',
                formatter: '{b} : {d}%'
            },
            series: [
                {
                    name: '诉求分类',
                    type: 'pie',
                    radius: "70%",
                    center: ['50%', '50%'],
                    data: (function(){
                        var _result = [], j = 0;
                        for(var i in _pieDataList){
                            _result[j] = _pieDataList[i];
                            _result[j]['itemStyle'] = {
                                color: _pieDataList[i]['color']
                            };
                            j++;
                        }
                        return _result;
                    })(),
                    minAngle: 5,
                    avoidLabelOverlap: true,
                    label: {
                        color: '#FFFFFF',
                        position: 'outer',
                        alignTo: 'edge',
                        margin: 10,
                        formatter: function(_data){
                            _data["value"] = _data["value"] + '%';
                            return '{b|'+_data["name"]+'} {c|'+_data["value"]+'}';
                        },
                        fontSize: 14,
                        rich: {
                            b: {
                                fontSize: 14,
                                color: '#FFFFFF'
                            },
                            c: {
                                fontSize: 21,
                                fontFamily: '"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                textShadowBlur: 5,
                                textShadowOffsetX: 0,
                                textShadowColor: 'rgba(0, 0, 0, 0.9)'
                            }
                        },
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
    //渲染图表
    function renderChartBox(){
        var _element = document.getElementById('TFSJChartBox');
        _chart = echarts.init(_element);
        _chart.setOption(getParams());
    }


    $(function(){
        renderHtml();
        addEvent();

        setTimeout(function(){
            renderChartBox();
        }, 200);
    });
})(jQuery);

/**
 * 三年行动计划
 */
(function($){
    var _dataInfo = {
        programValue: 117,
        workOver: 62,
        score: 7.5,
        prevScore: 1.2
    };

    function renderHtml(){
        var _SNXDJHList = $('#SNXDJHList');
        _SNXDJHList.html(template('tplSNXDJHHtml', {
            dataInfo: _dataInfo
        }));
        //_SNXDJHList.find('.counter').countUp();
    }

    function addEvent(){
        //落图详细
        $(document).on('click', '#SNJHBtnMore', function(){
            $.ListenTabChnage.trigger({
                id: 101,
                name: "三年行动计划",
                triggerType: 'click',
                isDefault: false,
            }, function(){});
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
        clearInterval(_handle);
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
        clearInterval(_handle);
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

    var _styleText = '<style type="text/css">#bottomLeftChartBox, #bottomRightChartBox{ overflow: hidden; } #bottomLeftChartBox .child-box, #bottomRightChartBox .child-box{ height: 1.3rem; } #bottomLeftChartBox .child-box li, #bottomRightChartBox .child-box li{ font-size: .2rem; white-space: nowrap; } </style>';

    function renderWorldHtml(){
        var _chart1 = $('<div class="child-box">'+template('tplCouldHtml', {dataList: _dataList})+'</div>');
        var _chart2 = $('<div class="child-box">'+template('tplCouldHtml', {dataList: _dataList2})+'</div>');

        var _bottomLeftChartBox = $('#bottomLeftChartBox'),
            _bottomRightChartBox = $('#bottomRightChartBox');
        _bottomLeftChartBox.html(_styleText);
        _bottomLeftChartBox.append(_chart1);
        _bottomRightChartBox.append(_chart2);
    }

    $(function(){
        renderWorldHtml();
        var _bottomLeftChartBox = $('#bottomLeftChartBox'),
            _radius = _bottomLeftChartBox.width()* 2,
            _height = _bottomLeftChartBox.height();

        tagcloud({
            selector: "#bottomLeftChartBox .child-box",  //元素选择器
            fontsize: 16,       //基本字体大小, 单位px
            radius: _radius,         //滚动半径, 单位px
            width: _radius,
            height: _height,
            mspeed: "slow",   //滚动最大速度, 取值: slow, normal(默认), fast
            ispeed: "slow",   //滚动初速度, 取值: slow, normal(默认), fast
            direction: 135,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
            keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
        });

        tagcloud({
            selector: "#bottomRightChartBox .child-box",  //元素选择器
            fontsize: 16,       //基本字体大小, 单位px
            radius: _radius,         //滚动半径, 单位px
            width: _radius,
            height: _height,
            mspeed: "slow",   //滚动最大速度, 取值: slow, normal(默认), fast
            ispeed: "slow",   //滚动初速度, 取值: slow, normal(默认), fast
            direction: 35,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
            keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
        });
    });
})(jQuery);