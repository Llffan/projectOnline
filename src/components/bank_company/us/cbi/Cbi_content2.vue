<template>
    <div class="cbi_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国富港银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/public.png" alt="美国富港银行">
                    <div class="text">
                        <P>富港银行（CB International Bank，简称CBiBank） ，是一家持有美国银行牌照的美国商业银行 于2017年6月成立 ，并于2018年正式获批银行牌照，总部位于美国波多黎各 ，是美联储(ABA)、环球银行金融电信协会(SWIFT)、银联国际(UNIONPAY)、跨境人民币清算(CIPS)等多家机构成员。富港银行是受美国银行监督机构监管的商业银行（SWIFT代码：CBLBPRSJ）。致力于通过方便快捷的在线银行服务，为出海中小企业和个人提供多种定制化国际金融解决方案。</P>
                        <div class="sub">企业开户</div>
                        <P>企业开设境外银行账户，其核心原因就在于企业可通过境外银行实现自由调拨资金、不受外汇管制、资金利用最大化、比境内外银行同类存款利率优惠、存取灵活，特别是大额款等优势。以及有效优化税务结构的目的，给予海外业务拓展更大支持。</P>
                        <div class="sub">个人开户</div>
                        <P>个人开设境外账户可以便于在海外进行购物、留学、置业，房地产，境外投资、海外移民等项目，可进行全球财富管理等活动。境外运作境内操控的模式也能够加快境内外资金运转，提高资金使用效率。</P>
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
                    开户所需资料清单
                </div>
                <div class="intro">
                    <div class="item-list">
                        <div class="list-title">企业开户所需资料</div>
                        <div class="condition-item">香港公司：CI注册证书， BR商业登记证，MA章程（英文版），NNC1法团成立表或NAR1周年申报表（不满一年无需提供）。</div>
                        <div class="condition-item">岛国/其他公司：注册证书、章程、董事在职证明、良好声誉证明（注册不满一年无需提供）。</div>
                        <div class="condition-item">持股超过25%的所有股东均需提供个人身份资料（身份证+护照/驾驶证/通行证）。</div>
                    </div>
                    <div class="center"></div>
                    <div class="item-list">
                        <div class="list-title">个人开户所需资料</div>
                        <div class="condition-item">个人有效身份证件。</div>
                        <div class="condition-item">个人近期住址证明文件。</div>
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

            <div class="content-extra">
                <div class="title">
                    美国富港银行其他开户需了解的
                </div>
                <div class="intro">
                    <div class="highlight">CBiBank银联个人实体借记卡重磅上线！</div>
                    <p>CBiBank与中国银联合作推出的实体借记卡现已发售。CBiBank美元借记卡在全球凡带有银联标志的渠道均可使用。支持线下消费、网上支付、转账汇款、ATM 取现，可满足您的多种跨境消费与提现需求。</p>
                </div>
            </div>

            <!-- 5. 我们的优势 -->
            <ChooseUs />

            <!-- 合作银行 -->
            <HK_Cooperative_Bank class="content_bank" />

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
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: '递交资料',
        description: '准备并递交开户所需的全套初审材料'
    },
    {
        iconId: '#icon-audit', 
        title: '银行初审',
        description: '交由富港银行经理初审（约1-2天时间）'
    },
    {
        iconId: '#icon-video-camera', 
        title: '视频面签与电核',
        description: '安排视频面签及电话核实步骤（约1天时间）'
    },
    {
        iconId: '#icon-pass', 
        title: '银行终审',
        description: '最终审批确认账户资质（约1-2天时间）'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: '下户缴费激活',
        description: '账户成功下发，完成缴费后激活账户'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Ukey发货',
        description: '网银Ukey发出及收件绑定（约1-2天时间）'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-exchange-cny-line', 
        title: '费用低',
        description: '手续费低，可实现境外薪资低成本回国。'
    },
    {
        iconId: '#icon-notes', 
        title: '一次报备长效使用',
        description: '报备收款与资金信息后即可在有效期内合规使用速汇功能。'
    },
    {
        iconId: '#icon-upload-two', 
        title: '结汇额度高',
        description: '专享每年最高50万人民币的薪金兑换与汇入额度。'
    },
    {
        iconId: '#icon-airplane', 
        title: '快速到账无汇损',
        description: '办理成功极速到账，接入银联实时汇率转化无汇损。'
    },
    {
        iconId: '#icon-bank-card', 
        title: '配发实体银联卡',
        description: '可下发银联个人实体借记卡，支持线下消费与取现。'
    }
]

const faqs = ref([
    {
        question: "CBI银行开户难吗？",
        answer: `不难。不限新老公司，不限行业类型，无需提供关联公司资料，无需提供业务合同，无需存款理财。`
    },
    {
        question: "CBI支持哪些币种？",
        answer: `支持主流的外汇结算，包含美元、欧元和离岸人民币。`
    },
    {
        question: "CBI转回国内银行是否有限额？",
        answer: `有，转回国内最低金额为100美金，最高为2999美金，单日累计小于1万美金。例如：若需转5000美金回国内银行，则需要分2次汇转。`
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
        '.cbi_content2 .content-extra',
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
