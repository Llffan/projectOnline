<template>
    <div class="hague_notary_content2">
        <div class="content_box">
            <!-- 1. Service Scope -->
            <div class="content1">
                <div class="title">Hague Apostille Service Scope</div>
                <div class="intro">
                    <div class="hague-text-container">
                        <p class="desc-text">
                            The Hague Apostille is an international certification method prescribed by the Convention Abolishing the Requirement of Legalisation for Foreign Public Documents, designed to <strong>simplify cross-border document circulation procedures</strong>. Its core is the "Apostille Certificate," a special seal affixed or attached to a public document to certify the authenticity of the signature, the capacity of the signatory, and the identity of the seal or stamp.
                        </p>
                        <p class="desc-text">
                            The most significant change for Chinese users is: <strong>Since November 7, 2023, the Hague Convention has officially taken effect in China</strong>. This means:
                        </p>

                        <div class="implication-cards">
                            <div class="card outgoing">
                                <div class="card-header">
                                    <div class="icon">🚀</div>
                                    <h4>Documents Going Abroad</h4>
                                </div>
                                <p>Chinese public documents only need one "Apostille Certificate" to be used in other contracting states, eliminating the need for consular legalization by the destination country's embassy in China.</p>
                            </div>
                            <div class="card incoming">
                                <div class="card-header">
                                    <div class="icon">📨</div>
                                    <h4>Documents Coming to China</h4>
                                </div>
                                <p>Public documents from other contracting states sent to China only need an "Apostille Certificate" from that country, eliminating the need for consular legalization by Chinese embassies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. Scope of Hague Apostille -->
            <div class="content2">
                <div class="title">Scope of Hague Apostille</div>
                <div class="intro">
                    <div class="doc-card" v-for="(doc, index) in documentTypes" :key="index">
                        <div class="card-header">
                            <div class="icon-circle">
                                <svg class="icon" aria-hidden="true"><use :xlink:href="doc.iconId"></use></svg>
                            </div>
                            <h3>{{ doc.title }}</h3>
                        </div>
                        <div class="card-body">
                            <p>{{ doc.content }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Hague Parallax Section -->
            <div class="hague_parallax">
                <div class="parallax_bg">
                    <div class="cover_layer"></div>
                    <div class="text_content">
                        <h2>Documents Required for Hague Apostille</h2>
                        <p class="desc">
                            The Hague Convention currently has over 120 member states/regions, including Germany, France, South Korea, the United States, Japan, Australia, Hong Kong SAR, and Macau SAR. However, mainland China was not a member until 2023. For documents destined for non-member states, embassy legalization is still required.
                        </p>
                    </div>
                </div>
                
                <div class="cards_container">
                    <div class="hague_card">
                        <div class="icon_wrap">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-award-line"></use></svg>
                        </div>
                        <span>Applicant's ID card or passport</span>
                    </div>
                    <div class="hague_card">
                        <div class="icon_wrap">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-notes"></use></svg>
                        </div>
                        <span>Applicant information form</span>
                    </div>
                    <div class="hague_card">
                        <div class="icon_wrap">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-audit"></use></svg>
                        </div>
                        <span>Documents to be certified</span>
                    </div>
                </div>
            </div>

            <!-- Hague Certification Procedure -->
            <div class="content5">
                <div class="title">Hague Apostille Procedure</div>
                <div class="subtitle">Information needed for certification</div>
                <div class="intro">
                    <template v-for="(step, index) in hagueSteps" :key="index">
                        <div class="step-box">{{ step.name }}</div>
                        <div class="arrow" v-if="index < hagueSteps.length - 1">
                            <i class="double-arrow"></i>
                        </div>
                    </template>
                </div>
            </div>

            <ChooseUs />

            <!-- 5. FAQs -->
            <div class="content6">
                <div class="title">Hague Apostille FAQs</div>
                <div class="intro">
                    <div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFaq(index)">
                        <div class="faq-question">
                            <span class="question-text">{{ faq.question }}</span>
                            <span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span>
                        </div>
                        <div class="faq-answer" :class="{ 'expanded': expandedItems[index] }">
                            {{ faq.answer }}
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
import '@/css_en/notary/hague/HagueNotary_content2.css'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const documentTypes = [
    { title: 'Personal Documents', content: 'Marriage certificate; Birth certificate; Divorce decree; Adoption; Foster care; Family relationship; Death certificate; Work experience; Power of attorney; Declaration; Green card; Passport; Invitation letter; Single status certificate; Judgments; Wills; Criminal records; Property certificates; Transcripts; Degree certificates; Professional qualification certificates; Medical certificates; and more.', iconId: '#icon-notes' },
    { title: 'Corporate Documents', content: 'Certificate of incorporation; Legal entity status; Agreements; Contracts; Power of attorney; Declarations; Certificates; Letters of appointment; Trademark certificates; Asset certificates; Credit certificates; Director information; Shareholder information; Articles of association; Meeting minutes; Company name change documents; Invoices; Certificates of origin; Customs declarations; Product certificates; Product introductions; and other company documents.', iconId: '#icon-finance' },
    { title: 'Third-Party Institution Documents', content: 'Government website content; Police letters; Customs reports; Government reports; and more.', iconId: '#icon-world' }
]

const hagueSteps = [
    { name: 'Applicant submits documents' },
    { name: 'International lawyer notarization' },
    { name: 'High Court apostille / Ministry of Foreign Affairs certification' }
]

const faqs = ref([
    { question: "What is a Hague Apostille?", answer: "A Hague Apostille is a secondary certification issued by a government authority of a Hague member state, verifying the original certification. A seal or label is attached to the certification document. Since mainland China officially became a member of the Hague Convention in 2023, documents circulating between contracting states only require a Hague Apostille, eliminating the need for the more complex consular/embassy dual authentication." },
    { question: "What is the difference between Hague Apostille and embassy legalization?", answer: "The main differences are in process, time, and scope of application. Hague Apostille only requires notarization by a qualified international lawyer or notary, then submission to the country's High Court or Ministry of Foreign Affairs for apostille — completed quickly and valid in all Hague contracting states. Embassy legalization additionally requires sending documents to the destination country's representative office for final stamping, taking more time, and the certificate is only valid in that specific destination country." },
    { question: "How long does a Hague Apostille typically take?", answer: "Processing times vary by country and region. Typically, with complete documentation, most major countries or regions (such as Hong Kong, the US, UK, etc.) complete the Hague Apostille process in approximately 3-7 business days. A small number of special documents may require longer background checks." },
    { question: "Which countries accept Hague Apostille?", answer: "As of now, the Hague Convention has over 120 member states and regions, covering virtually all major economies, including China (including Hong Kong and Macau), the US, UK, Japan, South Korea, Germany, France, Australia, Russia, and more. Notarized documents circulating between these countries and regions enjoy the convenience of Hague Apostille." },
    { question: "Can all documents receive a Hague Apostille?", answer: "The vast majority of civil and commercial documents are eligible. Common examples include personal documents (birth certificates, marriage certificates, powers of attorney, criminal record clearances, degree certificates, etc.) and corporate documents (certificates of incorporation, articles of association, director registers, commercial contracts, etc.). However, certain documents directly involving customs duty exemptions, purely commercial customs operations (such as customs declarations), or documents of a specific government exemption nature may be excluded." }
])

const expandedItems = ref({})
const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] }

onMounted(async () => {
    await nextTick()
    const standardSections = ['.content1', '.content2', '.content5:not(.choose_us)', '.choose_us', '.content6'];
    standardSections.forEach(section => {
        gsap.fromTo(`.hague_notary_content2 ${section}`, 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: `.hague_notary_content2 ${section}`, start: 'top 80%' } }
        )
    })
})
</script>
