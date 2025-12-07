<template>
    <div class="kr_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    韩国公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/kr/KR-2.jpg" alt="">
                    <div class="text">
                        <P>韩国位于东亚朝鲜半岛南部，是一个发达的资本主义国家，资讯科技、制造业发达，造船、汽车、电子等产业居世界前列。</P>
                        <P>韩国拥有世界闻名的高速互联网服务、优良的营商环境和发达的市场经济，是投资者开展业务的理想地。</P>
                        <P>基于韩国政府制定出的多样化鼓励机制，以及亚太地区高收益的特点，吸引了众多跨国企业在此投资。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    韩国公司注册优势
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
                        <div class="condition-item">人数要求：2人起（股东/代表理事/监事需根据股本和架构确定）</div>
                        <div class="condition-item">注册资金：默认1亿韩元，必须一次性实缴验资到位。</div>
                        <div class="condition-item">注册地址：需为韩国本地的注册地址（我司可提供）。</div>
                        <div class="condition-item">经营范围：限制少，一般的正常业务都可以经营。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">公司名称：以韩文命名，执照显示韩文（可用英文名称）。</div>
                        <div class="condition-item">身份证明：提供代表理事和监事的身份证件（身份证和护照）。</div>
                        <div class="condition-item">公证文件：代表理事和监事需在国内办理公证原件。</div>
                        <div class="condition-item">资金注入：注册款需从韩国境外汇入才能被认可为外商投资。</div>
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
                    注册韩国公司常见问题
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
import '@/css/company/kr/Kr_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '提交名称及评估',
        description: '核名、确定公司名称、营业范围、代表理事和监事。'
    },
    {
        img: '',
        title: '签署协议及交付款项',
        description: '签署委托协议，支付定金，并准备公证文件。'
    },
    {
        img: '',
        title: '办理公证文件',
        description: '代表理事和监事在国内办理公证后，将公证原件邮到我司。'
    },
    {
        img: '',
        title: '申报外商投资及注资',
        description: '办理外商投资申报，客户从境外汇入注册资金到银行托管账户（可提供垫资服务）。'
    },
    {
        img: '',
        title: '递交申请并完成注册',
        description: '资金到账后，我司办理注册手续，时间约为7-9个工作日。'
    },
    {
        img: '',
        title: '领取执照及后续开户',
        description: '客户到韩国领取营业执照，我司协助客户开设银行账户。'
    }
]

const advantage = [
    {
        img: '',
        adv: '优秀人才资源：97%以上的职业人士拥有大学学历或受过职业培训。'
    },
    {
        img: '',
        adv: 'IT强国：拥有世界最高的宽带网入网率和移动电话普及率。'
    },
    {
        img: '',
        adv: '高政府鼓励机制：在经济合作发展组织会员国中属于最宽大。'
    },
    {
        img: '',
        adv: '最佳地理位置：距东北亚主要城市（北京、东京、上海）航班行程均在3小时以内。'
    },
    {
        img: '',
        adv: '高收益中心：外资企业的净利润远高于国内企业。'
    },
    {
        img: '',
        adv: '贸易便利：公司注册后即拥有进出口权，无需额外申请。'
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
        question: "韩国公司办理完成后所得到的文件有哪些？",
        answer: "1.营业执照；2.法人登记簿誊本；3.印鉴证明；4.法人公章；5.公司章程，股东名册；6.公司卡。"
    },
    {
        question: "韩国公司对注册资本的要求如何？",
        answer: "最低注册资本为1亿韩元，约合人民币60万。此费用需由境外汇入韩国，注册时按当天汇率兑换为韩币，且必须实缴验资到位。"
    },
    {
        question: "韩国公司可以实地经营吗？",
        answer: "可以的。我司可以提供注册韩国国外经营公司和韩国实体经营公司。"
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