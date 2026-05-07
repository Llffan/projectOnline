<template>
    <div class="bea_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Bank of East Asia (Hong Kong)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/east_asia.jpg" alt="Bank of East Asia (Hong Kong)">
                    <div class="text">
                        <P>Established in 1918, The Bank of East Asia (BEA) has a storied century-long history and is listed on the HKEX as one of Hong Kong's three largest local banks. BEA is dedicated to providing comprehensive commercial, personal, and wealth management services to clients in Hong Kong, Mainland China, and international markets. Renowned for its reputation in Mainland China, BEA opened its first overseas office in Shanghai as early as 1920 and now maintains over 130 service points across the Mainland, Macau, and Taiwan.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with BEA Hong Kong
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
                        <div class="condition-item">HK company documents: CI, BR, NNC1/NAR1, company seals, and shares amendment records (if any)</div>
                        <div class="condition-item">Trade readiness: Two sets of intended business contracts for the HK company</div>
                        <div class="condition-item">Affiliates: Beneficial owner's Mainland company Business License and latest 6 months' bank statements</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Mainland trade proof: 2 sets each of procurement/sales contracts, corresponding VAT invoices, and Bills of Lading</div>
                        <div class="condition-item">Identification: Clear scans of ID cards and Passports for all directors/shareholders, plus latest 6 months' personal bank statements</div>
                        <div class="condition-item">Completion of Bank KYC survey forms</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    BEA Hong Kong Account Opening Process
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
                    BEA Hong Kong FAQs
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
import '@/css_en/bank_company/hk/bea/Bea_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-audit', 
        title: 'Pre-Audit',
        description: 'Submit documentation to the bank for preliminary review by the account manager.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Mainland Interview',
        description: 'Schedule and attend an in-person witnessing session at a designated Mainland branch.'
    },
    {
        iconId: '#icon-award-line', 
        title: 'Processing',
        description: 'Complete the formalities; wait 4-6 weeks for the arrival of online banking security tokens.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Activation',
        description: 'Successfully activate your online credentials and account for immediate use.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: 'Competitive Fees',
        description: 'If the average monthly balance is 10,000 HKD, the management fee is only 100 HKD.'
    },
    {
        iconId: '#icon-phone-call', 
        title: 'Token-Free Banking',
        description: 'Direct mobile binding ensures seamless online banking without the need for physical security tokens.'
    },
    {
        iconId: '#icon-city', 
        title: 'Extensive Witnessing',
        description: 'Witnessing services available in Beijing, Shanghai, Guangzhou, Shenzhen, Dongguan, Zhuhai, Hangzhou, Xiamen, Fuzhou, and Xi\'an.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Fast Turnaround',
        description: 'Standard account opening formalities are typically completed within 4-6 weeks.'
    }
]

const faqs = ref([
    {
        question: "What should I keep in mind during the BEA interview?",
        answer: "1. Be punctual for the appointment.\n2. Maintain a natural and cooperative communication flow with the manager.\n3. Common potential bank inquiries include:\n   A. Business nature (Oil, coal, and jewelry may be rejected).\n   B. Primary industry (Investment-heavy shells may be rejected).\n   C. Trade countries (Sanctioned logic: North Korea, Iran, etc. are not accepted).\n   D. Projected annual turnover."
    },
    {
        question: "How long is the processing time for BEA Hong Kong?",
        answer: "Approximately 6-8 weeks (4-6 weeks for initial account issuance followed by activation)."
    },
    {
        question: "How should I maintain my BEA account post-opening?",
        answer: "1. Never process payments for third parties; BEA strictly prohibits underground money exchange. Retain all trade contracts and proof of funds.\n2. Prioritize corporate-to-corporate transactions. Utilize L/Cs to verify trade status.\n3. Avoid frequent, large-sum consolidated cash deposits/withdrawals.\n4. Maintain a positive balance to avoid management fee arrears.\n5. Ensure regular activity; long-term dormancy may lead to account closure.\n6. Keep contact details updated to ensure you receive mandatory bank investigation forms."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.bea_content2 .content1',
        '.bea_content2 .content2',
        '.bea_content2 .content3',
        '.bea_content2 .content4',
        '.content_bank',
        '.bea_content2 .content6'
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
