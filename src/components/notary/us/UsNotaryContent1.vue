<template>
    <div class="us_notary_content1">
        <div class="img_box">
            <img src="@/assets/img/company/us/US.jpg" alt="美国公证认证">
        </div>
        <div class="intro">
            <div class="notary-title">美国公证认证</div>
            <div class="notary-subtitle">美国公证 / 美国海牙认证</div>
            <div class="notary-description">
                <p>美国没有官方的公证处，公证员需取得资格即可在州内从事公证服务。全美50洲均可受理，美国出具的文件经过海牙认证后可无缝衔接在全球超100个成员国使用。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/notary/us/UsNotaryContent1.css'

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
