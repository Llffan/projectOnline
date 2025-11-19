<template>
    <div class="my_content1">
        <div class="img_box">
            <img src="@/assets/img/company/my/MY.jpg" alt="">
        </div>
        <div class="intro">
            <div class="my-title">Malaysia Company Registration Guide</div>
            <div class="my-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="my-description">
                <p>- Malaysia Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/my/My_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.my-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.my-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.my-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.my-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.my-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.my-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>