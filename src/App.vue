<template>
  <div class="ms_gis-doc">
    <aside>
      <div class="ms_gis-doc-aside-title">
        ms_gis
      </div>
      <router-link class="ms_gis-doc-asside-item" v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from 'packages/list.json';
import { reactive } from 'vue'
const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.ms_gis-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
.ms_gis-doc-aside-title{
  color: #42b983;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}
.ms_gis-doc-asside-item{
  box-shadow: 0 2px 0 -1px;
  margin-bottom: 12px;
  &:hover{
    color:#34495e;
    box-shadow: 0 2px 0 -1px #34495e;
  }
}
</style>