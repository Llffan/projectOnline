<template>
    <div class="dahsing_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港大新银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/dah_sing.jpg" alt="香港大新银行">
                    <div class="text">
                        <P>大新集团为中国香港一家颇具规模的金融服务集团，主要经营银行及保险业务。大新集团包括两家上市公司，为分别于1987年及2004年在香港联合交易所上市的大新金融集团有限公司（大新金融）及大新银行集团有限公司（大新银行集团）。大新集团素以积极进取和不断创新的金融服务著称。其专业的管理队伍、与对服务顾客的热忱承诺，乃集团成功的关键。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港大新银行开户优势
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
                        <div class="condition-item">香港公司资料（CI、BR、NNCI/NAR1、变更文件、条形章、章程）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">董事身份证明：通行证及过关小票</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港大新银行开户流程
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
                    香港大新银行常见问题
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
import '@/css/bank_company/hk/dahsing/DahSing_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-folder-success-one', 
        title: '查册资料',
        description: '整理资料并进行查册'
    },
    {
        iconId: '#icon-notes', 
        title: '签署开户档',
        description: '预约客户到律师楼签署开户档'
    },
    {
        iconId: '#icon-airplane', 
        title: '寄出资料',
        description: '寄资料到银行端审核'
    },
    {
        iconId: '#icon-award-line', 
        title: '审核通过',
        description: '户口审核通过，开户完成'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: '开户要求相对较低',
        description: '不满30周岁或者名称有国际、集团等都可以开户'
    },
    {
        iconId: '#icon-audit', 
        title: '包容性强',
        description: '如果再其他银行开户被拒绝过的，或者之前有账户被注销过的，都可以开户'
    }
]

const faqs = ref([
    {
        question: "香港大新银行有实体卡吗？",
        answer: "没有实体卡片，全程电子账户，若线下不取现，完全可以满足日常的使用。需要注意的是，香港大新银行的账户默认无法电汇至海外，当然转账到大新银行中国的同名账户肯定是没有问题的，若需要开通海外电汇的业务，需本人亲自赴港申请。"
    },
    {
        question: "香港大新银行开户要多久时间？",
        answer: "6-8周（4周出见证时间）"
    },
    {
        question: "香港大新银行账户后续维护要注意什么问题？",
        answer: "1、离岸账户不要长期余额为0；\n2、离岸账户不要长期不使用，比如半年都没用过；\n3、避免借用账户给他人转账，帮他人收/汇款项；\n4、离岸公司应当及时办理公司年审。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.dahsing_content2 .content1',
        '.dahsing_content2 .content2',
        '.dahsing_content2 .content3',
        '.dahsing_content2 .content4',
        '.content_bank',
        '.dahsing_content2 .content6'
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
