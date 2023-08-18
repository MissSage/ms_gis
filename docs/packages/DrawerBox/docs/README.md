<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 抽屉布局

可以从上下左右拉出抽屉

## 基础用法

<Preview comp-name="DrawerBox" demo-name="demo">
  <demo />
</Preview>

## 属性

参数 | 说明 | 类型可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-:
`leftDrawer` | - | boolean| false | 否
`leftDrawerWidth` | - | number| 350 | 否
`leftDrawerAbsolute` | - | boolean| false | 否
`leftDrawerBarPosition` | - | top/center/bottom| center | 否
`leftDrawerTitle` | - | string| - | 否
`rightDrawer` | - | boolean| false | 否
`rightDrawerWidth` | - | number| 350 | 否
`rightDrawerAbsolute` | - | boolean| false | 否
`rightDrawerBarPosition` | - | top/center/bottom| center | 否
`rightDrawerTitle` | - | string| - | 否
`bottomDrawer` | - | boolean| false | 否
`bottomDrawerHeight` | - | number| 350 | 否
`bottomDrawerBarPosition` | - | left/center/right| center | 否
`bottomDrawerTitle` | - | string| false | 否
`topDrawer` | - | boolean| false | 否
`topDrawerHeight` | - | number| 350 | 否
`topDrawerBarPosition` | - | left /center/right| center | 否
`topDrawerTitle` | - | string| - | 否
`theme` | - | darkblue/dark/light| darkblue | 否

## 方法

事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`toggleDrawer` | 收缩抽屉 | [drawer, open] | drawer：收缩的抽屉，可选值：rtl / ltr / btt / ttb ; open：打开还是关闭，boolean
