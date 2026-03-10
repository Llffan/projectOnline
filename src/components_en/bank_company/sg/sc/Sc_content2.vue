<template>
    <div class="sg_sc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Standard Chartered Singapore
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/渣打银行.png" alt="Standard Chartered Singapore">
                    <div class="text">
                        <P>Standard Chartered Bank Singapore is part of the Standard Chartered International Banking Group and has a 160-year history in the country. In October 1999, it was among the first international banks to receive a Qualifying Full Bank (QFB) license, acknowledging the Group's long-term business commitment to the nation. Standard Chartered Singapore is one of the highest-rated banks globally: S&P rated A, Moody's rated AA3, and Fitch rated A.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Standard Chartered Singapore
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
                        <div class="condition-item">Scanned copies of registration documents for BVI, HK, Cayman, and other overseas companies</div>
                        <div class="condition-item">Business licenses and related materials of affiliated mainland or overseas companies</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Details of all shareholders and directors with a stake of 10% or more</div>
                        <div class="condition-item">Fully completed KYC due diligence questionnaire</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Standard Chartered Singapore Account Opening Process
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
                    Standard Chartered Singapore FAQs
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
import '@/css_en/bank_company/sg/sc/Sc_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Online Pre-submission',
        description: 'Submit KYC and identification documents online for preliminary assessment after service confirmation.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Sign & Pay',
        description: 'Once eligibility is confirmed, sign the electronic agreement and complete the payment process.'
    },
    {
        iconId: '#icon-city', 
        title: 'Video Witnessing',
        description: 'A lawyer conducts identity verification and witnesses document signing via video link.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Setup & Activation',
        description: 'Signed documents are submitted to Standard Chartered for account setup and coordinated activation.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-bank-transfer', 
        title: 'Multi-Currency Account',
        description: 'Provides offshore accounts in various major currencies with excellent exchange rates.'
    },
    {
        iconId: '#icon-world', 
        title: 'No Exchange Control',
        description: 'Seamless global capital allocation with high freedom for inbound and outbound funds.'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Physical Card Support',
        description: 'Includes a physical card for global usage and convenient domestic ATM withdrawals.'
    },
    {
        iconId: '#icon-good-two', 
        title: 'Simple Operation',
        description: 'Easy-to-use online banking for straightforward daily account management.'
    }
]

const faqs = ref([
    {
        question: "Do I need to fill out any forms for a Standard Chartered account?",
        answer: "Only one official application form requires your signature. We handle all the data entry and tedious administrative work for you."
    },
    {
        question: "How long does it take for a Standard Chartered account to be opened?",
        answer: "Typically between 3-4 weeks."
    },
    {
        question: "Are there any restrictions on remitting funds back from Standard Chartered?",
        answer: "Standard Chartered Singapore offers unrestricted global transfers and remittances."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_sc_content2 .content1',
        '.sg_sc_content2 .content2',
        '.sg_sc_content2 .content3',
        '.sg_sc_content2 .content4',
        '.content_bank',
        '.sg_sc_content2 .content6'
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
