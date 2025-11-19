<template>
    <div class="ca_content1">
        <div class="img_box">
            <img src="@/assets/img/company/ca/CA.jpg" alt="">
        </div>
        <div class="intro">
            <div class="ca-title">加拿大公司注册全攻略</div>
            <div class="ca-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="ca-description">
                <p>- 加拿大公司注册</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/ca/Ca_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.ca-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ca-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ca-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.ca-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.ca-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.ca-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>