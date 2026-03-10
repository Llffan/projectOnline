<template>
    <div class="mo_bnu_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">BNU (Banco Nacional Ultramarino) Macau Introduction</div>
                <div class="intro">
                    <img src="@/assets/img/bank/mo/大西洋银行.png" alt="BNU Macau">
                    <div class="text">
                        <P>Banco Nacional Ultramarino (BNU) is one of the commercial banks in Macau. Originally known as "Banco Nacional Ultramarino", its head office is in Lisbon, Portugal. All banknotes circulated by the Macau-Portuguese government were issued by this bank, making it the sole note-issuing bank of Portugal in Macau. Located at the corner of Avenida de Almeida Ribeiro and Praia Grande, it is an imposing building.</P>
                        <P>BNU has been committed to providing quality banking and financial services to individuals and corporate clients in Macau and around the world. Its business scope includes remittances to Portugal and worldwide, government account management, and corporate banking, with vault and safe deposit box facilities.</P>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">BNU Account Opening Advantages</div>
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
                        <div class="condition-item">Basic company certificates: CR, BR, NNC1/NAR1, Articles of Association, and Shareholding Structure</div>
                        <div class="condition-item">Related business documents: Purchase and sales contracts, supplementary invoices and supporting documents</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Identity & financial proof: Director's ID, Travel Permit, recent 3-month bank statements, and address proof</div>
                        <div class="condition-item">Required forms: Completed account opening declaration and KYC compliance check</div>
                    </div>
                </div>
            </div>

            <MaintenanceGuide />

            <div class="content4">
                <div class="title">BNU Account Opening Process</div>
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
                <div class="title">BNU FAQs</div>
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
import '@/css_en/bank_company/mo/bnu/Bnu_content2.css'
import MO_Cooperative_Bank from '@/components_en/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-notes', title: 'Submit Pre-review', description: 'Prepare electronic documents and send to bank for preliminary review' },
    { iconId: '#icon-user', title: 'Review Approved', description: 'Bank reviews and approves documents and confirms account opening intent' },
    { iconId: '#icon-airplane', title: 'Sign & Verify', description: 'Client self-selects location for signing the account agreement and related documents' },
    { iconId: '#icon-folder-success-one', title: 'Account Success', description: 'Successfully complete account activation and issue account materials' }
]

const advantage = [
    { iconId: '#icon-good-two', title: 'Ultra-Fast Opening', description: 'No search fees, efficient approval, account opened in as fast as 3 days, maximum 7 business days' },
    { iconId: '#icon-world', title: 'Nationality Inclusive', description: 'Except for high-risk countries, directors of all other nationalities can normally apply for account opening' },
    { iconId: '#icon-finance', title: 'Zero Management Fee', description: 'No annual account management fee, no mandatory pre-deposit, no bundled wealth management or insurance' },
    { iconId: '#icon-phone-telephone', title: 'Remote Convenience', description: 'Entire process without border crossing, no video or witness required; online banking uses mobile SMS verification' }
]

const faqs = ref([
    { question: "What currencies can be opened at Macau banks?", answer: "Macau banks offer multi-currency accounts. In addition to Macau Pataca, USD, and HKD, they also include NZD, AUD, JPY, EUR, GBP, and other common currencies - ideal for stock trading or fund investment." },
    { question: "How long does it take to open a BNU account?", answer: "Typically 3-7 business days for account opening." },
    { question: "Does BNU provide a security token?", answer: "No security token. Online banking verification is done through mobile SMS one-time passwords." }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_bnu_content2 .content1', '.mo_bnu_content2 .content2', '.mo_bnu_content2 .content3', '.mo_bnu_content2 .content4', '.content_bank', '.mo_bnu_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
