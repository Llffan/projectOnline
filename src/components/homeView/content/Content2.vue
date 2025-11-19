<template>
    <!-- 业务介绍 -->
    <div class="content2" ref="content2Ref">
        <div class="register_company">
            <div class="company_intro">
                <div ref="titleRef">
                    <div class="title">
                    全球公司注册
                    </div>
                    <div class="title_en">
                        Offshore Company Registration
                    </div>
                </div>
                <div class="intro" ref="introRef">
                    在全球经济一体化的今天，注册海外公司是企业走向国际、提升形象的重要途径。
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
import '@/css/homeView/content/Content2.css'
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
        name: '香港公司注册',
        description: '香港作为国际金融中心，拥有成熟的商业法律体系和低税率环境，是连接中国内地与世界的桥梁，为企业提供便利的国际贸易平台和资金流动自由。',
        img: new URL('@/assets/img/company/香港.jpg', import.meta.url).href
    },{
        name: '澳门公司注册',
        description: '澳门是世界知名的旅游休闲中心，拥有独特的中西文化融合背景，税收制度简单透明，是亚洲重要的金融和商贸服务平台。',
        img: new URL('@/assets/img/company/澳门.jpg', import.meta.url).href
    },{
        name: '美国公司注册',
        description: '美国是全球最大经济体，拥有完善的法律体系和多样化的市场环境，各州提供不同的税收和商业政策优势。',
        img: new URL('@/assets/img/company/1.png', import.meta.url).href
    },{
        name: '新加坡公司注册',
        description: '新加坡是东南亚的经济中心，拥有稳定的政治环境和先进的金融体系，以其便利的商业环境和优越的地理位置吸引全球投资者。',
        img: new URL('@/assets/img/company/新加坡.png', import.meta.url).href
    },
    {
        name: '日本公司注册',
        description: '日本是世界第三大经济体，拥有先进的科技产业和严格的知识产权保护制度，是亚洲重要的投资和研发中心。',
        img: new URL('@/assets/img/company/日本.jpg', import.meta.url).href
    },{
        name: '韩国公司注册',
        description: '韩国是亚洲四小龙之一，拥有发达的制造业和创新科技产业，政府积极支持外国投资，商业环境开放透明。',
        img: new URL('@/assets/img/company/韩国.jpg', import.meta.url).href
    },{
        name: '英国公司注册',
        description: '英国是世界金融中心之一，拥有悠久的商业传统和完善的法律体系，是连接欧洲和世界市场的重要门户。',
        img: new URL('@/assets/img/company/英国.png', import.meta.url).href
    },{
        name: '德国公司注册',
        description: '德国是欧洲最大经济体，拥有先进的制造业和工程技术，以其高质量的产品和稳定的商业环境著称于世。',
        img: new URL('@/assets/img/company/德国.png', import.meta.url).href
    },
    {
        name: '法国公司注册',
        description: '法国是欧洲重要经济体，拥有完善的基础设施和高品质的生活环境，是连接欧洲、非洲和中东市场的重要枢纽。',
        img: new URL('@/assets/img/company/法国.png', import.meta.url).href
    }
])
</script>

<style lang="scss" scoped>
    
</style>