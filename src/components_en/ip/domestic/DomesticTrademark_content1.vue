<template>
    <div class="domestic_trademark_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/ip/patent_banner.png" alt="Domestic Trademark Services">
        </div>
        <div class="intro">
            <div class="title">Domestic Trademark Registration & Brand Consulting</div>
            <div class="description">
                <p>We provide one-stop domestic trademark consulting and registration solutions to protect your brand rights and facilitate comprehensive brand upgrades.</p>
                <p>As your trusted intellectual property partner, we provide full support and guidance ranging from trademark search, application, and refusal review to opposition and brand protection strategies.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/ip/domestic/DomesticTrademark_content1.css'

// Animation
onMounted(() => {
    const tl = gsap.timeline()
    
    gsap.set('.title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.description', { 
        opacity: 0, 
        y: 50 
    })
    
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
