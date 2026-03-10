<template>
    <div class="tax_filing_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK.jpg" alt="tax declaration">
        </div>
        <div class="intro">
            <div class="title">tax declaration</div>
            <div class="description">
                <p>Worry-free tax filing solution: one-stop considerate service, allowing you to say goodbye to tedious tax matters</p>
                <p>Changjiajie uses its professional tax experience to help you with compliance reporting, risk reduction, and cost-saving planning.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/secretary/tax_filing/Tax_filing_content1.css'

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
