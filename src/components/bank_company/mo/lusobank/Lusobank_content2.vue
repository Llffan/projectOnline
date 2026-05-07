<template>
    <div class="mo_lusobank_content2">
        <div class="content_box">
            <!-- 1. 银行简介 -->
            <div class="content1">
                <div class="title">
                    澳门国际银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/国际银行.png" alt="澳门国际银行">
                    <div class="text">
                        <P>
                            澳门国际银行于一九七四年在中国澳门注册成立，一九八五年成为中国第一家中外合资银行－厦门国际银行的全资附属机构，经营一切商业银行业务。多年来经过不断努力，本行的业务蒸蒸日上，发展迅速。作为中国澳门一家主要的商业银行，本行目前属下分行遍布澳门各主要区域，竭诚为广大市民服务，并以稳健经营、积极进取的方针和提供优质服务的宗旨，努力为澳门的发展作出贡献。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门国际银行开户优势
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
                        <div class="condition-item">公司核证文件：商业登记证、M1、股权架构图、M8等</div>
                        <div class="condition-item">业务核实凭证：上下游主要的业务合同及发票等</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">身份核验文件：股东身份证明、地址证明、澳门通行证、银行流水</div>
                        <div class="condition-item">关联公司资料（如有）：注册证书、银流水、业务合同发票提单等</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门国际银行开户流程
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
                    澳门国际银行常见问题
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
import '@/css/bank_company/mo/lusobank/Lusobank_content2.css'
import MO_Cooperative_Bank from '@/components/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '审核文件',
        description: '提交材料，由专人及银行系统初步审核相关文件'
    },
    {
        iconId: '#icon-airplane', 
        title: '邮寄签字文件',
        description: '文件审核通过且确认无需补充后，寄出指定签字文件'
    },
    {
        iconId: '#icon-user', 
        title: '收取办理原件',
        description: '申请人签妥后，将核实签批过关的签字原件寄回/递交验证'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '账户落成开通',
        description: '成功完成账户开通动作，下发账户资料至客户手上'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: '真正的低门槛',
        description: '无需强制高额存款、无需购买附加理财产品，且免收日常管理费'
    },
    {
        iconId: '#icon-finance', 
        title: '支持极高转账额度',
        description: '不设汇兑阻碍管辖，支持收付外币流转均可达每日1亿限额'
    },
    {
        iconId: '#icon-world', 
        title: '远程全包极度省心',
        description: '港澳公司申请可享受免过境福利，您无需亲自赴澳本地，我司可全程代办'
    },
    {
        iconId: '#icon-doc-success', 
        title: '审批快速且高效',
        description: '整体下户时间极短，视不同属性执照约仅需7至12个工作日左右'
    }
]

const faqs = ref([
    {
        question: "澳门银行开户注意事项？",
        answer: "1.不同银行的开户要求不同，有中资的银行也有外资银行。有的需要提前预约，有的需要5w港币定期存款，具体挑选要看客人的实际资质和需求。\n2.整个面见沟通的开户流程大约半小时左右。\n3.记得开通环球付款服务：这样在内地或其他国家就可以直接使用这个银行卡消费或流转了。"
    },
    {
        question: "澳门国际银行开户要多久时间？",
        answer: "如审核前置工作充分，可做到当天下户。"
    },
    {
        question: "澳门国际银行开户要提前预约吗？",
        answer: "常规需要提前 3-5 天工作日进行提早预约锁定档期。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_lusobank_content2 .content1',
        '.mo_lusobank_content2 .content2',
        '.mo_lusobank_content2 .content3',
        '.mo_lusobank_content2 .content4',
        '.content_bank',
        '.mo_lusobank_content2 .content6'
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
