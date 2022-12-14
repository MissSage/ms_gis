<template>
  <div class="container">
    <DrawerBox :right-drawer-title="'aaa'" :right-drawer="true" :right-drawer-absolute="true" :theme="'darkblue'">
    </DrawerBox>
  </div>
</template>
<script lang="ts" setup>
import { DrawerBox } from ".."
</script>
<style lang="scss" scoped>
.container {
  height: 800px;
  width: 100%;
}
.drawer-main{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
