<template>
    <div class="mo_wl_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    澳门立桥银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/mo/立桥银行.png" alt="澳门立桥银行">
                    <div class="text">
                        <P>立桥银行成立于1996年，是澳门的一家享有盛名的全牌照商业银行。其前身是由葡萄牙第二大市值的圣灵银行于1996年在澳门成立的子行——必利胜银行股份有限公司，2014年更名为新银行亚洲股份有限公司，自2017年10月起正式更名为立桥银行股份有限公司，历史悠久且底蕴丰厚，致力于为亚太客户提供高水准的综合类银行服务。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门立桥银行开户优势
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
                        <div class="condition-item">香港/属地公司全套核心文件（注册证书、商业登记证及章程等）</div>
                        <div class="condition-item">公司业务流转证明（上下游合同业务单据及国内关联等证明）</div>
                        <div class="condition-item">全体股东及董事的护照、身份证副本及近三个月地址流水证明</div>
                        <div class="condition-item">填写完整的银行内定开户表格以及法团成立/周年申报表等记录</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">纯个人开户要求：需提供本人的有效身份证与港澳通行证</div>
                        <div class="condition-item">所有类别开户人均须保留及出示最近一次的真实澳门关口入境小票</div>
                        <div class="condition-item">必须保证公司所有变更信息（如有）按章程完备供银行合法查验</div>
                        <div class="condition-item">依据银行预审通知在面签时配合合规人员指引递交上述复印正本</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门立桥银行开户流程
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
                    澳门立桥银行常见问题
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
import '@/css/bank_company/mo/wl/Wl_content2.css'
import MO_Cooperative_Bank from '@/components/bank_company/common/MO_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-audit', 
        title: '资料预审',
        description: '提交以上资料预审核'
    },
    {
        iconId: '#icon-user', 
        title: '赴澳面签',
        description: '审核通过后预约时间赴澳门面签'
    },
    {
        iconId: '#icon-finance', 
        title: '办理开户',
        description: '银行处理开设账户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: '极简资料当天闪电下户',
        description: '立桥以高度灵活审查著称，资料符合情况下面签当天就能办理获取实名下户结果'
    },
    {
        iconId: '#icon-world', 
        title: '覆盖全球多币种体系',
        description: '拥有世界常用货币清算资格，支持离岸客户进行多币种账户转换'
    },
    {
        iconId: '#icon-bank-line', 
        title: '无外汇管制的自由调拨',
        description: '享有澳门金管免除诸多繁杂管制的便利规则，资金出入及调拨极度自由'
    },
    {
        iconId: '#icon-transaction', 
        title: '零管理费与电汇无限额',
        description: '账户运营暂不收取常规性的月管理费，同时享有极度高额及无上限的电汇权益'
    }
]

const faqs = ref([
    {
        question: "澳门立桥银行账户在国内取现要收费吗？",
        answer: "澳门立桥银行非常贴心，在涵盖国内与澳门以外的全球绝大区域利用带有其标志的银联卡取现，都是免收手续费手续的。单卡每天额度高达2万港币的等值现钞。"
    },
    {
        question: "澳门立桥银行开户有独立网银及实体密码器吗？",
        answer: "立桥目前下户通常仅派发实体银行卡并关联网银程序，是没有额外的独立微型密码安保器的，相关验证及功能可直接连入APP操作。"
    },
    {
        question: "澳门立桥银行开户办理下来大概要多久？",
        answer: "非常迅速！这是选择立桥的最大原因之一——在预审所有档案充分合规下，通过代理引荐并在分行进行现场见证确认后，即日（当天）就能取得个人/商务账户网银使用权。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_wl_content2 .content1',
        '.mo_wl_content2 .content2',
        '.mo_wl_content2 .content3',
        '.mo_wl_content2 .content4',
        '.content_bank',
        '.mo_wl_content2 .content6'
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
