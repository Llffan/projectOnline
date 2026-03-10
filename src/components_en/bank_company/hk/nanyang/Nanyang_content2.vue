<template>
    <div class="nanyang_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Nanyang Commercial Bank
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/NCB.jpg" alt="Nanyang Commercial Bank">
                    <div class="text">
                        <P>
                            Nanyang Commercial Bank (NCB) was founded in Hong Kong on December 15, 1949, by Chuang Shih-ping, and is currently a subsidiary of China Cinda Asset Management Co., Ltd. Adhering to the service motto of "Customer First, Courtesy and Respect" and the principle of "Reputation First, Service Uppermost," NCB is dedicated to serving clients globally from its base in Hong Kong. The bank provides convenient, rapid, efficient, and professional services through various channels, operating 41 branches in Hong Kong along with multiple Investment and Business Centers. Internationally, it has a presence in San Francisco and maintains a wholly-owned subsidiary, Nanyang Commercial Bank (China) Limited, on the Mainland.
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with NCB Hong Kong
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
                        <div class="condition-item">Affiliates: Documentation for any associated companies</div>
                        <div class="condition-item">HK Entity: Complete set of Hong Kong company registration documents</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Trade proof: 2 sets of procurement and sales contracts</div>
                        <div class="condition-item">Personal: Original ID and travel/passport documents for all directors</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Nanyang Commercial Bank Account Opening Process
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
                    Nanyang Commercial Bank FAQs
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
import '@/css_en/bank_company/hk/nanyang/Nanyang_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: 'Step 1',
        description: 'Submit electronic versions of required documents for preliminary pre-audit.'
    },
    {
        iconId: '#icon-phone-call', 
        title: 'Step 2',
        description: 'Schedule an appointment at a designated Nanyang branch on the Mainland.'
    },
    {
        iconId: '#icon-agreement', 
        title: 'Step 3',
        description: 'Attend the branch as required for official in-person witnessing.'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Step 4',
        description: 'The Mainland branch dispatches the physical documents to Hong Kong headquarters.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Step 5',
        description: 'The bank\'s headquarters conduct the final auditing and approval.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Step 6',
        description: 'Upon successful audit, the account is issued and established for use.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: 'Convenient Payment',
        description: 'Enables highly efficient receipt and payment for international fund transfers.'
    },
    {
        iconId: '#icon-world', 
        title: 'Real-Time Settlement',
        description: 'Features unrestricted real-time settlement for major global currencies.'
    },
    {
        iconId: '#icon-protect', 
        title: 'Financial Stability',
        description: 'Backed by significant institutional strength ensuring high security and trust.'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: 'Cost Efficiency',
        description: 'Eligible for various fee exemptions, significantly reducing management costs.'
    }
]

const faqs = ref([
    {
        question: "Does the absence of a physical bank card affect account usage?",
        answer: "No, it does not. The digital account provides all the necessary functionalities for modern banking operations."
    },
    {
        question: "Can I open an account with NCB without a passport?",
        answer: "No. A valid passport and appropriate visa/travel permit are mandatory secondary identification documents for NCB account establishment."
    },
    {
        question: "Is it convenient to move funds in and out of an NCB account?",
        answer: "Yes, it is very convenient. It supports EDDA and FPS for rapid deposits/transfers, featuring real-time arrival with zero handling fees."
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.nanyang_content2 .content1',
        '.nanyang_content2 .content2',
        '.nanyang_content2 .content3',
        '.nanyang_content2 .content3_1',
        '.nanyang_content2 .content4',
        '.nanyang_content2 .content5',
        '.content_bank',
        '.nanyang_content2 .content6'
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
