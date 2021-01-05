
/**
 * 导航信息
 */
(function($){
    var _dataList = [
        {"id": 1, "name": "东小口镇"},
        {"id": 2, "name": "天通苑北街道"},
        {"id": 3, "name": "天通苑南街道"},
        {"id": 4, "name": "霍营街道"},
        {"id": 5, "name": "回龙观街道"},
        {"id": 6, "name": "龙泽园街道"},
        {"id": 7, "name": "史各庄街道"}
    ], _navIndex = 0;

    //渲染导航
    function renderNavHtml(){
        $('#jzSelectBoxWrap').html(template('tplSelectHtml', {
            dataList: _dataList,
            index: _navIndex
        }));
    }

    //添加事件
    function addEvent(){
        $('#jzSelectBoxWrap').on('change', function(){
            console.log($(this).val());
        })
    }

    $(function(){
        renderNavHtml();
        addEvent();
    });
})(jQuery);

/**
 * 街镇信息
 */
(function($){

    var _dataList = [
        {"id": 1, "name": "面积", "unit": "（平方千米）", "value": "8.8", "icon": "images/jz_icon_01.png", "clr": "#71dff9"},
        {"id": 2, "name": "常住人口", "unit": "（万）", "value": "708", "icon": "images/jz_icon_02.png", "clr": "#51ffa3"},
        {"id": 3, "name": "社区总数", "unit": "（个）", "value": "800", "icon": "images/jz_icon_03.png", "clr": "#69b7ff"},
        {"id": 4, "name": "企业数量", "unit": "（个）", "value": "12000", "icon": "images/jz_icon_04.png", "clr": "#96a5ff"},
        {"id": 5, "name": "个体数量", "unit": "（个）", "value": "8000", "icon": "images/jz_icon_05.png", "clr": "#b873ff"},
        {"id": 6, "name": "楼宇数量", "unit": "（栋）", "value": "17689", "icon": "images/jz_icon_06.png", "clr": "#fe8fff"},
        {"id": 7, "name": "教育机构", "unit": "（个）", "value": "900", "icon": "images/jz_icon_07.png", "clr": "#fffb8f"},
        {"id": 8, "name": "养老机构", "unit": "（个）", "value": "168", "icon": "images/jz_icon_08.png", "clr": "#ffe095"},
        {"id": 9, "name": "医疗机构", "unit": "（个）", "value": "30", "icon": "images/jz_icon_09.png", "clr": "#ff9a69"},
    ], _navIndex = 0;

    function renderHtml(){
        $('#jdxxListID').html(template('tplJDListHtml', {
            dataList: _dataList,
            index: _navIndex
        }))
    }

    function addEvent(){
        $(document).on('click', '#jdxxListID .list-item', function(){
            _navIndex = $(this).index();
            renderHtml();
        });
    }

    $(function(){
        renderHtml();
        addEvent();
    });
})(jQuery);

/**
 * 七有五性指标
 */
(function($){

    var _dataList = [
        {"id": 1, "name": "便利性", "value": 86, "max": 100, "color": "#42ca23"},
        {"id": 2, "name": "幼有所育", "value": 90, "max": 100, "color": "#42ca23"},
        {"id": 3, "name": "公正性", "value": 72, "max": 100, "color": "#eb4c3d"},
        {"id": 4, "name": "弱有所扶", "value": 72, "max": 100, "color": "#eb4c3d"},
        {"id": 5, "name": "安全性", "value": 73, "max": 100, "color": "#eb4c3d"},
        {"id": 6, "name": "病有所医", "value": 74, "max": 100, "color": "#f38432"},
        {"id": 7, "name": "宜居性", "value": 76, "max": 100, "color": "#f38432"},
        {"id": 8, "name": "住有所居", "value": 77, "max": 100, "color": "#f1d235"},
        {"id": 9, "name": "老有所养", "value": 79, "max": 100, "color": "#b0bb39"},
        {"id": 10, "name": "多样性", "value": 80, "max": 100, "color": "#a3bb39"},
        {"id": 11, "name": "劳有所得", "value": 82, "max": 100, "color": "#8dbb33"},
        {"id": 12, "name": "学有所教", "value": 84, "max": 100, "color": "#61b02b"},
    ],_dataList2 = [
        {"id": 1, "name": "幼有所育", "value": 95, "max": 100, "color": "#42ca23"},
        {"id": 2, "name": "学有所教", "value": 96, "max": 100, "color": "#42ca23"},
        {"id": 3, "name": "劳有所得", "value": 97, "max": 100, "color": "#eb4c3d"},
        {"id": 4, "name": "病有所医", "value": 97, "max": 100, "color": "#eb4c3d"},
        {"id": 5, "name": "老有所养", "value": 97, "max": 100, "color": "#eb4c3d"},
        {"id": 6, "name": "住有所居", "value": 96, "max": 100, "color": "#f38432"},
        {"id": 7, "name": "弱有所扶", "value": 95, "max": 100, "color": "#f38432"},
        {"id": 8, "name": "便利性", "value": 96, "max": 100, "color": "#f1d235"},
        {"id": 9, "name": "宜居性", "value": 97, "max": 100, "color": "#b0bb39"},
        {"id": 10, "name": "多样性", "value": 98, "max": 100, "color": "#a3bb39"},
        {"id": 11, "name": "安全性", "value": 98, "max": 100, "color": "#8dbb33"},
        {"id": 12, "name": "公正性", "value": 97, "max": 100, "color": "#61b02b"},
    ];

    function getParams(){
        var _radius = parseInt($('#radarBox').width()) * .48 / 2;
        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                left: 'right',
                data: ['全市平均指数', '回龙观街道'],
                icon: 'circle',
                textStyle: {
                    color: '#70dcf8'
                }
            },
            calculable : true,
            radar: {
                indicator: (function (){
                    var res = [];
                    for (var i = 0; i < _dataList.length; i++) {
                        res.push({
                            text: _dataList[i]['name'] + " " + _dataList[i]['value'],
                            name: _dataList[i],
                            color: _dataList[i]['color'],
                            max: _dataList[i]['max']
                        });
                    }
                    return res;
                })(),
                name: {
                    fontSize: 16,
                    formatter: function(_data){
                        return '{b|'+_data["name"]+'}  {c|'+_data["value"]+'}';
                    },
                    //verticalAlign: 'bottom',
                    rich: {
                        b: {
                            fontSize: 16
                        },
                        c: {
                            fontSize: 26,
                            fontFamily: '"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        }
                    }
                },
                center: ['50%', '55%'],
                radius: _radius,
                splitLine: {
                    lineStyle: {
                        color: '#55a6c3'
                    }
                },
                splitArea: {
                    show: false
                },
                shape: 'circle'
            },
            series: [
                {
                    type: 'radar',
                    areaStyle: {
                        color: '#ffd91a',
                        opacity: .5
                    },
                    lineStyle: {
                        color: '#ffd91a'
                    },
                    data: [
                        {
                            name: '全市平均指数',
                            value: (function(){
                               var _result = [];
                                for(var i in _dataList){
                                    _result[i] = _dataList[i]['value'];
                                }
                                return _result;
                            })()
                        }
                    ]
                },
                {
                    type: 'radar',
                    areaStyle: {
                        color: '#8dbb33',
                        opacity: .5
                    },
                    lineStyle: {
                        color: '#8dbb33'
                    },
                    data: [
                        {
                            name: '回龙观街道',
                            value: (function(){
                                var _result = [];
                                for(var i in _dataList2){
                                    _result[i] = _dataList2[i]['value'];
                                }
                                return _result;
                            })()
                        }
                    ]
                }
            ]
        }
    }

    function createChartBox(){
        var _chart = echarts.init(document.getElementById('radarBox'));
        _chart.setOption(getParams());
    }

    $(function(){
        setTimeout(function(){
            createChartBox();
        }, 200);
    });
})(jQuery);

/**
 * 七有指标变化
 */
(function($){

    var _dataList = [
        {"name": "2016", "value": 86},
        {"name": "2017", "value": 85},
        {"name": "2018", "value": 92},
        {"name": "2019", "value": 93},
        {"name": "2020", "value": 95}
    ];

    //获取参数
    function getParams(){
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
                right: '6%'
            },
            legend: {
                right: 0,
                top: 0,
                textStyle: {
                    color: '#FFFFFF'
                },
                icon: 'circle',
                data: ['七有指标']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: (function(){
                    var _titles = [];
                    for(var i in _dataList){
                        _titles[_titles.length] = _dataList[i]['name'];
                    }
                    return _titles;
                })(),
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
                    formatter: "{value}%",
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
            series: [{
                data: _dataList,
                type: 'line',
                name: '七有指标',
                areaStyle: {},
                smooth: true,
                label: {
                    normal:{
                        position: 'insideBottomLeft',
                        //padding: [50, 50]
                    }
                },
                itemStyle:{
                    normal: {
                        label: {
                            show: true,
                            color: '#FFFFFF',
                            fontSize: 24,
                            fontFamily: '"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        },
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                offset: 0, color: '#51e1ff' // 0% 处的颜色
                                },
                                {
                                    offset:.2, color: '#51e1ff' // 0% 处的颜色
                                },
                                {
                                offset: 1, color: 'transparent' // 100% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                        //color: new echarts.graphic.LinearGradient(
                        //    0, 0, 0, 1,
                        //    [
                        //        {offset: 0, color: '#51e1ff'},
                        //        {offset: 0.5, color: '#4bd4f3'},
                        //        {offset: 1, color: '#0c2749'}
                        //    ]
                        //)
                    }
                }
            }]
        }
    }

    //绘制图表
    function createChart(){
        var _chart = echarts.init(document.getElementById('qyzbBox'));
        _chart.setOption(getParams());
    }

    $(function(){
        setTimeout(function(){
            createChart();
        }, 200);
    });
})(jQuery);

/**
 * 五性指标变化
 */
(function($){

    var _dataList = [
        {"name": "2016", "value": 86},
        {"name": "2017", "value": 85},
        {"name": "2018", "value": 92},
        {"name": "2019", "value": 93},
        {"name": "2020", "value": 95}
    ];

    //获取参数
    function getParams(){
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
                right: '6%'
            },
            legend: {
                right: 0,
                top: 0,
                textStyle: {
                    color: '#FFFFFF'
                },
                icon: 'circle',
                data: ['五性指标']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: (function(){
                    var _titles = [];
                    for(var i in _dataList){
                        _titles[_titles.length] = _dataList[i]['name'];
                    }
                    return _titles;
                })(),
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
                    formatter: "{value}%",
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
            series: [{
                data: _dataList,
                type: 'line',
                name: '五性指标',
                areaStyle: {},
                smooth: true,
                label: {
                    normal:{
                        position: 'insideBottomLeft',
                    }
                },
                itemStyle:{
                    normal: {
                        label: {
                            show: true,
                            color: '#FFFFFF',
                            fontSize: 24,
                            fontFamily: '"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        },
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0, color: '#51e1ff' // 0% 处的颜色
                                },
                                {
                                    offset:.2, color: '#51e1ff' // 0% 处的颜色
                                },
                                {
                                    offset: 1, color: 'transparent' // 100% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                        //color: new echarts.graphic.LinearGradient(
                        //    0, 0, 0, 1,
                        //    [
                        //        {offset: 0, color: '#51e1ff'},
                        //        {offset: 0.5, color: '#4bd4f3'},
                        //        {offset: 1, color: '#0c2749'}
                        //    ]
                        //)
                    }
                }
            }]
        }
    }

    //绘制图表
    function createChart(){
        var _chart = echarts.init(document.getElementById('wxzbBox'));
        _chart.setOption(getParams());
    }

    $(function(){
        setTimeout(function(){
            createChart();
        }, 200);
    });
})(jQuery);

/**
 * 街镇标签（字符云）
 */
(function($){
    var _wordsChart,
        _dataList = [
            { name: "交通拥堵", value: 10000, color: "#ea4c3e" },
            { name: "潮汐紧密", value: 6181, color: "#ea4c3e" },
            { name: "公共设施不完善", value: 4386, color: "#f48d46" },
            { name: "交通拥堵", value: 4055, color: "#f48d46" },
            { name: "潮汐紧密", value: 2467, color: "#ea4c3e" },
            { name: "公共设施不完善", value: 2244, color: "#f1d236" },
            { name: "交通拥堵",value: 1898, color: "#f48d46" },
            { name: "潮汐紧密", value: 1484, color: "#ea4c3e" },
            { name: "公共设施不完善", value: 1484, color: "#ea4c3e" },
            { name: "交通拥堵", value: 1484, color: "#f48d46" },
            { name: "潮汐紧密", value: 1484, color: "#f1d236" }
        ];

    //获取单词参数
    function getWordsParams(_data){
        _data = 'object' === typeof _data ? _data : [];
        return {
            tooltip: {
                show: true,
                formatter: '{b} : {c} ',
            },
            //color: ['#EA4E41', '#DD8043', '#EDCF36'],
            series: [{
                //name: "",
                type: 'wordCloud',
                size: ['100%', '100%'],
                left: 'center',
                top: 'center',
                shape: 'circle',
                gridSize: 8,
                drawOutOfBound: true,
                // 文字旋转角度可选列表，默认会随机从水平（0）和垂直（90）两个方向中选择，可以设置多个可选角度，例如 [0, -45, 45, 90]
                textRotation : [0, 0, 0, 0],
                rotationRange: [0, 0],
                //rotationStep: 45,
                sizeRange: [20, 30],
                textPadding: 15,
                autoSize: {
                    enable: true,
                    minSize: 14
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

    //添加访问量导航
    function addWords(){
        _wordsChart = echarts.init(document.getElementById('bottomCYBox'));
        _wordsChart.setOption(getWordsParams(_dataList));
    }

    $(function(){
        //setTimeout(function(){
        //    addWords();
        //}, 500);
    });

    var _styleText = '<style type="text/css">#bottomCYBox{ overflow: hidden; } #bottomCYBox .child-box{ height: 2.8rem; } #bottomCYBox .child-box li{ font-size: .2rem; white-space: nowrap; }</style>';

    function renderWorldHtml(){
        var _bottomBox = $('#bottomCYBox');
        var _chart1 = $('<ul class="child-box" style="height: 2.85rem;">'+template('tplCouldHtml', {dataList: _dataList})+'</ul>');
        _bottomBox.html(_styleText);
        _bottomBox.append(_chart1);
    }

    $(function(){
        renderWorldHtml();

        var _bottomBox = $('#bottomCYBox'),
            _radius = _bottomBox.width(),
            _height = _bottomBox.height();

        tagcloud({
            selector: "#bottomCYBox .child-box",  //元素选择器
            fontsize: 24,       //基本字体大小, 单位px
            radius: _radius*3/2,         //滚动半径, 单位px
            width: _radius,
            height: _height,
            mspeed: "slow",   //滚动最大速度, 取值: slow, normal(默认), fast
            ispeed: "slow",   //滚动初速度, 取值: slow, normal(默认), fast
            direction: 135,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
            keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
        });
    });
})(jQuery);

/**
 * 项目信息
 */
(function($){

    var _staticList = [
        {"id": 1, "name": "总体项目", "value": 120, "color": "#ffffff"},
        {"id": 2, "name": "完工投用", "value": 33, "color": "#43ca26"},
        {"id": 3, "name": "续建复工", "value": 10, "color": "#ffef95"},
        {"id": 4, "name": "新建未开", "value": 17, "color": "#ffa93a"},
        {"id": 5, "name": "超时项目", "value": 60, "color": "#eb4c3d"}
    ],
        _dataList = [
            {"id": 1, "title": "回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）", "status": "完工投用", "url": "javascript:;"},
            {"id": 2, "title": "回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）2", "status": "完工投用", "url": "javascript:;"},
            {"id": 3, "title": "回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）3", "status": "完工投用", "url": "javascript:;"},
            {"id": 4, "title": "回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）4", "status": "完工投用", "url": "javascript:;"},
            {"id": 5, "title": "回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）5", "status": "完工投用", "url": "javascript:;"},
            {"id": 6, "title": "回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）6", "status": "完工投用", "url": "javascript:;"}
        ], _dataIndex = 0, _handle;

    //渲染顶部内容
    function renderTopListHtml(){
        $('#bottomTopNavList').html(template('tplBottomProgramTop', {
            dataList: _staticList
        }));
    }

    //渲染下面列表数据
    function renderBottomTableHtml(){
        $('#tableBodyBox').html(template('tplBottomProgramTable', {
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 3)
        }));
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            renderBottomTableHtml();
        }, 5000);
    }

    function addEvent(){
        setTime();

        $('#tableBodyBox').hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        });
    }

    $(function(){
        renderTopListHtml();
        renderBottomTableHtml();
        addEvent();
    });
})(jQuery);
