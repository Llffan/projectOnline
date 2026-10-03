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
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
