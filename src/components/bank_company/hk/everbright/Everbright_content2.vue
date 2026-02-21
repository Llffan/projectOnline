<template>
    <div class="everbright_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港光大银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/everbright.jpg" alt="">
                    <div class="text">
                        <P>中国光大银行香港分行成立于2013年，作为光大银行首家境外分行，其品牌价值位列全球前25，资产规模已突破2,000亿，发展迅猛。企业开设境外账户可享受资金调拨自由、无外汇管制、利率优惠及存取灵活等优势，有效优化税务结构，为海外业务拓展提供有力支持。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港光大银行开户优势
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
                        <div class="condition-item">公司注册证书（CI）</div>
                        <div class="condition-item">公司组织章程大纲及细则（M&A）</div>
                        <div class="condition-item">董事、股东及所有授权签字人的身份证明文件（内地身份证及往来港澳通行证及入境记录纸）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">公司印章（横印）</div>
                        <div class="condition-item">营运证明（如国内有营运关连公司或开户公司已在营运，请带营业执照及最近三套贸易文件，例如报关单，销售合约，商业发票，装箱单，提单等）</div>
                        <div class="condition-item">公司货品介绍，目的等（如有）</div>
                        <div class="condition-item">最近一年财务报表（如有）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港光大银行开户流程
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

            <!-- 合作银行 (Optional as per reference but good to have) -->
            <HK_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    香港光大银行常见问题
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
import '@/css/bank_company/hk/everbright/Everbright_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)


// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: '提交资料',
        description: '准备以上1-7项资料，提交审核'
    },
    {
        iconId: '#icon-communication', 
        title: '视频见证',
        description: '审核通过后安排视频见证'
    },
    {
        iconId: '#icon-truck-line', 
        title: '邮寄资料',
        description: '邮寄资料到香港光大'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '完成开户',
        description: '银行办办理账户，下户（网银和编码器）'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-city', 
        title: '服务网点多',
        description: '广泛的服务网络覆盖'
    },
    {
        iconId: '#icon-world', 
        title: '国际知名度高',
        description: '品牌价值全球排名领先'
    },
    {
        iconId: '#icon-diamond', 
        title: '人工智能应用',
        description: '人工智能的具体应用领域高'
    },
    {
        iconId: '#icon-shield', 
        title: '智能风险控制',
        description: '安全可靠的智能风控体系'
    }
]

// Changing "十洲通" to "昶嘉捷" based on user request text

const faqs = ref([
    {
        question: "香港光大银行开户注意事项有哪些？",
        answer: "1.准备齐全文件，不同银行要求资料有所差异，具体详询昶嘉捷。\n2.准时赴约。\n3.面签，与银行经理问答随和自然，切忌表现出犹豫、隐瞒或夸夸其谈。"
    },
    {
        question: "香港光大银行开户要多久时间？",
        answer: "6-8周"
    },
    {
        question: "香港光大银行账户如何合规操作？",
        answer: "1.保持账户处于活跃状态，保持账户有一定的存款；\n2.不要给其他人代收款，杜绝和地下钱庄有任何的资金往来；\n3.避免与受联合国和美国制裁的国家和地区有任何的资金往来；\n4.不要经常频繁的有大额资金的整存整取或者转账；\n5.积极配合银行填写每年的年检和尽职调查表格；\n6.实际核数出具审计报告，避免银行抽查而无法提供；\n7.如果可以，最好一年操作几笔信用证，银行非常喜欢做信用证的客户。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.everbright_content2 .content1',
        '.everbright_content2 .content2',
        '.everbright_content2 .content3',
        '.everbright_content2 .content3_1',
        '.everbright_content2 .content4',
        '.everbright_content2 .content5',
        '.content_bank',
        '.everbright_content2 .content6'
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
