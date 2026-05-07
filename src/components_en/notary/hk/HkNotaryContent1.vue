<template>
    <div class="hk_notary_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="Hong Kong Notary">
        </div>
        <div class="intro">
            <div class="notary-title">Hong Kong Notarization & Legalization</div>
            <div class="notary-subtitle">HK Hague Apostille / Mainland Transfer Legalization</div>
            <div class="notary-description">
                <p>One-stop fast processing, solving cross-border/mainland document circulation challenges</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/notary/hk/HkNotaryContent1.css'
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
