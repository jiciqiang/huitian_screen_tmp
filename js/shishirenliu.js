!function(o){var a=[{id:1,name:"户籍人口数",value:"996",color:"#8ed7ff"},{id:2,name:"实有人口数",value:"29",color:"#8ed7ff"},{id:3,name:"求助人口数",value:"30",color:"#43ca26"},{id:4,name:"矫正人员数",value:"0.8",color:"#8ed7ff"},{id:5,name:"参保人员",value:"80",color:"#8ed7ff"},{id:6,name:"城管执法人员",value:"25",color:"#8ed7ff"}],t=[{id:1,name:"男",value:50,value2:"(50.5%)",max:100},{id:2,name:"女",value:49.6,value2:"(48.5%)",max:100}],n=[{id:1,name:"65岁以上",value:7.1,max:50},{id:2,name:"41-65岁",value:31.1,max:50},{id:3,name:"18-40岁",value:48.1,max:50},{id:4,name:"0-17岁",value:2.7,max:50}];o(function(){var e;(e=o("#SMFYList")).html(template("tplLDListBoxHtml",{dataList:a,humanList:t,human2List:n})),e.find(".counter").countUp()})}(jQuery),function(o){var a=[{name:"实时人流（人）",value:1209738,icon:"images/ssrl_icon_01.png",color:"#71dff9"},{name:"重度聚集点",value:30,icon:"images/ssrl_icon_02.png",color:"#eb4e40"},{name:"中度聚集点",value:40,icon:"images/ssrl_icon_03.png",color:"#ffe44b"}],t=[{name:">2h",value:31.05,icon:"images/ssrl_icon_04.png",color:"#eb4e40",unit:"万"},{name:"1-2h",value:28.05,icon:"images/ssrl_icon_05.png",color:"#ffa93a",unit:"万"},{name:"0.5-1h",value:16.54,icon:"images/ssrl_icon_06.png",color:"#ffef95",unit:"万"},{name:"<0.5h",value:11.34,icon:"images/ssrl_icon_07.png",color:"#43ca25",unit:"万"}],n=[{name:">25km",value:44.22,icon:"images/ssrl_icon_08.png",color:"#eb4e40",unit:"万"},{name:"15-25km",value:22.34,icon:"images/ssrl_icon_09.png",color:"#ffa93a",unit:"万"},{name:"5-15km",value:12.1,icon:"images/ssrl_icon_10.png",color:"#ffef95",unit:"万"},{name:"<5km",value:10.34,icon:"images/ssrl_icon_11.png",color:"#43ca25",unit:"万"}];o(function(){var e;(e=o("#midTopListBox")).html(template("tplMidTopList",{dataList:a})),e.find(".counter").countUp(),o("#midBottomListBox").html(template("tplMidBottomList",{dataListTop:t,dataListBottom:n}))})}(jQuery),function(r){var l,e=[{id:1,name:"街镇"},{id:2,name:"社区"},{id:3,name:"楼宇"}],o=2;function a(){r("#midTopTabList").html(template("tplMidTopTabList",{dataList:e,index:o}))}var t,n,s,i=!0,d={110114007:{areaname:"东小口镇",centerPoint:[116.37305080866258,40.06668316544415],zoom:12.45,percent:.08},110114008:{areaname:"天通苑北街道",centerPoint:[116.41896370193729,40.070634221472005],zoom:13.8,percent:.18},110114009:{areaname:"天通苑南街道",centerPoint:[116.40268131480718,40.05106868418309],zoom:13.24,percent:.12},110114010:{areaname:"霍营街道",centerPoint:[116.35590979455344,40.077275392400935],zoom:13.54,percent:.12},110114011:{areaname:"回龙观街道",centerPoint:[116.31965624062502,40.083187864133976],zoom:12,percent:.26},110114012:{areaname:"龙泽园街道",centerPoint:[116.32164540283316,40.077639189507465],zoom:13.5,percent:.13},110114013:{areaname:"史各庄街道",centerPoint:[116.2833514526867,40.09348321735695],zoom:12.8,percent:.11}},c=["#0FBF67","#1a9850","#d9ef8b","#fee08b","#fdae61","#f46d43","#d73027"],u=[7e4,8e4,1e5,12e4,15e4,2e5],p=[150,200,300,400,500,550],f=[50,100,300,500,800,1e3],m={jdinfo:{areaName:"",areaId:""},sqinfo:{areaName:"",areaId:""}},g="jzrk";function y(t){var n="<p>图例</p>";c.forEach(function(e,o){if(0==o)var a=t[o]+"以下";else if(o==c.length-1)a=t[o-1]+"以上";else a=t[o-1]+"-"+t[o];n+="<div><span style='background-color: "+c[o]+"'></span>"+a+"</div>"}),r("#legend").html(n)}function v(){l.setPitch(0),l.getSource("polygon_building").setData({type:"FeatureCollection",features:[]})}function h(){mapboxgl.accessToken="pk.eyJ1IjoidG9ueWFuaXUiLCJhIjoiY2s2cnBtcHZ6MDg0bDNpcWk2ZTdvc3hyZSJ9.Z50SCfYIKg-QjjEEs68WgA";l=new mapboxgl.Map({container:"chartMapBox",zoom:14.8,center:[116.41283715694362,40.071505721045156],style:"mapbox://styles/tonyaniu/ckj734r4138c41al7te4sorx5",pitch:60,bearing:0,attributionControl:!1,localIdeographFontFamily:"'Noto Sans', 'Noto Sans CJK SC', sans-serif"}),new mapboxgl.Popup({closeButton:!1}),t=d3.scaleThreshold().domain(u).range(c),n=d3.scaleThreshold().domain(p).range(c),s=d3.scaleThreshold().domain(f).range(c),l.on("load",function(){d3.queue().defer(d3.json,"data/boundata/ht_jd.json").defer(d3.json,"data/boundata/ht_sq.json").defer(d3.json,"data/boundata/ht_build.json").defer(d3.json,"data/onlydata/ht_jd.json").defer(d3.json,"data/onlydata/ht_sq.json").defer(d3.json,"data/onlydata/ht_build.json").await(function(e,o,a,t,n,r,i){o.features.forEach(function(e,o){e.properties.gzrk=n[e.properties.jd_id].gzrk,e.properties.jzrk=n[e.properties.jd_id].jzrk}),a.features.forEach(function(e,o){e.properties.gzrk=r[e.properties.sq_id].gzrk,e.properties.jzrk=r[e.properties.sq_id].jzrk}),t.features.forEach(function(e,o){e.properties.gzrk=i[e.properties.CODE].gzrk,e.properties.jzrk=i[e.properties.CODE].jzrk}),jdBoundary=o,sqBoundary=a,buildData=t,l.addSource("polygon_building",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),l.addLayer({id:"polygon_building",type:"fill-extrusion",source:"polygon_building",layout:{},paint:{"fill-extrusion-color":["get","color"],"fill-extrusion-height":["interpolate",["linear"],["zoom"],0,0,15.05,["get","楼高"]],"fill-extrusion-opacity":1}}),buildData.features.forEach(function(e,o){e.properties.color=s(e.properties.jzrk)}),l.getSource("polygon_building").setData(buildData),!0,l.addSource("polygon_sq",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),l.addLayer({id:"polygon_sq",type:"fill",source:"polygon_sq",layout:{},paint:{"fill-color":["get","color"],"fill-opacity":.85,"fill-outline-color":"#ddd"}})}),l.on("mousemove","polygon_sq",function(e){!function(e){var o=r("#tabs .on").index();level=0==o?"jd_name":"sq_name";var a=JSON.parse(e.properties.centerPoint);l.getCanvas().style.cursor="pointer";var t={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:a},properties:{name:e.properties[level]+":"+e.properties[g]}}]};i?(i=!1,l.addSource("text_polygon",{type:"geojson",data:t}),l.addLayer({id:"text_polygon",type:"symbol",source:"text_polygon",layout:{"text-field":["get","name"],"text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-size":28},paint:{"text-color":"#fff"}})):l.getSource("text_polygon").setData(t)}(e.features[0])}),l.on("mouseout","polygon_sq",function(){l.getCanvas().style.cursor="";l.getSource("text_polygon").setData({type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[]},properties:{name:""}}]})})})}function _(e){if(0==e)m.jdinfo.areaId="",m.jdinfo.areaName="",m.sqinfo.areaId="",m.sqinfo.areaName="",v(),y(u),jdBoundary.features.forEach(function(e,o){e.properties.color=t(e.properties[g])}),l.getSource("polygon_sq").setData(jdBoundary),l.setCenter([116.3526899674639,40.079234452008535]),l.setZoom(11.76);else if(1==e)if(m.sqinfo.areaId="",m.sqinfo.areaName="",v(),y(p),""==m.jdinfo.areaId)sqBoundary.features.forEach(function(e,o){e.properties.color=n(e.properties[g])}),l.getSource("polygon_sq").setData(sqBoundary),l.setCenter([116.3526899674639,40.079234452008535]),l.setZoom(11.76);else{var a={type:"FeatureCollection",features:[]};sqBoundary.features.forEach(function(e,o){e.properties.jd_id==m.jdinfo.areaId&&(e.properties.color=n(e.properties[g]),a.features.push(e))}),l.getSource("polygon_sq").setData(a),l.setCenter(d[m.jdinfo.areaId].centerPoint),l.setZoom(d[m.jdinfo.areaId].zoom)}else if(2==e)if(l.setPitch(60),l.getSource("polygon_sq").setData({type:"FeatureCollection",features:[]}),y(f),""==m.jdinfo.areaId)buildData.features.forEach(function(e,o){e.properties.color=s(e.properties[g])}),l.getSource("polygon_building").setData(buildData),l.setCenter([116.41283715694362,40.071505721045156]),l.setZoom(14.8);else if(""==m.sqinfo.areaId){a={type:"FeatureCollection",features:[]};buildData.features.forEach(function(e,o){e.properties.jd_id==m.jdinfo.areaId&&(e.properties.color=s(e.properties[g]),a.features.push(e))}),l.getSource("polygon_building").setData(a),l.setCenter(d[m.jdinfo.areaId].centerPoint),l.setZoom(d[m.jdinfo.areaId].zoom)}}r(function(){a(),setTimeout(function(){h(),r(document).on("click","#midTopTabList li",function(){_(o=r(this).index()),a()})},200)})}(jQuery),function(e){var o,a={number:30,isUp:!0},t=[{id:1,name:"华联商场",tag:"即将发生聚集",adv:"做好疫情防控"},{id:2,name:"华联商场",tag:"即将发生聚集",adv:"做好疫情防控"},{id:3,name:"华联商场",tag:"即将发生聚集",adv:"做好疫情防控"},{id:4,name:"华联商场",tag:"即将发生聚集",adv:"做好疫情防控"},{id:5,name:"华联商场",tag:"即将发生聚集",adv:"做好疫情防控"},{id:6,name:"华联商场",tag:"即将发生聚集",adv:"做好疫情防控"},{id:7,name:"华联商场",tag:"即将发生聚集",adv:"做好疫情防控"},{id:8,name:"华联商场",tag:"即将发生聚集",adv:"做好疫情防控"},{id:9,name:"华联商场",tag:"即将发生聚集",adv:"做好疫情防控"}],n=0;function r(){e("#ycListBox").html(template("tplYCListHtml",{dataInfo:a,dataList:e.getArrayByIndex(t,n,8)}))}function i(){o=setInterval(function(){n=n+1>=t.length?0:n+1,r()},5e3)}e(function(){r(),i(),e("#ycListBox").hover(function(){clearInterval(o)},function(){i()})})}(jQuery),function(e){var t=[{id:1,name:"信息技术",value:"50",color:"#3aa9ff"},{id:2,name:"餐饮住宿",value:"30",color:"#43ca26"},{id:3,name:"建筑业",value:"10",color:"#ffa93a"},{id:4,name:"其他",value:"10",color:"#ffef95"}];function o(){var e=document.getElementById("pieChartBox");echarts.init(e).setOption({color:function(){var e=[];for(var o in t)e[o]=t[o].color;return e}(),tooltip:{trigger:"item",formatter:"{b} : {d}%"},series:[{name:"诉求分类",type:"pie",radius:"60%",center:["50%","50%"],data:function(){var e=[],o=0;for(var a in t)e[o]=t[a],e[o].itemStyle={color:t[a].color},o++;return e}(),minAngle:5,avoidLabelOverlap:!0,label:{color:"#FFFFFF",position:"outer",alignTo:"edge",margin:10,formatter:function(e){return e.value=e.value+"%","{b|"+e.name+"} {c|"+e.value+"}"},fontSize:14,rich:{b:{fontSize:14,color:"#FFFFFF"},c:{fontSize:21,fontFamily:'"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif',textShadowBlur:5,textShadowOffsetX:0,textShadowColor:"rgba(0, 0, 0, 0.9)"}}},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}e(function(){setTimeout(function(){o()},200)})}(jQuery);