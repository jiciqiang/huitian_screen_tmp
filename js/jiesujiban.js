!function(e){var a=[{id:1,name:"咨询",value:"595867",color:"#8ed7ff"},{id:2,name:"诉求",value:"530116",color:"#71dff9"},{id:3,name:"表扬",value:"3331",color:"#43ca26"},{id:4,name:"投诉",value:"5319",color:"#eb4e40"},{id:5,name:"建议",value:"7818",color:"#71dff9"}];e(function(){var t;(t=e("#SMFYList")).html(template("tplLDListBoxHtml",{dataList:a})),t.find(".counter").countUp({delay:10,time:2e3}),e("#SMFYZLBox").find(".counter").countUp()})}(jQuery),function(t){var i=[{id:1,name:"回龙观街道",value:"261",value2:"19",color:"#eb4e40",isUp:!0},{id:2,name:"龙泽园街道",value:"200",value2:"19",color:"#f28434",isUp:!0},{id:3,name:"东小口镇",value:"190",value2:"19",color:"#f18e46",isUp:!0},{id:4,name:"霍营街道",value:"180",value2:"19",color:"#f1ab46",isUp:!1},{id:5,name:"史各庄街道",value:"180",value2:"19",color:"#f1d236",isUp:!0},{id:5,name:"天通苑北街",value:"180",value2:"19",color:"#f1d236",isUp:!1},{id:5,name:"天通苑南街",value:"180",value2:"19",color:"#f1d236",isUp:!0}],o=-1,e=0;function n(){t("#topSortList").html(template("tplRightContent",{dataList:t.getArrayByIndex(i,e,7),index:o}))}t(function(){n(),t(document).on("click","#topLeftNavList li",function(){0!=t(this).index()&&(o=t(this).index()-1,t(document).trigger("mapDataChange",[{index:o,data:i[o]}]),n())}),t(document).on("mapChange",function(t,e){for(var a in i)if(e.name==i[a].name){o=a,n();break}})})}(jQuery),function(t){var e={number:30,isUp:!0},a=[{id:1,name:"回龙观街道",date:"11月-12月",tag:"历史数据",intro:"11月-12月 回龙观街道 供暖不足问题投诉量巨大",adv:"协调供暖公司提前做好排查",status:"12月30日，回龙观街道供暖问题投诉会加大"},{id:2,name:"回龙观街道",date:"11月-12月",tag:"历史数据",intro:"11月-12月 回龙观街道 供暖不足问题投诉量巨大",adv:"协调供暖公司提前做好排查",status:"12月30日，回龙观街道供暖问题投诉会加大"},{id:3,name:"回龙观街道",date:"11月-12月",tag:"历史数据",intro:"11月-12月 回龙观街道 供暖不足问题投诉量巨大",adv:"协调供暖公司提前做好排查",status:"12月30日，回龙观街道供暖问题投诉会加大"},{id:4,name:"回龙观街道",date:"11月-12月",tag:"历史数据",intro:"11月-12月 回龙观街道 供暖不足问题投诉量巨大",adv:"协调供暖公司提前做好排查",status:"12月30日，回龙观街道供暖问题投诉会加大"},{id:5,name:"回龙观街道",date:"11月-12月",tag:"历史数据",intro:"11月-12月 回龙观街道 供暖不足问题投诉量巨大",adv:"协调供暖公司提前做好排查",status:"12月30日，回龙观街道供暖问题投诉会加大"},{id:6,name:"回龙观街道",date:"11月-12月",tag:"历史数据",intro:"11月-12月 回龙观街道 供暖不足问题投诉量巨大",adv:"协调供暖公司提前做好排查",status:"12月30日，回龙观街道供暖问题投诉会加大"},{id:7,name:"回龙观街道",date:"11月-12月",tag:"历史数据",intro:"11月-12月 回龙观街道 供暖不足问题投诉量巨大",adv:"协调供暖公司提前做好排查",status:"12月30日，回龙观街道供暖问题投诉会加大"}],i=0;function o(){t("#ycListBox").html(template("tplYCListHtml",{dataInfo:e,dataList:t.getArrayByIndex(a,i,5)}))}t(function(){o()})}(jQuery),function(e){var t,a={FYLValue:428,ZHDFValue:9.6,XYLValue:"30",JJLValue:"80",MYLValue:"80"},i=[{id:1,title:"天通苑北二区 30栋住宅楼发生大面积停电",time:"21"},{id:2,title:"天通苑北二区 30栋住宅楼发生大面积停电",time:"21"},{id:3,title:"天通苑北二区 30栋住宅楼发生大面积停电",time:"21"},{id:4,title:"天通苑北二区 30栋住宅楼发生大面积停电",time:"21"},{id:5,title:"天通苑北二区 30栋住宅楼发生大面积停电天通苑北二区 30栋住宅楼发生大面积停电",time:"21"}],o=0;function n(){var t=e("#midTopListBox");t.html(template("tplMidTopList",{dataInfo:a,dataList:e.getArrayByIndex(i,o,3)})),t.find(".counter").countUp({delay:10,time:2e3})}function l(){t=setInterval(function(){o=o+1>=i.length?0:o+1,n()},5e3)}e(function(){n(),e("#midBottomListBox").html(template("tplMidBottomList",{dataInfo:a})),l(),e("#midTopListBox").hover(function(){clearInterval(t)},function(){l()})})}(jQuery),function(t){var i=[{id:1,name:"诉求信息",value:"50",color:"#3aa9ff"},{id:2,name:"诉求信息",value:"30",color:"#50FCA1"},{id:3,name:"诉求信息",value:"10",color:"#ffa93a"},{id:4,name:"诉求信息",value:"10",color:"#ffef95"}];function e(){var t=document.getElementById("pieChartBox");echarts.init(t).setOption({color:function(){var t=[];for(var e in i)t[e]=i[e].color;return t}(),tooltip:{trigger:"item",formatter:"{b} : {d}%"},series:[{name:"诉求分类",type:"pie",radius:"60%",center:["50%","50%"],data:function(){var t=[],e=0;for(var a in i)t[e]=i[a],t[e].itemStyle={color:i[a].color},e++;return t}(),minAngle:5,avoidLabelOverlap:!0,label:{color:"#FFFFFF",position:"outer",alignTo:"edge",margin:10,formatter:function(t){return t.value=t.value+"%","{b|"+t.name+"} {c|"+t.value+"}"},fontSize:14,rich:{b:{fontSize:14,color:"#FFFFFF"},c:{fontSize:21,textShadowBlur:5,textShadowOffsetX:0,textShadowColor:"rgba(0, 0, 0, 0.9)"}}},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}t(function(){setTimeout(function(){e()},200)})}(jQuery);