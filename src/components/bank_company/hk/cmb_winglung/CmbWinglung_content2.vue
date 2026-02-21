<template>
    <div class="cmb_winglung_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港招商永隆银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/merchants_wing_lung.jpg" alt="">
                    <div class="text">
                        <P>招商永隆银行（原永隆银行），自2009年成为招商银行子公司后，业务广泛覆盖零售与企业银行、信贷、证券期货、理财及信托等领域，在海内外设有41家分支机构。企业开设境外账户可享资金自由调拨、无外汇管制、利率优惠及税务优化支持；个人账户则便利海外留学置业、全球财富管理，提升资金运作效率。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港招商永隆银行开户优势
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
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

            <!-- 3. 所需资料 -->
            <div class="content3">
                <div class="title">
                    企业开户所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">香港公司资料（CI、BR、NNCI/NAR1、变更文件、条形章、章程）</div>
                        <div class="condition-item">董事身份通行证过关小票</div>
                        <div class="condition-item">香港公司2份采购、2份销售合同</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">个人开户：身份证</div>
                        <div class="condition-item">个人开户：通行证</div>
                        <div class="condition-item">资金要求：5万港币</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港招商永隆银行开户流程
                </div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
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

            <!-- 5. 我们的优势 -->
            <ChooseUs />

            <!-- 合作银行 -->
            <HK_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    香港招商永隆银行常见问题
                </div>
                <div class="intro">
                    <div 
                        v-for="(faq, index) in faqs" 
                        :key="index" 
                        class="faq-item"
                        @click="toggleFaq(index)"
                    >
                        <div class="faq-question">
                            <span class="question-text">{{ faq.question }}</span>
                            <span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">
                                ▼
                            </span>
                        </div>
                        <div 
                            class="faq-answer" 
                            :class="{ 'expanded': expandedItems[index] }"
                        >
                            <div style="white-space: pre-line;">{{ faq.answer }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css/bank_company/hk/cmb_winglung/CmbWinglung_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: '发资料预审',
        description: '提交相关资料进行初步审核。'
    },
    {
        iconId: '#icon-city', 
        title: '预约面签地点',
        description: '预约香港招商永隆银行或制定地点。'
    },
    {
        iconId: '#icon-notes', 
        title: '现场签字',
        description: '按照要求到地点签字。'
    },
    {
        iconId: '#icon-audit', 
        title: '审批成功',
        description: '银行后台进行审批。'
    },
    {
        iconId: '#icon-truck-line', 
        title: '寄出编码器',
        description: '银行寄出编码器及密码信。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '完成开户',
        description: '激活账户，正式完成开户。'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-bank-transfer', 
        title: '费用低廉',
        description: '跨境汇款转账交易手续费低，实体卡有银联标志，支持中国内地ATM取现。'
    },
    {
        iconId: '#icon-audit', 
        title: '无理财门槛',
        description: '银行开户入门门槛低，无强制投资理财产品要求。'
    },
    {
        iconId: '#icon-bank-line', 
        title: '资金自由',
        description: '香港账户无外汇监管，资金流动自由，调拨灵活。'
    },
    {
        iconId: '#icon-communication', 
        title: '远程见证',
        description: '无需储蓄要求，支持远程视频开户及中国内地见证。'
    }
]




const faqs = ref([
    {
        question: "香港招商永隆银行每日转账额度是多少 ？",
        answer: "每日等值 500 万港币，若通过购买理财的方案来开设账户，每日最高额度可升级至 5 亿。"
    },
    {
        question: "香港招商永隆银行开户要多久时间？",
        answer: "8-10周（5周左右下表，银行收到表格4-5周下户）"
    },
    {
        question: "香港招商永隆银行需要管理费吗？",
        answer: "账户余额不足1万港币，每月将收取100港币作账户管理费。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.cmb_winglung_content2 .content1',
        '.cmb_winglung_content2 .content2',
        '.cmb_winglung_content2 .content3',
        '.cmb_winglung_content2 .content3_1',
        '.cmb_winglung_content2 .content4',
        '.cmb_winglung_content2 .content5',
        '.content_bank',
        '.cmb_winglung_content2 .content6'
    ]

    sections.forEach(section => {
        gsap.from(section, {
            autoAlpha: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                once: true
            }
        })
    })
})
</script>
