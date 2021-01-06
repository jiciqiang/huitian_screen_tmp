/**
 * 综合排名
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
        _titleHtml = '<li class="tit-li"><p class="tit">序号</p> <p class="name">街镇</p> <p class="value">状态</p> </li>';

    function renderHtml(){
        $('#topLeftNavList').html(_titleHtml + template('tplRightContent', {
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 7),
            index: _dataIndex
        }));
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex + 1 >= _dataList.length ? 0 : _dataIndex + 1;
            $.ListenMapDataChange.trigger({ index: _dataIndex, data: _dataList[_dataIndex]  });
            renderHtml();
        }, 5000);
    }

    function addEvent(){
        setTime();

        $(document).on('click', '#topLeftNavList li', function(){
            if(0!=$(this).index()){
                _dataIndex = $(this).index()-1;
                $.ListenMapDataChange.trigger({ index: _dataIndex, data: _dataList[_dataIndex]  });
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

        $('#topLeftContent, #topMiddleContent').hover(function(){
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
 * 增量排行1
 */
(function($){
    var _dataList = [
            {"id": 1, "name": "医疗机构覆盖率", "value": "20%", "color": "#eb5246"},
            {"id": 2, "name": "PM2.5", "value": "9.6%", "color":  "#f2873a"},
            {"id": 3, "name": "绿化率", "value": "60%", "color":  "#f1914c"},
            {"id": 4, "name": "绿化率", "value": "60%", "color":  "#f1ad4d"},
            {"id": 5, "name": "幼儿园入学率", "value": "60%", "color":  "#f1ae50"},
            {"id": 6, "name": "幼儿园入学率", "value": "60%", "color":  "#f1d33c"},
            {"id": 7, "name": "幼儿园入学率", "value": "60%", "color":  "#f1d443"},
            {"id": 8, "name": "幼儿园入学率", "value": "60%", "color":  "#f1d33c"},
            {"id": 9, "name": "幼儿园入学率", "value": "60%", "color":  "#89cc30"},
            {"id": 10, "name": "幼儿园入学率", "value": "60%", "color":  "#88cb2b"},
            //{"id": 11, "name": "幼儿园入学率", "value": "60%", "color":  "#88cb2b"},
            //{"id": 12, "name": "幼儿园入学率", "value": "60%", "color":  "#88cb2b"},
        ],
        _index = -1,
        _dataIndex = 0,
        _dataTotal = 0,
        _handle;

    function renderHtml(){
        $('#topRightNavList').html(template('tplRightContent2', {
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 10),
            index: 0
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
        $(document).on('click', '#topRightNavList li', function(){
            _index = $(this).index();
            $(document).trigger('mapDataChange', [{
                index: _index,
                data: _dataList[_index]
            }]);
            renderHtml();
        });

        $('#topRightNavList').hover(function(){
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
 * 底部数据
 */
(function($){
    var _dataList = [
        {"id": 1, "name": "医疗养老", "list": [
            {"id": 1, "name": "医疗机构数量", "value": 200, "color": "#e05f57"},
            {"id": 2, "name": "养老机构数量", "value": 2000, "color": "#e05f57"},
            {"id": 3, "name": "养老服务机构床位数", "value": 200, "color": "#e05f57"},
        ]},
        {"id": 2, "name": "教育培训", "list": [
            {"id": 1, "name": "普惠性幼儿园数量", "value": 300, "color": "#52d043"},
            {"id": 2, "name": "幼儿园学位数", "value": 20000, "color": "#52d043"},
            {"id": 3, "name": "适龄入学儿童数量（3-6周岁）", "value": 20000, "color": "#52d043"},
        ]},
        {"id": 3, "name": "劳动就业", "list": [
            {"id": 1, "name": "城镇登记失业人员再就业（万人）", "value": 1.2, "color": "#52d043"},
            {"id": 2, "name": "失业人口数量（万人）", "value": 3.4, "color": "#52d043"},
            {"id": 3, "name": "居民收入水平（万元/年）", "value": 9.1, "color": "#52d043"},
        ]},
        {"id": 4, "name": "住房保障", "list": [
            {"id": 1, "name": "保障房 住房总面积（m²）", "value": 36, "color": "#e05f57"},
            {"id": 2, "name": "困难人群申请保障 性住房人数（万人）", "value": 4, "color": "#e05f57"},
        ]},
        {"id": 5, "name": "基础设施", "list": [
            {"id": 1, "name": "生活圈内公共服务设施总数", "value": 300, "color": "#52d043"},
            {"id": 2, "name": "绿化用地面积（平方米）", "value": 3000, "color": "#52d043"},
            {"id": 3, "name": "摄像头个数", "value": 3659, "color": "#52d043"},
        ]}
    ];

    function renderHtml(){
        $('#SJWZBottomListContent').html(template('tplBottomListBox', {
            dataList: _dataList
        }));
    }

    $(function(){
        renderHtml();
    });

})(jQuery);


