<template>
    <div class="constructions_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港建设银行（亚洲）简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/construction.png" alt="">
                    <div class="text">
                        <P>香港建设银行（亚洲）是建行在港旗舰机构，拥有广泛客户基础，营销网络覆盖全国，与众多大型企业保持密切业务联系。2016年《银行家》全球排名第二，2017年品牌金融全球500强排名第14位，实力雄厚。境外账户可实现资金自由调拨、无外汇管制；个人账户便于海外置业、留学及全球财富管理。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港建设银行（亚洲）开户优势
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
                    香港建设银行开户流程
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
                    香港建设银行（亚洲）常见问题
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
                            {{ faq.answer }}
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
import '@/css/bank_company/hk/construction/Constructions_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: '发资料预审',
        description: '提交相关资料进行初步审核。'
    },
    {
        iconId: '#icon-city', 
        title: '预约香港建行地点',
        description: '预约具体的银行网点办理时间。'
    },
    {
        iconId: '#icon-notes', 
        title: '现场签字',
        description: '按照要求到地点进行面签和签字。'
    },
    {
        iconId: '#icon-audit', 
        title: '审批成功',
        description: '银行后台进行审批。'
    },
    {
        iconId: '#icon-award-line', 
        title: '寄出编码器',
        description: '银行寄出编码器及密码信。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '完成开户',
        description: '激活账户，正式完成开户。'
    }
]

const advantage = [
    {
        iconId: '#icon-finance', 
        title: '管理费便宜',
        description: '达到比较低的数额，可以享受豁免。'
    },
    {
        iconId: '#icon-bank-line', 
        title: '资金自由',
        description: '不受外汇监管，资金自由进出。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '免息税',
        description: '存款实际收入高，税务成本低。'
    },
    {
        iconId: '#icon-airplane', 
        title: '多币种',
        description: '多种货币可自由兑换，方便国际贸易。'
    }
]



const faqs = ref([
    {
        question: "收到香港建设银行账户说网上理财已经启用了，是不是可以收款了？",
        answer: "是的，其实银行给账号的时候就已经可以用了，只是在激活网银前不能登录网银而已。"
    },
    {
        question: "香港建设银行开户要多久时间？",
        answer: "审核一周（可加急），一般约一周后，面签后1-3周后下户。"
    },
    {
        question: "香港建设银行账户开户成功后应注意什么？",
        answer: "1、敏感国家的钱不要收（例如战乱国:伊朗，苏丹，古巴等）；2、不要大额资金整存整取；3、保持账户有一定的存款，不能欠费；4、经常运作，超过3个月不活动的账户将会有被关闭的风险；5、确保通讯信息有效，及时回复银行调查；6、如有实际收入，建议出具审计报告。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}



onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.constructions_content2 .content1',
        '.constructions_content2 .content2',
        '.constructions_content2 .content3',
        '.constructions_content2 .content3_1',
        '.constructions_content2 .content4',
        '.constructions_content2 .content5',
        '.content_bank',
        '.constructions_content2 .content6'
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
