<template>
    <div class="fr_content1">
        <div class="img_box">
            <img src="@/assets/img/company/fr/FR.jpg" alt="">
        </div>
        <div class="intro">
            <div class="fr-title">France Company Registration Guide</div>
            <div class="fr-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="fr-description">
                <p>- France Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/fr/Fr_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.fr-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.fr-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.fr-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.fr-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.fr-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.fr-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>