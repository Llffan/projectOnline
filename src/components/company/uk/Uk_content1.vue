<template>
    <div class="uk_content1">
        <div class="img_box">
            <img src="@/assets/img/company/uk/UK.jpg" alt="">
        </div>
        <div class="intro">
            <div class="uk-title">英国公司注册全攻略</div>
            <div class="uk-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="uk-description">
                <p>- 英国公司注册</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/uk/Uk_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.uk-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.uk-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.uk-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.uk-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.uk-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.uk-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>