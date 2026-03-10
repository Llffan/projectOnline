<template>
    <div class="msb_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    Hong Kong Money Services Operator License (MSO)
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK-2.jpg" alt="">
                    <div class="text">
                        <P>The Hong Kong Money Service Operator License (MSO License) is a financial license issued by the Hong Kong Customs Department. Any individual or enterprise operating currency exchange services or remittance services in Hong Kong must apply for this license from the Commissioner of Customs and Excise.</P>
                        <P>The MSO license is a necessary pass for compliant cross-border payment and currency exchange business. As global regulation tightens, holding this license can significantly enhance the credibility of the company and is the basis for conducting international financial business.</P>
                        <P>We provide one-stop services from company registration, venue leasing, compliance officer appointment to license application and subsequent maintenance, helping you successfully obtain a license and conduct business in compliance with regulations.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    MSO牌照优势
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
                        <div class="condition-item">Hong Kong Company: Must have a Hong Kong registered company.</div>
                        <div class="condition-item">Fit and proper persons: Directors, shareholders and ultimate beneficiaries must pass the "fit and proper" test (no criminal record, no bankruptcy).</div>
                        <div class="condition-item">Compliance Officer: It is necessary to appoint a compliance officer and a money laundering reporting officer (the same person can serve concurrently).</div>
                        <div class="condition-item">Registered address: You must have a fixed business address in Hong Kong (not just a mailing address), and the customs will conduct an on-site inspection.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Interview: Customs will arrange for the applicant to conduct an interview to verify the business plan and anti-money laundering measures.</div>
                        <div class="condition-item">Registered capital: Although there is no clear mandatory requirement, it is recommended to pay more than 500,000 Hong Kong dollars to prove your strength.</div>
                        <div class="condition-item">Anti-money laundering system: A complete anti-money laundering and counter-terrorism financing policy must be formulated.</div>
                        <div class="condition-item">Bank account: It is recommended to open a Hong Kong company bank account to facilitate business operations.</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    License application process
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
                    MSO牌照常见问题
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
import '@/css_en/secretary/hk_msb/HkMsb_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: 'Preliminary evaluation',
        description: 'Review customer qualifications, evaluate application feasibility, and provide rectification suggestions.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Data preparation',
        description: 'Assist in preparing business plans, anti-money laundering policies and various application forms.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Submit application',
        description: 'Submit formal application documents to Hong Kong Customs and pay government fees.'
    },
    {
        iconId: '#icon-government-line', 
        title: 'Customs interview',
        description: 'Coach clients to prepare for customs interviews and accompany clients to attend interviews to answer questions.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'field review',
        description: 'Assist in responding to on-site inspections of premises by customs officials.'
    },
    {
        iconId: '#icon-bank-line', 
        title: 'Successfully approved',
        description: 'Pass customs approval and receive a money service operator license.'
    }
]

const advantage = [
    {
        iconId: '#icon-award-line', 
        adv: 'Legal compliance: Currency exchange and cross-border remittance business are carried out legally and are protected by law.'
    },
    {
        iconId: '#icon-city', 
        adv: 'International recognition: Hong Kong’s financial license contains high value and is widely recognized by the international market.'
    },
    {
        iconId: '#icon-trophy', 
        adv: 'Business expansion: Cooperate with banks and payment institutions to expand cross-border payment channels.'
    },
    {
        iconId: '#icon-finance', 
        adv: 'Trust endorsement: Enhance customer trust, enhance corporate brand image and market competitiveness.'
    },
    {
        iconId: '#icon-airplane', 
        adv: 'Bonus points for listing: Compliant financial business will help future corporate financing or listing.'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        adv: 'Account advantages: It is easier to apply for and maintain a bank account and avoid the risk of account closure.'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: 'High pass rate guaranteed',
        description: 'Has extensive experience in license application and is familiar with customs review standards to ensure a high pass rate.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: 'Professional document writing',
        description: 'A professional team writes business plans and AML/CFT policies to ensure compliance with customs requirements.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: 'Full interview coaching',
        description: 'Provide one-on-one interview simulation coaching to predict interview questions and eliminate tension.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: 'Follow-up compliance maintenance',
        description: 'Provide license renewal, regular compliance reporting and ongoing legal advisory services.'
    }
]

const faqs = ref([
    {
        question: "What is Money Service?",
        answer: "Money services refer to currency exchange services (operating a currency exchange business in Hong Kong) or remittance services (operating a specific business in Hong Kong to remit money to places outside Hong Kong)."
    },
    {
        question: "How long does it take to apply for an MSO license?",
        answer: "Under normal circumstances, it takes about 4-6 months from submission of application to customs approval. The specific time depends on the preparation of application materials and the customs schedule."
    },
    {
        question: "Can I apply without a Hong Kong office?",
        answer: "Can't. The Customs requires that licensees must have a fixed business address in Hong Kong and must pass on-site inspection by the Customs. We can assist clients in leasing compliant office space."
    },
    {
        question: "How long is the MSO license valid for?",
        answer: "An MSO license is usually valid for two years. The licensee must apply for renewal 45 days before the license expires or other period specified by the Customs and Excise Department."
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