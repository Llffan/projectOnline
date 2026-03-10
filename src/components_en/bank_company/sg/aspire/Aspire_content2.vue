<template>
    <div class="sg_aspire_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Aspire Bank Singapore
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/aspire.png" alt="Aspire Bank Singapore">
                    <div class="text">
                        <P>Aspire Bank Singapore is the first digital bank in Southeast Asia and a representative of digital banking in Singapore, founded by a co-founder of Lazada, the region's largest e-commerce platform. Aspire primarily serves as a financial management service provider focusing on small and medium-sized enterprises (SMEs), specialized in providing convenient and fast banking services for SMEs in Southeast Asia and globally. Its vision is to reinvent the SME financial experience, dedicated to promoting financial inclusion and helping business owners achieve long-term growth through same-day loans, transparent pricing, and flexible digital tools.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Aspire Bank Singapore
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
                        <div class="condition-item">Complete set of company registration documents (first three pages of Articles require signing)</div>
                        <div class="condition-item">Identification of all directors and shareholders (Passport and ID cards, etc.)</div>
                        <div class="condition-item">Business license or other proof of domestic affiliated companies (if applicable)</div>
                        <div class="condition-item">Singapore-based director's ID card and identity authentication document vault</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Aspire Bank KYC and account opening letter files must be exclusively provided</div>
                        <div class="condition-item">Witnessed signatures for account opening letters and related documents (provided by agent)</div>
                        <div class="condition-item">Detailed business description and core product list of the company</div>
                        <div class="condition-item">Real-name authentication (selfie with passport via an exclusive link for directors)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Aspire Bank Singapore Account Opening Process
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
                    Aspire Bank Singapore FAQs
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
import '@/css_en/bank_company/sg/aspire/Aspire_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: 'Online Submission',
        description: 'Directly submit KYC identity documents and company registration materials online once the plan is confirmed.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Sign Agreement',
        description: 'After an initial qualification assessment, sign a valid account opening agreement on the digital platform.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Payment & Verification',
        description: 'Complete service fees and deposit payments (supports wire transfer, credit card, or digital currency systems).'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Formal Approval',
        description: 'Once payment is received and online identity verification is completed, the account will be issued in about 2 weeks.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-city', 
        title: 'Remote Convenience',
        description: 'Purely online digital bank design with relatively simple documentation and an extremely fast process.'
    },
    {
        iconId: '#icon-shield', 
        title: 'Strict MAS Regulation',
        description: 'Directly regulated by the Monetary Authority of Singapore (MAS), funds are held in Tier 1 trust accounts for security.'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Minimal Cost Structure',
        description: 'Customized for SMEs with no hidden bundle packages, extremely low base fees, and no additional charges.'
    },
    {
        iconId: '#icon-world', 
        title: 'Digital Banking Experience',
        description: 'Southeast Asia\'s first all-digital bank, supporting API integration and 24/7 purely online management.'
    }
]

const faqs = ref([
    {
        question: "Is the money in Singapore Aspire safe?",
        answer: "Aspire is regulated by the Monetary Authority of Singapore (MAS), complying with the Payment Services Act (No. 2 of 2019). All funds are held in Tier 1 trust accounts in Singapore, completely separating client assets from company assets."
    },
    {
        question: "What is the difference between Singapore Aspire and conventional banks?",
        answer: "All operations are conducted via our online platform without physical branch counters. Services focus on savings and flexible transfers, and currently do not include traditional services like wealth management or L/C issuance."
    },
    {
        question: "Can I apply for a Visa/Mastercard card with an Aspire account?",
        answer: "Yes, you can apply for both physical and virtual cards immediately, which is very convenient for clients with frequent expenditures and cross-regional consumption."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_aspire_content2 .content1',
        '.sg_aspire_content2 .content2',
        '.sg_aspire_content2 .content3',
        '.sg_aspire_content2 .content4',
        '.content_bank',
        '.sg_aspire_content2 .content6'
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
