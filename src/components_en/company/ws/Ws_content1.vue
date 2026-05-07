<template>
    <div class="ws_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/ws/WS.jpg" alt="">
        </div>
        <div class="intro">
            <div class="ws-title">Samoa Company Registration Guide</div>
            <div class="ws-subtitle">Advantages, Procedures, Conditions, Materials, Time, Fees & FAQs</div>
            <div class="ws-description">
                <p>- Samoaese Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/ws/Ws_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.ws-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ws-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ws-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.ws-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.ws-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.ws-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>