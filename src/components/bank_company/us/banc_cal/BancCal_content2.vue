<template>
    <div class="banc_cal_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国加州银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/us/加州银行.png" alt="美国加州银行">
                    <div class="text">
                        <P>Bank of California, Inc.根据马里兰州法律于2002年3月注册成立，容纳了所有太平洋信托银行的股票。它的资产主要包括银行发行在外的股票、现金和固定收益投资。该银行的主要业务包括吸收来自公众和主要由业主自用零售存款，一到四户住宅，各种消费贷款，多户家庭和商业第一按揭抵押贷款投资这些基金的地产和商业企业贷款。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国加州银行开户优势
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
                        <div class="condition-item">公司资料</div>
                        <div class="condition-item">护照身份证</div>
                        <div class="condition-item">税号</div>
                        <div class="condition-item">电话邮箱</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">美国电话</div>
                        <div class="condition-item">大陆信用卡正反面</div>
                        <div class="condition-item">kyc表格</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国加州银行开户流程
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
                    美国加州银行常见问题
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
import '@/css/bank_company/us/banc_cal/BancCal_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process (6 items)
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '第一步',
        description: '收到咨询，客户填写调查表并提交银行'
    },
    {
        iconId: '#icon-email-push', 
        title: '第二步',
        description: '银行审核并通知账户获得附条件批准'
    },
    {
        iconId: '#icon-upload-one', 
        title: '第三步',
        description: '发送材料列表，客户寄送文件材料给银行'
    },
    {
        iconId: '#icon-notes', 
        title: '第四步',
        description: '准备账户申请表格并发送给客户签名'
    },
    {
        iconId: '#icon-audit', 
        title: '第五步',
        description: '提交填好的表格，供银行处理并开设账户'
    },
    {
        iconId: '#icon-key-one', 
        title: '第六步',
        description: '银行下发借记卡和网银令牌到客户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-world', 
        title: '多地公司',
        description: '可接美国公司，香港公司等多地企业主体。'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: '免除费用',
        description: '可免管理费，免查册费，大幅度节省开支。'
    },
    {
        iconId: '#icon-transaction', 
        title: '支持Zelle',
        description: '支持通过zelle及实体支票便捷入账与周转。'
    },
    {
        iconId: '#icon-finance', 
        title: '实体银行卡',
        description: '个人账户与公司账户均可下发实体银行卡。'
    }
]

const faqs = ref([
    {
        question: "美国银行开户成功后，是不是开其他国家银行账户会简单一些？",
        answer: "是的，通常在美国银行开户成功后，再开其他国家银行账户通过率会高一些，并且时间也会快一些，如果之前没有海外银行开户，可以先选择容易开户的银行。"
    },
    {
        question: "美国加州银行开户要多久时间？",
        answer: "6-8周"
    },
    {
        question: "美国加州银行开户成功后有实体银行卡吗？",
        answer: "有实体银行卡"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.banc_cal_content2 .content1',
        '.banc_cal_content2 .content2',
        '.banc_cal_content2 .content3',
        '.banc_cal_content2 .content4',
        '.content_bank',
        '.banc_cal_content2 .content6'
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
