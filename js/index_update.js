function loadingAllAnalysisChart(){setTimeout(function(){$("#HTMiddleContent").find("[role=progress]").each(function(){$(this).progressDLCreate()})},200)}!function(a){var t=[{id:3,name:"当日市民反映量（个）",value:"426",icon:"images/ht_icon_03.png",unit:"",url:"jiesujiban.html",color:"#792B34"},{id:2,name:"实时人流（人）",value:"1209738",icon:"images/ht_icon_02.png",unit:"",url:"shishirenliu.html",color:"#356581"},{id:1,name:"交通延迟指数",value:"2.13",icon:"images/ht_icon_01.png",unit:"",url:"yunyingjiance.html",color:"#FFC644"}],i="#HTMiddleContent";var l=[{id:1,name:"全部",value:101},{id:2,name:"教育",value:102},{id:3,name:"交通",value:103},{id:4,name:"医疗",value:104},{id:5,name:"养老",value:105},{id:6,name:"公共设施",value:106}],n=0;function s(){var e=".mid-SNJH-nav-box ul.list li";a(document).off("click",e).on("click",e,function(){n=a(this).index(),a.ListenTabChnage.trigger({id:a(this).data("id"),name:"三年行动计划",triggerType:"click",isDefault:!1},function(){})})}function r(e){switch(e){case 1:a(i).html(template("tplMidTopListThree",{box_title:"人口",row_01_title:"老年人口数",row_02_title:"幼儿人口数",row_03_title:"IT类人员增长数",analysisTabList:[{analysisId:"analysisTabListItem01",analysisTitle:"老年人口数",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"幼儿园学位（个）",value:16377,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"适龄幼儿（个）",value:50,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"幼儿园学位匹配率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem02",analysisTitle:"幼儿人口数",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"幼儿园学位（个）",value:16377,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"适龄幼儿（个）",value:50,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"幼儿园学位匹配率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem03",analysisTitle:"IT类人员增长数",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"幼儿园学位（个）",value:16377,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"适龄幼儿（个）",value:50,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"幼儿园学位匹配率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]}]})),loadingAllAnalysisChart();break;case 2:a(i).html(template("tplMidTopListThree",{box_title:"地域",row_01_title:"绿化用地面积增长趋势",row_02_title:"文体用地面积增长趋势",row_03_title:"道路数量增长趋势",analysisTabList:[{analysisId:"analysisTabListItem01",analysisTitle:"绿化用地面积增长趋势",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"幼儿园学位（个）",value:16377,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"适龄幼儿（个）",value:50,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"幼儿园学位匹配率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem02",analysisTitle:"文体用地面积增长趋势",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"幼儿园学位（个）",value:16377,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"适龄幼儿（个）",value:50,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"幼儿园学位匹配率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem03",analysisTitle:"道路数量增长趋势",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"幼儿园学位（个）",value:16377,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"适龄幼儿（个）",value:50,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"幼儿园学位匹配率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]}]})),loadingAllAnalysisChart();break;case 3:a(i).html(template("tplMidTopListThree",{box_title:"产业",row_01_title:"回天地区企业增长",row_02_title:"回天地区IT类企业增长趋势",row_03_title:"回天地区夜间经济交易额趋势",analysisTabList:[{analysisId:"analysisTabListItem01",analysisTitle:"回天地区企业增长",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem02",analysisTitle:"回天地区IT类企业增长趋势",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem03",analysisTitle:"回天地区夜间经济交易额趋势",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]}]})),loadingAllAnalysisChart();break;case 4:a(i).html(template("tplMidTopListThree",{box_title:"事务",row_01_title:"刑事案件数",row_02_title:"法律援助增长趋势",row_03_title:"党建活动数量趋势",analysisTabList:[{analysisId:"analysisTabListItem01",analysisTitle:"刑事案件数",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem02",analysisTitle:"法律援助增长趋势",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem03",analysisTitle:"党建活动数量趋势",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]}]})),loadingAllAnalysisChart();break;case 5:a(i).html(template("tplMidTopListThree",{box_title:"组织",row_01_title:"幼儿学位数",row_02_title:"医院床位数",row_03_title:"养老床位数",analysisTabList:[{analysisId:"analysisTabListItem01",analysisTitle:"幼儿学位数",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem02",analysisTitle:"医院床位数",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]},{analysisId:"analysisTabListItem03",analysisTitle:"养老床位数",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]}]})),loadingAllAnalysisChart();break;case 101:n=0,a(i).html(template("tplMidTopListSNJH",{navList:l,navIndex:n,row_data_title:"三年行动计划实施成效",dataList:[{title:"普惠性幼儿园覆盖率",name:"学位",number:"+14700",unit:"个",percent:"+22.8%"},{title:"公园绿地500米服务半径覆盖率",name:"公园",number:"+16",unit:"个",percent:"+99.5%"},{title:"家庭医生重点人签约服务覆盖率",name:"家庭医生团队",number:"+120",unit:"支",percent:"+94.1%"},{title:"义务教育发展水平",name:"学位",number:"+7700",unit:"个",percent:"+99.0%"},{title:"便民商业服务覆盖率",name:"便民网点",number:"+132",unit:"个",percent:"+99.6%"},{title:"养老机构床位使用率",name:"养老床位",number:"+648",unit:"张",percent:"+99.6%"}]})),s();break;case 102:a(i).html(template("tplMidTopListSNXDJH",{navList:l,navIndex:n,row_data_title:"三年行动计划实施成效（教育）",dataList:[{title:"完工教育项目（项）",value:17},{title:"学位增加（个）",value:5660},{title:"整体设施便利度提升",value:"14%"},{title:"民办园（点）转为普惠制（所）",value:54},{title:"普惠制学位增加（个）",value:14760},{title:"优质学位（个）",value:2040}],analysisTitle:"教育资源匹配分析",analysisDataList:[{nowTitle:"现状",nowData:[{name:"普惠幼儿园（所）",value:47,maxValue:100,type:"image",image:"images/index_progress_icon_01.png"},{name:"幼儿园总数（所）",value:58,maxValue:100,type:"image",image:"images/index_progress_icon_02.png"},{name:"幼儿园普惠率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"幼儿园学位（个）",value:16377,maxValue:2e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"适龄幼儿（个）",value:50,maxValue:100,type:"image",image:"images/index_progress_icon_04.png"},{name:"幼儿园学位匹配率",value:89.8,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"新增优质学位数",value:2040,maxValue:2500,type:"image",image:"images/index_progress_icon_01.png"},{name:"中小学学位数",value:28462,maxValue:3e4,type:"image",image:"images/index_progress_icon_02.png"},{name:"新增优质学位占比",value:7.17,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}},{nowTitle:"现状",nowData:[{name:"就近入学学生数",value:2040,maxValue:2500,type:"image",image:"images/index_progress_icon_03.png"},{name:"入学学生数",value:27415,maxValue:3e4,type:"image",image:"images/index_progress_icon_04.png"},{name:"就近入学率",value:99,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]})),loadingAllAnalysisChart(),s();break;case 103:a(i).html(template("tplMidTopListSNXDJH",{navList:l,navIndex:n,row_data_title:"三年行动计划实施成效（交通）",dataList:[{title:"建成投用市政道路项目",value:9},{title:"道路里程增加（公里）",value:25.2},{title:"上班一族通勤时间缩短（分钟）",value:30},{title:"随公园建设增加绿道（公里）",value:10},{title:"优化调整公交线路（条）",value:20},{title:"公交线路覆盖率",value:"97.5%"}],analysisTitle:"交通资源匹配分析",analysisDataList:[{nowTitle:"现状",nowData:[{name:"人口数量",value:6413,maxValue:7e3,type:"image",image:"images/index_progress_icon_01.png"},{name:"停车位数量",value:27415,maxValue:3e4,type:"image",image:"images/index_progress_icon_02.png"},{name:"人均停车位数量",value:99,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市平均值",value:"2.76%"}}}]})),loadingAllAnalysisChart(),s();break;case 104:a(i).html(template("tplMidTopListSNXDJH",{navList:l,navIndex:n,row_data_title:"三年行动计划实施成效（医疗）",dataList:[{title:"中西医结合医院住院楼增加病床（张）",value:200},{title:"投用镇街级社区卫生服务中心（处）",value:2},{title:"建成投用社区村卫生室（处）",value:15},{title:"医疗设施便利度提升",value:"11.9%"},{title:"家庭医生团队（支）",value:"120余支"},{title:"重点人群签约率",value:"94%"}],analysisTitle:"医疗资源匹配分析",analysisDataList:[{nowTitle:"现状",nowData:[{name:"人口数量",value:919428,maxValue:95e4,type:"image",image:"images/index_progress_icon_01.png"},{name:"医疗机构床位数",value:7104,maxValue:8e3,type:"image",image:"images/index_progress_icon_02.png"},{name:"每万人口床位数",value:77,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"18"}}},{nowTitle:"现状",nowData:[{name:"人口数量",value:919428,maxValue:95e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"医师数",value:7104,maxValue:8e3,type:"image",image:"images/index_progress_icon_04.png"},{name:"每万人医师数",value:33,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区未达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"低于全市",value:"21"}}}]})),loadingAllAnalysisChart(),s();break;case 105:a(i).html(template("tplMidTopListSNXDJH",{navList:l,navIndex:n,row_data_title:"三年行动计划实施成效（养老）",dataList:[{title:"投用养老设施(处)",value:8},{title:"机构养老设施增加(处)",value:5},{title:"社区养老驿站增加(处)",value:22},{title:"养老床位增加(张)",value:648},{title:"三级养老服务体系辐射社区（个）",value:72},{title:"养老便利度提升",value:"26.3%"}],analysisTitle:"养老资源匹配分析",analysisDataList:[{nowTitle:"现状",nowData:[{name:"人口数量",value:919428,maxValue:95e4,type:"image",image:"images/index_progress_icon_01.png"},{name:"养老机构床位数",value:2309,maxValue:3e3,type:"image",image:"images/index_progress_icon_02.png"},{name:"每千人床位数",value:77,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"18"}}},{nowTitle:"现状",nowData:[{name:"老年人数",value:919428,maxValue:95e4,type:"image",image:"images/index_progress_icon_03.png"},{name:"补贴金额",value:2309,maxValue:3e3,type:"image",image:"images/index_progress_icon_04.png"},{name:"人均补贴金额",value:77,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"18"}}}]})),loadingAllAnalysisChart(),s();break;case 106:a(i).html(template("tplMidTopListSNXDJH",{navList:l,navIndex:n,row_data_title:"三年行动计划实施成效（公共设施）",dataList:[{title:"完成自备井改造的小区（个）",value:28},{title:"喝上市政水居民数（万）",value:12},{title:"改造供水管网的老旧小区（个）",value:23},{title:"TBD再生水厂日处理能力（Wm³）",value:10},{title:"完成配网设施改造、增容项目（个）",value:2},{title:"电网接入负荷能力增强",value:"25%"}],analysisTitle:"公共设施资源匹配分析",analysisDataList:[{nowTitle:"现状",nowData:[{name:"人口数量",value:919428,maxValue:95e4,type:"image",image:"images/index_progress_icon_01.png"},{name:"文化设施数量",value:2309,maxValue:3e3,type:"image",image:"images/index_progress_icon_02.png"},{name:"每百万人设施数",value:77,maxValue:100,type:"bar",color:"#36d0fd"}],resultTitle:"结论",resultData:{title:"回天地区已达标",average:{name:"全市平均值",value:87.04,maxValue:100,type:"bar",color:"#8aec2a"},standard:{name:"高于全市",value:"18"}}}]})),loadingAllAnalysisChart(),s();break;case 110:a(i).html(template("tplTFSJHtml",{}))}}a(function(){a.ListenTabChnage.listen(function(e){e.isDefault?(a(i).html(template("tplMidTopListDefault",{dataList:t})),a(i).find(".counter").countUp({delay:10,time:300})):"click"==e.triggerType&&r(e.id)})})}(jQuery),function(a){var t=[{name:"2016年老年人口",year:"2016",value:30,color:"#ffbf36"},{name:"2020老年人口",year:"2020",value:40,color:"#b556ff"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||1!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow1Box").progressChartCreate({percentStr:"+45%",bottomTitle:"老年人口增长率",unitStr:"*万个",dataList:t})},200)})})}(jQuery),function(a){var t=[{name:"2016幼儿人口",year:"2016",value:86,color:"#ffbf36"},{name:"2020幼儿人口",year:"2020",value:108,color:"#79ffdb"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||1!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow2Box").progressChartCreate({percentStr:"+26%",bottomTitle:"幼儿人口增长率",unitStr:"*万个",dataList:t})},200)})})}(jQuery),function(a){var t={firstTitle:"2016IT类人员数",firstValue:204,firstColor:"#ffd822",firstUnit:"万人",secondTitle:"2020IT类人员数",secondValue:276,secondColor:"#81e3ff",secondUnit:"万人",percentTitle:"IT类人员增长率",percent:"+39%"};a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||1!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow3Box").circleChartCreate(t)},200)})})}(jQuery),function(a){var t=[{name:"2016绿化用地",year:"2016",value:45,color:"#ffbf36"},{name:"2020绿化用地",year:"2020",value:68,color:"#62c6ff"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||2!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow1Box").progressChartCreate({percentStr:"+45%",bottomTitle:"绿化用地增长率",unitStr:"*ha",dataList:t})},200)})})}(jQuery),function(a){var t={firstTitle:"2016文体用地",firstValue:76,firstColor:"#ffd822",firstUnit:"*ha",secondTitle:"2020文体用地",secondValue:156,secondColor:"#b0b6ff",secondUnit:"*ha",percentTitle:"文体用地面积增长率",percent:"+48%"};a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||2!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow2Box").circleChartCreate(t)},200)})})}(jQuery),function(a){var t=[{name:"2016道路数",year:"2016",value:30,color:"#ffbf36"},{name:"2020道路数",year:"2020",value:40,color:"#00f04d"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||2!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow3Box").progressChartCreate({percentStr:"+27%",bottomTitle:"道路数量增长率",unitStr:"*条",dataList:t})},200)})})}(jQuery),function(a){var t=[{name:"2016企业数",year:"2016",value:80,color:"#ffbf36"},{name:"2020企业数",year:"2020",value:100,color:"#62c6ff"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||3!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow1Box").progressChartCreate({percentStr:"+25%",bottomTitle:"回天地区企业增长率",unitStr:"*万个",dataList:t})},200)})})}(jQuery),function(a){var t={firstTitle:"2016IT类企业数",firstValue:80,firstColor:"#ffd822",firstUnit:"万个",secondTitle:"2020IT类企业数",secondValue:100,secondColor:"#ffd822",secondUnit:"万个",percentTitle:"企业增长率",percent:"+25%"};a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||3!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow2Box").circleChartCreate(t)},200)})})}(jQuery),function(a){var t=[{name:"2016夜间交易额",year:"2016",value:30,color:"#ffbf36"},{name:"2020夜间交易额",year:"2020",value:40,color:"#ff7521"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||3!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow3Box").progressChartCreate({percentStr:"+25%",bottomTitle:"回天地区夜经济增长率",unitStr:"*亿元",dataList:t})},200)})})}(jQuery),function(a){var t=[{name:"2016案件数",year:"2016",value:800,color:"#ffbf36"},{name:"2020案件数",year:"2020",value:200,color:"#ff7651"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||4!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow1Box").progressChartCreate({percentStr:"-75%",bottomTitle:"形式案件降低率",unitStr:"*件",dataList:t})},200)})})}(jQuery),function(a){var t={firstTitle:"2016法律援助数",firstValue:76,firstColor:"#ffd822",firstUnit:"万个",secondTitle:"2020法律援助数",secondValue:106,secondColor:"#00f04d",secondUnit:"万个",percentTitle:"法律援助增长率",percent:"+28%"};a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||4!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow2Box").circleChartCreate(t)},200)})})}(jQuery),function(a){var t={firstTitle:"2016党建活动数",firstValue:386,firstColor:"#ffd822",firstUnit:"次",secondTitle:"2020党建活动数",secondValue:606,secondColor:"#81e3ff",secondUnit:"次",percentTitle:"党建活动增长率",percent:"+39%"};a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||4!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow3Box").circleChartCreate(t)},200)})})}(jQuery),function(a){var t=[{name:"2016学位数",year:"2016",value:16,color:"#ffbf36"},{name:"2020学位数",year:"2020",value:40,color:"#b3f336"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||5!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow1Box").progressChartCreate({percentStr:"+125%",bottomTitle:"幼儿学位提升率",unitStr:"*万个",dataList:t})},200)})})}(jQuery),function(a){var t=[{name:"2016医院床位",year:"2016",value:116,color:"#ffbf36"},{name:"2020医院床位",year:"2020",value:229,color:"#d2fffb"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||5!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow2Box").progressChartCreate({percentStr:"+46%",bottomTitle:"医院床位增长率",unitStr:"*个",dataList:t})},200)})})}(jQuery),function(a){var t=[{name:"2016养老床位",year:"2016",value:86,color:"#ffbf36"},{name:"2020养老床位",year:"2020",value:126,color:"#ffbf36"}];a(function(){a.ListenTabChnage.listen(function(e){e.isDefault||5!=e.id||"click"!=e.triggerType||setTimeout(function(){a("#MidMapChartRow3Box").progressChartCreate({percentStr:"+46%",bottomTitle:"养老床位增长率",unitStr:"*个",dataList:t})},200)})})}(jQuery),function(t){var a="#SNJHTopAnalysis";t(function(){t(document).on("click","#SNJHTopAnalysisShow",function(){var e=t(a);void 0!==e.get(0)&&e.css({visibility:"visible"})}),t(document).on("click","#SNJHTopAnalysisClose",function(){var e=t(a);void 0!==e.get(0)&&e.css({visibility:"hidden"})}),t(document).on("click",".AnalysisShowButton",function(){var e=t(this).data("id"),a=t(e);void 0!==a.get(0)&&(t(".SNJHTopAnalysisAllBox").css({visibility:"hidden"}),a.css({visibility:"visible"}))}),t(document).on("click",".SNJHTopAnalysisAllBtnClose",function(){var e=t(this).data("id"),a=t(e);void 0!==a.get(0)&&a.css({visibility:"hidden"})})})}(jQuery);