<template>
    <div class="jp_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    Japanese Company Registration
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/jp/JP-2.jpg" alt="">
                    <div class="text">
                        <P>Japan is the world's third-largest economy with advanced technology, a comprehensive legal system, and highly developed infrastructure. As a major business center in Asia, Japan attracts global investors with its stable economic environment, strict intellectual property protection, and high-quality business services.</P>
                        <P>Establishing a company in Japan not only provides the important gateway advantage to the Asian market but also allows full utilization of Japan's leading position in technological innovation, high-end manufacturing, and brand management.</P>
                        <P>Japan's company registration system is well-developed, and its transparent legal environment provides a favorable business environment and broad development space for foreign investors.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Advantages of Japanese Company Registration
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
                        <div class="condition-item">Registered address (must be a real address in Japan)</div>
                        <div class="condition-item">Company name (in Japanese or English)</div>
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
                    Frequently Asked Questions about Japanese Company Registration
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
import '@/css_en/company/jp/Jp_content2.css'

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
        description: 'Submit the company registration application and related documents to the Legal Affairs Bureau.'
    },
    {
        img: '',
        title: 'Receive Registration Certificate',
        description: 'After the registration review is approved, receive the company registration certificate.'
    },
    {
        img: '',
        title: 'Complete Tax Registration',
        description: 'Complete the tax registration procedures with the National Tax Agency and local tax departments.'
    }
]

const advantages = [
    {
        img: '',
        title: 'Professional Team',
        description: 'We have an experienced team of professional consultants providing one-stop service solutions'
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
        description: 'From consultation to ongoing maintenance, we provide full-cycle caring service support'
    }
]

const advantage = [
    {
        img: '',
        adv: 'The world\'s third largest economy with huge market potential'
    },
    {
        img: '',
        adv: 'Sound legal system, stable economic environment'
    },
    {
        img: '',
        adv: 'Strict intellectual property protection'
    },
    {
        img: '',
        adv: 'Advanced technology and manufacturing base'
    },
    {
        img: '',
        adv: 'High-quality talent resources'
    },
    {
        img: '',
        adv: 'Convenient gateway to the Asian market'
    }
]

const faqs = ref([
    {
        question: 'What are the benefits of registering a company in Japan?',
        answer: 'Registering a company in Japan provides access to a highly developed market with advanced technology and infrastructure. It also offers a stable economic environment, strict intellectual property protection, and high-quality business services.'
    },
    {
        question: 'What are the requirements for registering a company in Japan?',
        answer: 'To register a company in Japan, you need at least one director and one shareholder (who can be the same person), a registered address in Japan, a company name (in Japanese or English), articles of incorporation, identity documents of directors and shareholders, registered capital (no minimum requirement), a company business description, and signed relevant documents.'
    },
    {
        question: 'What is the process for registering a company in Japan?',
        answer: 'The process includes verifying the company name, preparing registration documents, submitting the registration application to the Legal Affairs Bureau, receiving the registration certificate, and completing tax registration with the National Tax Agency and local tax departments.'
    },
    {
        question: 'What are the advantages of using your services for company registration?',
        answer: 'Our services offer a professional team, efficient processing, transparent pricing, and full-service support from consultation to ongoing maintenance.'
    }
])

const expandedItems = ref([])

const toggleFaq = (index) => {
    if (expandedItems.value[index]) {
        expandedItems.value[index] = false
    } else {
        expandedItems.value[index] = true
    }
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
