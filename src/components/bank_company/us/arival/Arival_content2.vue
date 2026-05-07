<template>
    <div class="arival_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国Arival银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/us/arival银行.png" alt="美国Arival银行">
                    <div class="text">
                        <p>Arival Bank成立于2021年，是美国本地的的持牌数字银行机构，受OCIF监管。目前已为全球超过30个国家的客户服务。目前公司分别在迈阿密，波多黎各，欧洲，新加坡设有运营机构。有别于一般的银行机构，Arival Bank是一家专为“非传统行业”所成立的数字银行机构。特别地，银行为数字货币，区块链，初创型科技公司，数字技术行业，虚拟技术行业等“非传统”行业提供服务。</p>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国Arival银行开户优势
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
                    开户所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">美国公司：公司注册文件-Articles of Organization、公司税务登记证-EIN Confirmation letter</div>
                        <div class="condition-item">香港公司：CI注册证书、BR商业登记证、公司章程、NNC1法团成立表格、NAR1周年申报</div>
                        <div class="condition-item">各国家均需提供：持股证明及董事登记册、地址证明(近三个月银行对账单、信用卡账单、政府出具的文件等)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">岛国公司/其他：注册证书、营业执照、公司章程、董事在职证明、良好存续证明</div>
                        <div class="condition-item">公司业务说明(商业计划及业务说明等)、公司财富资金来源证明(完税证明等)、社交媒体账号</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国Arival银行开户流程
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
            <US_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    美国Arival银行常见问题
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
import '@/css/bank_company/us/arival/Arival_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process (2 items for Arival)
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '第一步',
        description: '客户提交相关资料和 KYC表格申请注册，等待银行审核'
    },
    {
        iconId: '#icon-audit', 
        title: '第二步',
        description: '资料完整审核需 5-10个工作日，如需补充资料7-15个工作日'
    }
]

// Bank Advantages (5 items)
const advantage = [
    {
        iconId: '#icon-diamond', 
        title: '真实账户',
        description: '美国金融监管机构（oclF）持牌'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: '门槛超低',
        description: '重点发展加密货币公司、金融科技公司、创业公司等，无需预存款'
    },
    {
        iconId: '#icon-upload-one', 
        title: '流程简单',
        description: '无需线下柜台见证，银行网站实名面签即可，无须邮寄材料'
    },
    {
        iconId: '#icon-shield', 
        title: '账户稳定',
        description: '开户后，平日无需特别维护'
    },
    {
        iconId: '#icon-transaction', 
        title: '转账汇款',
        description: '支持全球范围内自由收款和转账'
    }
]

const faqs = ref([
    {
        question: "美国银行开户成功后，是不是开其他国家银行账户会简单一些？",
        answer: "是的，通常在美国银行开户成功后，再开其他国家银行账户通过率会高一些，并且时间也会快一些，如果之前没有海外银行开户，可以先选择容易开户的银行。"
    },
    {
        question: "美国Arival银行开户成功后要怎么维护？",
        answer: `1.账户开通后，不可以长时间0存款空置账户，存款金额没有具体要求，只要不是0存款就好，防止被当成僵尸户注销掉。\n\n2.账户开通后，不要长时间0交易，起码每个月有1-2笔的交易流水，交易资金没有具体要求。\n\n3.账户在使用过程中，资金切勿快进快出或频繁进行高额资金转账，否则容易引起银行监管部门的关注，要是被银行判定为异常交易，可能会导致银行账户被冻结。\n\n4.账户在使用过程中，尽量不要接收敏感国家或被制裁中国家的资金，不要和高危国家或地区交易，更加不要参与国际洗钱活动。`
    },
    {
        question: "美国Arival银行开户的流程是不是很难？",
        answer: "流程简单，无需线下柜台见证，银行网站实名面签即可，无须邮寄材料"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.arival_content2 .content1',
        '.arival_content2 .content2',
        '.arival_content2 .content3',
        '.arival_content2 .content4',
        '.content_bank',
        '.arival_content2 .content6'
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
