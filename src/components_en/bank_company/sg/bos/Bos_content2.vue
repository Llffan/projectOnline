<template>
    <div class="sg_bos_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Bank of Singapore
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/sg/新加披银行.png" alt="Bank of Singapore">
                    <div class="text">
                        <P>Bank of Singapore is a private bank headquartered in Singapore and a wholly-owned subsidiary of OCBC, the second largest bank in Southeast Asia. Formerly known as ING Asia Private Bank, it was acquired by OCBC in 2009. Its business primarily focuses on Asia and the Middle East. Beyond exclusive private banking services, clients can access a comprehensive range of products and services through its parent company, OCBC, including various commercial solutions, financing, and brokerage services.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Bank of Singapore
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
                        <div class="condition-item">Complete set of Hong Kong company documents (CI, Articles, etc.)</div>
                        <div class="condition-item">Identification of all directors and shareholders (ID cards, Passport)</div>
                        <div class="condition-item">Personal profile and detailed business cards of directors and shareholders (if any)</div>
                        <div class="condition-item">Bank statements for the past 3 months and business license of domestic affiliated or holding companies</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Purchase orders and corresponding payment records from domestic affiliated companies (1-2 sets)</div>
                        <div class="condition-item">Sales contracts and B/L or payment records signed with overseas clients (2 sets)</div>
                        <div class="condition-item">Screenshots or proof of email correspondence with overseas merchants</div>
                        <div class="condition-item">Supporting evidence for overseas or family-controlled systems (proof of kinship)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Bank of Singapore Account Opening Process
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
                    Bank of Singapore FAQs
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
import '@/css_en/bank_company/sg/bos/Bos_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Documentation & Profiling',
        description: 'Provide full sets of account opening letters for company operations and affiliated entities for review and profiling by the agent.'
    },
    {
        iconId: '#icon-upload-one', 
        title: 'Bank Internal Review',
        description: 'Submit complete files to Bank of Singapore for initial compliance assessment by legal and risk control teams.'
    },
    {
        iconId: '#icon-communication', 
        title: 'In-Person Signing',
        description: 'Upon initial approval, directors and shareholders are required to visit Bank of Singapore in person for signing.'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Issuance & Online Banking',
        description: 'Expect to receive the formal account password letter in approximately 3-4 weeks after in-person signing.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: 'Ultimate Fund Transfer Privileges',
        description: 'Singapore\'s sovereign financial mechanism is free from foreign exchange controls, facilitating free global trade settlements.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Efficient Multi-Currency Exchange',
        description: 'Offers a wide selection of major global currencies with highly competitive exchange rates and low handling fees.'
    },
    {
        iconId: '#icon-world', 
        title: 'Streamlined Online Direct Link',
        description: 'Leverages OCBC\'s parent technology and advanced digital online banking environment for real-time transaction access.'
    },
    {
        iconId: '#icon-shield', 
        title: 'International Private Bank Standards',
        description: 'Business account information is protected by strict private banking standards and backed by high credit ratings.'
    }
]

const faqs = ref([
    {
        question: "What are the deposit requirements for opening an account with Bank of Singapore?",
        answer: "Bank of Singapore accounts are typically multi-currency. For SGD accounts, a deposit of 3,000 SGD is required within one week of opening. For USD accounts, a daily average balance of 8,000 USD is required one week after opening. If requirements are not met, a management fee applies."
    },
    {
        question: "What should be noted for Bank of Singapore account maintenance?",
        answer: "1. Maintain an active account status and ensure sufficient safe deposits.\n2. Avoid anti-money laundering triggers such as illegal fund channels or frequent large cash transactions.\n3. Avoid business transactions with high-risk sensitive countries (e.g., Congo, Iran).\n4. For actual income, ensure audit reports and tax filings are provided and cooperate with due diligence forms like annual reviews."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_bos_content2 .content1',
        '.sg_bos_content2 .content2',
        '.sg_bos_content2 .content3',
        '.sg_bos_content2 .content4',
        '.content_bank',
        '.sg_bos_content2 .content6'
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
