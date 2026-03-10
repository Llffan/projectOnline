<template>
    <div class="mo_icbc_asia_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">ICBC Asia Macau Introduction</div>
                <div class="intro">
                    <img src="@/assets/img/bank/mo/工银亚洲银行.png" alt="ICBC Asia Macau">
                    <div class="text">
                        <P>The predecessor of ICBC Asia Macau was Seng Heng Bank, established in 1972, which was once the third-largest bank in Macau. In 2009, ICBC acquired 79.9% of its shares, making it a subsidiary of ICBC. ICBC was the first bank in Greater China to issue prepaid debit cards. It operates 106 branches, including a branch in Shenzhen specializing in foreign currency wholesale business, a branch in Singapore, and representative offices in Xiamen and Taipei.</P>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">ICBC Asia Account Opening Advantages</div>
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
                        <div class="condition-item">Full set of Hong Kong company documents (including CR Certificate, BR Certificate, NNC1, Articles of Association, and company seal)</div>
                        <div class="condition-item">Original mainland China resident ID card and Hong Kong-Macau Travel Permit</div>
                        <div class="condition-item">Address proof within 3 months (utility bills, bank statements, etc.)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Purchase and sales contracts, trade account statements, and trade documents of the domestic company</div>
                        <div class="condition-item">Hong Kong customs entry border crossing slip</div>
                    </div>
                </div>
            </div>

            <MaintenanceGuide />

            <div class="content4">
                <div class="title">ICBC Asia Account Opening Process</div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage">
                        <div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div>
                        <div class="text1">{{ item.title }}</div>
                        <div class="text2">{{ item.description }}</div>
                    </div>
                </div>
            </div>

            <ChooseUs />

            <div class="content6">
                <div class="title">ICBC Asia Macau FAQs</div>
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
import '@/css_en/bank_company/mo/icbc_asia/IcbcAsia_content2.css'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-notes', title: 'Document Submission', description: 'The receiving branch compiles and sends relevant account opening documents to ICBC Asia' },
    { iconId: '#icon-communication', title: 'Verification Call', description: 'After verifying document completeness, ICBC Asia customer service center will call to verify your information' },
    { iconId: '#icon-folder-success-one', title: 'Access Activation', description: 'On the 2nd business day after phone confirmation, your applied online/telephone banking services will be activated' },
    { iconId: '#icon-airplane', title: 'Card Delivery', description: 'Within 7-10 business days after phone confirmation, you will receive the bank card via courier from ICBC Asia' }
]

const advantage = [
    { iconId: '#icon-positive-dynamics', title: 'Direct HK Stock Access', description: 'ICBC Asia wealth management accounts can directly participate in Hong Kong stock investments without needing to open an account with a local broker' },
    { iconId: '#icon-peoples', title: 'Mainland China Background', description: 'ICBC Asia is a branch of mainland ICBC in Hong Kong, which is favored by mainland Chinese clients' },
    { iconId: '#icon-bank-transfer', title: 'Free Inter-bank Transfer', description: 'Transfers from mainland ICBC APP to ICBC Asia accounts are fee-free and arrive in real-time' },
    { iconId: '#icon-transaction', title: 'Cost-effective & Convenient', description: 'Transfers do not require supporting documents, making the process convenient and user-friendly' }
]

const faqs = ref([
    { question: "How do I get the activation code for the ICBC Asia security token?", answer: "After account activation, ICBC Asia will send the activation code directly to the mobile number registered by the client.\n\nIf you have not received the e-token activation code or deleted it by mistake, please call HK local service hotline (852) 21895588 or mainland ICBC service hotline 95588, then press 7-7-2-1 to reach HK customer service and request re-sending of the activation code.\n\nIf you still do not receive it after multiple attempts, please check your phone settings for automatic spam filtering or contact your telecom provider." },
    { question: "How long does it take to open an ICBC Asia Macau account?", answer: "Same-day account opening and card issuance." },
    { question: "Do I need to make an appointment in advance for ICBC Asia Macau?", answer: "Yes, an appointment 3-5 business days in advance is required." }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_icbc_asia_content2 .content1', '.mo_icbc_asia_content2 .content2', '.mo_icbc_asia_content2 .content3', '.mo_icbc_asia_content2 .content4', '.mo_icbc_asia_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
