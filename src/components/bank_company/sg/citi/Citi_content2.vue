<template>
    <div class="sg_citi_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡花旗银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/花旗银行.png" alt="新加坡花旗银行">
                    <div class="text">
                        <P>新加坡作为花旗在亚太地域表示精彩的核心重要，是许多花旗银行更先进的业务枢纽和数据中心，为世界60多个国家提供无数的业务活动。综合业务运营中心与新加坡以外的区域办事处坚持亲密联系，包含：亚洲零售银行和信誉卡、国际个人银行、花旗私人银行（亚洲和全球）、亚洲全球交易服务、亚洲CVC等多层次银行业务。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡花旗银行开户优势
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
                        <div class="condition-item">关联公司近3个月的银行对账单（证明持续业务活动）</div>
                        <div class="condition-item">关联公司董事曾运营相关海外实体的在职证明（COI）</div>
                        <div class="condition-item">经审计的财务状况/相关报表以展示业务规模</div>
                        <div class="condition-item">开户公司网站资料或董事在线资质经历等</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">新加坡新办公地址或实体的相关对账资料</div>
                        <div class="condition-item">所有董事和股东的身份信件材料核认文件</div>
                        <div class="condition-item">往来发票、合同、信用证等用以证明合规业务</div>
                        <div class="condition-item">完整的商业计划或财产初始来源的解释说明</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡花旗银行开户流程
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
                    新加坡花旗银行常见问题
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
import '@/css/bank_company/sg/citi/Citi_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料认证初审',
        description: '拍身份证护照及地址等，填写KYC表格提交初次审核'
    },
    {
        iconId: '#icon-upload-one', 
        title: '表格签署邮寄',
        description: '经理代填开户表发给客户，客户签字并携公证件寄送银行'
    },
    {
        iconId: '#icon-communication', 
        title: '电话面谈确认',
        description: '银行收到实体文件后，经理对客户进行一次电话确认回访'
    },
    {
        iconId: '#icon-airplane', 
        title: '实体卡下发',
        description: '成功开户后寄出实体卡与编码器，下载应用激活即可使用'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: '多币种收付体系',
        description: '支持多币种兑换及储存，网银端享有无限额自助电汇特权'
    },
    {
        iconId: '#icon-city', 
        title: '远程快捷办理',
        description: '支持远程开立账户，无需赴新进行繁琐面见及视频等'
    },
    {
        iconId: '#icon-finance', 
        title: '投资门槛零距离',
        description: '可免费开立附带的多元化股票账户，轻松投资美/港/新股'
    },
    {
        iconId: '#icon-shield', 
        title: '专属中文系统',
        description: '系统提供纯中文系统网银与APP界面（Citigold），操作友好'
    }
]

const faqs = ref([
    {
        question: "那么开了花旗，可以做虚拟货BI交易吗？",
        answer: "当然可以的，因为新加坡对于这一方面是相对友好的。"
    },
    {
        question: "开了花旗方便购买港股美股吗？",
        answer: "当然可以，跟普通转出账一样的流程。"
    },
    {
        question: "我英文不太行，花旗会不会都是英文不方便？",
        answer: "当然不会，花旗最大的优势之一就是其网银界面可调整为中文界面，更方便友好，操作起来也更便捷。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_citi_content2 .content1',
        '.sg_citi_content2 .content2',
        '.sg_citi_content2 .content3',
        '.sg_citi_content2 .content4',
        '.content_bank',
        '.sg_citi_content2 .content6'
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
