<template>
    <div class="sg_ocbc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to OCBC Bank Singapore
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/sg/华侨银行.png" alt="OCBC Bank Singapore">
                    <div class="text">
                        <P>OCBC Bank is the longest-established local bank in Singapore, formed in 1932 through the merger of three major Chinese banks, the earliest of which was founded in 1912. In terms of asset size, OCBC is currently the second-largest financial services group in Southeast Asia and one of the highest-rated banks in the world, with ratings of Aa1 from Moody's, AA- from S&P, and AA- from Fitch. Recognized for its broad financial strength and stability, OCBC has been consistently ranked among the "World's Top 50 Safest Banks" by Global Finance magazine and was named "Best Managed Bank in Singapore and Asia-Pacific" by The Asian Banker.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with OCBC Bank Singapore
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
                        <div class="condition-item">Original Passport - Company signatories, directors, and shareholders</div>
                        <div class="condition-item">Original Proof of Residential Address (e.g., National ID Card)</div>
                        <div class="condition-item">Business License of the domestic affiliated company</div>
                        <div class="condition-item">Domestic operations proof (last 3 mos): 'Contracts/Invoices + B/Ls' for 2-3 suppliers & buyers (must match bank statements)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Domestic corporate bank statements for the past 3-6 months</div>
                        <div class="condition-item">Two letters of intent or draft contracts for the Singapore company</div>
                        <div class="condition-item">Completed KYC due diligence questionnaire</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    OCBC Bank Singapore Account Opening Process
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
                    OCBC Bank Singapore FAQs
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
import '@/css_en/bank_company/sg/ocbc/Ocbc_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Initial Review',
        description: 'Collect account data; the bank prepares application forms and mails them for signatures.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Law Firm Witnessing',
        description: 'Schedule a law firm session to witness and sign documents with original IDs.'
    },
    {
        iconId: '#icon-city', 
        title: 'Mailing for Final Review',
        description: 'The lawyer mails witnessed documents back to OCBC Singapore for final approval.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Activation & Setup',
        description: 'Credentials are sent to you; complete a same-name transfer to fully activate the account.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: 'High Privacy Priority',
        description: 'Effectively ensures the highest standards of security and confidentiality for your assets.'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Remote Support',
        description: 'Process everything online without traveling; flexible and client-centric workflow.'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: 'Multi-Currency Flow',
        description: 'Seamlessly convert between major foreign currencies for global trade efficiency.'
    },
    {
        iconId: '#icon-world', 
        title: 'Full Chinese Interface',
        description: 'Manage your wealth with an intuitive, full-Chinese online banking and mobile app.'
    }
]

const faqs = ref([
    {
        question: "Do I need to visit OCBC Singapore in person? Is the setup complicated?",
        answer: "No, you don't need to visit Singapore. It can be conveniently handled online from your city. If you need a walkthrough of the specifics, our team is here to help."
    },
    {
        question: "How long does it typically take to open an OCBC Singapore account?",
        answer: "Approximately 6 weeks."
    },
    {
        question: "Are there any restrictions on transferring funds from OCBC back home?",
        answer: "OCBC Singapore accounts have no limits on outbound global transfers, though receipts back home may be subject to local regulations."
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
