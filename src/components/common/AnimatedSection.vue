<template>
  <div ref="root" class="animated-section"><slot /></div>
</template>
<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
import { useSectionMotion } from '@/composables/useSectionMotion'
const props = defineProps({ once: { type: Boolean, default: true }, y: { type: Number, default: 50 }, duration: { type: Number, default: 0.8 } })
const root = ref(null)
useSectionMotion(root, element => {
  gsap.from(element, { autoAlpha: 0, y: props.y, duration: props.duration, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 85%', once: props.once } })
})
</script>
