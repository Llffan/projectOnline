<template>
    <!-- Business Introduction -->
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
                    In today's global economy, registering an overseas company is a crucial step for businesses to go international and enhance their image.
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
const switchDuration = 500 // ms, can be adjusted based on carousel animation time
const currentIndex = ref(0)
const totalPages = computed(() => displayCompanies.value.length)

// Previous/Next buttons
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

// Mount animations
const titleRef = ref(null)
const introRef = ref(null)
const content2Ref = ref(null)
const bottonRef = ref(null)
const cardRef = ref(null)
// Store all company-card-body refs
const cardBodyRefs = ref([])

function setCardBodyRef(el, groupIdx, cardIdx) {
    if (!el) return
    // Calculate unique index
    const idx = `${groupIdx}-${cardIdx}`
    cardBodyRefs.value[idx] = el
}

onMounted(() => {
    carouselInstance = companyCarousel.value
    // Title animation
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

    // Introduction animation
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

    // Button animation
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

    // Individual company-card-body animations
    setTimeout(() => {
        Object.values(cardBodyRefs.value).forEach((el) => {
            if (!el) return
            const cardObserver = new window.IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    gsap.fromTo(el,
                        { opacity: 0, y: 220, transition: 'none' },
                        { opacity: 1, y: 160, duration: 0.7, delay: 0.15, ease: 'power2.out', onComplete: function() {
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
        description: 'International financial center with mature legal system and low-tax environment. Bridges mainland China and the world.',
        img: new URL('@/assets/img/company/香港.jpg', import.meta.url).href
    },{
        name: 'Macao Company Registration',
        description: 'World-renowned tourism center with unique Chinese-Western culture blend and transparent tax system.',
        img: new URL('@/assets/img/company/澳门.jpg', import.meta.url).href
    },{
        name: 'US Company Registration',
        description: 'World\'s largest economy with comprehensive legal system and diversified market environment.',
        img: new URL('@/assets/img/company/1.png', import.meta.url).href
    },{
        name: 'Singapore Company Registration',
        description: 'Southeast Asia\'s economic center with stable political environment and advanced financial system.',
        img: new URL('@/assets/img/company/新加坡.png', import.meta.url).href
    },
    {
        name: 'Japan Company Registration',
        description: 'World\'s third-largest economy with advanced technology industries and IP protection system.',
        img: new URL('@/assets/img/company/日本.jpg', import.meta.url).href
    },{
        name: 'Korea Company Registration',
        description: 'Asian Tiger with developed manufacturing and innovative technology sector. Open business environment.',
        img: new URL('@/assets/img/company/韩国.jpg', import.meta.url).href
    },{
        name: 'UK Company Registration',
        description: 'World financial center with long commercial tradition and comprehensive legal system.',
        img: new URL('@/assets/img/company/英国.png', import.meta.url).href
    },{
        name: 'Germany Company Registration',
        description: 'Europe\'s largest economy with advanced manufacturing and engineering technologies.',
        img: new URL('@/assets/img/company/德国.png', import.meta.url).href
    },
    {
        name: 'France Company Registration',
        description: 'Major European economy with well-developed infrastructure and high-quality living environment.',
        img: new URL('@/assets/img/company/法国.png', import.meta.url).href
    }
])
</script>

<style lang="scss" scoped>
    
</style>