<template>
    <div class="jpm_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国摩根大通银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/摩根大通银行.png" alt="美国摩根大通银行">
                    <div class="text">
                        <P>业界称西摩或小摩，总部位于美国纽约，总资产2.5万亿美元，总存款1.5万亿美元，占美国存款总额的25%，分行6000多家，是美国最大金融服务机构之一。摩根大通于2000年由大通曼哈顿银行及J.P.摩根公司合并而成，并分别收购芝加哥第一银行和贝尔斯登银行和华盛顿互惠银行。摩根大通是一间跨国金融服务机构及美国最大的银行之一，业务遍及60多个国家，包括投资银行，金融交易处理，投资管理，商业金融服务，个人银行业务等。企业开设境外银行账户可通过境外银行实现自由调拨资金、不受外汇管制、资金利用最大化、比境内同类存款利率优惠、存取灵活及优化税务结构等目的，给予海外拓展更大支持。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国摩根大通银行开户优势
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
                        <div class="condition-item">注册证书（Articles）</div>
                        <div class="condition-item">联邦税号（EIN）</div>
                        <div class="condition-item">章程（Bylaw）</div>
                        <div class="condition-item">填写KYC评估表</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">董事身份证和护照扫描件（彩色）</div>
                        <div class="condition-item">手持护照照片</div>
                        <div class="condition-item">国内电话、美国电话号码（无需通话仅用于留档）、邮箱地址</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国摩根大通银行开户流程
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
                    美国摩根大通银行常见问题
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
import '@/css/bank_company/us/jpm/Jpm_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: '第一步',
        description: '提交资料及预审：准备注册证书等资料提交至银行审核。'
    },
    {
        iconId: '#icon-phone-call', 
        title: '第二步',
        description: '视频签字：与银行通过视频进行电子签字完成面签。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '第三步',
        description: '寄出文件：将签字完成的基础材料扫描件发银行。'
    },
    {
        iconId: '#icon-finance', 
        title: '第四步',
        description: '下户激活：账户开立后存入激活资金以激活并使用网银。'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-shield', 
        title: '实力背景',
        description: '总部位于美国纽约，总资产达2.5万亿美元，是美国最大金融服务机构之一。'
    },
    {
        iconId: '#icon-world', 
        title: '转账极速',
        description: '转账极速，无限额并且实现秒到账的便捷转账体验。'
    },
    {
        iconId: '#icon-phone-call', 
        title: '远程开户',
        description: '远程视频方式进行银行账户开设，避免舟车劳顿无需亲临现场。'
    },
    {
        iconId: '#icon-audit', 
        title: '合法合规',
        description: '开立全程合法合规，资料要求简单，目前仅接受真实的合规客户。'
    }
]

const faqs = ref([
    {
        question: "美国摩根大通银行公司账户电汇费用是?",
        answer: "汇入免费，汇出 40USD 一笔，跟新加坡以及瑞士银行的收费标准持平。另外，如果账户日均余额低于 1,500USD，会收取 30USD 的管理费"
    },
    {
        question: "美国摩根大通银行开户要多久时间？",
        answer: "6-8周"
    },
    {
        question: "美国摩根大通银行最适合哪些人开？",
        answer: "1、 海外资产配置；\n2、 留学、移民、旅游等备用金；\n3、 跨境电商企业／个人；\n4、 不方便／没时间去美国的人士。"
    },
    {
        question: "美国摩根大通银行开户其他需了解的事项有哪些？",
        answer: "1. 我司可提供用于开户的美国地址用作于接收银行卡，若需继续接收信件，需要额外租赁地址；\n2. 在开户成功后的2周内需存款10万美金以激活账户；\n3. 美国电话需要客户提供，仅用于留档无需通话。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.jpm_content2 .content1',
        '.jpm_content2 .content2',
        '.jpm_content2 .content3',
        '.jpm_content2 .content4',
        '.content_bank',
        '.jpm_content2 .content6'
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
