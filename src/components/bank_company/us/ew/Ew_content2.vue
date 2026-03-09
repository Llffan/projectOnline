<template>
    <div class="ew_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国华美银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/华美银行.png" alt="美国华美银行">
                    <div class="text">
                        <P>华美银行（East West Bank) 是一座横跨东西方的金融桥梁。于1973年在美国加州洛杉矶注册成立，为全美第一家在联邦立案的储贷会，其后于1999年在纳斯达克交易（股票代号EWBC）。华美银行连年入选“福布斯全美百强银行榜”前15名，是总部位于南加州的最大的独立商业银行。致力于协助中美两地客户发掘商机，迈向成功，独特的跨境金融网络，帮助无数华资企业到美国开展业务。企业开户可实现自由调拨资金、不受外汇管制、存取灵活与优化税务结构的目的，给予海外业务拓展更大支持；个人开设境外账户则便于在海外进行购物、留学、置业、境外投资、海外移民等，可进行全球财富管理，提高资金使用效率。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国华美银行开户优势
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
                        <div class="condition-item">香港公司CR、BR、NNCI公司英文章程，周年申报表</div>
                        <div class="condition-item">香港新公司也可以开户</div>
                        <div class="condition-item">如果国内有关联公司，提供国内营业执照</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">香港公司购销合同提供一套</div>
                        <div class="condition-item">董事和股东的身份证、护照</div>
                        <div class="condition-item">银行KYC表格（我们提供给客户填写）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国华美银行开户流程
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
            <US_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    美国华美银行常见问题
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
import '@/css/bank_company/us/ew/Ew_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: '第一步',
        description: '提交资料，审批后一周左右视频，面签后当天寄出签字文件'
    },
    {
        iconId: '#icon-audit', 
        title: '第二步',
        description: '美国收到文件后1-2个工作日下发账号，账户可存入激活金11500美元'
    },
    {
        iconId: '#icon-finance', 
        title: '第三步',
        description: '激活款存入后，5-7个工作日左右下发网银用户名和密码开始使用'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-shield', 
        title: '历史悠久 实力雄厚',
        description: '华美银行历史悠久，系统成熟完善，业务遍布中美。'
    },
    {
        iconId: '#icon-communication', 
        title: '全中文客户服务',
        description: '银行有专门的中文客户团队和中文友好服务，打破语言障碍。'
    },
    {
        iconId: '#icon-phone-call', 
        title: '在线便捷开户',
        description: '在线开户避免舟车劳顿和不可控因素，方便快捷。'
    },
    {
        iconId: '#icon-finance', 
        title: '资金自由便捷',
        description: '境外银行账户不受外汇管制，国际转账自由便捷。'
    }
]

const faqs = ref([
    {
        question: "华美向外转账有额度限制么?转账手续费是多少?",
        answer: "向外转账没有额度限制，转账手续费遵循国际汇款20-40美金不等。具体的要看收款行及中转行各自的费用，中转行越多，费用越高。"
    },
    {
        question: "美国华美银行开户要多久时间？",
        answer: "3-4周"
    },
    {
        question: "美国华美银行账户是否有限额？",
        answer: "无论是美国华美银行个人账户或是公司账户，在资金合法的情况下也是没有金额限制的。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.ew_content2 .content1',
        '.ew_content2 .content2',
        '.ew_content2 .content3',
        '.ew_content2 .content4',
        '.content_bank',
        '.ew_content2 .content6'
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
