/**
 * 中间地图切换渲染
 */
(function($){
    var _topInfoList = [
        {"id": 1, "name": "交通延迟指数", "value": "2.13", "icon": "images/ht_icon_01.png", "unit": "", "url": "yunyingjiance.html"},
        {"id": 2, "name": "实时人流（人）", "value": "1209738", "icon": "images/ht_icon_02.png", "unit": "", "url": "shishirenliu.html"},
        {"id": 3, "name": "当日市民反映量", "value": "426", "icon": "images/ht_icon_03.png", "unit": "个", "url": "jiesujiban.html"}
    ], _target = '#HTMiddleContent';

    //渲染默认地图模板
    function renderDefaultHtml(){
        $(_target).html(template('tplMidTopListDefault', {
            dataList: _topInfoList,
        }));
        $(_target).find('.counter').countUp();
    }

    //渲染人口模板
    function renderRKHtml(){
        $(_target).html(template('tplMidTopListRK', {}));
    }

    //渲染地域模板
    function renderDYHtml(){
        $(_target).html(template('tplMidTopListDY', {}));
    }

    //渲染产业模板
    function renderCYHtml(){
        $(_target).html(template('tplMidTopListCY', {}));
    }

    //渲染事务模板
    function renderSWHtml(){
        $(_target).html(template('tplMidTopListSW', {}));
    }

    //渲染组织模板
    function renderZZHtml(){
        $(_target).html(template('tplMidTopListZZ', {}));
    }

    var _navList = [
        {"id": 1, "name": "全部", "value": 101},
        {"id": 2, "name": "教育", "value": 102},
        {"id": 3, "name": "交通", "value": 103},
        {"id": 4, "name": "医疗", "value": 104},
        {"id": 5, "name": "养老", "value": 105},
        {"id": 6, "name": "公共设施", "value": 106},
    ], _navIndex = 0;

    function addJNJHNavEvent(){
        var _target = '.mid-SNJH-nav-box ul.list li';
        $(document).off('click', _target).on('click', _target, function(){
           _navIndex = $(this).index();
            $.ListenTabChnage.trigger({
                id: $(this).data('id'),
                name: "三年行动计划",
                triggerType: 'click',
                isDefault: false,
            }, function(){});
        });
    }

    //三年行动计划默认 全部
    function renderSNJHHtml(){
        _navIndex = 0;
        $(_target).html(template('tplMidTopListSNJH', {
            navList: _navList,
            navIndex: _navIndex
        }));
    }

    //三年行动计划 教育
    function renderJYHtml(){
        $(_target).html(template('tplMidTopListJY', {
            navList: _navList,
            navIndex: _navIndex
        }));
    }

    //三年行动计划 交通
    function renderJTHtml(){
        $(_target).html(template('tplMidTopListJT', {
            navList: _navList,
            navIndex: _navIndex
        }));
    }

    //三年行动计划 医疗
    function renderHtml(){
        $(_target).html(template('tplMidTopListYL', {
            navList: _navList,
            navIndex: _navIndex
        }));
    }

    //三年行动计划 养老
    function renderYL2Html(){
        $(_target).html(template('tplMidTopListYL2', {
            navList: _navList,
            navIndex: _navIndex
        }));
    }

    //三年行动计划 公共设施
    function renderGGSSHtml(){
        $(_target).html(template('tplMidTopListGGSS', {
            navList: _navList,
            navIndex: _navIndex
        }));
    }

    //选择渲染模板
    function renderSwitch(_id){
        switch (_id){
            case 1: renderRKHtml(); break;          //人口
            case 2: renderDYHtml(); break;          //地域
            case 3: renderCYHtml(); break;          //产业
            case 4: renderSWHtml(); break;          //事务
            case 5: renderZZHtml(); break;          //组织
            case 101: renderSNJHHtml(); addJNJHNavEvent(); break;      //三年行动计划 全部
            case 102: renderJYHtml(); addJNJHNavEvent(); break;      //三年行动计划 教育
            case 103: renderJTHtml(); addJNJHNavEvent(); break;      //三年行动计划 交通
            case 104: renderHtml(); addJNJHNavEvent(); break;      //三年行动计划 医疗
            case 105: renderYL2Html(); addJNJHNavEvent(); break;      //三年行动计划 养老
            case 106: renderGGSSHtml(); addJNJHNavEvent(); break;      //三年行动计划 公共设施
        }
    }

    $(function(){
        $.ListenTabChnage.listen(function(data){
            //console.log('data', data);
            //渲染默认模板
            if(data['isDefault']){
                renderDefaultHtml();
            }else if(data['triggerType']=='click'){
                renderSwitch(data['id']);
            }
            //if end
        });
    });
})(jQuery);

// - - - - - - - - - 人口图表 Start  - - - - - - - - -
/**
 * 回天地区老年、幼儿人口增长趋势
 */
(function($){
    var _chart,
        _dataList = [
            {"name": "老年人口", "list": [
                {"name": "2016", "value": 190},
                {"name": "2017", "value": 188},
                {"name": "2018", "value": 100},
                {"name": "2019", "value": 60},
                {"name": "2020", "value": 25},
            ]},
            {"name": "幼儿人口", 'list': [
                {"name": "2016", "value": 20},
                {"name": "2017", "value": 55},
                {"name": "2018", "value": 160},
                {"name": "2019", "value": 180},
                {"name": "2020", "value": 190},
            ]}
        ];

    function getParams(){
        return {
            color: [ '#4e71e5', '#c0b579'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#283b56'
                    }
                }
            },
            grid: {
                left: '15%',
                top: '30%',
                right: '5%',
                bottom: '36px'
            },
            legend: {
                right: 0,
                top: 0,
                textStyle: {
                    color: '#FFFFFF'
                },
                icon: 'circle',
                itemWidth: 5,
                data: (function(){
                    var _arrList = [];
                    for(var i in _dataList){
                        _arrList[i] = _dataList[i]['name'];
                    }
                    return _arrList;
                })()
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                splitLine: {
                    show: false
                },
                axisLabel:{
                    color: '#FFFFFF',
                    fontSize: 16,
                },
                data: [2016, 2017, 2018, 2019, 2020]
            },
            yAxis: {
                type: 'value',
                scale: true,
                //name: '价格',
                //boundaryGap: [0.2, 0.2],
                splitNumber: 4,
                splitLine: {
                    lineStyle: {
                        color: '#393b54'
                    }
                },
                axisLabel:{
                    color: '#FFFFFF',
                    fontSize: 16,
                }
            },
            series: [
                {
                    name: '老年人口',
                    type: 'line',
                    data: _dataList[0]['list']
                },
                {
                    name: '幼儿人口',
                    type: 'line',
                    data: _dataList[1]['list']
                }
            ]
        }
    }

    function renderChartBox(){
        var _element = document.getElementById('MidMapChart1Box');
        _chart = echarts.init(_element);
        _chart.setOption(getParams());
    }

    $(function(){
       /* $.ListenTabChnage.listen(function(data){
            if(!data['isDefault']&&data['id']==1&&data['triggerType']=='click'){
                setTimeout(function(){
                    renderChartBox();
                }, 200);
            }
        });*/

    });
})(jQuery);

/**
 * 回天地区IT类人员增长趋势
 */
(function($){
    var _dataList = [
        {"name": "2016", "value": 190},
        {"name": "2017", "value": 188},
        {"name": "2018", "value": 100},
        {"name": "2019", "value": 60},
        {"name": "2020", "value": 125},
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

    //获取标题
    function getTitles(){
        var _title = [];
        return checkValByName(_dataList, _title);
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
            color: ['#e05f57'],
            grid: {
                left: '15%',
                top: '8%',
                bottom: '36px',
                right: '5%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: (function(){
                    var _list = [];
                    for(var i in _dataList){
                        _list[i] = _dataList[i]['name'];
                    }
                    return _list;
                })(),
                splitLine:{
                    show: false,
                    lineStyle:{
                        color: ['#393b54'],
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
                splitNumber: 4,
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#0f1f55'],
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            series: [
                {
                    data: _dataList,
                    type: 'line',
                    name: "",
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#412035'  },
                                    { offset: 1, color: 'transparent' }
                                ],
                                global: false // 缺省为 false
                            }
                        }
                    },
                    //smooth: true,
                }
            ]
        }
    }

    //创建图表
    function createChartBox(){
        var _chart = echarts.init(document.getElementById('MidMapChart2Box'));
        _chart.setOption(getParams());
    }

    $(function(){
        /*$.ListenTabChnage.listen(function(data){
            if(!data['isDefault']&&data['id']==1&&data['triggerType']=='click'){
                setTimeout(function(){
                    createChartBox();
                }, 200);
            }
        });*/

    });
})(jQuery);

// - - - - - - - - - 人口图表 End  - - - - - - - - -