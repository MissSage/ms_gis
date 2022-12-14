<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 地图

arcgis基础组件

## 基础用法
<Preview comp-name="ArcMap" demo-name="demo">
  <demo />
</Preview>

## 属性

|参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
|:-------: | :-----: | :---------: | :---------: | :-------: | :-:
|`basemap` | 默认底图 | string | 参见下面底图 | `satellite` | 否 

## 方法

方法名 | 说明 | 参数列表 | 参数说明
|:-: | :-: | :-: | :-:
|`init` | 地图初始化 | center，zoom | 第一个参数： 地图的初始化中心，第二个参数： 地图的默认初始缩放级别

## 底图可选项

名称 | 说明
:-: | :-: 
`satellite` | -
`satellite` | -
`hybrid` | -
`terrain` | -
`oceans` | -
`osm` | -
`dark-gray-vector` | -
`gray-vector` | -
`streets-vector` | -
`topo-vector` | -
`streets-night-vector` | -
`streets-relief-vector` | -
`streets-navigation-vector` | -
