import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const icons = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",
  "share",
];

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),
  ...icons.map((v) => `i-ic-baseline-${v}`), // icon类名
];

const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: ["vue", "vue-router"],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    globals: {
      vue: "Vue",
    },
  },
};

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 添加UnoCSS插件
    Unocss({
      safelist,
      presets: [presetUno(), presetAttributify(), presetIcons()], // 图标预设
    }),
  ],
  // 库模式配置
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "AkiUI",
      fileName: "aki-ui", // 输出的包文件名
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
