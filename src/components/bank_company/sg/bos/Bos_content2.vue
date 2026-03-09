<template>
    <div class="sg_bos_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/新加披银行.png" alt="新加坡银行">
                    <div class="text">
                        <P>新加坡银行（Bank of Singapore）是一家总部设于新加坡的私人银行，是东南亚第二大银行华侨银行的全资子公司，原先称ING亚洲私人银行（ING Asia Private Bank）。2009年被华侨银行收购后，其业务主要集中在亚洲及中东等地。除私人银行专属服务外，客户更能通过母公司华侨银行享用全方位的产品及服务组合，包含各类商业方案、融资及经纪服务等。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡银行开户优势
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
                        <div class="condition-item">香港公司全套文件（注册证书、章程、申报表等）</div>
                        <div class="condition-item">公司全体董事及股东身份证明（身份证、通行证）</div>
                        <div class="condition-item">董事及股东个人简介资料和详细名片（如有）</div>
                        <div class="condition-item">国内关联或控股公司近3个月的银行流水及执照</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国内关联公司采购订单以及对应付款记录（1-2套）</div>
                        <div class="condition-item">与外客签署的交易合同与提单/收款记录（2套）</div>
                        <div class="condition-item">与海外客商进行的往来电邮沟通记录截图或证明</div>
                        <div class="condition-item">海外或亲属实控体系等关联佐证（亲属关系证明）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡银行开户流程
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
                    新加坡银行常见问题
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
import '@/css/bank_company/sg/bos/Bos_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '提供资料与建档',
        description: '提供公司运营与关联实体的全套开户信件并由代理代办审核建档'
    },
    {
        iconId: '#icon-upload-one', 
        title: '银行内审阶段',
        description: '向新加坡银行呈交完备档案，等待银行法务风控等合规初审评估'
    },
    {
        iconId: '#icon-communication', 
        title: '亲临面见签阅',
        description: '初审通过后，需由董事与股东等亲自前去新加坡银行进行面签'
    },
    {
        iconId: '#icon-accept-email', 
        title: '网银与下户批注',
        description: '从实地面签后算起，约等待 3 ~ 4 周后即可接获正式下户密码函'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: '极致资金调拨特权',
        description: '新加坡主权金融机制不受外汇管制，方便自由进行全球外贸结算'
    },
    {
        iconId: '#icon-finance', 
        title: '高效多币种兑换',
        description: '提供全球主流多币种自由可选，汇率极具竞争力且手续费用低'
    },
    {
        iconId: '#icon-world', 
        title: '极简的在线直连',
        description: '依托华侨银行母体技术与先进数字环境网银，实时直达交易端口'
    },
    {
        iconId: '#icon-shield', 
        title: '国际权威私行标准',
        description: '商业账户信息可获极其严密的私行高保密标准防护以及高信用评级'
    }
]

const faqs = ref([
    {
        question: "新加坡银行开户存款额要求是什么？",
        answer: "通常新加坡银行账户是多币种的，如为新币账户需在开户后一周内存入3000新币，如开通美金账户，需在开户一周后账户日均需达到8000美金，如没达到要求银行会收取一定的管理费用。"
    },
    {
        question: "新加坡银行账户维护需要注册注意些什么？",
        answer: "1. 保持账户活跃状态，并确保存有足量安全存款；\n2. 杜绝非法渠道资金及频繁大额整存整取等可能触发反洗钱的行为；\n3. 避免与高危敏感国家（如刚果、伊朗等）有业务来往汇出；\n4. 有实际收入务必出具审计报告报税，并配合填写年检等尽职表单。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_bos_content2 .content1',
        '.sg_bos_content2 .content2',
        '.sg_bos_content2 .content3',
        '.sg_bos_content2 .content4',
        '.content_bank',
        '.sg_bos_content2 .content6'
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
