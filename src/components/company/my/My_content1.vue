<template>
    <div class="my_content1">
        <div class="img_box">
            <img src="@/assets/img/company/my/MY.jpg" alt="">
        </div>
        <div class="intro">
            <div class="my-title">马来西亚公司注册</div>
            <div class="my-subtitle">马来西亚公司注册优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="my-description">
                <p>- Malaysia Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/my/My_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.my-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.my-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.my-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.my-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.my-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.my-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>