# huitian_screen

回天大脑数据大屏开发

一、主要监听事件

```
/**
 * 触发切换事件，首屏Tab切换
 *@param _data 数据 
 *@func _callback 回调执行函数
 */
$.ListenTabChnage.trigger(_data, _callback);

/**
 * 监听切换事件，首屏Tab切换
 *@param _data 数据
 *@param _data['id']  标识ID  
     1. 回天印象 人口
     2. 回天印象 地域
     3. 回天印象 产业
     4. 回天印象 事务
     5. 回天印象 组织
     101. 三年行动计划 全部
     102.三年行动计划 教育
     103.三年行动计划 交通
     104.三年行动计划 医疗
     105.三年行动计划 养老
     106.三年行动计划 公共设施
     110.突发事件
 *@param _data['name']           当前切换项名称（选项，可以为空）
 *@param _data['triggerType']    触发类型：click点击、auto（废弃） 
 *@param _data['isDefault']      是否切换为默认，返回true：切换到当日市民反映量、实时人流、交通延迟指数 地图及样式；返回false：切换到回天印象、三年行动计划、突发事件 地图及样式
 */
$.ListenTabChnage.listen(data);
```

实例：

```
$.ListenTabChnage.listen(function(data){

    if(data['isDefault']){

        //作对应数据处理

    }else if(data['triggerType']=='click'){

        //通过data['id']判断作对应数据处理

    }
});
```

二、相关事件说明

```
/**
 * 触发事件，用于向地图发送最新指令
 *@param _data 数据
 *@func _callback 回调执行函数
 */
$.ListenMapDataChange.trigger(_data, _callback);
/**
 * 监听事件，用于监听获取新指令
 *@param _data 数据
 */
$.ListenMapDataChange.listen(data);

/**
 * 触发事件，地图数据发生变化时事件触发，并向外部发送数据
 *@param _data 数据
 *@func _callback 回调执行函数
 */
$.ListenMapChange.trigger(_data, _callback);
/**
 * 监听事件，用于监听地图数据变化
 *@param _data 数据
 */
$.ListenMapChange.listen(data);

/**
 * 将颜色值转换为rgba
 *@param hex HEX值，如：#FFFFFF
 *@param al  透明度
 */
$.hexToRgba(hex, al);
```

三、首页中间地图切换监听事件（当日市民反映量、实时人流、交通延迟指数）

```
/**
 *@param _data['index']
         1    当日市民反映量
         2    实时人流
         3    交通延迟指数
 */
$.ListenIndexMiddleMapChange.listen(function(data){
    var _index = _data['index'];
    console.log(data);

});
```
