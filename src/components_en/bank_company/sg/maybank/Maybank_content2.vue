<template>
    <div class="sg_maybank_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Maybank Singapore
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/马来西亚.png" alt="Maybank Singapore">
                    <div class="text">
                        <P>Maybank (Malayan Banking Berhad), headquartered in Kuala Lumpur, Malaysia, is the largest bank in Malaysia and the largest listed company on the Bursa Malaysia. Currently, it has 334 domestic branches and 34 overseas branches, with total assets reaching 337 billion ringgit (approx. 105 billion USD). It serves a massive client base across over 10 Southeast Asian countries and major global hubs including New York, London, Singapore, Hong Kong, and Shanghai.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Maybank Singapore
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
                        <div class="condition-item">Complete registration kits for Singaporean or Hong Kong companies</div>
                        <div class="condition-item">ID card, passport, and English proof of address (non-English addresses require CPA verification)</div>
                        <div class="condition-item">Business license and bank statements for the past 6 months of affiliated companies</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Business contracts from the past 3 months (2 sales, 2 purchase), invoices, bank slips, customs declarations, and B/Ls</div>
                        <div class="condition-item">Completed account opening KYC form</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Maybank Singapore Account Opening Process
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
                    Maybank Singapore FAQs
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
import '@/css_en/bank_company/sg/maybank/Maybank_content2.css'
import SG_Cooperative_Bank from '@/components_en/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Initial Document Review',
        description: 'Submit required corporate documents for preliminary review.'
    },
    {
        iconId: '#icon-upload-one', 
        title: 'Supplemental Information',
        description: 'Provide additional documentation based on company profile and audit feedback.'
    },
    {
        iconId: '#icon-accept-email', 
        title: 'Remote Registration',
        description: 'Complete account setup and online banking remotely, usually taking 3-4 weeks.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-shield', 
        title: 'Priority on Privacy',
        description: 'MAS implements strict regulations to ensure top-tier account security and client privacy.'
    },
    {
        iconId: '#icon-city', 
        title: 'Remote Support',
        description: 'Accepts companies from HK, Cayman, BVI, and more, with a full home-based process.'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Flexible Controls',
        description: 'Supports over ten major currencies with relatively flexible risk control for multiple currency types.'
    },
    {
        iconId: '#icon-finance', 
        title: 'Low Entry Costs',
        description: 'No search fees, inclusive entry thresholds, and minimal transfer charges with clean interface design.'
    }
]

const faqs = ref([
    {
        question: "Does Maybank Singapore charge account management fees?",
        answer: "No, there are no account management fees."
    },
    {
        question: "Is a deposit required to open a Maybank Singapore account?",
        answer: "Generally, proof of assets is required. This can be in the form of monthly statements for stocks, bonds, or liquid funds."
    },
    {
        question: "How long does it take for a Maybank Singapore account to be opened?",
        answer: "Typically around 5-7 weeks."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_maybank_content2 .content1',
        '.sg_maybank_content2 .content2',
        '.sg_maybank_content2 .content3',
        '.sg_maybank_content2 .content4',
        '.content_bank',
        '.sg_maybank_content2 .content6'
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
