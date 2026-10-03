<template>
  <div ref="root" class="animated-section"><slot /></div>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const props = defineProps({ once: { type: Boolean, default: true }, y: { type: Number, default: 50 }, duration: { type: Number, default: 0.8 } })
const root = ref(null)
let context
onMounted(() => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
  gsap.registerPlugin(ScrollTrigger)
  context = gsap.context(() => {
    gsap.from(root.value, { autoAlpha: 0, y: props.y, duration: props.duration, ease: 'power2.out', scrollTrigger: { trigger: root.value, start: 'top 85%', once: props.once } })
  }, root.value)
})
onBeforeUnmount(() => context?.revert())
</script>
