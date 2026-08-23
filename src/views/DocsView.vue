<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import featureList from '@/docs/功能清单.md?raw'
import tutorial from '@/docs/使用教程.md?raw'

type DocumentKey = 'features' | 'tutorial'
interface TocItem { id: string; text: string; level: number }

const documents: Array<{ key: DocumentKey; title: string; description: string; source: string }> = [
  { key: 'features', title: '功能清单', description: '系统范围、模块能力、数据来源与计算规则', source: featureList },
  { key: 'tutorial', title: '使用教程', description: '操作步骤、业务原理、使用建议与故障排查', source: tutorial },
]
const route = useRoute()
const router = useRouter()
const article = ref<HTMLElement | null>(null)
const toc = ref<TocItem[]>([])
const activeKey = computed<DocumentKey>(() => route.query.doc === 'features' ? 'features' : 'tutorial')
const current = computed(() => documents.find(item => item.key === activeKey.value) ?? documents[1]!)
const html = computed(() => marked.parse(current.value.source, { gfm: true }) as string)

const buildToc = async (): Promise<void> => {
  await nextTick()
  if (!article.value) return
  const headings = [...article.value.querySelectorAll<HTMLElement>('h2, h3')]
  toc.value = headings.map((heading, index) => {
    const id = `section-${activeKey.value}-${index + 1}`
    heading.id = id
    return { id, text: heading.textContent?.trim() || `章节 ${index + 1}`, level: Number(heading.tagName.slice(1)) }
  })
  article.value.scrollTop = 0
}
const selectDocument = async (key: DocumentKey): Promise<void> => {
  await router.replace({ path: '/docs', query: { doc: key } })
}
const scrollTo = (id: string): void => {
  article.value?.querySelector<HTMLElement>(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

watch(html, () => void buildToc(), { immediate: true })
</script>

<template>
  <div class="docs-page">
    <header class="docs-heading">
      <div><span class="eyebrow">KNOWLEDGE BASE</span><h2>帮助文档</h2><p>系统功能、操作方法与业务计算原理。</p></div>
      <nav class="document-tabs" aria-label="文档选择">
        <button v-for="item in documents" :key="item.key" :class="{ active: item.key === activeKey }" @click="selectDocument(item.key)">
          <strong>{{ item.title }}</strong><span>{{ item.description }}</span>
        </button>
      </nav>
    </header>
    <div class="docs-layout">
      <article ref="article" class="card document-panel">
        <div class="document-body" v-html="html" />
      </article>
      <aside class="card docs-toc">
        <header><span>当前文档</span><strong>{{ current.title }}</strong></header>
        <nav aria-label="章节目录">
          <button v-for="item in toc" :key="item.id" :class="`toc-level-${item.level}`" @click="scrollTo(item.id)">{{ item.text }}</button>
        </nav>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.docs-page{display:grid;gap:18px}.docs-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;padding:4px}.docs-heading h2{margin:5px 0 4px;font-size:25px}.docs-heading p{margin:0;color:#71817c;font-size:12px}.document-tabs{display:grid;grid-template-columns:repeat(2,minmax(210px,1fr));gap:8px}.document-tabs button{display:grid;gap:3px;padding:10px 13px;border:1px solid #d8e2df;border-radius:8px;background:#fff;color:#53635e;text-align:left;cursor:pointer}.document-tabs strong{font-size:13px}.document-tabs span{font-size:10px;color:#82908c}.document-tabs button.active{border-color:#26796c;background:#eaf5f2;color:#185e54}.docs-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:18px;align-items:start}.document-panel{height:calc(100vh - 190px);min-height:560px;overflow:auto;scroll-behavior:smooth}.document-body{max-width:920px;margin:0 auto;padding:38px 48px 70px;color:#293b36;font-size:14px;line-height:1.8}.docs-toc{position:sticky;top:98px;max-height:calc(100vh - 122px);overflow:hidden}.docs-toc header{display:grid;gap:3px;padding:18px 18px 12px;border-bottom:1px solid #e2e9e7}.docs-toc header span{color:#82908c;font-size:10px}.docs-toc header strong{font-size:14px}.docs-toc nav{max-height:calc(100vh - 200px);padding:10px;overflow:auto}.docs-toc button{display:block;width:100%;padding:7px 8px;border:0;border-left:2px solid transparent;background:transparent;color:#5d6e68;font-size:11px;line-height:1.4;text-align:left;cursor:pointer}.docs-toc button:hover{border-left-color:#3b8d80;background:#edf6f3;color:#1c665a}.docs-toc .toc-level-3{padding-left:20px;color:#7d8a86;font-size:10px}
.document-body :deep(h1){margin:0 0 10px;color:#173e36;font-size:30px;line-height:1.3}.document-body :deep(h2){scroll-margin-top:20px;margin:42px 0 14px;padding-bottom:8px;border-bottom:1px solid #dce6e3;color:#194d43;font-size:22px;line-height:1.35}.document-body :deep(h3){scroll-margin-top:20px;margin:28px 0 9px;color:#2b6258;font-size:17px;line-height:1.4}.document-body :deep(h4){margin:22px 0 8px;color:#3a655d;font-size:14px}.document-body :deep(p){margin:9px 0}.document-body :deep(blockquote){margin:14px 0;padding:9px 14px;border-left:3px solid #4c9b8e;background:#edf7f4;color:#4d6861}.document-body :deep(ul),.document-body :deep(ol){padding-left:24px}.document-body :deep(li){margin:4px 0}.document-body :deep(table){width:100%;margin:16px 0;border-collapse:collapse;font-size:12px}.document-body :deep(th),.document-body :deep(td){padding:9px 11px;border:1px solid #d9e3e0;text-align:left;vertical-align:top}.document-body :deep(th){background:#edf5f3;color:#315e55;font-weight:700}.document-body :deep(tr:nth-child(even) td){background:#fafcfc}.document-body :deep(code){padding:2px 5px;border-radius:4px;background:#edf2f1;color:#9a3f52;font-size:.9em}.document-body :deep(pre){overflow:auto;margin:14px 0;padding:15px;border-radius:7px;background:#172a27;color:#e1ece9;line-height:1.6}.document-body :deep(pre code){padding:0;background:transparent;color:inherit}.document-body :deep(a){color:#247c6e}.document-body :deep(hr){border:0;border-top:1px solid #dce6e3}
@media(max-width:1100px){.docs-layout{grid-template-columns:minmax(0,1fr) 220px}.document-body{padding:32px 34px 60px}}
@media(max-width:820px){.docs-heading{align-items:stretch;flex-direction:column}.document-tabs{grid-template-columns:1fr}.docs-layout{grid-template-columns:1fr}.document-panel{height:auto;min-height:0;overflow:visible}.docs-toc{position:static;order:-1;max-height:none}.docs-toc nav{display:flex;max-height:180px;flex-wrap:wrap}.docs-toc button{width:auto;border:1px solid #dfe8e5;border-radius:5px;margin:2px}.docs-toc .toc-level-3{padding-left:8px}.document-body{padding:26px 20px 50px}.document-body :deep(table){display:block;overflow:auto;white-space:nowrap}}
</style>
