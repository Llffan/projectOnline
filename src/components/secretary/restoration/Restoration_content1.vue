<template>
    <div class="restoration_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="公司恢复">
        </div>
        <div class="intro">
            <div class="title">公司恢复</div>
            <div class="subtitle">香港公司恢复适用场景与办理全指南</div>
            <div class="description">
                <p>恢复公司注册是处置其已注销名下资产的重要合法途径。若未及时恢复，公司挂靠的历史相关资产将被视为无主财产收归香港政府。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/restoration/Restoration_content1.css'

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
