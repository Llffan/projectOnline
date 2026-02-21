<template>
    <div class="notary_content1">
        <div class="img_box">
            <img src="@/assets/img/company/bvi/BVI.jpg" alt="International Notary">
        </div>
        <div class="intro">
            <div class="notary-title">海牙公证认证</div>
            <div class="notary-subtitle">一纸认证，全球通行。简化跨国文书流转，100+成员国互认</div>
            <div class="notary-description">
                <p>Hague Apostille</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/notary/Notary_content1.css'

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
