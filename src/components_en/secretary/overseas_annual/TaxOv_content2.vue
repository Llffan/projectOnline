<template>
    <div class="service-content ov_content2">
        <div class="content_box">
            <AnimatedSection>
                <ServiceSection v-for="section in sections" :key="section.title" class="content1" v-bind="section" />
            </AnimatedSection>
            <AnimatedSection class="content2">
                <div class="title">
                    Maintenance of offshore company advantages
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text">
                            {{ item.adv }}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection class="content3">
                <div class="title">
                    Annual review time and regulations in major jurisdictions
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">BVI company (first half of the year): For companies established from January to June, the annual review must be completed before May 31 of each year.</div>
                        <div class="condition-item">BVI company (second half of the year): For companies established from July to December, the annual review must be completed before November 30 of each year.</div>
                        <div class="condition-item">Cayman Company: No matter when it is established, the annual review must be completed before March 31 of each year.</div>
                        <div class="condition-item">Seychelles Company: Based on the anniversary of the company's establishment, the annual review must be completed before the anniversary.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Economic substance declaration: BVI and Cayman companies need to confirm the economic substance classification and declare it during the annual review.</div>
                        <div class="condition-item">Overdue fine: 10%-50% fine for overdue applicants for 1-5 months, and may face delisting for more than 5 months.</div>
                        <div class="condition-item">Company reinstatement: Once delisted, reinstating a company will require heavy government fines and attorney fees.</div>
                        <div class="condition-item">Asset risk: The assets of a delisted company belong to the government and must be restored before they can be disposed of.</div>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection class="content4">
                <div class="title">
                    Annual review process
                </div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text1">
                            {{ item.title }}
                        </div>
                        <div class="text2">
                            {{ item.description }}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection class="content5">
                <div class="title">
                    Our service advantages
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
                        <div class="img">
                            <img loading="lazy" :src="item.imgSrc" :alt="item.title">
                        </div>
                        <div class="text1">
                            {{ item.title }}
                        </div>
                        <div class="text2">
                            {{ item.description }}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection class="content6">
                <div class="title">
                    Frequently Asked Questions about Overseas Annual Review
                </div>
                <div class="intro">
                    <div 
                        v-for="(faq, index) in faqs" 
                        :key="index" 
                        class="faq-item"
                        @click="toggleFaq(index)"
                    >
                        <div class="faq-question">
                            <span class="question-text">{{ faq.question }}</span>
                            <span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">
                                ▼
                            </span>
                        </div>
                        <div 
                            class="faq-answer" 
                            :class="{ 'expanded': expandedItems[index] }"
                        >
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    </div>
</template>

<script setup>
import ServiceSection from '@/components/common/ServiceSection.vue'
import sectionImage from '@/assets/img/company/bvi/BVI-2.jpg'

const sections = [ {
  "title": "Overseas company annual review and maintenance",
  "body": [
    "Although overseas offshore companies (such as BVI, Cayman, Seychelles, etc.) usually enjoy tax exemptions, they must abide by the company laws of the place of registration and conduct annual license renewal and annual review on time to maintain the company's legal status.",
    "The main contents of the annual review include payment of government license fees, registered agent fees and registered address fees, etc. Failure to conduct the annual review on time will result in heavy fines, or even the company being delisted and the assets frozen.",
    "For companies that need to maintain their listing status or conduct international investment and financing, maintaining a good company survival status (Good Standing) is crucial. We provide one-stop annual review services to ensure the long-term compliance operation of your offshore company."
  ],
  "imageAlt": "",
  "reversed": false,
  "image": sectionImage
} ]

import { ref } from 'vue'
import '@/css_en/secretary/overseas_annual/TaxOv_content2.css'

import AnimatedSection from '@/components/common/AnimatedSection.vue'
import '@/css/common/service-content.css'

const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: 'Annual review notice',
        description: 'Issue an annual review notice 2 months in advance to confirm the company\'s status and expenses.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Information confirmation',
        description: 'Confirm whether there are any changes to the company\'s director and shareholder information and whether it is necessary to declare economic substance.'
    },
    {
        iconId: '#icon-audit', 
        title: 'pay fees',
        description: 'Clients pay annual review fees, including government license fees and agency service fees.'
    },
    {
        iconId: '#icon-government-line', 
        title: 'Government declaration',
        description: 'Submit annual returns to the local registrar\'s office and pay government fees.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Collect documents',
        description: 'Get the latest tax payment certificate (Good Standing) or renewal document.'
    },
    {
        iconId: '#icon-bank-line', 
        title: 'Filing',
        description: 'Archive and save annual review documents and update company registration records.'
    }
]

const advantage = [
    {
        iconId: '#icon-award-line', 
        adv: 'Tax exemption: Continue to enjoy offshore exemption and do not need to pay profits tax.'
    },
    {
        iconId: '#icon-city', 
        adv: 'Information confidentiality: Strict privacy protection laws protect the information security of directors and shareholders.'
    },
    {
        iconId: '#icon-trophy', 
        adv: 'No foreign exchange controls: free entry and exit of funds, facilitating international trade and investment settlement.'
    },
    {
        iconId: '#icon-finance', 
        adv: 'Simple operation: no need to convene an annual general meeting of shareholders and no need to submit an audit report (in some areas).'
    },
    {
        iconId: '#icon-airplane', 
        adv: 'Listing structure: Maintain the VIE structure or the legal status of overseas listed entities.'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        adv: 'Asset protection: A complete trust legal framework effectively isolates business risks.'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: 'Global direct connection service',
        description: 'Directly connect with local registered agents such as BVI and Cayman, eliminating the need for intermediate links, making it more efficient and more transparent.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: 'Professional compliance team',
        description: 'Familiar with corporate laws and economic substance laws (ESR) of various countries, assisting clients in completing complex compliance declarations.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: 'Expiration smart reminder',
        description: 'Have a complete CRM system and notify the annual review due date in advance to avoid fines or penalties caused by human negligence.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: 'Supporting follow-up services',
        description: 'In addition to the annual review, we provide a full set of services such as notarization and certification (Apostille), incumbency certificate application, and agent certificate.'
    }
]

const faqs = ref([
    {
        question: "If an offshore company no longer operates, can it be ignored without annual review?",
        answer: "Can't. If it is no longer in business, you should apply for formal cancellation (Strike Off). Direct abandonment will result in the company being in arrears, long-term arrears will result in delisting, director records will be blacklisted, affecting its credibility in other offshore jurisdictions, and company assets (including bank accounts) may be frozen and owned by the government."
    },
    {
        question: "How is the annual review time for BVI companies determined?",
        answer: "The annual review period for BVI companies is divided into two periods: for companies registered from January to June, the annual review must be completed before May 31 of each year; for companies registered from July to December, the annual review must be completed before November 30 of each year. Overdue fees will incur heavy fines."
    },
    {
        question: "What is an Economic Substance declaration?",
        answer: "According to the economic substance laws of BVI, Cayman and other places, all relevant entities must declare the relevant activities they engage in every year. If the company engages in nine types of related activities other than pure holding (such as fund management, financial leasing, etc.), it must establish sufficient local economic substance (employees and locations as follows). We will assist customers with classification and declaration during the annual review."
    },
    {
        question: "Can a company be reinstated after being delisted?",
        answer: "Restoration is possible but is cumbersome and expensive. You need to pay all outstanding government fees, annual review fees and fines, and pay high attorney fees to apply for a restoration order from the court. Therefore, annual review on time is the lowest cost maintenance method."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

</script>
