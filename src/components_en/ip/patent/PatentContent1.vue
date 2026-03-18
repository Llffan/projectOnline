<template>
    <div class="patent_content1">
        <div class="img_box">
            <img src="@/assets/img/ip/patent_banner.png" alt="International Patent Services">
        </div>
        <div class="intro">
            <div class="patent-title">International Patent Application</div>
            <div class="patent-description">
                <p>Protecting Innovations, Enhancing Core Competitiveness</p>
                <p>One-stop Intellectual Property Solutions: Coverage for Inventions, Utility Models, and Designs</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/ip/patent/PatentContent1.css'

// Animation
onMounted(() => {
    const tl = gsap.timeline()
    
    // Initial state - specific classes and scoping
    gsap.set('.patent_content1 .patent-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.patent_content1 .patent-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // Animation sequence
    tl.to('.patent_content1 .patent-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.patent_content1 .patent-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>
