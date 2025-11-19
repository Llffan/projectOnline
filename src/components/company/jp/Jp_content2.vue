<template>
    <div class="jp_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    日本公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/jp/JP-2.jpg" alt="">
                    <div class="text">
                        <P>日本是世界第三大经济体，拥有先进的科技、完善的法律制度和高度发达的基础设施。作为亚洲重要的商业中心，日本以其稳定的经济环境、严格的知识产权保护和优质的商业服务吸引着全球投资者。</P>
                        <P>在日本设立公司，不仅可以享受进入亚洲市场的重要门户优势，还能充分利用日本在技术创新、高端制造和品牌管理方面的领先地位。</P>
                        <P>日本公司注册体系完善，法律环境透明，为外国投资者提供了良好的营商环境和广阔的发展空间。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    日本公司注册优势
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
                        <div class="condition-item">至少一名董事和一名股东（可以是同一人）</div>
                        <div class="condition-item">注册地址（需为日本实际地址）</div>
                        <div class="condition-item">公司名称（日文或英文）</div>
                        <div class="condition-item">公司章程</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">董事和股东身份证明文件</div>
                        <div class="condition-item">注册资本（无最低要求）</div>
                        <div class="condition-item">公司业务描述</div>
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
                    注册日本公司常见问题
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
import '@/css/company/jp/Jp_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '公司名称核查',
        description: '核查公司名称是否可用，准备备选名称。'
    },
    {
        img: '',
        title: '准备注册文件',
        description: '准备公司章程、股东董事资料等必要文件。'
    },
    {
        img: '',
        title: '提交注册申请',
        description: '向法务局提交公司注册申请及相关文件。'
    },
    {
        img: '',
        title: '领取注册证书',
        description: '注册审核通过后，领取公司注册证书。'
    },
    {
        img: '',
        title: '办理税务登记',
        description: '完成国税厅和地税部门的税务登记手续。'
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

const advantage = [
    {
        img: '',
        adv: '世界第三大经济体，市场潜力巨大'
    },
    {
        img: '',
        adv: '完善的法律制度，稳定的经济环境'
    },
    {
        img: '',
        adv: '严格的知识产权保护'
    },
    {
        img: '',
        adv: '先进的科技和制造业基础'
    },
    {
        img: '',
        adv: '高素质的人才资源'
    },
    {
        img: '',
        adv: '便利的亚洲市场门户'
    }
]

const faqs = ref([
    {
        question: "注册日本公司需要多少资本？",
        answer: "日本公司注册资本没有最低限额要求，可根据实际需要设定。"
    },
    {
        question: "注册日本公司需要多长时间？",
        answer: "通常情况下，注册日本公司需要1-2周时间。"
    },
    {
        question: "是否需要日本人作为董事？",
        answer: "不需要，外国人也可以担任日本公司的董事。"
    },
    {
        question: "日本公司需要年审吗？",
        answer: "是的，日本公司需要每年提交年度申报并更新相关信息。"
    },
    {
        question: "注册日本公司后如何开银行账户？",
        answer: "注册完成后可凭公司文件在日本银行开设公司账户，也可通过代理协助办理。"
    },
    {
        question: "日本公司可以在中国经营吗？",
        answer: "日本公司不能直接在中国经营，如需在中国经营需要设立代表处或投资设立外商投资企业。"
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