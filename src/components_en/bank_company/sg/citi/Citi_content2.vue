<template>
    <div class="sg_citi_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Citibank Singapore
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/sg/花旗银行.png" alt="Citibank Singapore">
                    <div class="text">
                        <P>Singapore serves as a central hub for Citibank's excellent performance in the Asia-Pacific region, acting as one of its most advanced business and data centers, supporting numerous operations for over 60 countries. The integrated operations center maintains close ties with regional offices outside Singapore, covering multiple levels of banking business including: Asia Retail Banking and Credit Cards, International Personal Banking, Citi Private Bank (Asia and Global), Asia Global Transaction Services, and Asia CVC.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Citibank Singapore
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
                        <div class="condition-item">Bank statements for the past 3 months from affiliated companies (proving continuous business activity)</div>
                        <div class="condition-item">Certificate of Incumbency (COI) of affiliated company directors for previously operated overseas entities</div>
                        <div class="condition-item">Audited financial statements or related reports to demonstrate business scale</div>
                        <div class="condition-item">Company website information or directors' online credentials and professional backgrounds</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Reconciliation materials for the new Singapore office address or entity</div>
                        <div class="condition-item">Identification and certified documents for all directors and shareholders</div>
                        <div class="condition-item">Invoices, contracts, L/Cs, etc., to prove compliant business operations</div>
                        <div class="condition-item">Complete business plan or explanation of the initial source of wealth</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Citibank Singapore Account Opening Process
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
                    Citibank Singapore FAQs
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
import '@/css_en/bank_company/sg/citi/Citi_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Initial Document Review',
        description: 'Take photos of ID/passport and address proof, and fill out the KYC form for initial review.'
    },
    {
        iconId: '#icon-upload-one', 
        title: 'Signing & Mailing',
        description: 'The manager fills out the account form for you to sign; mail it to the bank along with notarized documents.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Telephone Confirmation',
        description: 'Once the bank receives the physical files, the manager will conduct a follow-up confirmation call.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Issuance & Activation',
        description: 'Upon successful opening, the physical card and token will be mailed. Download the app and activate to start using.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: 'Multi-Currency System',
        description: 'Supports multi-currency exchange and storage, with unlimited wire transfer privileges via online banking.'
    },
    {
        iconId: '#icon-city', 
        title: 'Remote Processing',
        description: 'Supports remote account opening without the need for cumbersome in-person meetings or video interviews.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Low Investment Threshold',
        description: 'Open a diversified stock account for free, making it easy to invest in US, HK, and SG stocks.'
    },
    {
        iconId: '#icon-shield', 
        title: 'User-Friendly Interface',
        description: 'The system provides an all-Chinese online banking and app interface (Citigold) for a user-friendly experience.'
    }
]

const faqs = ref([
    {
        question: "Can I conduct virtual currency transactions with Citibank Singapore?",
        answer: "Yes, as Singapore is relatively friendly towards this field."
    },
    {
        question: "Is it convenient to buy HK and US stocks with Citibank?",
        answer: "Of course, it follows the same process as standard outward transfers."
    },
    {
        question: "Will Citibank's all-English interface be inconvenient for me?",
        answer: "Not at all. One of Citibank's greatest advantages is that its online banking interface can be switched to Chinese, making it much more convenient and user-friendly."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_citi_content2 .content1',
        '.sg_citi_content2 .content2',
        '.sg_citi_content2 .content3',
        '.sg_citi_content2 .content4',
        '.content_bank',
        '.sg_citi_content2 .content6'
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
