<template>
    <div class="hague_notary_content1">
        <div class="img_box">
            <img loading="lazy" src="@/assets/img/company/bvi/BVI.jpg" alt="International Notary">
        </div>
        <div class="intro">
            <div class="notary-title">Hague Apostille</div>
            <div class="notary-subtitle">One certificate, global access. Simplifying cross-border document circulation, recognized by 100+ member states</div>
            <div class="notary-description">
                <p>Hague Apostille</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/notary/hague/HagueNotary_content1.css'
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
