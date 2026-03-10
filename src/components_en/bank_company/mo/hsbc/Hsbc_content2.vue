<template>
    <div class="mo_hsbc_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">HSBC Macau Introduction</div>
                <div class="intro">
                    <img src="@/assets/img/bank/mo/汇丰银行.png" alt="HSBC Macau">
                    <div class="text">
                        <P>HSBC is a foreign bank. Its full name is The Hongkong and Shanghai Banking Corporation Limited (HSBC). HSBC Holdings plc is a wholly-owned subsidiary of HSBC Holdings Limited, a founding member and flagship of the HSBC Group in Asia Pacific, and the largest registered bank in Hong Kong, as well as one of the three note-issuing banks in Hong Kong.</P>
                        <P>Headquartered at 1 Queen's Road Central, HSBC Main Building, Hong Kong, HSBC and its subsidiaries currently operate approximately 700 branches and offices in the Asia-Pacific region. On October 18, 2021, the Hong Kong Monetary Authority (HKMA) announced that HSBC was authorized to conduct Cross-boundary Wealth Management Connect business.</P>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">HSBC Macau Account Opening Advantages</div>
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
                        <div class="condition-item">Main company documents: Certificate of Incorporation, Business Registration Certificate, Incorporation Form, Articles of Association</div>
                        <div class="condition-item">Director/Shareholder documents: Personal ID documents for all directors and shareholders</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Financial audit proof: Recent 6-month bank statements, recent 1-year profit statement, or recent 1-year audit report</div>
                        <div class="condition-item">Business verification: Sales invoices and related contracts of the HK company and offshore company</div>
                    </div>
                </div>
            </div>

            <MaintenanceGuide />

            <div class="content4">
                <div class="title">HSBC Macau Account Opening Process</div>
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
                <div class="title">HSBC Macau FAQs</div>
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
import '@/css_en/bank_company/mo/hsbc/Hsbc_content2.css'
import MO_Cooperative_Bank from '@/components_en/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-notes', title: 'Witness Appointment', description: 'After review approval, schedule an appointment for account opening witness at a domestic HSBC branch' },
    { iconId: '#icon-folder-success-one', title: 'Account Activation', description: 'NRA account activated on the same day or within 1-2 business days' },
    { iconId: '#icon-airplane', title: 'Security Token Delivery', description: 'After account activation, security token is mailed to the client' }
]

const advantage = [
    { iconId: '#icon-finance', title: 'Free Foreign Exchange', description: 'Freely send and receive foreign currencies from other countries, without exchange quota restrictions' },
    { iconId: '#icon-user', title: 'Convenient Communication', description: 'Dedicated professional relationship manager for one-on-one account follow-up, reducing risk of unexpected account closure' },
    { iconId: '#icon-doc-success', title: 'Simple & Efficient', description: 'Simple documentation requirements, fast account opening, and streamlined procedures' },
    { iconId: '#icon-world', title: 'Convenient Online Banking', description: 'Provides 24/7 bilingual online banking services for easy global asset management anytime, anywhere' }
]

const faqs = ref([
    { question: "Can HSBC Macau accounts be opened on weekends?", answer: "No, HSBC Macau business hours are Monday to Friday, 9:00-17:00." },
    { question: "How long does it take to open an HSBC Macau account?", answer: "Same-day account opening and card issuance." },
    { question: "Do I need to make an appointment in advance for HSBC Macau?", answer: "Under normal circumstances, an appointment is needed 3-5 business days in advance." }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_hsbc_content2 .content1', '.mo_hsbc_content2 .content2', '.mo_hsbc_content2 .content3', '.mo_hsbc_content2 .content4', '.content_bank', '.mo_hsbc_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
