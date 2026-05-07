<template>
    <div class="accounting_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="Accounting and auditing">
        </div>
        <div class="intro">
            <div class="title">Accounting and auditing</div>
            <div class="description">
                <p>Worry-free accounting plan: one-stop considerate service, allowing you to say goodbye to tedious financial and tax matters</p>
                <p>Comprehensive audit solution: one-stop financial, compliance and performance audit</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/secretary/accounting/Accounting_content1.css'

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
