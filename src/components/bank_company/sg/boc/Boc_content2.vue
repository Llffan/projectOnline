<template>
    <div class="sg_boc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡中国银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/sg/中国银行.png" alt="新加坡中国银行">
                    <div class="text">
                        <P>中国银行新加坡分行成立于 1936 年，是新加坡历史最悠久的中资银行之一，持有新加坡金融管理局颁发的特准全面银行执照（QFB）。作为中行在东南亚的枢纽，分行不仅是新交所（SGX）人民币期货主要做市商，还承担大宗商品融资、亚洲债券承分销中心等战略职能，业务辐射全球市场。2025 年携手中国石化成功落地斯里兰卡跨境银企直连项目，标志着中资银行在南亚地区资金管理领域的重大突破。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡中国银行开户优势
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
                        <div class="condition-item">新加坡公司全套注册文件（注册证书及章程等）</div>
                        <div class="condition-item">公司Bizfile详尽商业档案登记记录</div>
                        <div class="condition-item">全体董事及股东身份证明（身份证、护照的正反面）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">董事及股东个人近 6 个月稳定清晰的银行流水账单</div>
                        <div class="condition-item">提供各董事联络电话及邮箱、确认币合并签署开户原件</div>
                        <div class="condition-item">国内或关联方的对应业务采购与销售合同（含意向合同）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡中国银行开户流程
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
                    新加坡中国银行常见问题
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
import '@/css/bank_company/sg/boc/Boc_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '整理预审',
        description: '客户整理并提供企业与董事身份等证件业务单据，供代理与银行初审'
    },
    {
        iconId: '#icon-audit', 
        title: '填签开户',
        description: '审核确认无误后，安排 2 位董事签署相关的银行开户表格及开通币种'
    },
    {
        iconId: '#icon-communication', 
        title: '邮递面试',
        description: '需邮寄签字表格原件到新加坡总部，并按要求预约进行线上的远程视频面签'
    },
    {
        iconId: '#icon-accept-email', 
        title: '完结下户',
        description: '全流程概需 3-4 周时间，各项审核完毕后银行即发放下户通知与网银信息'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: '人民币结算枢纽',
        description: '连续稳居新加坡离岸人民币清算量首位，支持中银双币借记卡快速切换及免提手续'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: '全链条产品体系',
        description: '覆盖跨境电汇、信用证以及结构性衍生品，提供贸易融资与率避险的一站式服务'
    },
    {
        iconId: '#icon-shield', 
        title: '银企直连合规控制',
        description: '自主研发跨境银企直连技术，支持实时获取境外子公司账户数据与跨境合规调拨'
    },
    {
        iconId: '#icon-world', 
        title: '多币种清算网络',
        description: '账户支持美元、欧元、日元等 15 种主要货币并借助 SWIFT GPI 实现汇款T+0到账'
    }
]

const faqs = ref([
    {
        question: "新加坡中国银行需要现场见证吗？",
        answer: "不需要。支持视频面签开户。详细可以咨询我司相关负责人指导面签注意事项。"
    },
    {
        question: "新加坡中国银行没有关联公司可以开吗？",
        answer: "可以的。若没有关联公司我们也支持提供相应的包装解决方案及代办规划设计，具体开户流程，可以咨询我司相关负责人。"
    },
    {
        question: "新加坡中国银行开户时间多久?",
        answer: "通常开户时间为 3-4 周左右。具体进度也依据董事资料完备情况与银行审核力度可能发生一定波幅，可咨询我司相关负责人协助追踪。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_boc_content2 .content1',
        '.sg_boc_content2 .content2',
        '.sg_boc_content2 .content3',
        '.sg_boc_content2 .content4',
        '.content_bank',
        '.sg_boc_content2 .content6'
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
