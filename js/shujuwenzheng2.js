function loadingAllAnalysisChart(){setTimeout(function(){$("#midTopBox").find("[role=progress]").each(function(){$(this).progressDLCreate()})},500)}!function(a){var e,l=[{id:1,name:"霍营街道",value:"92.82",color:"#dd4d3b",child:[{id:1,name:"养老机构数",value:"6",color:"#51ce40"},{id:2,name:"养老床位数",value:"100",color:"#51ce40"},{id:3,name:"每千人养老床位数",value:"29",color:"#51ce40"},{id:4,name:"医疗机构数",value:"5",color:"#eb5246"},{id:5,name:"医疗床位",value:"0",color:"#eb5246"},{id:6,name:"万人床位数",value:"23",color:"#eb5246"},{id:7,name:"万人医师数",value:"0",color:"#eb5246"},{id:8,name:"万人卫生社区服务中心",value:"0.09",color:"#eb5246"}]},{id:2,name:"天通苑北街道",value:"92.74",color:"#42ca23",child:[{id:1,name:"幼儿园数",value:"9",color:"#51ce40"},{id:2,name:"幼儿园普惠率",value:"100%",color:"#51ce40"},{id:3,name:"医疗机构数",value:"3",color:"#eb5246"},{id:4,name:"医师数",value:"8",color:"#eb5246"},{id:5,name:"每万人医疗床位数",value:"1",color:"#eb5246"},{id:6,name:"每万人医师数",value:"1",color:"#eb5246"},{id:7,name:"养老床位数",value:"0",color:"#eb5246"}]},{id:3,name:"龙泽园街道",value:"92.53",color:"#42ca23",child:[{id:1,name:"幼儿园数",value:"15",color:"#51ce40"},{id:2,name:"幼儿园普惠率",value:"88.90%",color:"#51ce40"},{id:3,name:"中小学数",value:"4",color:"#51ce40"},{id:4,name:"养老床位数",value:"0",color:"#eb5246"},{id:5,name:"医疗床位数",value:"432",color:"#FFCC99"},{id:6,name:"每万人医疗床位数",value:"23",color:"#FFCC99"},{id:7,name:"医师数",value:"277",color:"#FFCC99"},{id:8,name:"每万人医师数",value:"15",color:"#FFCC99"}]},{id:4,name:"天通苑南街道",value:"92.38",color:"#dd4d3b",child:[{id:1,name:"幼儿园数",value:"10",color:"#51ce40"},{id:2,name:"幼儿园普惠率",value:"98.54%",color:"#51ce40"},{id:3,name:"养老机构数",value:"10",color:"#51ce40"},{id:4,name:"养老床位数",value:"151",color:"#51ce40"},{id:5,name:"每千人床位数",value:"33",color:"#51ce40"},{id:6,name:"医疗机构数",value:"5",color:"#eb5246"},{id:7,name:"医疗床位",value:"50",color:"#eb5246"},{id:8,name:"医师数",value:"30",color:"#eb5246"},{id:9,name:"每万人医疗床位数",value:"4",color:"#eb5246"},{id:10,name:"每万人医师数",value:"2",color:"#eb5246"}]},{id:5,name:"史各庄街道",value:"91.99",color:"#dcdb41",child:[{id:1,name:"养老机构数",value:"2",color:"#51ce40"},{id:2,name:"养老床位数",value:"1700",color:"#51ce40"},{id:3,name:"医疗机构数",value:"25",color:"#51ce40"},{id:4,name:"每万人医疗床位数",value:"175",color:"#51ce40"},{id:5,name:"每万人医师数",value:"76",color:"#51ce40"},{id:6,name:"幼儿园数",value:"3",color:"#eb5246"},{id:7,name:"幼儿园普惠率",value:"83.23%",color:"#eb5246"},{id:8,name:"中小学数",value:"2",color:"#eb5246"}]},{id:6,name:"东小口地区",value:"91.94",color:"#dcdb41",child:[{id:1,name:"医疗机构数",value:"85",color:"#51ce40"},{id:2,name:"每万人医疗床位数",value:"405",color:"#51ce40"},{id:3,name:"每万人医师数",value:"170",color:"#51ce40"},{id:4,name:"幼儿园数",value:"5",color:"#51ce40"},{id:5,name:"幼儿园普惠率",value:"95.46%",color:"#51ce40"}]},{id:7,name:"回龙观街道",value:"91.86",color:"#42ca23",child:[{id:1,name:"幼儿园数",value:"9",color:"#51ce40"},{id:2,name:"幼儿园普惠率",value:"100%",color:"#51ce40a"},{id:3,name:"养老机构数",value:"4",color:"#51ce40"},{id:4,name:"养老床位数",value:"271",color:"#51ce40"},{id:5,name:"PM2.5平均浓度",value:"较高",color:"#eb5246"}]}],i=0,n='<li class="tit-li"><p class="tit">排名</p> <p class="name">街镇</p> <p class="value">得分</p> </li>';function t(){a("#topLeftNavList").html(n+template("tplRightContent",{dataList:a.getArrayByIndex(l,i,7),index:i}))}function o(){var e=l[i];a("#rightTitle").text(e.name+"指标情况"),a("#topRightNavList").html(template("tplRightContent2",{dataList:a.getArrayByIndex(e.child,0,10),index:0}))}function m(){e=setInterval(function(){i=i+1>=l.length?0:i+1,a.ListenMapDataChange.trigger({index:i,data:l[i]}),t(),o()},5e3)}a(function(){t(),o(),m(),a(document).on("click","#topLeftNavList li",function(){0!=a(this).index()&&(i=a(this).index()-1,a.ListenMapDataChange.trigger({index:i,data:l[i]}),t(),o())}),a.ListenMapChange.listen(function(e){for(var a in l)if(e.name==l[a].name){i=a,t(),o();break}}),a("#topLeftContent, #topMiddleContent").hover(function(){clearInterval(e)},function(){m()})})}(jQuery),function(e){e(function(){})}(jQuery),function(e){var a=[{id:1,name:"医疗养老",targetId:"analysisTabListItem01",list:[{id:1,name:"医院医师数",value:3052,color:"#eb5246",unit:"个"},{id:2,name:"社区卫生服务中心",value:33,color:"#eb5246",unit:"个"},{id:3,name:"养老床位数",value:2309,color:"#eb5246",unit:"个"}]},{id:2,name:"教育培训",targetId:"analysisTabListItem02",list:[{id:1,name:"普惠性幼儿园数量",value:48,color:"#52d043",unit:"个"},{id:2,name:"小学数量",value:24,color:"#52d043",unit:"个"},{id:3,name:"中学数量",value:11,color:"#52d043",unit:"个"}]},{id:3,name:"劳动就业",targetId:"analysisTabListItem03",list:[{id:1,name:"城镇登记失业人员就业率",value:"56.08%",color:"#f1d236",unit:""},{id:2,name:"居民收入水平增速",value:"4%",color:"#52d043",unit:""}]},{id:4,name:"社会服务",targetId:"analysisTabListItem04",list:[{id:1,name:"12345诉求量",value:105471,color:"#52d043",unit:"个"},{id:2,name:"市民服务热线舆情解决率",value:"70%",color:"#52d043",unit:""},{id:3,name:"线下一站式政务服务事项解决率",value:"88.54%",color:"#52d043",unit:""}]},{id:5,name:"基础设施",targetId:"analysisTabListItem05",list:[{id:1,name:"人均文化设施面积（㎡）",value:.48,color:"#52d043",unit:"㎡"},{id:2,name:"便民商业社区覆盖率",value:"99.60%",color:"#52d043",unit:""},{id:3,name:"公园绿地500米半径覆盖率",value:"95.50%",color:"#52d043",unit:""}]}];e(function(){e("#SJWZBottomListContent").html(template("tplBottomListBox",{dataList:a}))})}(jQuery),function(l){var e=[{analysisId:"analysisTabListItem01",analysisTitle:"医疗养老",analysisDataList:[{nowTitle:"现状",nowData:[{name:"医院医师数",value:3052,maxValue:7104,type:"image",image:"images/index_progress_icon_01.png"},{name:"回天地区实有人口",value:919428,maxValue:1e6,type:"image",image:"images/index_progress_icon_02.png"},{name:"每万人医师数",value:33,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市每万人医师数",value:54,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"低于全市",value:"11"}}},{nowTitle:"现状",nowData:[{name:"养老床位数",value:2309,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"老年人口数",value:36588,maxValue:162936,type:"image",image:"images/index_progress_icon_04.png"},{name:"每千人床位数",value:63,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市每千人床位数",value:0,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"0"}}}]},{analysisId:"analysisTabListItem02",analysisTitle:"教育培训",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:48,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市普惠率",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"幼儿园学位（个）",value:16377,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"适龄幼儿（个）",value:10927,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"幼儿园学位匹配率",value:150,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市匹配率",value:0,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"0"}}}]},{analysisId:"analysisTabListItem03",analysisTitle:"劳动就业",analysisDataList:[{nowTitle:"现状",nowData:[{name:"0",value:0,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"0",value:0,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"0",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区",average:{name:"全市",value:0,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"0"}}},{nowTitle:"现状",nowData:[{name:"0",value:0,maxValue:0,type:"image",image:"images/index_progress_icon_03.png"},{name:"0",value:0,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"0",value:0,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区",average:{name:"0",value:0,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"0"}}}]},{analysisId:"analysisTabListItem04",analysisTitle:"社会服务",analysisDataList:[{nowTitle:"现状",nowData:[{name:"12345诉求量",value:105471,maxValue:105471,type:"image",image:"images/index_progress_icon_01.png"},{name:"回天实有人口",value:919428,maxValue:919428,type:"image",image:"images/index_progress_icon_02.png"},{name:"千人诉求量",value:115,maxValue:115,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已",average:{name:"全市千人诉求量",value:0,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"0"}}},{nowTitle:"现状",nowData:[{name:"0",value:0,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"0",value:0,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"0",value:0,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区",average:{name:"全市",value:0,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"0"}}}]},{analysisId:"analysisTabListItem05",analysisTitle:"基础设施",analysisDataList:[{nowTitle:"现状",nowData:[{name:"0",value:0,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"0",value:0,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"0",value:0,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区",average:{name:"全市",value:0,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"0"}}},{nowTitle:"现状",nowData:[{name:"0",value:0,maxValue:0,type:"image",image:"images/index_progress_icon_03.png"},{name:"0",value:0,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"0",value:0,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区",average:{name:"全市",value:0,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"0"}}}]}];l(function(){l("#midTopBox").html(template("tplMidTopListThree",{analysisTabList:e})),l(document).on("click",".AnalysisShowButton",function(){var e=l(this).data("id"),a=l(e);void 0!==a.get(0)&&(l(".SNJHTopAnalysisAllBox").css({visibility:"hidden"}),a.css({visibility:"visible"}))}),l(document).on("click",".SNJHTopAnalysisAllBtnClose",function(){var e=l(this).data("id"),a=l(e);void 0!==a.get(0)&&a.css({visibility:"hidden"})}),loadingAllAnalysisChart()})}(jQuery);