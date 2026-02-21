<template>
    <div class="uob_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港大华银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/UOB.jpg" alt="香港大华银行">
                    <div class="text">
                        <P>香港大华就是大华银行香港分行，位于香港中环，1965年成立，如今总资产2600亿港币，虽然不如汇丰、渣打这些巨无霸，但也是香港的前二十大银行。 香港的大华跟花旗、摩根有点类似，总资产在香港不算庞大，但胜在股东实力强大，也成为香港广义上的大型银行。 自1965年在香港开设第一家海外分行以来，香港大华一直致力于帮助企业和机构客户抓住机遇，在充满活力的亚洲及其他地区发展业务。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港大华银行开户优势
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
                        <div class="condition-item">董事、股东身份证与通行证证明件</div>
                        <div class="condition-item">本港商业登记证(BR)、公司注册证明(CI)</div>
                        <div class="condition-item">董事个人近期履历表(CV)(主要是工作履历+学历说明)</div>
                        <div class="condition-item">国内公司所持有的营业执照文件</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国内公司近3个月营运证明文件：(对应的购销合同与增值税发票等文件联)</div>
                        <div class="condition-item">国内银行账户最近3-6个月业务流水：(应能匹配上述合同出账)</div>
                        <div class="condition-item">企业与海外客户之间业务意向协议等</div>
                        <div class="condition-item">公司网站或微博微信业务页面、网店(如有)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港大华银行开户流程
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
                    香港大华银行常见问题
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
import '@/css/bank_company/hk/uob/Uob_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料初审',
        description: '先将所需开户文件电子版交由我们审核后安排大华经理初审'
    },
    {
        iconId: '#icon-communication', 
        title: '面签预约',
        description: '初审通过之后，我们将为您联络银行预约办理过港面签之安排'
    },
    {
        iconId: '#icon-city', 
        title: '开户面签',
        description: '客户到位于本港的大华预约分行地点按时完成开户面签流程'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '成功开户',
        description: '完成所有后续开户手续并在指引下激活使用公司银行账户户口'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-earth', 
        title: '国籍高度接纳',
        description: '广泛接纳外国国籍的董事及股东参与开户（注：除美国籍外）。'
    },
    {
        iconId: '#icon-transaction', 
        title: '多币种收付',
        description: '可接收及处理世界范围内多种主流流通币种资金。'
    },
    {
        iconId: '#icon-world', 
        title: '复杂架构支持',
        description: '能够良好适应和对接多层级的复杂多元化公司跨国架构。'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: '零门槛极简开',
        description: '开户无特殊门槛限制，所需要提交的开通资料也相对简单。'
    },
    {
        iconId: '#icon-finance', 
        title: '使用无限额度',
        description: '企业账户结算额高度自由，账户内资金调配基本无交易限额。'
    },
    {
        iconId: '#icon-protect', 
        title: '系统安全稳定',
        description: '依托顶尖银行机构加密网络，其银行系统操作极为安全稳定。'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '资金进出自由',
        description: '无外汇款项管制政策束缚，收款以及向外汇兑均十分自由。'
    },
    {
        iconId: '#icon-phone-call', 
        title: '便捷中文网银',
        description: '配套完善的中文网银APP供操作，移动端功能使用方便快捷。'
    }
]

const faqs = ref([
    {
        question: "香港大华银行开户费用是多少？",
        answer: `目前的账户额度及相关费用（针对超级账户体系）如下：\n\n查册费：1,150 港币\n管理费：500 港币/月\n\n特别注意：针对<非香港人的香港公司>，大华银行还会收取——\n开户费：1,150 港币\n最低预存条件：需10万存款（若达不到预存门槛，每月将会对每个活动币种扣除 500 港币的系统服务费用）。`
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.uob_content2 .content1',
        '.uob_content2 .content2',
        '.uob_content2 .content3',
        '.uob_content2 .content4',
        '.content_bank',
        '.uob_content2 .content6'
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
