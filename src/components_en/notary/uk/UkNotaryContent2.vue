<template>
    <div class="uk_notary_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">UK Notarization & Legalization</div>
                <div class="intro">
                    <div class="hague-text-container">
                        <p class="desc-text">We provide comprehensive legal certification services for UK documents. UK notarization and UK Hague Apostille are our core certification services.</p>
                        <div class="implication-cards">
                            <div class="card">
                                <div class="card-header"><div class="icon">📖</div><h4>Hague Convention Background</h4></div>
                                <p>The Convention Abolishing the Requirement of Legalisation has 120+ member states. Documents between Convention member states <strong>are mutually recognized through Hague Apostille without consular legalization</strong>.</p>
                            </div>
                            <div class="card">
                                <div class="card-header"><div class="icon">⚡</div><h4>Efficient & Convenient</h4></div>
                                <p>Compared to consular legalization, Hague Apostille is <strong>faster and more cost-effective</strong>. All European countries have joined the Hague Convention, enabling free circulation within the region.</p>
                            </div>
                            <div class="card">
                                <div class="card-header"><div class="icon">📜</div><h4>Apostille Mark</h4></div>
                                <p>The heading is written in French: <strong>"Apostille"</strong>. It confirms the authenticity of the document's signature, location, and seal, and includes an issuance date and unique number.</p>
                            </div>
                        </div>
                        <p class="desc-text" style="margin-top:20px;">Every Hague Apostille is registered and managed by a designated authority. Certification certificates are issued by each country's designated department. When Convention member state documents are used in non-member states, consular legalization is still required.</p>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Common Notarized Documents</div>
                <div class="intro">
                    <div class="doc-card">
                        <div class="card-header"><div class="icon-circle"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-peoples"></use></svg></div><h3>Civil Documents</h3></div>
                        <div class="card-body">
                            <p>UK Criminal Record Clearance, Medical Birth Certificate, Academic Degree Certificate, School Enrollment/Transcript Certificate, Marriage/Single/Divorce Certificate, Same Person Certificate, Green Card, Passport, Driver's License, Signature Notarization, Property Certificate, Bank Documents, Power of Attorney/Authorization Letter, Will and Death Certificate, Court Judgment, etc.</p>
                            <p style="margin-top:15px; color:#888; font-size:13px;">Note: Multi-language translation notarization available</p>
                        </div>
                    </div>
                    <div class="doc-card">
                        <div class="card-header"><div class="icon-circle"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-finance"></use></svg></div><h3>UK Company Commercial Documents</h3></div>
                        <div class="card-body">
                            <p>Articles of Incorporation, Company Registration Documents, Shareholder Agreement, Board Resolutions, Business License, Business Permit, Certificate of Good Standing, etc.</p>
                            <p style="margin-top:15px; color:#888; font-size:13px;">Note: Multi-language translation notarization available</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content3">
                <div class="title">UK Notarization & Hague Apostille Document Samples</div>
                <div class="intro image-gallery">
                    <img src="@/assets/img/notary/uk/1.jpg" alt="Sample 1">
                    <img src="@/assets/img/notary/uk/2.jpg" alt="Sample 2">
                    <img src="@/assets/img/notary/uk/3.jpg" alt="Sample 3">
                    <img src="@/assets/img/notary/uk/4.jpg" alt="Sample 4">
                </div>
                <div class="subtitle note-text">* These samples include both notarization and Hague Apostille. For reference only — actual notarized documents may vary.</div>
            </div>
            <div class="content6">
                <div class="title">Order Process</div>
                <div class="intro">
                    <div v-for="(item, index) in processSteps" :key="index" class="advantage">
                        <div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div>
                        <div class="text1">{{ item.title }}</div>
                        <div class="text2">{{ item.description }}</div>
                    </div>
                </div>
            </div>
            <ChooseUs />
        </div>
    </div>
</template>
<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/notary/uk/UkNotaryContent2.css'
import ChooseUs from '@/components_en/bank_company/common/ChooseUs.vue'
gsap.registerPlugin(ScrollTrigger)
const processSteps = [
    { iconId: '#icon-communication', title: 'Contact Us', description: 'Reach out via multiple channels to share your requirements. We will tailor a notarization solution for you.' },
    { iconId: '#icon-notes', title: 'Confirm Documents', description: 'Send the relevant documents for confirmation, then arrange agreement signing and payment. Original documents, scanned copies, or video notarization may be required.' },
    { iconId: '#icon-audit', title: 'Notarization in Progress', description: 'We handle the entire notarization and legalization process for you, keeping you updated on progress at all times.' },
    { iconId: '#icon-airplane', title: 'Await Delivery', description: 'After completing the notarized documents, we arrange delivery via SF Express, DHL, or other couriers based on your destination.' }
]
onMounted(async () => {
    await nextTick()
    const sections = ['.uk_notary_content2 .content1','.uk_notary_content2 .content2','.uk_notary_content2 .content3','.uk_notary_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
