<template>
    <div class="content5">
        <div class="scoll_backImg scoll_common">
            <div class="scoll_cover"></div>
            <div class="cover_content">
                <div class="content_desc">
                    <p ref="introRef">Shizhoutong provides offshore registration services in over 60 countries, specializing in company registration, bank accounts, annual reviews, accounting, auditing, and trademark protection.</p>
                    <div ref="bottonRef" class="button">Learn More<p class="p1">→</p></div>
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
                    Why Choose Shizhoutong
                </h2>
                <span>Why Choose SHI ZHOU TONG</span>
            </div>
            <p class="p3">Driven by customer needs and development concepts to create international one-stop services</p>
            <div class="scoll_content2">
                1
            </div>
        </div>
    </div>
</template>

<script setup>
import '@/css_en/homeView/content/Content5.css'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

let num_display = ref([
    {
        initialValue: 0,
        finalValue: 40,
        desc: 'Global Bank Accounts'
    },{
        initialValue: 0,
        finalValue: 60,
        desc: 'Countries for Registration'
    },{
        initialValue: 0,
        finalValue: 50,
        desc: 'Financial Licenses'
    },{
        initialValue: 0,
        finalValue: 30,
        desc: 'Trademark Registrations'
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
const bottonRef = ref(null)
const accountRef = ref(null)

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
})

</script>