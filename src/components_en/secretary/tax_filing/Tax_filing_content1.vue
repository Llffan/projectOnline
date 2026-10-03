<template>
  <ServiceHero class="tax_filing_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/hk/HK.jpg'

const hero = {
  "title": "tax declaration",
  "subtitle": "",
  "description": [
    "Worry-free tax filing solution: one-stop considerate service, allowing you to say goodbye to tedious tax matters",
    "Changjiajie uses its professional tax experience to help you with compliance reporting, risk reduction, and cost-saving planning."
  ],
  "imageAlt": "tax declaration",
  "language": "en",
  heroImage,
}
</script>
