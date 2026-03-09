<template>
    <div class="mo_boc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 -->
            <div class="content1">
                <div class="title">
                    澳门中国银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/mo/中国银行.png" alt="澳门中国银行">
                    <div class="text">
                        <P>
                            中国银行澳门分行（葡萄牙语：Banco da China, Sucursal de Macau）于1950年6月21日成立，简称为中银澳门，前身为澳门南通银行，现为中华人民共和国国有商业银行,中国银行在澳门的分支及澳门其中一家最大商业银行之一，与大西洋银行共同承担澳门元的发钞和澳门政府公共库房出纳代理银行的职能。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门中国银行开户优势
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

            <!-- 3. 所需资料 (企业开户) -->
            <div class="content3">
                <div class="title">
                    企业开户所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">香港公司资料：CI、BR、NNC1/NAR1、M&A</div>
                        <div class="condition-item">董事股东身份证复印件及港澳通行证/护照</div>
                        <div class="condition-item">三个月内的个人地址证明（如水电费单，电话月结单等）</div>
                        <div class="condition-item">中国国内公司营业执照及近6个月的国内公司银行流水（盖章）</div>
                        <div class="condition-item">董事个人近6个月的银行流水（需银行盖章）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">香港公司的购销合同、发票及货运单据（各3份对应）</div>
                        <div class="condition-item">国内公司的购销合同、发票及货运单据（各3份对应）</div>
                        <div class="condition-item">公司的整体商业发展计划书（简述运营模式）</div>
                        <div class="condition-item">KYC尽职调查表格完整填写记录</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门中国银行开户流程
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
            <MO_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    澳门中国银行常见问题
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
import '@/css/bank_company/mo/boc/Boc_content2.css'
import MO_Cooperative_Bank from '@/components/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料预审',
        description: '提交资料和简单个人信息预约'
    },
    {
        iconId: '#icon-audit', 
        title: '银行预审',
        description: '银行预审提交的相关资质与资料'
    },
    {
        iconId: '#icon-user', 
        title: '面签办理',
        description: '赴澳门分行现场进行面签办理手续'
    },
    {
        iconId: '#icon-airplane', 
        title: '收取卡片',
        description: '下户完成后银行邮寄卡片和密码器'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: '操作极简',
        description: '账户操作非常简单，网银登录APP即可转账汇款，随时随地自由操作'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '收付外汇方便',
        description: '自由收付各类外汇，极大方便境内管控调度和境外运作循环'
    },
    {
        iconId: '#icon-finance', 
        title: '高额转账权限',
        description: '享有较高的单日转账与调度额度，灵活满足国际贸易大资金量需求'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: '品牌与信誉保障',
        description: '作为国有大型商业银行及发钞行之一，具备强劲实力护航公司资金'
    }
]

const faqs = ref([
    {
        question: "澳门中银开通账户后要注意的哪六件事？",
        answer: "1. 不要给其他人代收款，坚决杜绝和地下钱庄资金往来，避免与受制裁国家款项接触;如必须有交易，必须保留所有款项来源的相关单据凭证。\n2. 公司贸易尽量采取公对公，最好使用部分L/C以确认您的贸易身份。\n3. 不要大额资金整存、整取。\n4. 保持帐户有一定存款，不能处于欠费空户状态。\n5. 经常运作账户，超过3个月不活动的账户可能会被关闭。\n6. 请确保预留给银行的通讯地址、手机号码、邮箱等绝对有效。若收到合规调查等邮件或表格，务必及时答复配合，以免销户。"
    },
    {
        question: "澳门中银开户要多久时间？",
        answer: "2周左右（成功现场面签后，约需2周左右邮寄银行卡片和密码器）"
    },
    {
        question: "澳门中银开户有卡片吗？",
        answer: "有的，配有实体卡片和独立密码器。面签时须本人亲自前往。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_boc_content2 .content1',
        '.mo_boc_content2 .content2',
        '.mo_boc_content2 .content3',
        '.mo_boc_content2 .content4',
        '.content_bank',
        '.mo_boc_content2 .content6'
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
