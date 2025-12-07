<template>
    <div class="vn_content1">
        <div class="img_box">
            <img src="@/assets/img/company/vn/VN.jpg" alt="">
        </div>
        <div class="intro">
            <div class="vn-title">越南公司注册</div>
            <div class="vn-subtitle">优势、流程、条件、资料、时间、费用及常见问题</div>
            <div class="vn-description">
                <p>- Vietnam Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/company/vn/Vn_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.vn-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.vn-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.vn-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.vn-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.vn-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.vn-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>