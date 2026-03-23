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