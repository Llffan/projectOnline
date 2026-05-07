<template>
    <div class="chonghing_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Chong Hing Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/chong_xing.jpg" alt="Chong Hing Bank (Hong Kong)">
                    <div class="text">
                        <P>Established in Hong Kong in 1948, Chong Hing Bank was listed on the Hong Kong Stock Exchange in 1994 (Stock Code: 01111). The bank and its subsidiaries provide comprehensive commercial banking and financial services to individuals and corporate clients, including HKD and foreign currency deposits, credit, FOREX trading, wealth management, investment, securities, insurance, and MPF products. Currently, Chong Hing Bank operates over 30 branches in Hong Kong, with additional branches in Guangzhou, Beijing, Shenzhen, Shanghai, Shantou, and Macau.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Chong Hing Bank Hong Kong
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
                    Chong Hing Bank Account Opening Requirements
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="section-title">Corporate Documentation</div>
                        <div class="condition-item">Business Registration Certificate (BR) and Certificate of Incorporation (CI)</div>
                        <div class="condition-item">Incorporation Form (NNC1) / Annual Return (NAR1), and Articles of Association</div>
                        <div class="condition-item">Identification: ID cards and Passports/Travel Permits for all directors and shareholders</div>
                        <div class="condition-item">Address Proof: Utility bills or property certificates for all directors and shareholders</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="section-title">Business & Affiliate Evidence</div>
                        <div class="condition-item">Personal History: Latest 3 months' bank statements for all directors and shareholders</div>
                        <div class="condition-item">Trade Proof: 2 sets of business contracts with Customs declarations/Bills of Lading, OR 2 sets of intended contracts with a Business Plan</div>
                        <div class="condition-item">HK Entity Proof: Bank statements (if any), audit reports, or payment slips for the HK company</div>
                        <div class="condition-item">Affiliates: Details of any associated companies and completion of KYC forms</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Chong Hing Bank Hong Kong Account Opening Process
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
                    Chong Hing Bank Hong Kong FAQs
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
                            <div v-if="faq.isHtml" v-html="faq.answer"></div>
                            <div v-else>{{ faq.answer }}</div>
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
import '@/css_en/bank_company/hk/chonghing/Chonghing_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: 'Step 1',
        description: 'Submit documentation; a video KYC session is scheduled approximately one week later.'
    },
    {
        iconId: '#icon-message-success', 
        title: 'Step 2',
        description: 'Upon successful video KYC, in-person witnessing in Mainland China is arranged within another week.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Step 3',
        description: 'The account is issued approximately 6 weeks after witnessing; the entire process takes 6-8 weeks.'
    }
]

const advantage = [
    {
        iconId: '#icon-finance', 
        title: 'Convenient Settlement',
        description: 'Full support for Letters of Credit (L/C) and bank cheques for seamless inflows and outflows.'
    },
    {
        iconId: '#icon-message-success', 
        title: 'Video Witnessing',
        description: 'Complete the witnessing process via video, eliminating the need to travel to Hong Kong.'
    },
    {
        iconId: '#icon-good-two', 
        title: 'Accessible Thresholds',
        description: 'Features a more accessible entry threshold compared to major institutions like HSBC, Hang Seng, or SC.'
    },
    {
        iconId: '#icon-world', 
        title: 'Cross-Border Synergy',
        description: 'Branch network covers major GBA cities, offering seamless cross-border financial connectivity.'
    }
]

const faqs = ref([
    {
        question: "What is the daily transfer limit for Chong Hing Bank?",
        answer: "The standard daily limit is equivalent to 1,000,000 HKD."
    },
    {
        question: "In which cities is Chong Hing Bank witnessing available?",
        answer: "Witnessing services are available in Shanghai, Shenzhen, Guangzhou, Dongguan, and Foshan."
    },
    {
        question: "How long is the processing time for Chong Hing Bank?",
        answer: "Approximately 6 weeks."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.chonghing_content2 .content1',
        '.chonghing_content2 .content2',
        '.chonghing_content2 .content3',
        '.chonghing_content2 .content3_1',
        '.chonghing_content2 .content4',
        '.chonghing_content2 .content5',
        '.consultant_box',
        '.content_bank',
        '.chonghing_content2 .content6'
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
