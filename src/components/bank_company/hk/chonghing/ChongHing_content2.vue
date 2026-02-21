<template>
    <div class="chonghing_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港创兴银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/chong_xing.jpg" alt="">
                    <div class="text">
                        <P>创兴银行于1948年在香港成立，1994年在香港联合交易所上市（股份代号：01111）。创兴银行及其附属公司为个人及企业客户提供全面商业银行及金融服务，其中包括港币及外币存款、信贷、外汇交易、财富管理、投资、证券、保险、强积金等各项产品及服务。创兴银行现时在香港设有超过30家分行，在广州、北京、深圳、上海、汕头及澳门设有分行。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港创兴银行开户优势
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
                    香港创兴银行开户所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="section-title">企业开户所需资料</div>
                        <div class="condition-item">商业登记证，注册证书</div>
                        <div class="condition-item">法团成立表/周年申报表，章程</div>
                        <div class="condition-item">身份证，通行证/护照（董事和所有股东）</div>
                        <div class="condition-item">地址证明或房产证（董事和所有股东）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="section-title">业务及关联资料</div>
                        <div class="condition-item">近三个月月结单（董事和所有股东）</div>
                        <div class="condition-item">2套业务合同，报关单/提单（如有）或2套意向合同和商业计划书</div>
                        <div class="condition-item">香港公司银行流水（如有），审计报告/水单</div>
                        <div class="condition-item">关联公司（如有），银行KYC表格</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港创兴银行开户流程
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
                    香港创兴银行常见问题
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
                            <div v-if="faq.isHtml" v-html="faq.answer"></div>
                            <div v-else>{{ faq.answer }}</div>
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
import '@/css/bank_company/hk/chonghing/ChongHing_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: '第一步',
        description: '递交资料后一周左右安排视频KYC'
    },
    {
        iconId: '#icon-video-one', // Assuming a video icon exists, otherwise need to check or use alternate
        title: '第二步',
        description: '视频通过后一周左右会安排内地见证开户'
    },
    {
        iconId: '#icon-card-two', // Assuming card icon
        title: '第三步',
        description: '见证完大概6周左右会下户，整个流程大概6-8周'
    }
]
// Fallback icons if above don't exist based on common iconfont
// Using generic safe ones for now to avoid error
registrationProcess[0].iconId = '#icon-upload-one';
registrationProcess[1].iconId = '#icon-message-success'; 
registrationProcess[2].iconId = '#icon-folder-success-one';

const advantage = [
    {
        iconId: '#icon-finance', 
        title: '出入账便利',
        description: '支持信用证、银行支票出入账'
    },
    {
        iconId: '#icon-video-one', // Using message-success as proxy for video confirmation if video icon missing
        title: '视频见证',
        description: '视频见证，无需赴港'
    },
    {
        iconId: '#icon-good-two', 
        title: '门槛较低',
        description: '与其他银行相比之下(汇丰、恒生、渣打等），其开户门槛是较低的'
    },
    {
        iconId: '#icon-world', 
        title: '跨境服务',
        description: '网点覆盖大湾区主要城市，提供便捷的跨境金融互联互通服务'
    }
]
// Fix icon for video if needed
advantage[1].iconId = '#icon-message-success';




const faqs = ref([
    {
        question: "香港创兴银行每日转账额度是多少？",
        answer: "每日等值 100 万港币。"
    },
    {
        question: "香港创兴银行开户见证的城市有哪些？",
        answer: "上海、深圳、广州、东莞、佛山"
    },
    {
        question: "香港创兴银行开户要多久时间？",
        answer: "6周"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.chonghing_content2 .content1',
        '.chonghing_content2 .content2',
        '.chonghing_content2 .content3',
        '.chonghing_content2 .content3_1',
        '.chonghing_content2 .content4',
        '.chonghing_content2 .content5',
        '.consultant_box',
        '.content_bank',
        '.chonghing_content2 .content6'
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
