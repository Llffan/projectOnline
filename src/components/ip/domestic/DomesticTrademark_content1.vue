<template>
    <div class="domestic_trademark_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/ip/patent_banner.png" alt="国内商标服务">
        </div>
        <div class="intro">
            <div class="title">国内商标注册及品牌咨询解决方案</div>
            <div class="description">
                <p>我们为您提供一站式的国内商标咨询与注册解决方案，保障您的品牌权益，助力企业品牌全面升级。</p>
                <p>作为您值得信赖的知识产权合作伙伴，我们将从商标检索、申请、驳回复审、异议到品牌保护策略，为您提供全方位的专业支持与指导。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/ip/domestic/DomesticTrademark_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.title', { 
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
    .to('.description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>
