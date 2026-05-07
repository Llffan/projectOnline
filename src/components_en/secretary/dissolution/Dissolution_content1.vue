<template>
    <div class="dissolution_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="Company cancellation">
        </div>
        <div class="intro">
            <div class="title">Company cancellation</div>
            <div class="subtitle">Full process guide for legal closure and cancellation of Hong Kong companies</div>
            <div class="description">
                <p>If the company ceases operations, it can submit formal cancellation and liquidation to the Company Registry and the Tax Bureau through legal procedures. Safely and compliantly divest liability risks and handle the closing of remaining assets.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/secretary/dissolution/Dissolution_content1.css'

// transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state settings
    gsap.set('.title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>
