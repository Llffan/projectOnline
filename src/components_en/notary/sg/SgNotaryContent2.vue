<template>
    <div class="sg_notary_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">Singapore Notarization & Legalization</div>
                <div class="intro">
                    <div class="hague-text-container">
                        <p class="desc-text">We provide comprehensive legal certification services for Singapore documents.</p>
                        <div class="implication-cards">
                            <div class="card">
                                <div class="card-header"><div class="icon">🌍</div><h4>Hague Convention Apostille</h4></div>
                                <p>Singapore joined the Hague Convention in 1987. Singapore documents can be <strong>used in over 100 Convention member states worldwide</strong> through Hague Apostille.</p>
                            </div>
                            <div class="card">
                                <div class="card-header"><div class="icon">⚖️</div><h4>Singapore Document Requirements</h4></div>
                                <p>The Singapore <strong>High Court</strong> is responsible for Hague Apostille. Documents issued by government departments and authorized institutions <strong>written in English or Malay can be certified</strong>.</p>
                            </div>
                            <div class="card">
                                <div class="card-header"><div class="icon">📜</div><h4>Apostille Mark</h4></div>
                                <p>The heading is written in French: <strong>"Apostille"</strong>. It confirms the authenticity of the document's signature, location, and seal, and includes an issuance date and unique number.</p>
                            </div>
                        </div>
                        <p class="desc-text" style="margin-top:20px;">Every Hague Apostille (including issuance date and unique number) is registered and managed by a designated authority. Certification certificates are issued by each country's designated department.</p>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Common Notarized Documents</div>
                <div class="intro">
                    <div class="doc-card">
                        <div class="card-header"><div class="icon-circle"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-peoples"></use></svg></div><h3>Civil Documents</h3></div>
                        <div class="card-body">
                            <p>Criminal Record Clearance, Birth Certificate, Academic Degree Certificate, School Enrollment/Transcript Certificate, Marriage/Single/Divorce Certificate, Same Person Certificate, Green Card, Passport, Driver's License, Signature Notarization, Property Certificate, Bank Documents, Power of Attorney/Authorization Letter, Will and Death Certificate, Court Judgment, etc.</p>
                            <p style="margin-top:15px; color:#888; font-size:13px;">Note: Multi-language translation notarization available</p>
                        </div>
                    </div>
                    <div class="doc-card">
                        <div class="card-header"><div class="icon-circle"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-finance"></use></svg></div><h3>Singapore Company Commercial Documents</h3></div>
                        <div class="card-body">
                            <p>Articles of Incorporation, Company Registration Documents, Shareholder Agreement, Board Resolutions, Business License, Business Permit, Certificate of Good Standing, etc.</p>
                            <p style="margin-top:15px; color:#888; font-size:13px;">Note: Multi-language translation notarization available</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content3">
                <div class="title">Singapore Notarization & Hague Apostille Document Samples</div>
                <div class="intro image-gallery">
                    <img loading="lazy" src="@/assets/img/notary/sg/1.jpg" alt="Sample 1">
                    <img loading="lazy" src="@/assets/img/notary/sg/2.jpg" alt="Sample 2">
                    <img loading="lazy" src="@/assets/img/notary/sg/3.jpg" alt="Sample 3">
                    <img loading="lazy" src="@/assets/img/notary/sg/4.jpg" alt="Sample 4">
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
import '@/css_en/notary/sg/SgNotaryContent2.css'
import ChooseUs from '@/components_en/notary/common/ChooseUs.vue'
gsap.registerPlugin(ScrollTrigger)
const processSteps = [
    { iconId: '#icon-communication', title: 'Contact Us', description: 'Reach out via multiple channels to share your requirements. We will tailor a notarization solution for you.' },
    { iconId: '#icon-notes', title: 'Confirm Documents', description: 'Send the relevant documents for confirmation, then arrange agreement signing and payment. Original documents, scanned copies, or video notarization may be required.' },
    { iconId: '#icon-audit', title: 'Notarization in Progress', description: 'We handle the entire notarization and legalization process for you, keeping you updated on progress at all times.' },
    { iconId: '#icon-airplane', title: 'Await Delivery', description: 'After completing the notarized documents, we arrange delivery via SF Express, DHL, or other couriers based on your destination.' }
]
onMounted(async () => {
    await nextTick()
    const sections = ['.sg_notary_content2 .content1','.sg_notary_content2 .content2','.sg_notary_content2 .content3','.sg_notary_content2 .content6']
    sections.forEach(section => { gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } }) })
})
</script>
