<template>
    <div class="mo_icbc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    澳门工商银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/工商银行.png" alt="澳门工商银行">
                    <div class="text">
                        <P>中国工商银行澳门分行（简称“澳门分行”）成立于2020年1月，是总行直属的海外分行之一；依托工商银行领先的市场地位、多元的业务结构、强劲的创新能力以及卓越的品牌价值，为客户提供银团贷款、专项融资、贸易融资、国际结算等综合金融服务，致力成为大湾区及中葡经贸往来的重要桥梁和纽带，提升中国工商银行的国际影响力和竞争力。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门工商银行开户优势
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
                        <div class="condition-item">澳门公司开业登记文件（如M1/M8税务登记表等相关文件）</div>
                        <div class="condition-item">全体董事、股东以及最终实益拥有人的身份证件及证明资料</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">公司内部授权人有效签名样本印核及具体的董事授权信文件</div>
                        <div class="condition-item">关联公司的财务单据证明（视具体核资要求可能须补充流水等）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门工商银行开户流程
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
            <MO_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    澳门工商银行常见问题
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
import '@/css/bank_company/mo/icbc/Icbc_content2.css'
import MO_Cooperative_Bank from '@/components/bank_company/common/MO_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-communication', 
        title: '沟通确认',
        description: '进行初期沟通确认开户意向及要求'
    },
    {
        iconId: '#icon-notes', 
        title: '资料预审',
        description: '发送相关背景资料预审，约1~3天回复'
    },
    {
        iconId: '#icon-audit', 
        title: '正式办理',
        description: '条件确认通过后，自动为您正式进入办理环节'
    },
    {
        iconId: '#icon-user', 
        title: '视频签署',
        description: '约1周内获得批复并预约时间，在国内视频见证签署'
    },
    {
        iconId: '#icon-airplane', 
        title: '快递文件',
        description: '约2周完成批核，银行会将账户材料及信函快递国内'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '激活完结',
        description: '成功收到银行下发的相关资料及密码后跟进激活，业务完成'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: '星级私银体验',
        description: '致力于为客户打造快捷便利的同时，提供卓越且高星级的私银配套服务群'
    },
    {
        iconId: '#icon-protect', 
        title: '高度保密机制',
        description: '银行运作严格遵循高标准的客户信息保密制度，以诚实和守信满足隐私需求'
    },
    {
        iconId: '#icon-phone-call', 
        title: '多语种尊配响应',
        description: '拥抱客户至上的宗旨，网银与客户中心可良好提供各类多语种专业服务直达'
    },
    {
        iconId: '#icon-shield', 
        title: '政府立法护航安全',
        description: '拥有着澳门特区政府相关立法保证的存款与转账机制，安全与隐私双重兼得'
    }
]

const faqs = ref([
    {
        question: "澳门公司如何在澳门工商银行开户？",
        answer: "企业银行帐户必须等澳门公司成立后才能申请。一般情况要求董事亲自到银行办理或进行严格视频见证。开户前必须办理政府公证处见证副本并确定引荐介绍人等。\n\n由于开户手续及文件需求较繁复，推荐提前与昶嘉捷顾问联系为您提供全套代办并出具银行对接介绍人许可文件。"
    },
    {
        question: "澳门工商银行开户要多久时间？",
        answer: "从预审到下发整个流程周期一般需要一个月左右时间。如果是资料清晰良好的客户往往能提前下发密码及网银体系。"
    },
    {
        question: "澳门工商银行银行都可以开通什么币种？",
        answer: "澳门银行均为多币种综合性账户。除基础的澳门币、港币、人民币及美元之外，还通常包括新西兰元、澳元、日元、欧元和英镑等常见流通币种，极大满足多元企业客户出海与全球高密资产配置的核心需求。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_icbc_content2 .content1',
        '.mo_icbc_content2 .content2',
        '.mo_icbc_content2 .content3',
        '.mo_icbc_content2 .content4',
        '.content_bank',
        '.mo_icbc_content2 .content6'
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
