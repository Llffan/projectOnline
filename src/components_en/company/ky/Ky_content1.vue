<template>
    <div class="ky_content1">
        <div class="img_box">
            <img src="@/assets/img/company/ky/KY.jpg" alt="">
        </div>
        <div class="intro">
            <div class="ky-title">Cayman Islands Company Registration Guide</div>
            <div class="ky-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="ky-description">
                <p>- Cayman Islands Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/ky/Ky_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.ky-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ky-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ky-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.ky-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.ky-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.ky-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>