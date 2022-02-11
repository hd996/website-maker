<template>
  <div class="preview">
    <template v-for="item in pageComponents" :key="item.key">
      <component :is="item.enName" :data="item.data"></component>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ComponentSchema } from '../models/Model'

const pageComponents = ref<ComponentSchema[]>([])

onMounted(() => {
  getDataFromLocal()

  if (window.self !== window.top) {
    registerMessageListen()
  }
})

const registerMessageListen = () => {
  window.addEventListener('message', (event) => {
    pageComponents.value = JSON.parse(event.data)
  })
}

const getDataFromLocal = () => {
  pageComponents.value = JSON.parse(localStorage.getItem('PRVIEW_DATA'))
}
</script>

<script lang="ts">
export default {
  layout: false,
}
</script>
