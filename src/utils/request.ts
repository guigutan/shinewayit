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