<template>
    <div class="mercury_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About Mercury Bank</div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/水星银行.png" alt="Mercury Bank">
                    <div class="text"><p>Mercury is a digital banking company headquartered in San Francisco, California, offering banking services and accounts specifically designed for startups. It offers many advantages: zero registration cost, zero fees for WIRE/ACH transfers, no minimum balance requirements, and easy account opening. Currently, Mercury only supports corporate accounts, not personal accounts. Nevertheless, for cross-border traders based in China, Mercury remains one of the top choices for opening a USD account.</p></div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of Mercury Bank Account Opening</div>
                <div class="intro"><div v-for="(item, index) in advantage" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <div class="content3">
                <div class="title">Documents Required for Corporate Account</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Company address</div>
                        <div class="condition-item">Email address</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Full set of company documents</div>
                        <div class="condition-item">EIN Tax ID</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">Mercury Bank Account Opening Process</div>
                <div class="intro"><div v-for="(item, index) in registrationProcess" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <ChooseUs />
            <US_Cooperative_Bank class="content_bank" />
            <div class="content6">
                <div class="title">Mercury Bank FAQs</div>
                <div class="intro"><div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ 'expanded': expandedItems[index] }"><div style="white-space: pre-line;">{{ faq.answer }}</div></div></div></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/bank_company/us/mercury/Mercury_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
gsap.registerPlugin(ScrollTrigger)
const registrationProcess = [
    { iconId: '#icon-notes', title: 'Step 1', description: 'Client submits documents and KYC form for registration, awaiting bank review' },
    { iconId: '#icon-audit', title: 'Step 2', description: 'With complete documents, review takes 3 business days; if additional materials are needed, 7 business days' }
]
const advantage = [
    { iconId: '#icon-finance', title: 'Zero Monthly Fees', description: 'Pay $0 per month. WIRE and ACH transfers are both fee-free' },
    { iconId: '#icon-shield', title: 'FDIC Insured', description: 'Compliant bank account protected by U.S. FDIC insurance policy' },
    { iconId: '#icon-upload-one', title: 'Remote & Simple', description: 'No mandatory SSN or ITIN required. Remote identity verification, no visa needed' },
    { iconId: '#icon-protect', title: 'Privacy & Security', description: 'The U.S. is a non-CRS country — no need to worry about account financial information being exchanged back to your home country' },
    { iconId: '#icon-phone-telephone', title: 'Card Management', description: 'Issue physical cards and create virtual cards anytime. Manage limits through the app' },
    { iconId: '#icon-world', title: 'Global Payments', description: 'Connect to any payment processor, send and receive payments globally' },
    { iconId: '#icon-secure-payment-line', title: 'Super API', description: 'Highly automated financial API for extremely smooth third-party integrations' },
    { iconId: '#icon-positive-dynamics', title: 'Wide Scope', description: 'Minimal industry restrictions — most legitimate businesses and startups can open accounts' }
]
const faqs = ref([
    { question: "Is there a minimum balance requirement for Mercury Bank accounts?", answer: "No minimum requirement. Deposit based on your personal needs." },
    { question: "Does Mercury Bank accept checks?", answer: "Yes. Currently supports international wire transfers, domestic ACH transfers, and checks.\n\nYou can also issue checks to others." },
    { question: "Can I open a Mercury account with a Cyprus or Vanuatu passport?", answer: "Yes.\n\nExcept for sanctioned countries like Iran, Iraq, and North Korea, passports from most countries including Caribbean nations (St. Kitts, Dominica, Antigua, St. Lucia, Grenada), Cyprus, Vanuatu, and Turkey can all be used to open an account." },
    { question: "Does Mercury Bank support Stripe or PayPal?", answer: "Yes.\n\nMercury has excellent support for these third-party platforms. Mercury integrates with major financial institutions through Plaid with exceptional efficiency." }
])
const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }
onMounted(async () => {
    await nextTick()
    const sections = ['.mercury_content2 .content1','.mercury_content2 .content2','.mercury_content2 .content3','.mercury_content2 .content4','.content_bank','.mercury_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
