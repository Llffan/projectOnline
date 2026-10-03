<template>
  <AnimatedSection class="service-hero service-detail-hero" :class="{ 'service-detail-hero--english': language === 'en' }">
    <div class="img_box"><img :src="heroImage" :alt="imageAlt"></div>
    <div class="intro">
      <h1 class="service-hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="service-hero-subtitle">{{ subtitle }}</p>
      <div v-if="description.length" class="service-hero-description">
        <p v-for="(paragraph, index) in description" :key="index">{{ paragraph }}</p>
      </div>
      <RouterLink v-if="contactLabel && contactRoute" class="service-hero-contact" :to="contactRoute">{{ contactLabel }}</RouterLink>
    </div>
  </AnimatedSection>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AnimatedSection from '@/components/common/AnimatedSection.vue'
import '@/css/common/service-hero.css'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  heroImage: { type: String, required: true },
  imageAlt: { type: String, default: '' },
  description: { type: Array, default: () => [] },
  language: { type: String, default: 'zh' },
  contactLabel: { type: String, default: '' },
  contactRoute: { type: String, default: '' },
})
</script>
