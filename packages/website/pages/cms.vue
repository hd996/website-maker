<template>
  <div class="cms" w-full h-screen>
    <el-container h-full relative>
      <div flex items-center justify-center absolute w-40px h-40px bg-dark-600 rounded-r @click="isCollapse = false">
        <i class="inline-flex i-mdi-chevron-right" cursor-pointer text-2xl text-gray-200></i>
      </div>

      <el-aside
        :class="{ '!w-0 opacity-0 !p-0px': isCollapse }"
        w-260px
        relative
        bg-dark-600
        h-full
        text-gray-200
        transition-all
        duration-300
        ease-linear
      >
        <header w-full flex items-center justify-between pl-2 py-5px>
          <span text-xl font-numbersBold>Website Maker</span>
          <i
            class="inline-flex i-mdi-chevron-left"
            cursor-pointer
            text-2xl
            text-gray-200
            @click="isCollapse = true"
          ></i>
        </header>

        <main px-10px pt-20px>
          <label text-xs text-gray-400 mb-5px block flex items-center>
            基础配置
            <i
              class="inline-flex i-mdi-help-rhombus"
              text-base
              ml-2px
              text-gray-400
              cursor-pointer
              hover:text-white
              @click="isDialog = true"
            ></i>
          </label>
          <el-input v-model="pageName" size="mini" placeholder="页面名称" w-200px mb-5px />
          <el-input
            v-model="pageRoute"
            size="mini"
            placeholder="页面路径，必须唯一"
            w-200px
            mb-5px
            :disabled="!!route.query.id"
          />
          <el-input v-model="pageTitle" size="mini" placeholder="页面标题" w-200px mb-5px />
          <el-input v-model="pageDescription" size="mini" placeholder="页面描述" w-200px mb-5px />
          <el-input v-model="pageKeywords" size="mini" placeholder="页面关键字，逗号分隔" w-200px mb-5px />

          <div h-1px w-full my-20px bg-gray-500></div>

          <label text-xs text-gray-400 mb-5px block>组件配置</label>
          <draggable v-model="pageComponents" item-key="key" mt-20px>
            <template #item="{ element, index }">
              <a :href="`#${element.enName}`" flex items-center mb-3px>
                <i class="inline-flex i-mdi-menu" cursor-move mr-5px text-2xl text-gray-600></i>
                <span
                  :class="{ 'bg-yellow-300 !text-black font-semibold': element.key === selectedComponentKey }"
                  text-white
                  text-sm
                  hover:bg-gray-100
                  hover:bg-opacity-50
                  px-10px
                  py-2px
                  rounded-sm
                  w-170px
                  truncate
                  @click="selectedComponentKey = element.key"
                >
                  {{ element.zhName }}
                </span>
                <i
                  v-show="element.key === selectedComponentKey"
                  class="inline-flex i-mdi-close"
                  ml-5px
                  text-sm
                  text-gray-400
                  hover:text-white
                  @click="delComponent(index)"
                ></i>
              </a>
            </template>
          </draggable>

          <div flex items-center @click="isDrawer = true">
            <i class="inline-flex i-mdi-plus" text-2xl mr-5px text-gray-600></i>
            <div text-sm bg-green-500 w-170px rounded-sm px-10px py-2px cursor-pointer>添加组件</div>
          </div>
        </main>

        <footer absolute bottom-20px w-full px-10px>
          <div flex items-center justify-between mb-20px>
            <div flex items-center cursor-pointer hover:text-white text-gray-600 @click="preview">
              <i class="inline-flex i-mdi-magnify" text-xl></i>
              <span text-xs>预览网站</span>
            </div>
            <div flex items-center cursor-pointer>
              <i
                class="inline-flex i-mdi-laptop"
                text-lg
                text-gray-600
                cursor-pointer
                :class="{ '!text-2xl !text-white': device === Device.PC }"
                @click="toggleDevice(Device.PC)"
              ></i>
              <i
                class="inline-flex i-mdi-cellphone"
                text-lg
                text-gray-600
                cursor-pointer
                :class="{ '!text-2xl !text-white': device === Device.Mobile }"
                @click="toggleDevice(Device.Mobile)"
              ></i>
            </div>
          </div>
          <el-button type="primary" w-full px-10px mb-20px @click="saveData(Page.PageDraft)">保存草稿</el-button>
          <br />
          <el-button type="danger" w-full px-10px @click="publish">上线</el-button>
        </footer>
      </el-aside>

      <el-main v-show="device === Device.PC">
        <template v-for="item in pageComponents" :key="item.key">
          <component :is="item.enName" :data="item.data"></component>
        </template>
      </el-main>

      <el-main v-show="device === Device.Mobile" w-full h-screen flex items-center justify-center>
        <div w-360px h-680px rounded-2xl bg-gray-900 overflow-y-auto flex items-center justify-center>
          <iframe ref="iframeRef" w-320px h-650px bg-white :src="iframeURL"></iframe>
        </div>
      </el-main>
    </el-container>

    <ClientOnly>
      <el-dialog v-model="isDialog" title="常见问题" width="60%">
        <h3>基础配置：配置页面的基本信息</h3>
        <p>1、页面名称可以自定义，方便以后更快地找到；</p>
        <p bg-red text-white>
          2、页面路径用来定义页面URL，同时也用它区分不同的页面，所以它是必填的，也是不可相同的！一般都会填写为「/maker/xxx」；
        </p>
        <p>3、页面标题用来配置页面浏览器标签页的名称，有助于 SEO；</p>
        <p>4、页面描述用来简述页面的内容，有助于 SEO；</p>
        <p>5、页面关键字用来列举精准概括页面的词汇，用“，”分割，有助于 SEO；</p>

        <h3>组件配置：配置页面需要的所有组件；</h3>
        <p>1、组件可以进行拖拽调整顺序；</p>
        <p>2、单击选中组件后，可以对选中的组件进行「删除」操作；</p>

        <h3>其他问题</h3>
        <p bg-red text-white>1、页面的预览功能都是使用本地缓存，并不会将数据同步到数据库，关闭窗口将会丢失；</p>
        <p>
          2、页面上线时，会将最新的数据存入「草稿」和「页面」，所以每次编辑页面时，都会读取「草稿」中的内容，这样确保上线前可以在草稿中随意更新数据，待确认无误再上线；
        </p>
      </el-dialog>

      <el-drawer v-model="isDrawer" title="添加新组件" direction="ltr">
        <div flex>
          <div w-220px>
            <template v-for="item in ComponentCategories" :key="item.name">
              <div
                mb-15px
                text-gray-200
                cursor-pointer
                font-semibold
                :class="{ '!text-dark-100': selectedComponentCategory === item.category }"
                @click="selectedComponentCategory = item.category"
              >
                {{ item.zhName }}
              </div>
            </template>
          </div>

          <div>
            <template v-for="item in categoryComponents" :key="item.category">
              <div text-sm mb-20px>
                <div mb-5px text-gray-700 font-semibold>{{ item.zhName }}</div>
                <div
                  w-270px
                  h-150px
                  px-10px
                  py-5px
                  bg-white
                  flex
                  items-center
                  shadow
                  cursor-pointer
                  @click="addComponent(item)"
                >
                  <img :src="item.demoImg" w-full />
                </div>
              </div>
            </template>
          </div>
        </div>
      </el-drawer>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import axios from 'axios'
import { findIndex } from 'lodash'
import { ElMessage, ElMessageBox } from 'element-plus/lib'
import { ComponentSchema, ComponentCategory, ComponentCategories } from '../models/Model'

enum Device {
  PC = 'PC',
  Mobile = 'Mobile',
}

enum Page {
  Page = 'Page',
  PageDraft = 'PageDraft',
}

const iframeRef = ref(null)
const pageName = ref<string>('')
const pageRoute = ref<string>('')
const pageTitle = ref<string>('')
const pageDescription = ref<string>('')
const pageKeywords = ref<string>('')
const pageComponents = ref<ComponentSchema[]>([])
const isCollapse = ref<boolean>(false)
const isDrawer = ref<boolean>(false)
const isDialog = ref<boolean>(false)
const device = ref<string>(Device.PC)
const selectedComponentKey = ref<string>('')
const selectedComponentCategory = ref<string>('Banner')
const router = useRouter()
const route = useRoute()

onMounted(() => {
  if (route.query.id && route.query.route) {
    getData()
  }
})

watch(
  pageComponents,
  () => {
    localStorage.setItem('PRVIEW_DATA', JSON.stringify(pageComponents.value))
    noticeIframe()
  },
  { deep: true }
)

const categoryComponents = computed(() => {
  return ComponentCategories[
    findIndex(
      ComponentCategories,
      (component: ComponentCategory) => component.category === selectedComponentCategory.value
    )
  ].components
})

const iframeURL = computed(() => {
  return '/preview'
})

const noticeIframe = () => {
  iframeRef.value.contentWindow.postMessage(JSON.stringify(pageComponents.value))
}

const check = () => {
  if (!pageRoute.value) {
    ElMessage({
      message: '请先配置页面路径',
      type: 'error',
    })

    return false
  }

  return true
}

const toggleDevice = (_device: Device) => {
  device.value = _device
  noticeIframe()
}

// 数据从草稿拉取，因为草稿永远是最新的
const getData = async () => {
  const { data }: any = await axios(`/api/auth/page-draft?route=${route.query.route}`)

  pageName.value = data.name
  pageRoute.value = data.route
  pageTitle.value = data.title
  pageDescription.value = data.description
  pageKeywords.value = data.keywords
  pageComponents.value = JSON.parse(data.metadata)
}

// 发布时同步存入草稿，确保草稿中为最新的数据
const publish = () => {
  if (check()) {
    ElMessageBox.confirm('确认上线吗?', '上线确认', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(async () => {
      await saveData(Page.PageDraft)
      await saveData(Page.Page)
    })
  }
}

const preview = () => {
  localStorage.setItem('PRVIEW_DATA', JSON.stringify(pageComponents.value))
  window.open(iframeURL.value)
}

const saveData = async (type: string) => {
  if (check()) {
    const params = {
      name: pageName.value,
      route: pageRoute.value,
      title: pageTitle.value,
      description: pageDescription.value,
      keywords: pageKeywords.value,
      metadata: JSON.stringify(pageComponents.value),
    }
    const { data } = await axios({
      method: 'POST',
      url: type === Page.Page ? '/api/auth/page' : '/api/auth/page-draft',
      data:
        type === Page.Page
          ? route.query.id
            ? {
                type: 'UPDATE',
                id: route.query.id,
                ...params,
              }
            : {
                type: 'CREATE',
                ...params,
              }
          : route.query.route
          ? {
              type: 'UPDATE-BY-ROUTE',
              originalRoute: route.query.route,
              ...params,
            }
          : {
              type: 'CREATE',
              ...params,
            },
    })

    if (data.code === 1000) {
      ElMessage({
        message: data.msg,
        type: 'error',
      })
    } else {
      ElMessage({
        message: '保存成功',
        type: 'success',
      })

      if (type === Page.PageDraft && route.query.route !== pageRoute.value) {
        router.replace({
          name: route.name,
          query: {
            ...route.query,
            route: pageRoute.value,
          },
        })
      }

      if (type === Page.Page && !route.query.id) {
        router.replace({
          name: route.name,
          query: {
            ...route.query,
            id: data.id,
          },
        })
      }
    }
  }
}

const addComponent = (component: ComponentSchema) => {
  pageComponents.value.push({
    ...component,
    key: `${component.enName}-${Date.now()}`,
  })
  isDrawer.value = false
}

const delComponent = (index: number) => {
  pageComponents.value.splice(index, 1)
}
</script>

<script lang="ts">
export default {
  layout: false,
}
</script>
