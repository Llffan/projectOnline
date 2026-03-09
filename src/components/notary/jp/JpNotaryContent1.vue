<template>
    <div class="jp_notary_content1">
        <div class="img_box">
            <img src="@/assets/img/company/jp/JP.jpg" alt="日本公证认证">
        </div>
        <div class="intro">
            <div class="notary-title">日本公证认证</div>
            <div class="notary-subtitle">日本公证 / 日本海牙认证</div>
            <div class="notary-description">
                <p>公事通Gssto为您提供日本文件的的全方位法律认证服务。无论您在世界的哪一个角落，都可以为您提供一站式代办日本公证核发及海牙认证服务。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/notary/jp/JpNotaryContent1.css'

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
