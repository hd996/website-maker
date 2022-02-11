<template>
  <div class="page-container">
    <template v-for="item in pageComponents" :key="item.key">
      <component :is="item.enName" :data="item.data"></component>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ComponentSchema } from '../../models/Model'

const pageComponents = ref<ComponentSchema[]>([])
const route = useRoute()

const { data } = await useAsyncData('page', () => $fetch(`/api/page?route=/maker/${route.params.name}`))

pageComponents.value = JSON.parse((data.value as { metadata: string }).metadata)
</script>
