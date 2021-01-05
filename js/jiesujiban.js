/**
 * 市民反应总量
 */
(function($){

    var _dataList = [
            {"id": 1, "name": "咨询", "value": "595867", "color": "#8ed7ff"},
            {"id": 2, "name": "诉求", "value": "530116", "color": "#71dff9"},
            {"id": 3, "name": "表扬", "value": "3331", "color": "#43ca26"},
            {"id": 4, "name": "投诉", "value": "5319", "color": "#eb4e40"},
            {"id": 5, "name": "建议", "value": "7818", "color": "#71dff9"}
        ];

    function renderContentHtml(){
        var _SMFYList = $('#SMFYList');
        _SMFYList.html(template('tplLDListBoxHtml', {
            dataList: _dataList
        }));

        _SMFYList.find('.counter').countUp({
            delay: 10,
            time: 2000
        });
    }

    $(function(){
        renderContentHtml();
    });
})(jQuery);

/**
 * 热点街镇
 */
(function($){

    var _dataList = [
            {"id": 1, "name": "回龙观街道", "value": "261", "value2": "19", "color": "#eb4e40", "isUp": false},
            {"id": 2, "name": "龙泽园街道", "value": "200", "value2": "19", "color": "#f28434", "isUp": false},
            {"id": 3, "name": "东小口镇", "value": "190", "value2": "19", "color": "#f18e46", "isUp": true},
            {"id": 4, "name": "霍营街道", "value": "180", "value2": "19", "color": "#f1ab46", "isUp": false},
            {"id": 5, "name": "史各庄街道", "value": "180", "value2": "19", "color": "#f1d236", "isUp": true},
            {"id": 5, "name": "天通苑北街", "value": "180", "value2": "19", "color": "#f1d236", "isUp": false},
            {"id": 5, "name": "天通苑南街", "value": "180", "value2": "19", "color": "#f1d236", "isUp": true},
        ],
        _index = -1,
        _dataIndex = 0,
        _dataTotal = 0,
        _handle;

    function renderHtml(){
        $('#topSortList').html(template('tplRightContent', {
                dataList: $.getArrayByIndex(_dataList, _dataIndex, 7),
                index: _index
            }));
    }

    function addEvent(){
        $(document).on('click', '#topLeftNavList li', function(){
            if(0!=$(this).index()){
                _index = $(this).index()-1;
                $(document).trigger('mapDataChange', [{
                    index: _index,
                    data: _dataList[_index]
                }]);
                renderHtml();
            }
        });

        $(document).on('mapChange', function(e, _data){
            for(var i in _dataList){
                if(_data['name']==_dataList[i]['name']){
                    _index = i;
                    renderHtml();
                    break;
                }
            }
        });
    }


    $(function(){
        renderHtml();
        addEvent();
    });
})(jQuery);

/**
 * 诉求预测分析
 */
(function($){
    var _dataInfo = {
            number: 30,
            isUp: true
        },
        _dataList = [
            {"id": 1, "name": "回龙观街道", "date": "11月-12月", "tag": "历史数据", "intro": "供暖不足问题投诉量巨大", "adv": "协调供暖公司提前做好排查", "status": "12月30日，回龙观街道供暖问题投诉会加大"},
            {"id": 2, "name": "回龙观街道", "date": "11月-12月", "tag": "历史数据", "intro": "供暖不足问题投诉量巨大", "adv": "协调供暖公司提前做好排查", "status": "12月30日，回龙观街道供暖问题投诉会加大"},
            {"id": 3, "name": "回龙观街道", "date": "11月-12月", "tag": "历史数据", "intro": "供暖不足问题投诉量巨大", "adv": "协调供暖公司提前做好排查", "status": "12月30日，回龙观街道供暖问题投诉会加大"},
            {"id": 4, "name": "回龙观街道", "date": "11月-12月", "tag": "历史数据", "intro": "供暖不足问题投诉量巨大", "adv": "协调供暖公司提前做好排查", "status": "12月30日，回龙观街道供暖问题投诉会加大"},
            {"id": 5, "name": "回龙观街道", "date": "11月-12月", "tag": "历史数据", "intro": "供暖不足问题投诉量巨大", "adv": "协调供暖公司提前做好排查", "status": "12月30日，回龙观街道供暖问题投诉会加大"},
            {"id": 6, "name": "回龙观街道", "date": "11月-12月", "tag": "历史数据", "intro": "供暖不足问题投诉量巨大", "adv": "协调供暖公司提前做好排查", "status": "12月30日，回龙观街道供暖问题投诉会加大"},
            {"id": 7, "name": "回龙观街道", "date": "11月-12月", "tag": "历史数据", "intro": "供暖不足问题投诉量巨大", "adv": "协调供暖公司提前做好排查", "status": "12月30日，回龙观街道供暖问题投诉会加大"}
        ], _dataIndex = 0, _handle;

    function renderHtml(){
        $('#ycListBox').html(template('tplYCListHtml', {
            dataInfo: _dataInfo,
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 5)
        }));
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex+1>=_dataList.length?0:_dataIndex+1;
            renderHtml();
        }, 5000);
    }

    function addEvent() {
        setTime();
        $('#ycListBox').hover(function () {
            clearInterval(_handle);
        }, function () {
            setTime();
        })
    }

    $(function(){
        renderHtml();
        addEvent();
    });
})(jQuery);

/**
 * 中间地图数据
 */
(function($){
    var _dataInfo = {
        FYLValue: 428,
        ZHDFValue: 9.6,
        XYLValue: "30",
        JJLValue: "80",
        MYLValue: "80"
    }, _dataList = [
        {"id": 1, "title": "天通苑北二区 30栋住宅楼发生大面积停电", "time": "21"},
        {"id": 2, "title": "天通苑北二区 30栋住宅楼发生大面积停电", "time": "21"},
        {"id": 3, "title": "天通苑北二区 30栋住宅楼发生大面积停电", "time": "21"},
        {"id": 4, "title": "天通苑北二区 30栋住宅楼发生大面积停电", "time": "21"},
        {"id": 5, "title": "天通苑北二区 30栋住宅楼发生大面积停电天通苑北二区 30栋住宅楼发生大面积停电", "time": "21"},
    ], _dataIndex = 0, _handle;

    function renderTopHtml(){
        var _midTopListBox = $('#midTopListBox');
        _midTopListBox.html(template('tplMidTopList', {
            dataInfo: _dataInfo,
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 3)
        }));

        _midTopListBox.find('.counter').countUp({
            delay: 10,
            time: 2000
        });
    }

    function renderBottomHtml(){
        var _midBottomListBox = $('#midBottomListBox');
        _midBottomListBox.html(template('tplMidBottomList', {
            dataInfo: _dataInfo
        }));

        //_midBottomListBox.find('.counter').countUp();
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            renderTopHtml();
        }, 5000);
    }

    function addEvent(){
        setTime();

        $('#midTopListBox').hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        });
    }

    $(function(){
        renderTopHtml();
        renderBottomHtml();
        addEvent();
    });
})(jQuery);

/**
 * 诉求分类
 */
(function($){

    var _navList = [
            {"id": 1, "name": "诉求信息", "value": "50", "color": "#3aa9ff"},
            {"id": 2, "name": "诉求信息", "value": "30", "color": "#43ca26"},
            {"id": 3, "name": "诉求信息", "value": "10", "color": "#ffa93a"},
            {"id": 4, "name": "诉求信息", "value": "10", "color": "#ffef95"}
        ],
        _navIndex = 0,
        _chart;

    //获取参数
    function getParams(){
        return {
            color: (function(){
                var _list = [];
                for(var i in _navList){
                    _list[i] = _navList[i]['color'];
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
                    radius: "60%",
                    center: ['50%', '50%'],
                    //roseType: 'area',
                    data: (function(){
                        var _result = [], j = 0;
                        for(var i in _navList){
                            _result[j] = _navList[i];
                            //_result[j]['color'] = _navList[i]['color'];
                            _result[j]['itemStyle'] = {
                                color: _navList[i]['color']
                            };
                            j++;
                        }
                        return _result;
                    })(),
                    minAngle: 5,
                    avoidLabelOverlap: true,
                    label: {
                        //lineHeight: 16,
                        color: '#FFFFFF',
                        position: 'outer',
                        alignTo: 'edge',
                        margin: 10,
                        //formatter: '{b}\n{c}' + '个\n\n',
                        //formatter: '{b}{c}' + '\n\n',
                        formatter: function(_data){
                            _data["value"] = _data["value"] + '%';
                            return '{b|'+_data["name"]+'} {c|'+_data["value"]+'}';
                        },
                        fontSize: 14,
                        //borderWidth: 20,
                        //borderRadius: 4,
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
                        //padding: [0, -55]
                    },
                    //labelLine: {
                    //    length: 10,
                    //    length2: 35,
                    //    lineStyle: {
                    //        color: '#FFFFFF'
                    //    }
                    //},
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
        var _element = document.getElementById('pieChartBox');
        _chart = echarts.init(_element);
        _chart.setOption(getParams());
    }


    $(function(){
        setTimeout(function(){
            renderChartBox();
        }, 200);
    });
})(jQuery);