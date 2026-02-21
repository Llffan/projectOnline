<template>
    <div class="telecom_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK-2.jpg" alt="">
        </div>
        <div class="intro">
            <div class="telecom-title">香港电讯牌照</div>
            <div class="telecom-subtitle">无线电通讯 / 合规进出口 / 船舶电台 / 传送者牌照</div>
            <div class="telecom-description">
                <p>- Hong Kong Telecommunications License</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/telecom/Telecom_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.telecom-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.telecom-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.telecom-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.telecom-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.telecom-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.telecom-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>