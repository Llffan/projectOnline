<template>
    <div class="content5">
        <div class="scoll_backImg scoll_common">
            <div class="scoll_cover"></div>
            <div class="cover_content">
                <div class="content_desc">
                    <p ref="introRef">十洲通提供全球离岸注册地平台超过60多个国家及地区，专注于离岸公司注册、开户、年审、做账审计报税、商标品牌保护。</p>
                    <div ref="bottonRef" class="button">了解详细<p class="p1">→</p></div>
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
                    为什么选择十洲通
                </h2>
                <span>Why Choose SHI ZHOU TONG</span>
            </div>
            <p class="p3">以客户需求和发展理念为驱动力，打造国际一站式服务</p>
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
import '@/css/homeView/content/Content5.css'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let num_display = ref([
    {
        initialValue: 0,
        finalValue: 40,
        desc: '全球银行开户'
    },{
        initialValue: 0,
        finalValue: 60,
        desc: '国家企业注册业务'
    },{
        initialValue: 0,
        finalValue: 50,
        desc: '国家金融牌照注册'
    },{
        initialValue: 0,
        finalValue: 30,
        desc: '国家商标注册'
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
        title: '快速通道服务',
        description: '外国投资者注册企业可以享受快速通道服务，并可以通过无纸化电子方式提交申请，仅需二周时间即可完成注册。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '经验丰富，大量成功案例',
        description: '十洲通以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '提供专业增值服务',
        description: '十洲通在境外拥有自己的团队，协助客户提供综合全面的财务、税务、法律等服务，做到"在外有十洲通，更快捷"。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '专业专属商务对接和支持',
        description: '顾问、咨询师、会计师等建立计划小组，负责客户一对一的咨询、案子进度和客户协调计划等服务工作。'
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
    // Note: introRef is now reused for the scoll_content2 section observer in ChooseUs style
    // But let's keep the existing introRef usage for the first intro section to be safe
    // Actually, introRef was ref(null) at line 100, used at line 118.
    // I should probably rename my new ref to something else if there's a conflict
    // but the user's ChooseUs uses introRef.
    // In Content5, introRef is used for a <p> tag at line 7.
    
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