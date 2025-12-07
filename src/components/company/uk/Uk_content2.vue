<template>
    <div class="uk_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    英国公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/uk/UK-2.jpg" alt="">
                    <div class="text">
                        <P>英国是老牌资本主义国家，拥有全世界最健全的法制系统，以及完善的经济系统及银行体制。</P>
                        <P>对于世界各国的投资者而言，注册英国公司对于树立企业国际形象，开拓海外市场具有重要作用。</P>
                        <P>注册英国公司，企业可以更加方便的办离岸账户，为以后的出国、留学、投资铺平道路。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    英国公司注册优势
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
                    英国公司注册条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">公司名称以"有限公司"结尾，不能以"信托公司"、"银行"等结尾</div>
                        <div class="condition-item">有限责任公司，需要有两位自然人组成</div>
                        <div class="condition-item">必须有一位公司秘书（可以由两位自然人中的一位担任）</div>
                        <div class="condition-item">提供英国注册地址（我司可提供注册地址）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">无限制，标准的注册资本金是100英镑</div>
                        <div class="condition-item">超过此注册资金需要再缴纳0.5%英镑的厘印税</div>
                        <div class="condition-item">不需要实际验资到位</div>
                        <div class="condition-item">董事和股东身份证明文件</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    英国公司注册流程
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
                    英国公司注册常见问题
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
import '@/css/company/uk/Uk_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '第一步 英国公司名称查册',
        description: '查询公司名称是否可用'
    },
    {
        img: '',
        title: '第二步 签订委托书',
        description: '签订注册英国公司委托书，提交登记表'
    },
    {
        img: '',
        title: '第三步 提交资料',
        description: '客户提供注册所需资料，交由英国政府审核'
    },
    {
        img: '',
        title: '第四步 等待审核',
        description: '等待审核通过，领取执照'
    },
    {
        img: '',
        title: '第五步 领取文件',
        description: '10-15个工作日后拿到英国公司注册相关文件'
    },
    {
        img: '',
        title: '第六步 后续服务',
        description: '提供银行开户、税务申报等后续服务'
    }
]

const advantage = [
    {
        img: '',
        adv: '营商环境良好，吸引外商投资项目最多'
    },
    {
        img: '',
        adv: '贸易自由程度高，经济法律体系发达'
    },
    {
        img: '',
        adv: '树立国际形象，连接欧洲及英联邦市场'
    },
    {
        img: '',
        adv: '无外汇管制，可开立离岸账户'
    },
    {
        img: '',
        adv: '注册灵活性大，股东可为一名或多名'
    },
    {
        img: '',
        adv: '资料公开查询方便，24小时可查'
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
        title: '经验丰富，大量成功案例',
        description: '昶嘉捷以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        img: '',
        title: '提供专业增值服务',
        description: '昶嘉捷在境外拥有自己的团队，也与境外的各大银行、事务所、税务机构建立了良好的合作关系，能协助企业客户提供综合全面的服务。'
    },
    {
        img: '',
        title: '专业专属商务对接和支持',
        description: '昶嘉捷的顾问、咨询师、会计师等多数毕业于国内外著名大学，为每个客户建立计划小组，负责一对一的咨询服务。'
    }
]

const faqs = ref([
    {
        question: "注册英国公司资本是否有最低要求？",
        answer: "没有最低要求，一般是1000英镑。"
    },
    {
        question: "英国公司名称可以用中文名称注册吗？",
        answer: "不能，要以英文名注册，全部大写字母。"
    },
    {
        question: "如果我在英国注册公司之后不在英国本土经营，我需要缴税吗?",
        answer: "您不需要缴纳任何税款。根据英国税务局的规定如果要是公司没有任何经营行为或不盈利，该公司可以合法免税。"
    },
    {
        question: "注册英国公司需要多长时间？",
        answer: "通常情况下，注册英国公司需要10-15个工作日。"
    },
    {
        question: "英国公司需要年审吗？",
        answer: "是的，英国公司注册成立后需要每年向官方公司管理部门提供年检报告。"
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