/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { ArcMapPlugin } from './ArcMap';

const ms_gisPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    ArcMapPlugin.install?.(app);
  },
};

export default ms_gisPlugin;

export * from './Button'
export * from './ArcMap'