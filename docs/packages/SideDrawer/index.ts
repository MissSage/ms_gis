import { App, Plugin } from 'vue';
import SideDrawer from './src/index.vue';

export const SideDrawerPlugin: Plugin = {
  install(app: App) {
    app.component('ms-side-drawer', SideDrawer);
  },
};

export {
  SideDrawer,
};
