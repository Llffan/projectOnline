<template>
    <div class="bvi_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    BVI公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/bvi/BVI-2.jpg" alt="">
                    <div class="text">
                        <P>BVI又称为英属维尔京群岛或英属处女群岛，是英联邦成员国之一，旅游业及海外离岸公司注册是其两大支柱产业。</P>
                        <P>BVI的金融环境非常利于离岸公司发展，因其被称作为“免税天堂”，基本上所有离岸经营的公司不用缴税。</P>
                        <P>BVI公司每年仅需少数的年审成本，因此发展成世界上最快的海外离岸投资中心之一。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    BVI公司注册优势
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
                    条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">公司名称：英文需以LIMITED等结尾，也可递交中文名称。</div>
                        <div class="condition-item">董事要求：一名或多名（年满18岁自然人），无国籍限制。</div>
                        <div class="condition-item">股东要求：一名或多名，可以是自然人或法人单位。</div>
                        <div class="condition-item">注册地址：BVI公司注册地址必须在英属维尔京群岛。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">注册资本：标准50,000股，每股币值不受限制。</div>
                        <div class="condition-item">验资要求：注册资本无须验资到位。</div>
                        <div class="condition-item">个人注册资料：股东身份文件和地址证明。</div>
                        <div class="condition-item">公司名义注册：需提供公司全套注册文件和CPA核证。</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    公司注册流程
                </div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage">
                        <div class="img">
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
                    我们的优势
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
                        <div class="img">
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
                    注册BVI公司常见问题
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
import '@/css/company/bvi/Bvi_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '公司名称核准',
        description: '核准公司名称，我司将免费查册。'
    },
    {
        img: '',
        title: '签署委托书及交付费用',
        description: '填写委托书，签署协议书，并交付费用。'
    },
    {
        img: '',
        title: '签署法定文件',
        description: '安排所有股东及董事签署全套法定文件，并回签政府文件。'
    },
    {
        img: '',
        title: '政府部门办理手续',
        description: '到政府各部门办理有关注册手续。'
    },
    {
        img: '',
        title: '完成注册及交接文件',
        description: '约15个工作天完成注册，交接全套注册公司文件。'
    },
    {
        img: '',
        title: '后续经济实质申报',
        description: '完成文件备档及后续经济实质法案申报指导。'
    }
]

const advantage = [
    {
        img: '',
        adv: '政治经济稳定，有良好的金融法律设施。'
    },
    {
        img: '',
        adv: '股东信息保密，董事、股东资料享有高度隐秘性。'
    },
    {
        img: '',
        adv: '免税天堂，离岸经营所得实现零税率。'
    },
    {
        img: '',
        adv: '申请条件简单，一人即可注册，取名自由，注册资本无上限。'
    },
    {
        img: '',
        adv: '后续维护简单，仅需年审和经济实质法案申报，无需做账、报税、审计。'
    },
    {
        img: '',
        adv: '经营范围没有限制（不包括数字货币、虚拟货币等），无外汇管制。'
    }
]

const advantages = [
    {
        img: '',
        title: '快速通道服务',
        description: '外国投资者注册企业可以享受快速通道服务，并可以通过无纸化电子方式提交申请，仅需二周时间即可完成注册。'
    },
    {
        img: '',
        title: '经验丰富，大量成功案例',
        description: '昶嘉捷以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        img: '',
        title: '提供专业增值服务',
        description: '昶嘉捷在境外拥有自己的团队，协助客户提供综合全面的财务、税务、法律等服务，做到“在外有昶嘉捷，更快捷”。'
    },
    {
        img: '',
        title: '专业专属商务对接和支持',
        description: '顾问、咨询师、会计师等建立计划小组，负责客户一对一的咨询、案子进度和客户协调计划等服务工作。'
    }
]

const faqs = ref([
    {
        question: "BVI公司有无企业所得税？",
        answer: "BVI公司对于离岸企业不征收所得税，且无公司资产税、印花税等。对公司信息保密度高，可以以BVI公司持有物业资本，物业或资本转移时，只需转移公司股权，简单免税。"
    },
    {
        question: "注册BVI公司后续维护方便吗？",
        answer: "BVI公司每年仅需年审（续年费）和做经济实质法案申报，不用在BVI做账报税，维护简单，成本低。"
    },
    {
        question: "注册BVI公司需要多久？",
        answer: "全套注册下来需要时间约1个月（15个工作日左右）。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

// 保持动画脚本不变
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