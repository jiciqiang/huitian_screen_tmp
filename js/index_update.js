!function(e){var i=[{id:3,name:"当日市民反映量（个）",value:"426",icon:"images/ht_icon_03.png",unit:"",url:"jiesujiban.html",color:"#792B34"},{id:2,name:"实时人流（人）",value:"1209738",icon:"images/ht_icon_02.png",unit:"",url:"shishirenliu.html",color:"#356581"},{id:1,name:"交通延迟指数",value:"2.13",icon:"images/ht_icon_01.png",unit:"",url:"yunyingjiance.html",color:"#FFC644"}],a="#HTMiddleContent";var n=[{id:1,name:"全部",value:101},{id:2,name:"教育",value:102},{id:3,name:"交通",value:103},{id:4,name:"医疗",value:104},{id:5,name:"养老",value:105},{id:6,name:"公共设施",value:106}],l=0;function s(){var t=".mid-SNJH-nav-box ul.list li";e(document).off("click",t).on("click",t,function(){l=e(this).index(),e.ListenTabChnage.trigger({id:e(this).data("id"),name:"三年行动计划",triggerType:"click",isDefault:!1},function(){})})}function c(t){switch(t){case 1:e(a).html(template("tplMidTopListRK",{}));break;case 2:e(a).html(template("tplMidTopListDY",{}));break;case 3:e(a).html(template("tplMidTopListCY",{}));break;case 4:e(a).html(template("tplMidTopListSW",{}));break;case 5:e(a).html(template("tplMidTopListZZ",{}));break;case 101:l=0,e(a).html(template("tplMidTopListSNJH",{navList:n,navIndex:l})),s();break;case 102:e(a).html(template("tplMidTopListJY",{navList:n,navIndex:l})),s();break;case 103:e(a).html(template("tplMidTopListJT",{navList:n,navIndex:l})),s();break;case 104:e(a).html(template("tplMidTopListYL",{navList:n,navIndex:l})),s();break;case 105:e(a).html(template("tplMidTopListYL2",{navList:n,navIndex:l})),s();break;case 106:e(a).html(template("tplMidTopListGGSS",{navList:n,navIndex:l})),s();break;case 110:e(a).html(template("tplTFSJHtml",{}))}}e(function(){e.ListenTabChnage.listen(function(t){t.isDefault?(e(a).html(template("tplMidTopListDefault",{dataList:i})),e(a).find(".counter").countUp()):"click"==t.triggerType&&c(t.id)})})}(jQuery),function(t){t(function(){})}(jQuery),function(t){t(function(){})}(jQuery);