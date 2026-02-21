<template>
    <div class="hangseng_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港恒生银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/hang_seng.jpg" alt="香港恒生银行">
                    <div class="text">
                        <P>
                            恒生银行资本雄厚，主要业务包括个人理财、商业银行、工商及金融机构业务、财资服务，以及私人银行服务。恒生于1933年创立，追求卓越，精益求精一直是我们的服务宗旨。在香港，我们拥有逾220个服务网点，网络庞大，几乎遍布全港每一角落─目的是为你提供更优良的服务。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港恒生银行开户优势
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
                        <div class="condition-item">董事身份证，回乡证</div>
                        <div class="condition-item">香港公司业务证明：意向采购、销售各二份</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">关联公司执照（如有）</div>
                        <div class="condition-item">香港公司有租约（如有）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港恒生银行开户流程
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
                    香港恒生银行常见问题
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
import '@/css/bank_company/hk/hangseng/HangSeng_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: '提交资料初审',
        description: '提交资料，银行进行初步审核'
    },
    {
        iconId: '#icon-audit', 
        title: '户口批核',
        description: '银行审核通过，批核户口'
    },
    {
        iconId: '#icon-phone-call', 
        title: '预约分行及时间',
        description: '预约前往分行的时间和地点'
    },
    {
        iconId: '#icon-agreement', 
        title: '分行签字',
        description: '前往分行进行签字确认'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '账户开通',
        description: '账户正式开通使用'
    },
    {
        iconId: '#icon-accept-email', 
        title: '账户资料寄出',
        description: '银行寄出账户相关资料'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-doc-success', 
        title: '资料简单',
        description: '资料简单外籍人士可办理'
    },
    {
        iconId: '#icon-world', 
        title: '分布广泛',
        description: '全国均可办理，网点分布广泛'
    },
    {
        iconId: '#icon-certificate', 
        title: '成功率高',
        description: '无需过港，开户成功率高'
    },
    {
        iconId: '#icon-finance', 
        title: '节约成本',
        description: '豁免各项手续费用、管理费，节约汇款成本'
    }
]




const faqs = ref([
    {
        question: "香港恒生银行开户要多久时间？",
        answer: "5-6周（3周左右下表）"
    },
    {
        question: "香港恒生银行不接受哪些国家的公司或个人开立账户？",
        answer: "如公司董事及股东有在恒生银行任一家分支机构有不良记录的，恒生银行都不接受公司银行账户，还有一些高风险国家，如伊拉克、伊朗、朝鲜等等。"
    },
    {
        question: "香港恒生银行账户可以接收信用证吗？",
        answer: "香港恒生银行账户可以接收信用证，如需开出信用证，须开立信用证帐户。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    // Animate content sections including their titles as single units, matching Everbright implementation
    const sections = [
        '.hangseng_content2 .content1',
        '.hangseng_content2 .content2',
        '.hangseng_content2 .content3',
        '.hangseng_content2 .content3_1',
        '.hangseng_content2 .content4',
        '.hangseng_content2 .content5',
        '.content_bank',
        '.hangseng_content2 .content6'
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
