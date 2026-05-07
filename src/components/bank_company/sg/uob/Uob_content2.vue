<template>
    <div class="sg_uob_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡大华银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/sg/大华银行.png" alt="新加坡大华银行">
                    <div class="text">
                        <P>大华银行(United Overseas Bank)在1935年创立，是亚洲主要银行，拥有超过500间分行及办事处的环球业务网，分布在亚太、欧洲与北美的19个国家和地区。在亚洲，大华银行通过新加坡总行和在中国、印度尼西亚、马来西亚、泰国及越南的附属银行以及各地分行和办事处，开展广泛的金融业务。如今大华银行获评为世界顶尖银行之一：穆迪投资者服务给“Aa1”评级，标普全球评级和惠誉分别给予“AA-”评级。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡大华银行开户优势
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
                        <div class="condition-item">公司营业执照</div>
                        <div class="condition-item">公司董事/股东在职证书（不超过6个月）</div>
                        <div class="condition-item">所有董事/股东/银行账户控制人有效护照</div>
                        <div class="condition-item">所有董事/股东/控制人地址证明（如水电单）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">公司章程</div>
                        <div class="condition-item">详细公司业务介绍</div>
                        <div class="condition-item">公司在新加坡开户的原因</div>
                        <div class="condition-item">提最大5家供应商公司名称及办公室地址等</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡大华银行开户流程
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
                    新加坡大华银行常见问题
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
import '@/css/bank_company/sg/uob/Uob_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料整理与提交',
        description: '整理全套开户所需资料，并提交至代理专员'
    },
    {
        iconId: '#icon-accept-email', 
        title: '初步审核',
        description: '递交银行后，等待大华团队核查并审核通过'
    },
    {
        iconId: '#icon-communication', 
        title: '预约视频',
        description: '审核通过后，预约具体时间进行线上视频面签'
    },
    {
        iconId: '#icon-city', 
        title: '视频后下户',
        description: '视频面签完成后，等待银行下发通知及密码'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-bank-transfer', 
        title: '多币种账户',
        description: '支持多币种兑换及国际结算业务'
    },
    {
        iconId: '#icon-shield', 
        title: '非常安全',
        description: '顶级信贷评级保障资金绝对安全'
    },
    {
        iconId: '#icon-finance', 
        title: '高息定存',
        description: '定存息差非常丰厚，理财回报率高'
    },
    {
        iconId: '#icon-transaction', 
        title: '多元投资',
        description: '拥有丰富的投资产品满足增值需求'
    }
]

const faqs = ref([
    {
        question: "新加坡大华银行面签时注意哪些事项？",
        answer: "1、准时赴约，与银行经理沟通随和自然，切忌表现出犹豫、隐瞒。\n2、银行可能会问及的问题：公司营业性质是什么？、主要从事什么行业？、阐述主要贸易国家？、预计年营业额收入？\n3、阐述为什么要在香港（或新加坡）注册公司。"
    },
    {
        question: "新加坡大华银行开户要多久时间？",
        answer: "4-5周"
    },
    {
        question: "新加坡大华银行可以远程开户吗？",
        answer: "可以的"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_uob_content2 .content1',
        '.sg_uob_content2 .content2',
        '.sg_uob_content2 .content3',
        '.sg_uob_content2 .content4',
        '.content_bank',
        '.sg_uob_content2 .content6'
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
