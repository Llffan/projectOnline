<template>
    <div class="jp_content1">
        <div class="img_box">
            <img src="@/assets/img/company/jp/JP.jpg" alt="">
        </div>
        <div class="intro">
            <div class="jp-title">Japan Company Registration Guide</div>
            <div class="jp-subtitle">Advantages, Procedures, Conditions, Materials, Time, Fees & FAQs</div>
            <div class="jp-description">
                <p>- Japanese Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/jp/Jp_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.jp-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.jp-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.jp-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.jp-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.jp-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.jp-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>