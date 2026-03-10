<template>
    <div class="za_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to ZA Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/ZA.png" alt="ZA Bank (Hong Kong)">
                    <div class="text">
                        <P>ZA Bank was established by ZhongAn International, the Hong Kong-based international subsidiary of the pioneering Chinese insurtech giant ZhongAn Online P&C Insurance Co., Ltd. Awarded a banking license by the Hong Kong Monetary Authority on March 27, 2019, ZA Bank is currently Hong Kong's leading fully digital bank, delivering its comprehensive suite of services primarily through online channels. As a member of the Hong Kong Deposit Protection Scheme, eligible deposits are protected up to a maximum of HKD 500,000 per depositor. ZA Bank adheres to the same stringent regulatory standards as traditional banks, ensuring international levels of institutional governance and security.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with ZA Bank
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
                        <div class="condition-item">Director Proof (Mainland): Front and back clear copies of individual ID card and a photograph of the director holding their ID.</div>
                        <div class="condition-item">Director Proof (Other Regions): Valid Passport and a photograph holding the Passport (additional visa and residence proof required for non-Mainland/HK/Macau/Taiwan residents).</div>
                        <div class="condition-item">Corporate Registration: Business Registration (BR), Certificate of Incorporation (CI), Incorporation Form (NNC1) or latest Annual Return (NAR1), and Board Resolutions.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Individual Shareholders (Holdings ≥25%): Mainland residents provide ID and holding-photo; other regions provide Passport and holding-photo.</div>
                        <div class="condition-item">Corporate Shareholders (Mainland): If a shareholder is a Mainland company, provide its officially valid Business License.</div>
                        <div class="condition-item">Corporate Shareholders (HK): If a shareholder is a Hong Kong company, provide its full set of incorporation and registration documentation.</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    ZA Bank (Hong Kong) Account Opening Process
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
                    ZA Bank (Hong Kong) FAQs
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
import '@/css_en/bank_company/hk/za/Za_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Submission',
        description: 'Prepare and securely submit the complete set of digital documentation for the Hong Kong entity.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Auditing',
        description: 'The bank performs a detailed background audit and institutional qualification review.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Activation',
        description: 'Upon successful audit, the account is established and ready for immediate digital activation.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-airplane', 
        title: 'Instant Digital Setup',
        description: 'Experience lightning-fast establishment in as little as one business day, with a 100% online submission process.'
    },
    {
        iconId: '#icon-good-two', 
        title: 'Startup Friendly',
        description: 'Actively supports emerging enterprises; entities established for less than 1 year are fully eligible to apply.'
    },
    {
        iconId: '#icon-world', 
        title: 'Web3 Ready',
        description: 'The preferred banking partner for Web3 and blockchain-related ventures, facilitating rapid entry into innovative markets.'
    }
]

const faqs = ref([
    {
        question: "What are the fees associated with a ZA Bank corporate account?",
        answer: `Registration Search Fee: HKD 300 - 1,000\nAccount Opening Fee: HKD 1,200 - 10,000\n\nIncoming Remittance (TT): HKD 50 per transaction\nOutgoing Remittance (TT): HKD 100 per transaction\n\nOutgoing FPS (Faster Payment System):\nBelow HKD 1M: HKD 1\nHKD 1M or above: HKD 10\nBelow CNY 1M: CNY 1\nCNY 1M or above: CNY 10\n\nIncoming FPS: 0.6% of the transaction amount.`
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.za_content2 .content1',
        '.za_content2 .content2',
        '.za_content2 .content3',
        '.za_content2 .content4',
        '.content_bank',
        '.za_content2 .content6'
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
