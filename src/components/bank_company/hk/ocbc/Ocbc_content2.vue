<template>
    <div class="ocbc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    华侨银行（香港）简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/OCBC.jpg" alt="华侨银行（香港）">
                    <div class="text">
                        <P>华侨永亨银行有限公司（前身为永亨银行有限公司），是一家持牌银行，总部位于香港，按总资产计算，是香港第八大银行。自2014年7月下旬起，永亨银行成为新加坡华侨银行（OCBC）的子公司。收购永亨为华侨银行提供了一个由约 70 家分行组成的网络，覆盖香港、澳门和中国大陆，以增加华侨银行在香港和中国现有的业务。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    华侨银行（香港）开户优势
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
                        <div class="condition-item">香港公司：CI、BR、NNC1/NAR1、M&A和其他变更档（如有）</div>
                        <div class="condition-item">董事身份证，港澳通行证或护照</div>
                        <div class="condition-item">成立一年以内：国内公司营业执照、近三个月双币流水、一套进出账对应的相关业务合同</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">新公司（无国内流水）：提供内地内销业务材料及香港公司国外对手的采购合同也可以做</div>
                        <div class="condition-item">成立两年以上：香港公司近三个月流水、一套对应进出账的采购及销售业务档</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    华侨银行（香港）开户流程
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
                    华侨银行（香港）常见问题
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
import '@/css/bank_company/hk/ocbc/Ocbc_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '提交预审',
        description: '先交电子文件预审，后安排视频见证'
    },
    {
        iconId: '#icon-communication', 
        title: '视频见证',
        description: '见证后交后台审批部门审批'
    },
    {
        iconId: '#icon-city', 
        title: '国内面签',
        description: '完成见证并在国内预约分行面签开户'
    },
    {
        iconId: '#icon-airplane', 
        title: '开户办结',
        description: '文件寄回香港办理，完成开户手续'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: '门槛相对包容',
        description: '可接受被恒生、汇丰等拒绝服务的客户开户申请'
    },
    {
        iconId: '#icon-transaction', 
        title: '国际款项结算',
        description: '国际贸易的款项结算方便快捷'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '国际支付便利',
        description: '便于进行国际支付业务，效率极高'
    },
    {
        iconId: '#icon-world', 
        title: '营业网络广泛',
        description: '依托华侨银行强大背景，分行网络覆盖境内外多地'
    }
]

const faqs = ref([
    {
        question: "香港华侨永亨银行每日转账额度是多少？",
        answer: "每日等值 100 万港币。"
    },
    {
        question: "香港华侨永亨银行开户要多久时间？",
        answer: "6-8周（2-3周出见证时间）"
    },
    {
        question: "香港华侨永亨银行账户转账额度是多少？",
        answer: "转账额度：300万港币（登记非登记都是）"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.ocbc_content2 .content1',
        '.ocbc_content2 .content2',
        '.ocbc_content2 .content3',
        '.ocbc_content2 .content4',
        '.content_bank',
        '.ocbc_content2 .content6'
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
