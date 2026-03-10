<template>
    <div class="hsbc_content1">
        <div class="img_box"><img src="@/assets/img/company/香港.jpg" alt=""></div>
        <div class="intro">
            <div class="title">HSBC (USA) Account Opening</div>
            <div class="subtitle">HSBC (USA) Account Opening: Corporate & Personal Account Guide, Advantages, Required Documents, Process & FAQs</div>
            <div class="description"><p>VIP fast-track appointment with dedicated guidance throughout, pre-interview coaching before bank signing. Quality and brand guaranteed, account opening success assured — full refund if unsuccessful</p></div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/bank_company/us/hsbc/Hsbc_content1.css'
onMounted(() => {
    const tl = gsap.timeline()
    gsap.set('.title', { opacity: 0, y: 50 })
    gsap.set('.subtitle', { opacity: 0, y: 50 })
    gsap.set('.description', { opacity: 0, y: 50 })
    tl.to('.title', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
    .to('.subtitle', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.7')
    .to('.description', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.7')
})
</script>
