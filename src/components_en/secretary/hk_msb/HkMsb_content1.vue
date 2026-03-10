<template>
    <div class="msb_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK.jpg" alt="">
        </div>
        <div class="intro">
            <div class="msb-title">Hong Kong MSB license application</div>
            <div class="msb-subtitle">Money Service Operator License / (MSO) / Compliance Operation / Financial License</div>
            <div class="msb-description">
                <p>- Money Service Operator License (MSO)</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/secretary/hk_msb/HkMsb_content1.css'

// transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state settings
    gsap.set('.msb-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.msb-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.msb-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.msb-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.msb-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.msb-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>