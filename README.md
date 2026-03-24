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
2、全局注册（src/main.js）：    
                import { createApp } from 'vue' 
                import ElementPlus from 'element-plus' // 引入 Element Plus 核心库      
                import 'element-plus/dist/index.css'   // 引入 Element Plus 样式        
                import App from './App.vue'     
                const app = createApp(App)      
                app.use(ElementPlus) // 全局注册        
                app.mount('#app')       
        
## 安装 Axios（请求库）
1、最新稳定版：npm install axios --save
2、配置 Axios（请求封装）
                创建src/utils/request.js封装 Axios：
                // src/utils/request.js
                import axios from 'axios';
                import { useUserStore } from '@/store/user';
                import router from '@/router';

                // 创建axios实例
                const request = axios.create({
                baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api', // 接口基础地址（Vite环境变量）
                timeout: 5000
                });

                // 请求拦截器：携带Token（可选，若用JWT）
                request.interceptors.request.use(
                (config) => {
                const userStore = useUserStore();
                if (userStore.userInfo?.token) { // 若有token，添加到请求头
                config.headers.Authorization = `Bearer ${userStore.userInfo.token}`;
                }
                return config;
                },
                (error) => Promise.reject(error)
                );

                // 响应拦截器：统一处理错误
                request.interceptors.response.use(
                (response) => response.data, // 直接返回响应体data
                (error) => {
                // 401未授权：跳回登录页
                if (error.response?.status === 401) {
                const userStore = useUserStore();
                userStore.clearUserInfo();
                router.push('/login');
                alert('登录状态失效，请重新登录');
                }
                return Promise.reject(error);
                }
                );

                export default request;

3、环境变量配置
在项目根目录创建.env.development（开发环境）：
VITE_API_BASE_URL = http://192.168.99.32:3000/api


## 安装 Pinia（状态管理）
1、最新稳定版：npm install pinia --save
2、在src/main.js中注册 Pinia，并创建用户信息仓库：
                // src/main.js
                import { createApp } from 'vue';
                import { createPinia } from 'pinia'; // 导入Pinia
                import App from './App.vue';
                import router from './router';

                const app = createApp(App);
                app.use(router);
                app.use(createPinia()); // 注册Pinia
                app.mount('#app');
3、创建 Pinia 仓库（src/store/user.js），管理用户信息：
                // src/store/user.js
                import { defineStore } from 'pinia';

                export const useUserStore = defineStore('user', {
                // 状态：存储用户信息
                state: () => ({
                userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || null
                }),
                // 操作：修改用户信息
                actions: {
                // 设置用户信息（登录成功调用）
                setUserInfo(info) {
                this.userInfo = info;
                sessionStorage.setItem('userInfo', JSON.stringify(info));
                },
                // 清空用户信息（退出登录调用）
                clearUserInfo() {
                this.userInfo = null;
                sessionStorage.removeItem('userInfo');
                }
                }
                });

## 安装 Vue Router（路由库）
1、最新稳定版：npm install vue-router --save
2、（Vue3 适配 v4.x，Vue2 适配 v3.x，npm 会自动匹配兼容版本）
3、在项目src目录下创建router/index.js，并在入口文件注册：
                // src/router/index.js
                import { createRouter, createWebHistory } from 'vue-router';
                // 导入你的页面组件（如登录、首页）
                import Login from '@/views/Login.vue';
                import Home from '@/views/Home.vue';

                // 定义路由规则
                const routes = [
                { path: '/', redirect: '/login' },
                { path: '/login', component: Login },
                { path: '/home', component: Home, meta: { requireAuth: true } }
                ];

                // 创建路由实例
                const router = createRouter({
                history: createWebHistory(import.meta.env.BASE_URL), // Vite 环境变量，Webpack 用 process.env.BASE_URL
                routes
                });

                // 导出路由实例
                export default router;
4、然后在src/main.js（入口文件）注册路由：
                // src/main.js
                import { createApp } from 'vue';
                import App from './App.vue';
                import router from './router'; // 导入路由

                const app = createApp(App);
                app.use(router); // 注册路由
                app.mount('#app');

## 识别vue映射scr
1、在tsconfig.app.json中的 "compilerOptions"对象中加入对象值：
    "baseUrl": ".",              // 基准目录（项目根目录）  
    "paths": {"@/*": ["src/*"]},  // 将 @/xxx 映射到 src/xxx    

