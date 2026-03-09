<template>
    <div class="mercury_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国水星银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/水星银行.png" alt="美国水星银行">
                    <div class="text">
                        <p>美国水星银行mercury是一家数字银行公司，总部位于美国加州旧金山，提供专为初创企业涉及的银行服务和银行账户。优点有很多，注册成本0，WIRE/ACH转账都是0手续费，没有最低金额限制，开户难度小，只是目前mercury仅支持公司账户的开设，不支持个人账户。然而对于我们人在国内做跨境的外贸人，mercury仍然是开设美金账户的首选之一。</p>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国水星银行开户优势
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
                        <div class="condition-item">公司地址</div>
                        <div class="condition-item">邮箱</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">整套公司资料</div>
                        <div class="condition-item">EIN税号</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国水星银行开户流程
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
                    美国水星银行常见问题
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
import '@/css/bank_company/us/mercury/Mercury_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process (2 items)
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '第一步',
        description: '客户提交相关资料和 KYC表格申请注册，等待银行审核'
    },
    {
        iconId: '#icon-audit', 
        title: '第二步',
        description: '资料完整审核需 3个工作日，如需补充资料7个工作日'
    }
]

// Bank Advantages (8 items)
const advantage = [
    {
        iconId: '#icon-finance', 
        title: '月费减免',
        description: '每月支付 0 美元，WIRE与ACH转账均为0手续费'
    },
    {
        iconId: '#icon-shield', 
        title: 'FDIC保险',
        description: '受美国FDIC保险政策保护的合规银行账户'
    },
    {
        iconId: '#icon-upload-one', 
        title: '远程极简',
        description: '无强制SSN或ITIN税号要求，远程实名免签证即可开除'
    },
    {
        iconId: '#icon-protect', 
        title: '隐私安全',
        description: '美国非CRS国家，不用担心账户财务信息被交换回国内'
    },
    {
        iconId: '#icon-phone-telephone', 
        title: '卡片管家',
        description: '可下发实体卡及随时创建虚拟卡，App随时管理额度'
    },
    {
        iconId: '#icon-world', 
        title: '全球付款',
        description: '连接到任何支付处理器，在全球范围内发送并接收付款'
    },
    {
        iconId: '#icon-secure-payment-line', 
        title: '超级接口',
        description: '拥有超级自动化的金融API接口，对接第三方极度平滑'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: '范围宽泛',
        description: '对行业限制极少，大部分正规行业以及初创公司皆可开户'
    }
]

const faqs = ref([
    {
        question: "美国水星银行开设账户有最低余额限制吗？",
        answer: "没有最低要求，看个人需求存款"
    },
    {
        question: "美国水星银行接受支票 Checks 吗？",
        answer: "可以。目前支持海外电汇，美国境内 ACH 转入以及支票。\n\n当然，同样可以反向操作，也就是向别人开出支票。"
    },
    {
        question: "塞浦路斯的护照，或者瓦努阿图的护照，可以在水星银行开户吗？",
        answer: "可以。\n\n除了伊朗、伊拉克、朝鲜等个别的被制裁的国家，包括像圣基茨和尼维斯、多米尼克、安提瓜、圣卢西亚、格林纳达的加勒比护照，以及这里提到的塞浦路斯、瓦努阿图、土耳其的护照，均可以顺利开户"
    },
    {
        question: "美国水星银行支持 Stripe 或者 Paypal 吗？",
        answer: "支持。\n\n并且对这类第三方的平台支持的非常好，Mercury 通过 Plaid 来接入各大金融机构，效率高的出奇。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mercury_content2 .content1',
        '.mercury_content2 .content2',
        '.mercury_content2 .content3',
        '.mercury_content2 .content4',
        '.content_bank',
        '.mercury_content2 .content6'
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
