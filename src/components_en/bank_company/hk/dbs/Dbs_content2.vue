<template>
    <div class="dbs_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to DBS Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/DBS.jpg" alt="DBS Bank (Hong Kong)">
                    <div class="text">
                        <P>
                            DBS Bank (DBS), established in 1968 and formerly known as The Development Bank of Singapore Limited, is the largest commercial bank in Singapore. In the late 1990s, the bank accelerated its international expansion, acquiring various commercial banks across Thailand, the Philippines, Indonesia, Hong Kong, and Taiwan. Following the acquisition of Kwong On Bank in 1998 and the Dao Heng Bank Group in 2001 (including Dao Heng Bank and Overseas Trust Bank), the entities were merged and rebranded as "DBS Bank (Hong Kong)" in 2003. Today, its largest shareholder remains Temasek Holdings, the investment arm of the Singapore government.
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with DBS Hong Kong
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
                        <div class="condition-item">HK Entity: CI, BR, NNC1/NAR1, and Articles of Association (M&A)</div>
                        <div class="condition-item">Identification: Personal ID cards (front/back) plus Travel Permit or Passport for all directors and shareholders</div>
                        <div class="condition-item">Personal Proof: Latest 3 months' personal bank statements for all directors and shareholders</div>
                        <div class="condition-item">Address Proof: Latest 3 months' utility bills or driver's licenses for all directors and shareholders</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Mainland Affiliate: Business License of any associated companies</div>
                        <div class="condition-item">Corporate Proof: Latest 3 months' bank statements for the associated Mainland company</div>
                        <div class="condition-item">Trade Proof: 2 sets each of Sales/Procurement contracts, matching Invoices, and Customs Declarations/Bills of Lading</div>
                        <div class="condition-item">Business Collateral: Product catalogs, corporate website link, or a primary client list</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    DBS Bank Hong Kong Account Opening Process
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
                    DBS Bank Hong Kong FAQs
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
import '@/css_en/bank_company/hk/dbs/Dbs_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-email-push', 
        title: 'Application',
        description: 'Submit an initial email application requesting a remote video account opening.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Compilation',
        description: 'The relationship manager collects and performs a preliminary internal audit of your documents.'
    },
    {
        iconId: '#icon-phone-call', 
        title: 'Witnessing',
        description: 'Attend a formal video witnessing session to sign the required documentation.'
    },
    {
        iconId: '#icon-upload-one', 
        title: 'Submission',
        description: 'Submit the physical account opening files along with certified true copies/verification documents.'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Verification',
        description: 'Respond to the bank\'s formal requests via their official confirmation email protocol.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Audit',
        description: 'Undergo the final account auditing and approval process (typically 6-8 weeks).'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-world', 
        title: 'Expansive Scope',
        description: 'Business operations covering major global markets, providing truly comprehensive financial services.'
    },
    {
        iconId: '#icon-shield', 
        title: 'Premier Security',
        description: 'As Singapore\'s largest bank, it maintains high credit ratings with guaranteed institutional fund security.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Zero Cap Limits',
        description: 'Features flexible transaction limits designed to satisfy large-scale capital turnover and operational needs.'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: 'Rapid Settlement',
        description: 'Cross-border remittances are processed with high efficiency, ensuring timely fund availability.'
    }
]

const faqs = ref([
    {
        question: "Which jurisdictions or individuals are restricted from opening accounts at DBS?",
        answer: "Applications are typically declined if directors or shareholders have negative records with any DBS branch worldwide. Entities based in high-risk countries (e.g., Iraq, Iran, North Korea) are also ineligible. Additionally, ensure company names do not contain sensitive terms (e.g., Finance, Coal, Petroleum) as these can lead to immediate rejection during the banking audit."
    },
    {
        question: "How long is the processing time for DBS Hong Kong?",
        answer: "Approximately 6-8 weeks."
    },
    {
        question: "What are the transaction limits for DBS Hong Kong?",
        answer: "DBS provides essentially unlimited transaction capacity for qualified account holders."
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.dbs_content2 .content1',
        '.dbs_content2 .content2',
        '.dbs_content2 .content3',
        '.dbs_content2 .content3_1',
        '.dbs_content2 .content4',
        '.dbs_content2 .content5',
        '.content_bank',
        '.dbs_content2 .content6'
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
