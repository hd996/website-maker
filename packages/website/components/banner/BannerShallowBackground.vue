<template>
  <div class="banner-shallow-background">
    <h1
      :contenteditable="isCMS"
      @blur="(e) => component.handleElementBlur(data, 'title', e)"
      @focus="(e) => component.handleElementFocuse(e)"
    >
      {{ props.data.title }}
    </h1>
    <h3
      :contenteditable="isCMS"
      @blur="(e) => component.handleElementBlur(data, 'description', e)"
      @focus="(e) => component.handleElementFocuse(e)"
    >
      {{ props.data.description }}
    </h3>

    <Image :img="props.data.img" classes="pc-w-300 ipad-w-200 mobile-w-100" @on-success="onSuccess"></Image>
  </div>
</template>

<script setup lang="ts">
import { useComponent, isCMS } from '../../composables/useComponent'
import { ShallowBackgroundProps, ShallowBackgroundDefaultProps } from '../../models/Banner'
import { Picture } from '../../models/Model'

const props = defineProps({
  data: {
    type: Object,
    default: ShallowBackgroundDefaultProps,
  },
})

const component = useComponent()

const onSuccess = (img: Picture) => {
  ;(props.data as ShallowBackgroundProps).img = img
}
</script>
