<template>
    <div class="embassy_notary_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/bvi/BVI.jpg" alt="Embassy Notary">
        </div>
        <div class="intro">
            <div class="notary-title">使馆公证认证</div>
            <div class="notary-subtitle">跨国认证，法律基石。助力文书全球合规对接</div>
            <div class="notary-description">
                <p>Embassy Legalization</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/notary/embassy/EmbassyNotary_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.notary-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.notary-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.notary-description', { 
        opacity: 0, 
        y: 50 
    })
    
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
