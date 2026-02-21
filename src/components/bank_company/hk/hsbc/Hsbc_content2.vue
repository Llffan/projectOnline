<template>
    <div class="hsbc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港汇丰银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/HSBC.jpg" alt="">
                    <div class="text">
                        <P>汇丰银行是外资银行，全称香港上海汇丰银行有限公司（The Hongkong and Shanghai Banking Corporation Limited），中文直译为“香港和上海银行有限公司”，英文缩写为HSBC，中文简称为“汇丰”，取“汇款丰裕”之意。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港汇丰银行开户优势
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
                    香港汇丰银行开户所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="section-title">企业开户所需资料</div>
                        <div class="condition-item">香港全套文件</div>
                        <div class="condition-item">个人证件</div>
                        <div class="condition-item">业务资料</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="section-title">如有国内关联公司（相同股东）</div>
                        <div class="condition-item">国内关联公司基础资料（营业执照、流水、宣传册/网址等）</div>
                        <div class="condition-item">完整业务单据1-2套（购销合同、订单、提单、收付款记录及电邮沟通）</div>
                        <div class="condition-item">特殊情况：香港关联公司需提供流水/周年申报表；直系亲属持有需关系证明</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港汇丰银行开户流程
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
                    香港汇丰银行常见问题
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
                            <div v-if="faq.isHtml" v-html="faq.answer"></div>
                            <div v-else>{{ faq.answer }}</div>
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
import '@/css/bank_company/hk/hsbc/Hsbc_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: '第一步',
        description: '准备开户所需资料'
    },
    {
        iconId: '#icon-audit', 
        title: '第二步',
        description: '提供资料审核2周,审核通过后安排2周安排北上广深见证开户'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '第三步',
        description: '开户后3-4周下户（额度：100万，有卡片，有编码器）'
    }
]

const advantage = [
    {
        iconId: '#icon-finance', 
        title: '收付自由',
        description: '自由收付其他国家外币，无外汇额度限制'
    },
    {
        iconId: '#icon-communication', 
        title: '沟通便捷',
        description: '有专业客户经理一对一跟进账户相关事项，减少无故关户风险'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: '简单高效',
        description: '开户资料要求简单、开户时间快'
    },
    {
        iconId: '#icon-world', 
        title: '国际品牌',
        description: '作为全球知名银行，网点遍布全球，跨境业务办理方便快捷，提升企业国际形象'
    }
]



const faqs = ref([
    {
        question: "香港汇丰银行开户前需要注意的问题？",
        answer: `
            <p>1.确定香港公司名称是否带有如：国际,集团,控股,资本,资产,全球,投资等字眼，如果存在相关字眼，有可能要求提供相关证明</p>
            <p>2.务必事先准备好开户所需的证明文件，以免因为资料不齐原因而白跑一趟</p>
            <p>3.如果投资者有国内关联公司的话，最好当面提供相关国内公司营业执照以及业务证明（如业务订单,购销发票,合同,提单等）</p>
            <p>4.确认是否公司的客户群体是否包含高危敏感国家，以免因为对方的原因导致账户受到处理</p>
            <p>5.需要开立的是综合理财账户，内容包括储蓄、支票、外币、网上银行户口和信用证户口</p>
            <p>6.申请公司账户需要事先准备好1万港币现金，到时候存入账户使用</p>
        `,
        isHtml: true
    },
    {
        question: "香港汇丰银行开户要多久时间？",
        answer: "6-8周（4周审核时间）",
        isHtml: false
    },
    {
        question: "香港汇丰银行开户有卡片，有编码器吗？",
        answer: "有卡片，有编码器",
        isHtml: false
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.hsbc_content2 .content1',
        '.hsbc_content2 .content2',
        '.hsbc_content2 .content3',
        '.hsbc_content2 .content3_1',
        '.hsbc_content2 .content4',
        '.hsbc_content2 .content5',
        '.consultant_box',
        '.content_bank',
        '.hsbc_content2 .content6'
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
