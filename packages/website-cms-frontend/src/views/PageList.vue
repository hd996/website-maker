<template>
  <div class="page-list">
    <div flex justify-between>
      <el-button type="primary" size="small" @click="openCMS()">新增</el-button>
      <el-input
        v-model="keywords"
        placeholder="请输入页面名称查询"
        size="small"
        class="!w-200px"
        @change="handleKeywordsChange"
      />
    </div>

    <el-table :data="pageList" v-loading="loading" stripe border mt-2>
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="route" label="路径" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="description" label="描述" />
      <el-table-column prop="keywords" label="关键字" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button type="primary" size="small" @click="openCMS(scope.row.id, scope.row.route)">编辑</el-button>
          <el-button type="danger" size="small" @click="delPage(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="total, sizes, prev, pager, next"
      v-model:currentPage="page"
      :page-sizes="[10, 20, 30]"
      :page-size="pageSize"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      mt-2
    ></el-pagination>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useUrlSearchParams } from '@vueuse/core'
import { Page, GetPageListAPI, DelPageAPI } from '../apis/page'
import { getCmsURI } from '../util'

const pageList = reactive<Page[]>([])
const total = ref<number>(0)
const page = ref<number>(1)
const pageSize = ref<number>(10)
const keywords = ref<string>('')
const loading = ref<boolean>(false)
const params = useUrlSearchParams('history')

onMounted(async () => {
  page.value = Number(params.page || 1)
  pageSize.value = Number(params.pageSize || 10)
  params.keywords && (keywords.value = String(params.keywords))
  await getPageList()
})

const getPageList = async () => {
  loading.value = true

  const { data } = await GetPageListAPI({ page: page.value, pageSize: pageSize.value, keywords: keywords.value })
  pageList.splice(0, pageList.length)
  pageList.push(...data.list)
  total.value = data.total

  loading.value = false
}

const openCMS = (id?: string, route?: string) => {
  if (id) {
    window.open(`${getCmsURI()}?id=${id}&route=${route}`)
  } else {
    window.open(getCmsURI())
  }
}

const delPage = (id: string) => {
  ElMessageBox.confirm('删除后无法恢复，确认删除吗?', '删除确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await DelPageAPI(id)
      await getPageList()

      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除失败',
      })
    })
}

const handleKeywordsChange = (val: string) => {
  keywords.value = val
  params.keywords = val
  getPageList()
}

const handleSizeChange = (val: number) => {
  pageSize.value = val
  params.pageSize = val.toString()
  getPageList()
}

const handleCurrentChange = (val: number) => {
  page.value = val
  params.page = val.toString()
  getPageList()
}
</script>

<style lang="scss" scoped></style>
