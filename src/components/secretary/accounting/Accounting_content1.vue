<template>
    <div class="accounting_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK.jpg" alt="做账与审计">
        </div>
        <div class="intro">
            <div class="title">做账与审计</div>
            <div class="description">
                <p>省心做帐方案：一站式贴心服务，让您告别财税繁琐事务</p>
                <p>全面审计解决方案：财务、合规、绩效审计一站式达成</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/accounting/Accounting_content1.css'

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
