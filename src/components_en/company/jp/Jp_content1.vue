<template>
    <div class="jp_content1">
        <div class="img_box">
            <img src="@/assets/img/company/jp/JP.jpg" alt="">
        </div>
        <div class="intro">
            <div class="jp-title">Complete Guide to Japanese Company Registration</div>
            <div class="jp-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQ</div>
            <div class="jp-description">
                <p>- Japanese Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/jp/Jp_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.jp-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.jp-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.jp-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.jp-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.jp-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.jp-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>