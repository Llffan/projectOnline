<template>
    <div class="axos_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国Axos银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/axos.png" alt="美国Axos银行">
                    <div class="text">
                        <p>Axos银行的前身是1999年成立的BofI Federal Bank，之后更名美国互联网银行，是全球最早的数字银行之一，但是在加州也是有自己的实体线下银行的。2018年的时候银行改名为Axos Bank。 Axos银行是有FDIC保险的，银行如果破产，单个账户可以获赔20万美元。 目前Axos银行的World Checking Account，也就是全球支票账户，是支持非美国身份开户的，这也就意味着我们中国大陆的居民也可以顺利开户。</p>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国Axos银行开户优势
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
                        <div class="condition-item">开户公司注册文件全套</div>
                        <div class="condition-item">董事/股东(大于10%)证件清晰拍照</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">KYC表格详细填写，尤其是业务推述这块</div>
                        <div class="condition-item">个人简历表</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国Axos银行开户流程
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
                    美国Axos银行常见问题
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
import '@/css/bank_company/us/axos/Axos_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process (2 items)
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '第一步',
        description: '客户提交相关资料和 KYC表格申请注册，等待银行审核'
    },
    {
        iconId: '#icon-audit', 
        title: '第二步',
        description: '资料完整审核需 15个工作日，如需补充资料30个工作日'
    }
]

// Bank Advantages (8 items)
const advantage = [
    {
        iconId: '#icon-world', 
        title: '国际Swift代码',
        description: '有自己的国际Swift代码，中国大陆银行可以直接在网银或者手机银行，操作跨境电汇到Axos银行账户'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '支持ACH',
        description: '支持ACH Pull和ACH Push，可以顺利的绑定券商账户，或者自己其他的美国银行账户'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: '电汇无手续费',
        description: '国际电汇和美国电汇全部免手续费，无论电汇进，还是电汇出，都是免费'
    },
    {
        iconId: '#icon-finance', 
        title: '无管理费',
        description: '没有任何账户管理费用'
    },
    {
        iconId: '#icon-upload-one', 
        title: '门槛极低',
        description: '开户门槛极低，有护照就可以开，而且不限护照地区'
    },
    {
        iconId: '#icon-comments', 
        title: '中文经理服务',
        description: '有专属的中文银行经理，开户后有任何问题可以直接联系银行经理解决'
    },
    {
        iconId: '#icon-shield', 
        title: '风控较松',
        description: '账户风控较松，不会莫名其妙被风控'
    },
    {
        iconId: '#icon-protection', 
        title: '资金安全保障',
        description: '颠覆传统意义上的模式，资金安全更加有保障'
    }
]

const faqs = ref([
    {
        question: "为什么Axos银行与众不同？",
        answer: "Axos银行提供有竞争力的利率，低至无费用，以及方便的个人、小企业和商业银行账户以及商业贷款。\n\n通过Axos移动应用程序，您可以查看账户余额，存入支票，自动生成账单，以及更多。Axos没有月度维护费，最低存款要求低，国内ATM费用报销不受限制。\n\n他们的利息支票账户可以为你赚取高达0.81%的年利率，而他们的储蓄账户，最高为0.50%"
    },
    {
        question: "如何开立Axos商业账户？",
        answer: "要开立Axos商业账户，您必须输入您的姓名、出生日期、电子邮件、电话号码和社会安全号码，这将使他们能够验证您的身份。他们会要求你提供企业名称、地址和税务识别码（TIN）。\n\n当你申请独资企业账户时，Axos会要求你和任何授权签字人提供你的合法姓名、居住地址、出生日期和社会安全号码。你还需要提供一个带照片的身份证。"
    },
    {
        question: "Axos是如何监管的？",
        answer: "Axos银行由货币监理署（OCC）监管，并由联邦存款保险公司（FDIC）承保。\n\n它是一家上市公司，在纽约正确交易所上市，名为Axos Financial Inc. (AX)。Axos金融公司是Axos银行的母公司。"
    },
    {
        question: "如何开立Axos个人账户？",
        answer: "要开立Axos个人账户，您必须有一个社会安全号码（SSN），年满18岁，有一个有效的带照片的身份证（驾驶执照，州身份证）。您还需要有一个有效的美国地址（没有邮政信箱），并且是美国公民或常驻外国人。\n\n要开始申请过程，你必须输入你的名字和姓氏、电子邮件地址、手机号码，并创建一个用户名和密码。为了验证你的身份，你必须输入你的出生日期和社会保险号码。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.axos_content2 .content1',
        '.axos_content2 .content2',
        '.axos_content2 .content3',
        '.axos_content2 .content4',
        '.content_bank',
        '.axos_content2 .content6'
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
