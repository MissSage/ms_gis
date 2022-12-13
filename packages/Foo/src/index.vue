<template>
  <div class="my-foo" @click="$emit('click')">
    我是测试组件组件
  </div>
</template>

<script lang="ts" setup>

defineEmits(['click'])
</script>

<style scoped>
.my-foo {
  
}
</style>