<template>
    <div class="content3" ref="content3Ref">
        <div class="account_opening">
            <!-- 银行类型 -->
            <div class="account_type" ref="accountTypeRef">
                <img class="back_img" src="@/assets/img/company/上海.png" alt="">
                <div class="back_display">
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
                </div>
            </div>

            <div class="account_intro">
                <div ref="titleRef">
                    <div class="title">
                        银行开户
                    </div>
                    <div class="title_en">
                        Bank Account Opening Service
                    </div>
                </div>
                <div class="intro" ref="introRef">
                    随着全球经济一体化，开设海外账户成为个人和企业进行全球资产配置的重要途径。
                </div>
            </div>
        </div>
        
        <!-- 开户 -->
        <div class="account_body" ref="accountBodyRef">
            <div v-for="(item, i) in account_body" :key="item" :ref="el => setAccountCardRef(el, i)">
                <div>
                    <img :src="item.img" alt="">
                    <div>
                        <p class="title1"> {{ item.title }} </p>
                    </div>
                </div>
                <div class="account_desc">
                    {{ item.desc }}
                    <div class="card-more">
                        <p>→</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import '@/css/homeView/content/Content3.css'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const accountBodyRef = ref(null)
const accountCardRefs = ref([])
function setAccountCardRef(el, idx) {
    if (!el) return
    accountCardRefs.value[idx] = el
}

// 挂载动画
const titleRef = ref(null)
const titleEnRef = ref(null)
const introRef = ref(null)
const accountTypeRef = ref(null)

onMounted(() => {
    // 标题动画
    const titleObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            titleObserver.unobserve(entries[0].target)
            gsap.fromTo(titleRef.value,
                { scale: 1.5, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, delay: 0.15, ease: 'back.out' }
            )
        } else {
            gsap.set(titleRef.value,{ scale: 1.5, opacity: 0 })
        }
    }, {
        threshold: 0.3
    })
    if (titleRef.value) titleObserver.observe(titleRef.value)

    // 介绍动画
    const introObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            introObserver.unobserve(entries[0].target)
            gsap.fromTo(introRef.value,
                { opacity: 0.3, x: 100 },
                { opacity: 1, x: 0, duration: 1, delay: 0.15, ease: 'back.out' }
            )
        } else {
            gsap.set(introRef.value, { opacity: 0.3, x: 100 })
        }
    }, {
        threshold: 0.3
    })
    if (introRef.value) introObserver.observe(introRef.value)

    // 银行类型动画
    const typeObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // 先取消观察，确保只触发一次
            typeObserver.unobserve(entries[0].target)

            gsap.fromTo(accountTypeRef.value,
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 1, delay: 0.15, ease: 'back.out' }
            )
        } else {
            gsap.set(accountTypeRef.value,{ opacity: 0, x: -100 })
        }
    }, {
        threshold: 0.3
    })
    if (accountTypeRef.value) typeObserver.observe(accountTypeRef.value)

    // 开户卡片依次浮现动画
    const cardObserver = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // 先取消观察，确保只触发一次
            cardObserver.unobserve(entries[0].target)

            accountCardRefs.value.forEach((el, idx) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 50, transition: 'none' },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'back.out', delay: idx * 0.2 + 0.3, onComplete: function() {
                        gsap.set(el, {clearProps: 'y,opacity,transition'})
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


const account_body = ref([
    {
        img: new URL('@/assets/img/account/香港.png', import.meta.url).href,
        title: '香港银行开户',
        desc: '内地外资银行为在我国境内设立的外国独资银行机构，提供相较于中资银行更为完善和细致的金融服务。其业务范围广泛，涵盖各类国际银行业务，遵照各国银行法规及管理制度运营。'
    }, {
        img: new URL('@/assets/img/account/澳门.png', import.meta.url).href,
        title: '澳门银行开户',
        desc: '澳门银行账户享有类似香港的金融自由度，无外汇管制且资本可自由流动。澳门金融机构网点分布密集，为客户提供便捷高效的操作体验和具有竞争力的融资成本。'
    }, {
        img: new URL('@/assets/img/account/新加坡.png', import.meta.url).href,
        title: '新加坡银行开户',
        desc: '新加坡作为国际金融中心，其银行业不仅提供传统存贷款服务，更涵盖复杂的综合性金融解决方案。拥有新加坡银行账户有助于解决企业在当地的各类金融及商务难题。'
    }, {
        img: new URL('@/assets/img/account/美国.png', import.meta.url).href,
        title: '美国银行开户',
        desc: '美国作为全球领先的国际金融中心，其银行业高度发达，为企业提供优惠政策支持。开设美国银行账户可便捷接收北美客户款项，实现即时到账且手续费低廉，同时提升企业国际形象与商业信誉。'
    }
])
</script>