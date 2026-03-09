<template>
    <div class="sg_hsbc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡汇丰银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/汇丰银行.png" alt="新加坡汇丰银行">
                    <div class="text">
                        <P>汇丰银行是在新加坡成立的最早的银行之一， 提供广泛的银行和金融服务，包括零售银行和财富管理；商业，投资和私人银行业务；保险; 遗赠和受托人服务；证券和资本市场服务，可满足跨国公司，本土企业，私人银行客户，机构和零售客户的银行需求。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡汇丰银行开户优势
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
                        <div class="condition-item">新加坡公司注册证书</div>
                        <div class="condition-item">新加坡公司章程</div>
                        <div class="condition-item">新加坡和国内法人和股东身份证正反面扫描件、护照扫描件</div>
                        <div class="condition-item">国内公司和新加坡公司近 3 个月内银行流水</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">新加坡和国内关联公司上下游合同，提单</div>
                        <div class="condition-item">国内关联公司营业执照</div>
                        <div class="condition-item">关联公司及董事股东半年内银行流水</div>
                        <div class="condition-item">填写 KYC</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡汇丰银行开户流程
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
                    新加坡汇丰银行常见问题
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
import '@/css/bank_company/sg/hsbc/Hsbc_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '初期审核',
        description: '审核 2-3 个工作日'
    },
    {
        iconId: '#icon-communication', 
        title: '银行咨询',
        description: '银行邮件咨询客户经营相关问题，留意回复'
    },
    {
        iconId: '#icon-city', 
        title: '开一般户',
        description: '预约开设国内公司一般户'
    },
    {
        iconId: '#icon-upload-one', 
        title: '邮寄办理',
        description: '寄到新加坡银行办理'
    },
    {
        iconId: '#icon-accept-email', 
        title: '开通通知',
        description: '6 周左右收到账户开通通知'
    },
    {
        iconId: '#icon-airplane', 
        title: '激活下发',
        description: '存款激活后两周左右寄出网银和支票本'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: '收付自由',
        description: '自由收付其他国家外币，无外汇额度限制'
    },
    {
        iconId: '#icon-good-two', 
        title: '简单高效',
        description: '开户资料要求简单、开户时间快'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '银行限制少',
        description: '有实体卡外资银行使用灵活，跨境转账实时到账'
    },
    {
        iconId: '#icon-world', 
        title: '产品丰富',
        description: '港股、美股、新加坡股等基金任选'
    }
]

const faqs = ref([
    {
        question: "新加坡哪个银行开户最简单？",
        answer: "新加坡银行开户都非常简单。和常规开香港账户不同，新加坡不需要去国内线下营业厅，全程线上视频对接新加坡银行，信息不会在国内存档。"
    },
    {
        question: "新加坡汇丰银行开户要多久时间?",
        answer: "5-6周"
    },
    {
        question: "新加坡汇丰银行都可以开通什么币种?",
        answer: "新加坡银行都是多币种账户，除了美元、坡币之外，还包括港币、澳元、日元、港币、欧元、英镑等常见币种。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_hsbc_content2 .content1',
        '.sg_hsbc_content2 .content2',
        '.sg_hsbc_content2 .content3',
        '.sg_hsbc_content2 .content4',
        '.content_bank',
        '.sg_hsbc_content2 .content6'
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
