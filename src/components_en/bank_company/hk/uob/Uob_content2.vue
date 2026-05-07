<template>
    <div class="uob_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to UOB (Hong Kong)
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/hk/UOB.jpg" alt="UOB (Hong Kong)">
                    <div class="text">
                        <P>UOB Hong Kong refers to the Hong Kong branch of United Overseas Bank, situated in Central. Established in 1965, it has grown significantly, holding total assets of approximately HKD 260 billion. While it may not match the massive scale of HSBC or Standard Chartered, it remains one of the top 20 banks in Hong Kong. Similar to Citi or J.P. Morgan, its strength lies in its powerful institutional shareholders, making it a major player in the regional financial landscape. Since opening its first overseas branch in Hong Kong in 1965, UOB has been dedicated to helping corporate and institutional clients seize growth opportunities across a dynamic Asia and beyond.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with UOB Hong Kong
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
                        <div class="condition-item">Identification: Valid ID card and Travel Permit for all directors and shareholders.</div>
                        <div class="condition-item">Governance Logs: Certificate of Incorporation (CI) and Business Registration (BR) for the HK entity.</div>
                        <div class="condition-item">Professional Profile: Current CV for each director (primarily detailing work history and educational background).</div>
                        <div class="condition-item">Affiliate Info: Business License for any associated Mainland company.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Mainland Operational Proof: Latest 3 months of operational documentation (Matching purchase/sales contracts and VAT invoices).</div>
                        <div class="condition-item">Mainland Financial Proof: Latest 3-6 months of business bank statements for the Mainland entity (must align with above trade contracts).</div>
                        <div class="condition-item">Trade Intent: Prospective business agreements or frameworks with overseas clients.</div>
                        <div class="condition-item">Digital Presence: Corporate website, WeChat/Weibo business pages, or e-commerce shop links (if available).</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    UOB Hong Kong Account Opening Process
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
                    UOB Hong Kong FAQs
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
import '@/css_en/bank_company/hk/uob/Uob_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Pre-Audit',
        description: 'Submit digital copies of all required documents to us for initial organization and preliminary audit by a UOB manager.'
    },
    {
        iconId: '#icon-communication', 
        title: 'Scheduling',
        description: 'Upon successful pre-audit, we will facilitate the formal appointment for your in-person interview in Hong Kong.'
    },
    {
        iconId: '#icon-city', 
        title: 'Interview',
        description: 'Attend the designated UOB branch in Hong Kong at the scheduled time to complete the formal account opening process.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Activation',
        description: 'Successfully complete all remaining procedures and activate your corporate bank account according to official guidance.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-earth', 
        title: 'High Inclusivity',
        description: 'Directly accepts applicants with most foreign nationalities as directors or shareholders (Note: excludes US nationality).'
    },
    {
        iconId: '#icon-transaction', 
        title: 'Multi-Currency Hub',
        description: 'Seamlessly receive and process all major mainstream global currencies.'
    },
    {
        iconId: '#icon-world', 
        title: 'Complex Structure Support',
        description: 'Optimized for cross-border corporate structures and multi-layered organizational frameworks.'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: 'Zero Threshold',
        description: 'No special barriers to entry; document requirements are straightforward and easy to compile.'
    },
    {
        iconId: '#icon-finance', 
        title: 'High Transaction Limits',
        description: 'Enjoy high operational freedom; corporate accounts feature essentially unlimited transaction capacities.'
    },
    {
        iconId: '#icon-protect', 
        title: 'System Stability',
        description: 'Operates on a highly secure, enterprise-grade encrypted network for maximum reliability.'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: 'Capital Freedom',
        description: 'Zero foreign exchange control policies translate to the unrestricted receipt and remittance of global funds.'
    },
    {
        iconId: '#icon-phone-call', 
        title: 'Digital Convenience',
        description: 'Modern mobile banking application with comprehensive features and a user-friendly interface.'
    }
]

const faqs = ref([
    {
        question: "What are the fees associated with opening a UOB Hong Kong account?",
        answer: `As of the current "Super Account" institutional structure, fees include:\n\nRegistration Search Fee: HKD 1,150\nMaintenance Fee: HKD 500 / month\n\nSpecific for Foreign-Owned HK Entities (Non-HK Resident Shareholders):\nAccount Opening Fee: HKD 1,150\nMinimum Deposit: HKD 100,000 threshold (If the balance falls below this, a service fee of HKD 500 per month will apply across the active multi-currency sub-accounts).`
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.uob_content2 .content1',
        '.uob_content2 .content2',
        '.uob_content2 .content3',
        '.uob_content2 .content4',
        '.content_bank',
        '.uob_content2 .content6'
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
