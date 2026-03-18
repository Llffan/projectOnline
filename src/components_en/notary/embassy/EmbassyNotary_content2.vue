<template>
    <div class="embassy_notary_content2">
        <div class="content_box">
            <!-- 1. Core Differences -->
            <div class="content1">
                <div class="title">
                    Notarization vs. Legalization
                </div>
                <div class="intro">
                    <div class="embassy-text-container">
                        <p class="desc-text">
                            "Embassy Authentication" usually involves proving the authenticity of legal documents for international use. The process and authority vary depending on the issuing country, the destination country, and whether they are members of the Hague Convention.
                        </p>
                        <div class="comparison-cards">
                            <div class="card notory-card">
                                <div class="card-header">
                                    <div class="icon">⚖️</div>
                                    <h4>Notarization</h4>
                                </div>
                                <p>Handled by a notary public or office to certify that the signatures and seals on a document are genuine or that the content is true.</p>
                            </div>
                            <div class="card legal-card">
                                <div class="card-header">
                                    <div class="icon">📜</div>
                                    <h4>Legalization</h4>
                                </div>
                                <p>Handled by foreign affairs departments or embassies/consulates. Its purpose is to confirm the last seal or signature on a document so it can be legally effective in another country.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. Common Scenarios & Processes -->
            <div class="content2">
                <div class="title">
                    Scenarios & Procedures
                </div>
                <div class="intro">
                    <div class="scene-card" v-for="(scene, index) in scenes" :key="index">
                        <div class="card-header">
                            <div class="icon-circle">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="scene.iconId"></use>
                                </svg>
                            </div>
                            <h3>{{ scene.title }}</h3>
                        </div>
                        <div class="card-body">
                            <div class="process-steps-list">
                                <div v-for="(step, sIdx) in scene.steps" :key="sIdx" class="process-step-item">
                                    <span class="step-num">{{ sIdx + 1 }}</span>
                                    <span class="step-text">{{ step }}</span>
                                </div>
                            </div>
                            <p class="notice" v-if="scene.notice"><strong>Note: </strong>{{ scene.notice }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Direct Services -->
            <div class="embassy_parallax">
                <div class="parallax_bg">
                    <div class="cover_layer"></div>
                    <div class="text_content">
                        <h2>Direct Consular Services</h2>
                        <p class="desc">
                            Embassies and consulates abroad can directly provide certain notary services for citizens residing overseas.
                        </p>
                    </div>
                </div>
                
                <div class="cards_container">
                    <div class="hague_card" v-for="(item, index) in directServices" :key="index">
                        <div class="icon_wrap">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use>
                            </svg>
                        </div>
                        <span>{{ item.text }}</span>
                    </div>
                </div>
            </div>

            <!-- Why Choose Us -->
            <ChooseUs />

            <!-- 4. Key Points (FAQ style) -->
            <div class="content6">
                <div class="title">
                    Key Procedures & FAQs
                </div>
                <div class="intro">
                    <div 
                        v-for="(faq, index) in faqs" 
                        :key="index" 
                        class="faq-item"
                        :class="{ 'expanded': expandedItems[index] }"
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
                            v-html="faq.answer"
                        >
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
import '@/css_en/notary/embassy/EmbassyNotary_content2.css'
import ChooseUs from '@/components_en/notary/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const scenes = [
    {
        title: 'Foreign Documents for Use in China',
        iconId: '#icon-world',
        steps: [
            'Local Notarization: Documents are notarized by a local Notary Public.',
            'Secretary of State Certification: Authentication by the Secretary of State or relevant local authority.',
            'Consular Authentication: Final authentication by the Chinese Embassy or Consulate.'
        ],
        notice: 'As China has joined the Hague Convention, many countries (like the US) now use the Apostille process instead of traditional consular legalization.'
    },
    {
        title: 'Chinese Documents for Use Abroad',
        iconId: '#icon-finance',
        steps: [
            'Domestic Notarization: Obtain a foreign-related notary certificate from a local notary office in China.',
            'MFA Authentication: Authentication by the Ministry of Foreign Affairs of China or its authorized local offices.',
            'Embassy Authentication: Final authentication by the destination country\'s embassy or consulate in China.'
        ]
    }
]

const directServices = [
    { text: 'POA & Statement Notarization', iconId: '#icon-notes' },
    { text: 'Signature & Fingerprint Verification', iconId: '#icon-audit' },
    { text: 'Overseas Remote Video Notary', iconId: '#icon-communication' }
]

const faqs = ref([
    {
        question: "1. Appointment & Application",
        answer: "Appointments are generally required via the MFA system or embassy websites. It\'s recommended to check specific rules in advance to avoid travel delays."
    },
    {
        question: "2. Processing Time",
        answer: "Standard processing usually takes 4 working days, while expedited services can be shortened to 2-3 working days, subject to the embassy\'s issuance."
    },
    {
        question: "3. Representation Policy",
        answer: "Most authentication matters can be handled by an agent without personal presence. However, certain documents (like fingerprinting) may require the applicant to appear in person."
    },
    {
        question: "4. Fees & Payment",
        answer: "Fees include statutory charges and potential expedite fees. Most consulates support online payments or on-site cards, depending on document types and destination policy."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const standardSections = ['.content1', '.content2', '.embassy_parallax', '.choose_us', '.content6'];
    
    standardSections.forEach(section => {
        gsap.fromTo(`.embassy_notary_content2 ${section}`, 
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                scrollTrigger: { trigger: `.embassy_notary_content2 ${section}`, start: 'top 80%', once: true }
            }
        )
    })
})
</script>
