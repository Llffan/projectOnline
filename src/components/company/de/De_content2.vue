<template>
    <div class="de_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    德国公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/de/DE-2.jpg" alt="">
                    <div class="text">
                        <P>德国是欧洲最大经济体，也是世界第四大经济体，拥有强大的工业基础和先进的技术。德国以其高质量的产品和服务、稳定的经济环境以及良好的商业法规而闻名。</P>
                        <P>作为欧盟核心成员国，德国为外国投资者提供了开放的投资环境和有利的税收政策。德国的有限责任公司（GmbH）是最受欢迎的企业类型之一，适合各种规模的企业。</P>
                        <P>德国地处欧洲中心，是连接东西欧的重要枢纽，为企业拓展欧洲市场提供了绝佳的地理位置优势。许多跨国公司选择在德国设立总部或分支机构。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    德国公司注册优势
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
                        <div class="condition-item">注册资本至少25,000欧元</div>
                        <div class="condition-item">公司章程</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">董事和股东身份证明文件</div>
                        <div class="condition-item">公司名称（提供多个备选）</div>
                        <div class="condition-item">银行资信证明</div>
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
                    注册德国公司常见问题
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
import '@/css/company/de/De_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '公司名称核查',
        description: '核查拟注册公司名称的可用性。'
    },
    {
        img: '',
        title: '准备注册文件',
        description: '准备公司章程、股东董事信息等必要文件。'
    },
    {
        img: '',
        title: '公证认证',
        description: '对相关文件进行公证认证。'
    },
    {
        img: '',
        title: '提交注册申请',
        description: '向当地法院商业登记处提交注册申请。'
    },
    {
        img: '',
        title: '开设银行账户',
        description: '完成注册资本注入并开设公司银行账户。'
    },
    {
        img: '',
        title: '办理税号',
        description: '申请税号、增值税号等相关税务登记。'
    }
]

const advantage = [
    {
        img: '',
        adv: '欧洲最大经济体，市场潜力巨大'
    },
    {
        img: '',
        adv: '完善的法律体系，保护投资者权益'
    },
    {
        img: '',
        adv: '地理位置优越，辐射整个欧洲市场'
    },
    {
        img: '',
        adv: '高素质人才资源丰富，科研实力强'
    },
    {
        img: '',
        adv: '税收制度合理，优惠政策多'
    },
    {
        img: '',
        adv: '基础设施完善，交通便利'
    }
]

const advantages = [
    {
        img: '',
        title: '专业团队',
        description: '拥有精通德国公司法的专业顾问团队，提供一站式服务解决方案'
    },
    {
        img: '',
        title: '高效办理',
        description: '熟悉注册流程，快速响应，大大缩短办理时间'
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
        question: "注册德国公司需要多少注册资本？",
        answer: "德国有限责任公司（GmbH）的最低注册资本为25,000欧元，其中至少50%需要在注册前缴纳。"
    },
    {
        question: "注册德国公司需要多长时间？",
        answer: "通常情况下，注册德国公司需要4-8周时间，具体取决于文件准备情况和审批进度。"
    },
    {
        question: "德国公司需要年审吗？",
        answer: "德国公司需要每年进行财务报表审计并向税务局申报，但没有类似其他国家的年审制度。"
    },
    {
        question: "德国公司的税务申报如何进行？",
        answer: "德国公司需要按月申报增值税，按年申报所得税和贸易税。"
    },
    {
        question: "德国公司可以在中国大陆经营吗？",
        answer: "德国公司不能直接在大陆经营，如需在大陆经营需要设立代表处或投资设立外商投资企业。"
    },
    {
        question: "注册德国公司需要亲自到场吗？",
        answer: "不需要，可以通过授权委托书委托代理机构办理所有手续。"
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