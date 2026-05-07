<template>
    <div class="sc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Standard Chartered Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/Standard_Chartered.jpg" alt="Standard Chartered Bank (Hong Kong)">
                    <div class="text">
                        <P>Standard Chartered Bank (also known as Standard Chartered) is a British multinational bank headquartered in London. It operates a vast network across many countries, with a particularly strong presence in Asia and Africa. Notably, a significant portion of its global profit (30% in 2004) is generated from its Hong Kong operations. Its parent company, Standard Chartered PLC, is listed on both the London Stock Exchange and the Hong Kong Stock Exchange, and is a constituent of the FTSE 100 Index. Standard Chartered is currently one of the three note-issuing banks in Hong Kong, alongside Bank of China (Hong Kong) and HSBC.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Standard Chartered Hong Kong
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
                        <div class="condition-item">HK Entity: Certificate of Incorporation (CI), Business Registration (BR), and Incorporation Form NNC1/Annual Return NAR1</div>
                        <div class="condition-item">Identification: Personal ID, plus Travel Permit or Passport for all directors and shareholders</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Business Proof: Mainland Business License, latest 3 months' bank statements, and 2 sets each of procurement/sales invoices</div>
                        <div class="condition-item">Flexible Scenarios: Specialized service sectors need only provide service contracts; accounts can be opened even without a Mainland entity</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Standard Chartered Bank Hong Kong Account Opening Process
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
                    Standard Chartered Bank Hong Kong FAQs
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
import '@/css_en/bank_company/hk/sc/Sc_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Pre-Audit',
        description: 'Submit your documentation for preliminary internal screening by the bank.'
    },
    {
        iconId: '#icon-city', 
        title: 'Interview',
        description: 'Schedule an appointment at a designated Standard Chartered location for formal in-person signing.'
    },
    {
        iconId: '#icon-award-line', 
        title: 'Processing',
        description: 'Upon successful audit, the bank dispatches the security token device and PIN credentials by mail.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Activation',
        description: 'Successfully activate your account and online credentials to complete the establishment.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-exchange-cny-line', 
        title: 'Capital Freedom',
        description: 'Free from exchange controls, allowing for completely unrestricted global capital allocation and movement.'
    },
    {
        iconId: '#icon-world', 
        title: 'Multi-Currency Flow',
        description: 'Seamlessly convert major global currencies to preserve value and effectively mitigate single-currency exposure risks.'
    },
    {
        iconId: '#icon-protect', 
        title: 'Simplified Access',
        description: 'Manage daily operations conveniently via online banking from the Mainland, eliminating the need for in-person branch visits.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Flexible Interest',
        description: 'Deposit products and interest rates are not subject to restrictive domestic regulations; large-scale deposits are fully negotiable.'
    }
]

const faqs = ref([
    {
        question: "Can I complete the Standard Chartered witnessing from Mainland China?",
        answer: "Yes. Depending on your specific circumstances, you can visit a nearby designated counter for in-person witnessing."
    },
    {
        question: "How long is the processing time for Standard Chartered Hong Kong?",
        answer: "Generally 3-4 weeks."
    },
    {
        question: "What are the age requirements for Standard Chartered Hong Kong?",
        answer: "Applicants must be at least 18 years old, possess stable income and assets, and maintain a solid credit history."
    },
    {
        question: "Does Standard Chartered provide a physical bank card?",
        answer: "Yes, a physical bank card is provided upon account establishment."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sc_content2 .content1',
        '.sc_content2 .content2',
        '.sc_content2 .content3',
        '.sc_content2 .content4',
        '.content_bank',
        '.sc_content2 .content6'
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
