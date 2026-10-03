<template>
  <ServiceHero class="constructions_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/hk/HK.jpg'

const hero = {
  "title": "Hong Kong Personal Bank Account Opening",
  "subtitle": "Bank selection, document preparation, branch appointment, compliance review and account maintenance",
  "description": [
    "We help match applicants with suitable banks and assist with document preparation and Hong Kong branch appointments."
  ],
  "imageAlt": "Hong Kong personal bank account opening",
  "language": "en",
  heroImage,
}
</script>
