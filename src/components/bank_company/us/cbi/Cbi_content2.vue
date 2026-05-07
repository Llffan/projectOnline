<template>
    <div class="cbi_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国富港银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/us/富港银行.png" alt="美国富港银行">
                    <div class="text">
                        <P>富港银行（CB International Bank，简称CBiBank）成立于2017年6月，是一家持有美国商业银行牌照受美国银行监督机构监管的商业银行，总部位于美国波多黎各。作为美联储(ABA)、SWIFT网络(代码：CBLBPRSJ)、银联国际(UNIONPAY)及跨境人民币清算(CIPS)等多家机构成员，富港银行业务涵盖企业与个人开户。企业开户可享自由调拨资金、不受外汇管制、存取灵活与优化税务等优势，给予出海业务更大支持；个人开户则便于海外购物、置业、投资、移民及全球财富管理，提升境内外资金运转效率，致力于为客户提供便捷的定制化国际金融解决方案。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国富港银行开户优势
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
                        <div class="list-title">香港公司</div>
                        <div class="condition-item">CI注册证书，BR商业登记证</div>
                        <div class="condition-item">MA章程（英文版）</div>
                        <div class="condition-item">NNC1法团成立表</div>
                        <div class="condition-item">NAR1周年申报表（不满一年无需提供）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="list-title">岛国公司/其他</div>
                        <div class="condition-item">注册证书、章程</div>
                        <div class="condition-item">董事在职证明、良好声誉证明（注册不满一年无需提供）</div>
                        <div class="condition-item">持股超过25%的股东需提供：身份证+护照（或驾驶证/通行证）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国富港银行开户流程
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
                    美国富港银行常见问题
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
import '@/css/bank_company/us/cbi/Cbi_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: '第一步',
        description: '递交资料'
    },
    {
        iconId: '#icon-audit', 
        title: '第二步',
        description: '银行初审（1-2天）'
    },
    {
        iconId: '#icon-phone-call', 
        title: '第三步',
        description: '视频面签+电核（1天）'
    },
    {
        iconId: '#icon-shield', 
        title: '第四步',
        description: '银行终审（1-2天）'
    },
    {
        iconId: '#icon-finance', 
        title: '第五步',
        description: '下户缴费激活'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '第六步',
        description: 'Ukey发出（1-2天）'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: '费用低',
        description: '手续费低，境外薪资低成本回国'
    },
    {
        iconId: '#icon-notes', 
        title: '一次报备',
        description: '长期使用，需要提供报备资料，包括收款人基本信息、银行账户、资金证明文件，报备成功后可以在有效期内使用速汇功能'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: '额度高',
        description: '每年50万人民币薪酬额度'
    },
    {
        iconId: '#icon-world', 
        title: '到账快',
        description: '办理成功极速到账。无汇损，接入中国银联实时汇率，轻松汇转无汇损'
    }
]

const faqs = ref([
    {
        question: "CBI银行开户难吗？",
        answer: "不难。不限新老公司，不限行业类型，无需提供关联公司资料，无需提供业务合同，无需存款理财。"
    },
    {
        question: "CBI支持哪些币种？",
        answer: "美元、欧元和离岸人民币"
    },
    {
        question: "CBI转回国内银行是否有限额？",
        answer: "有，转回国内最低金额为100美金，最高为2999美金，单日累计小于1万美金。例如：转5000美金回国内银行，需分2次转。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.cbi_content2 .content1',
        '.cbi_content2 .content2',
        '.cbi_content2 .content3',
        '.cbi_content2 .content4',
        '.content_bank',
        '.cbi_content2 .content6'
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
