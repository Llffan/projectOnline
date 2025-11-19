<template>
    <div class="ws_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    Samoa Company Registration
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/ws/WS-2.jpg" alt="">
                    <div class="text">
                        <P>Samoa is an island nation in the South Pacific, famous for its beautiful natural scenery and stable political situation. It is one of the important offshore financial centers in the Asia-Pacific region.</P>
                        <P>Samoa has a sound legal system and favorable tax policies, providing a good business environment and investment opportunities for global investors.</P>
                        <P>Samoa International Business Companies (IBC) enjoy advantages such as tax exemption, asset protection, and privacy protection, making them ideal for international trade, investment holding, and wealth management.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Advantages of Samoa Company Registration
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
                        <div class="condition-item">Registered address (provided by our company)</div>
                        <div class="condition-item">Articles of Association</div>
                        <div class="condition-item">Company name (multiple alternatives provided)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Identity documents of directors and shareholders</div>
                        <div class="condition-item">Registered capital</div>
                        <div class="condition-item">Company secretary (provided by our company)</div>
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
                    Frequently Asked Questions About Samoa Company Registration
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
import '@/css_en/company/ws/Ws_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: 'Company Name Verification',
        description: 'Name search and verification of availability.'
    },
    {
        img: '',
        title: 'Prepare Registration Documents',
        description: 'Prepare identification documents of legal representatives/shareholders, articles of association and other relevant materials.'
    },
    {
        img: '',
        title: 'Choose Registered Address',
        description: 'Determine the address for company registration, which can be provided by our company.'
    },
    {
        img: '',
        title: 'Submit Application Documents',
        description: 'Submit complete registration application documents to the relevant Samoa authorities.'
    },
    {
        img: '',
        title: 'Receive Business License',
        description: 'Upon successful completion of company registration, receive the business license and other relevant certificates.'
    },
    {
        img: '',
        title: 'Additional Free Services',
        description: 'Company seal, articles of association, company certificate.'
    }
]

const advantage = [
    {
        img: '',
        adv: 'Tax benefits, Samoa companies are exempt from income tax, capital gains tax, etc.'
    },
    {
        img: '',
        adv: 'High confidentiality, no disclosure of shareholder and director information required'
    },
    {
        img: '',
        adv: 'No foreign exchange controls, free flow of funds'
    },
    {
        img: '',
        adv: 'Simple registration process, low maintenance costs'
    },
    {
        img: '',
        adv: 'Sound legal system, protecting investor rights'
    },
    {
        img: '',
        adv: 'High global recognition, facilitating offshore account opening'
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
        description: 'Optimized processes and rapid response greatly reducing processing time'
    },
    {
        img: '',
        title: 'Transparent Pricing',
        description: 'Clear pricing with no hidden costs, offering high value-for-money services'
    },
    {
        img: '',
        title: 'Full-Service Support',
        description: 'Comprehensive support from consultation to ongoing maintenance throughout the entire lifecycle'
    }
]

const faqs = ref([
    {
        question: "How much capital is required to register a Samoa company?",
        answer: "There is no minimum registered capital requirement for Samoa companies. Generally, a registered capital of 50,000 USD is recommended, with no capital verification required."
    },
    {
        question: "How long does it take to register a Samoa company?",
        answer: "Generally, Samoa company registration takes 3-5 working days."
    },
    {
        question: "Does a Samoa company need annual review?",
        answer: "Yes, Samoa companies must undergo annual review and submit financial statements."
    },
    {
        question: "How is tax filing conducted for Samoa companies?",
        answer: "Samoa companies are not required to pay taxes locally, but must submit annual returns on time."
    },
    {
        question: "Can foreigners register a company in Samoa?",
        answer: "Yes, foreigners can register companies in Samoa without any restrictions."
    },
    {
        question: "Can a Samoa company operate in Mainland China?",
        answer: "A Samoa company cannot directly operate in mainland China. To operate in China, a representative office must be established or a foreign investment enterprise must be set up."
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

    // content6 标题动画
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

    // content6 常见问题动画
    const faqItems = document.querySelectorAll('.content6 .faq-item');
    faqItems.forEach((item, index) => {
        // FAQ项进入动画
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