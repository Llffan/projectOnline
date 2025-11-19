<template>
    <div class="de_content1">
        <div class="img_box">
            <img src="@/assets/img/company/de/DE.jpg" alt="">
        </div>
        <div class="intro">
            <div class="de-title">Germany Company Registration Complete Guide</div>
            <div class="de-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQ</div>
            <div class="de-description">
                <p>Germany Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/de/De_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.de-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.de-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.de-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.de-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.de-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.de-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>