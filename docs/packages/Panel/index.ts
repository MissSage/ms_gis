import { App, Plugin } from 'vue';
import Panel from './src/index.vue';

export const PanelPlugin: Plugin = {
  install(app: App) {
    app.component('ms-panel', Panel);
  },
};

export {
  Panel,
};
