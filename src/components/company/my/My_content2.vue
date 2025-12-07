<template>
    <div class="my_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    马来西亚公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/my/MY-2.jpg" alt="">
                    <div class="text">
                        <P>马来西亚位于马六甲海峡北岸，马来亚半岛南部及加里曼丹岛北部，马来西亚是东盟十国成员国之一，也是东南亚经济较发达的一个国家之一。官方语言为马来语及英语。华语使用广泛。</P>
                        <P>马来西亚商业公司类型主要有四种：独资企业、合伙企业、私人有限公司（马来文简称Sdn Bhd）、代表处。独资企业与合伙企业只有马来西亚公民才能成立。外国人只能选择成立私人有限公司Sdn Bhd.</P>
                        <P>作为东盟重要成员国，马来西亚地理位置优越，连接亚洲各大经济体，是外国投资者进入东南亚市场的理想跳板。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    马来西亚公司注册优势
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
                        <div class="condition-item">财务年度：可选择任意时期，通常为年底或半年底</div>
                        <div class="condition-item">公司名称：必须是英文名或其他字母组成</div>
                        <div class="condition-item">注册地址：必须提供马来西亚本地注册地址</div>
                        <div class="condition-item">营业范围：最多可选择3个营业项目</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">注册资本：最低1元马币起，最高无上限</div>
                        <div class="condition-item">公司董事：必须高于18岁，董事会可由2名或多名董事组成</div>
                        <div class="condition-item">股东资格：无限制，自然人或公司均可，须包括两名股东</div>
                        <div class="condition-item">公司审计：必须进行年度账目审计</div>
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
                    注册马来西亚公司常见问题
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
import '@/css/company/my/My_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '第一步 咨询签约',
        description: '填写委托书并签署协议'
    },
    {
        img: '',
        title: '第二步 交付款项',
        description: '支付相关费用'
    },
    {
        img: '',
        title: '第三步 名称查册',
        description: '核查公司名称可用性'
    },
    {
        img: '',
        title: '第四步 文件签署',
        description: '亲自到马来西亚签署申请公司文件'
    },
    {
        img: '',
        title: '第五步 政府审批',
        description: '到政府各部门办理手续'
    },
    {
        img: '',
        title: '第六步 银行开户',
        description: '亲自到马来西亚开立公司银行账户'
    }
]

const advantage = [
    {
        img: '',
        adv: '马来西亚政体稳定和民族和谐'
    },
    {
        img: '',
        adv: '马来西亚属于英联帮国家、又是东盟十国内最具经济发展影响力的国家，有巨大的市场潜力'
    },
    {
        img: '',
        adv: '马来西亚优越的地理位置，使之成为世界一流的海运和航运交通枢纽'
    },
    {
        img: '',
        adv: '马来西亚目前拥有相当大的自由贸易协议网络，方便企业有效轻易的进军国际市场'
    },
    {
        img: '',
        adv: '具有特殊的融资渠道'
    },
    {
        img: '',
        adv: '马来西亚距中国约5个小时的飞行距离，极大的方便了需要兼顾打理马来西亚与中国两地生意的商人群体'
    }
]

const advantages = [
    {
        img: '',
        title: '快速通道服务',
        description: '外国投资者可享受快速通道服务，通过无纸化电子方式提交申请，仅需两周完成注册。'
    },
    {
        img: '',
        title: '丰富经验',
        description: '以中小企业发展为核心，为大量企业提供专业的咨询服务。'
    },
    {
        img: '',
        title: '专业增值服务',
        description: '在境外拥有团队并与各大银行、事务所、税务机构建立良好合作关系，提供综合全面的服务。'
    },
    {
        img: '',
        title: '专属商务支持',
        description: '顾问团队毕业于国内外著名大学，为每个客户建立计划小组，提供一对一专业安全服务。'
    }
]

const faqs = ref([
    {
        question: "马来西亚的财务年度是什么时候？",
        answer: "马来西亚公司的财务年度可以选择任意时期，但通常选择为年底或半年底，即12月31日或者6月30日。马来西亚公司的第一个财务年度不能超过18个月。"
    },
    {
        question: "马来西亚公司需要审计吗？",
        answer: "马来西亚公司必须进行年度账目审计。"
    },
    {
        question: "马来西亚公司的注册需要提交什么材料？",
        answer: "注册公司所需要资料：英文名称、注册地址、营业范围、注册资本、财务年度、董事名单、股东名单以及股份金额、所有董事与股东的身份证扫描件、如果能提供护照扫描件，需同时提供。"
    },
    {
        question: "马来西亚公司的如何开立银行开户？",
        answer: "马来西亚公司银行开户有两种形式：1.董事不亲自去马来西亚：我们会将签字文件表格发给客户，由客户安排相关人员进行签字复印护照和身份证交给商业秘书认证；注：并非所有的董事都需要到场，但有支票签字权的董事必须到场。2.董事亲自去马来西亚：我们会带客户到银行。"
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