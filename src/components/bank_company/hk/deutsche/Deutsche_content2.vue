<template>
    <div class="deutsche_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    德意志银行（香港分行）简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/Deutsche.png" alt="德意志银行（香港分行）">
                    <div class="text">
                        <P>德意志银行于1870年在德国柏林成立，是全球首屈一指的国际性金融服务机构，为全球70多个国家和地区的企业、政府、机构投资者、中小企业及个人提供商业银行、投资银行、零售银行、交易银行和资产与财富管理等领域的产品及服务。德意志银行最早于1872年进入中国，在上海设立其第一家海外办事处，德银中国是德意志银行的全资子公司，总部设在北京，并在北京、上海、广州、天津、重庆和青岛设有分行。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    德意志银行（香港分行）开户优势
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
                    <div class="condition-item">身份证明材料：董事及股东的个人身份有效证件</div>
                    <div class="condition-item">公司注册资料：香港公司全套基础注册文件</div>
                    <div class="condition-item">业务证明材料：两份意向业务往来合同</div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    德意志银行（香港分行）开户流程
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
                    德意志银行（香港分行）常见问题
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
import '@/css/bank_company/hk/deutsche/Deutsche_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料预审',
        description: '提交材料预审，开户周期预审时间2周内回复'
    },
    {
        iconId: '#icon-city', 
        title: '初审核签',
        description: '初审通过后，客户亲自签署开户相关表格'
    },
    {
        iconId: '#icon-communication', 
        title: '安排视频',
        description: '银行收到完整文件表格后，安排视频面签'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '审批下户',
        description: '视频面签通过后，预计3-4周期限下发账户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: '资金调拨自由',
        description: '资金调拨自由，无外汇管制限制，且免征存款利息税'
    },
    {
        iconId: '#icon-good-two', 
        title: '多账户优势运用',
        description: '离岸与境内账户协调运用，提高综合运营效率与效益'
    },
    {
        iconId: '#icon-airplane', 
        title: '资金流转快捷',
        description: '款项汇划能实时到账，资金零在途，且手续费极其低廉'
    },
    {
        iconId: '#icon-protect', 
        title: '操作办理简便',
        description: '在内地即可管理境内外资金汇划，存款利率及品种不受限制'
    }
]

const faqs = ref([
    {
        question: "德意志银行开户时间要多久？",
        answer: "6-8周"
    },
    {
        question: "德意志银行账户的额度是多少？",
        answer: "无限额"
    },
    {
        question: "德意志银行开户要现场面签吗？",
        answer: "可视频面签"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.deutsche_content2 .content1',
        '.deutsche_content2 .content2',
        '.deutsche_content2 .content3',
        '.deutsche_content2 .content4',
        '.content_bank',
        '.deutsche_content2 .content6'
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
