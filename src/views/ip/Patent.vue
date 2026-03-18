<template>
  <div class="patent-page">
    <Top />
    <PatentContent1 />
    <Link />
    <PatentContent2 />
    <Bottom1 />
  </div>
</template>

<script setup>
import PatentContent1 from '@/components/ip/patent/PatentContent1.vue'
import PatentContent2 from '@/components/ip/patent/PatentContent2.vue'
import Top from '@/components/common/Top.vue'
import Link from '@/components/ip/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>

<style scoped>
.patent-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
