<template>
    <div class="dissolution_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="公司注销">
        </div>
        <div class="intro">
            <div class="title">公司注销</div>
            <div class="subtitle">香港公司合法闭业及注销全流程指引</div>
            <div class="description">
                <p>如公司终止运营，可通过法定程序向公司注册处及税务局递交正式注销与清算。安全合规地剥离义务风险，处理剩余资产结业。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/dissolution/Dissolution_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>
