<template>
  <div class="constructions_content1">
    <div class="img_box"><img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="香港个人银行账户开户"></div>
    <div class="intro">
      <div ref="titleRef" class="title">香港个人银行账户开户</div>
      <div ref="subtitleRef" class="subtitle">银行选择、资料准备、预约面签、合规审核及账户维护</div>
      <div ref="descriptionRef" class="description"><p>根据申请人的身份、资金用途和银行政策匹配开户方案，协助准备资料并预约香港银行网点。</p></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/bank_company/hk/construction/Constructions_content1.css'

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
