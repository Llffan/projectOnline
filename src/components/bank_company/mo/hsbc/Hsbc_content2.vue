<template>
    <div class="mo_hsbc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 -->
            <div class="content1">
                <div class="title">
                    澳门汇丰银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/汇丰银行.png" alt="澳门汇丰银行">
                    <div class="text">
                        <P>
                            汇丰银行是外资银行，全称香港上海汇丰银行有限公司（The Hongkong and Shanghai Banking Corporation Limited），中文直译为“香港和上海银行有限公司”，英文缩写为HSBC，中文简称为“汇丰”，取“汇款丰裕”之意。香港上海汇丰银行有限公司为汇丰控股有限公司的全资附属公司，属于汇丰集团的创始成员以及在亚太地区的旗舰，也是中国香港最大的注册银行，以及中国香港三大发钞银行之一。
                        </P>
                        <P>
                            总部位于中环皇后大道中1号香港汇丰银行大厦，现时香港上海汇丰银行及各附属公司主要在亚太地区设立约700多家分行及办事处。2021年10月18日，香港金融管理局（金管局）公布，汇丰银行可开展“跨境理财通”业务。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门汇丰银行开户优势
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

            <!-- 3. 所需资料 (企业开户) -->
            <div class="content3">
                <div class="title">
                    企业开户所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">公司主要文件：公司注册证书、商业登记证、法团成立表格、公司章程</div>
                        <div class="condition-item">董事股东资料：董事及所有股东的个人身份证件等</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">财务审计证明：近半年的银行流水或近一年的利润表或近一年的审计报表</div>
                        <div class="condition-item">业务核实验证：香港公司与境外公司的销售发票及相关合同等</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门汇丰银行开户流程
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
                    澳门汇丰银行常见问题
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
import '@/css/bank_company/mo/hsbc/Hsbc_content2.css'
import MO_Cooperative_Bank from '@/components/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '预约见证',
        description: '审核通过后，预约时间国内汇丰银行见证开户'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '账户开通',
        description: 'NRA账户当天或者1-2个工作日后开通'
    },
    {
        iconId: '#icon-airplane', 
        title: '发放密码器',
        description: '账户开通完毕后，邮寄密码器给客户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: '收付自由',
        description: '自由收付其他国家外币，无外汇额度限制'
    },
    {
        iconId: '#icon-user', 
        title: '沟通便捷',
        description: '有专业客户经理一对一跟进账户相关事项，减少无故关户风险'
    },
    {
        iconId: '#icon-doc-success', 
        title: '简单高效',
        description: '开户资料要求简单、开户时间快，流程简便'
    },
    {
        iconId: '#icon-world', 
        title: '网银便捷',
        description: '提供全天候双语网银服务，随时随地轻松管理全球资产'
    }
]

const faqs = ref([
    {
        question: "澳门汇丰银行开户周末可以办理吗？",
        answer: "不可以，澳门汇丰银行的营业时间是周一到周五9:00-17:00。"
    },
    {
        question: "澳门汇丰银行开户要多久时间？",
        answer: "当天下户下卡。"
    },
    {
        question: "澳门汇丰银行开户要提前预约吗？",
        answer: "正常情况下需要提前3-5天工作日预约。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_hsbc_content2 .content1',
        '.mo_hsbc_content2 .content2',
        '.mo_hsbc_content2 .content3',
        '.mo_hsbc_content2 .content4',
        '.content_bank',
        '.mo_hsbc_content2 .content6'
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
