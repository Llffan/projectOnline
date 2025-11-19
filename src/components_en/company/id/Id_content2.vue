<template>
    <div class="id_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    Indonesia Company Registration
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/id/ID-2.jpg" alt="">
                    <div class="text">
                        <P>Indonesia is Southeast Asia's largest economy, with a huge market of 270 million people and abundant natural resources.</P>
                        <P>As an important country along the "Belt and Road" initiative, Indonesia has great potential for development in infrastructure construction, manufacturing, and the digital economy.</P>
                        <P>With its huge consumer market, young population structure, and the government's open policy towards foreign investment, Indonesia has become one of the most attractive investment destinations in Southeast Asia.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Advantages of Registering a Company in Indonesia
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
                    Requirements and Required Documents
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Shareholders or directors aged 18 or above</div>
                        <div class="condition-item">Registered address (provided by us)</div>
                        <div class="condition-item">Legal secretary (provided by us)</div>
                        <div class="condition-item">Company charter</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Identity documents of directors and shareholders</div>
                        <div class="condition-item">Company name (multiple alternatives provided)</div>
                        <div class="condition-item">Registered capital</div>
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
                    Frequently Asked Questions About Registering a Company in Indonesia
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
import '@/css_en/company/id/Id_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: 'Company Name Verification',
        description: 'Check name availability.'
    },
    {
        img: '',
        title: 'Select Registered Address',
        description: 'Determine a registered address for the company, which we can provide.'
    },
    {
        img: '',
        title: 'Tax Registration',
        description: 'Our dedicated financial consultants provide free advice on daily financial management.'
    },
    {
        img: '',
        title: 'Submit Application Documents',
        description: 'Provide original copies of ID cards of legal representatives/shareholders, landline phone numbers, and other relevant materials.'
    },
    {
        img: '',
        title: 'Receive Business License',
        description: 'Upon successful completion of company registration, consultants will deliver the original and copy of the business license.'
    },
    {
        img: '',
        title: 'Additional Free Services',
        description: 'Company seal, financial seal, private seal, latest entrepreneurial subsidy standards, latest social insurance subsidy standards for startups.'
    }
]

const advantage = [
    {
        img: '',
        adv: 'Southeast Asia\'s largest economy with huge market potential'
    },
    {
        img: '',
        adv: 'Significant demographic dividend and broad consumer market'
    },
    {
        img: '',
        adv: 'Government policy support and improved investment environment'
    },
    {
        img: '',
        adv: 'Abundant natural resources and complete industrial chain'
    },
    {
        img: '',
        adv: 'Superior geographical location radiating the entire Southeast Asia'
    },
    {
        img: '',
        adv: 'Relatively low labor costs and sufficient human resources'
    }
]

const advantages = [
    {
        img: '',
        title: 'Professional Team',
        description: 'Experienced professional consultant team providing one-stop service solutions'
    },
    {
        img: '',
        title: 'Efficient Processing',
        description: 'Optimized processes and rapid response greatly reduce processing time'
    },
    {
        img: '',
        title: 'Transparent Pricing',
        description: 'Clear pricing with no hidden costs, offering high cost-performance services'
    },
    {
        img: '',
        title: 'Full-Service Support',
        description: 'From consultation to follow-up maintenance, providing full-cycle thoughtful service support'
    }
]

const faqs = ref([
    {
        question: "How much capital is required to register a company in Indonesia?",
        answer: "There is no minimum limit for registered capital in Indonesia. Generally, it is recommended to have registered capital of 1 billion Indonesian Rupiah, without capital verification."
    },
    {
        question: "How long does it take to register a company in Indonesia?",
        answer: "Under normal circumstances, it takes 7-10 working days to register a company in Indonesia."
    },
    {
        question: "Does an Indonesian company need annual review?",
        answer: "Yes, Indonesian companies need annual reviews, including submission of annual reports and renewal of commercial registration certificates."
    },
    {
        question: "How is tax filing conducted for Indonesian companies?",
        answer: "Indonesian companies need to file corporate income tax annually with the tax authorities. The first tax filing can be exempted from audit."
    },
    {
        question: "What are the accounting and auditing requirements for Indonesian companies?",
        answer: "Indonesian companies need to do accounting and auditing annually, regardless of whether there is business activity or not."
    },
    {
        question: "Can Indonesian companies operate in mainland China?",
        answer: "Indonesian companies cannot directly operate in mainland China. To operate in mainland China, it is necessary to establish a representative office or invest in establishing a foreign-invested enterprise."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

// Transition animations
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

    // Using fromTo method to resolve conflicts between animations and floating effects
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

    // Using fromTo method to resolve conflicts between animations and floating effects
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

    // content6 FAQ animations
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