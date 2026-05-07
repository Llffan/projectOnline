<template>
    <div class="mo_boc_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">Bank of China Macau Introduction</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/中国银行.png" alt="Bank of China Macau">
                    <div class="text">
                        <P>Bank of China Macau Branch (Portuguese: Banco da China, Sucursal de Macau) was established on June 21, 1950. Also known as BOC Macau, its predecessor was Macau Nan Tung Bank. It is currently a state-owned commercial bank of the People's Republic of China, a branch of Bank of China in Macau, and one of the largest commercial banks in Macau. Together with Banco Nacional Ultramarino, it serves as an agent for Macau Pataca issuance and Macau Government Treasury operations.</P>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">BOC Macau Account Opening Advantages</div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage">
                        <div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div>
                        <div class="text1">{{ item.title }}</div>
                        <div class="text2">{{ item.description }}</div>
                    </div>
                </div>
            </div>

            <div class="content3">
                <div class="title">Required Documents for Corporate Account</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">HK company documents: CI, BR, NNC1/NAR1, M&A</div>
                        <div class="condition-item">Copies of directors' and shareholders' ID cards and HK-Macau Travel Permits/Passports</div>
                        <div class="condition-item">Personal address proof within 3 months (utility bills, phone statement, etc.)</div>
                        <div class="condition-item">Mainland China company business license and recent 6-month company bank statements (stamped)</div>
                        <div class="condition-item">Director's personal recent 6-month bank statements (bank stamped)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">HK company's purchase/sales contracts, invoices, and shipping documents (3 matching sets each)</div>
                        <div class="condition-item">Mainland company's purchase/sales contracts, invoices, and shipping documents (3 matching sets each)</div>
                        <div class="condition-item">Company's overall business development plan (brief description of operating model)</div>
                        <div class="condition-item">Fully completed KYC due diligence questionnaire</div>
                    </div>
                </div>
            </div>

            <MaintenanceGuide />

            <div class="content4">
                <div class="title">BOC Macau Account Opening Process</div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage">
                        <div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div>
                        <div class="text1">{{ item.title }}</div>
                        <div class="text2">{{ item.description }}</div>
                    </div>
                </div>
            </div>

            <ChooseUs />
            <MO_Cooperative_Bank class="content_bank" />

            <div class="content6">
                <div class="title">BOC Macau FAQs</div>
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
import '@/css_en/bank_company/mo/boc/Boc_content2.css'
import MO_Cooperative_Bank from '@/components_en/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-notes', title: 'Document Pre-review', description: 'Submit documents and basic personal information for appointment' },
    { iconId: '#icon-audit', title: 'Bank Pre-review', description: 'Bank pre-reviews submitted qualifications and documents' },
    { iconId: '#icon-user', title: 'In-person Signing', description: 'Visit Macau branch for in-person signing procedures' },
    { iconId: '#icon-airplane', title: 'Card Delivery', description: 'After account completion, bank mails cards and security token' }
]

const advantage = [
    { iconId: '#icon-good-two', title: 'Simple Operations', description: 'Account operations are very easy - login to APP for transfers and remittances, freely operable anytime, anywhere' },
    { iconId: '#icon-bank-transfer', title: 'Convenient Foreign Exchange', description: 'Freely send and receive various foreign currencies, greatly facilitating domestic regulation and offshore operations' },
    { iconId: '#icon-finance', title: 'High Transfer Limits', description: 'Enjoy higher daily transfer and dispatch limits, flexibly meeting large capital needs for international trade' },
    { iconId: '#icon-positive-dynamics', title: 'Brand & Reputation', description: 'As a major state-owned commercial bank and one of the note-issuing banks, it has strong capabilities to safeguard company funds' }
]

const faqs = ref([
    { question: "What are the 6 things to pay attention to after opening a BOC Macau account?", answer: "1. Do not collect payments for others, absolutely avoid dealings with underground money changers, and avoid contact with sanctioned countries' funds. If transactions are necessary, retain all relevant source documents.\n2. Company trade should be conducted company-to-company as much as possible, preferably using some L/C to confirm your trading identity.\n3. Avoid large lump-sum deposits and withdrawals.\n4. Maintain a certain deposit balance in the account, and do not let it become overdrawn or empty.\n5. Use the account regularly - accounts inactive for more than 3 months may be closed.\n6. Ensure that the correspondence address, mobile number, and email registered with the bank are absolutely valid. If you receive compliance surveys or forms, respond promptly to avoid account closure." },
    { question: "How long does it take to open a BOC Macau account?", answer: "About 2 weeks (after successful in-person signing, approximately 2 weeks to mail bank cards and security token)." },
    { question: "Does BOC Macau account come with a bank card?", answer: "Yes, it comes with a physical bank card and independent security token. In-person attendance is required for signing." }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_boc_content2 .content1', '.mo_boc_content2 .content2', '.mo_boc_content2 .content3', '.mo_boc_content2 .content4', '.content_bank', '.mo_boc_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
