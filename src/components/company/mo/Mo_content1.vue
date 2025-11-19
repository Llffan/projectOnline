<template>
    <div class="mo_content1">
        <div class="img_box">
            <img src="@/assets/img/company/mo/MO.jpg" alt="">
        </div>
        <div class="intro">
            <div class="mo-title">澳门公司注册全攻略</div>
            <div class="mo-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="mo-description">
                <p>- Macau Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/mo/Mo_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.mo-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.mo-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.mo-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.mo-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.mo-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.mo-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>