<template>
    <div class="hsbc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国汇丰银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/us/汇丰银行.png" alt="美国汇丰银行">
                    <div class="text">
                        <p>美国汇丰银行汇丰银行是全球最大的银行之一，总部位于伦敦，但在全球范围内拥有广泛的网络。汇丰银行在美国也有多家分行，特别是在纽约、洛杉矶等大城市。</p>
                        <p>个人开设汇丰银行账户可以便于在海外进行购物、留学、置业，房地产，境外投资、海外移民等项目，可进行全球财富管理等活动。境外运作境内操控的模式也能够加快境内外资金运转，提高资金使用效率。</p>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国汇丰银行开户优势
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
                        <div class="condition-item">远程视频见证办理，护照和身份证拍照</div>
                        <div class="condition-item">电子邮箱、手机号码、姓名、出生日期</div>
                        <div class="condition-item">护照号码、护照有效期</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">工作性质(自雇/受雇)、职位、公司名称以及公司地址</div>
                        <div class="condition-item">邮寄地址/住址(与汇丰国内开户账单地址相同)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国汇丰银行开户流程
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
                    美国汇丰银行常见问题
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
import '@/css/bank_company/us/hsbc/Hsbc_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process (3 items)
const registrationProcess = [
    {
        iconId: '#icon-phone-call', 
        title: '第一步',
        description: '确定需要开户后，我们会约定时间与银行客户经理进行开户KYC'
    },
    {
        iconId: '#icon-protect', 
        title: '第二步',
        description: '银行后台进行视频认证，准备好护照及身份证，进行表格信息确认'
    },
    {
        iconId: '#icon-message-success', 
        title: '第三步',
        description: '开户完成，邮寄卡片密码函，注册网银，做国内和海外账户连结'
    }
]

// Bank Advantages (4 items)
const advantage = [
    {
        iconId: '#icon-exchange-cny-line', 
        title: '免电汇费',
        description: '无转入或转出的电汇费用'
    },
    {
        iconId: '#icon-world', 
        title: '全球网络',
        description: '在汇丰全球账户内汇款，免费+秒到+无金额限制'
    },
    {
        iconId: '#icon-protect', 
        title: 'ATM免手续费',
        description: '全球汇丰 ATM 及美国境内所有 ATM 无手续费'
    },
    {
        iconId: '#icon-finance', 
        title: '免交易费',
        description: '无境外交易费用'
    }
]

const faqs = ref([
    {
        question: "分配的专属美国客户经理会说中文吗？",
        answer: "在你视频开户时，可以要求客服帮你分配一个会说中文的专属客户经理。具体可咨询我司相关负责人。"
    },
    {
        question: "办理的美国汇丰卡是什么级别？",
        answer: "大陆卡叫卓越理财卡，美卡叫Premier Card，卓越理财 = Premier。具体请咨询我司负责人。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.hsbc_content2 .content1',
        '.hsbc_content2 .content2',
        '.hsbc_content2 .content3',
        '.hsbc_content2 .content4',
        '.content_bank',
        '.hsbc_content2 .content6'
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
