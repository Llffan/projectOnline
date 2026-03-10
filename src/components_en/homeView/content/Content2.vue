<template>
    <!-- 业务介绍 -->
    <div class="content2" ref="content2Ref">
        <div class="register_company">
            <div class="company_intro">
                <div ref="titleRef">
                    <div class="title">
                    Global Company Registration
                    </div>
                    <div class="title_en">
                        Offshore Company Registration
                    </div>
                </div>
                <div class="intro" ref="introRef">
                    In today's global economic integration, registering an overseas company is a crucial way for enterprises to go international and enhance their brand image.
                </div>
                <div class="button1" ref="bottonRef">
                    <button class="btn_l" type="button" @click="handlePrev" :disabled="currentIndex === 0">&lt;</button>
                    <button class="btn_2" type="button" @click="handleNext" :disabled="currentIndex === totalPages - 1">&gt;</button>
                </div>
            </div>
            <div class="company_body">
                <div class="block text-center" m="t-4">
                    <el-carousel ref="companyCarousel" trigger="click" :autoplay="false" indicator-position="none" arrow="never" height="400px" @change="onCarouselChange">
                        <el-carousel-item v-for="(group, idx) in displayCompanies" :key="idx">
                            <div class="card-group" ref="cardRef">
                                <div class="company-card" v-for="(item, i) in group" :key="i" :style="{ backgroundImage: `url(${item.img})`}" >
                                    <div class="company-card-body" :ref="el => setCardBodyRef(el, idx, i)">
                                        <div class="card-content">
                                            <div class="card-title">{{ item.name }}</div>
                                            <div class="card-desc">{{ item.description }}</div>
                                        </div>
                                        <div class="card-more">
                                            <p>→</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup> 
import '@/css_en/homeView/content/Content2.css'
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import gsap from 'gsap'

const isSwitching = ref(false)
const switchDuration = 500 // ms，可根据轮播动画实际时间调整
const currentIndex = ref(0)
const totalPages = computed(() => displayCompanies.value.length)

// 前后箭头
function handlePrev() {
    if (isSwitching.value || currentIndex.value === 0) return
    isSwitching.value = true
    carouselInstance?.prev()
    setTimeout(() => {
        isSwitching.value = false
    }, switchDuration)
}

function handleNext() {
    if (isSwitching.value || currentIndex.value === totalPages.value - 1) return
    isSwitching.value = true
    carouselInstance?.next()
    setTimeout(() => {
        isSwitching.value = false
    }, switchDuration)
}

function onCarouselChange(index) {
    currentIndex.value = index
}

const companyCarousel = ref(null)
let carouselInstance = null


let displayNums = ref(3)
const displayCompanies = computed(() => {
  const arr = []
  for (let i = 0; i < Companies.value.length; i += displayNums.value) {
    arr.push(Companies.value.slice(i, i + displayNums.value))
  }
  return arr
})

// 挂载动画
const titleRef = ref(null)
const introRef = ref(null)
const content2Ref = ref(null)
const bottonRef = ref(null)
const cardRef = ref(null)
// 用于存储所有 company-card-body 的 refs
const cardBodyRefs = ref([])

function setCardBodyRef(el, groupIdx, cardIdx) {
    if (!el) return
    // 计算唯一索引
    const idx = `${groupIdx}-${cardIdx}`
    cardBodyRefs.value[idx] = el
}

onMounted(() => {
    carouselInstance = companyCarousel.value
    // 标题动画
    const titleObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            titleObserver.unobserve(entries[0].target)
            gsap.fromTo(titleRef.value,
                { scale: 1.5, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, delay: 0.15, ease: 'back.out' }
            )
        } else {
            gsap.set(titleRef.value, { scale: 1.5, opacity: 0 })
        }
    })
    if (titleRef.value) titleObserver.observe(titleRef.value)

    // 介绍动画
    const introObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            introObserver.unobserve(entries[0].target)
            gsap.fromTo(introRef.value,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.6, delay: 0.15, ease: 'back.out' }
            )
        } else {
            gsap.set(introRef.value, { opacity: 0, y: 50 })
        }
    })
    if (introRef.value) introObserver.observe(introRef.value)

    // 按钮动画
    const buttonObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            buttonObserver.unobserve(entries[0].target)
            gsap.fromTo(bottonRef.value,
                {opacity: 0, y: 50},
                {opacity: 1, y: 0, duration: 0.6, delay: 0.15, ease: 'back.out' }
            )
        } else {
            gsap.set(bottonRef.value,{opacity: 0, y: 50})
        }
    })
    if (bottonRef.value) buttonObserver.observe(bottonRef.value)

    // 每个 company-card-body 独立动画
    setTimeout(() => {
        Object.values(cardBodyRefs.value).forEach((el) => {
            if (!el) return
            const cardObserver = new window.IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    gsap.fromTo(el,
                        { opacity: 0, y: 220, transition: 'none' },
                        { opacity: 1, y: 190, duration: 0.7, delay: 0.15, ease: 'power2.out', onComplete: function() {
                            gsap.set(el, {clearProps: 'y,opacity,transition'})
                        }}
                    )
                } else {
                    gsap.set(el, {opacity: 0, y: 50})
                }
            })
            cardObserver.observe(el)
        })
    }, 0)
})


const Companies = ref([
    {
        name: 'Hong Kong Company Registration',
        description: 'As a global financial hub, HK offers a mature legal system, low taxes, and acts as a bridge connecting China to the world with free capital flow.',
        img: new URL('@/assets/img/company/香港.jpg', import.meta.url).href
    },{
        name: 'Macao Company Registration',
        description: 'A renowned tourism center blending Eastern and Western cultures, Macao features a simple, transparent tax system for ideal Asian commercial services.',
        img: new URL('@/assets/img/company/澳门.jpg', import.meta.url).href
    },{
        name: 'US Company Registration',
        description: 'As the world\'s largest economy, the US provides a robust legal framework and diverse markets with various tax and commercial advantages across states.',
        img: new URL('@/assets/img/company/1.png', import.meta.url).href
    },{
        name: 'Singapore Company Registration',
        description: 'The economic heart of Southeast Asia, Singapore attracts global investors with a stable political environment, advanced finance, and prime location.',
        img: new URL('@/assets/img/company/新加坡.png', import.meta.url).href
    },
    {
        name: 'Japan Company Registration',
        description: 'The world\'s 3rd largest economy, Japan excels in advanced tech and strict IP protection, serving as a vital Asian R&D and investment center.',
        img: new URL('@/assets/img/company/日本.jpg', import.meta.url).href
    },{
        name: 'South Korea Company Registration',
        description: 'An Asian Tiger with strong manufacturing and innovative tech, South Korea provides an open, transparent business environment for foreign investment.',
        img: new URL('@/assets/img/company/韩国.jpg', import.meta.url).href
    },{
        name: 'UK Company Registration',
        description: 'A premier global financial hub, the UK boasts a rich business tradition and sophisticated legal system, connecting Europe to global markets.',
        img: new URL('@/assets/img/company/英国.png', import.meta.url).href
    },{
        name: 'Germany Company Registration',
        description: 'Europe\'s largest economy, Germany is famed globally for its advanced manufacturing, high-quality engineering, and stable business climate.',
        img: new URL('@/assets/img/company/德国.png', import.meta.url).href
    },
    {
        name: 'France Company Registration',
        description: 'A major European economy with excellent infrastructure, France serves as a vital hub linking European, African, and Middle Eastern markets.',
        img: new URL('@/assets/img/company/法国.png', import.meta.url).href
    }
])
</script>

<style lang="scss" scoped>
    
</style>
