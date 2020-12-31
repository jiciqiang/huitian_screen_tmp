
/**
 * 监控路段信息
 */
(function($){

    var _navList = [
        {"id": 1, "name": "全部", "value": 99999},
        {"id": 2, "name": "一般拥堵", "value": 29},
        {"id": 3, "name": "严重拥堵", "value": 29}
    ],
        /**
         *
         * @type {类型，1为严重，2为一般，3为畅通}
         * @private
         */
        _dataList = [
            {"id": 1, "name": "北清路段", "value": "26.63", "percent": "2.13", "type": 1, "score": 6},
            {"id": 2, "name": "北清路段", "value": "26.63", "percent": "2.13", "type": 2, "score": 5},
            {"id": 3, "name": "北清路段", "value": "26.63", "percent": "2.13", "type": 3, "score": 3},
            {"id": 4, "name": "北清路段", "value": "26.63", "percent": "2.13", "type": 1, "score": 6},
            {"id": 5, "name": "北清路段", "value": "26.63", "percent": "2.13", "type": 2, "score": 5},
        ],_dataIndex = 0, _handle;

    function renderNavHtml(){
        $('#leftTopNav').html(template('tplLeftTopNavHtml', {
            dataList: _navList
        }));
    }

    function renderContentHtml(){
        $('#LDListBox').html(template('tplLDListBoxHtml', {
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 3)
        }));
    }

    function setTime(){
        _handle = setInterval(function(){
            _dataIndex = _dataIndex+1>=_dataList.length?0:_dataIndex+1;
            renderContentHtml();
        }, 5000);
    }

    function addEvent(){
        setTime();
        $('#LDListBox').hover(function(){
            clearInterval(_handle);
        }, function(){
            setTime();
        })
    }


    $(function(){
        renderNavHtml();
        renderContentHtml();
        addEvent();
    });
})(jQuery);

/**
 * 常发拥堵排行Top5
 */
(function($){

    var _dataList = [
            {"id": 1, "name": "北清路", "value": "261.9", "value2": "19", "color": "#eb4e40"},
            {"id": 2, "name": "鼓楼北街路段", "value": "200", "value2": "19", "color": "#f28434"},
            {"id": 3, "name": "西关路由西向北路段", "value": "190", "value2": "19", "color": "#f18e46"},
            {"id": 4, "name": "鼓楼东街", "value": "180", "value2": "19", "color": "#f1ab46"},
            {"id": 5, "name": "北清路段", "value": "180", "value2": "19", "color": "#f1d236"}
        ],
        _index = -1,
        _dataIndex = 0,
        _dataTotal = 0,
        _handle,
        _titleHtml = '<li class="tit-li"><p class="tit">排名</p> <p class="name">路段名称</p> <p class="value">拥堵时长</p><p class="value2">拥堵天数(天)</p> </li>';

    function renderHtml(){
        $('#topSortList').html(_titleHtml + template('tplRightContent', {
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
 * 交通预测分析
 */
(function($){
    var _dataInfo = {
            number: 30,
            isUp: true
        },
        _dataList = [
            {"id": 1, "name": "育知路", "date": "17-18点", "intro": "即将发生拥堵", "adv": "安排疏解交通", "status": "警车已前往"},
            {"id": 2, "name": "育知路", "date": "17-18点", "intro": "即将发生拥堵", "adv": "安排疏解交通", "status": "警车已前往"},
            {"id": 3, "name": "育知路", "date": "17-18点", "intro": "即将发生拥堵", "adv": "安排疏解交通", "status": "警车已前往"},
            {"id": 4, "name": "育知路", "date": "17-18点", "intro": "即将发生拥堵", "adv": "安排疏解交通", "status": "警车已前往"},
            {"id": 5, "name": "育知路", "date": "17-18点", "intro": "即将发生拥堵", "adv": "安排疏解交通", "status": "警车已前往"},
            {"id": 6, "name": "育知路", "date": "17-18点", "intro": "即将发生拥堵", "adv": "安排疏解交通", "status": "警车已前往"},
            {"id": 7, "name": "育知路1", "date": "17-18点", "intro": "即将发生拥堵", "adv": "安排疏解交通", "status": "警车已前往"}
        ], _dataIndex = 0, _handle;

    function renderHtml(){
        $('#ycListBox').html(template('tplYCListHtml', {
            dataInfo: _dataInfo,
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 6)
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
        avgValue: 25.6,
        ydValue: 37.33,
        ycValue: 2.13,
        ppValue: "20/30",
        tcValue: "30/20",
        sgValue: 20
    };

    function renderTopHtml(){
        $('#midTopListBox').html(template('tplMidTopList', {
            dataInfo: _dataInfo
        }));
    }

    function renderBottomHtml(){
        $('#midBottomListBox').html(template('tplMidBottomList', {
            dataInfo: _dataInfo
        }));
    }

    $(function(){
        renderTopHtml();
        renderBottomHtml();
    });
})(jQuery);