<template>
    <div class="boc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港中国银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/china.jpg" alt="">
                    <div class="text">
                        <P>中国银行香港分行作为总行全资直属分行及全牌照商业银行，地位稳固。企业开户可享资金自由调拨、无外汇管制及优惠利率，助力海外业务与税务优化；个人开户则便利海外置业、留学及全球财富管理，提升资金使用效率。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港中国银行开户优势
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
                        <div class="condition-item">香港公司资料（CI、BR、NNC1\NAR1、章程、变更文件、条形章）</div>
                        <div class="condition-item">董事身份证、通行证、个人流水、过关小票</div>
                        <div class="condition-item">香港公司购销合同各一份</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">其他银行的结单近 3-6 个月（如有）</div>
                        <div class="condition-item">大陆公司营业执照，对公流水，购销合同各2份</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港中国银行开户流程
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
                    香港中国银行常见问题
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
import '@/css/bank_company/hk/boc/Boc_content2.css'
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
        title: '预约银行地点',
        description: '预约香港中国银行或指定地点面签。'
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
        iconId: '#icon-city', 
        title: '新公司可开',
        description: '资料简单，无需繁琐证明。'
    },
    {
        iconId: '#icon-peoples', 
        title: '账户赠送',
        description: '开公司账户送个人账户。'
    },
    {
        iconId: '#icon-search', // Using a generic search icon if available, otherwise check iconfont
        title: '查册审批',
        description: '先发资料查册审批，通过率高。'
    }
]
// Replace icon-search with something valid if not exists. I see icon-message-search in the list or just use icon-audit.
// Let's use icon-audit or icon-message-search. icon-message-search is in list.
advantage[2].iconId = '#icon-message-search';




const faqs = ref([
    {
        question: "香港中国银行接受哪些类型的企业开立账户？",
        answer: "香港中国银行只接受香港企业、自然人开立中国银行账户。\n\n要注意的是，企业董事及股东如果在中国银行任何一家分支机构有不良记录的话，中国银行将不接受开户申请，同时一些高风险国家，如伊拉克、伊朗、朝鲜等也在拒接范围内。"
    },
    {
        question: "香港中国银行开户要多久时间？",
        answer: "6-8周"
    },
    {
        question: "香港中国银行开户额度要多少？",
        answer: "100万+100万，下户后可提额"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.boc_content2 .content1',
        '.boc_content2 .content2',
        '.boc_content2 .content3',
        '.boc_content2 .content3_1',
        '.boc_content2 .content4',
        '.boc_content2 .content5',
        '.content_bank',
        '.boc_content2 .content6'
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
