// src\api\apiShinewayScada.ts
import axios from 'axios';

// 自动检测：内网可达 → 用内网IP；否则 → 用公网IP
async function getBestBaseURL() {
  const INTERNAL_URL = 'http://192.168.100.61:7002/';
  const EXTERNAL_URL = 'https://directus.shinewaygroup.com:6002/';

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 300);

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

// 创建 axios 实例的函数
let apiInstance: any = null;

export async function getApiShinewayScada() {
  if (!apiInstance) {
    const baseURL = await getBestBaseURL();
    apiInstance = axios.create({
      baseURL: baseURL,
      headers: {
        'Authorization': 'Bearer owMPJlpDFrEYnFrLy5Wag3JLk-X98upj',
        //'Authorization': 'Bearer 0FjWJVIqasEtwEapFx1owqe0R119WUgY', 仅查询权限
        'Content-Type': 'application/json',
      },
      timeout: 1000,
    });
  }
  return apiInstance;
}