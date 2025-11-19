<template>
    <div class="mo_content1">
        <div class="img_box">
            <img src="@/assets/img/company/mo/MO.jpg" alt="">
        </div>
        <div class="intro">
            <div class="mo-title">Complete Guide to Macau Company Registration</div>
            <div class="mo-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQ</div>
            <div class="mo-description">
                <p>- Macau Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/mo/Mo_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.mo-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.mo-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.mo-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.mo-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.mo-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.mo-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>