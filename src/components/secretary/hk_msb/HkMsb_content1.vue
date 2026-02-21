<template>
    <div class="msb_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK.jpg" alt="">
        </div>
        <div class="intro">
            <div class="msb-title">香港MSB牌照申请</div>
            <div class="msb-subtitle">金钱服务经营者牌照 / (MSO) / 合规运营 / 金融牌照</div>
            <div class="msb-description">
                <p>- Money Service Operator License (MSO)</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/hk_msb/HkMsb_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.msb-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.msb-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.msb-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.msb-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.msb-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.msb-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>