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
                <div v-for="(item, index) in features" :key="index">
                    <div class="icon_wrapper">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="item.icon"></use> 
                        </svg>
                    </div>

                    <div>
                        <p>
                            {{ item.title }}
                        </p>
                        <span>
                            {{ item.desc }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="scoll_content2">
                <h2>
                    Secretarial Service
                </h2>
                <span>Secretarial Service</span>
            </div>
            <p class="p3">Secretarial services are essential for offshore companies to ensure compliance and gain professional support.<br />Choose SHI ZHOU TONG to handle the paperwork securely, so you can focus entirely on core business development.</p>

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

const features = [
    { title: 'Transparent Pricing', desc: 'Unified quote, no hidden fees', icon: '#icon-finance' },
    { title: 'Professional & Efficient', desc: 'Team of 100 professionals, high efficiency', icon: '#icon-award-line' },
    { title: 'Security Guarantee', desc: 'Data is strictly confidential and secure', icon: '#icon-audit' },
    { title: 'Professional Service', desc: '1-on-1 professional customer service', icon: '#icon-cooperative-handshake' }
]

let cover_content = ref([
    {
        initialValue: 1,
        finalValue: 10,
        unit: ' Years',
        desc: 'Company Registration Experience'
    },{
        initialValue: 100,
        finalValue: 2000,
        unit: '+',
        desc: 'Successful Overseas Companies Established'
    },{
        initialValue: 10,
        finalValue: 1120,
        unit: '+',
        desc: 'Successful Overseas Bank Accounts Opened'
    },{
        initialValue: 10,
        finalValue: 1520,
        unit: '+',
        desc: 'Enterprises Became Long-Term Clients'
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

// 账号卡片动画
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

    // 开户卡片依次浮现动画
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
        title: 'Global Company Annual Review',
        desc: 'Ensure global compliance with our professional annual review services, handling all reports and tax declarations promptly.'
    },{
        img: new URL('@/assets/img/account/2.png', import.meta.url).href,
        title: 'Hong Kong Business Services',
        desc: 'Expert handling of HK company registration, corporate changes, and deregistration with deep local market knowledge.'
    },{
        img: new URL('@/assets/img/account/3.png', import.meta.url).href,
        title: 'Barcode Service',
        desc: 'Obtain international product identifiers quickly through our one-stop barcode service for instant global market access.'
    },{
        img: new URL('@/assets/img/account/4.png', import.meta.url).href,
        title: 'Overseas Direct Investment Filing',
        desc: 'Professional guidance for overseas investment filings, ensuring full compliance with all necessary department approvals.'
    },{
        img: new URL('@/assets/img/company/2.png', import.meta.url).href,
        title: 'Company Deregistration & Restoration',
        desc: 'Reliable support for complex company deregistration and restoration, expertly handling debt, tax, and creditor procedures.'
    }
])

</script>
