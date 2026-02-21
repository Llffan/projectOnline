<template>
    <div class="icbc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    工银亚洲银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/ICBC.jpg" alt="工银亚洲银行">
                    <div class="text">
                        <P>工银亚洲开户见证业务是指内地中国工商银行网点可为开立中国工商银行（亚洲）有限公司（以下简称工银亚洲）的「理财金账户」或「综合账户」提供见证服务。工银亚洲理财金账户及综合账户均为包含多个不同子账户的综合账户，便于客户处理现金提存和账款收支等日常理财事务。其子账户包括港币储蓄账户、港币往来账户、美元往来账户、外币储蓄账户、定期存款账户等。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    工银亚洲银行开户优势
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
                        <div class="condition-item">香港公司全套资料：CR证书、BR证书、NNC1、公司章程和印章等</div>
                        <div class="condition-item">身份证明材料：大陆居民合法身份证原件以及港澳通行证</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">地址证明材料：3个月内的水电气费账单、银行月结单等</div>
                        <div class="condition-item">业务与过境证明：国内公司购销合同、贸易流水单据及香港入境过境小票</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    工银亚洲银行开户流程
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
                    工银亚洲银行常见问题
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
import '@/css/bank_company/hk/icbc/Icbc_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料发送',
        description: '受理网点整理开户资料并发送至工银亚洲'
    },
    {
        iconId: '#icon-communication', 
        title: '电话核实',
        description: '资料审核后，工银客服中心将致电核实相关资料'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '开通服务',
        description: '电话确认后的第2个工作日开通相关网银及电话服务'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '收取卡片',
        description: '确认后7～10个工作日收到寄送的银行卡并使用'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: '国内背景深厚',
        description: '作为国内工商在港分支机构，更受国内人士青睐与信赖'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '便捷免费转账',
        description: '内地APP转账到工银亚洲免手续费、免证明且实时到账'
    },
    {
        iconId: '#icon-finance', 
        title: '直接参与港股',
        description: '理财账户可直接投资港股，无需专门找当地券商开户，非常方便'
    }
]

const faqs = ref([
    {
        question: "工银亚洲手机银行客户端如何下载？",
        answer: "可通过手机应用商店搜索关键字\"ICBCmobile banking\"或\"工银亚洲\"下载。"
    },
    {
        question: "工银亚洲账户密码（如借记卡、网银）忘记或者被锁定后该如何处理？",
        answer: "请客户持本人身份证到任意一家受理工银亚洲见证开户业务的境内网点填写更改表，办理相应的密码重置业务即可。"
    },
    {
        question: "工银亚洲银行开户要多久时间？",
        answer: "审核一周（可加急），一般约一周后，面签后1-3周后下户。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.icbc_content2 .content1',
        '.icbc_content2 .content2',
        '.icbc_content2 .content3',
        '.icbc_content2 .content4',
        '.content_bank',
        '.icbc_content2 .content6'
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
