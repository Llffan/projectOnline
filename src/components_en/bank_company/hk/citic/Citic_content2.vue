<template>
    <div class="citic_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to China CITIC Bank International
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/china_citic.jpg" alt="China CITIC Bank International">
                    <div class="text">
                        <P>China CITIC Bank was established in 1987 as one of the earliest emerging commercial banks formed during China's reform and opening-up period. It was the first commercial bank in China to participate in financing across both domestic and international financial markets. Renowned globally for achieving numerous "firsts" in modern Chinese financial history, it has contributed significantly to China's economic development. In April 2007, CITIC Bank achieved a simultaneous A+H share listing on the Shanghai Stock Exchange and the Hong Kong Stock Exchange.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with CITIC Bank Hong Kong
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
                        <div class="condition-item">Detailed business nature of the HK company</div>
                        <div class="condition-item">Target markets: Primary countries of suppliers and buyers</div>
                        <div class="condition-item">Operational locations and physical presence details</div>
                        <div class="condition-item">Product descriptions and unique features</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Professional experience and previous history of company operation</div>
                        <div class="condition-item">Complete company documentation and Director/Shareholder profiles</div>
                        <div class="condition-item">Official registration certificates (CI, BR, etc.)</div>
                        <div class="condition-item">Personal History: Latest 3 months' bank statements for all directors and shareholders</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    China CITIC Bank International Account Opening Process
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
                    China CITIC Bank International FAQs
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
import '@/css_en/bank_company/hk/citic/Citic_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-city', 
        title: 'Step 1',
        description: 'Select any preferred branch for the application process.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Step 2',
        description: 'Visit the bank with company documents and personal IDs for self-inspection and payment of the 150 HKD search fee. Identity verification is conducted at this stage.'
    },
    {
        iconId: '#icon-agreement', 
        title: 'Step 3',
        description: 'The bank notifies the applicant to sign the formal account opening forms. Account issuance follows in approximately 3 weeks.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Step 4',
        description: 'The total processing time for account establishment is approximately one month.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-world', 
        title: 'Onshore/Offshore Synergy',
        description: 'Open both onshore and offshore accounts without exchange controls, allowing for free capital allocation.'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        title: 'Global Settlement',
        description: 'Facilitates efficient payment settlement for international trade operations.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Free Conversion',
        description: 'Seamlessly convert between all major global currencies with ease.'
    },
    {
        iconId: '#icon-diamond', 
        title: 'Simplified Operations',
        description: 'Features user-friendly daily operations and streamlined trade financing with international institutions.'
    }
]

const faqs = ref([
    {
        question: "Can I attend the witnessing for CITIC Bank Hong Kong on weekends?",
        answer: "Witnessing sessions generally need to be scheduled during standard business days (weekdays)."
    },
    {
        question: "Does CITIC Bank HK provide a physical bank card?",
        answer: "Yes, a physical UnionPay debit card is provided, which supports withdrawals from Mainland China ATMs. The daily limit is 20,000 HKD and does not consume the 50,000 USD annual foreign exchange quota."
    },
    {
        question: "What is the minimum initial deposit for CITIC Bank HK?",
        answer: "The minimum initial deposit for account activation is 30,000 HKD."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.citic_content2 .content1',
        '.citic_content2 .content2',
        '.citic_content2 .content3',
        '.citic_content2 .content3_1',
        '.citic_content2 .content4',
        '.citic_content2 .content5',
        '.consultant_box',
        '.content_bank',
        '.citic_content2 .content6'
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
