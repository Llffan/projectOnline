<template>
    <div class="intl_trademark_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/ip/patent_banner.png" alt="International Trademark Services">
        </div>
        <div class="intro">
            <div class="intl-title">International Trademark Services</div>
            <div class="intl-subtitle">Global Procedures, Regional Nuances & Protection Strategies</div>
            <div class="intl-description">
                <p>Expanding global markets and building brand moats. One-stop international trademark solutions to help your brand go global compliantly.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/ip/intl/IntlTrademark_content1.css'

// Animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state - using specific classes and scoping
    gsap.set('.intl_trademark_content1 .intl-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.intl_trademark_content1 .intl-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.intl_trademark_content1 .intl-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Animation sequence
    tl.to('.intl_trademark_content1 .intl-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.intl_trademark_content1 .intl-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.intl_trademark_content1 .intl-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>
