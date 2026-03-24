// src/stores/user.ts
import { defineStore } from 'pinia';

// 第一步：声明用户信息的类型接口（规范数据结构）
interface UserInfo {
  id?: number;
  username?: string;
  nickname?: string;
  role?: string;
  // 可根据实际返回的用户信息扩展字段
}

export const useUserStore = defineStore('user', {
  // 状态：存储用户信息（明确类型）
  state: (): { userInfo: UserInfo | null } => ({
    // 修复：先判断是否为null，再执行JSON.parse
    userInfo: sessionStorage.getItem('userInfo') 
      ? JSON.parse(sessionStorage.getItem('userInfo')!) 
      : null
  }),
  // 操作：修改用户信息（给参数声明类型）
  actions: {
    // 设置用户信息（登录成功调用）
    setUserInfo(info: UserInfo): void {
      this.userInfo = info;
      sessionStorage.setItem('userInfo', JSON.stringify(info));
    },
    // 清空用户信息（退出登录调用）
    clearUserInfo(): void {
      this.userInfo = null;
      sessionStorage.removeItem('userInfo');
    }
  }
});