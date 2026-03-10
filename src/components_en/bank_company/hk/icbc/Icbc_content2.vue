<template>
    <div class="icbc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to ICBC (Asia)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/ICBC.jpg" alt="ICBC (Asia)">
                    <div class="text">
                        <P>Industrial and Commercial Bank of China (Asia) Limited, or ICBC (Asia), provides specialized account opening witness services through ICBC branches in Mainland China. This allows eligible clients to establish an "Elite Club Account" or an "Integrated Account" with ICBC (Asia). These accounts serve as comprehensive financial hubs containing various sub-accounts, such as HKD Savings, HKD Current, USD Current, Multi-currency Savings, and Fixed Deposit accounts, facilitating efficient daily wealth management and global transaction processing.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with ICBC (Asia)
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
                    Corporate Account Opening Requirements
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">HK Corporate Logs: Full set of documents including Certificate of Incorporation (CR), Business Registration (BR), Incorporation Form (NNC1), Articles of Association, and company chops.</div>
                        <div class="condition-item">Identification: Original valid ID card for Mainland residents and a valid Travel Permit to Hong Kong and Macau.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Address Proof: Utility bills (water, electricity, gas) or bank statements issued within the last 3 months.</div>
                        <div class="condition-item">Operational & Travel Proof: Mainland company purchase/sales contracts, trade bank statements, and physical customs entry slips from Hong Kong.</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    ICBC (Asia) Account Opening Process
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
                    ICBC (Asia) FAQs
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
import '@/css_en/bank_company/hk/icbc/Icbc_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Document Dispatch',
        description: 'The participating Mainland branch organizes your documentation and dispatches it to ICBC (Asia) for processing.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Verification Call',
        description: 'Upon document audit, ICBC customer service will contact you via phone to verify application details.'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: 'Service Activation',
        description: 'Online and telephone banking services are typically activated on the second business day following successful verification.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Card Receipt',
        description: 'Physical bank cards are dispatched and typically received within 7-10 business days for immediate use.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: 'Strong Institutional Roots',
        description: 'As the flagship Hong Kong branch of Industrial and Commercial Bank of China, it offers unmatched trust and stability for Mainland-based clients.'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: 'Seamless Remittances',
        description: 'Transfer funds between Mainland ICBC and ICBC (Asia) with zero handling fees, no documentation requirements, and instantaneous settlement.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Direct Equity Access',
        description: 'Wealth management accounts provide direct participation in the Hong Kong stock market, bypassing the need for separate local brokerage accounts.'
    }
]

const faqs = ref([
    {
        question: "How do I download the ICBC (Asia) mobile banking application?",
        answer: "Search for \"ICBC Mobile Banking\" or \"ICBC (Asia)\" in your mobile device's official App Store or Google Play Store."
    },
    {
        question: "What should I do if my ICBC (Asia) account password is forgotten or locked?",
        answer: "Please bring your original ID card to any Mainland ICBC branch that supports ICBC (Asia) witness services to complete a password reset application form."
    },
    {
        question: "How long is the processing time for ICBC (Asia) account opening?",
        answer: "The primary audit takes approximately one week (expedited options may be available). Following the in-person interview/witnessing, account establishment is typically finalized within 1-3 weeks."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.icbc_content2 .content1',
        '.icbc_content2 .content2',
        '.icbc_content2 .content3',
        '.icbc_content2 .content4',
        '.content_bank',
        '.icbc_content2 .content6'
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
