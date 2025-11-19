<template>
    <div class="sc_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    塞舌尔公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/sc/SC-2.jpg" alt="">
                    <div class="text">
                        <P>塞舌尔是位于印度洋的群岛国家，以其优美的自然环境和稳定的政局而闻名，是非洲地区重要的离岸金融中心之一。</P>
                        <P>塞舌尔拥有健全的法律体系和优越的税收政策，为全球投资者提供了良好的营商环境和投资机会。</P>
                        <P>塞舌尔国际商业公司（IBC）享有税收豁免、资产保护、隐私保护等优势，是进行国际贸易、投资控股、财富管理的理想选择。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    塞舌尔公司注册优势
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
                        <div class="condition-item">公司章程</div>
                        <div class="condition-item">公司名称（提供多个备选）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">董事和股东身份证明文件</div>
                        <div class="condition-item">注册资本</div>
                        <div class="condition-item">公司秘书（我司提供）</div>
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
                    注册塞舌尔公司常见问题
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
import '@/css/company/sc/Sc_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '开始公司核名',
        description: '核名查询，核验名称是否可用。'
    },
    {
        img: '',
        title: '准备注册资料',
        description: '准备法人/股东身份证件、公司章程等相关材料。'
    },
    {
        img: '',
        title: '选择注册地址',
        description: '确定可注册公司用的地址，我司可提供。'
    },
    {
        img: '',
        title: '提交申请资料',
        description: '向塞舌尔相关部门提交完整的注册申请资料。'
    },
    {
        img: '',
        title: '领取营业执照',
        description: '公司注册顺利完成，领取营业执照等相关证件。'
    },
    {
        img: '',
        title: '额外赠送服务',
        description: '公司印章、公司章程、公司证书。'
    }
]

const advantage = [
    {
        img: '',
        adv: '税收优惠，塞舌尔公司免征所得税、资本利得税等'
    },
    {
        img: '',
        adv: '高度保密性，无需公开股东和董事信息'
    },
    {
        img: '',
        adv: '无外汇管制，资金可自由流动'
    },
    {
        img: '',
        adv: '注册简便，维护成本低'
    },
    {
        img: '',
        adv: '法律体系完善，保护投资者权益'
    },
    {
        img: '',
        adv: '全球认可度高，便于开设离岸账户'
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
        question: "注册塞舌尔公司需要多少资本？",
        answer: "塞舌尔公司没有最低注册资本要求，一般建议注册资本为50000美元，无需验资。"
    },
    {
        question: "注册塞舌尔公司需要多长时间？",
        answer: "通常情况下，注册塞舌尔公司需要3-5个工作日。"
    },
    {
        question: "塞舌尔公司需要年审吗？",
        answer: "是的，塞舌尔公司每年都需要进行年审和提交财务报表。"
    },
    {
        question: "塞舌尔公司的税务申报如何进行？",
        answer: "塞舌尔公司无需在当地缴纳税款，但需按时提交年度申报表。"
    },
    {
        question: "外国人可以在塞舌尔注册公司吗？",
        answer: "可以，外国人可以在塞舌尔注册公司，且无任何限制。"
    },
    {
        question: "塞舌尔公司可以在中国大陆经营吗？",
        answer: "塞舌尔公司不能直接在大陆经营，如需在大陆经营需要设立代表处或投资设立外商投资企业。"
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