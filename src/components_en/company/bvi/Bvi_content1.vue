<template>
    <div class="bvi_content1">
        <div class="img_box">
            <img src="@/assets/img/company/bvi/BVI.jpg" alt="">
        </div>
        <div class="intro">
            <div class="bvi-title">BVI Company Registration Guide</div>
            <div class="bvi-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="bvi-description">
                <p>- BVI Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/bvi/Bvi_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.bvi-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.bvi-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.bvi-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.bvi-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.bvi-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.bvi-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>