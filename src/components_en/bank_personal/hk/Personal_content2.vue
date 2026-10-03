<template>
  <div class="service-content constructions_content2"><AnimatedSection class="content_box">
    <ServiceSection v-for="section in sections" :key="section.title" class="content1" v-bind="section" />
    <div class="content2"><div class="title">Benefits of a Hong Kong Personal Account</div><div class="intro"><div v-for="item in advantages" :key="item.title" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div></div>
    <div class="content3"><div class="title">Common Documents for Personal Account Opening</div><div class="intro"><div class="left"><div v-for="item in requirements.slice(0,3)" :key="item" class="condition-item">{{ item }}</div></div><div class="center"></div><div class="right"><div v-for="item in requirements.slice(3)" :key="item" class="condition-item">{{ item }}</div></div></div></div>
    <MaintenanceGuide />
    <div class="content4"><div class="title">Personal Account Opening Process</div><div class="intro"><div v-for="item in processes" :key="item.title" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div></div>
    <ChooseUs /><PersonalBanks class="content_bank" />
    <div class="content6"><div class="title">Frequently Asked Questions</div><div class="intro"><div v-for="(faq,index) in faqs" :key="faq.question" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ expanded: expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ expanded: expandedItems[index] }">{{ faq.answer }}</div></div></div></div>
  </AnimatedSection></div>
</template>
<script setup>
import ServiceSection from '@/components/common/ServiceSection.vue'
import sectionImage from '@/assets/img/account/香港.png'

const sections = [ {
  "title": "Hong Kong Personal Bank Accounts",
  "body": [
    "Hong Kong personal bank accounts can support overseas study, property purchases, investment, immigration and cross-border living expenses. Multi-currency banking, online banking, cards and remittance services depend on the bank and account type. Final requirements and approval remain subject to bank review."
  ],
  "imageAlt": "Hong Kong personal bank account",
  "reversed": false,
  "image": sectionImage
} ]

import { ref } from 'vue'
import '@/css_en/bank_company/hk/construction/Constructions_content2.css'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import PersonalBanks from '@/components_en/bank_personal/hk/Personal_Banks.vue'
import AnimatedSection from '@/components_en/common/AnimatedSection.vue'
const advantages = [{iconId:'#icon-finance',title:'Multi-currency banking',description:'Manage HKD, RMB, USD and other currencies according to the bank and account type.'},{iconId:'#icon-bank-line',title:'Cross-border payments',description:'Support compliant tuition, property, insurance and personal living expenses.'},{iconId:'#icon-airplane',title:'International access',description:'Manage funds through online banking, cards and remittance services.'},{iconId:'#icon-folder-success-one',title:'Wealth planning',description:'Build a compliant banking foundation for personal wealth management.'}]
const requirements = ['Valid Mainland Chinese identity card','Hong Kong and Macau travel permit or passport','Entry record or landing slip','Proof of address or valid correspondence details','Tax residency self-certification','Source of funds, occupation and account purpose']
const processes = [{iconId:'#icon-agreement',title:'Consultation',description:'Review identity, purpose, source of funds and bank preferences.'},{iconId:'#icon-notes',title:'Document review',description:'Prepare and supplement documents required by the selected bank.'},{iconId:'#icon-city',title:'Branch appointment',description:'Book a Hong Kong branch appointment for in-person verification.'},{iconId:'#icon-audit',title:'Bank review',description:'The bank completes identity checks, due diligence and approval.'},{iconId:'#icon-award-line',title:'Account materials',description:'Receive account and card materials according to bank arrangements.'},{iconId:'#icon-folder-success-one',title:'Account activation',description:'Activate online banking and maintain the account as required.'}]
const faqs = [{question:'Can Mainland residents apply for a Hong Kong personal account?',answer:'Some Hong Kong banks accept eligible Mainland residents. Acceptance and documents depend on the bank, customer profile and current policy.'},{question:'Is an in-person visit to Hong Kong required?',answer:'Most traditional banks require identity verification and an interview at a Hong Kong branch. The selected bank requirements apply.'},{question:'How long does account opening take?',answer:'Appointment availability and compliance review times vary by bank and document completeness. No fixed approval time can be guaranteed.'},{question:'How should the account be maintained?',answer:'Keep reasonable activity, respond to bank reviews promptly, maintain valid contact details and retain evidence of source of funds and transaction purpose.'}]
const expandedItems = ref({})
const toggleFaq = index => { expandedItems.value[index] = !expandedItems.value[index] }

import '@/css_en/common/service-content.css'
</script>
