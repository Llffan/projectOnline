<template>
    <div class="de_content1">
        <div class="img_box">
            <img src="@/assets/img/company/de/DE.jpg" alt="">
        </div>
        <div class="intro">
            <div class="de-title">德国公司注册全攻略</div>
            <div class="de-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="de-description">
                <p>德国公司注册</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/de/De_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.de-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.de-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.de-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.de-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.de-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.de-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>