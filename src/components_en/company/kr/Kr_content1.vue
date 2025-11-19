<template>
    <div class="kr_content1">
        <div class="img_box">
            <img src="@/assets/img/company/kr/KR.png" alt="">
        </div>
        <div class="intro">
            <div class="kr-title">Complete Guide to Korean Company Registration</div>
            <div class="kr-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQ</div>
            <div class="kr-description">
                <p>- Korean Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/kr/Kr_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.kr-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.kr-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.kr-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.kr-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.kr-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.kr-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>