<template>
    <div class="ew_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About East West Bank</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/us/华美银行.png" alt="East West Bank">
                    <div class="text">
                        <P>East West Bank, established in 1973 in Los Angeles, California, was the first federally chartered savings institution founded by Chinese Americans. Listed on NASDAQ (EWBC) since 1999, it has consistently ranked among the top 15 on Forbes' America's Best Banks list and is the largest independent commercial bank headquartered in Southern California. East West Bank is dedicated to helping clients across the U.S. and China discover business opportunities, with its unique cross-border financial network supporting countless Chinese-invested enterprises in expanding to the U.S. Corporate accounts enable free fund transfers, no foreign exchange controls, flexible deposits/withdrawals, and tax optimization. Personal accounts facilitate overseas shopping, education, property purchases, investments, immigration, and global wealth management.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of East West Bank Account Opening</div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage">
                        <div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div>
                        <div class="text1">{{ item.title }}</div>
                        <div class="text2">{{ item.description }}</div>
                    </div>
                </div>
            </div>
            <div class="content3">
                <div class="title">Documents Required for Corporate Account</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">HK Company CR, BR, NNC1, English Articles of Association, Annual Return</div>
                        <div class="condition-item">Newly registered HK companies are also eligible</div>
                        <div class="condition-item">If there's an affiliated mainland company, provide mainland business license</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">One set of HK company purchase/sales contracts</div>
                        <div class="condition-item">Directors' and shareholders' ID cards and passports</div>
                        <div class="condition-item">Bank KYC form (provided by us for client completion)</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">East West Bank Account Opening Process</div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage">
                        <div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div>
                        <div class="text1">{{ item.title }}</div>
                        <div class="text2">{{ item.description }}</div>
                    </div>
                </div>
            </div>
            <ChooseUs />
            <US_Cooperative_Bank class="content_bank" />
            <div class="content6">
                <div class="title">East West Bank FAQs</div>
                <div class="intro">
                    <div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)">
                        <div class="faq-question">
                            <span class="question-text">{{ faq.question }}</span>
                            <span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span>
                        </div>
                        <div class="faq-answer" :class="{ 'expanded': expandedItems[index] }">
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
import '@/css_en/bank_company/us/ew/Ew_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-upload-one', title: 'Step 1', description: 'Submit documents. After approval, video interview is scheduled within approximately one week. Signed documents are mailed on the same day as the interview' },
    { iconId: '#icon-audit', title: 'Step 2', description: 'After the U.S. office receives the documents, the account number is issued within 1-2 business days. Activation deposit of $11,500 USD can be made' },
    { iconId: '#icon-finance', title: 'Step 3', description: 'After the activation deposit, online banking username and password are issued within 5-7 business days' }
]

const advantage = [
    { iconId: '#icon-shield', title: 'Rich Heritage & Strong Foundation', description: 'East West Bank has a long history with a mature and well-established system, serving businesses across the U.S. and China.' },
    { iconId: '#icon-communication', title: 'Full Chinese Customer Service', description: 'The bank has a dedicated Chinese customer service team, breaking language barriers.' },
    { iconId: '#icon-phone-call', title: 'Convenient Online Account Opening', description: 'Online account opening eliminates the hassle of travel and uncontrollable factors — fast and convenient.' },
    { iconId: '#icon-finance', title: 'Free & Flexible Fund Transfers', description: 'Offshore bank accounts are not subject to foreign exchange controls, enabling free and convenient international transfers.' }
]

const faqs = ref([
    { question: "Is there a transfer limit for East West Bank? What are the transfer fees?", answer: "There is no outbound transfer limit. Transfer fees follow the international wire standard of $20-$40 USD. The specific amount depends on the receiving bank and intermediary banks — the more intermediary banks, the higher the fee." },
    { question: "How long does it take to open an East West Bank account?", answer: "3-4 weeks" },
    { question: "Is there a limit on East West Bank account balances?", answer: "Neither personal nor corporate East West Bank accounts have balance limits, as long as funds are legitimate." }
])

const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.ew_content2 .content1','.ew_content2 .content2','.ew_content2 .content3','.ew_content2 .content4','.content_bank','.ew_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
