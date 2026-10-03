<template>
  <ServiceHero class="msb_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/hk/HK.jpg'

const hero = {
  "title": "Hong Kong MSB license application",
  "subtitle": "Money Service Operator License / (MSO) / Compliance Operation / Financial License",
  "description": [
    "- Money Service Operator License (MSO)"
  ],
  "imageAlt": "",
  "language": "en",
  heroImage,
}
</script>
