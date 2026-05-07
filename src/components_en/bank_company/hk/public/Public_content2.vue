<template>
    <div class="public_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Public Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/public.png" alt="Public Bank (Hong Kong)">
                    <div class="text">
                        <P>For enterprises, an offshore bank account is essential for the unrestricted allocation of capital, bypass of foreign exchange controls, and maximization of fund utility. Such accounts offer competitive interest rates compared to domestic options, high flexibility for deposits and withdrawals, and significant advantages for large-scale transaction management. Furthermore, they facilitate the optimization of corporate tax structures and provide vital support for international business expansion. As a prominent licensed financial institution, Public Bank (Hong Kong) provides a full suite of commercial assistance and financial remittance services.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Public Bank
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
                        <div class="condition-item">Governance Logs: Certificate of Incorporation (CI) and the latest Business Registration (BR).</div>
                        <div class="condition-item">Statutory Forms: Annual Return (NAR1) or Incorporation Form (NNC1), along with the complete Articles of Association (Note: AAB must correspond correctly with the registered office address).</div>
                        <div class="condition-item">Operational Proof: Documented evidence of active business operations or formal letters of intent for overseas trade.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Identification: Valid personal identification for all directors and shareholders.</div>
                        <div class="condition-item">Travel Credentials: Valid Travel Permits for all participating directors and shareholders.</div>
                        <div class="condition-item">Entry Proof: Physical customs entry slips generated during the trip to Hong Kong for the interview.</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Public Bank (Hong Kong) Account Opening Process
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
                    Public Bank (Hong Kong) FAQs
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
import '@/css_en/bank_company/hk/public/Public_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Pre-Audit',
        description: 'Submit digital copies of all required documents for preliminary organization and screening by the bank manager.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Scheduling',
        description: 'Upon successful pre-audit, we will facilitate the formal appointment for your in-person interview in Hong Kong.'
    },
    {
        iconId: '#icon-city', 
        title: 'Interview',
        description: 'Attend the designated Public Bank branch in Hong Kong at the scheduled time to complete the formal signing.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Activation',
        description: 'Successfully complete the establishment; the account number is typically issued the same day, with online credentials following within 2 weeks.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-earth', 
        title: 'Zero Restrictions',
        description: 'Incredibly inclusive approach with no age or regional restrictions for qualified applicants.'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: 'Fee Exemptions',
        description: 'Bypass cumbersome entry barriers with zero account maintenance fees and no large mandatory deposit requirements.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Instant Issuance',
        description: 'Upon successful interview at the branch, the formal account establishment documentation is handed to the client immediately.'
    },
    {
        iconId: '#icon-award-line', 
        title: 'Global Reputation',
        description: 'Public Bank (Hong Kong) maintains a high level of commercial prestige and institutional trust worldwide.'
    },
    {
        iconId: '#icon-world', 
        title: 'Capital Freedom',
        description: 'Hong Kong accounts are exempt from foreign exchange controls, allowing for the unrestricted movement of capital.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Efficient Banking',
        description: 'Comprehensive online banking support ensures that transactions and settlements are handled with extreme speed.'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Multi-Currency Hub',
        description: 'Direct support for multiple global currencies and currency exchange, perfectly suited for international commerce.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Rapid Delivery',
        description: 'The bank account is issued on the day of the interview, with full digital access activated within approximately 2 weeks.'
    }
]

const faqs = ref([
    {
        question: "What are the fees and requirements for opening an account with Public Bank (Hong Kong)?",
        answer: `Registration Search Fee: HKD 300\nAccount Opening Fee: HKD 800\nOnline Banking Limit: Transfers up to HKD 1.5 Million per day (using a digital credential system without a physical token).\n\nFinancial Compliance: Typically requires participation in a standard savings-linked insurance or wealth management product (approx. USD 2,000 for a 5-year term).`
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.public_content2 .content1',
        '.public_content2 .content2',
        '.public_content2 .content3',
        '.public_content2 .content4',
        '.content_bank',
        '.public_content2 .content6'
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
