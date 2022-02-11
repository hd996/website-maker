<template>
  <div class="free-10000-minutes-deep-background">
    <h1
      :contenteditable="isCMS"
      @blur="(e) => component.handleElementBlur(data, 'title', e)"
      @focus="(e) => component.handleElementFocuse(e)"
    >
      {{ props.data.title }}
    </h1>

    <Button
      :text="props.data.btnText"
      :link="props.data.btnLink"
      :is-blank="props.data.btnBlank"
      @on-save="onSave"
    ></Button>
  </div>
</template>

<script setup lang="ts">
import { useComponent, isCMS } from '../../composables/useComponent'
import { DeepBackgroundProps, DeepBackgroundDefaultProps } from '../../models/Free10000Minutes'

const props = defineProps({
  data: {
    type: Object,
    default: DeepBackgroundDefaultProps,
  },
})

const component = useComponent()

const onSave = (data: DeepBackgroundProps) => {
  ;(props.data as DeepBackgroundProps).btnText = data.btnText
  ;(props.data as DeepBackgroundProps).btnLink = data.btnLink
  ;(props.data as DeepBackgroundProps).btnBlank = data.btnBlank
}
</script>
