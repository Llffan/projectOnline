<template>
    <div class="eastwest_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港华美银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/eastwest.jpg" alt="香港华美银行">
                    <div class="text">
                        <P>香港华美银行华美银行香港分行属于由金管局发出经营牌照的持牌银行，可为香港地区、中国内地和世界其他主要市场的客户提供全方位的银行服务，包括商业银行、银行交收、外汇交易、财富管理与金融证券投资服务。 以下是华美银行香港分行提供的银行服务。华美银行，这家总部位于南加州的商业银行，以其华裔市场的独特定位，已成为全美规模最大的华裔商业银行之一。其分支机构遍布美国和亚洲，总数超过120个，充分展现了其业务的广泛覆盖和深度渗透。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港华美银行开户优势
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
                        <div class="condition-item">香港公司CR、BR、NNC1、NAR1、章程</div>
                        <div class="condition-item">董事股东的身份证、(护照)</div>
                        <div class="condition-item">香港公司销售和采购合同各1份</div>
                        <div class="condition-item">开户调查KYC</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国内关联公司执照（有一定要提供）</div>
                        <div class="condition-item">近三个月个人流水</div>
                        <div class="condition-item">个人简历</div>
                        <div class="condition-item">公司实际经营地址在百度/Gooole地图上的截屏 (以说明这个地址是公司实际运营的商用地址)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港华美银行开户流程
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
                    香港华美银行常见问题
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
import '@/css/bank_company/hk/eastwest/EastWest_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料预审',
        description: '先将所需开户文件电子版给我们审核后安排银行经理初审'
    },
    {
        iconId: '#icon-communication', 
        title: '面签预约',
        description: '初审通过后，预约办理过港面签'
    },
    {
        iconId: '#icon-city', 
        title: '开户面签',
        description: '客户到预约分行开户面签'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '完成手续',
        description: '完成开户手续'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-exchange-cny-line', 
        title: '开户简捷高效',
        description: '开户资料简洁，流程短而迅速，办理效率一流。'
    },
    {
        iconId: '#icon-notes', 
        title: '开户门槛轻松',
        description: '开户门槛轻松跨越，无需繁琐的大额存款理财要求。'
    },
    {
        iconId: '#icon-world', 
        title: '多元架构兼容',
        description: '完美兼容香港、美国、开曼及BVI等各类多元化公司架构。'
    },
    {
        iconId: '#icon-transaction', 
        title: '转账操作自由',
        description: '转账操作自由无拘束，全球收汇流程均畅通无阻。'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '功能齐备便捷',
        description: '网银结算与国际转账功能齐备，助您轻松畅通驾驭全球金融。'
    },
    {
        iconId: '#icon-protect', 
        title: '支持平台提现',
        description: '支持绑定Amazon等平台提现，全面满足贸易电商及特殊行业的收单需求。'
    },
    {
        iconId: '#icon-good-two', 
        title: '专属华人服务',
        description: '专属华人定位，配备专业中文客服团队，保障沟通畅通享受宾至如归。'
    }
]

const faqs = ref([
    {
        question: "香港华美银行收费情况是怎样的？",
        answer: `香港公司开户查册费：10,000 HKD\n非香港本地注册公司查册费：5,000 USD\n(前置收费，开户不成功可申请返还)\n\n条件:\n1. 至少满足 50w 美金存款\n2. 网银无转账限额：转出转入约 30-40 美金/笔\n注：大陆北京，上海也可见证`
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.eastwest_content2 .content1',
        '.eastwest_content2 .content2',
        '.eastwest_content2 .content3',
        '.eastwest_content2 .content4',
        '.content_bank',
        '.eastwest_content2 .content6'
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
