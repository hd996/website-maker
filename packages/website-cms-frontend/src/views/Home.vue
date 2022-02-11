<template>
  <div class="home">
    <el-container>
      <el-aside h-screen :class="[isCollapse ? '!w-64px' : '!w-300px']" transition>
        <el-menu h-full router :collapse="isCollapse" :collapse-transition="false">
          <el-menu-item index="page-list">
            <el-icon><files /></el-icon>
            <span>页面列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container flex-1>
        <el-header bg-blue flex items-center text-white>
          <i class="inline-flex i-mdi-menu" text-2xl cursor-pointer mr-2 @click="toggleCollapse"></i>
          <span font-numbersBold font-2xl>Website CMS</span>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Files } from '@element-plus/icons'

const isCollapse = ref<boolean>(false)

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped></style>
