<template>
    <div class="id_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    印尼公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/id/ID-2.jpg" alt="">
                    <div class="text">
                        <P>印尼是东盟最大经济体和20国集团重要成员，经济增速多年来一直保持在5%左右，在全球主要经济体中位列前茅。</P>
                        <P>印尼拥有丰富天然资源，包括石油、天然气、锡、铜及黄金。主要进口品为机械设备、化学制品、燃料、食品等。</P>
                        <P>印尼地理位置重要，控制着关键的国际海洋交通线，且人口众多，市场潜力巨大，对外资投资持鼓励态度。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    印尼公司注册优势
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
                        <div class="condition-item">经营范围：外资公司可经营任何不被负面投资清单禁止的商业活动。</div>
                        <div class="condition-item">注册资本：最低3亿印尼盾，剩余注册资金要求在5年内到位。</div>
                        <div class="condition-item">股东要求：股东至少2人，可为个人或公司。</div>
                        <div class="condition-item">注册地址：需提供1个当地有效注册地址，多选择写字楼。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">资金要求：营业执照签发前需开立银行账户接收到位资本。</div>
                        <div class="condition-item">董事/监事：董事会和监事会架构里，董事和监事至少各1人。</div>
                        <div class="condition-item">后续要求：注册后需存款25%资本金，否则不能操作任何变更。</div>
                        <div class="condition-item">绿卡资格：董事长及总经理在印尼经营三年以上能够申请绿卡。</div>
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
                    注册印尼公司常见问题
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
// 保持导入路径不变
import '@/css/company/id/Id_content2.css' 

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '签署协议及交付款项',
        description: '签署委托书和协议，并交付定金。'
    },
    {
        img: '',
        title: '准备资料及开立账户',
        description: '开立银行账户，用于接收到位注册资本。'
    },
    {
        img: '',
        title: '办理公司文件',
        description: '到政府部门办理公司大纲及章程、商业授权文件等。'
    },
    {
        img: '',
        title: '递交当局审核注册',
        description: '向政府部门办理相关手续，等待审核注册。'
    },
    {
        img: '',
        title: '完成注册及领取资料',
        description: '注册完成（约30-50个工作日），支付余款并领取全套资料。'
    },
    {
        img: '',
        title: '后续资金存放',
        description: '注册完成后需存放注册资金的25%，否则不能操作任何变更。'
    }
]

const advantage = [
    {
        img: '',
        adv: '政局总体稳定，政府重视扩大外资投资。'
    },
    {
        img: '',
        adv: '自然资源丰富，拥有石油、天然气、锡、铜及黄金等。'
    },
    {
        img: '',
        adv: '经济增长前景好，是东盟最大经济体，市场潜力巨大。'
    },
    {
        img: '',
        adv: '地理位置重要，控制着关键的国际海洋交通线。'
    },
    {
        img: '',
        adv: '人口众多，拥有丰富且廉价的劳动力资源。'
    },
    {
        img: '',
        adv: '市场化程度高，金融市场较为开放。'
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
        question: "注册印尼公司可以获得绿卡吗？",
        answer: "董事长及总经理在印尼经营三年以上能够申请得到印尼的绿卡。"
    },
    {
        question: "外资在印尼注册公司能占多少股份？",
        answer: "外资占股比例取决于公司所做的相关行业，有些行业不开放，有些行业有规定，有些行业外资能占百分之百的股份。"
    },
    {
        question: "印尼公司注册后是否需要存放注册资金？不存放注册资金会带来什么影响?",
        answer: "公司注册完成后，在司法部批文出来60天后公司必须存款最少注册资金的25%，没有存放注册资金的公司，将不能操作任何的变更。"
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