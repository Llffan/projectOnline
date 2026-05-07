<template>
    <div class="hk_notary_content1">
        <div class="img_box">
            <!-- Using an appropriate bank or notary banner img. Let's use the HK bank image or a common one -->
            <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="Hong Kong Notary">
        </div>
        <div class="intro">
            <div class="notary-title">香港公证认证</div>
            <div class="notary-subtitle">香港海牙认证 / 内地转呈认证</div>
            <div class="notary-description">
                <p>一站式快速办理，解决公事商事文书跨国/回内地流转难题</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/notary/hk/HkNotaryContent1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.notary-title', { opacity: 0, y: 50 })
    gsap.set('.notary-subtitle', { opacity: 0, y: 50 })
    gsap.set('.notary-description', { opacity: 0, y: 50 })
    
    // 添加动画序列
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
