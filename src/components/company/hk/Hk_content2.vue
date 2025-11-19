<template>
    <div class="hk_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    香港公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK-2.jpg" alt="">
                    <div class="text">
                        <P>香港是一个融合机遇、创意和进取精神的都市，连续24年被美国传统基金会评为"全球最自由经济体"。</P>
                        <P>作为国际金融中心，香港完善的法律制度、简单的税制、低税率、配套齐全的基建及通讯设施、高素质的专业人才，得到世界各地投资者的青睐。</P>
                        <P>香港蕴藏着无限商机，是通往全球经贸的平台，香港的优势广为人知，数以万计的国际企业都因在香港设立公司而受惠。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    香港公司注册优势
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
                        <div class="condition-item">年满18岁以上的股东或董事</div>
                        <div class="condition-item">注册地址（我司提供）</div>
                        <div class="condition-item">法定秘书（我司提供）</div>
                        <div class="condition-item">公司章程</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">董事和股东身份证明文件</div>
                        <div class="condition-item">公司名称（提供多个备选）</div>
                        <div class="condition-item">注册资本</div>
                        <div class="condition-item">签署相关文件</div>
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
                    我们的优势
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
                    注册香港公司常见问题
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
import '@/css/company/hk/Hk_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '开始公司核名',
        description: '核名查询，核验名称是否可用。'
    },
    {
        img: '',
        title: '选择注册地址',
        description: '确定可注册公司用的地址，我司可提供。'
    },
    {
        img: '',
        title: '办理税务登记',
        description: '专属财税顾问免费提供日常财务账目管理建议。'
    },
    {
        img: '',
        title: '提交申请资料',
        description: '提供法人/股东身份证原件复印件、 固定电话、等相关材料。'
    },
    {
        img: '',
        title: '领取营业执照',
        description: '公司注册顺利完成，顾问将营业执照正/副本等交付。'
    },
    {
        img: '',
        title: '额外赠送服务',
        description: '公章、财务章、私章、最新创业补贴标准、最新创业社保补贴标准。'
    }
]

const advantage = [
    {
        img: '',
        adv: '国际金融中心地位，便于开展全球业务'
    },
    {
        img: '',
        adv: '税制简单，税率低，无外汇管制'
    },
    {
        img: '',
        adv: '资金自由流动，便于融资和投资'
    },
    {
        img: '',
        adv: '法律体系完善，知识产权保护严格'
    },
    {
        img: '',
        adv: '便利的地理位置，连接中国与世界'
    },
    {
        img: '',
        adv: '高素质人才集中，营商环境优越'
    }
]

const advantages = [
    {
        img: '',
        title: '专业团队',
        description: '拥有经验丰富的专业顾问团队，提供一站式服务解决方案'
    },
    {
        img: '',
        title: '高效办理',
        description: '流程优化，快速响应，大大缩短办理时间'
    },
    {
        img: '',
        title: '价格透明',
        description: '明码标价，无隐性收费，提供高性价比服务'
    },
    {
        img: '',
        title: '全程服务',
        description: '从咨询到后续维护，提供全周期贴心服务支持'
    }
]

const faqs = ref([
    {
        question: "注册香港公司需要多少资本？",
        answer: "香港公司注册资本没有最低限额要求，一般建议注册资本为1万港币，无需验资。"
    },
    {
        question: "注册香港公司需要多长时间？",
        answer: "通常情况下，注册香港公司需要8-10个工作日。"
    },
    {
        question: "香港公司需要年审吗？",
        answer: "是的，香港公司每年都需要进行年审，包括递交周年申报表和续期商业登记证。"
    },
    {
        question: "香港公司做账审计有什么要求？",
        answer: "香港公司需要每年做账并进行审计，无论是否有业务发生。"
    },
    {
        question: "香港公司的税务申报如何进行？",
        answer: "香港公司需要每年向税务局申报利得税，首次报税可以豁免审计。"
    },
    {
        question: "香港公司可以在中国大陆经营吗？",
        answer: "香港公司不能直接在大陆经营，如需在大陆经营需要设立代表处或投资设立外商投资企业。"
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