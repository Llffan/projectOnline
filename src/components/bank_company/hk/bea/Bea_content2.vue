<template>
    <div class="bea_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港东亚银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/east_asia.jpg" alt="香港东亚银行">
                    <div class="text">
                        <P>香港东亚银行于1918年创立，至今已有百年历史，在香港联合交易所上市，是香港三大本地银行之一。 东亚银行一直致力于为香港、中国内地以及世界其他市场的客户提供全面的商业银行、个人银行和财富管理等服务，且在内地市场声誉卓著。早在1920年，东亚银行便已在上海开设分行为客户服务，在内地、澳门及台湾设有逾130个网点。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港东亚银行开户优势
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
                        <div class="condition-item">香港公司基本资料（公司注册证书CI、商业登记证BR、NNC1/NAR1、印章、如涉及股权变更需提供相应资料）</div>
                        <div class="condition-item">香港公司意向合同两份</div>
                        <div class="condition-item">国内公司营业执照及近半年银行流水</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国内公司采购销售合同上下游对应的两套，需要增值税发票及提单</div>
                        <div class="condition-item">公司董事及股东身份证和护照的清晰扫描件、近半年银行流水</div>
                        <div class="condition-item">银行KYC表格</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港东亚银行开户流程
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
                    香港东亚银行常见问题
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
import '@/css/bank_company/hk/bea/Bea_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-audit', 
        title: '预先审核资料',
        description: '发送至银行，经理预先审核资料'
    },
    {
        iconId: '#icon-notes', 
        title: '国内面签',
        description: '安排具体开户时间，进行国内面签'
    },
    {
        iconId: '#icon-award-line', 
        title: '办理完成',
        description: '办理完成，4-6周等网银密码器'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '正常使用',
        description: '成功激活网银及账户，即可正常使用'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: '最低管理费',
        description: '账户每月的平均余额为10,000港元，则管理费只需100港元'
    },
    {
        iconId: '#icon-phone-call', 
        title: '首个使用网上银号',
        description: '直接绑定手机，网络银行无需使用编码器'
    },
    {
        iconId: '#icon-city', 
        title: '见证城市多',
        description: '北京、上海、广州、深圳、东莞、珠海、杭州、厦门、福州、西安'
    },
    {
        iconId: '#icon-airplane', 
        title: '开户时间短',
        description: '通常4-6周即可完成开户'
    }
]

const faqs = ref([
    {
        question: "香港东亚银行面签开户注意哪些事项？",
        answer: "1、按时赴约\n2、与银行经理沟通随和自然\n3、银行可能会问询的问题：\nA. 公司营业性质是？石油、煤矿、珠宝可能会回绝\nB. 首要从事什么行业？出资类公司可能回绝\nC. 首要贸易国家？敏感国家如朝鲜、伊朗等不接受\nD. 预计年营业额收入。"
    },
    {
        question: "香港东亚银行开户要多久时间？",
        answer: "6-8周左右（4-6周先下表户，后激活）。"
    },
    {
        question: "香港东亚银行开户后要怎么维护？",
        answer: "1、不要给他人代收款，香港坚决杜绝和地下钱庄资金往来，如果需要交易要保留款项来源凭证以及合同；\n2、尽可能公对公使用。可以使用一部分L/C以确认贸易身份；\n3、避免经常性大额资金整存整取；\n4、保持账户存在存款，避免因拖欠管理费导致欠费；\n5、保持账户活跃，长期不适用可能导致账户关闭；\n6、确保预留的通讯地址以及联系方式可用，以免因未收到调查表格导致账户被关。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.bea_content2 .content1',
        '.bea_content2 .content2',
        '.bea_content2 .content3',
        '.bea_content2 .content4',
        '.content_bank',
        '.bea_content2 .content6'
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
