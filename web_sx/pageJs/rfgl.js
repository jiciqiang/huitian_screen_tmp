var axisFontSize=14;
//实时人流量
var ssrll = echarts.init(document.getElementById('ssrll'));
var ssrll_option = {
	tooltip: {
		trigger: 'axis',
		formatter: function(params){
			if(params[0].value!='-'){
				return params[0].seriesName+'<br/>'+params[0].name+'：'+params[0].value/10000;
			}else{
				return params[0].seriesName+'<br/>'+params[0].name+'：-';
			}			
		}
	},
	grid: {
		top: '18%',
		left: '5%',
		right: '2%',
		bottom: 0,
		containLabel: true
	},
	xAxis: [{
		axisTick: {
			show: false
		},		
		axisLabel: {
			rotate: 45,
			textStyle: {
				color: '#fff',
				fontSize:axisFontSize
			}
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: '#474D7A'
			}
		},
		type: 'category',
		boundaryGap: false,
		data: ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"]
	}],
	yAxis: {
		type: 'value',
		name: '单位:万人',
		nameTextStyle: {
			color: '#fff',
			fontSize:axisFontSize
		},
		axisTick: {
			show: false
		},
		splitNumber: 4,
		splitLine: {
			show: false,
			lineStyle: {
				color: "#474D7A"
			}
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			formatter: function(value, index) {
				var count = value / 10000;
				return count;
			},
			textStyle: {
				color: '#fff',
				fontSize:axisFontSize
			}
//			formatter: function(value, index) {
//				var count = (value / 10000).toFixed(2);
//				return count;
//			}
		},
		minInterval: 1
	},
	series: [{
			name: '实时人流量',
			type: 'line',
			//这句就是让曲线变平滑的 
			smooth: true,
			symbolSize: 5,
			symbol: 'none',
			itemStyle: {
				normal: {
					color: '#04dffb'
				}
			},
			data: [],
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(4,227,255,0.4)'
					}, {
						offset: 1,
						color: 'rgba(11,29,77,0.6)'
					}])
				}
			}
		}

	]
};
//流入流出分布
var inout = echarts.init(document.getElementById('inout'));
var inout_option = {
	color: ['#0BE0F3', '#F2CF09'],
	grid: {
		left: '3%',
		right: '4%',
		top: "15%",
		bottom: "1%",
		containLabel: true
	},
	tooltip: {
		trigger: 'axis',
		formatter: function(params) {
			return params[0].name + "<br/>" + params[0].seriesName + " : " + params[0].data/10000 + "<br/>" + params[1].seriesName + " : " + params[1].data * (-1)/10000 + "<br/>" + params[2].seriesName + " : " + params[2].data/10000;
		},
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},

	legend: {
		data: ['流入', '流出', '净值'],
		textStyle: {
			color: '#fff',
			fontSize: axisFontSize
		},
		itemWidth: 18,
		itemHeight: 10,
		top: 1,
		left: "center"

	},

	calculable: false,
	yAxis: [{
		type: 'value',
		name: '万人',
		nameTextStyle: {
			color: "#fff",
			fontSize: axisFontSize
		},
		nameGap: 6,
		axisTick: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: "#566071"
			}
		},
		axisLabel: {
			formatter: function(value, index) {
				var count = value / 10000;
				return count;
			},
			textStyle: {
				color: '#fff',
				fontSize: axisFontSize
			}
		}

	}, {
		type: 'value',
		name: '万人',
		min: function(val) {
			return Math.ceil((val.min - (val.max - val.min)) * 0.998);
		},
		max: function(val) {
			return Math.ceil(val.max * 1.001);
		},
		nameTextStyle: {
			color: "#fff",
			fontSize: axisFontSize
		},
		nameGap: 6,
		axisTick: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: "#F063FE"
			}
		},
		axisLabel: {
			formatter: function(value, index) {
				var count = Math.ceil(value / 10000);
				return count;
			},
			//			 formatter: function(){
			//                return "";
			//         },
			textStyle: {
				color: '#fff',
				fontSize:axisFontSize
			}
		},

	}],
	xAxis: [{
		type: 'category',
		data: [],
		axisTick: {
			show: false
		},
		splitLine: {
			show: false,
			lineStyle: {
				color: "#025BBD"
			}
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: "#566071"
			}
		},
		axisLabel: {
			rotate: 35,
			textStyle: {
				color: '#fff',
				fontSize: axisFontSize
			}
		},
	}],
	series: [{
			name: '流入',
			type: 'bar',
			stack: '总量',
			barWidth: '50%',
			data: []
		},
		{
			name: '流出',
			type: 'bar',
			stack: '总量',
			barWidth: '50%',
			data: []
		},
		{
			name: '净值',
			type: 'line',
			symbol: 'circle',
			smooth: true,
			symbolSize: 0,
			yAxisIndex: 1,
			animationDuration: 2000,
			itemStyle: {
				color: '#F063FE'
			},
			data: []
		}
	]
};

//人口变化趋势
var rkbhqs = echarts.init(document.getElementById('rkbhqs'));
var rkbhqs_option = {
	tooltip: {
		trigger: 'axis',
		formatter: function(params) {
			return params[0].name + "<br/>" + params[0].seriesName + " : " + (params[0].data=='-'?'-':params[0].data/10000) + "<br/>" + params[1].seriesName + " : " + (params[1].data=='-'?'-':params[1].data/10000) + "<br/>" + params[2].seriesName + " : " + (params[2].data=='-'?'-':params[2].data/10000);
		},
	},
	grid: {
		top: '16%',
		left: '4%',
		right: '4%',
		bottom:'3%',
		containLabel: true
	},
	legend: {
		data: ['2020', '2019', '2018'],
		top: '7%',
		//left:"8%",
		itemGap: 5,
		textStyle: {
			color: '#fff',
			fontSize: axisFontSize
		},
		selected:{
		}
	},
	xAxis: [{
		axisTick: {
			show: false
		},
		axisLabel: {
			//rotate: 45,
			textStyle: {
				color: '#fff',
				fontSize: axisFontSize
			}
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: '#474D7A'
			}
		},
		type: 'category',
		boundaryGap: false,
		data: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
	}],
	yAxis: [{
		type: 'value',
		name: '单位:万人',
		nameTextStyle: {
			color: '#fff',
			fontSize: axisFontSize
		},
		nameGap: 18,
		axisTick: {
			show: false
		},
		splitNumber: 4,
		splitLine: {
			show: false,
			lineStyle: {
				color: "#474D7A"
			}
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			formatter: function(value, index) {
				var count = value / 10000;
				return count;
			},
			showMaxLabel: true,
			textStyle: {
				color: '#fff',
				fontSize: axisFontSize
			},
		},
		minInterval: 1
	}],
	series: [{
			name: '2020',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			itemStyle: {
				normal: {
					color: '#4babfc'
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(5, 170, 255,0.6)'
					}, {
						offset: 1,
						color: 'rgba(11, 29, 77,0.6)'
					}])
				}
			},
			data: [],
            markPoint:{
				data:[{
					xAxis:7,
					yAxis:20,
					value:0,
					symbolSize: 0.1,
					label: {
					  formatter:function(ev){
					  	return Math.round(ev.value/100)/100+"万";
					  },
		              textStyle: { color: '#fff' },
		              padding: [5,5,2,5],
		             // offset:[-20,-40],
		              borderRadius:4,
					  fontSize:axisFontSize,
		              position:"top",
		              borderColor: '#39A0FA',
		              borderWidth:1,
		              backgroundColor: '#39A0FA',
		            }
				}]
			}
		},
		{
			name: '2019',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			itemStyle: {
				normal: {
					color: '#FF8C00'
				}
			},
			data: ["960", "1340", "1465", "1768", "2188", "2857", "3358", "580", "580", "960", "1340", "1465", "1768", "2188", "2857", "3358", "580", "960", "1340", "1465", "1768", "2188", "2857", "3358", "3727", "3623", "3308", "2727", "2520", "2557", "2580", "2742", "2602", "2780", "2957", "3095", "2968", "2987", "2800", "2647", "2352", "1068"],
		},
		{
			name: '2018',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			itemStyle: {
				normal: {
					color: '#E5E52C'
				}
			},
			data: ["1340", "1465", "1768", "2188", "2857", "3358", "580", "580", "960", "1340", "1465", "1768", "2188", "2857", "3358", "580", "960", "1340", "1465", "1768", "2188", "2857", "3358", "3727", "3623", "3308", "2727", "2520", "2557", "2580", "2742", "2602", "2780", "2957", "3095", "2968", "2987", "2800", "2647", "2352", "1068"],
		}
	]
};
rkbhqs.setOption(rkbhqs_option);
//行业分布
var hyfb = echarts.init(document.getElementById('hyfb'));
var hyfb_option={
	color: ['#4b5cc4','#2edfa3', '#f47983', '#D989DB', '#70f3ff','#DED982'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
            name: '商业基础设施分布',
            type: 'pie',
            startAngle:50,
            selectedMode: 'single',
            radius: [0, '50%'],
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: []
        },
        {
            name: '商业基础设施分布',
            type: 'pie',
             startAngle:50,
            radius: ['50%', '50%'],
            label: {
                normal: {
                    formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: axisFontSize,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        d: {
                            fontSize:axisFontSize,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize:axisFontSize,
                            color: '#fff',
                            align: 'center',
                            padding: 4
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 10,
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                }
            },
            data: []
        }
    ]
}


//通勤时间
var tqsj = echarts.init(document.getElementById('tqsj'));
var tqsj_option = {
	tooltip: {
		trigger: 'item',
		formatter: function(params) {
			return params.name + '：' + (params.data)/10000;
		}
	},
	grid: {
		bottom: '3%',
		top: '6%',
		left: '2%',
		right: '2%',
		containLabel: true
	},
	xAxis: {
		data: [],
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			interval: 0,
			textStyle: {
				fontSize: axisFontSize,
				color: '#fff'
			},
			margin: 20, //刻度标签与轴线之间的距离。
		},

	},
	yAxis: {
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			show: false,
			textStyle: {
				color: '#73C4FB',
				fontSize:axisFontSize
			}
		}
	},
	series: [{
			name: '通勤时间',
			type: 'pictorialBar',
			symbolSize: [40, 15],
			symbolOffset: [0, -10],
			z: 12,
			symbolPosition: 'end',
			itemStyle: {
				normal: {
					color: function(params) {　 //首先定义一个数组 
						var colorList = ['rgba(64,161,126,1)', 'rgba(72,220,232,1)', 'rgba(26,144,242,1)', 'rgba(199,182,34,1)']
						return colorList[params.dataIndex];
					}
				}
			},
			data: [],

		},
		{
			name: '通勤时间',
			type: 'pictorialBar',
			symbolSize: [40, 15],
			symbolOffset: [0, 10],
			z: 12,
			itemStyle: {
				normal: {
					color: function(params) {　 //首先定义一个数组 
						var colorList = ['rgba(64,161,126,1)', 'rgba(72,220,232,1)', 'rgba(26,144,242,1)', 'rgba(199,182,34,1)']
						return colorList[params.dataIndex];
					}
				}
			},
			data: []
		},
		{
			type: 'bar',
			itemStyle: {
				normal: {
					label: {
						show: true,
						position: 'top',
						formatter:function(params){
							return ((params.data)/10000).toFixed(2)+'万';
						},
						offset: [0, -10],
						textStyle: {
							fontSize: axisFontSize
						}
					},
					color: function(params) {　 //首先定义一个数组 
						var colorList = ['rgba(64,161,126,.6)', 'rgba(72,220,232,.6)', 'rgba(26,144,242,.6)', 'rgba(199,182,34,.6)']
						return colorList[params.dataIndex];
					}
				}
			},
			barWidth: 40,
			data: []
		}
	]
};
//通勤半径
var tqbj= echarts.init(document.getElementById('tqbj'));
var tqbj_option = {
	color: ['#00c6a3', '#ded982', '#d989DB', '#57A5ee', '#9669E8'],
	tooltip: {
		trigger: 'item',
		formatter: function(value, index) {
			return value.data.name + ': ' + (value.value)/10000;
		}
	},
	legend: {
		orient: 'horizontal',
		icon: 'circle',
		bottom: 10,
		x: 'center',
		textStyle: {
			color: '#fff',
			fontSize:axisFontSize
		},
		itemWidth: 10,
		itemHeight: 10,
		data: ["<5km", "5~15km", "15~25km", ">25km"]
	},
	series: [{
			name: '通勤半径',
			type: 'pie',
			selectedMode: 'single',
			radius: [25, 35],
			startAngle:80,
			center: ['47%', '48%'],
			label: {
				normal: {
					formatter: function(value, index) {
						return value.data.name + ':' + ((value.value)/10000).toFixed(2)+'万';
					},
					textStyle: {
						fontWeight: 'normal',
						fontSize: axisFontSize-1
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					borderWidth: 4,
					borderColor: '#160642'
				}

			},
			data: []
		},
		{
			name: '',
			type: 'pie',
			startAngle:80,
			hoverAnimation: false,
			center: ['47%', '48%'],
			radius: ['50', '51'],
			label: {
				normal: {
					show: false
				}
			},
			data: []
		}
	]
}
//居住 工作人口
var jzgz = echarts.init(document.getElementById('jzgz'));
var jzgz_option = {
	grid: {
		left: '5%',
		right: '3%',
		top: "20%",
		bottom: "1%",
		containLabel: true
	},
	tooltip: {
		trigger: 'axis',
		formatter: function(value, index) {
			var tip = value[0].name + '<br/>';
			tip += value[0].seriesName + ':' + (value[0].data) / 10000+ '<br/>';
			tip += value[1].seriesName + ':' + (value[1].data) / 10000+ '<br/>';
			return tip;
		}
	},
	legend: {
		data: ['工作人口', '居住人口'],
		textStyle: {
			color: '#fff',
			fontSize: axisFontSize
		},
		itemWidth: 12,
		itemHeight: 10,
		top: 5,
		right: 20
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		axisTick: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: '#314D74'
			}
		},
		axisLabel: {
			rotate: 35,
			/*formatter: function(val) {
				return val.split("").join("\n");
			},*/
			textStyle: {
				color: '#fff',
				fontSize:axisFontSize
			}
		},
		data: []
	}],
	yAxis: [{
		name: '万人',
		nameTextStyle: {
			color: "#ffffff",
			fontSize:axisFontSize
		},
		nameGap: 10,
		splitNumber: 3,
		type: 'value',
		axisTick: {
			show: false
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: "#314D74"
			}
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			formatter: function(value, index) {
				var count = value / 10000;
				return count;
			},
			textStyle: {
				color: '#fff',
				fontSize: axisFontSize
			}
		}
	}],
	series: [{
		name: '工作人口',
		type: 'bar',
		barWidth: '30%',
		itemStyle: {
			normal: {
				color: '#29E0A7'
			}
		},
		data: []
	},
	{
		name: '居住人口',
		type: 'bar',
		barWidth: '30%',
		itemStyle: {
			normal: {
				color: '#61d3fb'
			}
		},
		data: []
	}]
};

var sex = echarts.init(document.getElementById('sex'));
var spirit1 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAwCAYAAAB0WahSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFCMDZFQTZGODdCMTFFOTkyRDNBMzg1NzNFMDA3NTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFCMDZFQTdGODdCMTFFOTkyRDNBMzg1NzNFMDA3NTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQUIwNkVBNEY4N0IxMUU5OTJEM0EzODU3M0UwMDc1MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQUIwNkVBNUY4N0IxMUU5OTJEM0EzODU3M0UwMDc1MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqErsp4AAAH0SURBVHja7Ji9S8NAGIcvtX4MTn519ANBcNHBzUHnjoI6qIPgKNTVVsQ/QXBVB9FFRQsKIq6OgpsfCBqhk0hLsQ5W2vg7+hZCSdK7JFdF7oWHhNzl7mkuee96hmVZjIdxw2SiHSTAFBiia4/gGGyBgmhD1ljlaPgQGQTnNoHa4EJx8CwjEmFy0QEuPCQYlV1SXeGQFUnSExF5akmVIgsSdedViXSBHon6MZnhkRFpYvIRVSHyDj4l6hfontBFSuBMov4pKKt6WddBXqAer7Oh8qt5ArN1MicvmxZNaH5FGCUrng/ToGi7XqTh4GVXso0aPuca+5zTR+emzBxTm+LdPq9hsALGKR9EWLDgL+0buAab4E7kifDx3QNtTE18UYY+8pr0RsC+QgkerdTHqNfLugpamPrgfaS8RCZZ42LCSyTWQJHuoHlESYiIxGVXWw6rungYIh8gF0AkR22EnuJ/bWi0iBbRIl4ipb8icu8gZobQj+nwIx+8RBK2LMhXVWsgE4JIhtqq/r3IguV6K7ROWrS81KzELZdO5uh44LYutp0PgH5wSzK+9kfcRHrp+CogEtr+iM4jWkSLaBEt8i9Fsi77HnmiLHhPYJEdh2tpm8iJQ/muaONRCZEUzcBLoBkcssquUjUWSWgGfINtWoMIxY8AAwAUyHWg98te/AAAAABJRU5ErkJggg==';
var spirit2 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAwCAYAAAB0WahSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFCMDZFQUFGODdCMTFFOTkyRDNBMzg1NzNFMDA3NTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFCMDZFQUJGODdCMTFFOTkyRDNBMzg1NzNFMDA3NTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQUIwNkVBOEY4N0IxMUU5OTJEM0EzODU3M0UwMDc1MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQUIwNkVBOUY4N0IxMUU5OTJEM0EzODU3M0UwMDc1MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl5AtqYAAALfSURBVHja7JhNSFRRFMcdM4uCxNpEUEEQEVFIUZsS2lS4KAr6EDTQCoRoUQujRV8ThCEmTB/WNoqgNkrkpnUwGgWpWZsIbBFREUQSOZn1P/CfuF3uc9558w5EeOHHzHtz7rn/d+955547mfH75yv+hVaZsF81OA4GwTgZ5L3qJA6rEvRZAh6ADd79TeQg2AneWc6IPG1vQITb1oM+MMdSyBE+dam2kbZmQg4obPdbClllZKsW8svIVi3kpZGtWshdI1u1kFsgH8NugLZmQibBrhJi8rSZtE7xn8BWcIyDfiB53pPfPlqm+FlgKVjkTP9AwG4tPz+Dt+BnWkLmgrPgKKhRPugXcANkwfdyhMh+8QjUJ9ylRfgpsBlsAxNJY+RmGSLcVk9fiYJ1D2hJsfZpoU+VkIWgx6AQ66Hv2EKugMUGQsTn9bhCZPqaAvdfg37FoGL7JnC/MbREGa94lmkbDczGBKuyr2AsppDlYAF4GqjW3oM1zDXBGclFLMkFCtS2F+wbWqJc1NJIwdsc6PQMdJYRF5304bdmjvmXkNqI97wAWp0NrE4hoM7ZKFvpK5Snal0h3Twm+O0iGHGybJdCSJcTGyP0FTqadBeFNEQkruegw7luBysVQsT2pHPdQZ+hRNcgb80QvqzzfvzBY0Ox4zLwCsxTxsc3sJq7cHG5noDZnt2wzMiKgANffS6BiAr2yU0zy38q/krurm4b8tZzO9hdxlsjfXd4cTfsJz8R0gbucfr62bHgBOi1FFL7VSdwCywlH3JMGbutiqVfY4SDE8oAnS5wxdclXo+5OaRUGSABejrFDe8MfarrEckD81MUIoF7WStEAnSfQRmwl75jC8ka/kuV1QjJGArJaKr4w1ReEzhabIk54OPAEUKOF+c0Qka5nqE3KW5h1OSkdpMjp0mbETIj5L8VIueQqRh2U+6ZxUKI/PnfG8Ouj7amS3MI3GE9GqpRb/P4oGq/BRgAmmiQO5ypHZcAAAAASUVORK5CYII=';
var sexOption = {
	tooltip: {},
	xAxis: {
		max:0,
		splitLine: {
			show: false
		},
		offset: 10,
		axisLine: {
			show:false
		},
		axisTick:{
			show:false
		},
		axisLabel: {
			show:false,
			margin: 10
		}
	},
	yAxis: {
		data: [],
		inverse: true,
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			margin: 10,
			textStyle: {
				color: '#fff',
				fontSize:axisFontSize
			}
		}
	},
	grid: {
		top: '2%',
		height: 120,
		left: 70,
		right:140
	},
	series: [{
		type: 'pictorialBar',
		symbol: spirit1,
		symbolRepeat: 'fixed',
		symbolMargin: '6%',
		symbolClip: true,
		symbolSize:[28,35],
		symbolBoundingData: 0,
		data: [],
		markLine: {
			symbol: 'none',
			label: {
				normal: {
					formatter: 'max: {c}',
					position: 'start'
				}
			},
			lineStyle: {
				normal: {
					color: 'green',
					type: 'dotted',
					opacity: 0.2,
					width: 2
				}
			},
		},
		z: 10
	}, {
		type: 'pictorialBar',
		itemStyle: {
			normal: {
				opacity: 0.2
			}
		},
		label: {
			normal: {
				show: true,
				formatter: null,
				position: ['70%', '40%'],
				offset: [90, 0],
				textStyle: {
					color: '#fff',
					fontSize:axisFontSize
				}
			}
		},
		animationDuration: 0,
		symbolRepeat: 'fixed',
		symbolMargin: '6%',
		symbol: spirit1,
		symbolSize:[28,35],
		symbolBoundingData: 0,
		data: [],
		z: 5
	}]
};

var age = echarts.init(document.getElementById('age'));
var age_option = {
	tooltip: {
		formatter: '{b}:{c}人',
	},
	grid: {
		left: '3%',
		right: '15%',
		top: "3%",
		bottom: "2%",
		containLabel: true
	},
	xAxis: {
		name: '单位:人',
		nameTextStyle: {
			color: '#fff',
			fontSize:axisFontSize
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisLabel: {
			rotate: 35,
			textStyle: {
				color: '#fff',
				fontSize: axisFontSize,
				formatter: '{value}'
			}
		}

	},
	yAxis: [{
		data: ['50岁以上', '40-50', '30-40', '20-30', '20岁以下'],
		axisLine: {
			show: false
		},
		axisLabel: {
			//inside: true,
			textStyle: {
				color: '#fff',
			    fontSize:axisFontSize
			},
			splitLine: {
				show: false,
			},
		},
		axisTick: {
			show: false
		},
		z: 10
	}],
	dataZoom: [{
		type: 'inside'
	}],
	series: [{ // For shadow
			type: 'bar',
			//barWidth: 30,
			itemStyle: {
				normal: { color: 'rgba(52,82,134,0.9)' }
			},
			barGap: '-100%',
			barCategoryGap: '40%',
			data: [500, 500, 500, 500, 500],
			animation: false,
			silent:true
		},
		{
			type: 'bar',
			//barWidth: 30,
			itemStyle: {
				normal: {
					label: {
						show: true,
						position: 'right',
						formatter: '{c}人',
						fontSize:axisFontSize,
						color:"#fff"
					},
					color: function(params) {　 //首先定义一个数组 
						var colorList = ['#6dac58', '#f8a231', '#0180d7', '#06d6f6', '#34a6ff', ]
						return colorList[params.dataIndex];
					}
				},
			},
			data:[3800, 5600, 4300, 2800, 1800]
		}
	]
};

var jgd = echarts.init(document.getElementById('jgd'));
var index = 0;
var colorList = ['#FD4F37', '#08C2BB', '#20d180', '#2274C0'];
var jgd_option ={
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	grid: {
		bottom: '2%',
		top: '4%',
		left:'-8%',
		right: '7%',
		containLabel: true
	},
	xAxis: {
		type: 'value',

		splitLine: {
			show: false
		},
		axisLabel: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		}

	},
	yAxis: {
		type: 'category',
		inverse: true,
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisPointer: {
			label: {
				show: true,
				margin: 30
			}
		},
		data: [],
		axisLabel: {
			margin: 90,
			fontSize: axisFontSize,
			align: 'left',
			color: '#fff',
			rich: {
				a1: {
					color: '#fff',
					backgroundColor: colorList[0],
					width: 20,
					height: 20,
					align: 'center',
					borderRadius: 2
				},
				a2: {
					color: '#fff',
					backgroundColor: colorList[1],
					width: 20,
					height: 20,
					align: 'center',
					borderRadius: 2
				},
				a3: {
					color: '#fff',
					backgroundColor: colorList[2],
					width: 20,
					height: 20,
					align: 'center',
					borderRadius: 2
				},
				b: {
					color: '#fff',
					backgroundColor: colorList[3],
					width: 20,
					height: 20,
					align: 'center',
					borderRadius: 2
				}
			},
			formatter: function(params) {
				if(index == 10) {
					index = 0;
				}
				index++;
				if(index - 1 < 3) {
					return [
						'{a' + index + '|' + index + '}' + '  ' + params
					].join('\n')
				} else {
					return [
						'{b|' + index + '}' + '  ' + params
					].join('\n')
				}
			}
		}
	},
	series: [{
			z: 2,
			name: '',
			type: 'bar',
			barWidth: '50%',
			data: [],
			label: {
				show: true,
				formatter: '{c}人',
				position: 'right',
				color: '#fff',
				fontSize: axisFontSize,
				offset: [10, 0]
			}
		}

	]
};
changeData(1);
function changeArrayPercet(list,percent){
	list.forEach(function(item,index){
		list[index]=(item==undefined||item=='-'?'-':Math.round(item*percent))+'';
	})
}
function changeObjectPercet(list,percent){
	list.forEach(function(item,index){
		list[index].value=(item.value==undefined||item.value=='-'?'-':Math.round(item.value*percent))+'';
	})
}
function fomatFloat(num,n){   
    var f = parseFloat(num);
    if(isNaN(f)){
        return false;
    }   
    f = Math.round(num*Math.pow(10, n))/Math.pow(10, n); // n 幂   
    var s = f.toString();
    var rs = s.indexOf('.');
    //判定如果是整数，增加小数点再补0
    if(rs < 0){
        rs = s.length;
        s += '.'; 
    }
    while(s.length <= rs + n){
        s += '0';
    }
    return s;
}  
function changeData(percent){
	$.get('../data/datachangye.json',function(resp){
		var result = resp.result;
		//实时人流量
		var h = new Date().getHours();
		var m = new Date().getMinutes();
		var num = m<30?h*2+1:h*2+2;
		var ssData = result.ssrl;
		changeArrayPercet(ssData.yvalue,percent);
		ssrll_option.xAxis[0].data = ssData.xname.slice(0,num);
		ssrll_option.series[0].data = ssData.yvalue.slice(0,num);
		ssrll.setOption(ssrll_option);
		//流入流出
		var  inoutData = result.inout;
		inout_option.xAxis[0].data = inoutData.xname;
		changeArrayPercet(inoutData.inValue,percent);
		changeArrayPercet(inoutData.outValue,percent);
		changeArrayPercet(inoutData.netValue,percent);
		inout_option.series[0].data = inoutData.inValue;
		inout_option.series[1].data = inoutData.outValue;
		inout_option.series[2].data = inoutData.netValue;
		inout.setOption(inout_option);
		//人口变化趋势
		var rkbhqsData = result.rkbhqs;
		rkbhqs_option.xAxis[0].data = rkbhqsData.xname;
		changeArrayPercet(rkbhqsData['2020'],percent);
		changeArrayPercet(rkbhqsData['2019'],percent);
		changeArrayPercet(rkbhqsData['2018'],percent);
		rkbhqs_option.series[0].data = rkbhqsData['2020'];
		rkbhqs_option.series[1].data = rkbhqsData['2019'];
		rkbhqs_option.series[2].data = rkbhqsData['2018'];
        var lastNum =fomatFloat(rkbhqsData['2020'][rkbhqsData['2020'].length-2],1);
        rkbhqs_option.series[0].markPoint.data[0].xAxis = rkbhqsData['2020'].length-2;
        rkbhqs_option.series[0].markPoint.data[0].yAxis = lastNum;
        rkbhqs_option.series[0].markPoint.data[0].value = lastNum;
		rkbhqs.setOption(rkbhqs_option);
		//行业分布
		var hyfbData = result.hyfb;
		changeObjectPercet(hyfbData,percent);
		hyfb_option.series[0].data = hyfbData;
		hyfb_option.series[1].data =  hyfbData;
		hyfb.setOption(hyfb_option);
		//通勤时间 
		var tqsjData = result.tqsj;
		tqsj_option.xAxis.data = tqsjData.xName;
		changeArrayPercet(tqsjData.yValue,percent);
		tqsj_option.series[0].data = tqsjData.yValue;
		tqsj_option.series[1].data =tqsjData.yValue;
		tqsj_option.series[2].data = tqsjData.yValue;
		tqsj.setOption(tqsj_option);
		//通勤半径
		var tqbjData=result.tqbj;
		changeObjectPercet(tqbjData,percent);
		tqbj_option.series[0].data = tqbjData;
		tqbj_option.series[1].data = tqbjData;
		tqbj.setOption(tqbj_option);
		
		//居住 工作 人口
		var jzgzData = result.jzgz;
		changeArrayPercet(jzgzData.gzData,percent);
		changeArrayPercet(jzgzData.jzData,percent);
		jzgz_option.xAxis[0].data = jzgzData.xName;
		jzgz_option.series[0].data =jzgzData.gzData;
		jzgz_option.series[1].data =jzgzData.jzData;
		jzgz.setOption(jzgz_option);
		
		//性别 年龄
		var sexR = result.sex;
		var sexName =[];
		var sexValue =[];
		var sexSum =0;
		changeObjectPercet(sexR,percent);
		sexR.forEach(function(item){
			sexName.push(item.name);
			sexValue.push(item.value);
			sexSum+=item.value*1;
		})
		
		sexOption.xAxis.max = sexSum;
		sexOption.yAxis.data = sexName;
		
		sexOption.series[0].symbolBoundingData=sexSum;
		sexOption.series[0].data = [{
				value: sexValue[0],
				symbol: spirit1
			}, {
				value: sexValue[1],
				symbol: spirit2
			}]
		sexOption.series[1].symbolBoundingData=sexSum;
		sexOption.series[1].data = [{
				value: sexValue[0],
				symbol: spirit1
			}, {
				value: sexValue[1],
				symbol: spirit2
			}]
		sexOption.series[1].label.normal.formatter=function(params){
			return params.value+"人( "+(params.value / sexSum * 100).toFixed(2) + '%)';
		}
		sex.setOption(sexOption);
		
		var ageData = result.age;
		age_option.yAxis[0].data = ageData.xName;
		changeArrayPercet(ageData.yValue,percent);
		age_option.series[1].data = ageData.yValue;
		age.setOption(age_option);
		
		//籍贯地
		var jgdData = result.jgd;
		jgd_option.yAxis.data=jgdData.xName.slice(0,10);
		changeArrayPercet(jgdData.yValue,percent);
		var yValue3=jgdData.yValue.slice(0,10);
		jgd_option.series[0].data=yValue3.map((item, i) => {
			itemStyle = {
				color: i > 3 ? colorList[3] : colorList[i]
			}
			return {
				value: item,
				itemStyle: itemStyle
			};
		})
		jgd.setOption(jgd_option);		
	})
}
window.onresize = function() {
	ssrll.resize();
	inout.resize();
	rkbhqs.resize();
	hyfb.resize();
	sex.resize();
	age.resize();
	jgd.resize();
	tqsj.resize();
	tqbj.resize();
	jzgz.resize();
}