//src\api\directus.ts

import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'

const TOKEN_KEY = 'directus_access_token'


// 自动检测：内网可达 → 用内网IP；否则 → 用公网IP
async function getBestBaseURL() {
  const INTERNAL_URL = 'http://192.168.100.61:7001/';
  
  // const EXTERNAL_URL = 'http://61.142.21.100:7001/';
  const EXTERNAL_URL = 'https://directus.shinewaygroup.com:6001/';

  try {
    // 尝试请求内网接口（超时极短，不卡页面）
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 300); // 300ms 超时

    await fetch(INTERNAL_URL + 'server/ping', {
      signal: controller.signal,
      mode: 'no-cors'
    });

    clearTimeout(id);
    console.log('✅ 内网连通，使用局域网接口');
    return INTERNAL_URL;
  } catch (e) {
    console.log('❌ 内网不可达，已改用公网接口');
    return EXTERNAL_URL;
  }
}


// 创建 axios 实例
const directusApi: AxiosInstance = axios.create({
  baseURL: await getBestBaseURL(), // 自动选择最优地址
  timeout: 10000,
})

// 请求拦截器：自动添加 token
directusApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器：处理 401 未授权
directusApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 清除本地 token
      localStorage.removeItem(TOKEN_KEY)
      // 触发全局事件，通知 store 清除状态
      window.dispatchEvent(new CustomEvent('auth:unauthorized'))
    }
    return Promise.reject(error)
  }
)

export default directusApi