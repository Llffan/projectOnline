<template>
    <div class="mo_cgb_content1">
        <div class="img_box">
            <img src="@/assets/img/company/mo/MO.jpg" alt="">
        </div>
        <div class="intro">
            <div class="title">CGB (China Guangfa Bank) Macau Account Opening</div>
            <div class="subtitle">CGB Macau Account Opening Service: Comprehensive Guide for Corporate and Personal Accounts, Advantages, Document Checklist, Process, and FAQs</div>
            <div class="description">
                <p>Fast VIP scheduling for account opening with full professional guidance, oral coaching before interviews, guaranteed quality and brand, successful account opening ensured or a full refund.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css_en/bank_company/mo/cgb/Cgb_content1.css'

onMounted(() => {
    const tl = gsap.timeline()
    gsap.set('.title', { opacity: 0, y: 50 })
    gsap.set('.subtitle', { opacity: 0, y: 50 })
    gsap.set('.description', { opacity: 0, y: 50 })
    tl.to('.title', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
    .to('.subtitle', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.7')
    .to('.description', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.7')
})
</script>
