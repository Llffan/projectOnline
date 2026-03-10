<template>
    <div class="citi_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Citibank (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/citibank.jpg" alt="Citibank (Hong Kong)">
                    <div class="text">
                        <P>Citibank (Hong Kong) is a leading financial institution providing a full spectrum of services, including wealth management, investment, credit cards, insurance, and loans. As the Hong Kong subsidiary of the Citigroup, it began operations in the region in 1902, making it the first foreign bank to establish a presence in Hong Kong. Citibank (Hong Kong) Limited is a locally incorporated licensed bank, currently operating 48 branches across Hong Kong Island, Kowloon, the New Territories, and Macau.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Citibank Hong Kong
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
                        <div class="condition-item">HK company documented records: CI, BR, NNC1/NAR1, Articles, amendment records, and company bar stamp</div>
                        <div class="condition-item">Trade readiness: 1 set each of procurement and sales contracts for the HK company</div>
                        <div class="condition-item">Identification: Director's ID card, Travel Permit, customs entry slip, and personal bank statements</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Banking history: Latest 3-6 months' statements from other financial institutions (if available)</div>
                        <div class="condition-item">Affiliates: Mainland or associated company Business License and corporate bank statements</div>
                        <div class="condition-item">Mainland trade proof: 2 sets of business contracts, invoices, transport docs, Bills of Lading, and customs declarations</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Citibank Hong Kong Account Opening Process
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
                    Citibank Hong Kong FAQs
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
import '@/css_en/bank_company/hk/citi/Citi_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Pre-Audit',
        description: 'Submit electronic versions of your documents for preliminary screening by the bank.'
    },
    {
        iconId: '#icon-city', 
        title: 'Interview',
        description: 'Schedule an appointment at a designated Citibank location for in-person signing.'
    },
    {
        iconId: '#icon-award-line', 
        title: 'Processing',
        description: 'Upon approval, the bank dispatches the security token device and PIN letters.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Completion',
        description: 'Successfully activate your account and online banking credentials to complete the process.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-exchange-cny-line', 
        title: 'Multi-Currency Hub',
        description: 'Seamlessly allocate capital across a comprehensive multi-currency account structure.'
    },
    {
        iconId: '#icon-good-two', 
        title: 'Broad Industry Scope',
        description: 'Accepts applications from specialized sectors including e-commerce, jewelry, commodities, and precious metals.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Fee Exemptions',
        description: 'Eligible for management fee waivers and promotional periods with zero bank search charges.'
    },
    {
        iconId: '#icon-world', 
        title: 'Risk Resilience',
        description: 'Capable of handling capital flows and trade transactions with high-risk or sensitive jurisdictions.'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Diverse Settlement',
        description: 'Supports extensive settlement methods including Letters of Credit (L/C) and bank cheques.'
    },
    {
        iconId: '#icon-protect', 
        title: 'Unlimited Trading',
        description: 'Features a high-tier online banking system with no transfer limits (unlimited) for large capital movement.'
    }
]

const faqs = ref([
    {
        question: "Does a Citibank account facilitate trading in HK and US stocks?",
        answer: "Yes, once established, you can fund your brokerage accounts using the same seamless process as any regular outbound transfer."
    },
    {
        question: "How long is the processing time for Citibank Hong Kong?",
        answer: "Approximately 8 weeks total (4 weeks for initial paperwork and 5 weeks for final establishment after document receipt)."
    },
    {
        question: "What are the transfer limits for Citibank Hong Kong?",
        answer: "Citibank offers 'Super Accounts' which feature effectively unlimited transfer thresholds."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.citi_content2 .content1',
        '.citi_content2 .content2',
        '.citi_content2 .content3',
        '.citi_content2 .content4',
        '.content_bank',
        '.citi_content2 .content6'
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
