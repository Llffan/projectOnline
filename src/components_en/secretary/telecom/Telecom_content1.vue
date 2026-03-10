<template>
    <div class="telecom_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK-2.jpg" alt="">
        </div>
        <div class="intro">
            <div class="telecom-title">Hong Kong Telecommunications License</div>
            <div class="telecom-subtitle">Radio communications / Compliant import and export / Ship station / Transmitter license</div>
            <div class="telecom-description">
                <p>- Hong Kong Telecommunications License</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/secretary/telecom/Telecom_content1.css'

// transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state settings
    gsap.set('.telecom-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.telecom-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.telecom-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.telecom-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.telecom-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.telecom-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>