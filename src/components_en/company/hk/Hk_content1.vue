<template>
    <div class="hk_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="">
        </div>
        <div class="intro">
            <div class="hk-title">Hong Kong Company Registration Guide</div>
            <div class="hk-subtitle">Advantages, Procedures, Conditions, Materials, Time, Fees & FAQs</div>
            <div class="hk-description">
                <p>- Hong Kongese Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/hk/Hk_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.hk-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.hk-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.hk-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.hk-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.hk-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.hk-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>