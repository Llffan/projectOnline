<template>
    <div class="sc_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    塞舌尔公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/sc/SC-2.jpg" alt="">
                    <div class="text">
                        <P>塞舌尔，SEYCHELLES，位于印度洋西部和肯尼亚以东约1609公里处。</P>
                        <P>塞舌尔由115个大小岛屿组成，其中马埃岛最大，全国90%的居民住在该岛。</P>
                        <P>塞舌尔以其优美的自然环境和稳定的政局而闻名，是非洲地区重要的离岸金融中心之一。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    塞舌尔公司注册优势
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
                    塞舌尔公司注册条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">公司名称以Limited, Corporation, Incorporated等结尾</div>
                        <div class="condition-item">提供1位董事1位股东（可同为1人担任）</div>
                        <div class="condition-item">注册资本美金（US$）100万</div>
                        <div class="condition-item">无需公司秘书，股份转让容易且免收厘印费</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">可另加中文公司名称</div>
                        <div class="condition-item">董事及股东个人资料隐密性极高</div>
                        <div class="condition-item">可选择发行不记名股票</div>
                        <div class="condition-item">注册后可于香港开立银行账户</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    塞舌尔公司注册流程
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
                    塞舌尔公司注册常见问题
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
import '@/css/company/sc/Sc_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '第一步 公司名称查册',
        description: '查询公司名称是否可用'
    },
    {
        img: '',
        title: '第二步 签署协议',
        description: '签署注册协议书和委托书'
    },
    {
        img: '',
        title: '第三步 交付款项',
        description: '支付相关注册费用'
    },
    {
        img: '',
        title: '第四步 提交注册',
        description: '向相关部门提交注册申请'
    },
    {
        img: '',
        title: '第五步 制作文件',
        description: '制作公司相关文件'
    },
    {
        img: '',
        title: '第六步 文件交接',
        description: '完成注册并交接文件'
    }
]

const advantage = [
    {
        img: '',
        adv: '注册时可另加中文公司名称'
    },
    {
        img: '',
        adv: '保障董事及股东个人资料，隐密性极高'
    },
    {
        img: '',
        adv: '无需公司秘书，股份转让容易且免收厘印费'
    },
    {
        img: '',
        adv: '可选择发行不记名股票'
    },
    {
        img: '',
        adv: '注册后可于香港开立银行账户'
    },
    {
        img: '',
        adv: '无须缴交周年申报表和公司帐目'
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
        question: "塞舌尔股东和董事的要求是什么？",
        answer: "塞舌尔至少需要一个股东和董事，可以是同一个人，没有国籍限制。"
    },
    {
        question: "塞舌尔公司的注册资本是多少？",
        answer: "塞舌尔的准授权资本为50，000美元，按每股1.00美元分为50，000股，无需验资。注册资本超过50，000美元的，发行股数应大于50，000股。"
    },
    {
        question: "塞舌尔公司税务制度是怎么样的？",
        answer: "海外离岸公司免除其在塞舌尔群岛的税收，包括：全部股息、利息、租金、补偿以及从其它证券、债权中获得的收入及其它公司收入。除此之外，海外离岸公司没有财产继承税和赠与税。同时，塞舌尔群岛的海外离岸公司被免除所有经营的印花税。"
    },
    {
        question: "注册塞舌尔公司需要多长时间？",
        answer: "公司注册时间约需要15工作日左右。"
    },
    {
        question: "注册塞舌尔公司费用是多少？",
        answer: "注册费用具体可咨询昶嘉捷专业顾问。"
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