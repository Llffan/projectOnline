<template>
    <div class="barcode_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK-2.jpg" alt="">
        </div>
        <div class="intro">
            <div class="barcode-title">全球条形码注册</div>
            <div class="barcode-subtitle">商品身份证 / 国际通用 / 防伪溯源 / 进驻商城</div>
            <div class="barcode-description">
                <p>- Global Barcode Registration (EAN/UPC)</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/barcode/Barcode_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.barcode-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.barcode-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.barcode-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.barcode-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.barcode-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.barcode-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>