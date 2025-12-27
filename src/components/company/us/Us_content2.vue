<template>
    <div class="us_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    美国公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/us/US-2.jpg" alt="">
                    <div class="text">
                        <P>美国是全球最大的经济体，拥有完善的法律体系和高度发达的资本市场。</P>
                        <P>作为世界科技创新中心，在互联网、人工智能、生物技术等领域引领全球发展。</P>
                        <P>凭借开放的商业环境、庞大的消费市场和先进的基础设施，成为全球企业的重要投资目的地。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    美国公司注册优势
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage" :ref="el => { if (el) advantageRefs[index] = el }">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text">
                            {{ item.adv }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="content3">
                <div class="title">
                    美国公司注册条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">一位以上的公司董事及股东（无国籍限制）</div>
                        <div class="condition-item">有效的身份证明文件（身份证或护照）</div>
                        <div class="condition-item">公司名称（提供多个备选）</div>
                        <div class="condition-item">不同的州，注册资本不一样，一般为50,000美金</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">公司名称无限制，只要查册没有重名即可</div>
                        <div class="condition-item">注册资金无须验资及到位</div>
                        <div class="condition-item">可用公司名称买卖物业</div>
                        <div class="condition-item">公司名称限制少，可加"国际"、"集团"等字眼</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    美国公司注册流程
                </div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage" :ref="el => { if (el) registrationProcessRefs[index] = el }">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
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
                            <img :src="item.imgSrc" :alt="item.title">
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
                    美国公司注册常见问题
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
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css/company/us/Us_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-agreement',
        title: '第一步 签署委托书',
        description: '客户签署委托书及相关协议文件'
    },
    {
        iconId: '#icon-secure-payment-line',
        title: '第二步 交付费用',
        description: '支付相关注册费用及服务费用'
    },
    {
        iconId: '#icon-government-line',
        title: '第三步 政府办理',
        description: '到政府部门办理相关注册手续'
    },
    {
        iconId: '#icon-file-success',
        title: '第四步 领取资料',
        description: '25个工作日内领取全套公司资料'
    },
    {
        iconId: '#icon-bank-line',
        title: '第五步 后续服务',
        description: '提供银行开户、税务申报等后续服务'
    },
    {
        iconId: '#icon-message-success',
        title: '第六步 完成注册',
        description: '公司注册成功，正式运营'
    }
]

const advantage = [
    {
        iconId: '#icon-world',
        adv: '国际信誉度及认同度高，可于全球银行开设公司账户'
    },
    {
        iconId: '#icon-protect',
        adv: '国际法律地位高，受美国政府保护，认受性极好'
    },
    {
        iconId: '#icon-award-line',
        adv: '打造全球知名品牌'
    },
    {
        iconId: '#icon-natural-mode',
        adv: '注册资金无须验资及到位'
    },
    {
        iconId: '#icon-city',
        adv: '可用公司名称买卖物业'
    },
    {
        iconId: '#icon-certificate',
        adv: '公司名称限制少，可加"国际"、"集团"等字眼'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '快速通道服务',
        description: '外国投资者注册企业可以享受快速通道服务，通过无纸化电子方式提交申请，仅需二周时间即可完成注册。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '经验丰富，大量成功案例',
        description: '十洲通以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '提供专业增值服务',
        description: '十洲通在境外拥有自己的团队，也与境外的各大银行、事务所、税务机构建立了良好的合作关系，能协助企业客户提供综合全面的服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '专业专属商务对接和支持',
        description: '我们的顾问、咨询师、会计师等多数毕业于国内外著名大学，为每个客户建立计划小组，负责一对一的咨询服务。'
    }
]

const faqs = ref([
    {
        question: "美国注册公司经营范围有什么限制？",
        answer: "美国注册公司对于公司的经营行业及经营项目并没有多大的限制，所以所注册的美国公司可以经营任何合法的商务业务。"
    },
    {
        question: "在给美国起名时需要注意什么？",
        answer: "在美国注册公司时对公司的名称是没有任何限制的，因此只要公司名称没有被其公司注册就可以使用，当然可在公司名称后面冠以'CORP'、'LTD'、'INC'或'CO'、'LLC'等字样。"
    },
    {
        question: "美国公司注册成功后如何证明公司的存在和合法？",
        answer: "公司的注册证书是公司的有效法律文件，也可要求我司提供当地代理出具的INCUMBENCY证书来确认公司合法存在，另外公司资料是可以在州政府的官方网站上查询的到的。"
    },
    {
        question: "美国公司注册资本需要到位吗？",
        answer: "不同的州，注册资本不一样，一般为50,000美金，不需要验资及到位。"
    },
    {
        question: "美国公司注册需要多长时间？",
        answer: "通常情况下，注册美国公司需要25个工作日左右。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const advantageRefs = ref([])
const registrationProcessRefs = ref([])

// 添加过渡动画
onMounted(async () => {
    await nextTick()
    
    // content1 动画
    gsap.from('.content1 .title', {
        scrollTrigger: {
            trigger: '.content1 .title',
            start: 'top 90%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    gsap.from('.content1 .intro', {
        scrollTrigger: {
            trigger: '.content1 .intro',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    })

    // content2 动画 - 参照其他页面统一动画效果
    gsap.from('.content2 .title', {
        scrollTrigger: {
            trigger: '.content2 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    // 为每个优势项添加动画 - 参照其他页面统一动画效果
    advantageRefs.value.forEach((el, index) => {
        gsap.fromTo(el,
            { 
                opacity: 0, 
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content2 .intro',
                    start: 'top 80%'
                }
            }
        )
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

    // content4 动画 - 参照其他页面统一动画效果
    gsap.from('.content4 .title', {
        scrollTrigger: {
            trigger: '.content4 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    // 为每个注册流程项添加动画 - 参照其他页面统一动画效果
    registrationProcessRefs.value.forEach((el, index) => {
        gsap.fromTo(el,
            { 
                opacity: 0, 
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content4 .intro',
                    start: 'top 80%'
                }
            }
        )
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