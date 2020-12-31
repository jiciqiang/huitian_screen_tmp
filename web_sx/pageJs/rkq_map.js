mapboxgl.accessToken = 'pk.eyJ1IjoidG9ueWFuaXUiLCJhIjoiY2s2cnBtcHZ6MDg0bDNpcWk2ZTdvc3hyZSJ9.Z50SCfYIKg-QjjEEs68WgA';
var styleZoom = {
	container: "map",
	zoom: 14.5,
	center: [116.41329857112089,40.06868504769125],
	style: 'mapbox://styles/tonyaniu/ckj734r4138c41al7te4sorx5',
	pitch: 60,
	bearing: 0,
	attributionControl: false,
	localIdeographFontFamily: "'Noto Sans', 'Noto Sans CJK SC', sans-serif"
};
var map = new mapboxgl.Map(styleZoom);
var popup = new mapboxgl.Popup({
    closeButton: false
});
var flag = true;  //用来判断加文字  鼠标滑过
var tabFlag = false; //数据加载完成之后才可以点击tab
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
var colorJz = d3.scaleThreshold().domain(jzNum).range(lengColor);
var colorSq = d3.scaleThreshold().domain(sqNum).range(lengColor);
var colorBuild = d3.scaleThreshold().domain(buildNum).range(lengColor);
var clickInfo = {
	jdinfo: {
		areaName: "",
		areaId: ""
	},
	sqinfo: {
		areaName: "",
		areaId: ""
	}
}
var datatype = "jzrk";
map.on('load', function() {
	d3.queue()
	  .defer(d3.json, '../data/boundata/ht_jd.json')  //街镇边界 数据
	  .defer(d3.json, '../data/boundata/ht_sq.json')  //社区边界数据
	  .defer(d3.json, '../data/boundata/ht_build.json') //楼宇边界数据
	  .defer(d3.json, '../data/onlydata/ht_jd.json') //街道 工作居住数据
	  .defer(d3.json, '../data/onlydata/ht_sq.json')  //社区  工作居住数据
	  .defer(d3.json, '../data/onlydata/ht_build.json')  //楼宇 工作居住数据
	  .await(function(error, jdBound,sqBound,bildBound,jdData,sqData,build) {
			/*map.on("click", function() {
				console.log(map.getCenter().lng+","+map.getCenter().lat);
				console.log(map.getZoom());
			})*/ 
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
			}) 
			map.getSource("polygon_building").setData(buildData); 
			tabFlag = true;
			renderLengend(buildNum);
			//楼宇滑过事件
	  		map.on("mousemove", 'polygon_building', function(d) {
	  			 map.getCanvas().style.cursor = 'pointer';
	  			 var level = $("#tabs .on").attr("level");
	  			 var div = window.document.createElement("div");
	  			 var typeText=datatype=="jzrk"?"居住人口":"工作人口";
	  			div.innerHTML = d.features[0].properties.buildname+"<br/>"+typeText+"："+d.features[0].properties[datatype];
                popup.setLngLat({lng: d.lngLat.lng, lat: d.lngLat.lat}).setDOMContent(div).addTo(map);
	  		})
	  		map.on('mouseout', "polygon_building", function (e) {
	            map.getCanvas().style.cursor = '';
	            popup.remove()
	        });
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
	  		})
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
	  		
		  	//街道社区 点击事件
		  	map.on("click", 'polygon_sq', function(d) {
				var level = $("#tabs .on").attr("level");
				var type = $(".active").attr("type");
				if(level == "jd"){
					var jd_id = d.features[0].properties.jd_id;
					var jd_name = d.features[0].properties.jd_name;
					clickInfo.jdinfo.areaId = jd_id;
					clickInfo.jdinfo.areaName = jd_name;
					//移动中心点  和 缩放级别
					map.setCenter(jdCenterZoom[jd_id].centerPoint);
					map.setZoom(jdCenterZoom[jd_id].zoom)
					var newData = {
		                "type": "FeatureCollection",
		                "features": []
		            }
					sqBoundary.features.forEach(function(item,index){
						if(item.properties.jd_id == jd_id){
							item.properties.color = colorSq(item.properties[datatype])
							newData.features.push(item);
						}
					})
					map.getSource("polygon_sq").setData(newData); 
					
					//改变两旁的数据
					changeData(jdCenterZoom[jd_id]['percent']);
					//改变tab
					$("#tabs p").eq(1).addClass("on").siblings().removeClass("on");
					
					renderLengend(sqNum);
				}else if(level == 'sq'){
					var jd_id = d.features[0].properties.jd_id;
					var jd_name = d.features[0].properties.jd_name;
					var sq_id = d.features[0].properties.sq_id;
					var sq_name = d.features[0].properties.sq_name;
					if(jd_name == "天通苑北街道"){
						clickInfo.jdinfo.areaId = jd_id;
						clickInfo.jdinfo.areaName = jd_name;
						clickInfo.sqinfo.areaId = sq_id;
						clickInfo.sqinfo.areaName = sq_name;
						
						//移动中心点  和 缩放级别
						map.setCenter(JSON.parse(d.features[0].properties.centerPoint));
						map.setZoom(15)
						var newData = {
			                "type": "FeatureCollection",
			                "features": []
			            }
						buildData.features.forEach(function(item,index){
							if(item.properties.sq_id == sq_id){
								item.properties.color = colorBuild(item.properties[datatype])
								newData.features.push(item);
							}
						})
						Map3DView();
						map.getSource("polygon_building").setData(newData); 
						//改变两旁的数据
						var sqrandom = ((Math.random()*6+2)/100).toFixed(2)*1;
						changeData(sqrandom);
						
						//改变tab
						$("#tabs p").eq(2).addClass("on").siblings().removeClass("on");
						
						renderLengend(buildNum);
					}
				}
			})
	  		
	  
})
//tabs切换 
$("#tabs p").on("click",function(){ 
	if(tabFlag){
		$(this).addClass("on").siblings().removeClass("on"); 
		var ind = $(this).index(); 
		var type = $(".active").attr("type"); 
		if(ind == 0){ 
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
		    map.setCenter([116.35309542910704,40.065272179007735]);
		    map.setZoom(11.76);
		    //数据
		    changeData(1);
		    
		}else if(ind == 1){ 
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
			    map.setCenter([116.35309542910704,40.065272179007735]);
		        map.setZoom(11.76);
		        changeData(1);
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
			    changeData(jdCenterZoom[clickInfo.jdinfo.areaId]['percent'])
			}
		}else if(ind == 2){ 
			Map3DView();
			//图例切换 
			renderLengend(buildNum);
			
			if(clickInfo.jdinfo.areaId == ""){
				//楼宇渲染 全部
				buildData.features.forEach(function(item,index){
			    	item.properties.color = colorBuild(item.properties[datatype])
			    })
				map.getSource("polygon_building").setData(buildData);
				map.setCenter([116.41329857112089,40.06868504769125]);
		    	map.setZoom(14.5);
		    	changeData(1);
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
					changeData(jdCenterZoom[clickInfo.jdinfo.areaId]['percent']);
				}
			}
				
		}
	}
}) 
//工作 居住切换
$("#job_count li").on("click",function(){
	$(this).addClass('active').siblings().removeClass("active");
	datatype = $(this).attr("type");
	var ind = $("#tabs .on").index();
	if(ind == 0){
		var getMapData=map.getSource('polygon_sq')._data;
		getMapData.features.forEach(function(item,index){
             item.properties['color']= colorJz(item.properties[datatype]);
        })
		map.getSource("polygon_sq").setData(getMapData);
	}else if(ind ==1){
		var getMapData=map.getSource('polygon_sq')._data;
		getMapData.features.forEach(function(item,index){
             item.properties['color']= colorSq(item.properties[datatype]);
        })
		map.getSource("polygon_sq").setData(getMapData);
	}else if(ind ==2){
		var getMapData=map.getSource('polygon_building')._data;
		getMapData.features.forEach(function(item,index){
             item.properties['color']= colorBuild(item.properties[datatype]);
        })
		map.getSource("polygon_building").setData(getMapData);
	}
})

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