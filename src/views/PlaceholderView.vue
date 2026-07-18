<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <section class="empty-state card">
    <div class="empty-state__icon">＋</div><span class="eyebrow">RESERVED MODULE</span>
    <h2>{{ route.meta.title }}</h2><p>页面入口和整体布局已经预留，后续可以在这里继续增加对应的业务功能。</p>
  </section>
</template>
