<template>
    <div class="sg_citi_content1">
        <div class="img_box">
            <img src="@/assets/img/company/sg/SG.jpg" alt="">
        </div>
        <div class="intro">
            <div class="title">Citibank Singapore Account Opening</div>
            <div class="subtitle">Citibank Singapore Account Opening Service: Comprehensive Guide for Corporate and Personal Accounts, Advantages, Document Checklist, Process, and FAQs</div>
            <div class="description">
                <p>Fast VIP scheduling for account opening with full professional guidance, oral coaching before interviews, guaranteed quality and brand, successful account opening ensured or a full refund.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/bank_company/sg/citi/Citi_content1.css'

onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state
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
    
    // Animation sequence
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
