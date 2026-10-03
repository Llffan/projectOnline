<template>
  <div class="service-detail-section" :class="{ 'service-detail-section--reversed': reversed }">
    <h2 class="title">{{ title }}</h2>
    <div class="intro">
      <img v-if="image" loading="lazy" :src="image" :alt="imageAlt">
      <div class="text"><p v-for="(paragraph, index) in body" :key="index">{{ paragraph }}</p></div>
    </div>
  </div>
</template>

<script setup>
import '@/css/common/service-content.css'

defineProps({
  title: { type: String, required: true },
  body: { type: Array, default: () => [] },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  reversed: { type: Boolean, default: false },
})
</script>
