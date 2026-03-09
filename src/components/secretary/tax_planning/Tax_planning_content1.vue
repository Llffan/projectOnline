<template>
    <div class="tax_planning_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK.jpg" alt="税务规划">
        </div>
        <div class="intro">
            <div class="title">会计与税务咨询解决方案</div>
            <div class="description">
                <p>我们的会计与税务咨询解决方案可为您提供所需的专业知识和指导，助您胸有成竹地承接大型项目。</p>
                <p>我们是您值得信赖的合作伙伴，可助您进行财务转型、支持您的ERP本地化项目，并为复杂的国际会计事务提供建议或有针对性的税务指导。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/tax_planning/Tax_planning_content1.css'

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
