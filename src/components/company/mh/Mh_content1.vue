<template>
    <div class="mh_content1">
        <div class="img_box">
            <img src="@/assets/img/company/mh/MH.jpg" alt="">
        </div>
        <div class="intro">
            <div class="mh-title">马绍尔公司注册全攻略</div>
            <div class="mh-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="mh-description">
                <p>- Marshall Islands Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/mh/Mh_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.mh-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.mh-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.mh-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.mh-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.mh-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.mh-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>