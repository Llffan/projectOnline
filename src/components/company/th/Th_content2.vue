<template>
    <div class="th_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    泰国公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/th/TH-2.jpg" alt="">
                    <div class="text">
                        <P>泰国历来注重吸引外商投资，是东南亚地区较为吸引外商投资的国家之一。</P>
                        <P>根据泰国投资促进协会（BOI）公布的数据，2022年季度外商直接投资占计划总额的70%，与以往相比增长了29%。</P>
                        <P>相对稳定的社会环境、较高的政策透明度和经济发展水平，使得泰国吸引了越来越多的投资者。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    泰国公司注册优势
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
                    泰国公司注册条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">至少需要有3名发起人</div>
                        <div class="condition-item">至少需要有1名董事（指定泰国人）及1名审计</div>
                        <div class="condition-item">公司股东必须出资公司全部股份的25%</div>
                        <div class="condition-item">召开股东会议，股东享有表决权</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">如符合条件，外国人可以拥有100%股权</div>
                        <div class="condition-item">以公司章程和组织大纲的登记为公司组成程序</div>
                        <div class="condition-item">确认泰国公司注册地址</div>
                        <div class="condition-item">拟定公司经营范围和注册资本</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    泰国公司注册流程
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
                    泰国公司注册常见问题
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
import '@/css/company/th/Th_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '第一步 泰国公司核名',
        description: '提供3个英文公司名称，并递交商业发展厅申请核准'
    },
    {
        img: '',
        title: '第二步 准备注册材料',
        description: '确认注册地址、拟定经营范围、注册资本等'
    },
    {
        img: '',
        title: '第三步 申请注册公司',
        description: '由法定签字人签字盖章后递交商业发展厅注册'
    },
    {
        img: '',
        title: '第四步 开通银行账户',
        description: '公司注册完成后，前往银行申请开通公司帐户'
    },
    {
        img: '',
        title: '第五步 后续服务',
        description: '提供年审、变更、注销等后续服务'
    },
    {
        img: '',
        title: '第六步 完成注册',
        description: '公司注册成功，正式运营'
    }
]

const advantage = [
    {
        img: '',
        adv: '可成立在中国难以被批准注册的各类企业'
    },
    {
        img: '',
        adv: '以自己境外公司名义和大陆公司合资，享受减免所得税'
    },
    {
        img: '',
        adv: '自然人或法人及其亲属可申办长期居住、多次往返签证'
    },
    {
        img: '',
        adv: '居住期满3年可申请转为长期居住，期满5年可申请转入泰籍'
    },
    {
        img: '',
        adv: '以境外公司名义到中国开展商务活动享外侨同等待遇'
    },
    {
        img: '',
        adv: '方便自由出入境及申请欧美签证'
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
        question: "泰国注册公司发起人至少要有几位，有什么要求？",
        answer: "泰国注册有限公司至少需要3位发起人，发起人必须为自然人而不是法人。"
    },
    {
        question: "泰国外资公司的最低本额为多少？",
        answer: "非该法限制外资从事的三大类产业，设立公司的最低资本额要求为200万泰铢；若为该法所限制外资从事的三大类产业，设立公司的最低资本额要求为300万泰铢。"
    },
    {
        question: "依泰国法令登记的有限公司，是否要求泰籍股东必须持股51%以上？",
        answer: "不一定，倘若外籍股东持股超过50%以上，依据泰国外资商业法的规定，该公司的性质便视为外资公司，将被限制禁止从事该法规定的第一类产业，或必须取得外资公司经营许可才能从事第二类或第三类产业。"
    },
    {
        question: "泰国公司注册需要多长时间？",
        answer: "公司注册时间约需要15工作日左右。"
    },
    {
        question: "泰国公司注册费用是多少？",
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