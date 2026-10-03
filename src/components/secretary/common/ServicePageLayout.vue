<template>
  <div class="service-page">
    <Top />
    <slot name="hero" />
    <Link />
    <slot name="content" />
    <Bottom1 />
  </div>
</template>
<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
