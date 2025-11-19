<template>
    <div class="content4">
        <div class="scoll_backImg scoll_common">
            <div class="scoll_cover"></div>
            <div class="cover_content">
                <div class="content_desc">
                    <h2>
                        We Have Accumulated Rich Experience
                    </h2>
                    <span class="content_en">
                        We Have Accumulated Rich Experience
                    </span>
                </div>
                <div class="content_body" ref="coverRef">
                    <div class="nums_display" v-for="(item, idx) in cover_content" :key="idx">
                        <p><span class="num">{{ cover_displayValues[idx] }}</span>{{item.unit}}</p>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="scoll_content">
            <div class="scoll_content1">
                1
            </div>

            <div class="scoll_content2">
                <h2>
                    SHIZHOUTONG Service Advantages
                </h2>
                <span>Service Advantages</span>
            </div>
            <p class="p3">With a solid customer base, you're ready to start a business and register a company to boost your business development. But with so many options, you may have questions,<br />how to choose a service company that you can trust and that will save you trouble in the long run?</p>

            <div class="scoll_content3" ref="accountBodyRef">
                <div class="content3_body" v-for="(item, i) in content3_body" :key="item" :ref="el => setAccountCardRef(el, i)">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.desc}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import '@/css_en/homeView/content/Content4.css'
import { stepsEmits } from 'element-plus'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

let cover_content = ref([
    {
        initialValue: 1,
        finalValue: 10,
        unit: 'Years',
        desc: 'Experience in Company Registration'
    },{
        initialValue: 100,
        finalValue: 2000,
        unit: 'Companies',
        desc: 'Successfully Established Overseas'
    },{
        initialValue: 10,
        finalValue: 1120,
        unit: 'Accounts',
        desc: 'Successfully Opened Overseas'
    },{
        initialValue: 10,
        finalValue: 1520,
        unit: 'Clients',
        desc: 'Long-term Corporate Customers'
    },
])
let cover_displayValues = ref(cover_content.value.map(item => item.initialValue))
const coverRef = ref(null)
function startCount() {
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    cover_content.value.forEach((item, idx) => {
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

// Account card animation
const accountCardRefs = ref([])
const accountBodyRef = ref(null)
function setAccountCardRef(el, idx) {
    if (!el) return
    accountCardRefs.value[idx] = el
}

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

    // Account card sequential appearance animation
    const cardObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            cardObserver.unobserve(entries[0].target)
            accountCardRefs.value.forEach((el, idx) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 50, transition: 'none' },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: idx * 0.15 + 0.2, onComplete: function() {
                        gsap.set(el, {clearProps: "y,opacity,transition" })
                    }}
                )
            })
        } else {
            accountCardRefs.value.forEach((el, idx) => {
                gsap.set(el, { opacity: 0, y: 50, transition: 'none' })
            })
        }
    }, {
        threshold: 0.3
    })
    if (accountBodyRef.value) cardObserver.observe(accountBodyRef.value)
})

let content3_body = ref([
    {
        img: new URL('@/assets/img/account/1.png', import.meta.url).href,
        title: 'Licensed Secretarial',
        desc: 'Shizhoutong holds a Hong Kong Trust or Company Service Provider license, serving as your company\'s statutory secretary and designated representative.'
    },{
        img: new URL('@/assets/img/account/1.png', import.meta.url).href,
        title: 'Fast & Efficient',
        desc: 'We have staff traveling between Shenzhen and Hong Kong daily, ensuring quick document submission and faster certification.'
    },{
        img: new URL('@/assets/img/account/1.png', import.meta.url).href,
        title: 'Professional & Reliable',
        desc: 'Our team members are law graduates with years of registration service experience, providing one-stop solutions.'
    },{
        img: new URL('@/assets/img/account/1.png', import.meta.url).href,
        title: 'High Cost-Effectiveness',
        desc: 'We offer free name search, certificate delivery, monitoring, and tax consultation with personalized solutions.'
    },{
        img: new URL('@/assets/img/account/1.png', import.meta.url).href,
        title: 'Authentic & Reliable',
        desc: 'We provide free name search, certificate delivery, monitoring, and tax consultation with dedicated one-on-one service.'
    }
])

</script>