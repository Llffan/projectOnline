<template>
    <div class="intl_trademark_content1">
        <div class="img_box">
            <img src="@/assets/img/ip/patent_banner.png" alt="国际商标服务">
        </div>
        <div class="intro">
            <div class="title">国际商标服务</div>
            <div class="subtitle">流程详解、区域差异及保护策略</div>
            <div class="description">
                <p>拓展全球市场，筑牢品牌护城河。一站式国际商标注册方案，助力企业品牌合规出海。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/ip/intl/IntlTrademark_content1.css'

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
