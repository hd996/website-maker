<template>
  <picture @click="component.isCMS.value && (dialogVisible = true)">
    <source :srcset="props.img.Webp" type="image/webp" :class="props.classes" />
    <img :src="props.img.NoWebp" alt="website-maker" :class="props.classes" />
  </picture>

  <upload-image
    :dialog-visible="dialogVisible"
    @on-close="dialogVisible = false"
    @on-success="onSuccess"
  ></upload-image>
</template>

<script setup lang="ts">
const component = useComponent()
const emit = defineEmits(['on-success'])
const props = defineProps({
  img: {
    type: Object,
    default: () => {},
  },

  classes: {
    type: String,
    default: '',
  },
})

const dialogVisible = ref<boolean>(false)

const onSuccess = (val) => {
  emit('on-success', val)
}
</script>

<script lang="ts">
export default {
  emits: ['on-success'],
}
</script>
