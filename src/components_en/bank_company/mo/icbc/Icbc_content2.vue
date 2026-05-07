<template>
    <div class="mo_icbc_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction -->
            <div class="content1">
                <div class="title">ICBC Macau Introduction</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/工商银行.png" alt="ICBC Macau">
                    <div class="text">
                        <P>The Industrial and Commercial Bank of China (ICBC) Macau Branch was established in January 2020 as one of the head office's directly-managed overseas branches. Leveraging ICBC's leading market position, diversified business structure, strong innovation capabilities, and outstanding brand value, it provides comprehensive financial services including syndicated loans, project financing, trade financing, and international settlement, committed to becoming an important bridge for the Greater Bay Area and China-Portuguese-speaking countries economic and trade exchanges, and enhancing ICBC's international influence and competitiveness.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">ICBC Macau Account Opening Advantages</div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text1">{{ item.title }}</div>
                        <div class="text2">{{ item.description }}</div>
                    </div>
                </div>
            </div>

            <!-- 3. Required Documents -->
            <div class="content3">
                <div class="title">Required Documents for Corporate Account</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Macau company business registration documents (such as M1/M8 tax registration forms and related documents)</div>
                        <div class="condition-item">Identity documents and proof of all directors, shareholders, and ultimate beneficial owners</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Company internal authorized signatory specimen and specific board authorization letter documents</div>
                        <div class="condition-item">Financial statements of related companies (additional bank statements may be required depending on specific due diligence requirements)</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">ICBC Macau Account Opening Process</div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text1">{{ item.title }}</div>
                        <div class="text2">{{ item.description }}</div>
                    </div>
                </div>
            </div>

            <!-- 5. Why Choose Us -->
            <ChooseUs />

            <!-- Partner Banks -->
            <MO_Cooperative_Bank class="content_bank" />

            <!-- 6. FAQs -->
            <div class="content6">
                <div class="title">ICBC Macau FAQs</div>
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
import '@/css_en/bank_company/mo/icbc/Icbc_content2.css'
import MO_Cooperative_Bank from '@/components_en/bank_company/common/MO_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-communication', title: 'Initial Consultation', description: 'Conduct initial communication to confirm account opening intent and requirements' },
    { iconId: '#icon-notes', title: 'Document Pre-review', description: 'Submit relevant background documents for pre-review, response within 1-3 days' },
    { iconId: '#icon-audit', title: 'Formal Processing', description: 'Upon approval, automatically proceed to formal account opening process' },
    { iconId: '#icon-user', title: 'Video Signing', description: 'Receive approval within approximately 1 week and schedule video witness signing domestically' },
    { iconId: '#icon-airplane', title: 'Document Courier', description: 'Approval completed in approximately 2 weeks, bank will courier account materials and correspondence domestically' },
    { iconId: '#icon-folder-success-one', title: 'Activation & Completion', description: 'Upon receiving bank-issued materials and passwords, follow up with activation to complete the service' }
]

const advantage = [
    { iconId: '#icon-finance', title: 'Premium Private Banking', description: 'Committed to providing clients with quick, convenient, and premium private banking supporting services' },
    { iconId: '#icon-protect', title: 'High Confidentiality', description: 'Bank operations strictly adhere to high-standard client information confidentiality policies with integrity and trust' },
    { iconId: '#icon-phone-call', title: 'Multilingual Support', description: 'Embracing a client-first approach, online banking and customer center provide professional multilingual services' },
    { iconId: '#icon-shield', title: 'Government-backed Security', description: 'Protected by Macau SAR government legislation ensuring deposit and transfer mechanisms, with dual security and privacy' }
]

const faqs = ref([
    { question: "How can a Macau company open an account at ICBC Macau?", answer: "A corporate bank account can only be applied for after the Macau company is established. Generally, directors must visit the bank in person or undergo a strict video witness process. A notarized copy from the government notary office must be arranged before account opening, and a referral introducer must be confirmed.\n\nDue to the complex procedures and documentation requirements, it is recommended to contact our consultants in advance for full agency services and to issue bank referral permission documents." },
    { question: "How long does it take to open an ICBC Macau account?", answer: "The entire process from pre-review to issuance generally takes about one month. Clients with clear and complete documentation can often receive passwords and online banking access earlier." },
    { question: "What currencies can be opened at ICBC Macau?", answer: "Macau banks offer multi-currency comprehensive accounts. In addition to basic Macau Pataca, Hong Kong Dollar, RMB, and USD, they typically include New Zealand Dollar, Australian Dollar, Japanese Yen, Euro, and British Pound, greatly meeting the core needs of diversified corporate clients for overseas expansion and global asset allocation." }
])

const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_icbc_content2 .content1', '.mo_icbc_content2 .content2', '.mo_icbc_content2 .content3', '.mo_icbc_content2 .content4', '.content_bank', '.mo_icbc_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
