<template>
    <div class="ky_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    开曼公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/ky/KY-2.jpg" alt="">
                    <div class="text">
                        <P>开曼群岛是英国在西印度群岛的海外属地，由三大岛屿组成，是世界第4大离岸金融中心。</P>
                        <P>开曼被誉为真正的税务避风港，公司对个人、公司和信托行业不征收所得税、利润税或财产税。</P>
                        <P>当地政府提供20年有效的免税证书，确保公司无需缴税的地位，仅需缴纳进口税、工商登记税和印花税等简单税种。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    开曼公司注册优势
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
                        <div class="condition-item">注册授权资本：最低注册资本为 50,000 美金。</div>
                        <div class="condition-item">董事要求：最少1名董事，无国籍限制的自然人或法人均可。</div>
                        <div class="condition-item">股东要求：最少1名股东，无国籍限制的自然人或法人均可。</div>
                        <div class="condition-item">董事资料：必须向注册处披露，但不公开作公众查册。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">股东资料：只需存档于注册代理人，高度保密。</div>
                        <div class="condition-item">注册地址：公司注册地址必须在开曼群岛。</div>
                        <div class="condition-item">注册代理人：须委任开曼公司或个人（有居留身份）担任。</div>
                        <div class="condition-item">所需资料：需提供专业人士（会计师或律师）出示的介绍信。</div>
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
                    注册开曼公司常见问题
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
import '@/css/company/ky/Ky_content2.css' 

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-message-search',
        title: '提供公司名称并进行核名',
        description: '核查公司名称是否可用。'
    },
    {
        iconId: '#icon-agreement',
        title: '签署注册协议并准备文件',
        description: '与我司签署注册协议，同时准备股东、董事及专业人士介绍信等所需文件。'
    },
    {
        iconId: '#icon-notes',
        title: '整理并提交全套注册文件',
        description: '由注册代理人将文件整理并提交至开曼当地。'
    },
    {
        iconId: '#icon-government-line',
        title: '递交当局审核注册',
        description: '等待开曼群岛当局审核并注册。'
    },
    {
        iconId: '#icon-file-success',
        title: '完成注册获得全套公司文件',
        description: '注册完成，获得注册证书、章程、名册等全套公司文件，时间约3-4周。'
    },
    {
        iconId: '#icon-certificate',
        title: '申请免税证书',
        description: '免除公司可申请一个20年有效的免除证书，确保无须缴税地位。'
    }
]

const advantage = [
    {
        iconId: '#icon-sun',
        adv: '合法免税：当地政府保证20年豁免任何税收，是真正的税务避风港。'
    },
    {
        iconId: '#icon-bank-line',
        adv: '国际金融地位高：可在美国、香港、新加坡等主要证券交易市场挂牌买卖。'
    },
    {
        iconId: '#icon-world',
        adv: '经营范围广泛：公司成立后，可在世界任何国家从事任何合法的商业活动。'
    },
    {
        iconId: '#icon-finance',
        adv: '资产管理灵活：可用公司名义开设银行账户、设立信托、押汇等。'
    },
    {
        iconId: '#icon-balance-two',
        adv: '架构灵活：可拥有其他公司的股份、房地产及其他动产。'
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
        question: "注册开曼公司有哪些税呢？",
        answer: "开曼群岛内税种只有进口税、印花税、工商登记税、旅游者税等几个简单的税种。几十年来没有开征过个人所得税、公司所得税、资本利得税、不动产税、遗产税等直接税。"
    },
    {
        question: "注册开曼公司要多久？",
        answer: "全部完结大概在3-4周（约15-20个工作日）。"
    },
    {
        question: "一个人可以申请注册开曼公司吗？",
        answer: "一个人即可注册，取名自由；开曼公司注册资金无上限，无需交纳厘印税；经营范围没有限制（但不包括数字货币、虚拟货币等），无外汇管制。"
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