<template>
    <div class="us_content1">
        <div class="img_box">
            <img src="@/assets/img/company/us/US.jpg" alt="">
        </div>
        <div class="intro">
            <div class="us-title">美国公司注册</div>
            <div class="us-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="us-description">
                <p>- USA Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/us/Us_content1.css'

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