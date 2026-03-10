<template>
    <div class="sg_uob_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to UOB Bank Singapore
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/大华银行.png" alt="UOB Bank Singapore">
                    <div class="text">
                        <P>United Overseas Bank (UOB), founded in 1935, is a leading bank in Asia with a global network of more than 500 branches and offices in 19 countries and territories across Asia-Pacific, Europe, and North America. In Asia, UOB operates through its head office in Singapore and banking subsidiaries in China, Indonesia, Malaysia, Thailand, and Vietnam, as well as branches and offices across the region. Today, UOB is rated among the world's top banks: Aa1 by Moody's and AA- by both S&P Global Ratings and Fitch Ratings.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with UOB Bank Singapore
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
                        <div class="condition-item">Business Registration Certificate</div>
                        <div class="condition-item">Certificate of Incumbency for directors/shareholders (not older than 6 months)</div>
                        <div class="condition-item">Valid passports for all directors, shareholders, and account controllers</div>
                        <div class="condition-item">Proof of address for all directors/shareholders/controllers (e.g., utility bills)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Company Constitution (M&A)</div>
                        <div class="condition-item">Detailed business profile or profile description</div>
                        <div class="condition-item">Reason for opening an account specifically in Singapore</div>
                        <div class="condition-item">List of top 5 suppliers, including company names and office addresses</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    UOB Bank Singapore Account Opening Process
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
                    UOB Bank Singapore FAQs
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
import '@/css_en/bank_company/sg/uob/Uob_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Document Preparation',
        description: 'Prepare the full set of required documents and submit them to our consultants.'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Initial Audit',
        description: 'Wait for the UOB team to conduct a background check and verify the application.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Video Appointment',
        description: 'Once passed, an online video interview will be scheduled at your convenience.'
    },
    {
        iconId: '#icon-city', 
        title: 'Account Issuance',
        description: 'After the interview, the bank will finalize the account and issue your credentials.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-bank-transfer', 
        title: 'Multi-Currency Flow',
        description: 'Supports flexible multi-currency exchange and international payment settlements.'
    },
    {
        iconId: '#icon-shield', 
        title: 'Maximum Security',
        description: 'World-class credit ratings ensure the absolute safety of your capital and assets.'
    },
    {
        iconId: '#icon-finance', 
        title: 'High Interest Rates',
        description: 'Offers highly competitive fixed-deposit rates for superior wealth growth.'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Investment Choice',
        description: 'Access a diverse suite of investment products to meet long-term appreciation goals.'
    }
]

const faqs = ref([
    {
        question: "What should I keep in mind during the UOB video interview?",
        answer: "1. Be punctual and maintain a natural, communicative tone with the bank manager. Do not show hesitation or withhold information.\n2. Likely questions: What is your business nature? Which industries are you involved in? Which countries are your primary trading partners? What is your expected annual revenue?\n3. Be prepared to explain why you chose to register and open an account in HK or Singapore."
    },
    {
        question: "How long does the UOB account opening process take?",
        answer: "Approximately 4-5 weeks."
    },
    {
        question: "Can I open an account with UOB Singapore remotely?",
        answer: "Yes, remote account opening is fully supported."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_uob_content2 .content1',
        '.sg_uob_content2 .content2',
        '.sg_uob_content2 .content3',
        '.sg_uob_content2 .content4',
        '.content_bank',
        '.sg_uob_content2 .content6'
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
