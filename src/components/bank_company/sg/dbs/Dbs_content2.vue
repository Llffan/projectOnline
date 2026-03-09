<template>
    <div class="sg_dbs_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡星展银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/星展银行.png" alt="新加坡星展银行">
                    <div class="text">
                        <P>星展银行（DBS），原名新加坡发展银行（Development Bank of Singapore），是新加坡最大的商业银行。银行成立于1968年，原为新加坡政府成立的一家发展融资机构。目前，星展银行为客户提供全方位金融服务，其资产总额和各项业务发展指标在本土名列前茅，并拥有极高的国际信用评级。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡星展银行开户优势
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
                        <div class="condition-item">香港/海外公司注册证书、商业登记证、章程等</div>
                        <div class="condition-item">全体股东董事身份证、护照及董事个人简历</div>
                        <div class="condition-item">国内关联公司营业执照及法人身份证明资料</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国内关联公司近3个月的对公银行流水对账单</div>
                        <div class="condition-item">对应的采购及销售合同、发票、运输单及银行回单</div>
                        <div class="condition-item">国内实际办公地址的房屋租赁合同</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡星展银行开户流程
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
                    新加坡星展银行常见问题
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
import '@/css/bank_company/sg/dbs/Dbs_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '整理与审核',
        description: '提供证件扫描件和填写好后开户信息发给银行初步审核'
    },
    {
        iconId: '#icon-communication', 
        title: '律师见证',
        description: '初审通过后，银行联系预约时间进行律师见证或邮寄见证'
    },
    {
        iconId: '#icon-accept-email', 
        title: '开通账户',
        description: '完成见证程序并在新加坡总部建档审核，成功开通账户'
    },
    {
        iconId: '#icon-airplane', 
        title: '密函下发',
        description: '见证后约1-2周，可收到银行下发的密码信及实体提款卡'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: '转账无限制',
        description: '转帐额度无限额，多货币种转出转入自由无限制'
    },
    {
        iconId: '#icon-good-two', 
        title: '包容性极强',
        description: '在其他银行开户被拒，或有注销记录的公司通常也能开通'
    },
    {
        iconId: '#icon-world', 
        title: '国籍范围广',
        description: '接受广泛的海外架构公司，外国公司和外国人都可以申请'
    },
    {
        iconId: '#icon-finance', 
        title: '数字资产友好',
        description: '拥有自建数字资产交易平台，对数字货币与科技行业非常友好'
    }
]

const faqs = ref([
    {
        question: "新加坡星展银行有实体卡吗？",
        answer: "有的，配有实体提款卡。"
    },
    {
        question: "看上去，新加坡星展银行开户的条件比较高？",
        answer: "理解的很对，星展整体来说门槛比较高，如果想得到一个专业及时的服务，建议准备至少 30 万美金以上。"
    },
    {
        question: "用于炒币，开新加坡星展银行合适吗？",
        answer: "星展银行对数字货币是非常友好的，银行本身也推出了数字货币相关的交易与保管平台。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_dbs_content2 .content1',
        '.sg_dbs_content2 .content2',
        '.sg_dbs_content2 .content3',
        '.sg_dbs_content2 .content4',
        '.content_bank',
        '.sg_dbs_content2 .content6'
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
