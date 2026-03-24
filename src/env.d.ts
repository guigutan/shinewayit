// src/env.d.ts
/// <reference types="vite/client" />

// 核心：声明所有 .vue 文件的类型，让 TS 识别
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}