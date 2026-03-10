<template>
    <div class="hangseng_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Hang Seng Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/hang_seng.jpg" alt="Hang Seng Bank (Hong Kong)">
                    <div class="text">
                        <P>
                            Hang Seng Bank is a robustly capitalized institution providing a comprehensive range of services including personal wealth management, commercial banking, SME and institutional business, treasury services, and private banking. Founded in 1933, our guiding principle has always been the relentless pursuit of service excellence. With over 220 service outlets across Hong Kong, our expansive network reaches nearly every corner of the city, ensuring superior service accessibility for all our clients.
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Hang Seng Bank
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
                        <div class="condition-item">HK Entity: CI, BR, NNC1/NAR1, M&A, and any subsequent amendment documents (if applicable).</div>
                        <div class="condition-item">Identification: Director ID card and Home Return Permit (for Mainland residents).</div>
                        <div class="condition-item">Trade Proof: 2 sets each of prospective procurement and sales documentation for the HK entity.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Mainland Affiliate: Business License for any associated companies (if available).</div>
                        <div class="condition-item">Office Proof: Copy of the Hong Kong company's lease agreement (if available).</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Hang Seng Bank Hong Kong Account Opening Process
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
                    Hang Seng Bank Hong Kong FAQs
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
import '@/css_en/bank_company/hk/hangseng/HangSeng_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: 'Pre-Audit',
        description: 'Submit your documentation for a preliminary internal screening by the bank.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Approval',
        description: 'Once the bank successfully audits the submission, the account approval is granted.'
    },
    {
        iconId: '#icon-phone-call', 
        title: 'Scheduling',
        description: 'Book a specific appointment time and designated branch location for finalization.'
    },
    {
        iconId: '#icon-agreement', 
        title: 'Signing',
        description: 'Attend the designated branch to perform the formal in-person signing and identification.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Activation',
        description: 'The bank account is officially activated and ready for use.'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Documentation',
        description: 'The bank dispatches all physical account credentials and relevant documentation.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-doc-success', 
        title: 'Streamlined Data',
        description: 'Simplified documentation requirements; available for non-national/foreign applicants.'
    },
    {
        iconId: '#icon-world', 
        title: 'Widespread Access',
        description: 'Applications can be processed nationwide with an extensive network of service points.'
    },
    {
        iconId: '#icon-certificate', 
        title: 'High Success Rate',
        description: 'Remote establishment available with a consistently high rate of successful account approvals.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Operational Savings',
        description: 'Benefit from waived handling and management fees, significantly reducing remittance costs.'
    }
]

const faqs = ref([
    {
        question: "How long is the processing time for Hang Seng Bank Hong Kong?",
        answer: "Approximately 5-6 weeks total (with initial paperwork typically processed within 3 weeks)."
    },
    {
        question: "Which jurisdictions or individuals are restricted from opening accounts at Hang Seng?",
        answer: "Applications are typically declined if directors or shareholders have negative records with any Hang Seng branch. High-risk jurisdictions (e.g., Iraq, Iran, North Korea) are also generally excluded from account establishment."
    },
    {
        question: "Can I receive Letters of Credit (L/C) with a Hang Seng account?",
        answer: "Yes, you can receive L/Cs. However, to issue Letters of Credit, you must specifically open a specialized L/C designated account."
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.hangseng_content2 .content1',
        '.hangseng_content2 .content2',
        '.hangseng_content2 .content3',
        '.hangseng_content2 .content3_1',
        '.hangseng_content2 .content4',
        '.hangseng_content2 .content5',
        '.content_bank',
        '.hangseng_content2 .content6'
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
