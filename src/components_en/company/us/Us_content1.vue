<template>
    <div class="us_content1">
        <div class="img_box">
            <img src="@/assets/img/company/us/US.jpg" alt="">
        </div>
        <div class="intro">
            <div class="us-title">USA Company Registration Guide</div>
            <div class="us-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="us-description">
                <p>- USA Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/us/Us_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.us-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.us-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.us-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.us-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.us-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.us-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>