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
                        <P>香港是一个融合机遇、创意和进取精神的都市，连续24年被美国传统基金会评为“全球最自由经济体”。</P>
                        <P>作为国际金融中心，香港完善的法律制度、简单的税制、低税率、配套齐全的基建，得到世界各地投资者的青睐。</P>
                        <P>香港蕴藏着无限商机，是通往全球经贸的平台，其国际优势广为人知，数以万计的国际企业因在此设立公司而受惠。</P>
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
                        <div class="condition-item">董事/股东：至少一位（不限国籍，年满18岁），需提供身份证明。</div>
                        <div class="condition-item">公司名义股东：提供营业执照复印件加盖公章，确认股份比例。</div>
                        <div class="condition-item">法定秘书：委任香港人或香港公司担任（我方可提供）。</div>
                        <div class="condition-item">经营范围：中文限28字，英文限60字母。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">注册资金：10000港元，不需实缴到位。</div>
                        <div class="condition-item">注册地址：须提供香港公司注册地址（我方可提供）。</div>
                        <div class="condition-item">公司名称：中英文名/英文名，需以“有限公司”或“LIMITED”结尾。</div>
                        <div class="condition-item">尽职调查/地址证明：需填写尽职调查表格，并提供股东地址证明。</div>
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
        title: '公司名称查册',
        description: '提交名称，进行查册，确保无重复。'
    },
    {
        img: '',
        title: '签署协议及交付费用',
        description: '提交委托书、签署协议，并交付费用。'
    },
    {
        img: '',
        title: '签署法定文档',
        description: '安排所有股东及董事签署全套法定文件。'
    },
    {
        img: '',
        title: '政府审批及注册',
        description: '我司提交政府审批，最快2小时内完成审批并出示证书扫描件。'
    },
    {
        img: '',
        title: '制作绿盒',
        description: '制作绿盒，内含章程、股票本、会议记录、印章等法定文件。'
    },
    {
        img: '',
        title: '成立完毕及领取资料',
        description: '快至两个工作日领取全套资料，绿盒可寄到指定地点。'
    }
]

const advantage = [
    {
        img: '',
        adv: '国际金融地位：香港是世界著名的金融贸易港，方便收汇用汇。'
    },
    {
        img: '',
        adv: '国际形象：香港良好的国际形象，提升企业的国际地位和产品竞争力。'
    },
    {
        img: '',
        adv: '政策优势：不在香港经营不用缴税的政策（地域来源原则），便于快速积累资本。'
    },
    {
        img: '',
        adv: '物流优势：庞大且完善的海陆空物流优势，让商品快速送达消费者。'
    },
    {
        img: '',
        adv: '简单易办：成立手续简单，门槛低，无需当地实地办公，低成本开启事业。'
    },
    {
        img: '',
        adv: '国际信誉：香港的国际信誉，让您的对外投资更值得被信任。'
    }
]

const advantages = [
    {
        img: '',
        title: '快速通道服务',
        description: '外国投资者注册企业可以享受快速通道服务，并可以通过无纸化电子方式提交申请，仅需二周时间即可完成注册。'
    },
    {
        img: '',
        title: '经验丰富，大量成功案例',
        description: '昶嘉捷以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        img: '',
        title: '提供专业增值服务',
        description: '昶嘉捷在境外拥有自己的团队，协助客户提供综合全面的财务、税务、法律等服务，做到“在外有昶嘉捷，更快捷”。'
    },
    {
        img: '',
        title: '专业专属商务对接和支持',
        description: '顾问、咨询师、会计师等建立计划小组，负责客户一对一的咨询、案子进度和客户协调计划等服务工作。'
    }
]

const faqs = ref([
    {
        question: "想在香港成立一家有限公司，需要什么条件？",
        answer: "只要您年满18岁，持有身份证或护照就可以在香港注册公司。另外，您必须提供一个位于香港的地址作为公司注册地址，和一个香港居民/或一家香港公司出任公司法定秘书一职。（注册地址和公司秘书我司可提供）。"
    },
    {
        question: "注册资金怎么打入香港公司账户？",
        answer: "香港公司注册不需要资金到位，认缴就可以了。"
    },
    {
        question: "香港公司按时如实报税的有什么好处？",
        answer: "如实申报税务有利于公司长期运营，可享受展位费减半优惠，亏损可持续弥补利润，有利银行融资/开立信用证，并有利于业务拓展、商业合作以及公司未来在香港上市。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

// 保持动画脚本不变
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