<template>
    <div class="sc_content1">
        <div class="img_box">
            <img src="@/assets/img/company/sc/SC.jpg" alt="">
        </div>
        <div class="intro">
            <div class="sc-title">Seychelles Company Registration Guide</div>
            <div class="sc-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="sc-description">
                <p>- Seychelles Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/sc/Sc_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.sc-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.sc-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.sc-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.sc-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.sc-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.sc-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>