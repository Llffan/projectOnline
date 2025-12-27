<template>
    <div class="mh_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    马绍尔公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/mh/MH-2.jpg" alt="">
                    <div class="text">
                        <P>马绍尔是著名的离岸注册地之一，尤其受到想进行离岸操作的外贸企业青睐，近年来声名鹊起。</P>
                        <P>马绍尔公司若非由原居民成立，可合法免除一切税项，并享有高度保密性。</P>
                        <P>公司管理模式灵活，可选择英式（常务董事及公司秘书）或美式（董事及行政人员）管理，且允许发行不记名股票。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    马绍尔公司注册优势
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
                        <div class="condition-item">股东：一位或以上股东，无国籍要求。</div>
                        <div class="condition-item">董事：无最少董事人数规定，法人亦可出任董事。</div>
                        <div class="condition-item">公司名称：名称可加上标准词尾，可免费预留半年。</div>
                        <div class="condition-item">注册资本：最低50,000美金；标准股份500份无票面价值。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">公司架构用途：确定公司架构、用途及股份分配比例。</div>
                        <div class="condition-item">注册地址：确定公司注册地址（地址可代为提供）。</div>
                        <div class="condition-item">股东证件：提供股东身份证或护照影印本。</div>
                        <div class="condition-item">签字样本：提供股东中英文签字样本。</div>
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
                    注册马绍尔公司常见问题
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
// 保持导入路径不变
import '@/css/company/mh/Mh_content2.css' 

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-message-search',
        title: '公司名称查册与预留',
        description: '提交最满意名称，免费核名，公司名称可获免费预留半年。'
    },
    {
        iconId: '#icon-agreement',
        title: '注册条件评估及合同签署',
        description: '确定公司架构、股本、董事、地址，并按双方协商签订代理协议合同。'
    },
    {
        iconId: '#icon-notes',
        title: '准备申报资料',
        description: '准备股东证件、签字样本、股份分配比例等，安排所有股东及董事签署全套文件。'
    },
    {
        iconId: '#icon-government-line',
        title: '递交申请与审核',
        description: '马绍尔主管机关审核，我司全程跟进政府办理注册手续，并及时反馈。'
    },
    {
        iconId: '#icon-message-success',
        title: '回签文件及注册完成',
        description: '扫描所得公司文件进行确认，公司注册完毕，时间约需15个工作日左右。'
    },
    {
        iconId: '#icon-file-success',
        title: '支付余款与资料领取',
        description: '客户支付余款，领取全套注册成功所得资料（如注册证书、章程、印章等）。'
    }
]

const advantage = [
    {
        iconId: '#icon-sun',
        adv: '合法免税：非原居民成立的公司可合法免除一切税项。'
    },
    {
        iconId: '#icon-protection',
        adv: '高度保密：股东身份、董事名册、收益等资料高度保密，公众不能查阅。'
    },
    {
        iconId: '#icon-natural-mode',
        adv: '公司运作方便：无需做账审计、无需报税、无需缴纳当地税款。'
    },
    {
        iconId: '#icon-positive-dynamics',
        adv: '注册简单快捷：注册时间短，注册资料简单，手续便捷，下证快。'
    },
    {
        iconId: '#icon-certificate',
        adv: '中文名称有效：拥有真正有效的中文名称，正式归档，名字不会重复。'
    },
    {
        iconId: '#icon-balance-two',
        adv: '国际声誉良好：法体制仿效英美法系，允许英或美式管理，法律支持完善。'
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
        description: '十洲通在境外拥有自己的团队，也与境外的各大银行、事务所、税务机构建立了良好的合作关系，除了提供注册服务，对于后续境外主体财务、税务、法律等都能协助企业客户提供综合全面的服务，做到"在外有十洲通，更快捷"。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '专业专属商务对接和支持',
        description: '我们的顾问、咨询师、会计师等多数毕业于国内外著名大学，对于每个客户都会建立计划小组，负责客户一对一的咨询、案子进度和客户协调计划等服务工作，服务过程积极听取客户意见，建立客户意见档案和增值服务平台，旨在为客户提供专业和安全保障服务。'
    }
]

const faqs = ref([
    {
        question: "马绍尔船舶注册有优势吗？",
        answer: "马绍尔群岛的船舶注计划发展迅速，可注册成油轮、客轮、散装船、集装箱船等。船舶可由马绍尔群岛的公司、合夥企业或认可的外国海事法团拥有。"
    },
    {
        question: "马绍尔开户如何办理？",
        answer: "客户申请开设银行帐户时，如属新公司，银行会要求出示Certificate of Incumbency（董事在职证明）以及经由会计师或律师行签证的注册文件核证副本，我司可代办，需付相应费用。"
    },
    {
        question: "注册马绍尔公司要不要验资？",
        answer: "在马绍尔注册公司资金无需验资及到位，亦没有最低资本要求，而且注册后不需将资金打到国外公司，每年也不需要验资。"
    },
    {
        question: "马绍尔群岛豁免税收是怎么样的？",
        answer: "由非原居民成立的马绍尔公司，可合法免除一切税收，即不必就其任何收入或资产交纳任何税项。"
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