<template>
    <div class="cathay_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国国泰银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/us/国泰银行.png" alt="美国国泰银行">
                    <div class="text">
                        <P>成立于1962年的国泰银行，是南加州地区第一家华商开办的银行，主要为大洛杉矶地区日渐成长的华裔及亚裔社区提供金融服务。历经多年发展，现已成长为总资产25亿美元的区域性银行集团，在美国拥有23家分行，在香港、上海设有办事处，并在1990年于纳斯达克挂牌上市（NASDAQ: CATY）。企业开设境外账户可通过国泰银行实现资金自由调拨、不受外汇管制及享受灵活存取，更好地支持海外业务的拓展。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国国泰银行开户优势
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
                        <div class="condition-item">美国公司注册文件</div>
                        <div class="condition-item">公司董事及股东身份证及护照清晰扫描件</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国泰银行开户KYC表格</div>
                        <div class="condition-item">采购及销售合同一套</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国国泰银行开户流程
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
                    美国国泰银行常见问题
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
import '@/css/bank_company/us/cathay/Cathay_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: '第一步',
        description: '资料齐全先账户开好，邮件发给客户'
    },
    {
        iconId: '#icon-audit', 
        title: '第二步',
        description: '客户将收到的银行资料全部手签，再寄回美国国泰银行'
    },
    {
        iconId: '#icon-finance', 
        title: '第三步',
        description: '银行收到资料后一周左右发放下网银登陆名以及初始密码'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-shield', 
        title: '资金更安全',
        description: '美国金融环境发达，银行体系健全，资金更安全无出入限制。'
    },
    {
        iconId: '#icon-phone-call', 
        title: '远程开户',
        description: '足不出国，即可在部分情况下支持视频办理和远程文件签收开户。'
    },
    {
        iconId: '#icon-world', 
        title: '全球认可高',
        description: '美国账户全球认可度高，跨境转账顺畅，查核阻碍概率较低。'
    },
    {
        iconId: '#icon-transaction', 
        title: '到账便捷',
        description: '方便接收美国当地及北美客户资金汇入，且手续费极低甚至为零。'
    }
]

const faqs = ref([
    {
        question: "美国国泰银行接受支票 Checks 吗？",
        answer: "可以。目前支持海外电汇，美国境内 ACH 转入以及支票。当然，同样可以反向操作，也就是向别人开出支票。"
    },
    {
        question: "美国国泰银行开户要多久时间？",
        answer: "6-8周"
    },
    {
        question: "美国国泰银行开户账户预存款是多少比较好？",
        answer: "开户预存3000美金免管理费"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.cathay_content2 .content1',
        '.cathay_content2 .content2',
        '.cathay_content2 .content3',
        '.cathay_content2 .content4',
        '.content_bank',
        '.cathay_content2 .content6'
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
