<template>
    <div class="de_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/de/DE.jpg" alt="">
        </div>
        <div class="intro">
            <div class="de-title">Germany Company Registration Guide</div>
            <div class="de-subtitle">Advantages, Procedures, Conditions, Materials, Time, Fees & FAQs</div>
            <div class="de-description">
                <p>- Germanyese Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/de/De_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.de-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.de-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.de-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.de-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.de-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.de-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>