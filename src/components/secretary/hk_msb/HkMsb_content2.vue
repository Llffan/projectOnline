<template>
    <div class="msb_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    香港金钱服务经营者牌照(MSO)
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK-2.jpg" alt="">
                    <div class="text">
                        <P>香港金钱服务经营者牌照（Money Service Operator License, 简称MSO牌照）是由香港海关总署颁发的金融牌照。任何在香港经营货币兑换服务或汇款服务的个人或企业，都必须向海关关长申领该牌照。</P>
                        <P>MSO牌照是合规进行跨境支付、换汇业务的必要通行证。随着全球监管趋严，持有该牌照能显著提升企业的公信力，是开展国际金融业务的基础。</P>
                        <P>我们提供从公司注册、场地租赁、合规主任委任到牌照申请及后续维护的一站式服务，助您顺利获取牌照，合规开展业务。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    MSO牌照优势
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
                    申请条件与要求
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">香港公司：必须拥有一家香港注册公司。</div>
                        <div class="condition-item">适当人选：董事、股东及最终受益人必须通过"适当人选"测试（无犯罪记录、未破产）。</div>
                        <div class="condition-item">合规主任：需委任一名合规主任及一名洗钱报告主任（可由同一人兼任）。</div>
                        <div class="condition-item">注册地址：必须在香港有固定的营业地址（不仅是通讯地址），海关会进行实地审查。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">面试：海关会安排申请人进行面试，核实业务计划及反洗钱措施。</div>
                        <div class="condition-item">注册资本：虽无明确强制要求，但建议实缴50万港币以上以证明实力。</div>
                        <div class="condition-item">反洗钱制度：必须制定完善的反洗钱及反恐融资政策。</div>
                        <div class="condition-item">银行账户：建议开立香港公司银行账户以配合业务运营。</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    牌照申请流程
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
                    我们的服务优势
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
                    MSO牌照常见问题
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
import '@/css/secretary/hk_msb/HkMsb_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: '前期评估',
        description: '审核客户资质，评估申请可行性，提供整改建议。'
    },
    {
        iconId: '#icon-notes', 
        title: '资料准备',
        description: '协助准备商业计划书、反洗钱政策及各类申请表格。'
    },
    {
        iconId: '#icon-audit', 
        title: '递交申请',
        description: '向香港海关递交正式申请文件并缴纳政府费用。'
    },
    {
        iconId: '#icon-government-line', 
        title: '海关面试',
        description: '辅导客户准备海关面试，陪同客户出席面试回答问题。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '实地审查',
        description: '协助应对海关官员对经营场所的实地审查。'
    },
    {
        iconId: '#icon-bank-line', 
        title: '成功获批',
        description: '海关审批通过，领取金钱服务经营者牌照。'
    }
]

const advantage = [
    {
        iconId: '#icon-award-line', 
        adv: '合法合规：合法开展货币兑换及跨境汇款业务，受法律保护。'
    },
    {
        iconId: '#icon-city', 
        adv: '国际认可：香港金融牌照含金量高，获国际市场广泛认可。'
    },
    {
        iconId: '#icon-trophy', 
        adv: '业务拓展：可与银行及支付机构合作，拓展跨境支付渠道。'
    },
    {
        iconId: '#icon-finance', 
        adv: '信任背书：增强客户信任度，提升企业品牌形象及市场竞争力。'
    },
    {
        iconId: '#icon-airplane', 
        adv: '上市加分：合规的金融业务有助于未来企业融资或上市。'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        adv: '账户优势：更易申请并维护银行账户，避免账户被关停风险。'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '高通过率保障',
        description: '拥有丰富的牌照申请经验，熟悉海关审核标准，确保高通过率。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '专业文书撰写',
        description: '专业团队代写商业计划书及AML/CFT政策，确保符合海关要求。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '全程面试辅导',
        description: '提供一对一面试模拟辅导，预测面试问题，消除紧张感。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '后续合规维护',
        description: '提供牌照续期、定期合规报告及持续的法律咨询服务。'
    }
]

const faqs = ref([
    {
        question: "什么是金钱服务（Money Service）？",
        answer: "金钱服务是指货币兑换服务（在香港经营货币兑换业务）或汇款服务（在香港经营将金钱汇往香港以外地方的具体业务）。"
    },
    {
        question: "申请MSO牌照需要多长时间？",
        answer: "一般情况下，从递交申请到海关审批通过，大约需要4-6个月的时间。具体时间取决于申请资料的准备情况及海关的排期。"
    },
    {
        question: "没有香港办公室可以申请吗？",
        answer: "不可以。海关规定持牌人必须在香港拥有固定的营业地址，并且需要通过海关的实地审查。我们可协助客户租赁合规的办公场所。"
    },
    {
        question: "MSO牌照的有效期是多久？",
        answer: "MSO牌照的有效期通常为两年。持牌人须在牌照届满前45天或海关指定的其他期间内申请续期。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const advantageRefs = ref([])
const registrationProcessRefs = ref([])

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

    // content2 动画
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

    // 为每个优势项添加动画
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

    // content4 动画
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

    // 为每个注册流程项添加动画
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