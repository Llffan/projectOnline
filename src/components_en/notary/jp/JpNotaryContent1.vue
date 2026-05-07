<template>
    <div class="jp_notary_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/jp/JP.jpg" alt="Japan Notarization">
        </div>
        <div class="intro">
            <div class="notary-title">Japan Notarization & Legalization</div>
            <div class="notary-subtitle">Japan Notarization / Japan Hague Apostille</div>
            <div class="notary-description">
                <p>We provide comprehensive legal certification services for Japanese documents. No matter where you are in the world, we offer one-stop Japan notarization and Hague Apostille services.</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/notary/jp/JpNotaryContent1.css'
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
