<template>
    <div class="sc_content1">
        <div class="img_box">
            <img src="@/assets/img/company/香港.jpg" alt="">
        </div>
        <div class="intro">
            <div class="title">香港渣打银行开户</div>
            <div class="subtitle">香港渣打银行开户服务：企业与个人开户全攻略、开户优势、资料清单、流程及常见问题解答</div>
            <div class="description">
                <p>VIP通道快速预约开户专人全程指导，银行面签前口述辅导品质和品牌均有保证开户确保成功，不成功就退款</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/bank_company/hk/sc/Sc_content1.css'

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
