<template>
    <div class="banc_cal_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About Bank of California</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/us/加州银行.png" alt="Bank of California">
                    <div class="text"><P>Bank of California, Inc. was incorporated under Maryland law in 2002, absorbing all shares of Pacific Trust Bank. Its main business includes attracting retail deposits from the public, primarily owner-occupied one-to-four family residential loans, various consumer loans, multifamily and commercial first mortgage real estate loans, and commercial enterprise loans.</P></div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of Bank of California Account Opening</div>
                <div class="intro"><div v-for="(item, index) in advantage" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <div class="content3">
                <div class="title">Documents Required for Corporate Account</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Company documents</div>
                        <div class="condition-item">Passport and ID card</div>
                        <div class="condition-item">Tax ID (EIN)</div>
                        <div class="condition-item">Phone number and email</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">U.S. phone number</div>
                        <div class="condition-item">Mainland credit card (front & back)</div>
                        <div class="condition-item">KYC form</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">Bank of California Account Opening Process</div>
                <div class="intro"><div v-for="(item, index) in registrationProcess" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <ChooseUs />
            <US_Cooperative_Bank class="content_bank" />
            <div class="content6">
                <div class="title">Bank of California FAQs</div>
                <div class="intro"><div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ 'expanded': expandedItems[index] }"><div style="white-space: pre-line;">{{ faq.answer }}</div></div></div></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/bank_company/us/banc_cal/BancCal_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
gsap.registerPlugin(ScrollTrigger)
const registrationProcess = [
    { iconId: '#icon-notes', title: 'Step 1', description: 'Receive inquiry; client fills out questionnaire and submits to bank' },
    { iconId: '#icon-email-push', title: 'Step 2', description: 'Bank reviews and notifies conditional approval of account' },
    { iconId: '#icon-upload-one', title: 'Step 3', description: 'Send materials checklist; client mails documents to bank' },
    { iconId: '#icon-notes', title: 'Step 4', description: 'Prepare account application forms and send to client for signature' },
    { iconId: '#icon-audit', title: 'Step 5', description: 'Submit completed forms for bank processing and account opening' },
    { iconId: '#icon-key-one', title: 'Step 6', description: 'Bank issues debit card and online banking token to client' }
]
const advantage = [
    { iconId: '#icon-world', title: 'Multiple Jurisdictions', description: 'Accepts U.S. companies, Hong Kong companies, and other multi-jurisdiction entities.' },
    { iconId: '#icon-exchange-cny-line', title: 'Fee Waivers', description: 'Management fees and search fees can be waived, significantly reducing costs.' },
    { iconId: '#icon-transaction', title: 'Zelle Support', description: 'Supports convenient deposits and transfers via Zelle and physical checks.' },
    { iconId: '#icon-finance', title: 'Physical Debit Cards', description: 'Both personal and corporate accounts come with physical debit cards.' }
]
const faqs = ref([
    { question: "After opening a U.S. bank account, is it easier to open accounts in other countries?", answer: "Yes, typically after successfully opening a U.S. bank account, the approval rate for other countries is higher and the process is faster. If you haven't had an overseas bank account before, it's advisable to start with an easier bank." },
    { question: "How long does it take to open a Bank of California account?", answer: "6-8 weeks" },
    { question: "Does Bank of California provide a physical debit card after account opening?", answer: "Yes, a physical debit card is issued." }
])
const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }
onMounted(async () => {
    await nextTick()
    const sections = ['.banc_cal_content2 .content1','.banc_cal_content2 .content2','.banc_cal_content2 .content3','.banc_cal_content2 .content4','.content_bank','.banc_cal_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
