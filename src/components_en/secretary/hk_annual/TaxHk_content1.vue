<template>
  <ServiceHero class="hk_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/hk/HK.jpg'

const hero = {
  "title": "Hong Kong tax filing and annual review",
  "subtitle": "Professional accountant team / compliance audit / tax planning / avoid fines",
  "description": [
    "- Hong Kong Tax Declaration & Annual Return"
  ],
  "imageAlt": "",
  "language": "en",
  heroImage,
}
</script>
