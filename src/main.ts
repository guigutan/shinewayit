import { createApp } from 'vue'
import ElementPlus from 'element-plus' // 引入 Element Plus 核心库
import 'element-plus/dist/index.css'   // 引入 Element Plus 样式
 import { createPinia } from 'pinia'; // 导入Pinia
 import router from './router'; // 导入路由
import App from './App.vue'



//createApp(App).mount('#app') 改为以下：
const app = createApp(App)
app.use(ElementPlus)//全局注册 Element Plus
app.use(createPinia()); // 注册Pinia
 app.use(router); // 注册路由
app.mount('#app')