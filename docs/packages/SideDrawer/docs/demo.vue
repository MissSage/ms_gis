<template>
  <div class="sidedrawer-box">
    <SideDrawer v-model="collapsed" :direction="'ltr'" />
  </div>
</template>
<script lang="ts" setup>import { ref } from 'vue'
import { SideDrawer } from '..'

const collapsed = ref<boolean>(false)
</script>
<style lang="scss" scoped>
.sidedrawer-box{
  width: 1000px;
  height: 500px;
  position: relative;
  overflow: hidden;
}
</style>