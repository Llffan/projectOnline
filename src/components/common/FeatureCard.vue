<template>
  <article class="feature-card" :class="{ clickable: !!to }" @click="handleClick">
    <slot v-if="$slots.default" />
    <img v-else-if="image" :src="image" :alt="title" class="feature-card-image">
    <svg v-else-if="iconId" class="feature-card-icon" aria-hidden="true"><use :xlink:href="iconId"></use></svg>
    <div class="feature-card-content"><h3>{{ title }}</h3><p v-if="description">{{ description }}</p></div>
  </article>
</template>
<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({ title: { type: String, required: true }, description: { type: String, default: '' }, image: { type: String, default: '' }, iconId: { type: String, default: '' }, to: { type: String, default: '' } })
const router = useRouter()
const handleClick = () => { if (props.to) router.push(props.to) }
</script>
