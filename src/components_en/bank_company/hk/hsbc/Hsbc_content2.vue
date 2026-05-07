<template>
    <div class="hsbc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to HSBC (Hong Kong)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/HSBC.jpg" alt="HSBC (Hong Kong)">
                    <div class="text">
                        <P>HSBC is a leading international bank, formally known as The Hongkong and Shanghai Banking Corporation Limited. The name "HSBC" is an abbreviation of its English title, and in Chinese, it is known as "Huifeng" (汇丰), which conceptually translates to "Abundant Remittances," reflecting its historical roots and primary financial focus.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with HSBC Hong Kong
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
                    HSBC Hong Kong Account Opening Requirements
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="section-title">Corporate Documentation Required</div>
                        <div class="condition-item">HK Entity: Complete set of incorporation and registration files.</div>
                        <div class="condition-item">Identification: Personal valid ID for directors and shareholders.</div>
                        <div class="condition-item">Business Collateral: Relevant business proof or letters of intent.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="section-title">Mainland Affiliate (Shared Shareholders)</div>
                        <div class="condition-item">Affiliate Info: Business license, bank statements, and brochures/website link.</div>
                        <div class="condition-item">Trade Proof: 1-2 sets of full trade documents (Purchase/Sales contracts, matching orders, bills of lading, and payment/communication history).</div>
                        <div class="condition-item">Special Cases: Associated HK entities require bank statements/Annual Returns; family-owned links require relationship proof.</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    HSBC Hong Kong Account Opening Process
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
                    HSBC Hong Kong FAQs
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
import '@/css_en/bank_company/hk/hsbc/Hsbc_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: 'Phase I',
        description: 'Prepare and compile all documentation required for the account opening audit.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Phase II',
        description: 'Documents undergo a 2-week internal audit; upon success, an in-person witnessing session is scheduled at a designated Tier-1 city branch.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Phase III',
        description: 'Account establishment is finalized 3-4 weeks later (Includes HKD 1M limit, physical card, and security token device).'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: 'Remittance Autonomy',
        description: 'Unrestricted receipt and payment of global currencies with zero foreign exchange cap limits.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Concierge Service',
        description: 'Dedicated relationship managers provide personalized account monitoring, significantly reducing the risk of unexpected closure.'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: 'Streamlined Efficiency',
        description: 'Features relatively straightforward documentation requirements and rapid processing timelines.'
    },
    {
        iconId: '#icon-world', 
        title: 'Premier Global Brand',
        description: 'As a world-renowned institution with an expansive global network, it enhances corporate prestige and facilitates seamless cross-border trade.'
    }
]

const faqs = ref([
    {
        question: "What should I consider before applying for an HSBC account?",
        answer: `
            <p>1. Check if the company name contains sensitive terms like "International," "Group," "Holding," "Capital," or "Investment," as these may require additional substantiation.</p>
            <p>2. Ensure all supporting documentation is fully prepared to avoid any delays or multi-visit requirements.</p>
            <p>3. If you have a Mainland affiliate, be prepared to provide its business license and relevant trade proof (Invoices, Contracts, B/L).</p>
            <p>4. Verify that your core client base does not include high-risk or sanctioned jurisdictions.</p>
            <p>5. Most applicants open a "Business Integrated Account," which includes savings, checking, multi-currency, and online banking capabilities.</p>
            <p>6. Prepared approximately HKD 10,000 in cash to facilitate the initial account activation deposit.</p>
        `,
        isHtml: true
    },
    {
        question: "How long is the processing time for HSBC Hong Kong?",
        answer: "Approximately 6-8 weeks total (with a 4-week primary auditing phase).",
        isHtml: false
    },
    {
        question: "Does HSBC provide a physical card and security token?",
        answer: "Yes. Successfully established accounts include a physical bank card and a security token device (encoder).",
        isHtml: false
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.hsbc_content2 .content1',
        '.hsbc_content2 .content2',
        '.hsbc_content2 .content3',
        '.hsbc_content2 .content3_1',
        '.hsbc_content2 .content4',
        '.hsbc_content2 .content5',
        '.consultant_box',
        '.content_bank',
        '.hsbc_content2 .content6'
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
