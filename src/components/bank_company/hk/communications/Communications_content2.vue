<template>
    <div class="communications_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港交通银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/communications.jpg" alt="">
                    <div class="text">
                        <P>交通银行（香港）于2018年1月开业，为交通银行在港全资附属公司，设44个网点遍布全港。作为获惠誉、穆迪及标普肯定且评级展望稳定的全牌照商业银行，交银（香港）为企业及个人客户提供全方位金融与财富管理服务。企业开户可享资金自由调拨、无外汇管制及税务优化优势；个人账户则便利全球资产配置、留学置业，实现资金高效运转。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港交通银行开户优势
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
                        <div class="condition-item">商业登记证（BR）</div>
                        <div class="condition-item">注册证明书（CI）</div>
                        <div class="condition-item">所有董事股东身份证及住址证明（水电煤单三个月内有效）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国内关联公司营业执照（如有）</div>
                        <div class="condition-item">无国内公司：提供股东个人资产证明（房产证及银行一百万以上存款证明）</div>
                        <div class="condition-item">香港公司销售合同和供货合同1-2份，或意向合同协议等</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港交通银行开户流程
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
                    香港交通银行常见问题
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
import '@/css/bank_company/hk/communications/Communications_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-audit', 
        title: '预审',
        description: '提交资料进行预审。'
    },
    {
        iconId: '#icon-notes', 
        title: '面签',
        description: '前往银行进行面签。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '拿账户',
        description: '审批通过，获取账户。'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-shield', 
        title: '包容性强',
        description: '可接受被恒生、汇丰等拒绝服务的客户开户申请。'
    },
    {
        iconId: '#icon-peoples', 
        title: '群体广泛',
        description: '作为大型银行，服务群体涵盖优质及普通用户。'
    },
    {
        iconId: '#icon-bank-line', 
        title: '无外汇管制',
        description: '香港本地账户，资金调拨自由，避开外汇管制。'
    },
    {
        iconId: '#icon-world', 
        title: '国际贸易结算',
        description: '分行遍布全球，方便接受境外支付款项，适合外贸SOHO。'
    }
]




const faqs = ref([
    {
        question: "香港交通开户被拒的原因？",
        answer: "1.公司董事及股东在香港交通银行任何一家分支行有不良记录\n2.在境内分行客户风险等级评定为一般或低且已达标的沃德理财或私人银行客户除外\n3.不跟如伊朗、朝鲜、叙利亚、古巴等OFAC制裁国家及涉及经济制裁的国家进行贸易往来\n4.公司名称不能有敏感字眼。（金融、煤矿、珠宝、石油等）\n5.申请资料要准备齐全\n6.跟客户经理沟通过程中让银行产生了怀疑，比如询问开户的用途，从事的行业，资金来源等，模糊的回答会导致银行对开户人的信任产生怀疑，最终导致不予开户\n7.问题回答要完善。香港有银行在开户进行\"客户尽职审查\"时，要求准客户回答十分多的问题和递交一些难以取得的陈年文件，令开户过程变得冗长困难"
    },
    {
        question: "香港交通银行开户要多久时间？",
        answer: "2-3周"
    },
    {
        question: "香港交通银行账户开好后要多久才能运作？",
        answer: "在办妥开户手续后，通常银行会发邮件通知客户，客户收到账号即可接收款项，收到网银的激活密码等资料激活网银登陆网银后就可以正常查款转账了。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.communications_content2 .content1',
        '.communications_content2 .content2',
        '.communications_content2 .content3',
        '.communications_content2 .content3_1',
        '.communications_content2 .content4',
        '.communications_content2 .content5',
        '.content_bank',
        '.communications_content2 .content6'
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
