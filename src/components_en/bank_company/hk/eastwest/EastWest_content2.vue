<template>
    <div class="eastwest_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to East West Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/eastwest.jpg" alt="East West Bank (Hong Kong)">
                    <div class="text">
                        <P>The Hong Kong branch of East West Bank is a fully licensed institution authorized by the Hong Kong Monetary Authority (HKMA). It provides comprehensive banking services to clients in Hong Kong, Mainland China, and major global markets, including commercial banking, settlement, FOREX trading, wealth management, and securities investment. Headquartered in Southern California, East West Bank has positioned itself as the premier bridge between East and West, becoming one of the largest Chinese-focused commercial banks in the United States with over 120 locations globally.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with East West Bank Hong Kong
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
                        <div class="condition-item">HK company documents: CR, BR, NNC1, NAR1, and Articles</div>
                        <div class="condition-item">Identification: ID card and Passport for all directors/shareholders</div>
                        <div class="condition-item">Trade proof: 1 set each of sales and procurement contracts for the HK company</div>
                        <div class="condition-item">Account survey (KYC) completion</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Affiliates: Business License of associated Mainland company (Mandatory if exists)</div>
                        <div class="condition-item">Personal records: Latest 3 months' bank statements</div>
                        <div class="condition-item">Professional Curriculum Vitae (CV) of the directors</div>
                        <div class="condition-item">Operational proof: Screenshot of company address on Baidu/Google Maps as verification</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    East West Bank Hong Kong Account Opening Process
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
                    East West Bank Hong Kong FAQs
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
import '@/css_en/bank_company/hk/eastwest/EastWest_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Pre-Audit',
        description: 'Submit electronic copies of required documents for preliminary review by our managers.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Scheduling',
        description: 'Upon pre-approval, we schedule the mandatory in-person interview in Hong Kong.'
    },
    {
        iconId: '#icon-city', 
        title: 'Interview',
        description: 'Attend the designated branch for final verification and document signing.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Finalization',
        description: 'Establish the account and complete all remaining banking formalities.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-exchange-cny-line', 
        title: 'Efficient Entry',
        description: 'Features streamlined documentation requirements and industry-leading processing speed.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Accessible Criteria',
        description: 'Lower thresholds for establishment without mandatory large-sum wealth management mandates.'
    },
    {
        iconId: '#icon-world', 
        title: 'System Compatibility',
        description: 'Fully compatible with diverse corporate structures from Hong Kong, the USA, Cayman, and BVI.'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Global Inflows',
        description: 'Enjoy free movement of capital with unrestricted international remittance capabilities.'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: 'Robust Connectivity',
        description: 'Equipped with comprehensive online banking for easy management of global financial settlements.'
    },
    {
        iconId: '#icon-protect', 
        title: 'Platform Payouts',
        description: 'Supports withdrawal from Amazon and other major platforms, ideal for e-commerce and specialized trades.'
    },
    {
        iconId: '#icon-good-two', 
        title: 'Dedicated Support',
        description: 'Features specialized Chinese-speaking support teams to ensure clear communication and premium service.'
    }
]

const faqs = ref([
    {
        question: "What is the fee structure for East West Bank Hong Kong?",
        answer: "HK Company Search Fee: 10,000 HKD\nNon-HK Local Registry Search Fee: 5,000 USD\n(Fees are prepaid; refunds can be requested if the application is unsuccessful)\n\nPrerequisites:\n1. Minimum initial deposit of 500,000 USD\n2. No specific online transfer limits; transaction fees average 30-40 USD per wire.\nNote: Witnessing can also be arranged in Beijing and Shanghai."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.eastwest_content2 .content1',
        '.eastwest_content2 .content2',
        '.eastwest_content2 .content3',
        '.eastwest_content2 .content4',
        '.content_bank',
        '.eastwest_content2 .content6'
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
