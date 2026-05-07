<template>
    <div class="arival_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About Arival Bank</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/us/arival银行.png" alt="Arival Bank">
                    <div class="text"><p>Arival Bank, founded in 2021, is a U.S.-licensed digital banking institution regulated by OCIF. It currently serves clients in over 30 countries worldwide, with operations in Miami, Puerto Rico, Europe, and Singapore. Unlike traditional banking institutions, Arival Bank is a digital bank specifically designed for "non-traditional industries," providing services for cryptocurrency, blockchain, tech startups, digital technology, virtual technology, and other emerging sectors.</p></div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of Arival Bank Account Opening</div>
                <div class="intro"><div v-for="(item, index) in advantage" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <div class="content3">
                <div class="title">Documents Required for Account Opening</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">U.S. Company: Articles of Organization, EIN Confirmation Letter</div>
                        <div class="condition-item">HK Company: CI, BR, Articles of Association, NNC1, NAR1 Annual Return</div>
                        <div class="condition-item">All jurisdictions: Shareholding certificate, director register, address proof (recent 3-month bank statement, credit card statement, or government-issued document)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Offshore/Other: Certificate of Incorporation, Business License, Articles of Association, Certificate of Incumbency, Certificate of Good Standing</div>
                        <div class="condition-item">Business description (business plan, etc.), proof of wealth source (tax clearance, etc.), social media accounts</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">Arival Bank Account Opening Process</div>
                <div class="intro"><div v-for="(item, index) in registrationProcess" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <ChooseUs />
            <US_Cooperative_Bank class="content_bank" />
            <div class="content6">
                <div class="title">Arival Bank FAQs</div>
                <div class="intro"><div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ 'expanded': expandedItems[index] }"><div style="white-space: pre-line;">{{ faq.answer }}</div></div></div></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/bank_company/us/arival/Arival_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
gsap.registerPlugin(ScrollTrigger)
const registrationProcess = [
    { iconId: '#icon-notes', title: 'Step 1', description: 'Client submits documents and KYC form for registration, awaiting bank review' },
    { iconId: '#icon-audit', title: 'Step 2', description: 'With complete documents, review takes 5-10 business days; if additional materials are needed, 7-15 business days' }
]
const advantage = [
    { iconId: '#icon-diamond', title: 'Real Bank Account', description: 'Licensed by U.S. financial regulator (OCIF)' },
    { iconId: '#icon-positive-dynamics', title: 'Ultra-Low Threshold', description: 'Focused on crypto companies, fintech firms, startups, etc. — no initial deposit required' },
    { iconId: '#icon-upload-one', title: 'Simple Process', description: 'No in-person branch visit needed. Identity verification via bank website only — no document mailing required' },
    { iconId: '#icon-shield', title: 'Stable Account', description: 'After opening, no special day-to-day maintenance required' },
    { iconId: '#icon-transaction', title: 'Global Transfers', description: 'Supports free worldwide payments and transfers' }
]
const faqs = ref([
    { question: "After opening a U.S. bank account, is it easier to open accounts in other countries?", answer: "Yes, typically after successfully opening a U.S. bank account, the approval rate for other countries is higher and the process is faster. If you haven't had an overseas bank account before, it's advisable to start with an easier bank." },
    { question: "How should I maintain my Arival Bank account after opening?", answer: "1. After opening, do not leave the account with a zero balance for extended periods. Any deposit amount is acceptable — just avoid zero balance to prevent account closure.\n\n2. Make at least 1-2 transactions per month. No specific amount is required.\n\n3. Avoid rapid fund inflows/outflows or frequent large transfers, as this may trigger regulatory attention and potential account freezing.\n\n4. Avoid receiving funds from sanctioned countries or engaging in transactions with high-risk regions." },
    { question: "Is the Arival Bank account opening process difficult?", answer: "The process is simple — no in-person branch visit needed. Identity verification via the bank website only, with no document mailing required." }
])
const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }
onMounted(async () => {
    await nextTick()
    const sections = ['.arival_content2 .content1','.arival_content2 .content2','.arival_content2 .content3','.arival_content2 .content4','.content_bank','.arival_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
