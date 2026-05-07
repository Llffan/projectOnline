<template>
    <div class="uk_notary_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/uk/UK.jpg" alt="UK Notarization">
        </div>
        <div class="intro">
            <div class="notary-title">UK Notarization & Legalization</div>
            <div class="notary-subtitle">UK Notarization / UK Hague Apostille</div>
            <div class="notary-description">
                <p>We provide comprehensive legal certification services for UK documents. UK notarization and UK Hague Apostille are our core certification services. One-stop processing available across all UK regions.</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/notary/uk/UkNotaryContent1.css'
onMounted(() => {
    const tl = gsap.timeline()
    gsap.set('.notary-title', { opacity: 0, y: 50 })
    gsap.set('.notary-subtitle', { opacity: 0, y: 50 })
    gsap.set('.notary-description', { opacity: 0, y: 50 })
    tl.to('.notary-title', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
    .to('.notary-subtitle', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.7')
    .to('.notary-description', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.7')
})
</script>
