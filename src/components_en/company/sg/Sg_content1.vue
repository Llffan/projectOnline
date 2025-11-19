<template>
    <div class="sg_content1">
        <div class="img_box">
            <img src="@/assets/img/company/sg/SG.jpg" alt="">
        </div>
        <div class="intro">
            <div class="sg-title">Singapore Company Registration Guide</div>
            <div class="sg-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="sg-description">
                <p>- Singapore Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/sg/Sg_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.sg-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.sg-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.sg-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.sg-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.sg-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.sg-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>