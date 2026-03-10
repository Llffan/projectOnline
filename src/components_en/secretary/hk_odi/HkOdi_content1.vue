<template>
    <div class="odi_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK-2.jpg" alt="ODI filing">
        </div>
        <div class="intro">
            <div class="odi-title">ODI overseas investment registration</div>
            <div class="odi-subtitle">Enterprise Overseas Investment Certificate / (ODI) / Compliance to go abroad / Filing with the Ministry of Commerce</div>
            <div class="odi-description">
                <p>- Overseas Direct Investment (ODI)</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/secretary/hk_odi/HkOdi_content1.css'

// transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state settings
    gsap.set('.odi-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.odi-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.odi-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Add animation sequence
    tl.to('.odi-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.odi-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.odi-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>