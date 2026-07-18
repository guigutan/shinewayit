<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <section class="hero-card">
      <div>
        <span class="eyebrow">SHINEWAY OPERATIONS</span>
        <h2>让设备与数据管理更清晰</h2>
        <p>管理中心已接入现有 MariaDB 业务数据。机台管理是第一个模块，其他业务能力可在左侧导航中持续扩展。</p>
        <RouterLink class="button button--primary" to="/machines">进入机台管理</RouterLink>
      </div>
      <div class="hero-card__visual" aria-hidden="true"><span>01</span><strong>MODULE</strong><small>READY</small></div>
    </section>
    <section class="module-grid">
      <article class="module-card module-card--ready">
        <span class="module-card__index">01</span><div class="module-card__icon">▣</div>
        <h3>机台管理</h3><p>维护机台编号、区域、连接信息、排序及启用状态。</p>
        <RouterLink to="/machines">立即管理 →</RouterLink>
      </article>
      <article class="module-card">
        <span class="module-card__index">02</span><div class="module-card__icon">⌁</div>
        <h3>采集配置</h3><p>为后续采集参数、采集任务和连接状态管理预留。</p><span class="tag">规划中</span>
      </article>
      <article class="module-card">
        <span class="module-card__index">03</span><div class="module-card__icon">▥</div>
        <h3>报表中心</h3><p>为产量、效率、异常与设备利用率报表预留。</p><span class="tag">规划中</span>
      </article>
      <article class="module-card">
        <span class="module-card__index">04</span><div class="module-card__icon">♙</div>
        <h3>权限与审计</h3><p>为账号、角色、菜单权限和操作日志预留。</p><span class="tag">规划中</span>
      </article>
    </section>
  </div>
</template>
