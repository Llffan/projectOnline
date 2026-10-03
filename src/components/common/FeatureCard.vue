<template>
  <article class="feature-card" :class="{ clickable: !!to }" :role="to ? 'link' : undefined" :tabindex="to ? 0 : undefined" @click="handleClick" @keydown.enter="handleClick">
    <slot v-if="$slots.default" />
    <template v-else>
      <img v-if="image" :src="image" :alt="title" class="feature-card-image">
      <svg v-else-if="iconId" class="feature-card-icon" aria-hidden="true"><use :xlink:href="iconId"></use></svg>
      <div class="feature-card-content"><h3>{{ title }}</h3><p v-if="description">{{ description }}</p></div>
    </template>
  </article>
</template>
<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({ title: { type: String, default: '' }, description: { type: String, default: '' }, image: { type: String, default: '' }, iconId: { type: String, default: '' }, to: { type: String, default: '' } })
const router = useRouter()
const handleClick = () => { if (props.to) router.push(props.to) }
</script>