<template>
  <div h-screen flex flex-col items-center justify-center>
    <img src="@/assets/img/404.png" alt="404" pc-w-600 pc-mb-40 ipad-w-300 ipad-mb-40 mobile-w-200 mobile-mb-40 />

    <div pc-mb-40 ipad-mb-40 mobile-mb-40>
      {{ tip }}
    </div>

    <Button :text="btnText" type="primary" link="/" />
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'

const tip = ref<string>('你访问的页面出错，点击下方按钮回到首页')
const btnText = ref<string>('回到首页')
</script>

<script lang="ts">
export default {
  layout: false,

  head: {
    title: '页面未找到',
  },
}
</script>
