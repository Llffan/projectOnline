<template>
  <ServiceHero class="tax_filing_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/hk/HK.jpg'

const hero = {
  "title": "税务申报",
  "subtitle": "",
  "description": [
    "省心报税方案：一站式贴心服务，让您告别税务繁琐事务",
    "昶嘉捷以专业税务经验，助您合规申报、减低风险、节约成本规划。"
  ],
  "imageAlt": "税务申报",
  "language": "zh",
  heroImage,
}
</script>
