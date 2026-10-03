<template>
  <ServiceHero class="constructions_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/jp/JP.jpg'

const hero = {
  "title": "China Construction Bank (Asia)",
  "subtitle": "Account Opening Service: Comprehensive Guide for Corporate and Personal Accounts, Advantages, Document Checklist, Process, and FAQs",
  "description": [
    "Fast VIP scheduling for account opening with full professional guidance, oral coaching before interviews, guaranteed quality and brand, successful account opening ensured or a full refund."
  ],
  "imageAlt": "",
  "language": "en",
  heroImage,
}
</script>
