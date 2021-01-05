
/**
 * 导航部分
 */
(function($){
    var _dataList = [
        {"id": 1, "name": "幼有所育"},
        {"id": 2, "name": "学有所教"},
        {"id": 3, "name": "劳有所得"},
        {"id": 4, "name": "病有所医"},
        {"id": 5, "name": "老有所养"},
        {"id": 6, "name": "住有所居"},
        {"id": 7, "name": "弱有所扶"},
        {"id": 7, "name": "生活便利性"},
        {"id": 7, "name": "宜居性"},
        {"id": 7, "name": "多样性"},
        {"id": 7, "name": "安全性"},
        {"id": 7, "name": "公正性"},
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
            //console.log($(this).val());
        })
    }

    $(function(){
        renderNavHtml();
        addEvent();
    });
})(jQuery);

/**
 * 指标完成情况
 */
(function($){
    var _dataList = [
            {"id": 1, "name": "东小口镇", "value": "98", "color": "#dd4d3b"},
            {"id": 2, "name": "史各庄街道", "value": "96", "color": "#42ca23"},
            {"id": 3, "name": "回龙观街道", "value": "95", "color": "#42ca23"},
            {"id": 4, "name": "天通苑北街道", "value": "93", "color": "#dd4d3b"},
            {"id": 5, "name": "天通苑南街道", "value": "92", "color": "#dcdb41"},
            {"id": 6, "name": "霍营街道", "value": "91", "color": "#dcdb41"},
            {"id": 7, "name": "龙泽园街道", "value": "90", "color": "#42ca23"},
        ],
        _dataIndex = 0,
        _handle,
        _titleHtml = '<li class="tit-li"><p class="tit">序号</p> <p class="name">街道</p> <p class="value">状态</p> </li>';

    function renderHtml(){
        $('#topLeftNavList').html(_titleHtml + template('tplRightContent', {
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 7),
            index: _dataIndex
        }));
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            $.ListenMapDataChange.trigger({ index: _dataIndex, data: _dataList[_dataIndex] });
            renderHtml();
        }, 5000);
    }

    function addEvent(){
        setTime();
        $(document).on('click', '#topLeftNavList li', function(){
            if(0!=$(this).index()){
                _dataIndex = $(this).index()-1;
                $.ListenMapDataChange.trigger({ index: _dataIndex, data: _dataList[_dataIndex] });
                renderHtml();
            }
        });

        $.ListenMapChange.listen(function(_data){
            for(var i in _dataList){
                if(_data['name']==_dataList[i]['name']){
                    _dataIndex = i;
                    renderHtml();
                    break;
                }
            }
        });

        $('#LeftContentBox, #MiddleContentBox, #RightContentBox').hover(function(){
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
 * 中间地图
 */
(function($){
    var _dataList = [
        {"name": "全部", "number": 130},
        {"name": "完工投用", "number": 210},
        {"name": "新建未开", "number": 160},
        {"name": "续建复工", "number": 180},
        {"name": "超时项目", "number": 120},
    ], _index = 0;

    function renderNavHtml(){
        $('#topNavListBox').html(template('tplTopNavListBox', {
            dataList: _dataList,
            number: _dataList[_index]['number'],
            index: _index
        }));
    }

    function addEvent(){
        $(document).on('click', '#topNavListBox .nav-list li', function(){
            _index = $(this).index();
            renderNavHtml();
        });
    }

    $(function(){
        renderNavHtml();
        addEvent();
    });
})(jQuery);

/**
 * 综合排名和增量排行
 */
(function($){
    var _dataList = [
            {"id": 1, "name": "东小口镇", "list": [
                {"id": 1, "name": "惠普性幼儿园的在园儿童数", "value": 2000},
                {"id": 2, "name": "幼儿园学位数", "value": 23410},
                {"id": 3, "name": "幼儿园在园儿童数", "value": 2000},
                {"id": 4, "name": "适龄儿童数（3-6周岁）", "value": 2000}
            ], "color": "#70c6e1"},
            {"id": 2, "name": "史各庄街道", "list": [
                {"id": 1, "name": "惠普性幼儿园的在园儿童数", "value": 3000},
                {"id": 2, "name": "幼儿园学位数", "value": 12000},
                {"id": 3, "name": "幼儿园在园儿童数", "value": 2200},
                {"id": 4, "name": "适龄儿童数（3-6周岁）", "value": 2000}
            ], "color": "#70c6e1"},
            {"id": 3, "name": "回龙观街道", "list": [
                {"id": 1, "name": "惠普性幼儿园的在园儿童数", "value": 4000},
                {"id": 2, "name": "幼儿园学位数", "value": 32000},
                {"id": 3, "name": "幼儿园在园儿童数", "value": 2300},
                {"id": 4, "name": "适龄儿童数（3-6周岁）", "value": 2000}
            ], "color": "#70c6e1"},
            {"id": 4, "name": "天通苑北街道", "list": [
                {"id": 1, "name": "惠普性幼儿园的在园儿童数", "value": 1500},
                {"id": 2, "name": "幼儿园学位数", "value": 52000},
                {"id": 3, "name": "幼儿园在园儿童数", "value": 2400},
                {"id": 4, "name": "适龄儿童数（3-6周岁）", "value": 2000}
            ], "color": "#70c6e1"},
            {"id": 5, "name": "天通苑南街道", "list": [
                {"id": 1, "name": "惠普性幼儿园的在园儿童数", "value": 2300},
                {"id": 2, "name": "幼儿园学位数", "value": 22200},
                {"id": 3, "name": "幼儿园在园儿童数", "value": 2500},
                {"id": 4, "name": "适龄儿童数（3-6周岁）", "value": 2000}
            ], "color": "#70c6e1"},
            {"id": 6, "name": "霍营街道", "list": [
                {"id": 1, "name": "惠普性幼儿园的在园儿童数", "value": 2050},
                {"id": 2, "name": "幼儿园学位数", "value": 12500},
                {"id": 3, "name": "幼儿园在园儿童数", "value": 2600},
                {"id": 4, "name": "适龄儿童数（3-6周岁）", "value": 2000}
            ], "color": "#70c6e1"},
            {"id": 7, "name": "龙泽园街道", "list": [
                {"id": 1, "name": "惠普性幼儿园的在园儿童数", "value": 2600},
                {"id": 2, "name": "幼儿园学位数", "value": 16000},
                {"id": 3, "name": "幼儿园在园儿童数", "value": 2300},
                {"id": 4, "name": "适龄儿童数（3-6周岁）", "value": 2000}
            ], "color": "#70c6e1"},
        ],
        _navIndex = 0;

    function renderHtml(){
        var _data = _dataList[_navIndex];
        $('#rightSortContBox').html(template('tplSortListHtml', _data));
    }

    function getIndexByName(_name){
        for(var i in _dataList){
            if(_dataList[i]['name']==_name){
                return i;
            }
        }
        return -1;
    }

    function addEvent(){
        $.ListenMapChange.listen(function(_data){
            _navIndex = getIndexByName(_data['name']);
            renderHtml();
        });

        $.ListenMapDataChange.listen(function(data){
            var _data = data['data'];
            _navIndex = getIndexByName(_data['name']);
            renderHtml();
        });
    }

    $(function(){
        renderHtml();
        addEvent();
    });
})(jQuery);

/**
 * 幼有所育详细指标
 */
(function($){

    var _dataList = [
        {"id": 1, "name": "东小口镇", "value1": "126/60", "value2": "126/60", "color1": "#2cb30d", "color2": "#eb4d3e"},
        {"id": 2, "name": "史各庄街道", "value1": "126/60", "value2": "126/60", "color1": "#2cb30d", "color2": "#eb4d3e"},
        {"id": 3, "name": "回龙观街道", "value1": "126/60", "value2": "126/60", "color1": "#2cb30d", "color2": "#eb4d3e"},
        {"id": 4, "name": "天通苑北街道", "value1": "126/60", "value2": "126/60", "color1": "#2cb30d", "color2": "#eb4d3e"},
        {"id": 5, "name": "天通苑南街道", "value1": "126/60", "value2": "126/60", "color1": "#2cb30d", "color2": "#eb4d3e"},
        {"id": 6, "name": "霍营街道", "value1": "126/60", "value2": "126/60", "color1": "#2cb30d", "color2": "#eb4d3e"},
        {"id": 7, "name": "龙泽园街道", "value1": "126/60", "value2": "126/60", "color1": "#2cb30d", "color2": "#eb4d3e"},
    ];

    function renderHtml(){
        $('#detailZBBox').html(template('tplDetailHtml', {
            dataList: _dataList
        }));
    }

    $(function(){
        renderHtml();
    });
})(jQuery);

/**
 * 东小口镇项目信息
 */
(function($){

    var _dataList = [
        {"id": 1, "name": "东小口森林公园项目1", "status": "完工投用", "url": "javascript:;", "color": "#43ca26"},
        {"id": 2, "name": "东小口森林公园项目2", "status": "完工投用", "url": "javascript:;", "color": "#43ca26"},
        {"id": 3, "name": "东小口森林公园项目3", "status": "新建未开", "url": "javascript:;", "color": "#ffa839"},
        {"id": 4, "name": "东小口森林公园项目4", "status": "续建复工", "url": "javascript:;", "color": "#ffef95"},
        {"id": 5, "name": "东小口森林公园项目5", "status": "完工投用", "url": "javascript:;", "color": "#43ca26"},
        {"id": 6, "name": "东小口森林公园项目6", "status": "完工投用", "url": "javascript:;", "color": "#43ca26"},
        {"id": 7, "name": "东小口森林公园项目7", "status": "完工投用", "url": "javascript:;", "color": "#43ca26"},
    ],_dataIndex = 0, _handle;

    function renderHtml(){
        $('#xmxxListBox').html(template('tplProgramHtml', {
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 5)
        }));
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            renderHtml();
        }, 5000);
    }

    function addEvent(){
        setTime();
    }

    $(function(){
        renderHtml();
        addEvent();
    });
})(jQuery);