<template>
  <div>
    <button @click="openPanel">打开弹窗</button>
    <Panel v-if="isMounted" ref="refPanel" class="ms-panel" title="测试" :show-close="true" :max-min="true" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { Panel } from ".."

const refPanel = ref<any>()
const isMounted = ref<boolean>(false)
const openPanel = () => {
  refPanel.value?.Open()
}
onMounted(() => {
  isMounted.value = true
})
</script>
<style>
.ms-panel {
  width: 400px;
  height: 350px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
