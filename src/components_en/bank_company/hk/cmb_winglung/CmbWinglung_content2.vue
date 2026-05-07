<template>
    <div class="cmb_winglung_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to CMB Wing Lung Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/merchants_wing_lung.jpg" alt="CMB Wing Lung Bank (Hong Kong)">
                    <div class="text">
                        <P>CMB Wing Lung Bank (formerly Wing Lung Bank) has been a subsidiary of China Merchants Bank since 2009. It provides expansive services across retail and corporate banking, credit, securities, futures, wealth management, and trusts, operating 41 branches domestically and overseas. Corporate entities benefit from unrestricted capital allocation, freedom from exchange controls, and preferential interest rates, while personal accounts facilitate global wealth management and international education, significantly enhancing capital utilization efficiency.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with CMB Wing Lung Bank
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
                        <div class="condition-item">HK Entity: CI, BR, NNC1/NAR1, M&A, amendment records, and company bar stamp</div>
                        <div class="condition-item">Identification: Director ID card, Travel Permit, and customs entry slip</div>
                        <div class="condition-item">Trade Proof: 2 sets each of procurement and sales contracts for the HK company</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Personal (SME/Individual): Original ID Card</div>
                        <div class="condition-item">Personal (SME/Individual): Valid Travel Permit/Passport</div>
                        <div class="condition-item">Capital: Initial minimum deposit of 50,000 HKD</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    CMB Wing Lung Bank Account Opening Process
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
                    CMB Wing Lung Bank FAQs
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
import '@/css_en/bank_company/hk/cmb_winglung/CmbWinglung_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: 'Pre-Audit',
        description: 'Submit electronic versions of your documents for preliminary screening.'
    },
    {
        iconId: '#icon-city', 
        title: 'Scheduling',
        description: 'Book an appointment at a CMB Wing Lung branch or designated signature location.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Interview',
        description: 'Attend the designated location for mandatory in-person signing of the required forms.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Processing',
        description: 'The bank\'s back-office auditing department conducts the final application review.'
    },
    {
        iconId: '#icon-truck-line', 
        title: 'Dispatch',
        description: 'The bank dispatches the security token device and PIN credentials by mail.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Activation',
        description: 'Successfully activate your account and online banking credentials to complete the process.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-bank-transfer', 
        title: 'Cost Effective',
        description: 'Features low cross-border remittance fees; the UnionPay debit card supports ATM withdrawals in Mainland China.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Zero Investment Bundling',
        description: 'Low entry threshold with no mandatory requirements to purchase investment or insurance products.'
    },
    {
        iconId: '#icon-bank-line', 
        title: 'Capital Autonomy',
        description: 'Freedom from foreign exchange controls, allowing for flexible and unrestricted global capital movement.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Remote Witnessing',
        description: 'No strict savings mandatory; supports remote video opening and witnessing services within Mainland China.'
    }
]

const faqs = ref([
    {
        question: "What is the daily transfer limit for CMB Wing Lung Bank?",
        answer: "The default daily limit is 5,000,000 HKD. If established via specific wealth management programs, this can be upgraded to as high as 500 Million."
    },
    {
        question: "How long is the processing time for CMB Wing Lung Bank?",
        answer: "Approximately 8-10 weeks total (5 weeks for initial processing and 4-5 weeks for account activation after document receipt)."
    },
    {
        question: "Are there account management fees for CMB Wing Lung Bank?",
        answer: "If the average monthly balance is below 10,000 HKD, a management fee of 100 HKD per month will be charged."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.cmb_winglung_content2 .content1',
        '.cmb_winglung_content2 .content2',
        '.cmb_winglung_content2 .content3',
        '.cmb_winglung_content2 .content3_1',
        '.cmb_winglung_content2 .content4',
        '.cmb_winglung_content2 .content5',
        '.content_bank',
        '.cmb_winglung_content2 .content6'
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
