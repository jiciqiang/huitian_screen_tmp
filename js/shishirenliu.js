/**
 * 人口属性
 */
(function($){

    var _dataList = [
        {"id": 1, "name": "户籍人口数", "value": "996", "color": "#8ed7ff"},
        {"id": 2, "name": "实有人口数", "value": "29", "color": "#8ed7ff"},
        {"id": 3, "name": "求助人口数", "value": "30", "color": "#43ca26"},
        {"id": 4, "name": "矫正人员数", "value": "0.8", "color": "#8ed7ff"},
        {"id": 5, "name": "参保人员", "value": "80", "color": "#8ed7ff"},
        {"id": 6, "name": "城管执法人员", "value": "25", "color": "#8ed7ff"},
    ],
        _humanList = [
            {"id": 1, "name": "男", "value": 50, "value2": "(50.5%)", "max": 100},
            {"id": 2, "name": "女", "value": 49.6, "value2": "(48.5%)", "max": 100},
        ],
        _humanList2 = [
            {"id": 1, "name": "65岁以上", "value": 7.1, "max": 50},
            {"id": 2, "name": "41-65岁", "value": 31.1, "max": 50},
            {"id": 3, "name": "18-40岁", "value": 48.1, "max": 50},
            {"id": 4, "name": "0-17岁", "value": 2.7, "max": 50}
        ];

    function renderContentHtml(){
        var _SMFYList = $('#SMFYList');
        _SMFYList.html(template('tplLDListBoxHtml', {
            dataList: _dataList,
            humanList: _humanList,
            human2List: _humanList2
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
 * 中间顶部数据
 */
(function($){

    var _topDataList = [
            {"name": "实时人流（人）", "value": 1209738, "icon": "images/ssrl_icon_01.png", "color": "#71dff9"},
            {"name": "重度聚集点", "value": 30, "icon": "images/ssrl_icon_02.png", "color": "#eb4e40"},
            {"name": "中度聚集点", "value": 40, "icon": "images/ssrl_icon_03.png", "color": "#ffe44b"},
        ],
        _bottom1List = [
            {"name": ">2h", "value": 31.05, "icon": "images/ssrl_icon_04.png", "color": "#eb4e40", "unit": "万"},
            {"name": "1-2h", "value": 28.05, "icon": "images/ssrl_icon_05.png", "color": "#ffa93a", "unit": "万"},
            {"name": "0.5-1h", "value": 16.54, "icon": "images/ssrl_icon_06.png", "color": "#ffef95", "unit": "万"},
            {"name": "<0.5h", "value": 11.34, "icon": "images/ssrl_icon_07.png", "color": "#43ca25", "unit": "万"},
        ],
        _bottom2List = [
            {"name": ">25km", "value": 44.22, "icon": "images/ssrl_icon_08.png", "color": "#eb4e40", "unit": "万"},
            {"name": "15-25km", "value": 22.34, "icon": "images/ssrl_icon_09.png", "color": "#ffa93a", "unit": "万"},
            {"name": "5-15km", "value": 12.10, "icon": "images/ssrl_icon_10.png", "color": "#ffef95", "unit": "万"},
            {"name": "<5km", "value": 10.34, "icon": "images/ssrl_icon_11.png", "color": "#43ca25", "unit": "万"},
        ];

    function renderTopHtml(){
        var _midTopListBox = $('#midTopListBox');
        _midTopListBox.html(template('tplMidTopList', {
            dataList: _topDataList
        }));

        _midTopListBox.find('.counter').countUp({
            delay: 10,
            time: 2000
        });
    }

    function renderBottomHtml(){
        var _midBottomListBox = $('#midBottomListBox');
        _midBottomListBox.html(template('tplMidBottomList', {
            dataListTop: _bottom1List,
            dataListBottom: _bottom2List
        }))
    }

    $(function(){
        renderTopHtml();
        renderBottomHtml();
    });
})(jQuery);

/**
 * 中间地图
 */
(function($){
    var _navList = [
        {"id": 1, "name": "街镇"},
        {"id": 2, "name": "社区"},
        {"id": 3, "name": "楼宇"}
    ], _navIndex = 2;

    function renderNavHtml(){
        var _midTopTabList = $('#midTopTabList');

        _midTopTabList.html(template('tplMidTopTabList', {
            dataList: _navList,
            index: _navIndex
        }));
    }

    var map;
    var popup;
    var flag = true;  //用来判断加文字  鼠标滑过
    var tabFlag = false; //数据加载完成之后才可以点击tab
    var newMarker;
    var jdCenterZoom={
        "110114007": {
            "areaname": "东小口镇",
            "centerPoint": [116.37305080866258,40.06668316544415],
            "zoom": 12.45,
            "percent":0.08
        },
        "110114008": {
            "areaname": "天通苑北街道",
            "centerPoint":[116.41896370193729,40.070634221472005],
            "zoom":13.8,
            "percent":0.18
        },
        "110114009": {
            "areaname": "天通苑南街道",
            "centerPoint": [116.40268131480718,40.05106868418309],
            "zoom":13.24,
            "percent":0.12
        },
        "110114010": {
            "areaname": "霍营街道",
            "centerPoint": [116.35590979455344,40.077275392400935],
            "zoom": 13.54,
            "percent":0.12
        },
        "110114011": {
            "areaname": "回龙观街道",
            "centerPoint":[116.31965624062502,40.083187864133976],
            "zoom": 12,
            "percent":0.26
        },
        "110114012": {
            "areaname": "龙泽园街道",
            "centerPoint":[116.32164540283316,40.077639189507465],
            "zoom": 13.5,
            "percent":0.13
        },
        "110114013": {
            "areaname": "史各庄街道",
            "centerPoint":[116.2833514526867,40.09348321735695],
            "zoom": 12.8,
            "percent":0.11
        }
    }
    var lengColor = ["#0FBF67", "#1a9850","#d9ef8b", "#fee08b", "#fdae61", "#f46d43", "#d73027"];
    var jzNum = [70000,80000,100000, 120000, 150000,200000];
    var sqNum = [150, 200, 300, 400, 500, 550];
    var buildNum = [50, 100, 300, 500, 800, 1000];
    var colorJz;
    var colorSq;
    var colorBuild;
    var clickInfo = {
        jdinfo: {
            areaName: "",
            areaId: ""
        },
        sqinfo: {
            areaName: "",
            areaId: ""
        }
    };
    var datatype = "jzrk";

    //------------------------方法-------------------------------------------
    function renderLengend(num){
        var legendStr = "<p>图例</p>";
        lengColor.forEach(function(item,index){
            if(index==0){
                var text = num[index]+"以下";
            }else if(index == lengColor.length -1){
                var text = num[index-1]+"以上";
            }else{
                var text = num[index-1]+"-"+num[index];
            }
            legendStr += "<div><span style='background-color: " + lengColor[index] + "'></span>" + text + "</div>"
        })
        $("#legend").html(legendStr);
    }
    function Map2DView(){
        map.setPitch(0);
        //将立体的置空
        map.getSource("polygon_building").setData({ "type": "FeatureCollection", "features": [] });
    }

    function Map3DView(){
        map.setPitch(60);
        //将平面的置空
        map.getSource("polygon_sq").setData({ "type": "FeatureCollection", "features": [] });
    }
    function addText(dFeature){
        var ind = $("#tabs .on").index();
        level = ind == 0?"jd_name":"sq_name";
        var point= JSON.parse(dFeature.properties.centerPoint);
        map.getCanvas().style.cursor = 'pointer';
        var point_layer = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": point
                },
                "properties": {
                    "name": dFeature.properties[level]+":"+dFeature.properties[datatype]
                }
            }]
        };
        if (flag) {
            flag = false;
            map.addSource('text_polygon', {
                'type': 'geojson',
                data: point_layer
            });

            map.addLayer({
                'id': 'text_polygon',
                'type': 'symbol',
                'source': 'text_polygon',
                'layout': {
                    'text-field': ['get', 'name'],
                    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                    'text-size': 28
                },
                'paint': {
                    'text-color': '#fff'
                }
            });
        } else {
            map.getSource("text_polygon").setData(point_layer)
        }
    }

    //创建图表
    function createMap(){
        mapboxgl.accessToken = 'pk.eyJ1IjoidG9ueWFuaXUiLCJhIjoiY2s2cnBtcHZ6MDg0bDNpcWk2ZTdvc3hyZSJ9.Z50SCfYIKg-QjjEEs68WgA';
        var styleZoom = {
            container: "chartMapBox",
            zoom: 14.8,
            center: [116.41283715694362,40.071505721045156],
            style: 'mapbox://styles/tonyaniu/ckj734r4138c41al7te4sorx5',
            pitch: 60,
            bearing: 0,
            attributionControl: false,
            localIdeographFontFamily: "'Noto Sans', 'Noto Sans CJK SC', sans-serif"
        };

        map = new mapboxgl.Map(styleZoom);
        popup = new mapboxgl.Popup({
            closeButton: false
        });
        colorJz = d3.scaleThreshold().domain(jzNum).range(lengColor);
        colorSq = d3.scaleThreshold().domain(sqNum).range(lengColor);
        colorBuild = d3.scaleThreshold().domain(buildNum).range(lengColor);

        map.on('load', function() {
            d3.queue()
                .defer(d3.json, 'data/boundata/ht_jd.json')  //街镇边界 数据
                .defer(d3.json, 'data/boundata/ht_sq.json')  //社区边界数据
                .defer(d3.json, 'data/boundata/ht_build.json') //楼宇边界数据
                .defer(d3.json, 'data/onlydata/ht_jd.json') //街道 工作居住数据
                .defer(d3.json, 'data/onlydata/ht_sq.json')  //社区  工作居住数据
                .defer(d3.json, 'data/onlydata/ht_build.json')  //楼宇 工作居住数据
                .await(function(error, jdBound,sqBound,bildBound,jdData,sqData,build) {
                    jdBound.features.forEach(function(item,index){
                        item.properties.gzrk = jdData[item.properties.jd_id]['gzrk'];
                        item.properties.jzrk = jdData[item.properties.jd_id]['jzrk'];
                    })
                    sqBound.features.forEach(function(item,index){
                        item.properties.gzrk = sqData[item.properties.sq_id]['gzrk'];
                        item.properties.jzrk = sqData[item.properties.sq_id]['jzrk'];
                    })
                    bildBound.features.forEach(function(item,index){
                        item.properties.gzrk = build[item.properties.CODE]['gzrk'];
                        item.properties.jzrk = build[item.properties.CODE]['jzrk'];
                    })
                    jdBoundary = jdBound;
                    sqBoundary = sqBound;
                    buildData = bildBound;
                    //楼宇建筑物
                    map.addSource("polygon_building",
                        { type: "geojson",
                            data: {
                                "type": "FeatureCollection",
                                "features":[]
                            }
                        }
                    );
                    map.addLayer(
                        { id: "polygon_building",
                            type: "fill-extrusion",
                            source: "polygon_building",
                            layout: {},
                            paint: {
                                "fill-extrusion-color": ['get', 'color'],
                                'fill-extrusion-height': [ "interpolate", ["linear"], ["zoom"], 0, 0, 15.05, ["get", "楼高"] ],
                                'fill-extrusion-opacity': 1
                            }
                        });
                    buildData.features.forEach(function(item,index){
                        item.properties.color = colorBuild(item.properties.jzrk);
                    });
                    map.getSource("polygon_building").setData(buildData);
                    tabFlag = true;
                    //街道
                    map.addSource('polygon_sq', {
                        'type': 'geojson',
                        'data': {
                            "type": "FeatureCollection",
                            "features": []
                        }
                    });
                    map.addLayer({
                        id: 'polygon_sq',
                        type: "fill",
                        source: 'polygon_sq',
                        layout: {},
                        paint: {
                            'fill-color': ['get', 'color'],
                            'fill-opacity': .85,
                            'fill-outline-color': '#ddd' } });
                });
            //街道社区滑过事件
            map.on("mousemove", 'polygon_sq', function(d) {
                addText(d.features[0]);
            })
            //街道社区滑出事件
            map.on('mouseout', 'polygon_sq', function () {
                map.getCanvas().style.cursor = '';
                var point_blank = {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":[]
                        },
                        "properties": {
                            "name": ""
                        }
                    }]
                };
                map.getSource("text_polygon").setData(point_blank);
            })
        })
    }

    function resetMap(_index){
        //街镇
        if(_index==0){
            clickInfo.jdinfo.areaId="";
            clickInfo.jdinfo.areaName="";
            clickInfo.sqinfo.areaId="";
            clickInfo.sqinfo.areaName="";
            //街镇  显示回天地区的全部街镇
            Map2DView();
            //图例切换
            renderLengend(jzNum);
            //填充
            jdBoundary.features.forEach(function(item,index){
                item.properties.color = colorJz(item.properties[datatype])
            })
            map.getSource("polygon_sq").setData(jdBoundary);
            map.setCenter([116.3526899674639,40.079234452008535]);
            map.setZoom(11.76);
            //数据
        }
        //社区
        else if(_index==1){
            clickInfo.sqinfo.areaId="";
            clickInfo.sqinfo.areaName="";
            //社区  显示回天地区的全部社区
            Map2DView();
            //图例切换
            renderLengend(sqNum);
            //填充
            if(clickInfo.jdinfo.areaId == ""){
                sqBoundary.features.forEach(function(item,index){
                    item.properties.color = colorSq(item.properties[datatype])
                })
                map.getSource("polygon_sq").setData(sqBoundary);
                map.setCenter([116.3526899674639,40.079234452008535]);
                map.setZoom(11.76);
            }else{
                var newData = {
                    "type": "FeatureCollection",
                    "features": []
                }
                sqBoundary.features.forEach(function(item,index){
                    if(item.properties.jd_id == clickInfo.jdinfo.areaId){
                        item.properties.color = colorSq(item.properties[datatype]);
                        newData.features.push(item);
                    }
                })
                map.getSource("polygon_sq").setData(newData);
                map.setCenter(jdCenterZoom[clickInfo.jdinfo.areaId].centerPoint);
                map.setZoom(jdCenterZoom[clickInfo.jdinfo.areaId].zoom);
            }
        }
        //楼宇
        else if(_index==2){
            Map3DView();
            //图例切换
            renderLengend(buildNum);

            if(clickInfo.jdinfo.areaId == ""){
                //楼宇渲染 全部
                buildData.features.forEach(function(item,index){
                    item.properties.color = colorBuild(item.properties[datatype])
                })
                map.getSource("polygon_building").setData(buildData);
                map.setCenter([116.41283715694362,40.071505721045156]);
                map.setZoom(14.8);
            }else{
                if(clickInfo.sqinfo.areaId == ""){
                    //渲染一个街镇的 楼宇
                    var newData = {
                        "type": "FeatureCollection",
                        "features": []
                    }
                    buildData.features.forEach(function(item,index){
                        if(item.properties.jd_id == clickInfo.jdinfo.areaId){
                            item.properties.color = colorBuild(item.properties[datatype])
                            newData.features.push(item);
                        }
                    })
                    map.getSource("polygon_building").setData(newData);
                    map.setCenter(jdCenterZoom[clickInfo.jdinfo.areaId].centerPoint);
                    map.setZoom(jdCenterZoom[clickInfo.jdinfo.areaId].zoom);
                }
            }
            //if 2 end
        }
        //if end
    }

    function addEvent(){
        $(document).on('click', '#midTopTabList li', function(){
            _navIndex = $(this).index();
            resetMap(_navIndex);
            renderNavHtml();
        });
    }

    $(function(){
        renderNavHtml();
        setTimeout(function(){
            createMap();
            addEvent();
        }, 200);
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
            {"id": 1, "name": "华联商场", "tag": "即将发生聚集", "adv": "做好疫情防控"},
            {"id": 2, "name": "华联商场", "tag": "即将发生聚集", "adv": "做好疫情防控"},
            {"id": 3, "name": "华联商场", "tag": "即将发生聚集", "adv": "做好疫情防控"},
            {"id": 4, "name": "华联商场", "tag": "即将发生聚集", "adv": "做好疫情防控"},
            {"id": 5, "name": "华联商场", "tag": "即将发生聚集", "adv": "做好疫情防控"},
            {"id": 6, "name": "华联商场", "tag": "即将发生聚集", "adv": "做好疫情防控"},
            {"id": 7, "name": "华联商场", "tag": "即将发生聚集", "adv": "做好疫情防控"},
            {"id": 8, "name": "华联商场", "tag": "即将发生聚集", "adv": "做好疫情防控"},
            {"id": 9, "name": "华联商场", "tag": "即将发生聚集", "adv": "做好疫情防控"}
        ], _dataIndex = 0, _handle;

    function renderHtml(){
        $('#ycListBox').html(template('tplYCListHtml', {
            dataInfo: _dataInfo,
            dataList: $.getArrayByIndex(_dataList, _dataIndex, 8)
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
 * 诉求分类
 */
(function($){

    var _navList = [
            {"id": 1, "name": "信息技术", "value": "50", "color": "#3aa9ff"},
            {"id": 2, "name": "餐饮住宿", "value": "30", "color": "#43ca26"},
            {"id": 3, "name": "建筑业", "value": "10", "color": "#ffa93a"},
            {"id": 4, "name": "其他", "value": "10", "color": "#ffef95"}
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