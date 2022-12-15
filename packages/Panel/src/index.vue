<!-- toDo: 在拖拽后进行放大缩小会导致定位不正确 level: warning -->
<!-- 具体表现： 当设置position=bottom使panel保持在底部位置时，由于拖拽使其css bottom属性丢失，导致无法恢复到bottom位置上 -->
<template>
  <teleport :to="props.telport || 'body'">
    <div :id="state.id" class="panel-container">
      <div v-if="notDestroy && modal" v-show="state.visible && modal" class="panel-modal" :class="{ modal: modal }" @click="modalClick"></div>
      <transition :name="fade">
        <div v-if="notDestroy" v-show="state.visible" v-bind="$attrs" ref="refPanel" class="panel" :class="[customClass, $attrs['class'], theme || 'darkblue', state.maxmin, position]">
          <div class="panel-left-wrapper">
            <slot name="left"></slot>
          </div>
          <div class="panel-wrapper">
            <div class="panel-header" @mousedown="moveStart">
              <div v-if="title" class="panel-title">
                {{ title }}
              </div>
              <slot v-else name="header"></slot>

              <div v-if="showClose || maxMin" class="panel-close">
                <template v-if="maxMin">
                  <Icon  v-if="state.maxmin === 'normal' || state.maxmin === 'max'" icon="mdi:minus-thick" @click="() => toggleMaxMin('min')" title="最小化"></Icon>

                  <Icon v-if="state.maxmin === 'min' || state.maxmin === 'normal'" title="最大化" icon="mdi:fullscreen" @click="() => toggleMaxMin('max')"></Icon>

                  <Icon v-if="state.maxmin === 'min' || state.maxmin === 'max'" title="还原" icon="mdi:fullscreen-exit" @click="() => toggleMaxMin('normal')"></Icon>

                </template>
                <Icon v-if="showClose" title="关闭" @click="Close" icon="mdi:close-thick"></Icon>
              </div>
            </div>
            <div class="panel-content">
              <div class="panel-content-wrapper" :class="[fullContent ? 'full-content' : '']">
                <slot></slot>
              </div>
            </div>
          </div>
          <div class="panel-right-wrapper">
            <slot name="right"></slot>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, toRefs, reactive, onMounted, ref, onBeforeUnmount, watch, nextTick } from "vue"
import { v4 as uuidv4 } from "uuid"
import { client } from "../util"
import { Icon } from "@iconify/vue"

const props = withDefaults(
  defineProps<{
    telport?: string | HTMLElement
    customClass?: string | string[]
    modal?: boolean
    modalClose?: boolean
    showClose?: boolean
    maxMin?: boolean
    title?: string
    draggable?: boolean
    dragout?: boolean
    destroyByClose?: boolean
    fade?: string
    theme?: "dark" | "darkblue" | "light"
    position?: "bottom" | "right" | "left" | "top" | ""
    /** 是否不要内容区域的padding,true则padding=0 */
    fullContent?: boolean
    beforeClose?: () => void
    beforeOpen?: () => void
    afterOpen?: () => void
  }>(),
  {
    telport: "body",
    customClass: "",
    modal: false,
    modalClose: false,
    showClose: true,
    title: "",
    fade: "panel-fade",
    draggable: true,
    dragout: false,
    destroyByClose: false,
    beforeClose: undefined,
    beforeOpen: undefined,
    afterOpen: undefined,
    position: undefined
  }
)
const refPanel = ref<HTMLDivElement>()
const notDestroy = computed(() => {
  return props.destroyByClose ? state.visible : true
})
const state = reactive<{
  id: string
  visible: boolean
  isMoving: boolean
  lastRect: {
    left: number
    top: number
    width: number
    height: number
  }
  lastEvenPos: {
    x: number
    y: number
  }
  bundary: {
    top: number
    left: number
    right: number
    bottom: number
  }
  maxmin: "max" | "min" | "normal"
}>({
  id: uuidv4(),
  visible: false,
  isMoving: false,
  lastRect: {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  },
  lastEvenPos: {
    x: 0,
    y: 0
  },
  bundary: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  maxmin: "normal"
})
const modalClick = () => {
  if (props.modalClose) {
    Close()
  }
}
const Open = () => {
  props.beforeOpen && props.beforeOpen()
  state.visible = true
  nextTick(() => {
    props.afterOpen && props.afterOpen()
  })
}
const Close = async () => {
  state.isMoving = false
  props.beforeClose && (await props.beforeClose())
  state.visible = false
}
const Toggle = (open?: boolean) => {
  if (open === undefined) {
    if (state.visible) Close()
    else Open()
  } else {
    open ? Open() : Close()
  }
}
const toggleMaxMin = (type: "max" | "min" | "normal") => {
  state.maxmin = type
}
// const hightLightPanel = () => {
//   const telport = props.telport || 'body'
//   if (typeof telport === 'string') {
//     const parent = document.querySelector(telport)
//     const child = document.getElementById(state.id)
//     parent && child && parent.appendChild(child)
//   } else {
//     //
//   }
// }
/**
 * 拖拽开始前准备工作
 * @param event Event
 */
const moveStart = (event: MouseEvent) => {
  // hightLightPanel()
  if (!props.draggable || !refPanel.value) return
  // 更新边界信息
  refreshBundary()
  // 保存点击的初始位置
  rectSnapShot()
  saveOldEventPos(event)
  state.isMoving = true
}
/**
 * 拖拽或者缩放
 * @param event Event
 */
const move = (event: MouseEvent) => {
  if (!refPanel.value || !props.draggable) return
  // 计算鼠标运动后弹窗的位置
  let top = state.lastRect.top + (event.clientY - state.lastEvenPos.y)
  let left = state.lastRect.left + (event.clientX - state.lastEvenPos.x)

  // 判断边界

  // top  不能让头部超出上边界
  top < state.bundary.top && (top = state.bundary.top)

  // left
  left <= state.bundary.left && (left = state.bundary.left)

  // bottom
  top > state.bundary.bottom && (top = state.bundary.bottom)

  // right

  left > state.bundary.right && (left = state.bundary.right)

  refreshPanelPos(top, left)
  // // 更新边界信息
  // refreshBundary()
}

/**
 * 拖拽结束处理
 */
const moveEnd = () => {
  // 保存此时dom的位置信息
  rectSnapShot()
  state.isMoving = false
}
/**
 * 位置快照
 */
const rectSnapShot = () => {
  if (!refPanel.value) return
  state.lastRect = {
    top: refPanel.value?.offsetTop,
    left: refPanel.value?.offsetLeft,
    width: refPanel.value?.offsetWidth,
    height: refPanel.value?.offsetHeight
  }
}
/**
 * 移动快照，保存事件坐标
 */
const saveOldEventPos = (e: MouseEvent) => {
  state.lastEvenPos.x = e.clientX
  state.lastEvenPos.y = e.clientY
}
/**
 * 设置边界，底边和右边是根据document的宽高减弹窗宽高计算所得
 */
const refreshBundary = () => {
  if (!refPanel.value) return
  const docHeight = client("height", props.telport)
  const docWidth = client("width", props.telport)
  const layerWidth = client("width", refPanel.value)
  const layerHeight = client("height", refPanel.value)
  state.bundary.bottom = props.dragout ? docHeight : docHeight - layerHeight
  state.bundary.right = props.dragout ? docWidth : docWidth - layerWidth
}
/**
 * 更新DOM位置
 */
const refreshPanelPos = (top: number, left: number) => {
  if (!refPanel.value) return
  refPanel.value.style.left = left + "px"
  refPanel.value.style.top = top + "px"
}
const stopPropag = (e: any) => e.stopPropagation && e.stopPropagation()

const bindListeners = () => {
  document.addEventListener("mouseup", () => {
    if (!state.isMoving) return
    moveEnd()
  })
  document.addEventListener("mousemove", e => {
    if (!state.isMoving) return
    move(e)
  })
  // 处理拖拽卡顿
  document.addEventListener("click", stopPropag)
}
const unbindListeners = () => {
  document.removeEventListener("mouseup", moveEnd)
  document.removeEventListener("mousemove", move)
  document.removeEventListener("click", stopPropag)
}
watch(
  () => [refPanel.value?.offsetHeight, refPanel.value?.offsetWidth],
  () => {
    refreshBundary()
  }
)
onMounted(() => {
  refreshBundary()
  rectSnapShot()
  bindListeners()

  nextTick(() => {
    props.afterOpen && props.afterOpen()
  })
})
onBeforeUnmount(() => {
  unbindListeners()
})
defineExpose({
  Open,
  Close,
  Toggle,
  toggleMaxMin,
  ...toRefs(state)
})
</script>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<style scoped lang="scss">
/* 定义滚动条样式 圆角和阴影不需要则传入null */
@mixin scrollBar {
  overflow: hidden;

  &:hover {
    overflow: auto;
    overflow: overlay;
  }

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    border-radius: 50% 50%;
    background-color: transparent;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }

  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(83, 86, 94, 0.3);
    border: 1px solid rgba(83, 86, 94, 1);

    &:hover {
      background-color: rgba(83, 86, 94, 0.4);
      cursor: pointer;
    }
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
}

.panel {
  position: absolute;
  color: rgb(137, 168, 195);
  box-shadow: 0 0 3px 0 rgb(137, 168, 195);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  z-index: 1;
  transition: height 0.5s, width 0.5s;
  &.bottom {
    bottom: 0;
  }
  &.right {
    right: 0;
  }
  &.left {
    left: 0;
  }
  &.top {
    top: 0;
  }
  &.min {
    height: 40px;
  }
  &.max {
    height: 100%;
  }
  &.darkblue {
    box-shadow: 0 0 3px 0 rgba(21, 45, 68, 0.9);
    .panel-header {
      background-color: #1c2b3f;
    }
    .panel-content {
      background-color: rgba(21, 45, 68, 0.9);
    }
  }
  &-wrapper {
    // flex: 1;
    width: 100%;
  }
  &-modal {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &-anchor {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &-header {
    padding: 8px 12px;
    height: 40px;
    width: 100%;
    font-size: 16px;
    background-color: #fff;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    user-select: none;
    box-sizing: border-box;
  }

  &-close {
    margin-left: auto;
    display: inline-block;
    cursor: pointer;
    margin-top: 2px;
    .el-icon {
      margin-left: 12px;
    }
  }
  &-maxmin {
    display: inline-block;
    margin-left: 8px;
    cursor: pointer;
    margin-top: 2px;
  }
  &-content {
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: calc(100% - 40px);
    max-height: calc(100% - 40px);
    min-height: 0;
    padding: 0;
    @include scrollBar;
  }
  .panel-content-wrapper {
    box-sizing: border-box;
    overflow: scroll;
    overflow: overlay;
    padding: 12px;
    height: 100%;
    width: 100%;
    &.full-content {
      padding: 0;
      margin: 0;
    }
  }
}

// 控制显隐时的过渡
.panel-fade {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
}
.drgging {
  cursor: all-scroll;
}
</style>
