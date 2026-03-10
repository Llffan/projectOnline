<template>
    <div class="hsbc_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">About HSBC (USA)</div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/汇丰银行.png" alt="HSBC USA">
                    <div class="text">
                        <p>HSBC is one of the world's largest banks, headquartered in London, with an extensive global network. HSBC has multiple branches in the United States, particularly in major cities such as New York and Los Angeles.</p>
                        <p>Opening a personal HSBC account facilitates overseas shopping, education, property purchases, real estate investments, offshore investing, and immigration. It enables global wealth management and improves the efficiency of both domestic and international fund operations.</p>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of HSBC (USA) Account Opening</div>
                <div class="intro"><div v-for="(item, index) in advantage" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <div class="content3">
                <div class="title">Documents Required for Account Opening</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Remote video verification, passport and ID card photos</div>
                        <div class="condition-item">Email, mobile number, full name, date of birth</div>
                        <div class="condition-item">Passport number and expiry date</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Employment type (self-employed/employed), position, company name and address</div>
                        <div class="condition-item">Mailing address/residential address (same as HSBC domestic account billing address)</div>
                    </div>
                </div>
            </div>
            <MaintenanceGuide />
            <div class="content4">
                <div class="title">HSBC (USA) Account Opening Process</div>
                <div class="intro"><div v-for="(item, index) in registrationProcess" :key="index" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div>
            </div>
            <ChooseUs />
            <US_Cooperative_Bank class="content_bank" />
            <div class="content6">
                <div class="title">HSBC (USA) FAQs</div>
                <div class="intro"><div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ 'expanded': expandedItems[index] }"><div style="white-space: pre-line;">{{ faq.answer }}</div></div></div></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/bank_company/us/hsbc/Hsbc_content2.css'
import US_Cooperative_Bank from '@/components_en/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
gsap.registerPlugin(ScrollTrigger)
const registrationProcess = [
    { iconId: '#icon-phone-call', title: 'Step 1', description: 'After confirming the need for account opening, we schedule a KYC session with the bank account manager' },
    { iconId: '#icon-protect', title: 'Step 2', description: 'Bank backend video verification — have passport and ID ready for form information confirmation' },
    { iconId: '#icon-message-success', title: 'Step 3', description: 'Account opening complete. Card and PIN mailer are shipped. Register for online banking and link domestic and overseas accounts' }
]
const advantage = [
    { iconId: '#icon-exchange-cny-line', title: 'Zero Wire Fees', description: 'No incoming or outgoing wire transfer fees' },
    { iconId: '#icon-world', title: 'Global Network', description: 'Free, instant, and unlimited transfers within HSBC Global Accounts' },
    { iconId: '#icon-protect', title: 'Free ATM Access', description: 'No fees at global HSBC ATMs and all U.S. ATMs' },
    { iconId: '#icon-finance', title: 'Zero Transaction Fees', description: 'No foreign transaction fees' }
]
const faqs = ref([
    { question: "Will the assigned U.S. account manager speak Chinese?", answer: "During the video account opening, you can request a Chinese-speaking dedicated account manager. Please consult our representative for details." },
    { question: "What tier is the HSBC U.S. card?", answer: "The mainland card is called the Premier Card (卓越理财卡), and the U.S. card is also called the Premier Card. Premier = 卓越理财. Please consult our representative for specifics." }
])
const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }
onMounted(async () => {
    await nextTick()
    const sections = ['.hsbc_content2 .content1','.hsbc_content2 .content2','.hsbc_content2 .content3','.hsbc_content2 .content4','.content_bank','.hsbc_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
