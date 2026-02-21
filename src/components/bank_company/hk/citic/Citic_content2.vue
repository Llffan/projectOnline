<template>
    <div class="citic_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港中信银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/china_citic.jpg" alt="">
                    <div class="text">
                        <P>中信银行成立于1987年，是中国改革开放中最早成立的新兴商业银行之一，是中国最早参与国内外金融市场融资的商业银行，并以屡创中国现代金融史上多个第一而蜚声海内外，为中国经济建设做出了积极贡献。2007年4月，中信银行实现在上海证券交易所和香港联合交易所A+H股同步上市。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港中信银行开户优势
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
                        <div class="condition-item">香港公司业务性质</div>
                        <div class="condition-item">供应商和买家的主要国家，目标客户</div>
                        <div class="condition-item">营运地点</div>
                        <div class="condition-item">产品特点</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">工作经验，过往开公司经验</div>
                        <div class="condition-item">提供公司文件和股东董事资料</div>
                        <div class="condition-item">注册文件</div>
                        <div class="condition-item">所有股东和董事公司的最近三个月银行月结单/流水</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港中信银行开户流程
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
                    香港中信银行常见问题
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
                            {{ faq.answer }}
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
import '@/css/bank_company/hk/citic/Citic_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



const registrationProcess = [
    {
        iconId: '#icon-city', 
        title: '第一步',
        description: '可选任意一个分行'
    },
    {
        iconId: '#icon-audit', 
        title: '第二步',
        description: '带公司文件和个人资料等，到银行交自检和支付150港币查册费。银行此时对各位股东董事做身份证核实'
    },
    {
        iconId: '#icon-agreement', 
        title: '第三步',
        description: '银行通知客人去签署申请开户表格。此后约3周完成开户'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '第四步',
        description: '总开户时间约1个月'
    }
]

const advantage = [
    {
        iconId: '#icon-world', 
        title: '在岸离岸账户',
        description: '可开立在岸离岸账户，不受外汇管制，资金可自由调拨'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        title: '国际贸易结算',
        description: '方便进行国际贸易的款项结算'
    },
    {
        iconId: '#icon-finance', 
        title: '自由兑换',
        description: '各种货币可自由兑换'
    },
    {
        iconId: '#icon-diamond', 
        title: '操作简便',
        description: '账户日常操作简便，便于向国际性银行进行贸易融资'
    }
]



const faqs = ref([
    {
        question: "香港中信银行开户可以在周末见证吗？",
        answer: "一般都需要在工作日见证。"
    },
    {
        question: "香港中信有没有实体卡？",
        answer: "有实体卡，卡片类型是银联卡，支持在内地ATM机取款。额度是2万港币/天，不占用5万美金外汇额度。"
    },
    {
        question: "香港中信银行首次最低存款可以是多少？",
        answer: "首次存款最低3万"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    // Check if consultant_box exists in DOM, if not, careful with selector.
    // I added it in template, so it's fine.
    
    const sections = [
        '.citic_content2 .content1',
        '.citic_content2 .content2',
        '.citic_content2 .content3',
        '.citic_content2 .content3_1',
        '.citic_content2 .content4',
        '.citic_content2 .content5',
        '.consultant_box',
        '.content_bank',
        '.citic_content2 .content6'
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
