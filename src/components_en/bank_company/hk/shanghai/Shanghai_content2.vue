<template>
    <div class="shanghai_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Shanghai Commercial Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/ShangHai.png" alt="Shanghai Commercial Bank (Hong Kong)">
                    <div class="text">
                        <P>Shanghai Commercial Bank Ltd. was incorporated in Hong Kong in November 1950. Over more than half a century of growth, it has established a robust network of over 50 branches across Hong Kong, Mainland China, and international markets including the United Kingdom (London) and the United States (New York, San Francisco), as well as strategic presences in Shanghai and Shenzhen.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Shanghai Commercial Bank
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
                    Account Opening Requirements
                </div>
                <div class="intro">
                    <div class="left">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0037ff7e;">Corporate Documentation</div>
                        <div class="condition-item">Corporate Governance: Certificate of Incorporation (CI), any subsequent name change certificates, and a valid Business Registration (BR).</div>
                        <div class="condition-item">Statutory Forms: Memorandum and Articles of Association.</div>
                        <div class="condition-item">Share Transfer Proof (if applicable): For companies with recent share transfers, provide details on business nature, product categories, annual turnover/financial statements, and primary supplier/client invoices.</div>
                        <div class="condition-item">Director Profiles: Detailed professional background, mobile number, and email address for all directors.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0037ff7e;">Personal Documentation</div>
                        <div class="condition-item">Identification: Valid personal ID card for the applicant.</div>
                        <div class="condition-item">Travel Credentials: Original Passport or valid Travel Permit.</div>
                        <div class="condition-item">Address Proof (Supplementary): For paired corporate services, please provide a valid utility bill or bank statement as proof of residence.</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Shanghai Commercial Bank (Hong Kong) Process
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
            <HK_Cooperative_Bank class="content_bank" />

            <!-- 6. Frequently Asked Questions -->
            <div class="content6">
                <div class="title">
                    Shanghai Commercial Bank FAQs
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
import '@/css_en/bank_company/hk/shanghai/Shanghai_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Compilation',
        description: 'Organize and compile all necessary corporate or personal identification and supporting evidence.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Submission',
        description: 'Submit all relevant documentation to the bank for an initial internal pre-audit.'
    },
    {
        iconId: '#icon-city', 
        title: 'Interview',
        description: 'Once prehistoric approval is granted, attend the designated bank branch for the formal in-person interview.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Fulfillment',
        description: 'Successfully complete the final audit and receive your activated account credentials.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: 'Trade Autonomy',
        description: 'Seamlessly interface with global trade partners with unrestricted capital flows and zero foreign exchange controls.'
    },
    {
        iconId: '#icon-world', 
        title: 'Global Mobility',
        description: 'Leverage a Hong Kong account to easily facilitate international investments, trade settlements, and personal consumption.'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: 'Physical Liquidity',
        description: 'Successfully established accounts include a designated cash card and cheque book for convenient physical withdrawals in Hong Kong.'
    }
]

const faqs = ref([
    {
        question: "How long is the processing time for Shanghai Commercial Bank (Hong Kong)?",
        answer: "Typically, the account is issued within 2-3 weeks after the successful in-person interview."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.shanghai_content2 .content1',
        '.shanghai_content2 .content2',
        '.shanghai_content2 .content3',
        '.shanghai_content2 .content4',
        '.content_bank',
        '.shanghai_content2 .content6'
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
