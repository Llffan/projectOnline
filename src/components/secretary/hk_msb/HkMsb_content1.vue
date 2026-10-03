<template>
  <ServiceHero class="msb_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/hk/HK.jpg'

const hero = {
  "title": "香港MSB牌照申请",
  "subtitle": "金钱服务经营者牌照 / (MSO) / 合规运营 / 金融牌照",
  "description": [
    "- Money Service Operator License (MSO)"
  ],
  "imageAlt": "",
  "language": "zh",
  heroImage,
}
</script>
