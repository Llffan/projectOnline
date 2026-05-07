<template>
    <div class="sg_maybank_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡马来亚银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/sg/马来西亚.png" alt="新加坡马来亚银行">
                    <div class="text">
                        <P>马来亚银行，全称马来西亚银行有限公司(Maybank)，总部位于马来西亚吉隆坡，属于马来西亚最大的银行，同时也是马来西亚证券交易所最大的上市公司。现时马来亚银行国内分行达到334间，海外分行为34间，资产总额达3370亿林吉特(约合1050亿美元)，在东南亚的10多个国家，以及纽约、伦敦、新加坡、香港以及上海都拥有众多的客户群体。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡马来亚银行开户优势
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
                        <div class="condition-item">新加坡公司全套注册资料或香港公司全套注册资料</div>
                        <div class="condition-item">身份证、护照、英文地址证明（非英文地址需要CPA核实）</div>
                        <div class="condition-item">关联公司的营业执照、近半年流水</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">近三个月业务合同（2采2购），发票、银行回单、报关单提单</div>
                        <div class="condition-item">完善的开户KYC表格</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡马来亚银行开户流程
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
            <SG_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    新加坡马来亚银行常见问题
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
import '@/css/bank_company/sg/maybank/Maybank_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '提供资料初审',
        description: '提供上述要求的公司文件资料等用于初步审核'
    },
    {
        iconId: '#icon-upload-one', 
        title: '依实补充资料',
        description: '后续将依据公司背景及审核情况，做资料补充等完善'
    },
    {
        iconId: '#icon-accept-email', 
        title: '远程完成注册',
        description: '远程完成账户的开设及网银注册，整个周期约3-4周'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-shield', 
        title: '重视隐私保障',
        description: '新加坡金管局设立严格监管机制，最大程度上保障客户账户安全和隐私'
    },
    {
        iconId: '#icon-city', 
        title: '支持远程开户',
        description: '接受香港、开曼、BVI等复杂架构海外公司申请，在家即可办理'
    },
    {
        iconId: '#icon-transaction', 
        title: '多币种风控宽松',
        description: '支持包含美金、新币、英镑欧元等十余种主流货币，风控要求相对宽松'
    },
    {
        iconId: '#icon-finance', 
        title: '无开户查册费',
        description: '无查册费，门槛包容性强，转账手续费用极低且网银功能设计简洁'
    }
]

const faqs = ref([
    {
        question: "新加坡马来亚银行有账户管理费的吗？",
        answer: "没有账户管理费。"
    },
    {
        question: "新加坡马来亚银行开户要有存款吗？",
        answer: "一般都是要提供资产证明的，资产证明可以是股票，债券，流动资金等的月单。"
    },
    {
        question: "新加坡马来亚银行开户办理下来需要多久时间？",
        answer: "一般在5-7周左右。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_maybank_content2 .content1',
        '.sg_maybank_content2 .content2',
        '.sg_maybank_content2 .content3',
        '.sg_maybank_content2 .content4',
        '.content_bank',
        '.sg_maybank_content2 .content6'
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
