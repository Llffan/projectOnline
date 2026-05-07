<template>
    <div class="mo_cgb_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">CGB (China Guangfa Bank) Macau Introduction</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/广发银行.png" alt="CGB Macau">
                    <div class="text">
                        <P>Guangdong Development Bank Macau Branch was approved by the People's Bank of China and the Macau Government, and officially opened in Macau on November 8, 1993. Located at 269-275 Avenida da Praia Grande, Macau. As the first overseas branch established by a Chinese commercial bank, it offers banking services including current and savings deposits, foreign currency deposits, fixed deposits, various commercial loans, import/export documentary credits, mortgage loans, domestic and international remittances, foreign exchange investments, insurance agency, and RMB exchange.</P>
                        <P>Its major shareholders include Guangdong Provincial Treasury (42.7%) and Bank of China Group (14.m%). The bank has always been committed to providing diversified banking services such as mortgage loans, foreign exchange investments, and check savings services.</P>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">CGB Account Opening Advantages</div>
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
                        <div class="condition-item">Identity documents: ID card, Travel Permit, or entry paperwork</div>
                        <div class="condition-item">Address proof: Residential address documents (utility bills, property management fees, etc.)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Business introduction: Company introduction letter (provided by the corresponding insurance company)</div>
                        <div class="condition-item">Special declaration: If using only ID card for authentication, an additional form must be signed at account opening</div>
                    </div>
                </div>
            </div>

            <div class="content4">
                <div class="title">CGB Account Opening Process</div>
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
                <div class="title">CGB FAQs</div>
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
import '@/css_en/bank_company/mo/cgb/Cgb_content2.css'
import MO_Cooperative_Bank from '@/components_en/bank_company/common/MO_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    { iconId: '#icon-notes', title: 'Submit Appointment', description: 'Submit documents and basic personal information for scheduling' },
    { iconId: '#icon-user', title: 'Pre-review', description: 'Bank officials and channel team conduct preliminary qualification review' },
    { iconId: '#icon-airplane', title: 'Visit Macau for Signing', description: 'After scheduling confirmation, visit Macau branch in person for signing and processing' },
    { iconId: '#icon-folder-success-one', title: 'Mail & Delivery', description: 'After account completion, bank mails cards and security token' }
]

const advantage = [
    { iconId: '#icon-good-two', title: 'Comprehensive Financial Advantage', description: 'Effectively leverages comprehensive financial expertise to serve real industries and the real economy' },
    { iconId: '#icon-world', title: 'Differentiated Customization', description: 'Uses differentiation strategies to deeply serve the full lifecycle of tech innovation enterprise projects' },
    { iconId: '#icon-finance', title: 'Full Product Range', description: 'Provides full-range financial product solutions for tech innovation enterprises and commercial organizations' },
    { iconId: '#icon-city', title: 'Diversified Services', description: 'Offers mortgage loans, foreign exchange investments, check savings, and various diversified services' }
]

const faqs = ref([
    { question: "How much deposit is required for CGB Macau account opening?", answer: "Clients must deposit and maintain MOP/HKD 10,000 in a 1-year fixed deposit, which automatically renews upon maturity and cannot be withdrawn. (Additionally, insurance purchase is required - minimum USD 300 per year, typically for 2 years)." },
    { question: "Is there an additional fee for depositing foreign currency cash at CGB?", answer: "For foreign currency cash deposits, the first equivalent of HKD 50,000 is fee-free. For amounts exceeding HKD 50,000, a 0.05% fee applies." },
    { question: "How long does it take to open a CGB account?", answer: "Generally, same-day account opening and card issuance." }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const sections = ['.mo_cgb_content2 .content1', '.mo_cgb_content2 .content2', '.mo_cgb_content2 .content3', '.mo_cgb_content2 .content4', '.content_bank', '.mo_cgb_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
