<template>
    <div class="vn_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    越南公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/vn/VN-2.jpg" alt="">
                    <div class="text">
                        <P>越南是一个快速发展的发展中国家，经济增长稳定，投资环境日益改善。凭借在亚洲-太平洋地区的战略地理位置，越南正成为外国投资者的热门目的地。</P>
                        <P>作为东南亚最大的经济体之一，越南拥有年轻的人口、丰富的劳动力资源和充满潜力的消费市场。</P>
                        <P>自从越南加入世界贸易组织后，经济飞速增长，为外国投资者提供了无数的机会和挑战。越南统计总局透露，今年11月份越南新设企业数量达近1.23万家，同比增长近5.4%。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    越南公司注册优势
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
                    越南公司注册条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">注册资本：在取得公司注册证书90天内验资到位</div>
                        <div class="condition-item">注册地址：可由我方协助当地寻找</div>
                        <div class="condition-item">营业范围</div>
                        <div class="condition-item">法人名单：1位即可</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">董事名单：无国籍限制，外籍人士需在当地取得工作证及暂住证</div>
                        <div class="condition-item">股东名单、股份金额及股东财务证明：最少1位股东，股份金额无上限</div>
                        <div class="condition-item">所有股东、董事及法人护照扫描件/地址证明</div>
                        <div class="condition-item">股东身份证明及财务证明需国内公证及越南驻中国使领馆认证</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    越南公司注册流程
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
                    越南公司注册常见问题
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
import '@/css/company/vn/Vn_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-notes',
        title: '第一步 公司设立及文件准备',
        description: '设立境外控股公司并收集相关文件'
    },
    {
        iconId: '#icon-audit',
        title: '第二步 文件翻译及公证',
        description: '公司文件经越语翻译及大使馆公证'
    },
    {
        iconId: '#icon-message-search',
        title: '第三步 名称预查及申请书准备',
        description: '进行公司名称预查并准备公司章程及申请书'
    },
    {
        iconId: '#icon-government-line',
        title: '第四步 审批及许可颁发',
        description: '提交审批机关审批并获得投资许可证'
    },
    {
        iconId: '#icon-message-success',
        title: '第五步 公告发布及登记',
        description: '报刊登载公告并完成董事会议、公安登记等'
    },
    {
        iconId: '#icon-bank-line',
        title: '第六步 银行开户及税务登记',
        description: '完成银行开户、税务登记、海关编码登记等'
    }
]

const advantage = [
    {
        iconId: '#icon-coconut-tree',
        adv: '越南自然资源丰富，地理位置优越'
    },
    {
        iconId: '#icon-peoples',
        adv: '越南公司注册可享用潜力较大的人力资源'
    },
    {
        iconId: '#icon-award-line',
        adv: '具备发展对外经济、吸收外资的有利条件'
    },
    {
        iconId: '#icon-city',
        adv: '越南已具备了一定的物质基础'
    },
    {
        iconId: '#icon-degree-hat',
        adv: '积累了丰富的发展经济经验'
    },
    {
        iconId: '#icon-natural-mode',
        adv: '改革中阻力相对较少'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '快速通道服务',
        description: '外国投资者可享受快速通道服务，通过无纸化电子方式提交申请，仅需二周即可完成注册。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '经验丰富，大量成功案例',
        description: '十洲通专注中小企业发展，为大量企业提供专业的咨询服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '提供专业增值服务',
        description: '十洲通在境外拥有自己的团队，与各大银行、事务所、税务机构建立了良好合作关系，能协助客户提供综合全面的服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '专业专属商务对接和支持',
        description: '我们的顾问、咨询师、会计师多数毕业于国内外著名大学，为每个客户建立计划小组，负责一对一咨询服务。'
    }
]

const faqs = ref([
    {
        question: "越南公司注册资本需要到位吗？",
        answer: "注册资本10,000~300,000 美金 （ 每个行业不一样），在取得公司注册证书90天内验资到位。"
    },
    {
        question: "越南注册公司公证及认证的材料，应在哪个部门办理？",
        answer: "关于公证：如以外国公司投资，应前往外国公司注册地的公证处进行公证。如以个人投资，应前往户口所在地的公证处进行公证。关于认证：拿到公证书后，将公证书递交至越南驻所在国之外交单位进行认证。注：如外籍当事人在越南， 则护照可以直接递交越南公证处公证即可。"
    },
    {
        question: "在越南注册公司需要多长时间？",
        answer: "对于没有条件限制的投资项目，大约需要30个工作日。 对于在越南投资有条件的项目，因为需要由相关政府机构审批，时间会较长，约需要60个工作日。 在经济特区设立公司时，时间依据政府机构所需时间。"
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