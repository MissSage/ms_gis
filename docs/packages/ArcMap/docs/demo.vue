<template>
  <div class="map-wrapper">
    <ms-arc-map ref="refMap" :basemap="'satellite'" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
const refMap = ref<any>();
onMounted(() => {
  refMap.value?.init();
});
</script>
<style>
.map-wrapper {
  width: 1000px;
  height: 600px;
}
</style>
