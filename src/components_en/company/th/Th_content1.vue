<template>
    <div class="th_content1">
        <div class="img_box">
            <img src="@/assets/img/company/th/TH.jpg" alt="">
        </div>
        <div class="intro">
            <div class="th-title">Thailand Company Registration Guide</div>
            <div class="th-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="th-description">
                <p>- Thailand Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/th/Th_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.th-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.th-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.th-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.th-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.th-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.th-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>