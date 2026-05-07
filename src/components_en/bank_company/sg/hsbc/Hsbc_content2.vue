<template>
    <div class="sg_hsbc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to HSBC Singapore
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/sg/汇丰银行.png" alt="HSBC Singapore">
                    <div class="text">
                        <P>HSBC is one of the oldest banks established in Singapore, offering a wide range of banking and financial services. These include retail banking and wealth management; commercial, investment, and private banking; insurance; legacy and trustee services; and securities and capital market services, catering to the banking needs of multinational corporations, local businesses, private banking clients, institutions, and retail customers.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with HSBC Singapore
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

            <!-- 3. Required Documents -->
            <div class="content3">
                <div class="title">
                    Required Documents for Corporate Accounts
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Singapore Certificate of Incorporation</div>
                        <div class="condition-item">Singapore Company Constitution</div>
                        <div class="condition-item">Scanned copies of ID cards and passports of Singaporean and domestic representatives/shareholders</div>
                        <div class="condition-item">Bank statements for the past 3 months of both domestic and Singaporean companies</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Supply chain contracts and B/Ls of Singaporean and domestic affiliated companies</div>
                        <div class="condition-item">Business license of domestic affiliated companies</div>
                        <div class="condition-item">Bank statements for the past 6 months of affiliated companies, directors, and shareholders</div>
                        <div class="condition-item">Complete KYC</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    HSBC Singapore Account Opening Process
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

            <!-- 5. Why Choose Us -->
            <ChooseUs />

            <!-- Cooperative Banks -->
            <SG_Cooperative_Bank class="content_bank" />

            <!-- 6. Frequently Asked Questions -->
            <div class="content6">
                <div class="title">
                    HSBC Singapore FAQs
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
import '@/css_en/bank_company/sg/hsbc/Hsbc_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Initial Review',
        description: 'Initial review usually takes 2-3 working days.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Bank Consultation',
        description: 'The bank will inquire via email; please provide timely responses regarding business matters.'
    },
    {
        iconId: '#icon-city', 
        title: 'General Account',
        description: 'Schedule an appointment to open a general account for the domestic company.'
    },
    {
        iconId: '#icon-upload-one', 
        title: 'Postal Processing',
        description: 'Documents are mailed to HSBC Singapore for final processing.'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Activation Notice',
        description: 'Receive account activation notification in approximately 6 weeks.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Issuance & Setup',
        description: 'Online banking tokens and chequebooks are mailed about 2 weeks after initial activation.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: 'Free Payments',
        description: 'Freely send and receive multiple major foreign currencies with no foreign exchange limits.'
    },
    {
        iconId: '#icon-good-two', 
        title: 'Simple & Efficient',
        description: 'Streamlined documentation requirements and fast account opening turnaround.'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: 'Fewer Restrictions',
        description: 'Flexible usage with a physical card; real-time cross-border transfer capabilities.'
    },
    {
        iconId: '#icon-world', 
        title: 'Large Selection',
        description: 'Access a wide choice of stocks and funds across HK, US, and SG markets.'
    }
]

const faqs = ref([
    {
        question: "Which bank in Singapore is the easiest to open an account with?",
        answer: "Account opening at Singaporean banks is generally very simple. Unlike traditional HK accounts, there's no need to visit a physical branch; the entire process is handled via video, and your data is not stored domestically."
    },
    {
        question: "How long does it take to open an account with HSBC Singapore?",
        answer: "Usually around 5-6 weeks."
    },
    {
        question: "What currencies can be opened with HSBC Singapore?",
        answer: "Singaporean bank accounts are typically multi-currency. Besides USD and SGD, they include common currencies such as HKD, AUD, JPY, EUR, and GBP."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_hsbc_content2 .content1',
        '.sg_hsbc_content2 .content2',
        '.sg_hsbc_content2 .content3',
        '.sg_hsbc_content2 .content4',
        '.content_bank',
        '.sg_hsbc_content2 .content6'
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
