<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import DateRangePresets from "@/components/DateRangePresets.vue";
import { dateRangeFor, type DateRangePreset } from "@/utils/date-range";
import {
  listAttendance,
  listUnmatchedFingerprints,
  type AttendanceMeta,
  type AttendanceRow,
  type UnmatchedFingerprintMeta,
  type UnmatchedFingerprintRow,
} from "@/api/attendance";
import { can } from "@/api/auth";
import { syncOaUsers } from "@/api/users";

const pageSizeOptions = [20, 50, 100, 500, 1000, 2000, 5000];
const initialRange = dateRangeFor("current-month");
const filters = reactive({
  name: "",
  workCode: "",
  hrNumber: "",
  startDate: initialRange.startDate,
  endDate: initialRange.endDate,
  page: 1,
  pageSize: 20,
});
const rows = ref<AttendanceRow[]>([]),
  loading = ref(false),
  searched = ref(false),
  errorMessage = ref(""),
  exporting = ref(false),
  syncing = ref(false),
  syncMessage = ref(""),
  unmatchedOpen = ref(false),
  unmatchedLoading = ref(false),
  unmatchedError = ref(""),
  unmatchedRows = ref<UnmatchedFingerprintRow[]>([]);
const activeDatePreset = ref<DateRangePreset | null>("current-month");
const meta = reactive<AttendanceMeta>({
  page: 1,
  pageSize: 20,
  total: 0,
  pageCount: 0,
});
const unmatchedMeta = reactive<UnmatchedFingerprintMeta>({
  startTime: "",
  endTime: "",
  total: 0,
});
const load = async () => {
  loading.value = true;
  searched.value = true;
  errorMessage.value = "";
  try {
    const result = await listAttendance(filters);
    rows.value = result.data;
    Object.assign(meta, result.meta);
    filters.page = result.meta.page;
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "考勤查询失败";
  } finally {
    loading.value = false;
  }
};
const search = () => {
  filters.page = 1;
  return load();
};
const selectDatePreset = (preset: DateRangePreset) => {
  activeDatePreset.value = preset;
  Object.assign(filters, dateRangeFor(preset), { page: 1 });
  void load();
};
const changePageSize = () => {
  filters.page = 1;
  void load();
};
const changePage = (page: number) => {
  if (page < 1 || page > meta.pageCount || page === meta.page) return;
  filters.page = page;
  void load();
};
const exportExcel = async () => {
  if (!rows.value.length) return;
  exporting.value = true;
  try {
    const { default: ExcelJS } = await import("exceljs");
    const workbook = new ExcelJS.Workbook(),
      sheet = workbook.addWorksheet("考勤打卡记录");
    sheet.columns = [
      { header: "用户工号", key: "userNO", width: 18 },
      { header: "用户姓名", key: "userName", width: 18 },
      { header: "指纹号", key: "hrNumber", width: 18 },
      { header: "打卡时间", key: "logTime", width: 24 },
    ];
    rows.value.forEach((row) => sheet.addRow(row));
    sheet.views = [{ state: "frozen", ySplit: 1 }];
    sheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    sheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF3C91D0" },
    };
    sheet.autoFilter = "A1:D1";
    const buffer = await workbook.xlsx.writeBuffer(),
      url = URL.createObjectURL(
        new Blob([new Uint8Array(buffer)], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        }),
      ),
      link = document.createElement("a");
    link.href = url;
    link.download = `考勤打卡记录_${filters.startDate}_${filters.endDate}.xlsx`;
    link.click();
    URL.revokeObjectURL(url);
  } finally {
    exporting.value = false;
  }
};
const syncUsers = async () => {
  syncing.value = true;
  syncMessage.value = "";
  errorMessage.value = "";
  try {
    const result = await syncOaUsers();
    syncMessage.value = `OA 用户同步完成：新增 ${result.inserted}，更新 ${result.updated}`;
    await load();
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "OA 用户同步失败";
  } finally {
    syncing.value = false;
  }
};
const showUnmatchedFingerprints = async () => {
  unmatchedOpen.value = true;
  unmatchedLoading.value = true;
  unmatchedError.value = "";
  try {
    const result = await listUnmatchedFingerprints();
    unmatchedRows.value = result.data;
    Object.assign(unmatchedMeta, result.meta);
  } catch (error) {
    unmatchedRows.value = [];
    unmatchedError.value =
      error instanceof Error ? error.message : "未维护指纹号查询失败";
  } finally {
    unmatchedLoading.value = false;
  }
};
onMounted(search);
</script>
<template>
  <section class="card report-card">
    <header class="machine-card__header">
      <div>
        <span class="eyebrow">ATTENDANCE</span>
        <h2>考勤打卡记录</h2>
        <p>查询指纹考勤机的原始打卡记录。</p>
      </div>
      <div class="attendance-header-actions">
        <button
          class="button button--ghost"
          type="button"
          @click="showUnmatchedFingerprints"
        >
          查看未维护的指纹号
        </button>
        <button
          v-if="can('attendance', true) || can('users', true)"
          class="button button--primary"
          type="button"
          :disabled="syncing"
          @click="syncUsers"
        >
          {{ syncing ? "同步中…" : "同步 OA 用户" }}
        </button>
      </div>
    </header>
    <form class="filter-bar report-filter" @submit.prevent="search">
      <DateRangePresets :active="activeDatePreset" @select="selectDatePreset" />
      <label
        ><span>用户姓名</span
        ><input
          v-model.trim="filters.name"
          class="filter-input"
          placeholder="完整姓名" /></label
      ><label
        ><span>用户工号</span
        ><input
          v-model.trim="filters.workCode"
          class="filter-input"
          placeholder="完整工号" /></label
      ><label
        ><span>指纹号</span
        ><input
          v-model.trim="filters.hrNumber"
          class="filter-input"
          placeholder="完整指纹号" /></label
      ><label
        ><span>开始日期 *</span
        ><input
          v-model="filters.startDate"
          @input="activeDatePreset = null"
          class="filter-input"
          type="date"
          required /></label
      ><label
        ><span>结束日期 *</span
        ><input
          v-model="filters.endDate"
          @input="activeDatePreset = null"
          class="filter-input"
          type="date"
          required /></label
      ><button class="button button--dark" :disabled="loading">
        {{ loading ? "查询中…" : "查询" }}</button
      ><label class="page-size page-size--filter"
        ><span>每页条数</span
        ><select
          v-model.number="filters.pageSize"
          :disabled="loading"
          @change="changePageSize"
        >
          <option v-for="size in pageSizeOptions" :key="size" :value="size">
            {{ size }} 条
          </option>
        </select></label
      ><button
        class="button button--export"
        type="button"
        :disabled="loading || exporting || !rows.length"
        @click="exportExcel"
      >
        {{ exporting ? "导出中…" : "导出本页 Excel" }}
      </button>
    </form>
    <div v-if="syncMessage" class="notice">{{ syncMessage }}</div>
    <div v-if="errorMessage" class="notice notice--error">
      {{ errorMessage }}
    </div>
    <div class="report-summary">
      查询结果：共 <strong>{{ meta.total }}</strong> 条，当前第
      {{ meta.page }} / {{ meta.pageCount || 1 }} 页
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>用户工号</th>
            <th>用户姓名</th>
            <th>指纹号</th>
            <th>打卡时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="4" class="table-state">正在读取考勤数据…</td>
          </tr>
          <tr v-else-if="searched && !rows.length">
            <td colspan="4" class="table-state">没有符合条件的数据</td>
          </tr>
          <tr v-for="(row, index) in rows" v-else :key="index">
            <td>{{ row.userNO || "-" }}</td>
            <td>{{ row.userName || "-" }}</td>
            <td>{{ row.hrNumber }}</td>
            <td>{{ row.logTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer class="pagination">
      <span>共 {{ meta.total }} 条</span>
      <div>
        <button
          type="button"
          :disabled="loading || meta.page <= 1"
          @click="changePage(meta.page - 1)"
        >
          上一页</button
        ><span class="page-number"
          >第 {{ meta.page }} / {{ meta.pageCount || 1 }} 页</span
        ><button
          type="button"
          :disabled="loading || meta.page >= meta.pageCount"
          @click="changePage(meta.page + 1)"
        >
          下一页
        </button>
      </div>
    </footer>
  </section>
  <div v-if="unmatchedOpen" class="dialog-layer">
    <button class="dialog-scrim" aria-label="关闭" @click="unmatchedOpen = false" />
    <aside class="machine-dialog unmatched-dialog">
      <header class="machine-dialog__header">
        <div>
          <span class="eyebrow">FINGERPRINT AUDIT</span>
          <h2>最近一个月未维护的指纹号</h2>
        </div>
        <button class="icon-button" title="关闭" @click="unmatchedOpen = false">×</button>
      </header>
      <div class="unmatched-dialog__body">
        <p class="unmatched-description">
          以下指纹号最近一个月有打卡记录，但用户管理中不存在对应指纹号。
        </p>
        <div v-if="unmatchedMeta.startTime" class="unmatched-summary">
          <span>统计区间：{{ unmatchedMeta.startTime }} 至 {{ unmatchedMeta.endTime }}</span>
          <strong>{{ unmatchedMeta.total }} 个</strong>
        </div>
        <div v-if="unmatchedError" class="notice notice--error">{{ unmatchedError }}</div>
        <div class="table-wrap unmatched-table-wrap">
          <table>
            <thead><tr><th>指纹号</th><th>打卡次数</th><th>首次打卡</th><th>最近打卡</th></tr></thead>
            <tbody>
              <tr v-if="unmatchedLoading"><td colspan="4" class="table-state">正在汇总最近一个月的打卡记录…</td></tr>
              <tr v-else-if="!unmatchedRows.length && !unmatchedError"><td colspan="4" class="table-state unmatched-complete">最近一个月有打卡记录的指纹号均已维护</td></tr>
              <tr v-for="item in unmatchedRows" v-else :key="item.hrNumber">
                <td><strong>{{ item.hrNumber }}</strong></td>
                <td>{{ item.punchCount }}</td>
                <td>{{ item.firstPunchTime }}</td>
                <td>{{ item.lastPunchTime }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </aside>
  </div>
</template>
<style scoped>
.report-card {
  overflow: hidden;
}
.report-filter {
  align-items: end;
  flex-wrap: wrap;
}
.report-filter label {
  display: grid;
  gap: 5px;
  color: #57708c;
  font-size: 10px;
}
.attendance-header-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
}
.button--export {
  border-color: #8fc5ea;
  color: #2878b4;
  background: #eff8ff;
}
.report-summary {
  padding: 14px 28px;
  color: #637b96;
  font-size: 12px;
}
.page-size select {
  height: 40px;
  border: 1px solid #c8d9e8;
  border-radius: 8px;
  background: #fff;
  padding: 0 10px;
  color: #415d78;
}
.page-size--filter {
  min-width: 90px;
}
.page-number {
  display: inline-flex;
  align-items: center;
  padding: 0 5px;
  color: #526b64;
  font-weight: 600;
  white-space: nowrap;
}
.unmatched-dialog {
  width: min(820px, calc(100vw - 32px));
}
.unmatched-dialog__body {
  padding: 0 28px 28px;
}
.unmatched-description {
  margin: 0 0 12px;
  color: #637b73;
  font-size: 12px;
}
.unmatched-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
  padding: 10px 12px;
  border: 1px solid #dbe7e3;
  border-radius: 7px;
  background: #f4f8f7;
  color: #61746e;
  font-size: 11px;
}
.unmatched-summary strong {
  color: #1d6b5e;
  font-size: 16px;
  white-space: nowrap;
}
.unmatched-table-wrap {
  max-height: min(520px, 60vh);
  border: 1px solid #e0e8e6;
  border-radius: 7px;
  overflow: auto;
}
.unmatched-table-wrap thead {
  position: sticky;
  top: 0;
  z-index: 1;
}
.unmatched-complete {
  color: #247565;
  font-weight: 600;
}
@media (max-width: 720px) {
  .attendance-header-actions { justify-content: flex-start; }
  .unmatched-dialog__body { padding: 0 16px 20px; }
  .unmatched-summary { align-items: flex-start; flex-direction: column; }
}
</style>
