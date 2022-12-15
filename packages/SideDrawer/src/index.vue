<template>
  <div class="layout-drawer" :class="['layout-drawer-' + (direction || 'ltr'), modelValue === true ? '' : 'collapsed', theme || 'darkblue', absolute ? 'absolute' : '']" :style="styleVars">
    <div v-if="title" class="right-drawer">
      <div class="right-drawer-title">
        <span>{{ title }}</span>
      </div>
      <div class="right-drawer-content overlay-y">
        <slot name="default"></slot>
      </div>
    </div>
    <slot v-else name="default"> </slot>
    <div v-if="hideBar !== true" class="control-fold-btn" :class="['control-fold-btn-' + (direction || 'ltr'), 'control-fold-btn-' + (barPosition || 'center')]" @click="handleCollapse">
      <Icon v-if="direction === 'rtl'" :icon="modelValue ? 'mdi:menu-right' : 'mdi:menu-left'"></Icon>
      <Icon v-if="direction === 'ltr'" :icon="modelValue ? 'mdi:menu-left' : 'mdi:menu-right'"></Icon>
      <Icon v-if="direction === 'ttb'" :icon="modelValue ? 'mdi:menu-up' : 'mdi:menu-down'"></Icon>
      <Icon v-if="direction === 'btt'" :icon="modelValue ? 'mdi:menu-down' : 'mdi:menu-up'"></Icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue"
import { Icon } from "@iconify/vue"

const emit = defineEmits<{ (e: "collapse", isCollapsed: boolean): any }>()
const props = defineProps<{
  /**
   * 隐藏边上的把手
   */
  hideBar?: boolean
  /** 默认从左向右 */
  direction?: "ltr" | "rtl" | "btt" | "ttb"
  /** 是否默认折叠 */
  modelValue: boolean
  theme?: "darkblue" | "dark" | "light"
  /** 按钮的位置，左右不支持left和right,同理，上下不支持top和bottom,默认center */
  barPosition?: "left" | "top" | "center" | "bottom" | "right"
  /** 仅对左右有效 */
  absolute?: boolean
  /** 设置抽屉宽度/高度，默认350,单位px, 对左右抽屉对应宽度，对上下抽屉则是对应高度 */
  width?: number
  title?: string
}>()
const styleVars = computed<any>(() => {
  return {
    "--width": (props.width || 350) + "px",
    "--collapsedWidth": -(props.width || 350) + "px"
  }
})
const handleCollapse = () => {
  emit("collapse", !props.modelValue)
}
</script>
<style lang="scss" scoped>
.dark {
  &.layout-drawer,
  .control-fold-btn {
    background-color: #272a3e;
    color: #fff;
  }
  .right-drawer-title {
    background-color: #333646;
  }
}
.darkblue {
  &.layout-drawer,
  .control-fold-btn {
    background-color: rgba(21, 45, 68, 0.9);
    color: #fff;
  }
  .right-drawer-title {
    background-color: #1f2d40;
  }
}
.light {
  &.layout-drawer,
  .control-fold-btn {
    background-color: rgba(255, 255, 255, 0.9);
    color: #333;
  }
}
.layout-drawer {
  box-shadow: 0 0 3px #6b719a;
  transition: all ease 0.5s;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  &:hover {
    box-shadow: 0 0 5px #4b6179;
  }
  &.layout-drawer-ltr,
  &.layout-drawer-rtl {
    position: relative;
    width: var(--width);
    height: 100%;

    &.absolute {
      position: absolute;
    }
  }

  &.layout-drawer-btt,
  &.layout-drawer-ttb {
    position: absolute;
    width: 100%;
    height: 350px;
  }
  &.layout-drawer-btt {
    bottom: 0;
    left: 0;
    border-radius: 5px 5px 0 0;
  }
  &.layout-drawer-ltr {
    border-radius: 0 5px 5px 0;
    top: 0;
    left: 0;
  }
  &.layout-drawer-rtl {
    border-radius: 5px 0 0 5px;
    right: 0;
    top: 0;
  }
  &.layout-drawer-ttb {
    top: 0;
    left: 0;
    border-radius: 0 0 5px 5px;
  }
  &.collapsed {
    &.layout-drawer-ltr {
      margin-left: var(--collapsedWidth);
    }
    &.layout-drawer-rtl {
      margin-right: var(--collapsedWidth);
    }
    &.layout-drawer-btt {
      margin-bottom: -350px;
    }
    &.layout-drawer-ttb {
      margin-top: -350px;
    }
  }
}
.right-drawer {
  width: 100%;
  height: 100%;
}
.right-drawer-title {
  background-color: #ddd;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.right-drawer-content {
  height: calc(100% - 40px);
  width: 100%;
  padding: 15px;
}
.control-fold-btn {
  position: absolute;

  z-index: 1;
  margin: 0 0;
  cursor: pointer;
  background-color: rgb(226, 227, 227);
  .fold-icon {
    font-size: 14px;
  }
  &.control-fold-btn-ltr,
  &.control-fold-btn-rtl {
    width: 14px;
    height: 100px;
    padding: 0;
    line-height: 100px;
    &.control-fold-btn-center {
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    &.control-fold-btn-top {
      top: 0;
      margin-top: 15px;
    }
    &.control-fold-btn-bottom {
      bottom: 0;
      margin-bottom: 15px;
    }
  }
  &.control-fold-btn-ltr {
    border-left: none;
    right: -14px;
    border-radius: 0 50px 50px 0;
    box-shadow: 1px 0 1px #4b6179;
    &:hover {
      box-shadow: 2px 0 3px #4b6179;
    }
  }
  &.control-fold-btn-rtl {
    border-right: none;
    left: -14px;
    border-radius: 50px 0 0 50px;
    box-shadow: -1px 0 1px #4b6179;
    &:hover {
      box-shadow: -2px 0 3px #4b6179;
    }
  }
  &.control-fold-btn-btt,
  &.control-fold-btn-ttb {
    height: 14px;
    width: 100px;
    padding: 0;
    text-align: center;
    line-height: 14px;
    &.control-fold-btn-center {
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    &.control-fold-btn-left {
      left: 0;
      margin-left: 15px;
    }
    &.control-fold-btn-right {
      right: 0;
      margin-right: 15px;
    }
  }
  &.control-fold-btn-btt {
    top: -14px;
    border-radius: 50px 50px 0 0;
    box-shadow: 0 -1px 1px #4b6179;
    &:hover {
      box-shadow: 0 -2px 3px #4b6179;
    }
  }
  &.control-fold-btn-ttb {
    bottom: -14px;
    border-radius: 0 0 50px 50px;
    box-shadow: 0 1px 1px #4b6179;
    &:hover {
      box-shadow: 0 2px 3px #4b6179;
    }
  }
  &.control-fold-btn-center {
    text-align: ccenter;
    vertical-align: center;
  }
}
</style>
