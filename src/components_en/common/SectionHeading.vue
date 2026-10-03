<template>
  <div class="section-heading">
    <div class="title">{{ title }}</div>
    <div v-if="subtitle" class="title_en">{{ subtitle }}</div>
    <div v-if="description" class="intro">{{ description }}</div>
  </div>
</template>
<script setup>
defineProps({ title: { type: String, required: true }, subtitle: { type: String, default: '' }, description: { type: String, default: '' } })
</script>
