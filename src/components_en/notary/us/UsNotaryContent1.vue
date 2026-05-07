<template>
    <div class="us_notary_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/us/US.jpg" alt="US Notarization">
        </div>
        <div class="intro">
            <div class="notary-title">US Notarization & Legalization</div>
            <div class="notary-subtitle">US Notarization / US Hague Apostille</div>
            <div class="notary-description">
                <p>The US does not have official notary offices. Notaries Public must pass professional exams to obtain their license. Services available in all 50 states. US-issued documents can be seamlessly used in 100+ Hague Convention member states after apostille.</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/notary/us/UsNotaryContent1.css'
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
