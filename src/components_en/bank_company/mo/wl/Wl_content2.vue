<template>
    <div class="mo_wl_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">Well Link Bank Macau Introduction</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/立桥银行.png" alt="Well Link Bank Macau">
                    <div class="text">
                        <P>Well Link Bank was established in 1996 as a renowned full-license commercial bank in Macau. Its predecessor was Banco Espírito Santo de Investimento, S.A., established in Macau by Portugal's second-largest bank by market capitalization. It was renamed Novo Banco Asia in 2014, and officially renamed Well Link Bank in October 2017. With a long history and rich heritage, it is committed to providing high-standard comprehensive banking services to Asia-Pacific clients.</P>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">Well Link Bank Account Opening Advantages</div>
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
                        <div class="condition-item">Hong Kong/jurisdiction company full set of core documents (Certificate of Incorporation, Business Registration, Articles of Association, etc.)</div>
                        <div class="condition-item">Company business transaction proof (upstream/downstream contracts, business documents, and domestic affiliates proof)</div>
                        <div class="condition-item">Passport, ID copy, and recent 3-month address/bank statement proof for all shareholders and directors</div>
                        <div class="condition-item">Completed bank account opening forms and incorporation/annual return records</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Personal account requirement: Valid ID card and Hong Kong-Macau Travel Permit</div>
                        <div class="condition-item">All applicants must retain and present their most recent authentic Macau border entry slip</div>
                        <div class="condition-item">All company change information (if any) must be complete per the articles for bank compliance verification</div>
                        <div class="condition-item">Submit original copies at the signing appointment as directed by compliance officers</div>
                    </div>
                </div>
            </div>

            <MaintenanceGuide />

            <div class="content4">
                <div class="title">Well Link Bank Account Opening Process</div>
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
                <div class="title">Well Link Bank FAQs</div>
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
import '@/css_en/bank_company/mo/wl/Wl_content2.css'
import MO_Cooperative_Bank from '@/components_en/bank_company/common/MO_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-audit', title: 'Document Pre-review', description: 'Submit the above documents for pre-review' },
    { iconId: '#icon-user', title: 'In-person Signing in Macau', description: 'After review approval, schedule an appointment to visit Macau for signing' },
    { iconId: '#icon-finance', title: 'Account Processing', description: 'Bank processes account opening' }
]

const advantage = [
    { iconId: '#icon-good-two', title: 'Instant Same-Day Account', description: 'Known for highly flexible reviews, accounts can be opened on the same day of signing if documents are qualified' },
    { iconId: '#icon-world', title: 'Global Multi-Currency System', description: 'Holds clearing qualifications for major world currencies, supporting offshore clients for multi-currency account conversion' },
    { iconId: '#icon-bank-line', title: 'Free Capital Transfer Without Exchange Controls', description: 'Enjoys Macau AMCM exemption from complex regulations, with extremely free capital inflow, outflow, and transfer' },
    { iconId: '#icon-transaction', title: 'Zero Management Fee & Unlimited Wire Transfer', description: 'No regular monthly management fees, with extremely high and unlimited wire transfer privileges' }
]

const faqs = ref([
    { question: "Is there a fee for cash withdrawal in mainland China with a Well Link Bank account?", answer: "Well Link Bank is very considerate. Using their UnionPay card for cash withdrawal in mainland China and most global regions is fee-free. The daily limit per card is equivalent to HKD 20,000 in cash." },
    { question: "Does Well Link Bank provide independent online banking and a physical security token?", answer: "Well Link Bank currently only provides a physical bank card and linked online banking app. There is no separate miniature security token - relevant verification and functions can be accessed directly through the app." },
    { question: "How long does it take to open a Well Link Bank account?", answer: "Very fast! This is one of the biggest reasons to choose Well Link Bank - if all pre-reviewed documents are fully compliant, with agent referral and on-site verification at the branch, you can obtain personal/business account online banking access on the same day." }
])

const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_wl_content2 .content1', '.mo_wl_content2 .content2', '.mo_wl_content2 .content3', '.mo_wl_content2 .content4', '.content_bank', '.mo_wl_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
