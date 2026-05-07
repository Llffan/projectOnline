<template>
    <div class="hk_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    Hong Kong taxation and annual review
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/company/hk/HK-2.jpg" alt="">
                    <div class="text">
                        <P>Accounting and tax filing in Hong Kong are in accordance with Hong Kong law. All Hong Kong companies, regardless of whether they are profitable or not, are required to report their operating conditions for the previous year, and the Hong Kong Inland Revenue Department will determine whether the Hong Kong company needs to pay taxes in accordance with certain standards.</P>
                        <P>Hong Kong is a duty-free port and does not impose any tariffs on imported and exported goods, let alone sales tax and other import fees. This provides great convenience for international trade and reduces business costs.</P>
                        <P>Regarding the tax filing of Hong Kong companies, legal procedures must be strictly followed and a professional licensed accounting firm must be entrusted with auditing and handling to ensure compliance and avoid unnecessary legal risks.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Hong Kong’s tax system advantages
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage" :ref="el => { if (el) advantageRefs[index] = el }">
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
            </div>
            <div class="content3">
                <div class="title">
                    Special taxes and precautions
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Special cases of consumption tax: only levied on four categories of commodities: alcohol, tobacco, hydrocarbon oil, and methanol.</div>
                        <div class="condition-item">Alcohol tax rate: There are three levels of tax rates based on different alcohol concentrations.</div>
                        <div class="condition-item">Quantity-based levy: Tobacco, hydrocarbon oil, etc. are levied at specific tax rates based on unit quantity.</div>
                        <div class="condition-item">零申报风险：不满足条件强行零申报，将面临高额罚款及监禁。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Must-do audit: Regardless of profit or loss, an audit report must be issued every year, and zero declarations cannot be made at will.</div>
                        <div class="condition-item">Tax filing cycle: File after 18 months in the first year, and once a year thereafter (tax filing does not mean tax payment).</div>
                        <div class="condition-item">Legal Liability: Directors who fail to file taxes on time or conceal taxes will bear legal liability and heavy fines.</div>
                        <div class="condition-item">Geographical source: If the profits are not generated in Hong Kong, you can apply for offshore exemption and do not need to pay tax.</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    Tax filing and accounting process
                </div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage" :ref="el => { if (el) registrationProcessRefs[index] = el }">
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
            <div class="content5">
                <div class="title">
                    Our advantages
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
            </div>
            <div class="content6">
                <div class="title">
                    Hong Kong tax FAQs
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
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// Keep the import path unchanged
import '@/css_en/secretary/hk_annual/TaxHk_content2.css' 

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: 'receive tax form',
        description: 'The company received its first tax form 18 months after its establishment, and then in April every year.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Document sorting',
        description: 'Organize financial information such as bank statements, purchase and sales contracts, expense notes, etc.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Accounting',
        description: 'Prepare balance sheet, profit and loss statement and general ledger based on documents.'
    },
    {
        iconId: '#icon-government-line', 
        title: 'Audit audit',
        description: 'A licensed accountant conducts the audit and issues a statutory audit report.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Calculate taxes',
        description: 'Perform tax calculations to confirm the amount of tax payable or apply for tax exemptions.'
    },
    {
        iconId: '#icon-bank-line', 
        title: 'Submit declaration',
        description: 'Sign the audit report and tax form and submit them to the tax bureau to complete the declaration.'
    }
]

const advantage = [
    {
        iconId: '#icon-award-line', 
        adv: 'Duty-free port policy: no tariffs or value-added tax are levied, which greatly reduces trade costs.'
    },
    {
        iconId: '#icon-city', 
        adv: 'Geographical source principle: If profits originate outside Hong Kong, you can apply for tax exemption.'
    },
    {
        iconId: '#icon-trophy', 
        adv: 'Low tax rate discount: The profit tax rate is as low as 16.5%, and the first 2 million profits are only 8.25%.'
    },
    {
        iconId: '#icon-finance', 
        adv: 'Loss deduction: Annual losses can be carried forward indefinitely and offset against profits in future years.'
    },
    {
        iconId: '#icon-airplane', 
        adv: 'International recognition: Formal audit reports are internationally recognized, which is conducive to financing and listing.'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        adv: 'Improve the legal system: The legal system is sound, the tax system is transparent, and the business environment is excellent.'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: 'Licensed accountant team',
        description: '由香港执业会计师(CPA)亲自理账核数，确保审计报告符合香港会计准则及税务条例要求。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: 'Precise tax planning',
        description: 'Based on the actual operating conditions of the enterprise, we provide compliant tax planning plans, make reasonable use of exemption policies, and reduce tax costs.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: 'Zero-error compliance guarantee',
        description: 'Strictly control every reporting link to eliminate the risk of late reporting and underreporting, and avoid high fines and legal liabilities.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: 'One-stop worry-free hosting',
        description: 'We provide one-stop services from document sorting, accounting, auditing to filling out tax forms, with exclusive consultants following up throughout the process, saving time and worry.'
    }
]

const faqs = ref([
    {
        question: "Does a Hong Kong company need to make accounts every year after doing so?",
        answer: "Hong Kong tax law stipulates that after the first year of accounting for a Hong Kong company, an audit report must be issued every year regardless of profit or loss, and it cannot be changed to a zero declaration. If you do not meet the conditions for zero declaration and make a zero declaration, once discovered by the Hong Kong government, you will be subject to a 'tax evasion' fine. You will need to bear a fine of up to 50,000 Hong Kong dollars, three times the tax payable, and a director's legal liability of up to 3 years in prison."
    },
    {
        question: "If a Hong Kong company fails to file tax returns, will it be punished?",
        answer: "The Hong Kong Company Law stipulates that every Hong Kong limited company must file a tax return within the statutory time. The Hong Kong Inland Revenue Department will impose a fine. If it is ignored again, the Hong Kong court will issue a court summons to summon the directors and shareholders to appear in court. If the directors and shareholders do not appear in court, it will be regarded as contempt of court. The court will stop the operation of the Hong Kong company, and the directors of the Hong Kong company will bear corresponding legal responsibilities."
    },
    {
        question: "What is the tax filing cycle for Hong Kong companies?",
        answer: "The tax filing cycle of Hong Kong companies is different from that of mainland China, and they do not need to file once a month. Hong Kong companies only process tax returns when they first receive tax forms from the tax bureau when they are 18 months old, and then file once a year (tax returns and tax payments for Hong Kong companies are separate. Tax returns must be filed but they may not be required to be paid). Those who meet the tax exemption conditions at the same time as filing taxes can apply for tax exemption. If the application for tax exemption is not successful by then, the tax will need to be paid."
    },
    {
        question: "What should Hong Kong companies pay attention to when filing tax returns?",
        answer: "Any Hong Kong limited company, whether it is conducting business or not, and whether it is making profits or not, is required to prepare a tax audit report and submit it to the Hong Kong Inland Revenue Department every year. After verification, you do not need to pay taxes to the Hong Kong Inland Revenue Department no matter how much your profits are from overseas. However, if you fail to submit a tax audit report on time, it is an illegal act and constitutes tax concealment."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const advantageRefs = ref([])
const registrationProcessRefs = ref([])

// Keep animation script unchanged
onMounted(async () => {
    await nextTick()
    
    // content1 animation
    gsap.from('.content1 .title', {
        scrollTrigger: {
            trigger: '.content1 .title',
            start: 'top 90%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    gsap.from('.content1 .intro', {
        scrollTrigger: {
            trigger: '.content1 .intro',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    })

    // content2 animation - Unify animation effects with reference to other pages
    gsap.from('.content2 .title', {
        scrollTrigger: {
            trigger: '.content2 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    // Add animation to each advantage item - refer to other pages to unify the animation effect
    advantageRefs.value.forEach((el, index) => {
        gsap.fromTo(el,
            { 
                opacity: 0, 
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content2 .intro',
                    start: 'top 80%'
                }
            }
        )
    })

    // content3 animation
    gsap.from('.content3 .title', {
        scrollTrigger: {
            trigger: '.content3 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    })

    const conditionItems = document.querySelectorAll('.content3 .condition-item');
    conditionItems.forEach((item, index) => {
        gsap.fromTo(item,
            { x: -50, opacity: 0, transition: 'none' },
            { 
                x: 0, 
                opacity: 1, 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content3 .intro',
                    start: 'top 80%'  
                },
                onComplete: function() {
                    gsap.set(item, { clearProps: "x,opacity,transition" })
                }
            }
        );
    });

    // content4 animation - Unify animation effects with reference to other pages
    gsap.from('.content4 .title', {
        scrollTrigger: {
            trigger: '.content4 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    // Add animation to each registration process item - refer to other pages to unify animation effects
    registrationProcessRefs.value.forEach((el, index) => {
        gsap.fromTo(el,
            { 
                opacity: 0, 
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content4 .intro',
                    start: 'top 80%'
                }
            }
        )
    })

    // content5 animation
    gsap.from('.content5 .title', {
        scrollTrigger: {
            trigger: '.content5 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    })

    const content5Advantages = document.querySelectorAll('.content5 .advantage');
    content5Advantages.forEach((item, index) => {
        gsap.fromTo(item,
            { y: 50, opacity: 0, transition: 'none' },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content5 .intro',
                    start: 'top 80%'
                },
                onComplete: function() {
                    gsap.set(item, { clearProps: "y,opacity,transition" })
                }
            }
        );
    })

    // content6 title animation
    gsap.fromTo('.content6 .title',
        { y: 50, opacity: 0, transition: 'none' },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.content6 .title',
                start: 'top 80%'
            },
            onComplete: function() {
                gsap.set('.content6 .title', { clearProps: "y,opacity,transition" })
            }
        }
    );

    // content6 FAQ animation
    const faqItems = document.querySelectorAll('.content6 .faq-item');
    faqItems.forEach((item, index) => {
        // FAQ item enters animation
        gsap.fromTo(item,
            { y: 30, opacity: 0, transition: 'none' },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content6 .intro',
                    start: 'top 85%'
                },
                onComplete: function() {
                    gsap.set(item, { clearProps: "y,opacity,transition" })
                }
            }
        );
    });
})
</script>