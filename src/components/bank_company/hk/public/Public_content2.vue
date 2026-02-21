<template>
    <div class="public_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    大众银行（香港）简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/public.png" alt="大众银行（香港）">
                    <div class="text">
                        <P>企业开设境外银行账户，其核心原因就在于企业可通过境外银行实现自由调拨资金、不受外汇管制、资金利用最大化、比境内外银行同类存款利率优惠、存取灵活，特别是大额款等优势。以及有效优化税务结构的目的，给予海外业务拓展更大支持。大众银行（香港）作为知名持牌金融机构，能为客户提供全方位的商贸辅助及金融汇通服务。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    大众银行开户优势
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
                        <div class="condition-item">公司基础证照：公司注册证书(CI)与最新的商业登记证(BR)</div>
                        <div class="condition-item">章程与登记表：提供周年申报表或NNC1，及完整的公司章程(注:AAB与秘书地址不一致)</div>
                        <div class="condition-item">业务证明材料：准备真实有效产生的业务外包或者海外意向购销合同</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">身份材料证明：所有公司董事和股东的真实个人身份证件</div>
                        <div class="condition-item">过境通行证明：所有当事董事以及股东真实有效的港澳通行证件</div>
                        <div class="condition-item">过关通关小票：面签董事与股东赴港途中真实产生的海关过关小票</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    大众银行（香港）开户流程
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
                    大众银行常见问题
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
import '@/css/bank_company/hk/public/Public_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料初审',
        description: '先将所需开户文件电子版交由我们初步整理与银行经理初审'
    },
    {
        iconId: '#icon-communication', 
        title: '面签预约',
        description: '初审通过之后，我们将为您联络银行预约办理过港面签安排'
    },
    {
        iconId: '#icon-city', 
        title: '过港面签',
        description: '客户按照约定的时间和要求到指定的大众银行分行开户面签'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '完成开户',
        description: '顺利完成开户手续，当天可拿户头并行稍后下发网银权限'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-earth', 
        title: '无年龄地区限制',
        description: '开户极其包容，没有任何年龄限制和地区限制。'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: '无管理费存款要求',
        description: '免去繁琐门槛，无账户管理费且无附加大额存款要求。'
    },
    {
        iconId: '#icon-notes', 
        title: '分行资料当场拿',
        description: '前往过境分行面签成功后，相应的银行开户资料当场即可拿走。'
    },
    {
        iconId: '#icon-award-line', 
        title: '全球高信誉度',
        description: '大众银行（香港）在全球范围内都享有较高的商业声誉和信誉。'
    },
    {
        iconId: '#icon-world', 
        title: '无外汇管制自由',
        description: '香港账户免受外汇限制影响，企业及个人调拨资金进出完全自由。'
    },
    {
        iconId: '#icon-finance', 
        title: '网银转账快速便捷',
        description: '全面支持网银操作，处理业务十分快速便捷，且系统转账速度极快。'
    },
    {
        iconId: '#icon-transaction', 
        title: '多币种交易账户',
        description: '提供多币种账户支持及汇对交易结算，全面满足各级商贸活动。'
    },
    {
        iconId: '#icon-airplane', 
        title: '开户下发时间极快',
        description: '面签当天即可拿到公司账户，后续极速约 2 周左右即可拿到网银。'
    }
]

const faqs = ref([
    {
        question: "大众银行（香港）开户费用是多少，有没有具体要求？",
        answer: `大众银行的收费和具体要求包含：\n\n查册费：300 港币\n开户费：800 港币\n网银额度：转账高达 150 万港币/天（且没有实物编码器操作）\n\n理财要求配合：通常要求过账 2000美金 规模（约持 5 年规格）的储蓄类保险理财产品配套即可。`
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.public_content2 .content1',
        '.public_content2 .content2',
        '.public_content2 .content3',
        '.public_content2 .content4',
        '.content_bank',
        '.public_content2 .content6'
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
