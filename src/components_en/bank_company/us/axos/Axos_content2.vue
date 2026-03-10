<template>
    <div class="axos_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About Axos Bank</div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/axos.png" alt="Axos Bank">
                    <div class="text"><p>Axos Bank, formerly known as BofI Federal Bank (founded in 1999), was one of the world's first digital banks, though it also maintains a physical branch in California. The bank was renamed Axos Bank in 2018. Axos Bank is FDIC insured, with individual accounts eligible for up to $200,000 in coverage if the bank fails. Currently, Axos Bank's World Checking Account supports non-U.S. identity account opening, meaning Chinese mainland residents can also successfully open an account.</p></div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of Axos Bank Account Opening</div>
                <div class="intro"><div v-for="(item, index) in advantage" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <div class="content3">
                <div class="title">Documents Required for Corporate Account</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Full set of company registration documents</div>
                        <div class="condition-item">Clear photos of directors'/shareholders' (>10%) IDs</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Detailed KYC form, especially the business description section</div>
                        <div class="condition-item">Personal resume</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">Axos Bank Account Opening Process</div>
                <div class="intro"><div v-for="(item, index) in registrationProcess" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <ChooseUs />
            <US_Cooperative_Bank class="content_bank" />
            <div class="content6">
                <div class="title">Axos Bank FAQs</div>
                <div class="intro"><div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ 'expanded': expandedItems[index] }"><div style="white-space: pre-line;">{{ faq.answer }}</div></div></div></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/bank_company/us/axos/Axos_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
gsap.registerPlugin(ScrollTrigger)
const registrationProcess = [
    { iconId: '#icon-notes', title: 'Step 1', description: 'Client submits documents and KYC form for registration, awaiting bank review' },
    { iconId: '#icon-audit', title: 'Step 2', description: 'With complete documents, review takes 15 business days; if additional materials are needed, 30 business days' }
]
const advantage = [
    { iconId: '#icon-world', title: 'International SWIFT Code', description: 'Has its own international SWIFT code — Chinese mainland banks can wire-transfer directly to Axos via online or mobile banking' },
    { iconId: '#icon-bank-transfer', title: 'ACH Support', description: 'Supports ACH Pull and ACH Push. Easily link brokerage accounts or other U.S. bank accounts' },
    { iconId: '#icon-exchange-cny-line', title: 'Zero Wire Fees', description: 'All international and domestic wire transfers are fee-free — both incoming and outgoing' },
    { iconId: '#icon-finance', title: 'No Management Fees', description: 'No account management fees of any kind' },
    { iconId: '#icon-upload-one', title: 'Ultra-Low Threshold', description: 'Extremely low opening requirements — passport only, with no passport region restrictions' },
    { iconId: '#icon-comments', title: 'Chinese Account Manager', description: 'Dedicated Chinese-speaking bank manager. Contact them directly for any post-account questions' },
    { iconId: '#icon-shield', title: 'Lenient Risk Control', description: 'Relaxed account risk controls — no unexplained account freezes' },
    { iconId: '#icon-protection', title: 'Fund Safety Guarantee', description: 'Disrupts traditional models, providing greater fund security assurance' }
]
const faqs = ref([
    { question: "What makes Axos Bank different?", answer: "Axos Bank offers competitive rates, low to no fees, and convenient personal, small business, and commercial banking accounts plus commercial loans.\n\nWith the Axos mobile app, you can check balances, deposit checks, automate bills, and more. Axos has no monthly maintenance fees, low minimum deposit requirements, and unlimited domestic ATM fee reimbursement.\n\nTheir interest checking account earns up to 0.81% APY, while savings accounts offer up to 0.50%." },
    { question: "How to open an Axos business account?", answer: "To open an Axos business account, provide your name, date of birth, email, phone number, and Social Security Number for identity verification. You'll also need your business name, address, and Tax Identification Number (TIN).\n\nFor sole proprietorship accounts, Axos requires the legal name, residential address, date of birth, and SSN for you and any authorized signers," },
    { question: "How is Axos regulated?", answer: "Axos Bank is regulated by the Office of the Comptroller of the Currency (OCC) and insured by the Federal Deposit Insurance Corporation (FDIC).\n\nIt is a publicly traded company listed on the NYSE as Axos Financial Inc. (AX). Axos Financial Inc. is the parent company of Axos Bank." },
    { question: "How to open an Axos personal account?", answer: "To open an Axos personal account, you must have a Social Security Number (SSN), be at least 18 years old, have a valid photo ID (driver's license or state ID), a valid U.S. address (no PO boxes), and be a U.S. citizen or permanent resident.\n\nTo start, enter your name, email, mobile number, and create a username and password. For identity verification, provide your date of birth and SSN." }
])
const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }
onMounted(async () => {
    await nextTick()
    const sections = ['.axos_content2 .content1','.axos_content2 .content2','.axos_content2 .content3','.axos_content2 .content4','.content_bank','.axos_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
