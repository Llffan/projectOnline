<template>
    <div class="sg_boc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Bank of China (Singapore)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/sg/中国银行.png" alt="Bank of China Singapore">
                    <div class="text">
                        <P>Established in 1936, Bank of China Singapore Branch is one of the longest-standing Chinese banks in Singapore, holding a Qualifying Full Bank (QFB) license issued by the Monetary Authority of Singapore (MAS). As the hub for BOC in Southeast Asia, the branch serves as a major market maker for RMB futures on the Singapore Exchange (SGX) and strategic functions such as commodity financing and Asia bond distribution, with business radiating across global markets. In 2025, it joined hands with Sinopec to successfully launch a cross-border bank-enterprise direct link project in Sri Lanka, marking a major breakthrough for Chinese banks in the field of fund management in South Asia.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Bank of China (Singapore)
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
                        <div class="condition-item">Complete set of Singapore company registration documents (COI, Articles, etc.)</div>
                        <div class="condition-item">Detailed Bizfile commercial profile records of the company</div>
                        <div class="condition-item">Identification of all directors and shareholders (ID cards both sides, Passport)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Stable and clear personal bank statements of directors and shareholders for the past 6 months</div>
                        <div class="condition-item">Contact phone and email for each director; confirmation of currencies and signing of original account opening forms</div>
                        <div class="condition-item">Procurement and sales contracts for domestic or affiliated parties (including letters of intent)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Bank of China (Singapore) Account Opening Process
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
                    Bank of China (Singapore) FAQs
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
import '@/css_en/bank_company/sg/boc/Boc_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Review Preparation',
        description: 'Clients prepare and provide corporate and director identity documents and business records for initial review by the agent and bank.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Sign Agreement',
        description: 'Once verification is completed, arrange for 2 directors to sign the relevant bank account opening forms and select currencies.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Interview & Mailing',
        description: 'Original signed forms must be mailed to Singapore headquarters, and a remote video interview must be scheduled.'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Full Completion',
        description: 'The process takes about 3-4 weeks. Once all reviews are completed, the bank issues the account notice and online banking info.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: 'RMB Settlement Hub',
        description: 'Consistently ranks first in Singapore\'s offshore RMB clearing volume, supporting BOC dual-currency debit cards.'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: 'Full-Chain Products',
        description: 'Covers cross-border wire transfers, L/Cs, and structured derivatives for trade financing and currency hedging.'
    },
    {
        iconId: '#icon-shield', 
        title: 'Bank-Enterprise Direct Link',
        description: 'Independently developed technical link supporting real-time data access and cross-border fund compliance transfers.'
    },
    {
        iconId: '#icon-world', 
        title: 'Multi-Currency Network',
        description: 'Accounts support 15 major currencies with T+0 remittance via SWIFT GPI for USD, EUR, JPY and more.'
    }
]

const faqs = ref([
    {
        question: "Does BOC Singapore require in-person witnessing?",
        answer: "No, video interview account opening is supported. You can consult our specialists for guidance on interview precautions."
    },
    {
        question: "Can I open an account with BOC Singapore without an affiliated company?",
        answer: "Yes. If there's no affiliated company, we can provide customized solutions and planning. Please consult our specialists for details."
    },
    {
        question: "How long does it take to open an account with BOC Singapore?",
        answer: "Generally, the account opening process takes about 3-4 weeks. Progress can vary based on the completeness of documents and the bank's review intensity; consult our specialists for tracking assistance."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_boc_content2 .content1',
        '.sg_boc_content2 .content2',
        '.sg_boc_content2 .content3',
        '.sg_boc_content2 .content4',
        '.content_bank',
        '.sg_boc_content2 .content6'
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
