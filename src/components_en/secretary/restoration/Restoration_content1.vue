<template>
    <div class="restoration_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK.jpg" alt="company recovery">
        </div>
        <div class="intro">
            <div class="title">company recovery</div>
            <div class="subtitle">Comprehensive Guide to Applicable Scenarios and Procedures for Hong Kong Company Resumption</div>
            <div class="description">
                <p>Restoring company registration is an important legal way to dispose of assets that have been cancelled. If not restored in time, the company's historically related assets will be regarded as unclaimed property and will be taken back to the Hong Kong government.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/secretary/restoration/Restoration_content1.css'

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
