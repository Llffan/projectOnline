<template>
    <div class="sg_aspire_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡Aspire银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/aspire.png" alt="新加坡Aspire银行">
                    <div class="text">
                        <P>新加坡Aspire银行是整个东南亚地区首家数字银行，也是新加坡数字银行的代表，由原东南亚最大电商Lazada联合创始人创立。Aspire主要作为专注于中小企业的资金管理服务提供商，专门为东南亚及全球中小企业提供方便快捷的银行业务。其愿景是重塑中小企业金融体验，致力于推动金融包容性，帮助企业主通过当日贷款、透明定价以及灵活的数字工具取得长效业务成长。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡Aspire银行开户优势
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
                        <div class="condition-item">开户公司全套注册文件（章程前三页需签字）</div>
                        <div class="condition-item">全体董事及股东身份证明（护照及身份证等）</div>
                        <div class="condition-item">国内关联公司营业执照等证明文件（若有）</div>
                        <div class="condition-item">新方董事身份证及身份认证文档库</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">需专属提供Aspire银行KYC与开户信档案等</div>
                        <div class="condition-item">开户信及相关文书签字见证件（由代理提供）</div>
                        <div class="condition-item">提供开户公司详细业务描述及核心产品清单</div>
                        <div class="condition-item">实名认证环节（专属链接董事手持护照自拍）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡Aspire银行开户流程
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
                    新加坡Aspire银行常见问题
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
import '@/css/bank_company/sg/aspire/Aspire_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: '线上提交阶段',
        description: '客户确定好规划后线上直接提交KYC身份文件及公司注册材料'
    },
    {
        iconId: '#icon-notes', 
        title: '签署合作协议',
        description: '进行基础初审资质判断后，于电子平台签署有效开户协议'
    },
    {
        iconId: '#icon-finance', 
        title: '平台付费验证',
        description: '完成服务费及预存付款（支持电汇/信用卡/数字货币体系）'
    },
    {
        iconId: '#icon-accept-email', 
        title: '正式审批下户',
        description: '收款完毕并完成在线人证比对复核后，约2周时间即可下户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-city', 
        title: '远程便捷办理',
        description: '纯线上的数字银行设计，开户资料相对简单且流程极其快捷'
    },
    {
        iconId: '#icon-shield', 
        title: 'MAS严格监管',
        description: '受金管局直接监管，资金托管于一级信托账下保障独立与安全'
    },
    {
        iconId: '#icon-transaction', 
        title: '极简低耗资费',
        description: '为中小企业定制无隐形捆绑套餐，基础收费极低无额外费用'
    },
    {
        iconId: '#icon-world', 
        title: '纯数字银行体验',
        description: '东南亚首家全数字银行，支持API介入与纯线上全天候管理'
    }
]

const faqs = ref([
    {
        question: "放在新加坡 Aspire 里面的资金安全吗？",
        answer: "Aspire 受新加坡金管局 MAS 监管，符合 Payment Services Act (No. 2 of 2019) 法案的规定，同时所有的资金均托管在当地一级信托账户名下，客户资产跟公司资产完全分离。"
    },
    {
        question: "新加坡Aspire银行与实体银行有什么区别？",
        answer: "所有业务都将在网上平台进行操作，没有实体的分支行柜台。业务类别集中支持账户储蓄和灵活转账，暂不包含投资理财、信用证办理等纯传统业务。"
    },
    {
        question: "Aspire 账户可以申请 Visa/Mastercard 卡吗？",
        answer: "可以的，除实体卡外还可以马上申请虚拟卡，对于有不少频繁支出的客户及跨区投放消费等客户群体来说，会非常的方便。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_aspire_content2 .content1',
        '.sg_aspire_content2 .content2',
        '.sg_aspire_content2 .content3',
        '.sg_aspire_content2 .content4',
        '.content_bank',
        '.sg_aspire_content2 .content6'
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
