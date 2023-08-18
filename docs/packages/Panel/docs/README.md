<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 弹窗

一个可拖拽的弹窗组件

## 基础用法

<Preview comp-name="Panel" demo-name="demo">
  <demo />
</Preview>

## 属性

参数             | 说明  | 类型                 | 可选值 | 默认值 | 是否必填
:-:              | :-:   | :-:                  | :-:   | :-:    | :-:
`telport`        | -     | string / HTMLElement | -     | -  | 否
`customClass`    | -     | string / string[]    | -     | -  | 否
`modal`          | -     | boolean               | -     | `false`  | 否
`modalClose`     | -     | boolean               | -     | `false`  | 否
`showClose`      | -     | boolean               | -     | `false`  | 否
`maxMin`         | -     | boolean               | -     | `false`  | 否
`title`          | -     | string               | -     | -  | 否
`draggable`      | -     | boolean               | -     | `false`  | 否
`dragout`        | -     | boolean               | -     | `false`  | 否
`destroyByClose` | -     | boolean               | -     | `false`  | 否
`fade`           | -     | string               | -     | `false`  | 否
`theme`          | -     | dark/darkblue/light  | -     | `darkblue`  | 否
`position`       | -     | bottom/right/left/top| -     | -  | 否
`fullContent`    | 是否不要内容区域的padding,true则padding=0     | boolean               | -     | `false`  | 否
`beforeClose`    | -     | () => void           | -     | -  | 否
`beforeOpen`     | -     | () => void           | -     | -  | 否
`afterOpen`      | -     | () => void           | -     | -  | 否

## 方法

事件名   | 说明               | 参数列表   | 参数说明
:-:      | :-:                | :-:       | :-:
`Open`   | 打开弹窗           | - | -
`Close`  | 关闭弹窗           | - | -
`Toggle` | 打开或关闭弹窗     | [open] | open: 是否打开弹窗
`toggleMxMin` | 缩放弹窗      | [type] | type: 缩放类型，可靠值： max / min / normal
