<template>
    <div class="ov_content1">
        <div class="img_box">
            <img src="@/assets/img/company/bvi/BVI.jpg" alt="">
        </div>
        <div class="intro">
            <div class="ov-title">海外公司年审服务</div>
            <div class="ov-subtitle">BVI / 开曼 / 塞舌尔 / 离岸公司合规维护</div>
            <div class="ov-description">
                <p>- Overseas Company Annual Review & Renewal</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/overseas_annual/TaxOv_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.ov-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ov-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ov-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.ov-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.ov-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.ov-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>