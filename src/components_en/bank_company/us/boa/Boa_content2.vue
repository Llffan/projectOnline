<template>
    <div class="boa_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About Bank of America</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/us/美国银行.png" alt="Bank of America">
                    <div class="text"><P>Bank of America (NYSE: BAC) is one of the world's largest bank holding companies and, by assets, the largest commercial bank in the United States. Its origins can be traced back to the Massachusetts Bank in 1784, making it the second-oldest bank in U.S. history. As one of the world's leading financial services institutions, Bank of America provides comprehensive personal and commercial banking services across 21 U.S. states, the District of Columbia, and 30 countries worldwide, serving millions of households and numerous business clients.</P></div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of Bank of America Account Opening</div>
                <div class="intro"><div v-for="(item, index) in advantage" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <div class="content3">
                <div class="title">Documents Required for Corporate Account</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Certificate of Incorporation</div>
                        <div class="condition-item">Federal Tax ID (EIN)</div>
                        <div class="condition-item">Articles of Association/Bylaws</div>
                        <div class="condition-item">Director's email address</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">1:1 ratio color scans of director's ID card (front & back) and passport; passport selfie photo</div>
                        <div class="condition-item">U.S. phone number (California number recommended)</div>
                        <div class="condition-item">U.S. mailing address (can be provided by us for additional fee)</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">Bank of America Account Opening Process</div>
                <div class="intro"><div v-for="(item, index) in registrationProcess" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <ChooseUs />
            <US_Cooperative_Bank class="content_bank" />
            <div class="content6">
                <div class="title">Bank of America FAQs</div>
                <div class="intro"><div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ 'expanded': expandedItems[index] }"><div style="white-space: pre-line;">{{ faq.answer }}</div></div></div></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/bank_company/us/boa/Boa_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
gsap.registerPlugin(ScrollTrigger)
const registrationProcess = [
    { iconId: '#icon-notes', title: 'Step 1', description: 'Confirm processing and prepare bank filing information form (provided by us)' },
    { iconId: '#icon-upload-one', title: 'Step 2', description: 'Submit required account opening documents' },
    { iconId: '#icon-airplane', title: 'Step 3', description: 'We submit the documents to Bank of America' },
    { iconId: '#icon-exchange-cny-line', title: 'Step 4', description: 'Wire the required activation deposit to the U.S.' },
    { iconId: '#icon-key-one', title: 'Step 5', description: 'Bank assigns account number, online banking ID/password, and issues debit card (change password immediately upon login for security)' },
    { iconId: '#icon-view-list', title: 'Step 6', description: 'Activate online banking inquiry features' }
]
const advantage = [
    { iconId: '#icon-finance', title: 'Link Brokerage Accounts', description: 'Can link brokerage accounts for easier and faster U.S. stock trading.' },
    { iconId: '#icon-diamond', title: 'Access Financial Products', description: 'As an international financial center, U.S. banks offer sophisticated financial products.' },
    { iconId: '#icon-award-line', title: 'Enhance Company Credibility', description: 'A U.S. bank account enhances company image and credibility, greatly increasing international competitiveness.' },
    { iconId: '#icon-transaction', title: 'Full-Featured', description: 'Online banking provides easy account reconciliation and international transfer capabilities to meet all financial needs.' }
]
const faqs = ref([
    { question: "Is the Bank of America account review process strict now?", answer: "The review process is somewhat stricter now due to recent banking fraud cases. However, as long as your documents are in order, the success rate is still high. Be sure to cooperate fully with the bank's advisor to speed up the process." },
    { question: "How long does it take to open a Bank of America account?", answer: "6-8 weeks" },
    { question: "What are the outgoing wire transfer fees at Bank of America?", answer: "Domestic wire transfers: $30 USD/transaction\nInternational wire transfers (foreign currency): $35 USD/transaction\nInternational wire transfers (USD): $45 USD/transaction" }
])
const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }
onMounted(async () => {
    await nextTick()
    const sections = ['.boa_content2 .content1','.boa_content2 .content2','.boa_content2 .content3','.boa_content2 .content4','.content_bank','.boa_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
