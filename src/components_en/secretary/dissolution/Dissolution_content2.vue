<template>
    <div class="dissolution_content2">
        <div class="content_box">
            <!-- 1. Introduction Overview -->
            <div class="content1">
                <div class="title">
                    Hong Kong Company Deregistration Guide
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="Hong Kong company cancellation">
                    <div class="text">
                        <P>
                            When your Hong Kong company is no longer required to operate, it is a very important legal obligation to correctly dissolve and cancel the company. Failure to legally cancel may result in fines or even litigation, and reasonable business closure can cut off joint risks.
                        </P>
                        <P>
                            Cancellation of a Hong Kong company requires the consent of all shareholders, no outstanding debts, and tax compliance. The core process includes tax liquidation, application submission, 3-month gazetting period and final approval by the registration office, which usually takes 6-8 months and involves government fees of approximately HK$1,920-2,420.
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. Cancellation conditions -->
            <div class="content5">
                <div class="title">
                    Logout core conditions (all are indispensable)
                </div>
                <div class="intro">
                    <div v-for="(item, index) in conditionsList" :key="index" class="advantage">
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
            </div>

            <!-- 3. Specific process steps -->
            <div class="content4">
                <div class="title">
                    Company cancellation process
                </div>
                <div class="intro">
                    <div v-for="(item, index) in processSteps" :key="index" class="advantage">
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
            </div>

            <!-- 4. List of necessary information required -->
            <div class="content3">
                <div class="title">
                    List of materials required for cancellation
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Company documents: Scanned copies of company registration certificate, business registration certificate and latest annual return are required.</div>
                        <div class="condition-item">Shareholders' resolution: An agreement signed by all shareholders agreeing to the cancellation and indicating the relevant debt settlement plan.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Tax certificate: "Notice of No Objection" issued by the tax bureau, audit report and tax settlement record certificate.</div>
                        <div class="condition-item">Debt statement: a list of claims and debts after the company's internal and external liabilities have been settled and relevant settlement and repayment vouchers.</div>
                    </div>
                </div>
            </div>

            <!-- 5. Frequently Asked Questions -->
            <div class="content6">
                <div class="title">
                    Frequently Asked Questions about Fees and Times
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
import '@/css_en/secretary/dissolution/Dissolution_content2.css'

gsap.registerPlugin(ScrollTrigger)

// Core conditions list
const conditionsList = [
    {
        iconId: '#icon-peoples', 
        title: 'Shareholders unanimously agree',
        description: 'All shareholders must sign a written resolution clearly stating the intent to cancel.'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: 'Stopped operations for more than 3 months',
        description: 'The company must have never started business or been closed for over 3 months with no transactions.'
    },
    {
        iconId: '#icon-doc-success', 
        title: 'No outstanding debt',
        description: 'No unpaid taxes, government fees, wages or supplier debts; full settlement proof required.'
    },
    {
        iconId: '#icon-shield-add', 
        title: 'Tax and compliance on track',
        description: 'Complete all tax returns, obtain written tax bureau approval, and ensure no ongoing lawsuits or investigations.'
    }
]

// Process steps
const processSteps = [
    {
        iconId: '#icon-audit', 
        title: 'tax settlement',
        description: 'Submit IR1263 form and documents to tax bureau; obtain "Notice of No Objection" (1-2 months).'
    },
    {
        iconId: '#icon-doc-success', 
        title: 'Apply for cancellation',
        description: 'Submit NDR1 form with "No Objection" notice to Companies Registry and pay fees (1 month).'
    },
    {
        iconId: '#icon-protect', 
        title: 'Newspaper announcement',
        description: 'Registry publishes cancellation notice in gazette; 3-month objection period must pass (~3 months).'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Complete closure',
        description: 'Registry issues "Certificate of Cancellation" upon final approval; files kept for 5 years (2-3 months).'
    }
]

const faqs = ref([
    {
        question: "How long does it usually take for a company to be deregistered?",
        answer: "Under normal circumstances, if tax compliance and reports are clear and complete, Hong Kong company cancellation usually takes about 6 to 9 months from the first step of tax liquidation to the final receipt of the cancellation certificate."
    },
    {
        question: "What should I do if it is discovered that there has been an underreporting of taxes before deregistration?",
        answer: "If there are unpaid taxes or unfinished audited tax returns from previous periods, you must first complete the accounts and pay the taxes and possible late fees (the annual interest rate penalty is usually about 8%), otherwise you will not be able to obtain the \"Notice of No Objection to Cancellation of Registration\" from the tax bureau."
    },
    {
        question: "Does the entire deregistration process require government expenses?",
        answer: "The cancellation itself includes miscellaneous government fees (such as NDR1 submission fee, which is about HK$420, sometimes plus the tax bureau notification fee of HK$270, etc.), and the overall basic expenditure budget usually paid directly to the government hovers around HK$1,920-2,420 (excluding third-party service fees for audit, liquidation and replenishment)."
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.dissolution_content2 .content1',
        '.dissolution_content2 .content5',
        '.dissolution_content2 .content4',
        '.dissolution_content2 .content3',
        '.dissolution_content2 .content6'
    ]

    sections.forEach(section => {
        gsap.from(section, {
            autoAlpha: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                once: true
            }
        })
    })
})
</script>
