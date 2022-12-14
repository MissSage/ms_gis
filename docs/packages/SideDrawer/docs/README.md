<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->
# 抽屉

用于抽屉布局组件DrawerBox的抽屉

## 基础用法

<Preview comp-name="SideDrawer" demo-name="demo">
  <demo />
</Preview>

## 属性

参数 | 说明 | 类型、可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-:
`hideBar` | - | boolean | false | 否
`direction`|- |ltr/ rtl/ btt/ ttb | - | 否
`modelValue`| 是否收起 |boolean | - | 是
`theme`|- |darkblue/ dark/ light | darkblue | 否
`barPosition`|- |left/ top/ center/ bottom/ right | center | 否
`absolute`|- |boolean | false | 否
`width`|- |number | 350 | 否
`title`|- |string | 350 | 否

## 事件

事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`collapse` | 点击缩放按钮的回调 | isCollapsed | boolean
