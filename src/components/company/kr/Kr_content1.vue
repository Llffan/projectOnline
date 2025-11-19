<template>
    <div class="kr_content1">
        <div class="img_box">
            <img src="@/assets/img/company/kr/KR.png" alt="">
        </div>
        <div class="intro">
            <div class="kr-title">韩国公司注册全攻略</div>
            <div class="kr-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="kr-description">
                <p>- Korean Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/kr/Kr_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.kr-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.kr-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.kr-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.kr-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.kr-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.kr-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>