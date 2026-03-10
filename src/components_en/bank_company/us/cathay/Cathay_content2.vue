<template>
    <div class="cathay_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About Cathay Bank</div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/国泰银行.png" alt="Cathay Bank">
                    <div class="text"><P>Founded in 1962, Cathay Bank was the first Chinese-American bank in Southern California, primarily serving the growing Chinese and Asian communities in greater Los Angeles. Over the years, it has grown into a regional banking group with total assets of $2.5 billion, 23 branches across the U.S., offices in Hong Kong and Shanghai, and has been listed on NASDAQ (CATY) since 1990. Corporate accounts with Cathay Bank enable free fund transfers, no foreign exchange controls, and flexible banking to better support overseas business expansion.</P></div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of Cathay Bank Account Opening</div>
                <div class="intro"><div v-for="(item, index) in advantage" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <div class="content3">
                <div class="title">Documents Required for Corporate Account</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">U.S. company registration documents</div>
                        <div class="condition-item">Clear scanned copies of directors' and shareholders' ID cards and passports</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Cathay Bank KYC form</div>
                        <div class="condition-item">One set of purchase and sales contracts</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">Cathay Bank Account Opening Process</div>
                <div class="intro"><div v-for="(item, index) in registrationProcess" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <ChooseUs />
            <US_Cooperative_Bank class="content_bank" />
            <div class="content6">
                <div class="title">Cathay Bank FAQs</div>
                <div class="intro"><div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ 'expanded': expandedItems[index] }"><div style="white-space: pre-line;">{{ faq.answer }}</div></div></div></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/bank_company/us/cathay/Cathay_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-upload-one', title: 'Step 1', description: 'With complete documents, the account is opened first and emailed to the client' },
    { iconId: '#icon-audit', title: 'Step 2', description: 'Client signs all received bank documents by hand and mails them back to Cathay Bank' },
    { iconId: '#icon-finance', title: 'Step 3', description: 'After receiving the documents, the bank issues online banking login credentials and initial password within approximately one week' }
]
const advantage = [
    { iconId: '#icon-shield', title: 'Safer Funds', description: 'The U.S. has a highly developed financial environment with a robust banking system, ensuring greater fund security without deposit/withdrawal restrictions.' },
    { iconId: '#icon-phone-call', title: 'Remote Account Opening', description: 'No need to travel abroad — in certain cases, video processing and remote document signing are supported.' },
    { iconId: '#icon-world', title: 'High Global Recognition', description: 'U.S. accounts are highly recognized globally, with smooth cross-border transfers and low risk of blocking.' },
    { iconId: '#icon-transaction', title: 'Convenient Fund Arrival', description: 'Easy to receive funds from U.S. and North American clients, with minimal or zero handling fees.' }
]
const faqs = ref([
    { question: "Does Cathay Bank accept checks?", answer: "Yes. Currently supports international wire transfers, domestic ACH transfers, and checks. You can also issue checks to others." },
    { question: "How long does it take to open a Cathay Bank account?", answer: "6-8 weeks" },
    { question: "What is the recommended initial deposit for a Cathay Bank account?", answer: "A $3,000 USD initial deposit waives the management fee." }
])
const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }
onMounted(async () => {
    await nextTick()
    const sections = ['.cathay_content2 .content1','.cathay_content2 .content2','.cathay_content2 .content3','.cathay_content2 .content4','.content_bank','.cathay_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
