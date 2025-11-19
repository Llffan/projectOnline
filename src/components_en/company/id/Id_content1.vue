<template>
    <div class="id_content1">
        <div class="img_box">
            <img src="@/assets/img/company/id/ID.jpg" alt="">
        </div>
        <div class="intro">
            <div class="id-title">Indonesia Company Registration Guide</div>
            <div class="id-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="id-description">
                <p>- Indonesia Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/id/Id_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.id-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.id-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.id-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.id-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.id-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.id-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>