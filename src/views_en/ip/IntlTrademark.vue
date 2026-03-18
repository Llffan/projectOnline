<template>
  <div class="intl-trademark-page">
    <Top />
    <IntlTrademarkContent1 />
    <Link />
    <IntlTrademarkContent2 />
    <Bottom1 />
  </div>
</template>

<script setup>
import IntlTrademarkContent1 from '@/components_en/ip/intl/IntlTrademark_content1.vue'
import IntlTrademarkContent2 from '@/components_en/ip/intl/IntlTrademark_content2.vue'
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/ip/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>

<style scoped>
.intl-trademark-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
