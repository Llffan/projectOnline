<template>
    <div class="sg_content1">
        <div class="img_box">
            <img src="@/assets/img/company/sg/SG.jpg" alt="">
        </div>
        <div class="intro">
            <div class="sg-title">Singapore Company Registration Guide</div>
            <div class="sg-subtitle">Advantages, Procedures, Conditions, Materials, Time, Fees & FAQs</div>
            <div class="sg-description">
                <p>- Singaporeese Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/sg/Sg_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.sg-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.sg-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.sg-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.sg-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.sg-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.sg-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>