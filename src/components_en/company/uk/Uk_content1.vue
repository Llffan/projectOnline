<template>
    <div class="uk_content1">
        <div class="img_box">
            <img src="@/assets/img/company/uk/UK.jpg" alt="">
        </div>
        <div class="intro">
            <div class="uk-title">UK Company Registration Guide</div>
            <div class="uk-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="uk-description">
                <p>- UK Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/uk/Uk_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.uk-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.uk-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.uk-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.uk-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.uk-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.uk-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>