<template>
    <div class="uk_notary_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/uk/UK.jpg" alt="英国公证认证">
        </div>
        <div class="intro">
            <div class="notary-title">英国公证认证</div>
            <div class="notary-subtitle">英国公证 / 英国海牙认证</div>
            <div class="notary-description">
                <p>公事通Gssto为您提供英国文件的的全方位法律认证服务，英国公证和英国海牙认证是我们的核心公证认证服务。英国各地区均可一站式办理。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/notary/uk/UkNotaryContent1.css'

onMounted(() => {
    const tl = gsap.timeline()
    
    gsap.set('.notary-title', { opacity: 0, y: 50 })
    gsap.set('.notary-subtitle', { opacity: 0, y: 50 })
    gsap.set('.notary-description', { opacity: 0, y: 50 })
    
    tl.to('.notary-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.notary-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.notary-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>
