<template>
    <div class="de_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    Germany Company Registration
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/de/DE-2.jpg" alt="">
                    <div class="text">
                        <P>Germany is Europe's largest economy and the world's fourth-largest economy, with a strong industrial base and advanced technology. Germany is renowned for its high-quality products and services, stable economic environment, and favorable business regulations.</P>
                        <P>As a core EU member state, Germany provides a open investment environment and favorable tax policies for foreign investors. The German limited liability company (GmbH) is one of the most popular business types, suitable for businesses of various sizes.</P>
                        <P>Located in the heart of Europe, Germany serves as an important hub connecting Eastern and Western Europe, providing an excellent geographical advantage for businesses to expand into the European market. Many multinational companies choose to establish headquarters or branches in Germany.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Advantages of Germany Company Registration
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
                        <div class="condition-item">Shareholders or directors aged 18 or above</div>
                        <div class="condition-item">Registered address (provided by our company)</div>
                        <div class="condition-item">Registered capital of at least €25,000</div>
                        <div class="condition-item">Articles of Association</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Identity documents of directors and shareholders</div>
                        <div class="condition-item">Company name (multiple options provided)</div>
                        <div class="condition-item">Bank credit certificate</div>
                        <div class="condition-item">Sign relevant documents</div>
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
                    Frequently Asked Questions about Germany Company Registration
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
import '@/css_en/company/de/De_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: 'Company Name Verification',
        description: 'Verify the availability of the proposed company name.'
    },
    {
        img: '',
        title: 'Prepare Registration Documents',
        description: 'Prepare necessary documents such as articles of association and shareholder/director information.'
    },
    {
        img: '',
        title: 'Notarization',
        description: 'Notarize relevant documents.'
    },
    {
        img: '',
        title: 'Submit Registration Application',
        description: 'Submit the registration application to the local court commercial registry.'
    },
    {
        img: '',
        title: 'Open Bank Account',
        description: 'Complete the capital injection and open a company bank account.'
    },
    {
        img: '',
        title: 'Tax Registration',
        description: 'Apply for tax numbers, VAT numbers, and other related tax registrations.'
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
        description: 'Clear pricing with no hidden costs, offering high value for money services'
    },
    {
        img: '',
        title: 'Full-service Support',
        description: 'Full-cycle caring service support from consultation to follow-up maintenance'
    }
]

const advantage = [
    {
        img: '',
        adv: 'Europe\'s largest economy with huge market potential'
    },
    {
        img: '',
        adv: 'Sound legal system protecting investor rights'
    },
    {
        img: '',
        adv: 'Strategic location radiating the entire European market'
    },
    {
        img: '',
        adv: 'Abundant high-quality talent resources and strong research capabilities'
    },
    {
        img: '',
        adv: 'Reasonable tax system with many preferential policies'
    },
    {
        img: '',
        adv: 'Well-developed infrastructure and convenient transportation'
    }
]

const faqs = ref([
    {
        question: "What is the required capital for registering a Germany company?",
        answer: "The minimum registered capital for a German limited liability company (GmbH) is €25,000, of which at least 50% must be paid in before registration."
    },
    {
        question: "How long does it take to register a Germany company?",
        answer: "Under normal circumstances, it takes 4-8 weeks to register a Germany company, depending on the document preparation and approval progress."
    },
    {
        question: "Does a Germany company need annual review?",
        answer: "German companies need to undergo annual financial statement audits and tax filings, but there is no annual review system similar to other countries."
    },
    {
        question: "What are the requirements for accounting and auditing of Germany companies?",
        answer: "Germany companies need to file VAT monthly and income tax and trade tax annually."
    },
    {
        question: "Can Germany companies operate in Mainland China?",
        answer: "Germany companies cannot directly operate in mainland China. If operation is needed in mainland China, a representative office or a foreign-invested enterprise needs to be established."
    },
    {
        question: "Do I need to be present in person to register a Germany company?",
        answer: "No, you can委托代理机构办理所有手续 through a power of attorney."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

// 添加过渡动画
onMounted(() => {
    // content1 动画
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

    // content2 动画
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

    // content3 动画
    gsap.from('.content3 .title', {
        scrollTrigger: {
            trigger: '.content3 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    })

    // 使用fromTo方法解决动画与浮动效果冲突
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
                    start: 'top 80%'  // 元素进入视口80%位置时触发
                },
                onComplete: function() {
                    gsap.set(item, { clearProps: "x,opacity,transition" })
                }
            }
        );
    });

    // content4 动画
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

    // content5 动画
    gsap.from('.content5 .title', {
        scrollTrigger: {
            trigger: '.content5 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    })

    // 使用fromTo方法解决动画与浮动效果冲突
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
})
</script>