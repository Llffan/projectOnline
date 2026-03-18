<template>
    <div class="company_choose_us">
        <div class="title">
            Our Core Strengths
        </div>
        <div class="intro" ref="introRef">
            <div v-for="(item, index) in advantages" :key="index" class="advantage" :ref="el => advantageRefs[index] = el">
                <div class="img">
                    <img :src="item.imgSrc" :alt="item.title">
                </div>
                <div class="text1">
                    {{ item.title }}
                </div>
                <div class="text2">
                    {{ item.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/company/common/ChooseUs.css'

gsap.registerPlugin(ScrollTrigger)

const advantageRefs = ref([])
const introRef = ref(null)

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: 'Fast-Track Service',
        description: 'Foreign investors uniquely benefit from our fast-track corporate setup line, enabling fully electronic submissions resolved in just two weeks.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: 'Profound Experience & Success Rates',
        description: 'SHI ZHOU TONG primarily centralizes on SME global footprints, dispensing exceptionally experienced counseling to countless enterprises.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: 'Comprehensive Value-Added Scope',
        description: 'Our proprietary overseas team extensively guarantees cohesive finance, tax, and legal support post-registration to assure continuous fluent operations.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: 'Dedicated 1-on-1 Commercial Sync',
        description: 'Exclusively assigned consulting teams consisting of advisors and certified accountants are dispatched to smoothly maneuver your private timelines.'
    }
]

onMounted(() => {
    advantageRefs.value.forEach((item, index) => {
        gsap.fromTo(item,
            { y: 50, opacity: 0, transition: 'none' },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: introRef.value,
                    start: 'top 80%'
                },
                onComplete: function() {
                    gsap.set(item, { clearProps: "y,transition" })
                }
            }
        );
    })
})
</script>
