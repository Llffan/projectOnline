<template>
    <div class="mo_bcp_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">BCP Bank Macau Introduction</div>
                <div class="intro">
                    <img src="@/assets/img/bank/mo/葡萄牙商业银行.png" alt="BCP Bank Macau">
                    <div class="text">
                        <P>Banco Comercial Portugues (BCP) is a Portuguese bank established in 1985. It is one of the top ten banks in Portugal and the largest private bank in the country. Headquartered in Porto with operations in Lisbon, it serves over 4.3 million clients worldwide and has more than 900 branches in Portugal. BCP is a constituent of the Euronext 100 index.</P>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">BCP Bank Account Opening Advantages</div>
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
                        <div class="condition-item">Company certification documents: Full set of company documents (Certificate of Incorporation, Business Registration Certificate, etc.)</div>
                        <div class="condition-item">Related business documents: Business contracts (contracts with HK and domestic companies are acceptable)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Signing requirements: Company director must visit Macau in person for signing</div>
                        <div class="condition-item">Balance requirement: Deposit equivalent of HKD 50,000 within 2 months after account opening to activate and maintain balance</div>
                    </div>
                </div>
            </div>

            <MaintenanceGuide />

            <div class="content4">
                <div class="title">BCP Bank Account Opening Process</div>
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
                <div class="title">BCP Bank FAQs</div>
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
import '@/css_en/bank_company/mo/bcp/Bcp_content2.css'
import MO_Cooperative_Bank from '@/components_en/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-notes', title: 'Submit Pre-review', description: 'Select your intent then submit documents for pre-review and sign the service contract' },
    { iconId: '#icon-user', title: 'Form Verification', description: 'Complete detailed bank questionnaire to verify background qualifications' },
    { iconId: '#icon-airplane', title: 'Choose Signing Method', description: 'Choose to visit Macau in person or sign remotely through witness procedures' },
    { iconId: '#icon-folder-success-one', title: 'Account Success', description: 'Same-day account at Macau/domestic branch, or account within 2 weeks via mail documents' }
]

const advantage = [
    { iconId: '#icon-phone', title: 'Remote Channels', description: 'Offers flexible remote channels supporting telephone and internet banking services' },
    { iconId: '#icon-finance', title: 'Generous Limits', description: 'As a foreign bank, convenient international remittances with unlimited accounts, no restrictions on inbound/outbound transfers' },
    { iconId: '#icon-good-two', title: 'Accessible Threshold', description: 'Low entry threshold with easy-to-meet requirements and relatively short review cycles' },
    { iconId: '#icon-world', title: 'Multi-Currency Payments', description: 'Multi-currency accounts supporting over 10 mainstream currencies for receiving and sending' }
]

const faqs = ref([
    { question: "What are the advantages of opening a BCP Bank account in Macau?", answer: "The account is a European account. Europe is one of the world centers of trade and economics, holding an indispensable international position. Having a European account is more convenient with higher international recognition. Transfers between the 36 SEPA member countries cost only 1 Euro and arrive within one business day." },
    { question: "How long does it take to open a BCP Bank account?", answer: "The typical evaluation period is approximately 4-6 weeks for account opening." },
    { question: "Is there a fee for incoming wire transfers at BCP Bank?", answer: "Under applicable conditions, it is free of charge." }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_bcp_content2 .content1', '.mo_bcp_content2 .content2', '.mo_bcp_content2 .content3', '.mo_bcp_content2 .content4', '.content_bank', '.mo_bcp_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
