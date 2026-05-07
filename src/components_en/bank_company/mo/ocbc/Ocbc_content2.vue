<template>
    <div class="mo_ocbc_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">OCBC Bank Macau Introduction</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/华侨银行.png" alt="OCBC Bank Macau">
                    <div class="text">
                        <P>Wing Hang Bank is one of the largest banks in Macau. Founded in Guangzhou in 1937, it relocated to Macau in 1941 to continue operations. In 1984, Hong Kong Wing Hang Bank acquired Macau Wing Hang Bank, making it a wholly-owned subsidiary of Hong Kong Wing Hang Bank and a member of the Bank of New York Mellon.</P>
                        <P>Over the years, Wing Hang Bank has provided retail banking services, corporate banking services, and foreign exchange and financial services, continuously introducing innovative products with a proactive management approach. Wing Hang Bank, as the group's holding company and primary business operating entity, has over 50 branches and representative offices in Hong Kong, Macau, and China.</P>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">OCBC Bank Macau Account Opening Advantages</div>
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
                        <div class="condition-item">Basic ID: Client must hold and present a valid personal ID card</div>
                        <div class="condition-item">Travel documents: Hong Kong-Macau Travel Permit or entry paperwork required for verification</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Employment proof: Client occupation verification (e.g., employment contract or social security proof)</div>
                        <div class="condition-item">Qualification check: Must cover recent 6-month social security records and bank statement verification</div>
                    </div>
                </div>
            </div>

            <div class="content4">
                <div class="title">OCBC Bank Macau Account Opening Process</div>
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
                <div class="title">OCBC Bank Macau FAQs</div>
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
import '@/css_en/bank_company/mo/ocbc/Ocbc_content2.css'
import MO_Cooperative_Bank from '@/components_en/bank_company/common/MO_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-notes', title: 'Prepare & Pre-review', description: 'Prepare electronic documents and send to bank for preliminary review' },
    { iconId: '#icon-user', title: 'Bank Review', description: 'Requires at least 1-2 business days for preliminary document verification' },
    { iconId: '#icon-airplane', title: 'On-site Processing', description: 'After approval, receive notification and visit at the scheduled appointment time' },
    { iconId: '#icon-folder-success-one', title: 'Account Success', description: 'On-site processing takes about 1 hour, account confirmed immediately upon completion' }
]

const advantage = [
    { iconId: '#icon-finance', title: 'Extensive Business Coverage', description: 'Supports normal handling of Letters of Credit, DP, DA, and multiple international business operations' },
    { iconId: '#icon-world', title: 'Highly Inclusive', description: 'Accepts account opening from island and third-world countries, and receives overseas remittances from African regions' },
    { iconId: '#icon-good-two', title: 'Low-Cost Maintenance', description: 'Low daily account management fees with threshold exemption available at relatively low balance requirements' },
    { iconId: '#icon-transaction', title: 'Multi-Currency Access', description: 'No regional exchange controls, free fund flow in and out with multiple currencies freely convertible via online banking' }
]

const faqs = ref([
    { question: "How long does it take to open an OCBC Bank Macau account?", answer: "Same-day account opening and card issuance upon successful review completion." },
    { question: "What is the account limit for OCBC Bank Macau?", answer: "The limit is MOP 1,000,000. The domestic same-name account transfer limit is RMB 80,000/day." }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_ocbc_content2 .content1', '.mo_ocbc_content2 .content2', '.mo_ocbc_content2 .content3', '.mo_ocbc_content2 .content4', '.content_bank', '.mo_ocbc_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
