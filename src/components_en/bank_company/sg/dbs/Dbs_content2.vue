<template>
    <div class="sg_dbs_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to DBS Bank Singapore
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/星展银行.png" alt="DBS Bank Singapore">
                    <div class="text">
                        <P>DBS Bank (DBS), formerly known as the Development Bank of Singapore, is the largest commercial bank in Singapore. Established in 1968, it was originally a development finance institution founded by the Singapore government. Today, DBS provides a full range of financial services, ranking among the top local banks in terms of total assets and various business indicators, and holds extremely high international credit ratings.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with DBS Bank Singapore
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
                    Required Documents for Corporate Accounts
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Hong Kong/Overseas corporate registration certificates, BR, Articles, etc.</div>
                        <div class="condition-item">Identity cards and passports of all shareholders/directors, plus director CVs</div>
                        <div class="condition-item">Business license and legal representative identification of domestic affiliated companies</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Corporate bank statements of domestic affiliated companies for the past 3 months</div>
                        <div class="condition-item">Corresponding purchase and sales contracts, invoices, shipping documents, and bank slips</div>
                        <div class="condition-item">Residential or commercial lease agreement for the actual domestic office address</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    DBS Bank Singapore Account Opening Process
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
            <SG_Cooperative_Bank class="content_bank" />

            <!-- 6. Frequently Asked Questions -->
            <div class="content6">
                <div class="title">
                    DBS Bank Singapore FAQs
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
import '@/css_en/bank_company/sg/dbs/Dbs_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Preparation & Review',
        description: 'Provide scanned documents and completed account information to the bank for initial review.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Lawyer Witnessing',
        description: 'Upon initial approval, the bank will schedule an appointment for lawyer witnessing or mail-in witnessing.'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Account Activation',
        description: 'Complete the witnessing procedure and final review at the Singapore headquarters for successful activation.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Password Issuance',
        description: 'Expect to receive the formal password letter and physical debit card in approximately 1-2 weeks after witnessing.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: 'Unlimited Transfers',
        description: 'No transfer limits; free and unlimited transfers across multiple major global currencies.'
    },
    {
        iconId: '#icon-good-two', 
        title: 'High Inclusivity',
        description: 'Companies that have been rejected by other banks can often successfully open an account here.'
    },
    {
        iconId: '#icon-world', 
        title: 'Broad Coverage',
        description: 'Accepts a wide range of overseas corporate structures; foreign companies and individuals are eligible to apply.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Digital Asset Friendly',
        description: 'Features its own digital asset platform and is highly supportive of the crypto and tech sectors.'
    }
]

const faqs = ref([
    {
        question: "Does DBS Bank Singapore provide a physical card?",
        answer: "Yes, it comes with a physical debit card."
    },
    {
        question: "Does DBS Bank Singapore have higher account opening requirements?",
        answer: "Correct. DBS generally has higher thresholds. For professional service, we recommend a minimum balance of at least 300,000 USD."
    },
    {
        question: "Is DBS Bank Singapore suitable for cryptocurrency trading?",
        answer: "DBS is very friendly towards digital currencies; the bank itself has even launched its own digital asset platform."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_dbs_content2 .content1',
        '.sg_dbs_content2 .content2',
        '.sg_dbs_content2 .content3',
        '.sg_dbs_content2 .content4',
        '.content_bank',
        '.sg_dbs_content2 .content6'
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
