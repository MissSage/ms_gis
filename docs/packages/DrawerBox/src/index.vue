<template>
  <div class="layout-drawerbox-container" :class="[theme]">
    <SideDrawer v-if="leftDrawer && !leftDrawerAbsolute" v-model="state.leftDrawerOpen" :direction="'ltr'" :theme="theme" :width="leftDrawerWidth" :absolute="leftDrawerAbsolute" :bar-position="leftDrawerBarPosition" :title="leftDrawerTitle" @collapse="val => toggleDrawer('ltr', val)">
      <template #default>
        <slot name="left"> </slot>
      </template>
    </SideDrawer>
    <div class="layout-drawerbox-content" :class="[computedContentWidthClass]">
      <slot></slot>
    </div>
    <SideDrawer v-if="leftDrawer && leftDrawerAbsolute" v-model="state.leftDrawerOpen" :direction="'ltr'" :theme="theme" :width="leftDrawerWidth" :absolute="leftDrawerAbsolute" :bar-position="leftDrawerBarPosition" :title="leftDrawerTitle" @collapse="val => toggleDrawer('ltr', val)">
      <template #default>
        <slot name="left"> </slot>
      </template>
    </SideDrawer>
    <SideDrawer v-if="rightDrawer" v-model="state.rightDrawerOpen" :direction="'rtl'" :theme="theme" :width="rightDrawerWidth" :absolute="rightDrawerAbsolute" :bar-position="rightDrawerBarPosition" :title="rightDrawerTitle" @collapse="val => toggleDrawer('rtl', val)">
      <template #default>
        <slot name="right"></slot>
      </template>
    </SideDrawer>
    <SideDrawer v-if="topDrawer" v-model="state.topDrawerOpen" direction="ttb" :theme="theme" :width="topDrawerHeight" :bar-position="topDrawerBarPosition" :title="topDrawerTitle" @collapse="val => toggleDrawer('ttb', val)">
      <slot name="top"></slot>
    </SideDrawer>
    <SideDrawer v-if="bottomDrawer" v-model="state.bottomDrawerOpen" direction="btt" :theme="theme" :width="bottomDrawerHeight" :bar-position="bottomDrawerBarPosition" :title="bottomDrawerTitle" @collapse="val => toggleDrawer('btt', val)">
      <slot name="bottom"></slot>
    </SideDrawer>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { SideDrawer } from "../../SideDrawer"

const props = defineProps<{
  /** 显示左侧抽屉 */
  leftDrawer?: boolean
  leftDrawerWidth?: number
  leftDrawerAbsolute?: boolean
  /** 左侧抽屉的按钮位置 */
  leftDrawerBarPosition?: "top" | "center" | "bottom"
  leftDrawerTitle?: string
  /** 显示右侧抽屉 */
  rightDrawer?: boolean
  rightDrawerWidth?: number
  rightDrawerAbsolute?: boolean
  /** 右侧抽屉的按钮位置 */
  rightDrawerBarPosition?: "top" | "center" | "bottom"
  rightDrawerTitle?: string
  /** 显示下侧抽屉 */
  bottomDrawer?: boolean
  bottomDrawerHeight?: number
  /** 下侧抽屉的按钮位置 */
  bottomDrawerBarPosition?: "left" | "center" | "right"
  bottomDrawerTitle?: string
  /** 显示上侧抽屉 */
  topDrawer?: boolean
  topDrawerHeight?: number
  /** 上侧抽屉的按钮位置 */
  topDrawerBarPosition?: "left" | "center" | "right"
  topDrawerTitle?: string
  /**
   * 主题设置
   */
  theme?: "darkblue" | "dark" | "light"
}>()
const state = reactive<{
  leftDrawerOpen: boolean
  rightDrawerOpen: boolean
  bottomDrawerOpen: boolean
  topDrawerOpen: boolean
}>({
  leftDrawerOpen: false,
  rightDrawerOpen: false,
  bottomDrawerOpen: false,
  topDrawerOpen: false
})
const computedContentWidthClass = computed(() => {
  let count = 0
  props.leftDrawer && !props.leftDrawerAbsolute && state.leftDrawerOpen && count++
  props.rightDrawer && !props.rightDrawerAbsolute && state.rightDrawerOpen && count++
  return count === 0 ? "" : "layout-drawerbox-content-v-" + count
})
const toggleDrawer = (drawer: "rtl" | "ltr" | "btt" | "ttb", open?: boolean):void => {
  switch (drawer) {
    case "rtl":
      state.rightDrawerOpen = open === undefined ? !state.rightDrawerOpen : open
      break
    case "ltr":
      state.leftDrawerOpen = open === undefined ? !state.leftDrawerOpen : open
      break
    case "btt":
      state.bottomDrawerOpen = open === undefined ? !state.bottomDrawerOpen : open
      break
    case "ttb":
      state.topDrawerOpen = open === undefined ? !state.topDrawerOpen : open
      break
    default:
      break
  }
}
defineExpose({
  toggleDrawer
})
</script>

<style lang="scss" scoped>
.layout-drawerbox-container {
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 1;
  position: relative;
  overflow: hidden;
}
.layout-drawerbox-content {
  width: 100%;
  height: 100%;
  transition: width ease 0.5s;
  padding: 0;
  overflow: hidden;
  background-color: black;
  z-index: 0;
  &:hover {
    overflow-y: auto;
    overflow-y: overlay;
  }
  &.layout-drawerbox-content-v-1 {
    width: calc(100% - 350px);
  }
  &.layout-drawerbox-content-v-2 {
    width: calc(100% - 700px);
  }
}
</style>
