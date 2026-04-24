// src/config/menu.ts
import type { Component } from 'vue'
import FuncMap from '../views/panels/FuncMap.vue'
import MachineInfo from '../views/panels/MachineInfo.vue'
import MachineReport from '../views/panels/MachineReport.vue'
import MachineBrowser from '../views/panels/MachineBrowser.vue'
import HrBusiness from '../views/panels/HrBusiness.vue'
import HrAttendance from '../views/panels/HrAttendance.vue'
import HrClock from '../views/panels/HrClock.vue'
import HrInfo from '../views/panels/HrInfo.vue'
import HrLeave from '../views/panels/HrLeave.vue'
import HrOvertime from '../views/panels/HrOvertime.vue'
import HrPunch from '../views/panels/HrPunch.vue'
import HrPurchase from '../views/panels/HrPurchase.vue'
import MyInfo from '../views/panels/MyInfo.vue'
import MyLogout from '../views/panels/MyLogout.vue'
import MyPassword from '../views/panels/MyPassword.vue'
import ProdEngineering from '../views/panels/ProdEngineering.vue'
import ProdSample from '../views/panels/ProdSample.vue'
import WebAbout from '../views/panels/WebAbout.vue'
import WebHome from '../views/panels/WebHome.vue'
import WebPublish from '../views/panels/WebPublish.vue'



export interface MenuItem {
  key: string
  label: string
  icon: string
  component: Component
  children?: MenuItem[]
}


export const menuItems: MenuItem[] = [

    //--------------------------------------------------------------------------------------------
    { key: 'func-map', label: '功能地图', icon: '🗺️', component: FuncMap },
    //--------------------------------------------------------------------------------------------
    { key: 'machine', label: '机台数采', icon: '📲', component: MachineInfo,
        children: [
        { key: 'machine-info', label: '机台信息维护', icon: '📟', component: MachineInfo },
        { key: 'machine-report', label: '机台产量报表', icon: '📊', component: MachineReport },
        { key: 'machine-browser', label: '数采看板预览', icon: '🧮', component: MachineBrowser }
        ]
    },
    //--------------------------------------------------------------------------------------------
    { key: 'hr', label: '人事相关', icon: '👨‍⚕️', component: HrInfo,
        children: [
        { key: 'hr-info', label: '人事资料维护', icon: '👨‍👩‍👧‍👦', component: HrInfo },
        { key: 'hr-clock', label: '打卡记录查询', icon: '⏰', component: HrClock },
        { key: 'hr-overtime', label: '加班记录(多人)', icon: '🛬', component: HrOvertime },
        { key: 'hr-leave', label: '请假记录(多人)', icon: '🈸', component: HrLeave },
        { key: 'hr-punch', label: '签卡单记录', icon: '✒️', component: HrPunch },
        { key: 'hr-business', label: '出差单记录', icon: '💼', component: HrBusiness },
        { key: 'hr-purchase', label: '请购单记录', icon: '🛒', component: HrPurchase },
        { key: 'hr-attendance', label: '一键生成考勤', icon: '🗓️', component: HrAttendance }
        ]
    },
    //--------------------------------------------------------------------------------------------
    { key: 'prod', label: '生产相关', icon: '💹', component: ProdEngineering,
        children: [
        { key: 'prod-engineering ', label: '工程文件管控系统', icon: '📚', component: ProdEngineering },
        { key: 'prod-sample ', label: '样品管理系统', icon: '🧪', component: ProdSample }       
        ]
    },
    //--------------------------------------------------------------------------------------------
    { key: 'web', label: '官网后台', icon: '🛠️', component: WebHome,
        children: [
        { key: 'web-home', label: '首页设计', icon: '🧰', component: WebHome },
        { key: 'web-publish', label: '文章发布', icon: '🧬', component: WebPublish },
        { key: 'web-about', label: '关于我们设计', icon: '🚿', component: WebAbout }
        ]
    },
    //--------------------------------------------------------------------------------------------
    { key: 'my', label: '个人中心', icon: '👕', component: MyInfo,
        children: [
        { key: 'my-info', label: '个人信息设置', icon: '📋', component: MyInfo },
        { key: 'my-password', label: '修改密码', icon: '🔐', component: MyPassword },
        { key: 'my-logout', label: '退出登录', icon: '🗑️', component: MyLogout }
        ]
    },
    //--------------------------------------------------------------------------------------------
]
