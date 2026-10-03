<template>
  <ServiceHero class="ov_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/bvi/BVI.jpg'

const hero = {
  "title": "海外公司年审服务",
  "subtitle": "BVI / 开曼 / 塞舌尔 / 离岸公司合规维护",
  "description": [
    "- Overseas Company Annual Review & Renewal"
  ],
  "imageAlt": "",
  "language": "zh",
  heroImage,
}
</script>
