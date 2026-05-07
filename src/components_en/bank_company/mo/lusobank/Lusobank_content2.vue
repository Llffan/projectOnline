<template>
    <div class="mo_lusobank_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">Luso International Banking Introduction</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/国际银行.png" alt="Luso International Banking">
                    <div class="text">
                        <P>Luso International Banking Limited was registered and established in Macau in 1974. In 1985, it became a wholly-owned subsidiary of Xiamen International Bank, the first Sino-foreign joint venture bank in China, conducting all commercial banking operations. Over the years, through continuous effort, the bank's business has flourished and grown rapidly. As one of the major commercial banks in Macau, the bank currently has branches throughout major areas of Macau, wholeheartedly serving the general public, and with a stable management approach, proactive strategy, and commitment to quality service, striving to contribute to Macau's development.</P>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">Luso International Banking Account Opening Advantages</div>
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
                        <div class="condition-item">Company certification documents: Business Registration Certificate, M1, Shareholding Structure Chart, M8, etc.</div>
                        <div class="condition-item">Business verification documents: Major upstream/downstream business contracts and invoices</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Identity verification: Shareholder ID proof, address proof, Macau Travel Permit, bank statements</div>
                        <div class="condition-item">Related company documents (if applicable): Certificate of Incorporation, bank statements, business contracts, invoices, B/L, etc.</div>
                    </div>
                </div>
            </div>

            <MaintenanceGuide />

            <div class="content4">
                <div class="title">Luso International Banking Account Opening Process</div>
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
                <div class="title">Luso International Banking FAQs</div>
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
import '@/css_en/bank_company/mo/lusobank/Lusobank_content2.css'
import MO_Cooperative_Bank from '@/components_en/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-notes', title: 'Document Review', description: 'Submit materials for preliminary review by professionals and bank systems' },
    { iconId: '#icon-airplane', title: 'Mail Signing Documents', description: 'After document review and confirmation, specified signing documents will be mailed' },
    { iconId: '#icon-user', title: 'Return Originals', description: 'After applicant signing, return verified and approved original documents for verification' },
    { iconId: '#icon-folder-success-one', title: 'Account Activation', description: 'Successfully complete the account opening process and issue account materials to the client' }
]

const advantage = [
    { iconId: '#icon-good-two', title: 'Truly Low Threshold', description: 'No mandatory high deposits, no additional wealth management products required, and management fees are waived' },
    { iconId: '#icon-finance', title: 'Ultra-High Transfer Limits', description: 'No exchange restrictions, supporting up to 100 million daily limit for foreign currency transfer operations' },
    { iconId: '#icon-world', title: 'Full Remote Service', description: 'HK/Macau companies can enjoy border-free benefits without visiting Macau in person - we handle the entire process' },
    { iconId: '#icon-doc-success', title: 'Fast Approval', description: 'Extremely short processing time, approximately 7-12 business days depending on license type' }
]

const faqs = ref([
    { question: "What are the important notes for opening a Macau bank account?", answer: "1. Different banks have different requirements - there are both Chinese and foreign banks. Some require advance appointments, some require HKD 50,000 in fixed deposits. Selection depends on the client's actual qualifications and needs.\n2. The entire account opening interview process takes approximately half an hour.\n3. Remember to activate Global Payment Service, so you can use the bank card for consumption or transfers in mainland China or other countries." },
    { question: "How long does it take to open a Luso International Banking account?", answer: "If pre-review work is sufficient, same-day account opening is possible." },
    { question: "Do I need to make an appointment in advance for Luso International Banking?", answer: "Usually need to make an appointment 3-5 business days in advance." }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_lusobank_content2 .content1', '.mo_lusobank_content2 .content2', '.mo_lusobank_content2 .content3', '.mo_lusobank_content2 .content4', '.content_bank', '.mo_lusobank_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
