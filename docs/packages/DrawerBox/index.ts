import { App, Plugin } from 'vue';
import DrawerBox from './src/index.vue';

export const DrawerBoxPlugin: Plugin = {
  install(app: App) {
    app.component('ms-drawer-box', DrawerBox);
  },
};

export {
  DrawerBox,
};
