<template>
    <div class="mo_ocbc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 -->
            <div class="content1">
                <div class="title">
                    澳门华侨银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/华侨银行.png" alt="澳门华侨银行">
                    <div class="text">
                        <P>
                            永亨银行为澳门最具规模的银行之一，1937年在广州市创立，并于1941年迁往澳门继续营业，1984年由香港永亨银行收购澳门永亨银行，使之成为香港永亨银行之全资附属公司及美国纽约银行成员。
                        </P>
                        <P>
                            永亨银行多年来提供零售银行服务、企业银行服务与外汇及金融服务，并以积极进取的经营方针，不断推出创新产品。永亨银行乃集团之控股公司及主要业务运作公司，在香港、澳门及中国共设有超过五十间分行及代表处。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门华侨银行开户优势
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
                        <div class="condition-item">基本证件：客户必须持有并出示有效个人身份证</div>
                        <div class="condition-item">过境文件：需连同港澳通行证或入境纸一并作为验证</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">职业证明：客户职业核实（如工作合同或者社保证明）</div>
                        <div class="condition-item">资质核查：需覆盖证明近半年的社保记录和流水验证</div>
                    </div>
                </div>
            </div>

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门华侨银行开户流程
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
                    澳门华侨银行常见问题
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
import '@/css/bank_company/mo/ocbc/Ocbc_content2.css'
import MO_Cooperative_Bank from '@/components/bank_company/common/MO_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '整理预审',
        description: '准备电子版资料并发邮件或给银行进行初审'
    },
    {
        iconId: '#icon-user', 
        title: '银行审查',
        description: '需至少 1-2个工作天进行初步审核核实资料'
    },
    {
        iconId: '#icon-airplane', 
        title: '现场办理',
        description: '审核通过后收到通知并按预约时间到场面部办理'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '成功下户',
        description: '现场办理时间约1小时完成，确认后即出下户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: '业务广泛持',
        description: '支持正常操作跟进信用证、DP、DA等多项国际业务'
    },
    {
        iconId: '#icon-world', 
        title: '包容性极强',
        description: '接受群岛及第三世界国家开户及接纳受非洲地区境外汇款'
    },
    {
        iconId: '#icon-good-two', 
        title: '低成本维护',
        description: '日常账户管理费低且只需达到较低额度即享受门槛豁免权'
    },
    {
        iconId: '#icon-transaction', 
        title: '多币种畅行',
        description: '不受区域外汇管制，款项自由进出且多种货币可自由网银兑换'
    }
]

const faqs = ref([
    {
        question: "澳门华侨银行开户时间要多久？",
        answer: "在审核顺利完成后即可当天下户下卡。"
    },
    {
        question: "澳门华侨银行账户的额度是多少？",
        answer: "额度为100万，其中内地同名户转账限额：RMB 80,000 /天。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_ocbc_content2 .content1',
        '.mo_ocbc_content2 .content2',
        '.mo_ocbc_content2 .content3',
        '.mo_ocbc_content2 .content4',
        '.content_bank',
        '.mo_ocbc_content2 .content6'
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
