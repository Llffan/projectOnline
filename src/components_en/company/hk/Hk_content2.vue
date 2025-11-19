<template>
    <div class="hk_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    Hong Kong Company Registration
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK-2.jpg" alt="">
                    <div class="text">
                        <P>Hong Kong is a city that blends opportunities, creativity, and enterprising spirit. It has been rated as the "freest economy in the world" by the Heritage Foundation for 24 consecutive years.</P>
                        <P>As an international financial center, Hong Kong's well-established legal system, simple tax system, low tax rates, complete infrastructure and communication facilities, and high-quality professional talents are favored by investors around the world.</P>
                        <P>Hong Kong is full of unlimited business opportunities and serves as a platform for global economic and trade exchanges. Hong Kong's advantages are widely known, and tens of thousands of international enterprises have benefited from establishing companies in Hong Kong.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Advantages of Hong Kong Company Registration
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
                        <div class="condition-item">Company secretary (provided by our company)</div>
                        <div class="condition-item">Articles of Association</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Identity documents of directors and shareholders</div>
                        <div class="condition-item">Company name (multiple options provided)</div>
                        <div class="condition-item">Registered capital</div>
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
                    Frequently Asked Questions about Hong Kong Company Registration
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
import '@/css_en/company/hk/Hk_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: 'Company Name Verification',
        description: 'Name search to verify availability.'
    },
    {
        img: '',
        title: 'Select Registered Address',
        description: 'Determine the address for company registration. We can provide this.'
    },
    {
        img: '',
        title: 'Tax Registration',
        description: 'Dedicated financial consultant provides free daily financial management advice.'
    },
    {
        img: '',
        title: 'Submit Application Materials',
        description: 'Provide original copies of legal representative/shareholder ID cards, landlines, and other relevant materials.'
    },
    {
        img: '',
        title: 'Receive Business License',
        description: 'Upon successful completion of company registration, the consultant will deliver the original/copy of the business license.'
    },
    {
        img: '',
        title: 'Additional Free Services',
        description: 'Company seal, financial seal, private seal, latest entrepreneurial subsidy standards, latest entrepreneurial social insurance subsidy standards.'
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
        adv: 'International financial center status, facilitating global business'
    },
    {
        img: '',
        adv: 'Simple tax system, low tax rates, no foreign exchange control'
    },
    {
        img: '',
        adv: 'Free flow of funds, convenient for financing and investment'
    },
    {
        img: '',
        adv: 'Sound legal system, strict intellectual property protection'
    },
    {
        img: '',
        adv: 'Convenient geographical location, connecting China with the world'
    },
    {
        img: '',
        adv: 'High-quality talent concentration, superior business environment'
    }
]

const faqs = ref([
    {
        question: "What is the required capital for registering a Hong Kong company?",
        answer: "There is no minimum limit for the registered capital of a Hong Kong company. It is generally recommended to have a registered capital of HK$10,000, without capital verification."
    },
    {
        question: "How long does it take to register a Hong Kong company?",
        answer: "Under normal circumstances, it takes 8-10 working days to register a Hong Kong company."
    },
    {
        question: "Does a Hong Kong company need annual review?",
        answer: "Yes, Hong Kong companies need to undergo annual review every year, including submitting annual returns and renewing the business registration certificate."
    },
    {
        question: "What are the requirements for accounting and auditing of Hong Kong companies?",
        answer: "Hong Kong companies need to keep accounts and undergo auditing annually, regardless of whether there is any business activity."
    },
    {
        question: "How is tax filing conducted for Hong Kong companies?",
        answer: "Hong Kong companies need to file profits tax returns with the tax authorities annually. The first tax return can be exempted from audit."
    },
    {
        question: "Can Hong Kong companies operate in Mainland China?",
        answer: "Hong Kong companies cannot directly operate in mainland China. If operation is needed in mainland China, a representative office or a foreign-invested enterprise needs to be established."
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