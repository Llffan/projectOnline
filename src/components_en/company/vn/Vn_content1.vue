<template>
    <div class="vn_content1">
        <div class="img_box">
            <img src="@/assets/img/company/vn/VN.jpg" alt="">
        </div>
        <div class="intro">
            <div class="vn-title">Vietnam Company Registration Guide</div>
            <div class="vn-subtitle">Advantages, Process, Requirements, Documents, Timeline, Costs and FAQs</div>
            <div class="vn-description">
                <p>- Vietnam Company Registration</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/company/vn/Vn_content1.css'

// Transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state setup
    gsap.set('.vn-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.vn-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.vn-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.vn-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.vn-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.vn-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>