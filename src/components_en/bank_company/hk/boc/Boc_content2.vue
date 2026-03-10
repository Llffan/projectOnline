<template>
    <div class="boc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Bank of China (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/china.jpg" alt="Bank of China (Hong Kong)">
                    <div class="text">
                        <P>Bank of China (Hong Kong), a wholly-owned subsidiary of Bank of China and a full-licensed commercial bank, maintains a premier and solid position in the region. Corporate accounts benefit from unrestricted fund allocation, freedom from exchange controls, and preferential interest rates, providing essential support for overseas business expansion and tax optimization. Personal accounts facilitate global asset configuration, international property acquisition, and study abroad, significantly enhancing the efficiency of capital utilization.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with BOC Hong Kong
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
                        <div class="condition-item">HK company documents: CI, BR, NNC1/NAR1, Articles, amendment records, and company bar stamp</div>
                        <div class="condition-item">Identification: Director's ID card, Travel Permit, personal bank statements, and customs entry slip</div>
                        <div class="condition-item">Trade proof: 1 set each of procurement and sales contracts for the HK company</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Bank history: Latest 3-6 months' statements from other banks (if applicable)</div>
                        <div class="condition-item">Affiliates: Mainland company Business License, corporate bank statements, and 2 sets of procurement/sales contracts</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    BOC Hong Kong Account Opening Process
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
                    BOC Hong Kong FAQs
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
import '@/css_en/bank_company/hk/boc/Boc_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: 'Pre-Audit',
        description: 'Submit documentation for preliminary internal review by the bank.'
    },
    {
        iconId: '#icon-city', 
        title: 'Scheduling',
        description: 'Book an appointment at a BOC branch or designated location in Hong Kong.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Signing',
        description: 'Attend the branch for in-person identification and official document signing.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Final Approval',
        description: 'The bank\'s back-office conducts the final auditing and approval process.'
    },
    {
        iconId: '#icon-truck-line', 
        title: 'Dispatch',
        description: 'The bank mails the security token device and necessary PIN letters.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Establishment',
        description: 'Activate your account and online credentials to finalize the establishment.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-city', 
        title: 'Startup Friendly',
        description: 'Seamless account opening for new entities with streamlined documentation and no complex proofs.'
    },
    {
        iconId: '#icon-peoples', 
        title: 'Bundled Accounts',
        description: 'Corporate account establishment often includes the provision of a complementary personal account.'
    },
    {
        iconId: '#icon-message-search', 
        title: 'High Success Rate',
        description: 'Initial documentation review is conducted first to ensure a high probability of successful final approval.'
    }
]

const faqs = ref([
    {
        question: "Which types of entities are eligible for BOC Hong Kong accounts?",
        answer: "BOC Hong Kong primarily accepts applications from Hong Kong companies and individuals.\n\nNote: If a director or shareholder has any negative records with any BOC branch globally, the application will likely be rejected. Furthermore, entities involved with high-risk regions such as Iraq, Iran, or North Korea are also excluded."
    },
    {
        question: "How long is the processing time for BOC Hong Kong?",
        answer: "Approximately 6-8 weeks."
    },
    {
        question: "What are the account limits for BOC Hong Kong?",
        answer: "Standard configuration is 1 Million + 1 Million (Daily limit/Transfer limit); thresholds can be upgraded post-establishment."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.boc_content2 .content1',
        '.boc_content2 .content2',
        '.boc_content2 .content3',
        '.boc_content2 .content3_1',
        '.boc_content2 .content4',
        '.boc_content2 .content5',
        '.content_bank',
        '.boc_content2 .content6'
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
