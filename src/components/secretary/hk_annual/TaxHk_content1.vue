<template>
    <div class="hk_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK.jpg" alt="">
        </div>
        <div class="intro">
            <div class="hk-title">香港税务申报与年审</div>
            <div class="hk-subtitle">专业会计师团队 / 合规审计 / 税务筹划 / 避免罚款</div>
            <div class="hk-description">
                <p>- Hong Kong Tax Declaration & Annual Return</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/hk_annual/TaxHk_content1.css'

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