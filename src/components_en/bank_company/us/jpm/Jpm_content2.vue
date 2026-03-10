<template>
    <div class="jpm_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About JPMorgan Chase Bank</div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/摩根大通银行.png" alt="JPMorgan Chase">
                    <div class="text">
                        <P>JPMorgan Chase, headquartered in New York, holds total assets of $2.5 trillion and total deposits of $1.5 trillion, representing 25% of all U.S. deposits. With over 6,000 branches, it is one of the largest financial services institutions in the United States. Formed in 2000 through the merger of Chase Manhattan Bank and J.P. Morgan & Company, JPMorgan Chase subsequently acquired Chicago First National Bank, Bear Stearns, and Washington Mutual. It is a multinational financial services institution operating in over 60 countries, offering investment banking, financial transaction processing, investment management, commercial finance, and personal banking services.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of JPMorgan Chase Account Opening</div>
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
                        <div class="condition-item">Articles of Incorporation</div>
                        <div class="condition-item">Federal Tax ID (EIN)</div>
                        <div class="condition-item">Bylaws</div>
                        <div class="condition-item">KYC Assessment Form</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Color scanned copies of director's ID card and passport</div>
                        <div class="condition-item">Passport selfie photo</div>
                        <div class="condition-item">Domestic phone, U.S. phone number (for records only, no calls needed), email address</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">JPMorgan Chase Account Opening Process</div>
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
                <div class="title">JPMorgan Chase FAQs</div>
                <div class="intro">
                    <div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)">
                        <div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span></div>
                        <div class="faq-answer" :class="{ 'expanded': expandedItems[index] }"><div style="white-space: pre-line;">{{ faq.answer }}</div></div>
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
import '@/css_en/bank_company/us/jpm/Jpm_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-upload-one', title: 'Step 1', description: 'Submit documents and pre-review: Prepare registration certificates and other materials for bank review.' },
    { iconId: '#icon-phone-call', title: 'Step 2', description: 'Video signing: Complete the interview through a video call with the bank for electronic signing.' },
    { iconId: '#icon-folder-success-one', title: 'Step 3', description: 'Mail documents: Send scanned copies of signed basic materials to the bank.' },
    { iconId: '#icon-finance', title: 'Step 4', description: 'Account activation: Deposit activation funds after the account is opened to activate and use online banking.' }
]

const advantage = [
    { iconId: '#icon-shield', title: 'Strong Background', description: 'Headquartered in New York with total assets of $2.5 trillion, one of the largest financial institutions in the U.S.' },
    { iconId: '#icon-world', title: 'Ultra-Fast Transfers', description: 'Lightning-fast transfers with no limits and instant arrival for a convenient transfer experience.' },
    { iconId: '#icon-phone-call', title: 'Remote Account Opening', description: 'Open your account via remote video without the hassle of traveling — no need to visit in person.' },
    { iconId: '#icon-audit', title: 'Fully Compliant', description: 'The entire account opening process is fully legal and compliant, with simple documentation requirements. Currently only accepting genuine, compliant clients.' }
]

const faqs = ref([
    { question: "What are the wire transfer fees for JPMorgan Chase corporate accounts?", answer: "Incoming wires are free. Outgoing wires cost $40 USD per transaction, comparable to Singapore and Swiss bank fee standards. Additionally, if the daily average balance falls below $1,500 USD, a $30 USD management fee applies." },
    { question: "How long does it take to open a JPMorgan Chase account?", answer: "6-8 weeks" },
    { question: "Who is JPMorgan Chase most suitable for?", answer: "1. Overseas asset allocation;\n2. Education, immigration, travel reserve funds;\n3. Cross-border e-commerce businesses/individuals;\n4. Individuals unable or too busy to visit the U.S." },
    { question: "What other important things should I know about opening a JPMorgan Chase account?", answer: "1. We can provide a U.S. address for receiving bank cards. If you need to continue receiving mail, an additional address rental fee applies;\n2. Within 2 weeks of successfully opening the account, a deposit of $100,000 USD is required to activate the account;\n3. A U.S. phone number must be provided by the client, for records only — no calls needed." }
])

const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }
onMounted(async () => {
    await nextTick()
    const sections = ['.jpm_content2 .content1','.jpm_content2 .content2','.jpm_content2 .content3','.jpm_content2 .content4','.content_bank','.jpm_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
