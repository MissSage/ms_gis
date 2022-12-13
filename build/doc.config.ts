import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/ms_gis/',
  build: {
    outDir: 'docs',
  },
});
