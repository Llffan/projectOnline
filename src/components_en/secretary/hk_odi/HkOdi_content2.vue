<template>
    <div class="odi_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    What is overseas investment filing (ODI filing)
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK-2.jpg" alt="ODI filing">
                    <div class="text">
                        <P>Overseas Direct Investment (ODI) involves Chinese enterprises legally establishing or acquiring non-financial entities abroad to gain ownership, control, or management rights.</P>
                        <P>ODI filing is mandatory for domestic firms investing in overseas projects or acquisitions that grant direct or indirect control over an international entity.</P>
                        <P>The review focuses on established overseas firms, excluding shell companies. sensitive regions or industries remain subject to stricter approval management.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Advantages of ODI Filing
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
                    Application conditions and requirements
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Domestic companies that have been established for more than one year (those that are less than one year old and cannot provide an audit report are more difficult to pass).</div>
                        <div class="condition-item">The audit report issued by an independent third-party accounting firm in the past year cannot show a loss.</div>
                        <div class="condition-item">The financial indicators are good: the return on net assets is recommended to be higher than 5%, and the asset-liability ratio is recommended to be lower than 70%.</div>
                        <div class="condition-item">The background of shareholders and sources of funds must be true and legal.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">It is necessary to prepare the main application for the company's business license, articles of association, audit report, fund certificate, etc.</div>
                        <div class="condition-item">It is necessary to prepare overseas investment transaction structure diagram, overseas company documents and project introduction.</div>
                        <div class="condition-item">Restrict investment in sensitive countries and regions (such as war-torn/no diplomatic relations) and sensitive industries (such as real estate/entertainment industry).</div>
                        <div class="condition-item">Restrictions on the establishment of overseas equity investment funds or investment platforms without specific industrial projects.</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    ODI Filing Process
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
                    Our service advantages
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
                        <div class="img">
                            <img :src="item.imgSrc" :alt="item.title">
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
                    ODI Filing FAQs
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
import '@/css_en/secretary/hk_odi/HkOdi_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: 'Preliminary evaluation',
        description: 'Assess qualifications, funding compliance, and project feasibility; draft application plan.'
    },
    {
        iconId: '#icon-agreement', 
        title: 'Data preparation',
        description: 'Prepare due diligence, feasibility, audit, and legal documents.'
    },
    {
        iconId: '#icon-city', 
        title: 'National Development and Reform Commission filing',
        description: 'Submit to NDRC and obtain the Overseas Investment Project Registration Notice.'
    },
    {
        iconId: '#icon-government-line', 
        title: 'Registration with the Ministry of Commerce',
        description: 'Submit to commerce department and receive the Enterprise Overseas Investment Certificate.'
    },
    {
        iconId: '#icon-bank-line', 
        title: 'Foreign exchange registration',
        description: 'Register foreign exchange at bank and open overseas investment account.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'Implement investment',
        description: 'Purchase foreign exchange, transfer funds, and commence overseas project.'
    }
]

const advantage = [
    {
        iconId: '#icon-finance', 
        adv: 'Compliant exit: Legally complete the exit of domestic funds to achieve the purpose of obtaining foreign currency overseas.'
    },
    {
        iconId: '#icon-trophy', 
        adv: 'Market development: Obtain local policies or tax incentives to accelerate capital accumulation.'
    },
    {
        iconId: '#icon-award-line', 
        adv: 'Image enhancement: Improve the image of domestic enterprises, increase their added value and experience absorption.'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        adv: 'Resource integration: Effectively utilize bilateral market resources, avoid barriers and optimize resource allocation.'
    },
    {
        iconId: '#icon-bank-line', 
        adv: 'Fund subsidies: Return investment of overseas funds can enjoy financial subsidies from provincial and municipal governments at all levels.'
    },
    {
        iconId: '#icon-city', 
        adv: 'Capital operation: assisting cross-border cooperation, overseas financing and listing, and building a red-chip structure.'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: 'Professional team',
        description: 'We have a team of senior consultants who are familiar with the ODI filing process and the latest policy requirements.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: 'One-stop service',
        description: 'Provide full-process services from company registration, audit reports, legal documents to filing applications.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: 'Efficient approval',
        description: 'Evaluate application qualifications in advance, optimize application materials, and ensure the pass rate and efficiency of filing.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: 'Compliance assurance',
        description: 'Ensure that the outbound funds are legal and compliant and avoid legal risks caused by illegal operations.'
    }
]

const faqs = ref([
    {
        question: "How can two or more companies jointly carry out overseas investments?",
        answer: "If there are two or more companies investing together, the \"lead investor\" (the party with the largest investment amount or the highest shareholding ratio) shall file a unified declaration. In terms of foreign exchange, each reporting entity shall report to the local foreign exchange bureau."
    },
    {
        question: "When is the validity period of the \"Enterprise Overseas Investment Registration Certificate\"?",
        answer: "It is valid for 2 years from the date of receipt of the \"Certificate\". If no investment is made overseas within 2 years, the \"Certificate\" will automatically expire. If you need to continue, you need to apply again or apply for an extension."
    },
    {
        question: "What are the consequences of not filing for ODI?",
        answer: "Investment entities may be warned or suspended from investing; funds cannot exit the country in compliance with regulations; overseas profits cannot be repatriated; domestic subsidies cannot be enjoyed; return investments or overseas listing structures cannot be completed."
    },
    {
        question: "Does registering an overseas company require ODI filing?",
        answer: "uncertain. ODI is suitable for overseas business expansion, entity investment or mergers and acquisitions. If you only register an offshore company for transit trade and do not involve direct overseas investment, ODI is usually not required."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const advantageRefs = ref([])
const registrationProcessRefs = ref([])

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

    // content2 animation
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

    // Add animation to each advantage item
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

    // content4 animation
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

    // Add animation to each registration flow item
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