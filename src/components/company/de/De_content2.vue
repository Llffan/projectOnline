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
                        <P>德国是欧洲四大经济体之一，欧盟经济总量最高的国家，也是世界第三大出口国和第四大经济大国。</P>
                        <P>以汽车和精密机床为代表的高端制造业是德国的重要象征。德国是世界贸易大国，同230多个国家和地区保持贸易关系。</P>
                        <P>德国出口素以质量高、服务周到、交货准时而享誉世界，为注册成立德国公司提供了强大的品牌背书。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    德国公司注册优势
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
                    条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">公司名称：必须以"有限公司"结尾（如GmbH），禁止使用"银行"等受限词汇。</div>
                        <div class="condition-item">董事股东：至少1人股东，需年满18周岁，无国籍限制。</div>
                        <div class="condition-item">股东资料：提供至少1人股东的护照影印本。</div>
                        <div class="condition-item">注册地址：在德国当地需有实际存在的办公场地。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">注册资本：GmbH最低注册资本为€25,000。</div>
                        <div class="condition-item">验资要求：实缴只需存入€12,500（必须由股东个人账户汇出）。</div>
                        <div class="condition-item">经营范围：经营范围原则上没有太大的限制，企业可经营任何合法业务。</div>
                        <div class="condition-item">税务优势：德国公司税赋低于中国公司，可有效节省成本提高利润。</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    公司注册流程
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
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css/company/de/De_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-message-search',
        title: '公司核名与资料提交',
        description: '提供备选名称进行核名，提交董事股东护照、地址证明。'
    },
    {
        iconId: '#icon-agreement',
        title: '签署协议及文件',
        description: '签署德国委托协议，支付费用，并签署设立公司申请文件。'
    },
    {
        iconId: '#icon-bank-transfer',
        title: '银行开户与实缴',
        description: '至银行办理开户；实缴验资款项€12,500。'
    },
    {
        iconId: '#icon-government-line',
        title: '递交政府申请',
        description: '实缴完成后，递交政府办理登记手续。'
    },
    {
        iconId: '#icon-file-success',
        title: '领取执照',
        description: '约2-3周获得营业执照证明，可进行商业活动。'
    },
    {
        iconId: '#icon-audit',
        title: '获得税号',
        description: '后续约2-4周可获得VAT税号。'
    }
]

const advantage = [
    {
        iconId: '#icon-award-line',
        adv: '打造德国品牌，提升国际形象，国际法律地位高，受欧洲联盟保护。'
    },
    {
        iconId: '#icon-world',
        adv: '利于发展跨国贸易，买卖物业、资金出入境自由，可信度高。'
    },
    {
        iconId: '#icon-bank-line',
        adv: '德国公司利于开立境外账号，非德国公民可自由在境内外/香港开立银行账户。'
    },
    {
        iconId: '#icon-finance',
        adv: '可节税，使税收能保持在最低水准，有效节省成本，提高利润。'
    },
    {
        iconId: '#icon-airplane',
        adv: '利于商务签证及获得德国绿卡/永居身份（需满足特定投资条件）。'
    },
    {
        iconId: '#icon-diamond',
        adv: '高端制造业象征，德国出口产品素以质量高、服务周到享誉世界。'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '快速通道服务',
        description: '外国投资者注册企业可以享受快速通道服务，并可以通过无纸化电子方式提交申请，仅需二周时间即可完成注册。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '经验丰富，大量成功案例',
        description: '十洲通以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '提供专业增值服务',
        description: '十洲通在境外拥有自己的团队，协助客户提供综合全面的财务、税务、法律等服务，做到"在外有十洲通，更快捷"。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '专业专属商务对接和支持',
        description: '顾问、咨询师、会计师等建立计划小组，负责客户一对一的咨询、案子进度和客户协调计划等服务工作。'
    }
]

const faqs = ref([
    {
        question: "德国公司注册后有什么注意事项？",
        answer: "德国公司注册后，客户不直接管理的情况下，挂名经理、财务服务、挂名地址及其他管理费用为必选服务。这些服务都是公司良好存在的必须条件。"
    },
    {
        question: "注册德国公司需要什么资料？",
        answer: "注册公司需提供公司名称和有效证件（如护照、地址证明），我司可以代为办理。"
    },
    {
        question: "德国公司的经营范围有要求吗？",
        answer: "德国公司经营项目限制非常少。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const advantageRefs = ref([])
const registrationProcessRefs = ref([])

// 保持动画脚本不变
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