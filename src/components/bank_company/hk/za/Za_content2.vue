<template>
    <div class="za_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港众安银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/ZA.png" alt="香港众安银行">
                    <div class="text">
                        <P>香港众安银行ZA BANK由众安国际（中国互联网保险科技公司众安保险于2017年12月在香港成立众安国际）创立，于2019年3月27日获香港金融管理局颁发牌照，众安银行目前是香港第一的全数字化银行，主要通过线上渠道来提供银行服务，众安银行是香港存款保障计划成员，合资格存款受计划保障，最高保障额为每名存款人50万港币。监管制度执行与传统银行一样的全套监管标准，达到国际银行治理标准。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港众安银行开户优势
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
                        <div class="condition-item">董事材料（大陆地区）：提供本人身份证正反面及其手持身份证照片</div>
                        <div class="condition-item">董事材料（其他地区）：提供本人护照及手持护照照片（非大陆/港澳台需提供签证与常住地址证明）</div>
                        <div class="condition-item">公司注册材料：提供商业登记证、公司注册证书、法团成立表格（或周年申报表）与董事决议书</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">个人股东材料（股份≥25%）：大陆地区提供身份证及手持照；其他地区提供护照及手持照</div>
                        <div class="condition-item">企业股东材料（大陆企业）：企业股东若为大陆企业，企业需提供其有效的营业执照</div>
                        <div class="condition-item">企业股东材料（香港企业）：企业股东若为香港企业，提供其商业登记证书、公司注册证书等全套文件</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港众安银行开户流程
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
                    香港众安银行常见问题
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
import '@/css/bank_company/hk/za/Za_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '提交开户资料',
        description: '准备并提交完整的香港公司开户信息材料'
    },
    {
        iconId: '#icon-communication', 
        title: '资料审核',
        description: '等待银行进行公司资质与材料的详细审批过程'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '开户成功',
        description: '审核通过，顺利完成开户激活您的众安账户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-airplane', 
        title: '极速线上开户',
        description: '最快一个工作日就能成功开户，全程网上递交便捷办妥'
    },
    {
        iconId: '#icon-good-two', 
        title: '全力支持初创',
        description: '即使企业开业未满 1 年也能申请开户，行动支持全速发展'
    },
    {
        iconId: '#icon-world', 
        title: 'Web3 的首选银行',
        description: '以此简化且快速的开户方式，为Web3相关业务抢占先机'
    }
]

const faqs = ref([
    {
        question: "香港众安银行开户相关费用有哪些？",
        answer: `查册费：300-1000HKD\n\n开户费：1200-10000HKD\n\n汇入电汇-50HKD/笔，汇出电汇-100HKD/笔\n\n汇出转数快：\nBelow HKD 1,000,000 以下， HKD 1\nHKD 1,000,000 或以上， HKD 10\nBelow CNY 1,000,000 以下， CNY 1\nCNY 1,000,000 或以上， CNY 10\n\n汇入转数快：交易金额的0.6％`
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.za_content2 .content1',
        '.za_content2 .content2',
        '.za_content2 .content3',
        '.za_content2 .content4',
        '.content_bank',
        '.za_content2 .content6'
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
