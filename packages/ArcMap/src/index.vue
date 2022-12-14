<template>
  <div id="viewDiv" ref="refMap" class="viewDiv"></div>
</template>

<script lang="ts" setup>
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { ref } from "vue";
const props = defineProps<{
  basemap?:
    | "satellite"
    | "hybrid"
    | "terrain"
    | "oceans"
    | "osm"
    | "dark-gray-vector"
    | "gray-vector"
    | "streets-vector"
    | "topo-vector"
    | "streets-night-vector"
    | "streets-relief-vector"
    | "streets-navigation-vector";
}>();
const refMap = ref<HTMLDivElement>();
const init:(options?: { center?: number[]; zoom?: number }) => __esri.MapView = (options?: { center?: number[]; zoom?: number }) => {
  const map = new Map({
    // satellite", "hybrid", "terrain", "oceans", "osm", "dark-gray-vector", "gray-vector", "streets-vector", "topo-vector", "streets-night-vector", "streets-relief-vector", "streets-navigation-vector"
    basemap: props.basemap || "satellite",
  });
  const view = new MapView({
    container: refMap.value,
    map,
    center: options?.center || [117.09, 30.64],
    zoom: options?.zoom || 5,
    highlightOptions: {
      fillOpacity: 0,
      haloOpacity: 0.7,
    },
  });
  // 清除默认微件
  view.ui.remove("attribution");
  view.ui.remove("zoom");
  view.ui.padding = {
    bottom: 15,
    left: 15,
    right: 15,
    top: 15,
  };
  return view;
};
defineExpose<{
  /**
   * 初始化地图
   * @param options {center: [117.09, 30.64],zoom: 5}
   */
  init: (options?: { center?: number[]; zoom?: number }) => __esri.MapView;
}>({
  init,
});
</script>

<style lang="scss" scoped>
@import "https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/dark/main.css";

.viewDiv {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
.esri-input,
.esri-widget--button,
.esri-widget,
.esri-widget--button,
.esri-select,
.esri-menu,
.esri-popup__pointer-direction,
.esri-menu__list-item {
  background-color: rgba(21, 45, 68, 0.9);
  &:hover {
    background-color: rgba(21, 45, 68, 1);
  }
  &:focus-visible {
    outline: none;
  }
}

.esri-basemap-gallery__item:hover,
.esri-basemap-gallery__item--selected,
.esri-basemap-gallery__item.esri-basemap-gallery__item--selected:hover,
.esri-basemap-gallery__item.esri-basemap-gallery__item--selected:focus {
  background-color: #00203a;
}
.esri-widget--button {
  &.esri-compass,
  &.esri-expand,
  &.esri-home {
    background-color: rgba(21, 45, 68, 0.9);
    &:hover {
      background-color: rgba(21, 45, 68, 1);
    }
    &:focus-visible {
      outline: none;
    }
  }
}
.esri-legend,
.esri-layer-list__item,
.esri-layer-list__item-actions-menu-item,
.esri-coordinate-conversion__select-row,
.esri-coordinate-conversion__button {
  color: #adadad;
  background-color: #00203a;
  &:hover {
    color: #fff;
    background-color: #00203a;
  }
}
.esri-coordinate-conversion__row {
  .esri-select {
    background-color: #00203a;
  }
}
.esri-coordinate-conversion__heading {
  background-color: rgba(21, 45, 68, 1);
  .esri-coordinate-conversion__back-button {
    &,
    &:hover {
      background-color: transparent;
    }
  }
}
.esri-coordinate-conversion__display {
  &,
  &:hover {
    background-color: transparent;
  }
}
.esri-widget--button {
  &,
  &:hover {
    background-color: transparent;
  }
}
// .esri-coordinate-conversion__tools{

// }

.esri-popup__header-container--button,
.esri-popup__button,
.esri-widget.esri-feature,
.esri-widget.esri-search-result-renderer {
  &,
  &:hover {
    background-color: transparent;
  }
}
html {
  body {
    --esri-calcite-theme-name: "light";
  }

  &.dark {
    body {
      --esri-calcite-theme-name: "dark";
    }
  }
}
.esri-view .esri-view-surface--inset-outline:focus::after {
  outline: none;
}
.esri-print__layout-tab {
  &:hover,
  &:focus {
    background-color: rgba(21, 45, 68, 0.9);
  }
}
.esri-print__layout-tab[aria-selected="true"] {
  background-color: rgba(21, 45, 68, 0.9);
  border-bottom-color: rgba(21, 45, 68, 0.9);
  &:hover {
    background-color: rgba(21, 45, 68, 0.9);
  }
}
.esri-print__advanced-options-section {
  background-color: transparent;
}
</style>
