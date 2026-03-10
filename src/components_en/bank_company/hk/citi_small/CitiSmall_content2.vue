<template>
    <div class="citi_small_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Citibank Small (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/citibank2.jpg" alt="Citibank Small (Hong Kong)">
                    <div class="text">
                        <P>Citibank Small (Hong Kong) branch is part of Citibank (Hong Kong), providing comprehensive services including wealth management, investment, credit cards, insurance, and loans. As a subsidiary of Citigroup operating in Hong Kong since 1902, it was the first foreign bank to enter the market. Citibank (Hong Kong) Limited is a locally incorporated licensed institution, currently maintaining 48 branches across Hong Kong Island, Kowloon, the New Territories, and Macau, tailored to provide accessible services for small enterprises and individuals.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Citibank Small Hong Kong
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
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0037ff7e;">If Holding Mainland Entity</div>
                        <div class="condition-item">HK company docs: CI, BR, NNC1/NAR1, M&A</div>
                        <div class="condition-item">HK business proof: 2 sets each of procurement/sales contracts and Bills of Lading, latest 3 months' bank statements (if any), and 1 set of intended contracts</div>
                        <div class="condition-item">Identification: Director/Shareholder ID card + Travel Permit</div>
                        <div class="condition-item">Mainland entity proof: Business License + 3-6 months' bank statements + 2 sets each of procurement/sales contracts and Bills of Lading</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0037ff7e;">Without Mainland Entity</div>
                        <div class="condition-item">HK company documented records: Full set (CI, BR, NNC1/NAR1, Articles, amendment records, and bar stamp)</div>
                        <div class="condition-item">Identification: Director ID card, Travel Permit, customs entry slip, latest 3 months' bank statements, social security records, and Employment Contract (industry must align with HK company)</div>
                        <div class="condition-item">HK business proof: 1 set each of intended procurement/sales contracts, plus 3-6 months' bank statements (if available)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Citibank Small Hong Kong Account Opening Process
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
                    Citibank Small Hong Kong FAQs
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
import '@/css_en/bank_company/hk/citi_small/CitiSmall_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Pre-Audit',
        description: 'Submit electronic versions of your documents for preliminary internal screening.'
    },
    {
        iconId: '#icon-city', 
        title: 'Interview',
        description: 'Schedule an appointment at a designated location for the mandatory in-person signing.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Notification',
        description: 'Upon approval, the bank dispatches the security token device and PIN credentials by mail.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Establishment',
        description: 'Successfully activate your credentials to finalize the account establishment for use.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-world', 
        title: 'Multi-Currency Flex',
        description: 'Access 14 mainstream currency savings accounts including HKD, USD, GBP, JPY, and SGD.'
    },
    {
        iconId: '#icon-protect', 
        title: 'Resilient Onboarding',
        description: 'Accepts applications from e-commerce and bulk commodity sectors; handles trade with high-risk regions.'
    },
    {
        iconId: '#icon-good-two', 
        title: 'Fee Exemptions',
        description: 'Eligible for comprehensive management fee waivers and promotional periods with zero bank lookup charges.'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: 'Omni-Channel Flow',
        description: 'Full support for Letters of Credit (L/C), cheques, and unlimited-tier online banking transfers.'
    }
]

const faqs = ref([
    {
        question: "Does Citibank Small require specific turnover or mandatory settlements?",
        answer: "No specific turnover is required, and there are no mandatory currency settlement conditions."
    },
    {
        question: "What is the daily transfer limit for Citibank Small?",
        answer: "The limit is generally 1,000,000 HKD, making it ideal for companies with smaller transaction volume requirements."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.citi_small_content2 .content1',
        '.citi_small_content2 .content2',
        '.citi_small_content2 .content3',
        '.citi_small_content2 .content4',
        '.content_bank',
        '.citi_small_content2 .content6'
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
