<template>
  <ServiceHero class="ov_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/bvi/BVI.jpg'

const hero = {
  "title": "Overseas company annual review services",
  "subtitle": "BVI / Cayman / Seychelles / Offshore Company Compliance Maintenance",
  "description": [
    "- Overseas Company Annual Review & Renewal"
  ],
  "imageAlt": "",
  "language": "en",
  heroImage,
}
</script>
