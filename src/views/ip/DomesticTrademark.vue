<template>
  <div class="domestic-trademark-page">
    <Top />
    <DomesticTrademarkContent1 />
    <Link />
    <DomesticTrademarkContent2 />
    <Bottom1 />
  </div>
</template>

<script setup>
import DomesticTrademarkContent1 from '@/components/ip/domestic/DomesticTrademark_content1.vue'
import DomesticTrademarkContent2 from '@/components/ip/domestic/DomesticTrademark_content2.vue'
import Top from '@/components/common/Top.vue'
import Link from '@/components/ip/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>

<style scoped>
.domestic-trademark-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
