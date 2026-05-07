<template>
    <div class="deutsche_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Deutsche Bank (Hong Kong Branch)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/Deutsche.png" alt="Deutsche Bank (Hong Kong Branch)">
                    <div class="text">
                        <P>Established in 1870 in Berlin, Germany, Deutsche Bank is a premier international financial services institution. It provides a comprehensive suite of products and services across commercial banking, investment banking, retail banking, transaction banking, and asset/wealth management to corporations, governments, institutional investors, SMEs, and individuals in over 70 countries. Deutsche Bank entered China in 1872 with its first overseas office in Shanghai. Today, Deutsche Bank (China) Co., Ltd. is a wholly-owned subsidiary headquartered in Beijing, with branches in major cities including Beijing, Shanghai, Guangzhou, Tianjin, Chongqing, and Qingdao.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Deutsche Bank Hong Kong
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
                    <div class="condition-item">Identification: Valid personal identification documents for all directors and shareholders.</div>
                    <div class="condition-item">Company Logs: Complete set of basic registration documents for the Hong Kong entity.</div>
                    <div class="condition-item">Trade Intent: 2 sets of documented letters of intent or prospective business contracts.</div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Deutsche Bank (Hong Kong Branch) Account Opening Process
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
                    Deutsche Bank (Hong Kong Branch) FAQs
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
import '@/css_en/bank_company/hk/deutsche/Deutsche_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Pre-Audit',
        description: 'Submit documentation for preliminary screening; internal review response typically provided within 2 weeks.'
    },
    {
        iconId: '#icon-city', 
        title: 'Certification',
        description: 'Once pre-audit is successful, the client signatures are collected on official account establishment forms.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Witnessing',
        description: 'Upon receipt of all completed physical forms, a formal video witnessing session is scheduled.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Fulfillment',
        description: 'Following successful witnessing, the bank account is typically issued within 3-4 weeks.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: 'Capital Autonomy',
        description: 'Freedom from foreign exchange controls allows for unrestricted global capital movement and zero tax on deposit interest.'
    },
    {
        iconId: '#icon-good-two', 
        title: 'Integrated Synergy',
        description: 'Synchronized use of offshore and domestic accounts significantly enhances overall operational and financial efficiency.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Rapid Flow',
        description: 'Facilitates real-time fund transfers with zero transit time and extremely low processing fees.'
    },
    {
        iconId: '#icon-protect', 
        title: 'Simplified Access',
        description: 'Manage both domestic and overseas capital flows directly from the Mainland, with no restrictions on deposit rates or types.'
    }
]

const faqs = ref([
    {
        question: "How long is the processing time for Deutsche Bank Hong Kong?",
        answer: "Approximately 6-8 weeks total."
    },
    {
        question: "What are the transaction limits for Deutsche Bank accounts?",
        answer: "Deutsche Bank provides essentially unlimited transaction volume for qualified accounts."
    },
    {
        question: "Is in-person attendance required for opening an account?",
        answer: "No. Formal video witnessing/interview protocols are available for remote account establishment."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.deutsche_content2 .content1',
        '.deutsche_content2 .content2',
        '.deutsche_content2 .content3',
        '.deutsche_content2 .content4',
        '.content_bank',
        '.deutsche_content2 .content6'
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
