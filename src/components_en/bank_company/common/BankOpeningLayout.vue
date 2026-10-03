<template>
  <div class="bank-opening-page">
    <Top />
    <slot name="hero" />
    <Link />
    <slot name="content" />
    <Bottom1 />
  </div>
</template>

<script setup>
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
