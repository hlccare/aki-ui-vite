import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocssConfig from "./config/unocss";
import { UserConfig } from "vite";

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

export const config: UserConfig = {
  plugins: [
    vue(),
    // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 添加UnoCSS插件
    unocssConfig(),
  ],
  // 库模式配置
  build: {
    rollupOptions,
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独的sourcemap
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "AkiUI",
      fileName: "aki-ui", // 输出的包文件名
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
};

export default defineConfig(config);
