<template>
    <div class="kr_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    Korean Company Registration
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/kr/KR-2.jpg" alt="">
                    <div class="text">
                        <P>South Korea is one of the Asian Tigers with advanced technology and manufacturing industries, making it one of the world's important economies. The Korean government actively promotes foreign investment, providing a favorable business environment and preferential policies.</P>
                        <P>Establishing a company in South Korea allows you to fully utilize Korea's technological advantages in electronics, automotive, and shipbuilding industries, while enjoying the trade facilitation brought by free trade agreements signed with multiple countries and regions including the United States, the European Union, and China.</P>
                        <P>South Korea's company registration process is relatively straightforward with a well-established legal system, providing foreign investors with a stable and reliable investment environment and broad development opportunities.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Advantages of Korean Company Registration
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="text">
                            {{ item.adv }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="content3">
                <div class="title">
                    Conditions and Required Documents
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">At least one director and one shareholder (can be the same person)</div>
                        <div class="condition-item">Registered address (must be a real address in South Korea)</div>
                        <div class="condition-item">Company name (in Korean or English)</div>
                        <div class="condition-item">Articles of incorporation</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Identity documents of directors and shareholders</div>
                        <div class="condition-item">Registered capital (no minimum requirement)</div>
                        <div class="condition-item">Company business description</div>
                        <div class="condition-item">Signed relevant documents</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    Company Registration Process
                </div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage">
                        <div class="img">
                            <!-- <img :src="item.img" :alt="item.title"> -->
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
                    Our Advantages
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
                        <div class="img">
                            <!-- <img :src="item.img" :alt="item.title"> -->
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
                    Frequently Asked Questions about Korean Company Registration
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
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/company/kr/Kr_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: 'Company Name Verification',
        description: 'Verify the availability of the company name and prepare alternative names.'
    },
    {
        img: '',
        title: 'Prepare Registration Documents',
        description: 'Prepare the articles of incorporation, shareholder and director information, and other necessary documents.'
    },
    {
        img: '',
        title: 'Submit Registration Application',
        description: 'Submit the company registration application and related documents to the relevant authorities.'
    },
    {
        img: '',
        title: 'Receive Registration Certificate',
        description: 'After the registration review is approved, receive the company registration certificate.'
    },
    {
        img: '',
        title: 'Complete Tax Registration',
        description: 'Complete the tax registration procedures with the National Tax Service and local tax departments.'
    },
    {
        img: '',
        title: 'Open Bank Account',
        description: 'Open a company bank account in a Korean bank with company documents.'
    }
]

const advantage = [
    {
        img: '',
        adv: 'Developed technology industry, superior innovation environment'
    },
    {
        img: '',
        adv: 'Sound legal system, sufficient investment protection'
    },
    {
        img: '',
        adv: 'Superior geographical location, convenient for expanding Asian markets'
    },
    {
        img: '',
        adv: 'Government actively promotes foreign investment, policy support'
    },
    {
        img: '',
        adv: 'High-quality talent concentration, abundant labor resources'
    },
    {
        img: '',
        adv: 'Extensive free trade agreement network, trade facilitation'
    }
]

const advantages = [
    {
        img: '',
        title: 'Professional Team',
        description: 'Experienced professional consultants providing one-stop service solutions'
    },
    {
        img: '',
        title: 'Efficient Processing',
        description: 'Optimized processes and quick response significantly reduce processing time'
    },
    {
        img: '',
        title: 'Transparent Pricing',
        description: 'Clear pricing with no hidden fees, providing cost-effective services'
    },
    {
        img: '',
        title: 'Full-Service Support',
        description: 'Full-cycle caring service support from consultation to ongoing maintenance'
    }
]

const faqs = ref([
    {
        question: "How much capital is required to register a Korean company?",
        answer: "There is no minimum capital requirement for registering a Korean company. The amount can be set according to actual needs."
    },
    {
        question: "How long does it take to register a Korean company?",
        answer: "Under normal circumstances, it takes 1-2 weeks to register a Korean company."
    },
    {
        question: "Is it necessary to have a Korean person as a director?",
        answer: "No, foreigners can also serve as directors of Korean companies."
    },
    {
        question: "Does a Korean company need annual review?",
        answer: "Yes, Korean companies need to submit annual reports and update relevant information each year."
    },
    {
        question: "How to open a bank account after registering a Korean company?",
        answer: "After registration is completed, a company account can be opened at a Korean bank with company documents, or it can be handled with the assistance of an agent."
    },
    {
        question: "Can a Korean company operate in China?",
        answer: "A Korean company cannot directly operate in China. To operate in China, it is necessary to establish a representative office or invest in establishing a foreign-invested enterprise."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

// Add transition animations
onMounted(() => {
    // content1 animation
    gsap.from('.content1 .title', {
        scrollTrigger: {
            trigger: '.content1 .title',
            start: 'top 90%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    })

    gsap.from('.content1 .intro', {
        scrollTrigger: {
            trigger: '.content1 .intro',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2
    })

    // content2 animation
    gsap.from('.content2 .title', {
        scrollTrigger: {
            trigger: '.content2 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    })

    gsap.from('.content2 .advantage', {
        scrollTrigger: {
            trigger: '.content2 .intro',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1
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

    // Use fromTo method to resolve conflicts between animation and floating effects
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
                    start: 'top 80%'  // Trigger when element enters 80% of viewport
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
        duration: 0.8
    })

    gsap.from('.content4 .advantage', {
        scrollTrigger: {
            trigger: '.content4 .intro',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1
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

    // Use fromTo method to resolve conflicts between animation and floating effects
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
        // FAQ item entrance animation
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