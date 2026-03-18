<template>
    <div class="content5">
        <div class="scoll_backImg scoll_common">
            <div class="scoll_cover"></div>
            <div class="cover_content">
                <div class="content_desc">
                    <p ref="introRef">SHI ZHOU TONG provides global offshore registration platforms in more than 60 countries and regions, focusing on offshore company registration, account opening, annual review, accounting & auditing, tax filing, and trademark brand protection.</p>
                    <div ref="bottonRef" class="button">Details<p class="p1">→</p></div>
                </div>
                <div class="content_body">
                    <div class="num_display" ref="coverRef">
                        <div class="num" v-for="(item, idx) in num_display" :key="idx">
                            <span>{{ cover_displayValues[idx] }}</span>+
                            <p>{{ item.desc }}</p>
                        </div>
                    </div>
                    <div class="account_img" ref="accountRef">
                        <img src="@/assets/img/bank/1.png" alt="">
                        <img src="@/assets/img/bank/2.jpg" alt="">
                        <img src="@/assets/img/bank/3.jpg" alt="">
                        <img src="@/assets/img/bank/4.jpg" alt="">
                        <img src="@/assets/img/bank/5.jpg" alt="">
                        <img src="@/assets/img/bank/6.jpg" alt="">
                        <img src="@/assets/img/bank/7.jpg" alt="">
                        <img src="@/assets/img/bank/8.jpg" alt="">
                        <img src="@/assets/img/bank/9.jpg" alt="">
                        <img src="@/assets/img/bank/10.jpg" alt="">
                        <img src="@/assets/img/bank/11.jpg" alt="">
                        <img src="@/assets/img/bank/12.jpg" alt="">
                        <img src="@/assets/img/bank/1.png" alt="">
                        <img src="@/assets/img/bank/2.jpg" alt="">
                        <img src="@/assets/img/bank/3.jpg" alt="">
                        <img src="@/assets/img/bank/4.jpg" alt="">
                        <img src="@/assets/img/bank/5.jpg" alt="">
                        <img src="@/assets/img/bank/6.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="scoll_content">
            <div class="scoll_content1">
                <h2>
                    Why Choose SHI ZHOU TONG
                </h2>
                <span>Why Choose SHI ZHOU TONG</span>
            </div>
            <p class="p3">Driven by customer needs and development concepts, to create one-stop international services.</p>
            <div class="scoll_content2" ref="chooseUsRef">
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
    </div>
</template>

<script setup>
import '@/css_en/homeView/content/Content5.css'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let num_display = ref([
    {
        initialValue: 0,
        finalValue: 40,
        desc: 'Global Bank Accounts Opened'
    },{
        initialValue: 0,
        finalValue: 60,
        desc: 'Countries for Company Registration'
    },{
        initialValue: 0,
        finalValue: 50,
        desc: 'Countries for Financial License'
    },{
        initialValue: 0,
        finalValue: 30,
        desc: 'Countries for Trademark Registration'
    }
])

let cover_displayValues = ref(num_display.value.map(item => item.initialValue))
const coverRef = ref(null)
function startCount() {
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    num_display.value.forEach((item, idx) => {
        const stepValue = (item.finalValue - item.initialValue) / steps
        let current = item.initialValue
        const timer = setInterval(() => {
            current += stepValue
            if ((stepValue > 0 && current >= item.finalValue) || (stepValue < 0 && current <= item.finalValue)) {
                current = item.finalValue
                clearInterval(timer)
            }
            cover_displayValues.value[idx] = Math.floor(current)
        }, interval)
    })
}

const introRef = ref(null)
const chooseUsRef = ref(null)
const bottonRef = ref(null)
const accountRef = ref(null)
const advantageRefs = ref([])

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: 'Fast Track Service',
        description: 'Foreign investors can enjoy fast-track services and apply electronically, completing registration in just two weeks.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: 'Rich Experience & Success Cases',
        description: 'With SME development as its core goal, SHI ZHOU TONG has provided professional consulting for numerous enterprises.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: 'Professional Value-added Services',
        description: 'Our overseas teams assist clients with comprehensive financial, tax, and legal services, ensuring high efficiency.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: 'Dedicated Business Support',
        description: 'Consultants, accountants, and specialists form dedicated teams for one-on-one advisory and progress coordination.'
    }
]

onMounted(() => {
    const observer = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startCount()
            observer.disconnect()
        }
    })
    if (coverRef.value) {
        observer.observe(coverRef.value)
    }

    const introObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            introObserver.unobserve(entries[0].target)
            gsap.fromTo(introRef.value, 
                { x: -100, opacity: 0.3 },
                { x: 0, opacity: 1, duration: 1, ease: 'back.out', delay: 0.2 }
            )
            gsap.fromTo(bottonRef.value, 
                { y: 50, opacity: 0.3, transition: 'none' },
                { y: 0, opacity: 1, duration: 1, ease: 'back.out', delay: 0.2, 
                    onComplete: function() {
                        gsap.set(bottonRef.value, { clearProps: "y,opacity,transition" })
                    }
                }
            )
        } else {
            gsap.set(introRef.value, { x: -100, opacity: 0.3 })
            gsap.set(bottonRef.value, { y: 50, opacity: 0.3 })
        }
    })
    
    if (introRef.value) introObserver.observe(introRef.value)

    const accountObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            accountObserver.unobserve(entries[0].target)
            gsap.fromTo(accountRef.value, 
                { x: 100, opacity: 0.3 },
                { x: 0, opacity: 1, duration: 1, ease: 'back.out', delay: 0.2 }
            )
        } else {
            gsap.set(accountRef.value, { x: 100, opacity: 0.3 })
        }
    })
    if (accountRef.value) accountObserver.observe(accountRef.value)

    // Add ChooseUs style animations
    advantageRefs.value.forEach((item, index) => {
        if (!item) return
        gsap.fromTo(item,
            { y: 50, opacity: 0, transition: 'none' },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.scoll_content2',
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
