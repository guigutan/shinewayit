<template>
  <div class="panel" :class="{ 'mobile-mode': isMobileMode }">
    <!-- 左侧查询面板 -->
    <div class="left" :class="{ 'mobile-drawer': isMobileMode, 'drawer-open': isMobileMode && !isCollapsed }" v-show="!isMobileMode ? !isCollapsed : true">
      <div class="title">查询条件</div>
      <div class="button-bar">
        <button @click="handleQuery">查询</button>
        <button @click="handleClear">清空</button>
      </div>
      <ul>
        <li><label>机台编号：</label><input type="text" v-model="queryParams.MachineNO" placeholder="请输入机台编号"></li>
        <li><label>机台名称：</label><input type="text" v-model="queryParams.FullName" placeholder="请输入机台名称"></li>
        <li><label>IP地址：</label><input type="text" v-model="queryParams.IpAddr" placeholder="请输入IP地址"></li>
        <li><label>MAC地址：</label><input type="text" v-model="queryParams.MacAddr" placeholder="请输入MAC地址"></li>
        <li><label>加工品：</label><input type="text" v-model="queryParams.tempItem" placeholder="请输入加工品"></li>
        <li><label>一出多：</label><input type="text" v-model="queryParams.tempOneToMany" placeholder="请输入一出多"></li>
        <li><label>品牌：</label><input type="text" v-model="queryParams.Brand" placeholder="请输入品牌"></li>
        <li><label>类型：</label><input type="text" v-model="queryParams.Stype" placeholder="请输入类型"></li>
        <li>
          <label>所在区域：</label>
          <select v-model="queryParams.Area">
            <option value="">全部</option>
            <option value="一楼">一楼</option>
            <option value="二楼">二楼</option>
            <option value="三楼">三楼</option>
          </select>
        </li>
      </ul>
    </div>

    <!-- 移动端遮罩层 -->
    <div v-if="isMobileMode && !isCollapsed" class="mobile-mask" @click="toggleCollapse"></div>

    <!-- 右侧内容区 -->
    <div class="right">
      <div class="right-toolbar">
        <div class="toggle-btn" @click="toggleCollapse" :title="isCollapsed ? '展开筛选' : '收起筛选'"> {{ isCollapsed ? '»' : '«' }} </div>        
        <button @click="handleAdd">添加</button>
        <button @click="handleEdit" :disabled="!selectedRow">修改</button>
        <button @click="handleSave" :disabled="!hasChanges">保存</button>
        <button @click="handleDelete" :disabled="!selectedRow">删除</button>
        <button v-if="hasChanges" @click="cancelEditing" class="cancel-btn">取消编辑</button>
      </div>
      
      <!-- 表格展示查询结果 -->
      <div class="table-wrapper">
        <div class="table-scroll-x">
          <table v-if="tableData.length > 0 || isAdding">
            <thead>
              <tr>
                <th @click="sortBy('MachineID')" class="sortable">设备ID<span class="sort-icon">{{ getSortIcon('MachineID') }}</span></th>
                <th @click="sortBy('MachineNO')" class="sortable">设备编号 <span class="required-star">*</span><span class="sort-icon">{{ getSortIcon('MachineNO') }}</span></th>
                <th @click="sortBy('ShortName')" class="sortable">设备简称<span class="sort-icon">{{ getSortIcon('ShortName') }}</span></th>
                <th @click="sortBy('FullName')" class="sortable">设备名称<span class="sort-icon">{{ getSortIcon('FullName') }}</span></th>
                <th @click="sortBy('Brand')" class="sortable">品牌<span class="sort-icon">{{ getSortIcon('Brand') }}</span></th>
                <th @click="sortBy('Model')" class="sortable">型号<span class="sort-icon">{{ getSortIcon('Model') }}</span></th>
                <th @click="sortBy('Area')" class="sortable">区域 <span class="required-star">*</span><span class="sort-icon">{{ getSortIcon('Area') }}</span></th>
                <th @click="sortBy('Stype')" class="sortable">类型 <span class="required-star">*</span><span class="sort-icon">{{ getSortIcon('Stype') }}</span></th>
                <th @click="sortBy('MacAddr')" class="sortable">MAC地址<span class="sort-icon">{{ getSortIcon('MacAddr') }}</span></th>
                <th @click="sortBy('IpAddr')" class="sortable">IP地址<span class="sort-icon">{{ getSortIcon('IpAddr') }}</span></th>
                <th @click="sortBy('PortNum')" class="sortable">端口<span class="sort-icon">{{ getSortIcon('PortNum') }}</span></th>
                <th @click="sortBy('trCount')" class="sortable">排版行数<span class="sort-icon">{{ getSortIcon('trCount') }}</span></th>
                <th @click="sortBy('tdCount')" class="sortable">排版列数<span class="sort-icon">{{ getSortIcon('tdCount') }}</span></th>
                <th @click="sortBy('colIndex')" class="sortable">网格位置<span class="sort-icon">{{ getSortIcon('colIndex') }}</span></th>
                <th @click="sortBy('tempItem')" class="sortable">加工品<span class="sort-icon">{{ getSortIcon('tempItem') }}</span></th>
                <th @click="sortBy('tempOneToMany')" class="sortable">一出多<span class="sort-icon">{{ getSortIcon('tempOneToMany') }}</span></th>
                <th @click="sortBy('Status')" class="sortable">状态<span class="sort-icon">{{ getSortIcon('Status') }}</span></th>
                <th @click="sortBy('OutDate')" class="sortable">出厂日期<span class="sort-icon">{{ getSortIcon('OutDate') }}</span></th>
                <th @click="sortBy('Detail')" class="sortable">描述<span class="sort-icon">{{ getSortIcon('Detail') }}</span></th>
                <th @click="sortBy('OrderBy')" class="sortable">排序<span class="sort-icon">{{ getSortIcon('OrderBy') }}</span></th>
                <th>创建人</th>
                <th>创建时间</th>
                <th>修改人</th>
                <th>修改时间</th>
              </tr>
            </thead>
            <tbody>
              <!-- 新增行 -->
              <tr v-if="isAdding" class="editing-row">
                <td></td>
                <td><input v-model="newRow.MachineNO" placeholder="请输入设备编号" class="edit-input" :class="{ error: errors.MachineNO }"></td>
                <td><input v-model="newRow.ShortName" placeholder="设备简称" class="edit-input"></td>
                <td><input v-model="newRow.FullName" placeholder="设备名称" class="edit-input"></td>
                <td><input v-model="newRow.Brand" placeholder="品牌" class="edit-input"></td>
                <td><input v-model="newRow.Model" placeholder="型号" class="edit-input"></td>
                <td>
                  <select v-model="newRow.Area" class="edit-input" :class="{ error: errors.Area }">
                    <option value="">请选择区域</option>
                    <option value="一楼">一楼</option>
                    <option value="二楼">二楼</option>
                    <option value="三楼">三楼</option>
                  </select>
                </td>
                <td><input v-model="newRow.Stype" placeholder="请输入类型" class="edit-input" :class="{ error: errors.Stype }"></td>
                <td><input v-model="newRow.MacAddr" placeholder="MAC地址" class="edit-input"></td>
                <td><input v-model="newRow.IpAddr" placeholder="IP地址" class="edit-input"></td>
                <td><input v-model.number="newRow.PortNum" type="number" placeholder="端口" class="edit-input"></td>
                <td><input v-model.number="newRow.trCount" type="number" placeholder="排版行数" class="edit-input"></td>
                <td><input v-model.number="newRow.tdCount" type="number" placeholder="排版列数" class="edit-input"></td>
                <td><input v-model.number="newRow.colIndex" type="number" placeholder="网格位置" class="edit-input"></td>
                <td><input v-model="newRow.tempItem" placeholder="加工品" class="edit-input"></td>
                <td><input v-model.number="newRow.tempOneToMany" type="number" placeholder="一出多" class="edit-input"></td>
                <td>
                  <select v-model="newRow.Status" class="edit-input">
                    <option :value="1">启用</option>
                    <option :value="0">停用</option>
                  </select>
                </td>
                <td><input v-model="newRow.OutDate" type="date" class="edit-input"></td>
                <td><input v-model="newRow.Detail" placeholder="描述" class="edit-input"></td>
                <td><input v-model.number="newRow.OrderBy" type="number" placeholder="排序" class="edit-input"></td>
                <td>{{ currentUserName }}</td>
               <td>{{ formatDateTime(newRow.CreateTime) }}</td>
                <td>{{ currentUserName }}</td>
                <td>{{ formatDateTime(newRow.UpdateTime) }}</td>
              </tr>
              
              <!-- 数据行 -->
              <tr v-for="item in tableData" :key="item.MachineID" @click="selectRow(item)" :class="{ selected: selectedRow?.MachineID === item.MachineID, 'editing-row': editingRow?.MachineID === item.MachineID }">
                <td>{{ item.MachineID }}</td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.MachineNO }}</span>
                  <input v-else v-model="editingRow.MachineNO" class="edit-input" :class="{ error: errors.MachineNO }">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.ShortName || '-' }}</span>
                  <input v-else v-model="editingRow.ShortName" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.FullName || '-' }}</span>
                  <input v-else v-model="editingRow.FullName" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.Brand || '-' }}</span>
                  <input v-else v-model="editingRow.Brand" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.Model || '-' }}</span>
                  <input v-else v-model="editingRow.Model" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.Area }}</span>
                  <select v-else v-model="editingRow.Area" class="edit-input" :class="{ error: errors.Area }">
                    <option value="一楼">一楼</option>
                    <option value="二楼">二楼</option>
                    <option value="三楼">三楼</option>
                  </select>
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.Stype }}</span>
                  <input v-else v-model="editingRow.Stype" class="edit-input" :class="{ error: errors.Stype }">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.MacAddr || '-' }}</span>
                  <input v-else v-model="editingRow.MacAddr" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.IpAddr || '-' }}</span>
                  <input v-else v-model="editingRow.IpAddr" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.PortNum || '-' }}</span>
                  <input v-else v-model.number="editingRow.PortNum" type="number" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.trCount || 0 }}</span>
                  <input v-else v-model.number="editingRow.trCount" type="number" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.tdCount || 0 }}</span>
                  <input v-else v-model.number="editingRow.tdCount" type="number" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.colIndex || 0 }}</span>
                  <input v-else v-model.number="editingRow.colIndex" type="number" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.tempItem || '-' }}</span>
                  <input v-else v-model="editingRow.tempItem" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.tempOneToMany || 1 }}</span>
                  <input v-else v-model.number="editingRow.tempOneToMany" type="number" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.Status === 1 ? '启用' : '停用' }}</span>
                  <select v-else v-model="editingRow.Status" class="edit-input">
                    <option :value="1">启用</option>
                    <option :value="0">停用</option>
                  </select>
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.OutDate || '-' }}</span>
                  <input v-else v-model="editingRow.OutDate" type="date" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.Detail || '-' }}</span>
                  <input v-else v-model="editingRow.Detail" class="edit-input">
                </td>
                <td>
                  <span v-if="editingRow?.MachineID !== item.MachineID">{{ item.OrderBy || 0 }}</span>
                  <input v-else v-model.number="editingRow.OrderBy" type="number" class="edit-input">
                </td>
                <td>{{ item.CreateUser || '-' }}</td>
                <td>{{ formatDateTime(item.CreateTime) }}</td>
                <td>{{ item.UpdateUser || '-' }}</td>
                <td>{{ formatDateTime(item.UpdateTime) }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else class="no-data">暂无数据，请点击"查询"按钮加载数据</div>
        </div>
      </div>

      <!-- 分页组件 -->
      <div class="pagination-container" v-if="total > 0">
        <div class="pagination-info">共 {{ total }} 条记录</div>
        <div class="pagination-controls">
          <button class="page-btn" @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">上一页</button>
          <div class="page-numbers">
            <button v-for="page in visiblePages" :key="page" class="page-num" :class="{ active: currentPage === page }" @click="goToPage(page)">{{ page }}</button>
            <span v-if="showEllipsis" class="ellipsis">...</span>
            <button v-if="totalPages > 1 && !visiblePages.includes(totalPages)" class="page-num" @click="goToPage(totalPages)">{{ totalPages }}</button>
          </div>
          <button class="page-btn" @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">下一页</button>
          <div class="page-size-selector">
            <span>每页显示</span>
            <select v-model="pageSize" @change="handlePageSizeChange">
              <option :value="10">10条</option>
              <option :value="20">20条</option>
              <option :value="50">50条</option>
              <option :value="100">100条</option>
              <option :value="200">200条</option>
              <option :value="500">500条</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue'
import { getApiShinewayScada } from '../../api/apiShinewayScada'
import { useAuthStore } from '../../stores/auth'

// 获取用户信息
const authStore = useAuthStore()

// 当前用户名
const currentUserName = computed(() => {
  if (!authStore.user) return 'system'
  const { first_name, last_name, email } = authStore.user
  if (first_name && last_name) return `${first_name} ${last_name}`
  if (first_name) return first_name
  return email ? email.split('@')[0] : 'system'
})

// 查询参数
const queryParams = reactive({
  MachineNO: '',
  FullName: '',
  IpAddr: '',
  MacAddr: '',
  tempItem: '',
  tempOneToMany: '',
  Brand: '',
  Stype: '',
  Area: ''
})

// 表格数据
const tableData = ref<any[]>([])
// 当前选中的行
const selectedRow = ref<any>(null)
// 编辑中的行
const editingRow = ref<any>(null)
// 是否正在添加
const isAdding = ref(false)
// 新增行的数据
const newRow = ref<any>({
  MachineNO: '',
  ShortName: '',
  FullName: '',
  Brand: '',
  Model: '',
  Area: '',
  Stype: '',
  MacAddr: '',
  IpAddr: '',
  PortNum: null,
  trCount: 0,
  tdCount: 0,
  colIndex: 0,
  tempItem: '',
  tempOneToMany: 1,
  Status: 1,
  OutDate: '1990-01-01',
  Detail: '',
  OrderBy: 0
})
// 错误验证
const errors = reactive({
  MachineNO: false,
  Area: false,
  Stype: false
})
// 收缩状态 - PC端默认展开(false), 移动端默认收缩(true)
const isCollapsed = ref(false)
// 是否为移动模式
const isMobileMode = ref(false)
// 排序相关
const sortField = ref('MachineID')
const sortOrder = ref('desc')
// 是否已查询过数据
const hasQueried = ref(false)

// 是否有变化
const hasChanges = computed(() => {
  return editingRow.value !== null || isAdding.value
})

// 分页相关
const currentPage = ref(1)
const pageSize = ref(20)
const total = ref(0)

// 排序图标
const getSortIcon = (field: string) => {
  if (sortField.value !== field) return ''
  return sortOrder.value === 'asc' ? '▲' : '▼'
}

// 排序
const sortBy = (field: string) => {
  if (!hasQueried.value) {
    alert('请先查询数据')
    return
  }
  if (sortField.value === field) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortOrder.value = 'asc'
  }
  loadData()
}

// 计算总页数
const totalPages = computed(() => Math.ceil(total.value / pageSize.value))

// 计算显示的页码
const visiblePages = computed(() => {
  const pages: number[] = []
  const maxVisible = 5
  if (totalPages.value <= maxVisible) {
    for (let i = 1; i <= totalPages.value; i++) pages.push(i)
  } else {
    let start = Math.max(1, currentPage.value - 2)
    let end = Math.min(totalPages.value, start + maxVisible - 1)
    if (end - start + 1 < maxVisible) start = Math.max(1, end - maxVisible + 1)
    for (let i = start; i <= end; i++) pages.push(i)
  }
  return pages
})

const showEllipsis = computed(() => totalPages.value > 5 && !visiblePages.value.includes(totalPages.value))

// 切换收缩状态
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

// 检测屏幕尺寸
const checkScreenSize = () => {
  const width = window.innerWidth
  const newIsMobile = width < 768
  
  if (isMobileMode.value !== newIsMobile) {
    isMobileMode.value = newIsMobile
    if (newIsMobile) {
      isCollapsed.value = true
    } else {
      isCollapsed.value = false
    }
  }
}

let resizeTimer: any = null
const handleResize = () => {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    checkScreenSize()
  }, 200)
}

// 构建过滤条件
const buildFilters = () => {
  const filters: any = {}
  if (queryParams.MachineNO) filters.MachineNO = { _icontains: queryParams.MachineNO }
  if (queryParams.FullName) filters.FullName = { _icontains: queryParams.FullName }
  if (queryParams.IpAddr) filters.IpAddr = { _icontains: queryParams.IpAddr }
  if (queryParams.MacAddr) filters.MacAddr = { _icontains: queryParams.MacAddr }
  if (queryParams.tempItem) filters.tempItem = { _icontains: queryParams.tempItem }
  if (queryParams.tempOneToMany) filters.tempOneToMany = { _eq: parseInt(queryParams.tempOneToMany) }
  if (queryParams.Brand) filters.Brand = { _icontains: queryParams.Brand }
  if (queryParams.Stype) filters.Stype = { _icontains: queryParams.Stype }
  if (queryParams.Area) filters.Area = { _eq: queryParams.Area }
  return filters
}

// 加载数据
const loadData = async () => {
  try {
    const api = await getApiShinewayScada()
    const filters = buildFilters()
    const offset = (currentPage.value - 1) * pageSize.value
    
    const sortDir = sortOrder.value === 'asc' ? sortField.value : `-${sortField.value}`
    
    const params: any = {
      limit: pageSize.value,
      offset: offset,
      sort: sortDir
    }
    if (Object.keys(filters).length > 0) params.filter = filters
    
    const [dataResponse, countResponse] = await Promise.all([
      api.get('/items/t_machine', { params }),
      api.get('/items/t_machine', { params: { aggregate: { count: 'MachineID' }, filter: filters } })
    ])
    
    if (dataResponse.data?.data) tableData.value = dataResponse.data.data
    if (countResponse.data?.data?.[0]) total.value = countResponse.data.data[0].count.MachineID
    
    cancelEditing()
  } catch (error) {
    console.error('查询失败:', error)
    alert('查询失败，请检查网络连接')
  }
}

// 跳转页面
const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  loadData()
}

// 每页条数变化
const handlePageSizeChange = () => {
  currentPage.value = 1
  loadData()
}

// 查询
const handleQuery = async () => {
  currentPage.value = 1
  hasQueried.value = true
  await loadData()
}

// 清空
const handleClear = () => {
  Object.assign(queryParams, {
    MachineNO: '', FullName: '', IpAddr: '', MacAddr: '', tempItem: '', tempOneToMany: '', Brand: '', Stype: '', Area: ''
  })
}

// 添加
const handleAdd = () => {
  if (!hasQueried.value) {
    alert('请先查询数据')
    return
  }
  cancelEditing()
  isAdding.value = true
  selectedRow.value = null
  newRow.value = {
    MachineNO: '',
    ShortName: '',
    FullName: '',
    Brand: '',
    Model: '',
    Area: '',
    Stype: '',
    MacAddr: '',
    IpAddr: '',
    PortNum: null,
    trCount: 0,
    tdCount: 0,
    colIndex: 0,
    tempItem: '',
    tempOneToMany: 1,
    Status: 1,
    OutDate: '1990-01-01',
    Detail: '',
    OrderBy: 0
  }
  errors.MachineNO = false
  errors.Area = false
  errors.Stype = false
}

// 修改
const handleEdit = () => {
  if (!hasQueried.value) {
    alert('请先查询数据')
    return
  }
  if (!selectedRow.value) {
    alert('请先选择要修改的记录')
    return
  }
  if (editingRow.value && editingRow.value.MachineID === selectedRow.value.MachineID) {
    return
  }
  cancelEditing()
  editingRow.value = JSON.parse(JSON.stringify(selectedRow.value))
}

// 验证必填项
const validateRequired = (data: any) => {
  let valid = true
  errors.MachineNO = !data.MachineNO
  errors.Area = !data.Area
  errors.Stype = !data.Stype
  if (!data.MachineNO) valid = false
  if (!data.Area) valid = false
  if (!data.Stype) valid = false
  return valid
}

// 保存
const handleSave = async () => {
  try {
    const api = await getApiShinewayScada()
    const now = new Date().toISOString()
    const userName = currentUserName.value
    
    if (isAdding.value) {
      if (!validateRequired(newRow.value)) {
        alert('请填写所有必填项（带*号的列）')
        return
      }
      if (!newRow.value.OutDate) {
        newRow.value.OutDate = '1990-01-01'
      }
      await api.post('/items/t_machine', {
        ...newRow.value,
        CreateUser: userName,
        CreateTime: now,
        UpdateUser: userName,
        UpdateTime: now
      })
      alert('添加成功')
      isAdding.value = false
      await loadData()
    } else if (editingRow.value) {
      if (!validateRequired(editingRow.value)) {
        alert('请填写所有必填项（带*号的列）')
        return
      }
      await api.patch(`/items/t_machine/${editingRow.value.MachineID}`, {
        ...editingRow.value,
        UpdateUser: userName,
        UpdateTime: now
      })
      alert('修改成功')
      editingRow.value = null
      await loadData()
    }
  } catch (error) {
    console.error('保存失败:', error)
    alert('保存失败，请重试')
  }
}

// 取消编辑
const cancelEditing = () => {
  isAdding.value = false
  editingRow.value = null
  errors.MachineNO = false
  errors.Area = false
  errors.Stype = false
}

// 删除
const handleDelete = async () => {
  if (!hasQueried.value) {
    alert('请先查询数据')
    return
  }
  if (!selectedRow.value) {
    alert('请先选择要删除的记录')
    return
  }
  if (confirm(`确定要删除机台 ${selectedRow.value.MachineNO} 吗？`)) {
    try {
      const api = await getApiShinewayScada()
      await api.delete(`/items/t_machine/${selectedRow.value.MachineID}`)
      alert('删除成功')
      selectedRow.value = null
      await loadData()
    } catch (error) {
      console.error('删除失败:', error)
      alert('删除失败，请重试')
    }
  }
}

// 选中行
const selectRow = (row: any) => {
  if (!hasQueried.value) {
    alert('请先查询数据')
    return
  }
  if (editingRow.value && editingRow.value.MachineID === row.MachineID) {
    return
  }
  if (isAdding.value || editingRow.value) {
    alert('请先完成当前编辑操作')
    return
  }
  selectedRow.value = row
}

// 格式化时间函数
const formatDateTime = (dateTime: string) => {
  if (!dateTime) return '-'
  try {
    const date = new Date(dateTime)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  } catch (error) {
    return dateTime || '-'
  }
}

// 生命周期
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (resizeTimer) clearTimeout(resizeTimer)
})
</script>

<style scoped>
.panel { display: flex; height: 100%;  }
.left { background-color: white; border: 1px solid #ccc; min-width: 300px; margin: 10px; flex-shrink: 0; overflow-y: auto; border-radius: 4px; transition: all 0.3s ease; }
.left .title { color: rgb(49, 110, 202); padding: 10px; border-bottom: 1px solid #ccc; font-weight: bold; }
.button-bar { border-bottom: 1px solid #ccc; padding: 10px; display: flex;  }
.button-bar button { flex: 1; padding: 5px 15px; background-color: white; border: 1px solid #ccc; cursor: pointer; border-radius: 3px; transition: all 0.2s; }
.button-bar button:hover { background-color: rgb(200, 235, 241); border-color: rgb(49, 195, 221); }
.left ul { list-style: none; padding: 10px; margin: 0; }
.left ul li { padding: 8px 0; display: flex; align-items: center; }
.left ul li label { width: 80px; flex-shrink: 0; font-size: 14px; color: #333; }
.left ul li input, .left ul li select { flex: 1; height: 30px; padding: 0 8px; border: 1px solid #ddd; border-radius: 3px; font-size: 14px; }
.right { margin: 10px 10px 10px 0; background-color: white; flex: 1; border: 1px solid #ccc; display: flex; flex-direction: column; overflow: hidden; border-radius: 4px; position: relative; }
.right-toolbar { border-bottom: 1px solid #ccc; padding: 10px; display: flex;  flex-wrap: wrap; }
.right-toolbar button { padding: 5px 15px; margin: 0 5px; background-color: white; border: 1px solid #ccc; cursor: pointer; border-radius: 3px; transition: all 0.2s; }
.right-toolbar button:hover:not(:disabled) { background-color: rgb(200, 235, 241); border-color: rgb(49, 195, 221); }
.right-toolbar button:disabled { opacity: 0.5; cursor: not-allowed; }
.toggle-btn {margin-right: 20px; color: #1578ca; font-size: 30px; width: 35px; height: 30px; line-height: 30px; cursor: pointer; }
.toggle-btn:hover { color: rgb(216, 134, 12); }
.cancel-btn { padding: 5px 15px; margin: 0 5px; background-color: white; border: 1px solid #ccc; cursor: pointer; border-radius: 3px; transition: all 0.2s; }
.cancel-btn:hover { background-color: #f57c00; color: white; }
.table-wrapper { flex: 1; display: flex; flex-direction: column; overflow: hidden; min-height: 0; }
.table-scroll-x { flex: 1; overflow-x: auto; overflow-y: auto; }
.table-scroll-x::-webkit-scrollbar { width: 10px; height: 10px; }
.table-scroll-x::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 5px; }
.table-scroll-x::-webkit-scrollbar-thumb { background: #888; border-radius: 5px; }
.table-scroll-x::-webkit-scrollbar-thumb:hover { background: #555; }
table { min-width: 2300px; width: 100%; border-collapse: collapse; font-size: 14px; }
table thead tr { background-color: #f5f5f5; position: sticky; top: 0; z-index: 10; }
table th, table td { border: 1px solid #ddd; padding: 10px 8px; text-align: left; }
table th { font-weight: 600; background-color: #f5f5f5; white-space: nowrap; }
.sortable { cursor: pointer; user-select: none; }
.sortable:hover { background-color: #e0e0e0; }
.sort-icon { margin-left: 5px; font-size: 12px; color: #666; }
.required-star { color: red; margin-left: 2px; font-size: 16px; vertical-align: middle; }
table tbody tr:hover { background-color: #f5f5f5; cursor: pointer; }
table tbody tr.selected { background-color: #e3f2fd; }
table tbody tr.editing-row { background-color: #fff3e0; }
.edit-input { width: 100%; min-width: 80px; padding: 4px 6px; border: 1px solid #ddd; border-radius: 3px; font-size: 13px; }
.edit-input.error { border-color: red; background-color: #fff0f0; }
.no-data { text-align: center; padding: 50px; color: #999; }
.pagination-container { border-top: 1px solid #eee; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; background-color: #fafafa; flex-shrink: 0; }
.pagination-info { color: #666; font-size: 14px; }
.pagination-controls { display: flex; align-items: center; gap: 15px; flex-wrap: wrap; }
.page-btn { padding: 6px 16px; background-color: white; border: 1px solid #ddd; cursor: pointer; border-radius: 4px; transition: all 0.2s; }
.page-btn:hover:not(:disabled) { background-color: rgb(200, 235, 241); border-color: rgb(49, 195, 221); }
.page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.page-numbers { display: flex; align-items: center; gap: 5px; }
.page-num { min-width: 32px; height: 32px; padding: 0 8px; background-color: white; border: 1px solid #ddd; cursor: pointer; border-radius: 4px; transition: all 0.2s; }
.page-num:hover { background-color: rgb(200, 235, 241); border-color: rgb(49, 195, 221); }
.page-num.active { background-color: rgb(49, 110, 202); color: white; border-color: rgb(49, 110, 202); }
.ellipsis { padding: 0 5px; color: #999; }
.page-size-selector { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #666; }
.page-size-selector select { padding: 5px 8px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; }

/* 移动端样式 */
.mobile-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

@media (max-width: 768px) {
  .panel { flex-direction: column; gap: 0; }
  .left.mobile-drawer { position: fixed; left: -100%; top: 0; bottom: 0; z-index: 1000; width: 85%; max-width: 300px; box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2); border-radius: 0; transition: left 0.3s ease; }
  .left.mobile-drawer.drawer-open { left: 0; }
  .right { width: 100%; margin-left: 0; }
  .right-toolbar { position: sticky; top: 0; background: white; z-index: 99; }
  .pagination-container { flex-direction: column; align-items: stretch; }
  .pagination-controls { justify-content: center; }
  .page-numbers { order: -1; justify-content: center; flex-wrap: wrap; }
  table th, table td { padding: 6px 4px; font-size: 12px; }
}

@media (max-width: 480px) {
  .right-toolbar { gap: 5px; }
  .right-toolbar button { padding: 4px 10px; font-size: 12px; }
  .page-btn { padding: 4px 10px; font-size: 12px; }
  .page-num { min-width: 28px; height: 28px; font-size: 12px; }
}
</style>