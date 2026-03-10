<template>
    <div class="everbright_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to China Everbright Bank Hong Kong
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/everbright.jpg" alt="China Everbright Bank Hong Kong">
                    <div class="text">
                        <P>China Everbright Bank Hong Kong Branch, established in 2013 as the bank's first overseas branch, ranks among the top 25 brands globally with total assets exceeding 200 billion. The branch features rapid growth and high professional standards. Corporate clients benefit from unrestricted capital allocation, freedom from exchange controls, preferential interest rates, and flexible withdrawal options, which simplify tax optimization and provide robust support for international business expansion.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Everbright Bank Hong Kong
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
                        <div class="condition-item">Commercial Registration Certificate (BR)</div>
                        <div class="condition-item">Certificate of Incorporation (CI)</div>
                        <div class="condition-item">Memorandum and Articles of Association (M&A)</div>
                        <div class="condition-item">Identification: ID cards, Travel Permits, and customs entry slips for all directors and shareholders</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Company seals (Linear/Bar stamp)</div>
                        <div class="condition-item">Operational proof: Business licenses of associated Mainland entities and 3 recent sets of trade documents (Customs declarations, sales contracts, invoices, packing lists, Bills of Lading)</div>
                        <div class="condition-item">Product overview and business objectives statement</div>
                        <div class="condition-item">Latest annual financial statements (if available)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Everbright Bank Hong Kong Account Opening Process
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
                    Everbright Bank Hong Kong FAQs
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
import '@/css_en/bank_company/hk/everbright/Everbright_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: 'Submission',
        description: 'Prepare items 1-7 from the checklist and submit for preliminary screening.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Interview',
        description: 'Upon successful pre-audit, a formal video or in-person witnessing session is arranged.'
    },
    {
        iconId: '#icon-truck-line', 
        title: 'Dispatch',
        description: 'Postal submission of original physical documents to Everbright HK.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Establishment',
        description: 'The bank processes the application and issues the account number, security token, and credentials.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-city', 
        title: 'Extensive Network',
        description: 'Features a comprehensive service network providing wide geographical coverage.'
    },
    {
        iconId: '#icon-world', 
        title: 'Global Prestige',
        description: 'Highly ranked brand value globally, ensuring trust and international recognition.'
    },
    {
        iconId: '#icon-diamond', 
        title: 'AI Implementation',
        description: 'Leading utilization of Artificial Intelligence to enhance banking precision and efficiency.'
    },
    {
        iconId: '#icon-shield', 
        title: 'Smart Risk Control',
        description: 'Equipped with a secure and reliable intelligent risk management system.'
    }
]

const faqs = ref([
    {
        question: "What are the key points to remember when opening an account with Everbright HK?",
        answer: "1. Prepare complete documentation; requirements vary by bank. Consult us for a detailed checklist.\n2. Be punctual for appointments.\n3. During the interview, respond naturally and clearly. Avoid hesitation, concealment, or exaggeration."
    },
    {
        question: "How long is the processing time for Everbright Bank Hong Kong?",
        answer: "Approximately 6-8 weeks."
    },
    {
        question: "How do I maintain compliance for my Everbright HK account?",
        answer: "1. Keep the account active and maintain the minimum balance.\n2. Do not process payments on behalf of third parties or use underground money changers.\n3. Avoid transactions with countries sanctioned by the UN or the US.\n4. Avoid frequent, large-sum consolidated cash deposits or transfers.\n5. Cooperate with anual AML and KYC review requests from the bank.\n6. Maintain proper auditing; be prepared to provide audit reports if requested by the bank.\n7. If possible, process a few Letters of Credit (LCs) annually; banks highly value LC-active clients."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.everbright_content2 .content1',
        '.everbright_content2 .content2',
        '.everbright_content2 .content3',
        '.everbright_content2 .content3_1',
        '.everbright_content2 .content4',
        '.everbright_content2 .content5',
        '.content_bank',
        '.everbright_content2 .content6'
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
