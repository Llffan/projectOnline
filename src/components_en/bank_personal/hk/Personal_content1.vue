<template>
  <div class="constructions_content1">
    <div class="img_box"><img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="Hong Kong personal bank account opening"></div>
    <div class="intro">
      <div ref="titleRef" class="title">Hong Kong Personal Bank Account Opening</div>
      <div ref="subtitleRef" class="subtitle">Bank selection, document preparation, branch appointment, compliance review and account maintenance</div>
      <div ref="descriptionRef" class="description"><p>We help match applicants with suitable banks and assist with document preparation and Hong Kong branch appointments.</p></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/bank_company/hk/construction/Constructions_content1.css'

const titleRef = ref(null)
const subtitleRef = ref(null)
const descriptionRef = ref(null)

onMounted(() => {
  const elements = [titleRef.value, subtitleRef.value, descriptionRef.value].filter(Boolean)
  gsap.set(elements, { opacity: 0, y: 50 })
  gsap.timeline()
    .to(titleRef.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
    .to(subtitleRef.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.55')
    .to(descriptionRef.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.55')
})
</script>
