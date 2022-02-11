<script setup>
import AOS from 'aos'

import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    delay: 100,
    duration: 1000,
  })

  window.addEventListener('load', AOS.refresh)
})
</script>

<template>
  <div class="layout-default">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
