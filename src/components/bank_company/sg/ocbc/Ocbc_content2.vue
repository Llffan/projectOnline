<template>
    <div class="sg_ocbc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡华侨银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/sg/华侨银行.png" alt="新加坡华侨银行">
                    <div class="text">
                        <P>华侨银行是新加坡历史最悠久的本土银行，在1932年由三大华资银行合并而成，当中最早的成立于1912年。以资产规模来说，华侨银行目前是东南亚第二大的金融服务集团，也是世界上最高度评价的银行之一，拥有穆迪评级Aa1，标准普尔评级AA-，惠誉国际评级AA-。以广泛认可的金融实力和稳定性，华侨银行连续数年蝉联由《环球金融》杂志颁布的“全球最安全的50家银行”赞誉，同时在《亚洲银行家》杂志的评选中荣膺“新加坡及亚太地区最佳管理银行”殊荣。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡华侨银行开户优势
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
                        <div class="condition-item">原版护照 - 公司账户授权签署人+董事+股东</div>
                        <div class="condition-item">原版的住家地址证明（中国身份证）</div>
                        <div class="condition-item">关联国内公司营业执照</div>
                        <div class="condition-item">国内公司最近3个月营运证明:2至3家供应商、2至3家买家各一套「销售合同/订收据或增值税发票+国际运单」(文件要对得上流水)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国内公司银行账户最近3-6个月之流水明细</div>
                        <div class="condition-item">新加坡公司意向合同两份</div>
                        <div class="condition-item">完善尽职调查表格KYC</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡华侨银行开户流程
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
                    新加坡华侨银行常见问题
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
import '@/css/bank_company/sg/ocbc/Ocbc_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '提交资料与预审',
        description: '收集开户信息，银行填写相关表格及邮寄申请书'
    },
    {
        iconId: '#icon-communication', 
        title: '律所见证签署',
        description: '客户收到文件后预约律所，携带正副本现场见证并签字'
    },
    {
        iconId: '#icon-city', 
        title: '寄回银行审批',
        description: '律所将文件寄回新加坡华侨银行进行审核开户'
    },
    {
        iconId: '#icon-airplane', 
        title: '开户办结激活',
        description: '下发账户密码，客户完成同名转账激活账户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: '重视客户的隐私权',
        description: '有效保障客户账户及资产的安全隐秘'
    },
    {
        iconId: '#icon-transaction', 
        title: '在家即可远程开户',
        description: '免登陆线上办理，流程灵活便捷'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '多币种转换灵活',
        description: '支持多种外币轻松转换，无缝衔接国际贸易'
    },
    {
        iconId: '#icon-world', 
        title: '中文网银APP',
        description: '提供简单易用的全中文操作界面，管理无障碍'
    }
]

const faqs = ref([
    {
        question: "需要本人前往新加坡华侨银行办理吗？流程复杂吗？",
        answer: "不需要本人赴新，在国内城市线上就能办理。如果您想了解具体办理流程，可以详细咨询。"
    },
    {
        question: "新加坡华侨银行开户要多久时间？",
        answer: "6周"
    },
    {
        question: "新加坡华侨银行资金转回国有什么限制?",
        answer: "新加坡华侨银行账户全球转账汇款无限制，国内收款有外汇管制。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_ocbc_content2 .content1',
        '.sg_ocbc_content2 .content2',
        '.sg_ocbc_content2 .content3',
        '.sg_ocbc_content2 .content4',
        '.content_bank',
        '.sg_ocbc_content2 .content6'
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
