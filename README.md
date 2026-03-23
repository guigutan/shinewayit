## Windows 系统安装 nvm
1、先卸载已安装的 Node.js  
2、下载：https://github.com/coreybutler/nvm-windows/releases  
3、安装路径非中文、空格。  
4、验证：nvm version  

## Windows 下使用 NVM 安装Nodejs
1、查看可安装的 Node 版本：nvm list available  
2、安装LTS最新稳定版：nvm install lts  
3、切换到最新 LTS 版本：nvm use lts  
4、验证：node -v 和 npm -v  


## 项目本地 安装最新版 Vite
1、进入目录：cd D:\www  
2、创建新项目：npm create vite@latest shinewayit  
3、安装依赖：cd shinewayit 和 npm install  
4、启动：npm run dev  
5、版本：npx vite -v  



## 适配 Vue3 + Vite + TS 的组件库Element Plus
1、安装：npm install element-plus --save
2、全局注册：
        // src/main.js (Vue3 + JS)
        import { createApp } from 'vue'
        import ElementPlus from 'element-plus' // 引入 Element Plus 核心库
        import 'element-plus/dist/index.css'   // 引入 Element Plus 样式
        import App from './App.vue'

        const app = createApp(App)
        app.use(ElementPlus) // 全局注册
        app.mount('#app')