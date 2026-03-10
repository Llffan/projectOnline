<template>
    <div class="us_content1">
        <div class="img_box">
            <img src="@/assets/img/company/us/US.jpg" alt="">
        </div>
        <div class="intro">
            <div class="us-title">US Company Registration Guide</div>
            <div class="us-subtitle">Advantages, Procedures, Conditions, Materials, Time, Fees & FAQs</div>
            <div class="us-description">
                <p>- USese Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/us/Us_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.us-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.us-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.us-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.us-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.us-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.us-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>