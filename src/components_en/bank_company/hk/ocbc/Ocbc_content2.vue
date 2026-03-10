<template>
    <div class="ocbc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to OCBC Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/OCBC.jpg" alt="OCBC Bank (Hong Kong)">
                    <div class="text">
                        <P>OCBC Bank (Hong Kong) Limited, formerly known as OCBC Wing Hang Bank Limited, is a licensed bank headquartered in Hong Kong. Ranked as the 8th largest bank in Hong Kong by total assets, it has been a subsidiary of the Oversea-Chinese Banking Corporation (OCBC) since late July 2014. The acquisition provided OCBC with a robust network of approximately 70 branches spanning Hong Kong, Macau, and Mainland China, significantly bolsters the bank's presence and operational depth in the region.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with OCBC Hong Kong
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
                        <div class="condition-item">HK Entity: CI, BR, NNC1/NAR1, Articles, and amendment records (if any)</div>
                        <div class="condition-item">Identification: Director ID card, plus Travel Permit or Passport</div>
                        <div class="condition-item">Established < 1 Year: Mainland Business License, latest 3 months' dual-currency bank statements, and 1 set of matching trade contracts</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">New Entity (No Mainland Flow): Mainland domestic trade documents OR HK procurement contracts with foreign counterparts can also be considered</div>
                        <div class="condition-item">Established > 2 Years: Latest 3 months' HK company bank statements, plus comprehensive procurement/sales trade datasets</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    OCBC Bank (Hong Kong) Account Opening Process
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
                    OCBC Bank (Hong Kong) FAQs
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
import '@/css_en/bank_company/hk/ocbc/Ocbc_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Pre-Audit',
        description: 'Submit electronic documentation for internal screening prior to video witnessing scheduling.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Witnessing',
        description: 'Undergo the video witnessing session and subsequent review by the bank\'s back-office auditing department.'
    },
    {
        iconId: '#icon-city', 
        title: 'Interview',
        description: 'Complete witnessing and finalize an appointment at a designated Mainland branch for the formal signing.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Finalization',
        description: 'Documents are couriered to Hong Kong for final processing and official account activation.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: 'Inclusive Threshold',
        description: 'Open to considering account applications from clients who have been previously declined by institutions like Hang Seng or HSBC.'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Rapid Settlement',
        description: 'Facilitates highly efficient and convenient payment settlement for international trade operations.'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: 'Operational Speed',
        description: 'Provides streamlined international payment services with industry-leading processing efficiency.'
    },
    {
        iconId: '#icon-world', 
        title: 'Expansive Network',
        description: 'Leveraging OCBC\'s formidable institutional background, providing a vast network of branches across domestic and overseas territories.'
    }
]

const faqs = ref([
    {
        question: "What is the daily transfer limit for OCBC Hong Kong?",
        answer: "The daily transaction limit is equivalent to 1,000,000 HKD."
    },
    {
        question: "How long is the processing time for OCBC Hong Kong?",
        answer: "Approximately 6-8 weeks total (with witnessing usually scheduled within 2-3 weeks)."
    },
    {
        question: "What are the configuration thresholds for OCBC HK account transfers?",
        answer: "The standard transfer limit is 3,000,000 HKD for both registered and non-registered payees."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.ocbc_content2 .content1',
        '.ocbc_content2 .content2',
        '.ocbc_content2 .content3',
        '.ocbc_content2 .content4',
        '.content_bank',
        '.ocbc_content2 .content6'
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
