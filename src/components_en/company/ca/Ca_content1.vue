<template>
    <div class="ca_content1">
        <div class="img_box">
            <img src="@/assets/img/company/ca/CA.jpg" alt="">
        </div>
        <div class="intro">
            <div class="ca-title">Canada Company Registration Guide</div>
            <div class="ca-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="ca-description">
                <p>- Canada Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/ca/Ca_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.ca-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ca-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.ca-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.ca-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.ca-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.ca-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>