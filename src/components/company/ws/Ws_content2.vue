<template>
    <div class="ws_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    萨摩亚公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/ws/WS-2.jpg" alt="">
                    <div class="text">
                        <P>一九八七年制定的信托公司法奠定了日后服务离岸客户的信托公司的领牌及规管细则。其它法规包括一九八七年制定的国际公司法、国际信托基金法、离岸银行法、以及在一九八八年制定的国际保险法。</P>
                        <P>萨摩亚国际公司及信托基金是无需缴付任何当地税项，这包括印花税、资产增值税及应课税。此外，萨摩亚亦不高外汇管制及奉行严密的私隐保护。</P>
                        <P>一九八七年制定的国际公司法是主要的企业法规，它订明有关萨摩亚国际公司的注册规则、现有公司迁入萨摩亚的手续、以及美式年期有限公司的注册细则等。法例容许相当程度的弹性及机密性。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    萨摩亚公司注册优势
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
                    萨摩亚公司注册条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">股东：一位或以上年满18周岁自然人或法人（无国籍限制）</div>
                        <div class="condition-item">董事：一位或以上年满18周岁自然人或法人（无国籍限制）</div>
                        <div class="condition-item">证件：填写《注册公司委托书》，2个有效证件影印件</div>
                        <div class="condition-item">注册资本：标准注册资本100万美元，可任何货币表达</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">公司名称：必须包括Limited等字样，可注册中文名称</div>
                        <div class="condition-item">公司秘书：每家公司都要委任一名公司秘书</div>
                        <div class="condition-item">注册地址：我司提供</div>
                        <div class="condition-item">公司章程</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    萨摩亚公司注册流程
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
                    注册萨摩亚公司常见问题
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
import '@/css/company/ws/Ws_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '第一步 签署委托书',
        description: '客户签署委托书，确认注册意向。'
    },
    {
        img: '',
        title: '第二步 签署协议',
        description: '双方签署服务协议，明确权利义务。'
    },
    {
        img: '',
        title: '第三步 交付定金',
        description: '支付注册费用的一半作为定金。'
    },
    {
        img: '',
        title: '第四步 办理手续',
        description: '我们代为向萨摩亚政府部门提交注册申请。'
    },
    {
        img: '',
        title: '第五步 完成注册',
        description: '注册完成后支付尾款并领取全套公司文件。'
    }
]

const advantage = [
    {
        img: '',
        adv: '政治、经济和贸易环境非常稳定'
    },
    {
        img: '',
        adv: '良好的金融法律设施，方便建立各种金融机构'
    },
    {
        img: '',
        adv: '一个董事即可，可以以企业出任董事'
    },
    {
        img: '',
        adv: '政府保护股东利益，不需要公布受益人身份'
    },
    {
        img: '',
        adv: '政府为企业提供私隐保护，董事资料绝对保密'
    },
    {
        img: '',
        adv: '在世界各地均可开立银行账户'
    },
    {
        img: '',
        adv: '注册资金无须到位'
    },
    {
        img: '',
        adv: '不需要缴纳任何直接税或其他税项'
    },
    {
        img: '',
        adv: '不需要提交财务报表'
    }
]

const advantages = [
    {
        img: '',
        title: '快速通道服务',
        description: '外国投资者注册企业可以享受快速通道服务，通过无纸化电子方式提交申请，仅需二周时间即可完成注册。'
    },
    {
        img: '',
        title: '经验丰富',
        description: '昶嘉捷以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        img: '',
        title: '专业增值服务',
        description: '昶嘉捷在境外拥有自己的团队，也与境外的各大银行、事务所、税务机构建立了良好的合作关系。'
    },
    {
        img: '',
        title: '专业专属商务对接',
        description: '昶嘉捷的顾问、咨询师、会计师等多数毕业于国内外著名大学，对于每个客户都会建立计划小组。'
    }
]

const faqs = ref([
    {
        question: "在萨摩亚成立公司，需要多少个股东？",
        answer: "在萨摩亚成立公司，一个股东就可以。中国内地人士只要提供有效护照即可。"
    },
    {
        question: "在萨摩亚是否可以注册中文公司名称？",
        answer: "现在该岛政府已经允许注册中文名称了。中文名称的注册费用是在原注册费用上增加1000人民币。"
    },
    {
        question: "什么人士才可以到萨摩亚开立公司？",
        answer: "一位以上年满18岁股东（有护照的内地公民或海外人士）"
    },
    {
        question: "萨摩亚开立的公司可以到全世界任何地方开户吗？",
        answer: "可以。但银行账号必须在成立公司后才能申请。开户一般要求董事亲临银行办理。"
    },
    {
        question: "萨摩亚公司每年的维护费用是多少？",
        answer: "每年维持费用6500RMB，此费用随政府的调整而浮动。"
    },
    {
        question: "如果我们想注册一家萨摩亚公司，应该如何办理？",
        answer: "您只要填一份委托书和传真有效证件的影印件给我们就可以了，剩下的工作我们会主动联系您。"
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