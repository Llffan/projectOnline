<template>
    <div class="communications_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Bank of Communications (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/communications.jpg" alt="Bank of Communications (Hong Kong)">
                    <div class="text">
                        <P>Bank of Communications (Hong Kong) Limited commenced operations in January 2018 as a wholly-owned subsidiary of Bank of Communications, operating 44 branches across Hong Kong. As a full-licensed commercial bank recognized by Fitch, Moody's, and S&P with a stable outlook, BOCOM (HK) provides a comprehensive suite of financial and wealth management services. Corporate accounts enjoy unrestricted capital allocation, freedom from exchange controls, and tax optimization; personal accounts facilitate global asset configuration and international property acquisition, ensuring highly efficient capital operations.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with BOCOM Hong Kong
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
                        <div class="condition-item">Identification: Personal ID and Address Proof (Utility bills valid within 3 months) for all directors and shareholders</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Mainland Affiliate: Business License for any associated companies (if available)</div>
                        <div class="condition-item">No Mainland Entity: Personal asset proof (Property certificates and bank deposit proof exceeding 1 Million)</div>
                        <div class="condition-item">HK Business Proof: 1-2 sets of sales and supply contracts, or documented letters of intent/agreements</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Bank of Communications Hong Kong Account Opening Process
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
                    Bank of Communications Hong Kong FAQs
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
import '@/css_en/bank_company/hk/communications/Communications_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-audit', 
        title: 'Pre-Audit',
        description: 'Submit your documentation for preliminary internal review by the bank.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Interview',
        description: 'Schedule and attend an in-person signing session at a designated branch.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Establishment',
        description: 'Upon final approval, your account is established and the security credentials are issued.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-shield', 
        title: 'Inclusive Acceptance',
        description: 'Open to considering applications from clients previously declined by institutions such as Hang Seng or HSBC.'
    },
    {
        iconId: '#icon-peoples', 
        title: 'Broad Client Base',
        description: 'As a major institution, we provide high-tier services catering to both premium and mass-market users.'
    },
    {
        iconId: '#icon-bank-line', 
        title: 'No Exchange Control',
        description: 'Enjoy a local Hong Kong account with free capital allocation, bypassing restrictive foreign exchange controls.'
    },
    {
        iconId: '#icon-world', 
        title: 'Global Trade Hub',
        description: 'Extensive global network facilitates seamless international payment receipt, ideal for export-oriented businesses.'
    }
]

const faqs = ref([
    {
        question: "What are the common reasons for rejection at BOCOM Hong Kong?",
        answer: "1. Negative records with any BOCOM branch or subsidiary globally.\n2. Incomplete or inconsistent documentation.\n3. Trading with OFAC sanctioned countries (e.g., Iran, North Korea, Syria, Cuba).\n4. Sensitive keywords in the company name (e.g., Finance, Coal, Jewelry, Oil).\n5. Inconsistent or vague answers during the interview regarding business purpose or source of funds.\n6. Failure to pass the 'Customer Due Diligence' (CDD) audit due to aging documentation or unverifiable details."
    },
    {
        question: "How long is the processing time for BOCOM Hong Kong?",
        answer: "Approximately 2-3 weeks."
    },
    {
        question: "How soon can I use the account after it is opened?",
        answer: "Upon successful establishment, the bank typically notifies the client via email. Once you receive your account number and online banking activation credentials, you can immediately begin receiving funds and conducting transfers."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.communications_content2 .content1',
        '.communications_content2 .content2',
        '.communications_content2 .content3',
        '.communications_content2 .content3_1',
        '.communications_content2 .content4',
        '.communications_content2 .content5',
        '.content_bank',
        '.communications_content2 .content6'
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
