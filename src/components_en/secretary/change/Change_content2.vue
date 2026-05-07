<template>
    <div class="change_content2">
        <div class="content_box">
            <!-- 1. Introduction Overview-->
            <div class="content1">
                <div class="title">
                    Basic process of Hong Kong company change
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="Hong Kong company change">
                    <div class="text">
                        <P>
                            In Hong Kong, changes to company shareholders and directors can be made through simple procedures. Changes in shareholders and directors must be resolved by the shareholders' meeting or the board of directors, followed by corresponding document declarations. This process usually involves submitting relevant documents and forms to the Hong Kong Companies Registry and paying a response fee.
                        </P>
                        <P>
                            The operations of share transfer and director transfer are not only necessary steps for company structural adjustment, but also an indispensable part of corporate governance. For changes in shareholders, clarify the new shareholders and share distribution; for changes in directors, fill out a form to complete the new responsibility.
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. Specific process steps-->
            <div class="content4">
                <div class="title">
                    Detailed explanation of the process of share transfer and director transfer
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

            <!-- 3. List of necessary information required-->
            <div class="content3">
                <div class="title">
                    List of necessary information required
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Basic information: copy of company registration certificate, identification certificate of current and new directors and shareholders.</div>
                        <div class="condition-item">Proof of meeting: Documents regarding resolutions adopted by the board of directors or shareholders’ meeting, as well as confirmed minutes of the meeting.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Address and Finance: Proof of address for shareholders and directors (e.g. utility bills, bank statements).</div>
                        <div class="condition-item">Transfer Agreement: If it is a share transfer, a completed share transfer agreement signed by the original shareholders and others must be provided.</div>
                    </div>
                </div>
            </div>

            <!-- 4. Advantages of professional agency-->
            <div class="content5">
                <div class="title">
                    Advantages of a professional secretarial company
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
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

            <!-- 5. Frequently Asked Questions-->
            <div class="content6">
                <div class="title">
                    Frequently Asked Questions and Answers
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
import '@/css_en/secretary/change/Change_content2.css'

gsap.registerPlugin(ScrollTrigger)

// Process steps
const processSteps = [
    {
        iconId: '#icon-peoples', 
        title: 'Meeting resolution',
        description: 'Convene a shareholders\' meeting or board of directors to discuss the change and sign a formal name change resolution'
    },
    {
        iconId: '#icon-doc-success', 
        title: 'Prepare documents',
        description: 'Prepare and sign a share transfer agreement, letters of appointment from new directors and shareholders, etc.'
    },
    {
        iconId: '#icon-upload-one', 
        title: 'Submit for review',
        description: 'Fill out the "Forms Required by the Companies Registry" and submit the change application to the Registrar and pay the fee.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'successful change',
        description: 'Obtain approval and approval from the Registrar of Companies and update the register of shareholders and their directors'
    }
]

// Our advantages
const advantages = [
    {
        iconId: '#icon-protect', 
        title: 'Risk avoidance',
        description: 'We have a professional team who are familiar with Hong Kong company laws and regulations and can effectively avoid potential legal risks.'
    },
    {
        iconId: '#icon-shield-add', 
        title: 'One-stop service',
        description: 'Provide one-on-one consultation and one-stop processing, and be fully responsible for the preparation and submission of various documents.'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: 'Efficient and time-saving',
        description: 'Customers do not need to travel to various government departments in person, and the solution is quick, saving you time and energy.'
    },
    {
        iconId: '#icon-doc-success', 
        title: 'follow up',
        description: 'Timely update and communicate changes to the company\'s various registration certificates to eliminate your compliance risks'
    }
]

const faqs = ref([
    {
        question: "How long will it take to complete the changes?",
        answer: "Normally, the entire change registration process from the formation of the resolution to the approval of the Companies Registry takes about 1-2 weeks (usually 7 working days to complete). The specific time is affected by the actual approval speed of the Companies Registry."
    },
    {
        question: "What should I do if I am overseas?",
        answer: "If shareholders, directors and other personnel are overseas, they can fill in and sign the relevant authorization letter and entrust a professional secretarial company to handle the entire process online and by mail. The change progress information will also be fed back to you in a timely manner."
    },
    {
        question: "Does the transfer of shares require the consent of the original shareholders?",
        answer: "Yes, the original shareholders need to sign a transfer agreement to express their agreement to transfer part or all of the specified number of shares to the new shareholders in accordance with the law."
    },
    {
        question: "How much does it usually cost to process a change?",
        answer: "The government's registration fees for various changes are relatively transparent and generally only cost a few hundred Hong Kong dollars. Choosing a professional secretarial company to apply on your behalf will incur a certain range of service fees, but it ensures that the relevant procedures can be completed quickly, efficiently and without error."
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.change_content2 .content1',
        '.change_content2 .content4',
        '.change_content2 .content3',
        '.change_content2 .content5',
        '.change_content2 .content6'
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
