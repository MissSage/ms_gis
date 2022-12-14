/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { ArcMapPlugin } from './ArcMap';
import { DrawerBoxPlugin } from './DrawerBox';
import { SideDrawerPlugin } from './SideDrawer';
import { PanelPlugin } from './Panel';

const MSPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    ArcMapPlugin.install?.(app);
    DrawerBoxPlugin.install?.(app);
    SideDrawerPlugin.install?.(app);
    PanelPlugin.install?.(app);
  },
};

export default MSPlugin;

export * from './Button'
export * from './ArcMap'
export * from './DrawerBox'
export * from './SideDrawer'
export * from './Panel'