import { resolve } from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Markdown from "vite-plugin-md"
import UnpluginComponents from "unplugin-vue-components/vite"
import IconResolver from "unplugin-icons/resolver"
import Icons from "unplugin-icons/vite"

// 文档: https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
      packages: resolve(__dirname, "../packages")
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown(),
    UnpluginComponents({
      resolvers: [
        IconResolver({
          prefix: "icon",
          // 注册可以使用集合
          enabledCollections: ["ep", "ic", "material-symbols", "mdi", "gis"], // ep即是element-plus对应的icon集合
          // 注册自定义本地图标集合名称
          customCollections: ["svgs"]
        })
      ]
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true
    })
  ]
})
