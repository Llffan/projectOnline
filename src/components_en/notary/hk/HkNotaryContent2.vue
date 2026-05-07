<template>
    <div class="hk_notary_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">Hong Kong Notarization & Legalization</div>
                <div class="intro">
                    <div class="hague-text-container">
                        <p class="desc-text">As an international financial and trade center, Hong Kong documents require notarization and legalization for use in mainland China and internationally. Many people are unfamiliar with Hong Kong's notarization system. Due to cultural and institutional differences, understanding Hong Kong notarization can seem challenging. Here is a summary of the types of Hong Kong notarization and legalization:</p>
                        
                        <div class="implication-cards">
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">🇨🇳</div>
                                    <h4>Documents for Use in Mainland China</h4>
                                </div>
                                <p>Typically requires the process of <strong>"China-appointed Notary Public certification + China Legal Service (Hong Kong) Limited transfer stamp"</strong>.</p>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">🌍</div>
                                    <h4>For Use in Hague Member States</h4>
                                </div>
                                <p>Requires <strong>Hong Kong Hague Apostille</strong> — a two-step process of Hong Kong lawyer notarization and High Court apostille.</p>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">🏛️</div>
                                    <h4>For Use in Non-Hague Countries</h4>
                                </div>
                                <p>Requires <strong>Hong Kong consular legalization</strong> — a three-step process of Hong Kong lawyer notarization, High Court apostille, and foreign consulate/embassy authentication in Hong Kong.</p>
                            </div>
                        </div>
                        <p class="desc-text" style="margin-top:20px;">
                            Hong Kong also has other special notarization and legalization types, such as Hong Kong Commissioner for Oaths notarization, Hong Kong General Chamber of Commerce certification, Hong Kong Chinese Manufacturers' Association certification, and Hong Kong Chinese General Chamber of Commerce certification.
                        </p>
                    </div>
                </div>
            </div>

            <div class="content2">
                <div class="title">Common Notarized Documents</div>
                <div class="intro">
                    <div class="doc-card">
                        <div class="card-header">
                            <div class="icon-circle"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-peoples"></use></svg></div>
                            <h3>Civil Documents</h3>
                        </div>
                        <div class="card-body">
                            <p>Criminal Record Clearance, Medical Birth Certificate, Academic Degree Certificate, School Enrollment/Transcript Certificate, Marriage/Single/Divorce Certificate, Driver's License, Professional Qualification Certificate, ID Card/Passport/Home Return Permit, Address Proof, Seal/Signature Notarization, Property Certificate, Bank Documents, Power of Attorney/Authorization Letter, Will and Death Certificate, Court Judgment, etc.</p>
                        </div>
                    </div>
                    <div class="doc-card">
                        <div class="card-header">
                            <div class="icon-circle"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-finance"></use></svg></div>
                            <h3>HK Company Commercial Documents</h3>
                        </div>
                        <div class="card-body">
                            <p>Certificate of Incorporation (CI), Business Registration Certificate (BR), Memorandum and Articles of Association (MA), Incorporation Form (NNC1), Annual Return (NAR1), Director/Company Secretary and Authorized Representative Certificate, Share Capital Structure, Court Orders, etc.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content3">
                <div class="title">Hong Kong Hague Apostille Document Samples</div>
                <div class="intro image-gallery">
                    <img loading="lazy" src="@/assets/img/notary/hk/1-1.jpg" alt="Sample 1">
                    <img loading="lazy" src="@/assets/img/notary/hk/1-2.jpg" alt="Sample 2">
                    <img loading="lazy" src="@/assets/img/notary/hk/1-3.jpg" alt="Sample 3">
                    <img loading="lazy" src="@/assets/img/notary/hk/1-4.jpg" alt="Sample 4">
                </div>
                <div class="subtitle note-text">* These samples include both notarization and Hague Apostille. For reference only — actual notarized documents may vary.</div>
            </div>

            <div class="content4">
                <div class="title">HK Mainland Transfer Legalization (China Legal Service HK Ltd.) Document Samples</div>
                <div class="intro image-gallery">
                    <img loading="lazy" src="@/assets/img/notary/hk/2-1.jpg" alt="Transfer Sample 1">
                    <img loading="lazy" src="@/assets/img/notary/hk/2-2.jpg" alt="Transfer Sample 2">
                    <img loading="lazy" src="@/assets/img/notary/hk/2-3.jpg" alt="Transfer Sample 3">
                    <img loading="lazy" src="@/assets/img/notary/hk/2-4.jpg" alt="Transfer Sample 4">
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
import '@/css_en/notary/hk/HkNotaryContent2.css'
import ChooseUs from '@/components_en/notary/common/ChooseUs.vue'
gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    { iconId: '#icon-communication', title: 'Contact Us', description: 'Reach out via phone, WhatsApp, email, or website inquiry to share your needs. We will tailor a notarization solution for you.' },
    { iconId: '#icon-notes', title: 'Confirm Documents', description: 'Submit docs for review, sign & pay. Supports originals, scans, or video.' },
    { iconId: '#icon-audit', title: 'Notarization in Progress', description: 'We handle the entire notarization and legalization process for you, keeping you updated on progress at all times.' },
    { iconId: '#icon-airplane', title: 'Await Delivery', description: 'Completed docs are delivered via SF, DHL, or global express based on your location.' }
]

onMounted(async () => {
    await nextTick()
    const sections = ['.hk_notary_content2 .content1','.hk_notary_content2 .content2','.hk_notary_content2 .content3','.hk_notary_content2 .content4','.hk_notary_content2 .content6']
    sections.forEach(section => {
        gsap.from(section, { autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', once: true } })
    })
})
</script>
