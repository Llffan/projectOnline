<template>
    <div class="sg_notary_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/sg/SG.jpg" alt="Singapore Notarization">
        </div>
        <div class="intro">
            <div class="notary-title">Singapore Notarization & Legalization</div>
            <div class="notary-subtitle">Singapore Notarization / Singapore Hague Apostille</div>
            <div class="notary-description">
                <p>We provide comprehensive legal certification services for Singapore documents. No matter where you are in the world, we offer one-stop Singapore notarization and Hague Apostille services.</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/notary/sg/SgNotaryContent1.css'
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
