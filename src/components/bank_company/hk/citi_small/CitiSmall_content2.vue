<template>
    <div class="citi_small_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港小花旗银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/citibank2.jpg" alt="香港小花旗银行">
                    <div class="text">
                        <P>香港小花旗银行香港花旗银行 Citibank（Hong Kong）是香港一家提供理财、投资、信用卡、保险和贷款等服务的银行。它是花旗银行在香港经营的子公司。 香港花旗银行于1902年开始在香港运营，从而成为香港第一家提供服务的外资银行。花旗银行（香港）有限公司是一家在香港注册成立的持牌银行。香港花旗银行在香港岛，九龙，新界和澳门开设48家分行。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港小花旗银行开户优势
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
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0037ff7e;">有大陆公司</div>
                        <div class="condition-item">香港公司资料：CI、BR、NNC1/NAR1、M&A</div>
                        <div class="condition-item">香港公司证明：采购、销售合同、提单各2份，近3个月月结单（如有），意向购销合同各一份</div>
                        <div class="condition-item">个人资料：董事股东身份证 + 港澳通行证</div>
                        <div class="condition-item">大陆公司资信：营业执照 + 近3-6个月流水 + 采购、销售合同、提单各2份</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0037ff7e;">无大陆公司</div>
                        <div class="condition-item">香港公司资料：全套资料（CI、BR、NNC1\NAR1、章程、变更文件、条形章）</div>
                        <div class="condition-item">个人资料：董事身份证、港澳通行证、过关小票、个人流水、社保流水、劳动合同（与香港公司行业一致）</div>
                        <div class="condition-item">香港公司证明：意向购销合同各一份，近 3-6 个月银行结单（如有）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港小花旗银行开户流程
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
                    香港小花旗银行常见问题
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
import '@/css/bank_company/hk/citi_small/CitiSmall_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料预审',
        description: '发送相关开户资料进行初步预审'
    },
    {
        iconId: '#icon-city', 
        title: '预约面签',
        description: '预约香港花旗地点，并按要求到达面签签字'
    },
    {
        iconId: '#icon-communication', 
        title: '信件寄出',
        description: '行方审批成功后，将为您寄出编码器及密码信'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '完成开户',
        description: '成功激活信息并正式完成开户使用'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-world', 
        title: '综合多币种账户',
        description: '提供港币、美金、英镑、日元、新币等14种主流储蓄户口'
    },
    {
        iconId: '#icon-protect', 
        title: '高风险包容接入',
        description: '电商及大宗商品均可受理，更可与敏感及高风险国家进行资金贸易往来'
    },
    {
        iconId: '#icon-good-two', 
        title: '费用豁免力度大',
        description: '可申请豁免昂贵的账户管理费，且支持限时无银行查册费用'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '收付渠道极广',
        description: '支持信用证、银行支票出入账，更支持超级网银（即无限额交易）'
    }
]

const faqs = ref([
    {
        question: "香港小花旗需要看营业额或者结汇吗？",
        answer: "不看营业额，不用结汇。"
    },
    {
        question: "香港小花旗的额度是多少？",
        answer: "香港小花旗的额度是100万，适合小额度需求的公司。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.citi_small_content2 .content1',
        '.citi_small_content2 .content2',
        '.citi_small_content2 .content3',
        '.citi_small_content2 .content4',
        '.content_bank',
        '.citi_small_content2 .content6'
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
