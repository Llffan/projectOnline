<template>
    <div class="content4">
        <div class="scoll_backImg scoll_common">
            <div class="scoll_cover"></div>
            <div class="cover_content">
                <div class="content_desc">
                    <h2>
                        我们积累了丰富的经验
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
                    十洲通秘书服务
                </h2>
                <span>Secretarial Service</span>
            </div>
            <p class="p3">在企业发展过程中，秘书服务成为许多公司特别是离岸公司的必备选项。作为企业的"贴身助手"，秘书服务不仅能够确保公司合规运营，还能提供专业的商务支持。<br />选择十洲通秘书服务，让您专注于核心业务发展，其余事务交给我们专业团队处理，省心、放心、安心！</p>

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
import '@/css/homeView/content/Content4.css'
import { stepsEmits } from 'element-plus'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const features = [
    { title: '价格透明', desc: '统一报价，无隐形消费', icon: '#icon-finance' },
    { title: '专业高效', desc: '100人专业团队，效率高', icon: '#icon-award-line' },
    { title: '安全保障', desc: '资料不外泄，安全保密', icon: '#icon-audit' },
    { title: '专业服务', desc: '专业客服1对1服务', icon: '#icon-cooperative-handshake' }
]

let cover_content = ref([
    {
        initialValue: 1,
        finalValue: 10,
        unit: '年',
        desc: '公司注册从业经验'
    },{
        initialValue: 100,
        finalValue: 2000,
        unit: '家',
        desc: '成功设立的海外公司'
    },{
        initialValue: 10,
        finalValue: 1120,
        unit: '个',
        desc: '成功开通的海外银行账户'
    },{
        initialValue: 10,
        finalValue: 1520,
        unit: '个',
        desc: '企业成为长期客户'
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
        title: '全球公司年审',
        desc: '专业团队提供全球公司年审服务，确保您的公司始终符合各地法规要求，及时处理年度报告、财务申报等事务，让您专注于核心业务发展！'
    },{
        img: new URL('@/assets/img/account/1.png', import.meta.url).href,
        title: '香港业务服务',
        desc: '深耕香港市场多年，精通公司法例及政府程序，快速响应政策变化，让您的香港公司注册、变更、注销等业务高效完成！'
    },{
        img: new URL('@/assets/img/account/1.png', import.meta.url).href,
        title: '条形码服务',
        desc: '一站式条形码服务，帮助企业快速获取国际通用商品标识，打通产品进入全球市场的编码关卡，轻松拓展海外业务！'
    },{
        img: new URL('@/assets/img/account/1.png', import.meta.url).href,
        title: '境外投资备案',
        desc: '协助企业完成境外投资备案手续，熟悉发改委、商务部、外管局等部门的审批流程，提供全程指导服务，确保您的海外投资合规顺利进行。'
    },{
        img: new URL('@/assets/img/account/1.png', import.meta.url).href,
        title: '公司注销与恢复',
        desc: '妥善处理公司注销与恢复事宜，专业解决债权债务、税务清算等复杂程序，为企业的战略调整提供可靠支持，确保流程合法合规。'
    }
])

</script>