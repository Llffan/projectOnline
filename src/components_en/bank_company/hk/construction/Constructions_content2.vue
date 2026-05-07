<template>
    <div class="constructions_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to China Construction Bank (Asia)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/construction.png" alt="China Construction Bank (Asia)">
                    <div class="text">
                        <P>China Construction Bank (Asia) is CCB's flagship institution in Hong Kong, boasting a vast client base and a marketing network that spans the entire country. CCB maintains close business ties with numerous large-scale enterprises. In 2016, it was ranked second globally by "The Banker," and in 2017, it placed 14th in the Brand Finance Global 500. With its formidable institutional strength, its offshore accounts facilitate unrestricted capital allocation and movement. Personal accounts are ideal for overseas property acquisition, international education, and comprehensive global wealth management.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with CCB (Asia)
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
                        <div class="condition-item">Business Registration Certificate (BR)</div>
                        <div class="condition-item">Certificate of Incorporation (CI)</div>
                        <div class="condition-item">Memorandum and Articles of Association (M&A)</div>
                        <div class="condition-item">Identification: Personal ID, valid Travel Permit, and customs entry record for all directors, shareholders, and authorized signatories</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Company Stamp (Horizontal)</div>
                        <div class="condition-item">Operational Proof: For Mainland affiliates or active entities, please provide the Business License and the latest 3 sets of trade documents (e.g., customs declarations, sales contracts, commercial invoices, packing lists, bills of lading).</div>
                        <div class="condition-item">Product descriptions, business objectives, etc. (if available)</div>
                        <div class="condition-item">Latest annual financial statements (if available)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    CCB (Asia) Account Opening Process
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
                    CCB (Asia) FAQs
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
                            {{ faq.answer }}
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
import '@/css_en/bank_company/hk/construction/Constructions_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: 'Pre-Audit',
        description: 'Submit relevant documentation for a preliminary internal review.'
    },
    {
        iconId: '#icon-city', 
        title: 'Scheduling',
        description: 'Book a specific appointment time at a designated CCB branch location.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Interview',
        description: 'Attend the designated location for formal in-person signing and witnessing.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Processing',
        description: 'The bank\'s back-office auditing department conducts the final application review.'
    },
    {
        iconId: '#icon-award-line', 
        title: 'Dispatch',
        description: 'The bank dispatches the security token device and PIN credentials by mail.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Activation',
        description: 'Successfully activate your account and online credentials to complete the establishment.'
    }
]

const advantage = [
    {
        iconId: '#icon-finance', 
        title: 'Low Management Fees',
        description: 'Competitive fee structures with exemptions available for maintaining modest balance thresholds.'
    },
    {
        iconId: '#icon-bank-line', 
        title: 'Capital Autonomy',
        description: 'Freedom from foreign exchange controls, allowing for unrestricted global capital inflow and outflow.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Tax Efficiency',
        description: 'Features high effective returns on deposits with minimal tax-related overhead.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Multi-Currency',
        description: 'Direct support for various global currencies with seamless conversion for international trade.'
    }
]

const faqs = ref([
    {
        question: "I received notification that my online banking is enabled. Can I start receiving funds?",
        answer: "Yes. The account is technically active once assigned; enabling online banking simply allows you to log in and manage it digitally."
    },
    {
        question: "How long is the processing time for CCB (Asia)?",
        answer: "Initial audit takes about one week (expedited options available). Generally, account activation occurs 1-3 weeks after the in-person interview."
    },
    {
        question: "What should I be mindful of after my CCB account is successfully opened?",
        answer: "1. Avoid transactions with sanctioned countries (e.g., Iran, Sudan, Cuba). 2. Avoid large-scale cash deposits and immediate full withdrawals. 3. Maintain the minimum balance to avoid maintenance fees. 4. Keep the account active; accounts dormant for over 3 months risk closure. 5. Ensure your contact information is up to date and respond promptly to bank inquiries. 6. For active businesses, serving an annual audit report is recommended."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.constructions_content2 .content1',
        '.constructions_content2 .content2',
        '.constructions_content2 .content3',
        '.constructions_content2 .content3_1',
        '.constructions_content2 .content4',
        '.constructions_content2 .content5',
        '.content_bank',
        '.constructions_content2 .content6'
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
