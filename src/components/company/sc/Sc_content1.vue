<template>
    <div class="sc_content1">
        <div class="img_box">
            <img src="@/assets/img/company/sc/SC.jpg" alt="">
        </div>
        <div class="intro">
            <div class="sc-title">塞舌尔公司注册全攻略</div>
            <div class="sc-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="sc-description">
                <p>- Seychelles Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/sc/Sc_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.sc-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.sc-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.sc-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.sc-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.sc-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.sc-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>