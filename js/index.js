!function(i){var t=[{id:1,name:"人口"},{id:2,name:"地域"},{id:3,name:"产业"},{id:4,name:"事务"},{id:5,name:"组织"}],n=0,a=-1,o=!0,l="#HTYXBottomBox";function r(){i("#leftTabChartNav").html(template("tplJTQKNavHtml",{dataList:t,index:n}))}function u(e,t){i(l).html(template(e,t));try{i(l).find(".counter").countUp({delay:10,time:300})}catch(e){}return i(l)}function c(e){e=e||"",i.ListenTabChnage.trigger({id:t[n].id,name:t[n].name,triggerType:e,isDefault:o},u)}function m(){i(l).loadingHtml()}i(function(){r(),function(){var e;i(document).on("click","#leftTabChartNav li",function(){if(a==i(this).index())return!1;n=i(this).index(),a=i(this).index(),r(),m(),o=!1,clearTimeout(e),e=setTimeout(function(){c("click")},600)});var t=!1;i("#HTHomeContainer").hover(function(){t=!0},function(){t=!1}),i(document).on("click",function(){t||(o=!0,c())}),i.ListenTabChnage.listen(function(e){-1==[1,2,3,4,5].indexOf(e.id)&&(a=-1)})}(),m(),setTimeout(function(){c()},1200)})}(jQuery),function(e){var t=[{id:1,title:"户籍人口",value:99.9,icon:"images/sp_icon_20.png",unit:"*万人"},{id:2,title:"实有人口",value:120.6,icon:"images/sp_icon_17.png",unit:"*万人"},{id:3,title:"参保人员",value:89.2,icon:"images/sp_icon_17.png",unit:"*万人"},{id:4,title:"重点人群",value:14.2,icon:"images/sp_icon_17.png",unit:"*万人"},{id:5,title:"特困人员",value:8.9,icon:"images/sp_icon_17.png",unit:"*万人"},{id:6,title:"低保低收入",value:2.4,icon:"images/sp_icon_17.png",unit:"*万人"},{id:7,title:"幼儿人数",value:46.2,icon:"images/sp_icon_17.png",unit:"*万人"},{id:8,title:"老年人数",value:20.3,icon:"images/sp_icon_17.png",unit:"*万人"},{id:9,title:"适龄中小学人数",value:30.4,icon:"images/sp_icon_17.png",unit:"*万人"}];e(function(){e.ListenTabChnage.listen(function(e){1==e.id&&e.render("tplTabRKContentHtml",{dataList:t})})})}(jQuery),function(e){var t=[{id:1,title:"回天总面积",icon:"images/sp_icon_01.png",value:99.9,unit:"*ha"},{id:2,title:"回天绿地总面积",icon:"images/sp_icon_01.png",value:89.2,unit:"*ha"},{id:3,title:"回天文体总面积",icon:"images/sp_icon_01.png",value:120.6,unit:"*ha"},{id:4,title:"回天社区总数",icon:"images/sp_icon_01.png",value:89,unit:"*个"},{id:5,title:"回天楼宇总数",icon:"images/sp_icon_07.png",value:18707,unit:"*栋"},{id:6,title:"保障性住房",icon:"images/sp_icon_08.png",value:700,unit:"*个"},{id:7,title:"摄像头总数",icon:"images/sp_icon_09.png",value:1807,unit:"*个"},{id:8,title:"停车场总数",icon:"images/sp_icon_10.png",value:800,unit:"*个"},{id:9,title:"道路数量",icon:"images/sp_icon_15.png",value:8e3,unit:"*条"},{id:10,title:"文化设施数量",icon:"images/sp_icon_16.png",value:7896,unit:"*个"}];e(function(){e.ListenTabChnage.listen(function(e){2==e.id&&e.render("tplTabDYContentHtml",{dataList:t})})})}(jQuery),function(e){var t=[{id:1,title:"企业数量",icon:"images/sp_icon_02.png",value:13869,unit:"*个"},{id:2,title:"企业个体数量",icon:"images/sp_icon_02.png",value:10090,unit:"*个"},{id:3,title:"商业网点",icon:"images/sp_icon_02.png",value:13869,unit:"*个"},{id:4,title:"交通出行订单",icon:"images/sp_icon_06.png",value:10090,unit:"*个"},{id:5,title:"夜间交易额",icon:"images/sp_icon_11.png",value:13869,unit:"*个"},{id:6,title:"夜间交易用户数",icon:"images/sp_icon_12.png",value:10090,unit:"*个"}];e(function(){e.ListenTabChnage.listen(function(e){3==e.id&&e.render("tplTabCYContentHtml",{dataList:t})})})}(jQuery),function(e){var t=[{id:1,title:"政务服务事项",icon:"images/sp_icon_03.png",value:13869,unit:"*件"},{id:2,title:"未诉先办",icon:"images/sp_icon_04.png",value:10090,unit:"*件"},{id:3,title:"党建活动",icon:"images/sp_icon_02.png",value:13869,unit:"*个"},{id:4,title:"网格责任人",icon:"images/sp_icon_12.png",value:10090,unit:"*个"},{id:5,title:"接警数量",icon:"images/sp_icon_13.png",value:13869,unit:"*个"},{id:6,title:"法律援助",icon:"images/sp_icon_14.png",value:10090,unit:"*件"}];e(function(){e.ListenTabChnage.listen(function(e){4==e.id&&e.render("tplTabSWContentHtml",{dataList:t})})})}(jQuery),function(e){var t=[{id:1,title:"医疗机构数量",icon:"images/sp_icon_05.png",value:13869,unit:"*个"},{id:2,title:"教育机构数量",icon:"images/sp_icon_05.png",value:13869,unit:"*个"},{id:3,title:"养老机构数量",icon:"images/sp_icon_05.png",value:13869,unit:"*个"},{id:4,title:"机关事业单位",icon:"images/sp_icon_05.png",value:13869,unit:"*个"}],i=0;e(function(){e.ListenTabChnage.listen(function(e){5==e.id&&e.render("tplTabZZContentHtml",{dataList:t,index:i})})})}(jQuery),function(e){var t,i,n={id:1,tag:"突发事件",title:"21点 天通苑北二区",intro:"30栋住宅楼发生大面积停电",color:"#eb4e40"},a=[{id:2,tag:"接诉即办",title:"回龙观街道",intro:"供暖不足问题投诉量巨大",color:"#f1d236"},{id:3,tag:"未诉先办",title:"回龙观街道",intro:"供暖不足问题投诉量巨大",color:"#0AE47F"},{id:5,tag:"接诉即办",title:"回龙观街道",intro:"供暖不足问题投诉量巨大",color:"#f1d236"}],o=0,l=[{id:1,name:"未诉先办",value:50,color:"#0AE47F"},{id:2,name:"接诉即办",value:35,color:"#f1d236"},{id:3,name:"突发事件",value:15,color:"#eb4e40"}];function r(){e("#TFSJBox").html(template("tplTFListHtml",{firstInfo:n,dataList:e.getArrayByIndex(a,o,2),index:o}))}function u(){clearInterval(i),i=setInterval(function(){o=o+1>=a.length?0:o+1,r()},5e3)}function c(){(t=echarts.init(document.getElementById("TFSJChartBox"))).setOption({color:function(){var e=[];for(var t in l)e[t]=l[t].color;return e}(),tooltip:{trigger:"item",formatter:"{b} : {d}%"},series:[{name:"诉求分类",type:"pie",radius:["40%","70%"],center:["50%","53%"],data:function(){var e=[],t=0;for(var i in l)e[t]=l[i],e[t].itemStyle={color:l[i].color},t++;return e}(),minAngle:5,avoidLabelOverlap:!0,label:{color:"#FFFFFF",position:"outer",alignTo:"edge",margin:10,formatter:function(e){return e.value=e.value+"%","{b|"+e.name+"} {c|"+e.value+"}"},fontSize:e.rem2px(.14),rich:{b:{fontSize:e.rem2px(.14),color:"#FFFFFF"},c:{fontSize:e.rem2px(.22),fontFamily:' "Helvetica Neue", Helvetica, Arial, sans-serif',textShadowBlur:5,textShadowOffsetX:0,textShadowColor:"rgba(0, 0, 0, 0.9)"}}},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}e(function(){r(),u(),e("#TFSJBox").hover(function(){clearInterval(i)},function(){u()}).on("click",".list-item.active",function(){e.ListenTabChnage.trigger({id:110,name:"突发事件",triggerType:"click",isDefault:!1},function(){})}),e(window).resize(function(){t.resize()}),setTimeout(function(){c()},200)})}(jQuery),function(e){var t={programValue:117,workOver:62,score:7.5,prevScore:1.2};e(function(){e("#SNXDJHList").html(template("tplSNXDJHHtml",{dataInfo:t})),e(document).on("click","#SNJHBtnMore",function(){e.ListenTabChnage.trigger({id:101,name:"三年行动计划",triggerType:"click",isDefault:!1},function(){})})})}(jQuery),function(e){var t,i,n=[{id:1,name:"平均速度",list:[{id:1,name:"早高峰",list:[{id:1,name:"08.01",value:.7},{id:2,name:"08.02",value:.5},{id:3,name:"08.03",value:.8},{id:4,name:"08.04",value:.75},{id:5,name:"08.05",value:.72}]},{id:1,name:"晚高峰",list:[{id:1,name:"08.01",value:.52},{id:2,name:"08.02",value:.5},{id:3,name:"08.03",value:.78},{id:4,name:"08.04",value:.25},{id:5,name:"08.05",value:.55}]}]},{id:2,name:"平均拥堵",list:[{id:1,name:"早高峰",list:[{id:1,name:"08.01",value:.8},{id:2,name:"08.02",value:.7},{id:3,name:"08.03",value:.8},{id:4,name:"08.04",value:.85},{id:5,name:"08.05",value:.82}]},{id:1,name:"晚高峰",list:[{id:1,name:"08.01",value:.62},{id:2,name:"08.02",value:.6},{id:3,name:"08.03",value:.78},{id:4,name:"08.04",value:.35},{id:5,name:"08.05",value:.35}]}]}],a=0,o=["#d55b55","#f1ac4a"];function l(t,i){for(var n in t)(function(){for(var e in i)if(i[e]==t[n].name)return!0;return!1})()||(i[i.length]=t[n].name);return i}function r(){return{tooltip:{show:!0,backgroundColor:"transparent",trigger:"item",formatter:"{a}<br />{b}: {c}%",position:"top",padding:[1,10],textStyle:{fontSize:e.rem2px(.12)}},color:o,grid:{left:e.rem2px(.5),top:"26%",bottom:e.rem2px(.3),right:"5%"},legend:{right:0,top:0,itemWidth:e.rem2px(.08),textStyle:{color:"#FFFFFF",fontSize:e.rem2px(.12)},icon:"circle",data:function(){var e=[],t=n[a];for(var i in t.list)e[e.length]=t.list[i].name;return e}()},xAxis:{type:"category",boundaryGap:!1,data:function(){var e=n[a].list,t=[];for(var i in e)t=l(e[i].list,t);return t}(),splitLine:{show:!1,lineStyle:{color:["#0f1f55"],width:1,type:"solid"}},axisLabel:{show:!0,interval:0,textStyle:{color:"#fff",fontSize:e.rem2px(.14)}},axisLine:{lineStyle:{color:"#0d244f"}}},yAxis:{type:"value",axisLabel:{show:!0,interval:0,textStyle:{color:"#fff",fontSize:e.rem2px(.14)}},axisLine:{lineStyle:{color:"#0d244f"}},splitLine:{show:!0,lineStyle:{color:["#0f1f55"],width:1,type:"solid"}}},series:function(){var e=n[a].list,t=[];for(var i in e)t[t.length]={data:e[i].list,type:"line",name:e[i].name,areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:o[i]},{offset:.3,color:o[i]},{offset:1,color:"transparent"}],global:!1}}},itemStyle:{}};return t}()}}function u(){(t=echarts.init(document.getElementById("JTQKChartBox"))).setOption(r())}function c(){e("#JTQKNavList").html(template("tplJTQKNavHtml",{dataList:n,index:a}))}function m(){clearInterval(i),i=setInterval(function(){a=a+1>=n.length?0:a+1,c(),u()},5e3)}e(function(){c(),setTimeout(function(){u(),m(),e(document).on("click","#JTQKNavList li",function(){a=e(this).index(),c(),u()}),e("#JTQKTopNavBox").parent().hover(function(){clearInterval(i)},function(){m()}),e(window).resize(function(){t.resize()})},200)})}(jQuery),function(n){var e,t={xylValue:"30.33%",jjlValue:"80.53%",mylValue:"80.23%"},a=[{id:1,name:"未诉先办",list:[{id:101,name:"2016",value:159},{id:102,name:"2017",value:60},{id:103,name:"2018",value:166},{id:104,name:"2019",value:68},{id:105,name:"2020",value:172}]},{id:2,name:"接诉即办",list:[{id:201,name:"2016",value:69},{id:202,name:"2017",value:170},{id:203,name:"2018",value:76},{id:204,name:"2019",value:188},{id:205,name:"2020",value:82}]},{id:2,name:"吹哨报道",list:[{id:201,name:"2016",value:169},{id:202,name:"2017",value:70},{id:203,name:"2018",value:176},{id:204,name:"2019",value:88},{id:205,name:"2020",value:182}]}],o=0,l=5;function i(t,i){for(var n in t)(function(){for(var e in i)if(i[e]==t[n].name)return!0;return!1})()||(i[i.length]=t[n].name);return i}function r(){var e=function(){var e=[];for(var t in a)e=i(a[t].list,e);return e}();return e=n.getArrayByIndex(e,o,l),{color:["#70c6e1","#4c71ed","#ffb33e"],tooltip:{show:!0,backgroundColor:"transparent",trigger:"item",position:"top",textStyle:{fontSize:n.rem2px(.12)}},legend:{show:!0,right:0,top:0,icon:"circle",itemWidth:n.rem2px(.08),textStyle:{color:"#FFFFFF",fontSize:n.rem2px(.12)},data:function(){var e=[];for(var t in a)e[t]=a[t].name;return e}()},grid:{top:"20%",right:"2%",left:n.rem2px(.4)+"px",bottom:n.rem2px(.3)+"px",containLabel:!1},xAxis:{type:"category",data:e,axisLabel:{color:"#FFFFFF",fontSize:n.rem2px(.12)},axisLine:{lineStyle:{color:"#3b3d55"}}},yAxis:{type:"value",axisLabel:{color:"#FFFFFF",fontSize:n.rem2px(.12)},axisLine:{lineStyle:{color:"#3b3d55"}},splitLine:{lineStyle:{color:"#3b3d55"}}},series:function(){var e=[],t=0;for(var i in a)e[t]={type:"bar",name:a[i].name,barWidth:10},12!=a[i].list.length&&(a[i].list.length=12),e[t].data=n.getArrayByIndex(a[i].list,o,l),t++;return e}()}}n(function(){n("#JCZLNavInfo").html(template("tplJCZLListHtml",{dataInfo:t})),setTimeout(function(){(e=echarts.init(document.getElementById("JCZLChartBox"))).setOption(r())},200),n(window).resize(function(){e.resize()})})}(jQuery),function(n){var e,t,i=[{id:1,name1:"日健康状",name2:"态核验数",value:"9703"},{id:2,name1:"月群租房",name2:"发现数量",value:"386"}],a=[{id:1,name:"厨余垃圾分出率",list:[{id:101,name:"1月",value:59},{id:102,name:"2月",value:60},{id:103,name:"3月",value:66},{id:104,name:"4月",value:68},{id:105,name:"5月",value:72},{id:106,name:"6月",value:75},{id:107,name:"7月",value:78},{id:108,name:"8月",value:92},{id:109,name:"9月",value:93},{id:110,name:"10月",value:95},{id:111,name:"11月",value:98},{id:112,name:"12月",value:99}]},{id:2,name:"线上培训点击率",list:[{id:201,name:"1月",value:69},{id:202,name:"2月",value:70},{id:203,name:"3月",value:76},{id:204,name:"4月",value:88},{id:205,name:"5月",value:82},{id:206,name:"6月",value:85},{id:207,name:"7月",value:88},{id:208,name:"8月",value:82},{id:209,name:"9月",value:83},{id:210,name:"10月",value:85},{id:211,name:"11月",value:88},{id:212,name:"12月",value:88}]}],o=0,l=4;function r(t,i){for(var n in t)(function(){for(var e in i)if(i[e]==t[n].name)return!0;return!1})()||(i[i.length]=t[n].name);return i}function u(){var e=function(){var e=[];for(var t in a)e=r(a[t].list,e);return e}();return e=n.getArrayByIndex(e,o,l),{color:["#3cffcf","#08b6ff"],tooltip:{show:!0,backgroundColor:"transparent",trigger:"item",position:"top",textStyle:{fontSize:n.rem2px(.12)}},legend:{show:!0,right:0,top:0,icon:"circle",itemWidth:8,textStyle:{color:"#FFFFFF",fontSize:n.rem2px(.12)},data:function(){var e=[];for(var t in a)e[t]=a[t].name;return e}()},grid:{top:"20%",right:"2%",left:n.rem2px(.55)+"px",bottom:n.rem2px(.3)+"px",containLabel:!1},xAxis:{type:"category",data:e,axisLabel:{color:"#FFFFFF",fontSize:n.rem2px(.12)},axisLine:{lineStyle:{color:"#3b3d55"}}},yAxis:{type:"value",axisLabel:{formatter:"{value}%",color:"#FFFFFF",fontSize:n.rem2px(.12)},axisLine:{lineStyle:{color:"#3b3d55"}},splitLine:{lineStyle:{color:"#3b3d55"}}},series:function(){var e=[],t=0;for(var i in a)e[t]={type:"bar",name:a[i].name,barWidth:10},12!=a[i].list.length&&(a[i].list.length=12),e[t].data=n.getArrayByIndex(a[i].list,o,l),t++;return e}()}}function c(){clearInterval(t),t=setInterval(function(){o=12<=o+1?0:o+1,m()},3e3)}function m(){(e=echarts.init(document.getElementById("HT05RightChart"))).setOption(u())}n(function(){n("#HT05RightList").html(template("tplSQListHtml",{dataList:i})),setTimeout(function(){m(),c(),n("#HT05RightChart").hover(function(){clearInterval(t)},function(){c()}),n(window).resize(function(){e.resize()})},200)})}(jQuery),function(r){var u=[{name:"睡城 堵城 大城市病",value:1e4,color:"#ea4c3e"},{name:"潮汐紧密",value:6181,color:"#f48d46"},{name:"公共服务配套滞后",value:4386,color:"#ea4c3e"},{name:"交通拥堵",value:4055,color:"#f48d46"},{name:"土地资源稀缺",value:2467,color:"#f1d236"},{name:"“睡城 堵城 大城市病”",value:2244,color:"#ea4c3e"},{name:"潮汐紧密",value:1898,color:"#f48d46"},{name:"公共服务配套滞后",value:1484,color:"#ea4c3e"},{name:"交通拥堵",value:1484,color:"#f48d46"},{name:"土地资源稀缺",value:1484,color:"#f1d236"}],c=[{name:"回+双创社区",value:599,color:"#00a15c"},{name:"家门口就业",value:3213,color:"#00a15c"},{name:"社会治理柔性引导",value:2366,color:"#00a15c"},{name:"交通便利",value:3677,color:"#00a15c"},{name:"就医便利",value:1442,color:"#00a15c"},{name:"幸福感",value:1743,color:"#00a15c"},{name:"获得感",value:1898,color:"#00a15c"},{name:"回+双创社区",value:1484,color:"#00a15c"},{name:"家门口就业",value:2321,color:"#00a15c"},{name:"就医便利",value:12345,color:"#00a15c"},{name:"幸福感",value:1484,color:"#00a15c"}];r(function(){});r(function(){var e,t,i,n;e=r('<div class="child-box">'+template("tplCouldHtml",{dataList:u})+"</div>"),t=r('<div class="child-box">'+template("tplCouldHtml",{dataList:c})+"</div>"),i=r("#bottomLeftChartBox"),n=r("#bottomRightChartBox"),i.html('<style type="text/css">#bottomLeftChartBox, #bottomRightChartBox{ overflow: hidden; } #bottomLeftChartBox .child-box, #bottomRightChartBox .child-box{ height: 1.3rem; } #bottomLeftChartBox .child-box li, #bottomRightChartBox .child-box li{ font-size: .2rem; white-space: nowrap; } </style>'),i.append(e),n.append(t);var a=r("#bottomLeftChartBox"),o=2*a.width(),l=a.height();tagcloud({selector:"#bottomLeftChartBox .child-box",fontsize:r.rem2px(.2),radius:o,width:o,height:l,mspeed:"slow",ispeed:"slow",direction:135,keep:!1}),tagcloud({selector:"#bottomRightChartBox .child-box",fontsize:r.rem2px(.2),radius:o,width:o,height:l,mspeed:"slow",ispeed:"slow",direction:35,keep:!1})})}(jQuery);