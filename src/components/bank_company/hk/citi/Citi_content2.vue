<template>
    <div class="citi_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港花旗银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/citibank.jpg" alt="香港花旗银行">
                    <div class="text">
                        <P>香港花旗银行 Citibank（Hong Kong）是香港一家提供理财、投资、信用卡、保险和贷款等服务的银行。它是花旗银行在香港经营的子公司。香港花旗银行于1902年开始在香港运营，从而成为香港第一家提供服务的外资银行。花旗银行（香港）有限公司是一家在香港注册成立的持牌银行。香港花旗银行在香港岛，九龙，新界和澳门开设48家分行。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港花旗银行开户优势
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
                        <div class="condition-item">香港公司资料（CI、BR、NNC1/NAR1、章程、变更文件、条形章）</div>
                        <div class="condition-item">香港公司购销合同各一份</div>
                        <div class="condition-item">董事身份证、通行证、过关小票、个人流水</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">其他银行的近 3-6 个月结单（如有）</div>
                        <div class="condition-item">大陆公司材料（如有）：营业执照，对公流水</div>
                        <div class="condition-item">大陆公司业务（如有）：业务合同 2 份，发票，运输单，提单，报关单</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港花旗银行开户流程
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
                    香港花旗银行常见问题
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
import '@/css/bank_company/hk/citi/Citi_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料预审',
        description: '发送资料至银行进行预审'
    },
    {
        iconId: '#icon-city', 
        title: '预约面签',
        description: '预约花旗地点，按要求面签签字'
    },
    {
        iconId: '#icon-award-line', 
        title: '审批下发',
        description: '审批通过，银行寄出编码器密码信'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '办理完成',
        description: '成功激活账户并完成开户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-exchange-cny-line', 
        title: '综合多币种账户',
        description: '自由调拨资金，提供综合多币种账户管理'
    },
    {
        iconId: '#icon-good-two', 
        title: '多行业包容接收',
        description: '电商、珠宝、大宗商品、贵金属行业均可受理'
    },
    {
        iconId: '#icon-finance', 
        title: '费用豁免优惠',
        description: '可申请豁免管理费、限时无银行查册费用'
    },
    {
        iconId: '#icon-world', 
        title: '高风险国家贸易',
        description: '花旗银行能与敏感/高风险国家资金贸易往来'
    },
    {
        iconId: '#icon-transaction', 
        title: '出入账方式广',
        description: '支持信用证、银行支票等多种出入账方式'
    },
    {
        iconId: '#icon-protect', 
        title: '超级网银系统',
        description: '采用超级网银(即无限额)，满足大额资金自由流转'
    }
]

const faqs = ref([
    {
        question: "开了花旗方便购买港股美股吗？",
        answer: "当然可以，跟普通转出账一样的流程。"
    },
    {
        question: "香港花旗银行开户要多久时间？",
        answer: "8周左右（4周左右下表，银行收到文件5周左右下户）"
    },
    {
        question: "香港花旗银行的额度是多少？",
        answer: "超级账户，无限额"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.citi_content2 .content1',
        '.citi_content2 .content2',
        '.citi_content2 .content3',
        '.citi_content2 .content4',
        '.content_bank',
        '.citi_content2 .content6'
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
