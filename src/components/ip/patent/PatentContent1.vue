<template>
    <div class="patent_content1">
        <div class="img_box">
            <img src="@/assets/img/ip/patent_banner.png" alt="国内专利申请">
        </div>
        <div class="intro">
            <div class="title">国际专利申请</div>
            <div class="description">
                <p>保护创新成果，提升企业核心竞争力</p>
                <p>一站式知识产权解决方案：发明、实用新型、外观设计全覆盖</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/ip/patent/PatentContent1.css'

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
