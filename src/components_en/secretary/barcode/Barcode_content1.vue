<template>
    <div class="barcode_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/hk/HK-2.jpg" alt="">
        </div>
        <div class="intro">
            <div class="barcode-title">Global barcode registration</div>
            <div class="barcode-subtitle">Commodity ID card / Internationally applicable / Anti-counterfeiting traceability / Stationed in the mall</div>
            <div class="barcode-description">
                <p>- Global Barcode Registration (EAN/UPC)</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/secretary/barcode/Barcode_content1.css'

// transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state settings
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
    
    // Add animation sequence
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