import { App, Plugin } from 'vue';
import ArcMap from './src/index.vue';

export const ArcMapPlugin: Plugin = {
  install(app: App) {
    app.component('my-arc-map', ArcMap);
  },
};

export {
  ArcMap,
};
