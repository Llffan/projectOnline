<template>
    <div class="dahsing_content2">
        <div class="content_box">
            <!-- 1. Bank Introduction & Account Opening Form -->
            <div class="content1">
                <div class="title">
                    Introduction to Dah Sing Bank (Hong Kong)
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/dah_sing.jpg" alt="Dah Sing Bank (Hong Kong)">
                    <div class="text">
                        <P>Dah Sing Group is a significant financial services group in Hong Kong, primarily operating in the banking and insurance sectors. The group includes two entities listed on the Hong Kong Stock Exchange: Dah Sing Financial Holdings Limited (since 1987) and Dah Sing Banking Group Limited (since 2004). Dah Sing is widely recognized for its proactive and innovative approach to financial services. Its success is fundamentally driven by a professional management team and a deep-seated commitment to customer service excellency.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Account Opening Advantages -->
            <div class="content2">
                <div class="title">
                    Advantages of Opening an Account with Dah Sing Hong Kong
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage">
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

            <!-- 3. Required Documents -->
            <div class="content3">
                <div class="title">
                    Corporate Account Opening Requirements
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">HK Entity: Certificate of Incorporation (CI), Business Registration (BR), Incorporation Form NNC1/Annual Return NAR1, amendment records, company stamp, and Articles of Association.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Director Identification: Valid Travel Permit and customs entry record slip.</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 Account Maintenance Guide -->
            <MaintenanceGuide />

            <!-- 4. Account Opening Process -->
            <div class="content4">
                <div class="title">
                    Dah Sing Bank Hong Kong Account Opening Process
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
            </div>

            <!-- 5. Why Choose Us -->
            <ChooseUs />

            <!-- Cooperative Banks -->
            <HK_Cooperative_Bank class="content_bank" />

            <!-- 6. Frequently Asked Questions -->
            <div class="content6">
                <div class="title">
                    Dah Sing Bank Hong Kong FAQs
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
import '@/css_en/bank_company/hk/dahsing/DahSing_content2.css'
import HK_Cooperative_Bank from '@/components_en/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components_en/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-folder-success-one', 
        title: 'Compilation',
        description: 'Organize and compile all necessary documentation for initial search and verification.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Signing',
        description: 'Schedule an appointment at a designated legal office to formally sign the account establishment documents.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Dispatch',
        description: 'Physical documents are couriered to the bank for formal internal auditing.'
    },
    {
        iconId: '#icon-award-line', 
        title: 'Finalization',
        description: 'Upon successful audit, the account is established and the process is complete.'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: 'Accessible Threshold',
        description: 'Highly accommodating requirements; applicants under 30 or companies with "International" or "Group" in their name are eligible.'
    },
    {
        iconId: '#icon-audit', 
        title: 'High Inclusivity',
        description: 'Successfully facilitates account opening for clients previously declined or whose accounts were closed by other institutions.'
    }
]

const faqs = ref([
    {
        question: "Does Dah Sing Bank provide a physical bank card?",
        answer: "Dah Sing typically uses standard digital accounts without a physical card. For users who do not require physical cash withdrawals, the digital account provides all necessary operational functionalities. Note: By default, international wire transfers may have restrictions; however, transfers to same-name accounts at Dah Sing Bank (China) are seamless. Full international wire capabilities may require a one-time in-person visit to a Hong Kong branch."
    },
    {
        question: "How long is the processing time for Dah Sing Bank Hong Kong?",
        answer: "Approximately 6-8 weeks total (witnessing/signing is typically scheduled within 4 weeks)."
    },
    {
        question: "What maintenance protocols should I follow for a Dah Sing account?",
        answer: "1. Maintain a positive balance; avoid letting the account reach zero for extended periods.\n2. Ensure the account remains active (use it at least once every six months).\n3. Avoid using the account for third-party transfers or acting as a relay for others' funds.\n4. Ensure the offshore company's annual returns and reviews are completed on time."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.dahsing_content2 .content1',
        '.dahsing_content2 .content2',
        '.dahsing_content2 .content3',
        '.dahsing_content2 .content4',
        '.content_bank',
        '.dahsing_content2 .content6'
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
