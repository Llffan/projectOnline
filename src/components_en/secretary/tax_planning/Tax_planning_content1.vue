<template>
    <div class="tax_planning_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK.jpg" alt="tax planning">
        </div>
        <div class="intro">
            <div class="title">Accounting and Tax Consulting Solutions</div>
            <div class="description">
                <p>Our accounting and tax consulting solutions provide you with the expertise and guidance you need to take on large projects with confidence.</p>
                <p>We are your trusted partner for financial transformation, supporting your ERP localization projects and providing advice on complex international accounting matters or targeted tax guidance.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/secretary/tax_planning/Tax_planning_content1.css'

// transition animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state settings
    gsap.set('.title', { 
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
    .to('.description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>
