<template>
    <div class="telecom_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    Hong Kong Telecommunications License
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/company/hk/HK-2.jpg" alt="Hong Kong Telecom">
                    <div class="text">
                        <P>Under Section 9 of the HK Telecommunications Ordinance, importing or exporting wireless transmitters (except for "Relaxed" licensees) requires an Authority license.</P>
                        <P>This license is essential for customs clearance; importers and exporters of items like mobile phones must hold a valid permit or wireless business license.</P>
                        <P>Typically applied for under a corporate name, individual applications are also possible. We offer full support from document preparation to annual renewal.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Main license categories
                </div>
                <div class="intro">
                    <div v-for="(item, index) in licenseTypes" :key="index" class="advantage" :ref="el => { if (el) licenseTypesRefs[index] = el }">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text">
                            {{ item.title }}
                        </div>
                        <div class="desc">
                            {{ item.description }}
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
                        <div class="header-title">A. Ship radio license</div>
                        <div class="condition-item">Copy of HK Merchant Shipping Certificate from Marine Department.</div>
                        <div class="condition-item">Accounting confirmation of ship's radio communications account.</div>
                        <div class="condition-item">Original radio license and installation records.</div>
                        <div class="condition-item">Completed ITU ship station form.</div>
                        <div class="condition-item">Company: BR required; Individual: ID/Passport required.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                         <div class="header-title">B. Wireless business license</div>
                        <div class="condition-item">Applications can only be made in the name of a limited company.</div>
                        <div class="condition-item">Required for importing/exporting mobile phones, walkie-talkies, or WIFI products.</div>
                        <div class="condition-item">Provide HK Certificate of Incorporation (CI) and Business Registration Certificate (BR).</div>
                        <div class="condition-item">Form must be stamped with company seal and signed.</div>
                        <div class="condition-item">A copy of the applicant’s (director’s) ID card.</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    Application Process (Wireless Business License)
                </div>
                <div class="intro">
                    <div v-for="(item, index) in processSteps" :key="index" class="advantage" :ref="el => { if (el) processStepsRefs[index] = el }">
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
                    FAQ
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
import '@/css_en/secretary/telecom/Telecom_content2.css'

gsap.registerPlugin(ScrollTrigger)

const licenseTypes = [
    {
        iconId: '#icon-city', 
        title: 'transmitter license',
        description: 'Covers telecom lines and mobile services. Acquisition is via transfer as new licenses are limited.'
    },
    {
        iconId: '#icon-airplane', 
        title: 'public radio communications license',
        description: 'Commercial use for minibus terminals, airport paging, and other public radio services.'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        title: 'Service provider license',
        description: 'Includes local voice services (Cat I/II) and network value-added/mobile services (Cat III).'
    },
    {
        iconId: '#icon-notes', 
        title: 'Other/category licenses',
        description: 'Covers ship radio or wireless business licenses, essential for mobile phone trade.'
    }
]

const processSteps = [
    {
        iconId: '#icon-notes', 
        title: 'Data preparation',
        description: 'Help clients prepare all necessary documents and forms for HK companies.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Submit application',
        description: 'Formally submit documents to the Authority and track acceptance status.'
    },
    {
        iconId: '#icon-government-line', 
        title: 'Department review',
        description: 'Government audit process typically takes 7-10 working days.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Successfully approved',
        description: 'Obtain a wireless business or ship station license after passing review.'
    },
    {
        iconId: '#icon-agreement', 
        title: 'annual renewal',
        description: 'Licenses are valid for one year; renewal must be done before expiration.'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: 'Professional and efficient',
        description: 'Expertise in HK telecom regulations ensures fast and accurate application processing.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: 'One-stop service',
        description: 'Full support from company registration to license application and annual renewal.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: 'High success rate',
        description: 'Rich application experience helps avoid risks and ensure successful licensing.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: 'Intimate after-sales service',
        description: 'Dedicated follow-up and timely renewal reminders via customer files.'
    }
]

const faqs = ref([
    {
        question: "Which products require a radio license for import and export?",
        answer: "Generally, the import and export of mobile phones, walkie-talkies or electronic products with WIFI functions (such as smart home equipment, etc.) must use a wireless business license (relaxed restrictions)."
    },
    {
        question: "How long is the Hong Kong telecommunications license valid for?",
        answer: "Hong Kong telecommunications licenses are usually valid for one year. The licensee must renew the license before expiration. If not renewed within 1 month, the license will be cancelled."
    },
    {
        question: "What circumstances are exempt from applying for a license?",
        answer: "The following situations are exempted: (1) transit items and air transshipment cargo; (2) pure transshipment cargo; (3) radio communication equipment for personal use."
    },
    {
        question: "Can I apply without a Hong Kong company?",
        answer: "Most telecommunications licenses (such as wireless business licenses) need to be applied for in the name of a limited company. For special circumstances such as ship station license, you can apply in an individual name, but for business purposes it is recommended to use a company."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const licenseTypesRefs = ref([])
const processStepsRefs = ref([])

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

    licenseTypesRefs.value.forEach((el, index) => {
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

    processStepsRefs.value.forEach((el, index) => {
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

    // content6 animation
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

    const faqItems = document.querySelectorAll('.content6 .faq-item');
    faqItems.forEach((item, index) => {
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
