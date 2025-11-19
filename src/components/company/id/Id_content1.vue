<template>
    <div class="id_content1">
        <div class="img_box">
            <img src="@/assets/img/company/id/ID.jpg" alt="">
        </div>
        <div class="intro">
            <div class="id-title">印度尼西亚公司注册全攻略</div>
            <div class="id-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="id-description">
                <p>- 印度尼西亚公司注册</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/id/Id_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.id-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.id-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.id-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.id-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.id-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.id-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>