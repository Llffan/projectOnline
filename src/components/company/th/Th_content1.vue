<template>
    <div class="th_content1">
        <div class="img_box">
            <img src="@/assets/img/company/th/TH.jpg" alt="">
        </div>
        <div class="intro">
            <div class="th-title">泰国公司注册</div>
            <div class="th-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="th-description">
                <p>- Thailand Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/th/Th_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.th-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.th-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.th-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.th-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.th-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.th-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>