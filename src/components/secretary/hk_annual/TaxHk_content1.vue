<template>
  <ServiceHero class="hk_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/hk/HK.jpg'

const hero = {
  "title": "香港税务申报与年审",
  "subtitle": "专业会计师团队 / 合规审计 / 税务筹划 / 避免罚款",
  "description": [
    "- Hong Kong Tax Declaration & Annual Return"
  ],
  "imageAlt": "",
  "language": "zh",
  heroImage,
}
</script>
