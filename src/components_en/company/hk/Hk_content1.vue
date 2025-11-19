<template>
    <div class="hk_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK.jpg" alt="">
        </div>
        <div class="intro">
            <div class="hk-title">Hong Kong Company Registration Complete Guide</div>
            <div class="hk-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQ</div>
            <div class="hk-description">
                <p>Hong Kong Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/hk/Hk_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.hk-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.hk-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.hk-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.hk-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.hk-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.hk-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>