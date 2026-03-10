<template>
    <div class="cbi_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About CBiBank</div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/富港银行.png" alt="CBiBank">
                    <div class="text">
                        <P>CB International Bank (CBiBank), established in June 2017, is a commercial bank holding a U.S. banking license and regulated by U.S. banking authorities, headquartered in Puerto Rico. As a member of the Federal Reserve (ABA), SWIFT network (code: CBLBPRSJ), UnionPay International, and Cross-border RMB Clearing (CIPS), CBiBank offers both corporate and personal banking services. Corporate accounts enjoy free fund transfers, no foreign exchange controls, flexible deposits/withdrawals, and tax optimization, providing greater support for overseas business. Personal accounts facilitate overseas shopping, property purchases, investments, immigration, and global wealth management.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of CBiBank Account Opening</div>
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
                        <div class="list-title">Hong Kong Company</div>
                        <div class="condition-item">CI Certificate of Incorporation, BR Business Registration Certificate</div>
                        <div class="condition-item">MA Articles of Association (English version)</div>
                        <div class="condition-item">NNC1 Incorporation Form</div>
                        <div class="condition-item">NAR1 Annual Return (not required if less than one year old)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="list-title">Offshore/Other Companies</div>
                        <div class="condition-item">Certificate of Incorporation, Articles of Association</div>
                        <div class="condition-item">Certificate of Incumbency, Certificate of Good Standing (not required if less than one year old)</div>
                        <div class="condition-item">Shareholders holding over 25% must provide: ID card + passport (or driving license/travel document)</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">CBiBank Account Opening Process</div>
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
                <div class="title">CBiBank FAQs</div>
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
import '@/css_en/bank_company/us/cbi/Cbi_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-upload-one', title: 'Step 1', description: 'Submit documents' },
    { iconId: '#icon-audit', title: 'Step 2', description: 'Bank preliminary review (1-2 days)' },
    { iconId: '#icon-phone-call', title: 'Step 3', description: 'Video interview + phone verification (1 day)' },
    { iconId: '#icon-shield', title: 'Step 4', description: 'Bank final review (1-2 days)' },
    { iconId: '#icon-finance', title: 'Step 5', description: 'Account activation upon payment' },
    { iconId: '#icon-folder-success-one', title: 'Step 6', description: 'UKey dispatched (1-2 days)' }
]

const advantage = [
    { iconId: '#icon-finance', title: 'Low Cost', description: 'Low handling fees, cost-effective overseas salary repatriation' },
    { iconId: '#icon-notes', title: 'One-Time Filing', description: 'Long-term use after a single filing. Provide basic recipient info, bank account, and fund certification documents. After successful filing, the quick transfer function is available within the validity period' },
    { iconId: '#icon-positive-dynamics', title: 'High Limits', description: 'Annual salary remittance quota of up to 500,000 RMB' },
    { iconId: '#icon-world', title: 'Fast Arrival', description: 'Ultra-fast fund arrival upon processing. No exchange loss with real-time UnionPay exchange rates' }
]

const faqs = ref([
    { question: "Is it difficult to open a CBiBank account?", answer: "Not at all. No restrictions on new or existing companies, no industry limitations, no need for affiliated company documents, no business contracts required, and no deposit or financial requirements." },
    { question: "What currencies does CBiBank support?", answer: "USD, EUR, and offshore RMB" },
    { question: "Is there a transfer limit from CBiBank to domestic banks?", answer: "Yes. The minimum transfer back to domestic banks is $100 USD and the maximum is $2,999 USD, with daily cumulative transfers under $10,000 USD. For example, to transfer $5,000 USD to a domestic bank, you need to split it into 2 transfers." }
])

const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.cbi_content2 .content1','.cbi_content2 .content2','.cbi_content2 .content3','.cbi_content2 .content4','.content_bank','.cbi_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
