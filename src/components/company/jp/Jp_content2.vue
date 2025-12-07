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
                        <P>日本是目前世界上经济发展较好的发达国家之一，亦为世界第三大经济体，是世界八大工业国成员国之一。</P>
                        <P>日本公司的品牌效应受到世界各国认可，尤其在化妆品、餐饮、重工机械、游戏等行业，有利于企业包装和未来的市场推广。</P>
                        <P>日本在国际上的亲密盟友为美国，其良好的基础设施和健全的法律制度，为企业家和商人提供了得天独厚的营商环境。</P>
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
                        <div class="condition-item">公司名称：选择自由，允许平假名、片假名、数字、英文等文字。</div>
                        <div class="condition-item">名称限制：禁止使用“银行”、“信托”、“生命保险”等受限字眼。</div>
                        <div class="condition-item">注册资金：注册资本金不受限制，1日元起业也可（1万日元也可）。</div>
                        <div class="condition-item">注册地址：地址租赁费包含在注册费中，实体公司地址须自行提供。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">经营范围：在合法范围内，绝大部分行业都可以申请注册。</div>
                        <div class="condition-item">公司代表：需确定日本公司日本代表。</div>
                        <div class="condition-item">资料提供：需提供股东的名章公证书。</div>
                        <div class="condition-item">签证/永居：出资500万日元以上注册公司，可申请投资经营签证。</div>
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
// 保持导入路径不变
import '@/css/company/jp/Jp_content2.css' 

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '确定公司信息',
        description: '确定公司名称、注册地址和日本代表。'
    },
    {
        img: '',
        title: '准备公证资料',
        description: '按规定准备股东的名章公证书等相关资料。'
    },
    {
        img: '',
        title: '制作及公证申请文件',
        description: '专业行政书士做成全部申请书类，并在日本公证。'
    },
    {
        img: '',
        title: '递交法务局登记',
        description: '将公证后的文件送交日本法务局进行登记。'
    },
    {
        img: '',
        title: '完成注册及领取资料',
        description: '约15-20个工作天完成注册，取得营业执照证明书、法人印章证明书等。'
    },
    {
        img: '',
        title: '税务部门开户及后续',
        description: '进行税务部门开户、休眠手续处理、年检手续等后续管理。'
    }
]

const advantage = [
    {
        img: '',
        adv: '品牌形象优势：日本公司品牌效应高，有利于产品和品牌的市场推广和发展。'
    },
    {
        img: '',
        adv: '营商环境优越：更容易开辟日本市场，拥有良好的基础设施和健全的法律制度。'
    },
    {
        img: '',
        adv: '名称与范围自由：公司名称选择比较自由，经营范围原则上没有太大的限制。'
    },
    {
        img: '',
        adv: '注册资本金无限制：注册资本金不受限制，1日元起业也可以。'
    },
    {
        img: '',
        adv: '签证优势：出资500万日元以上注册，可申请来日投资经营签证。'
    },
    {
        img: '',
        adv: '移民跳板：持续经营和居住满足条件，可申请日本国籍或永久签证。'
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
        question: "日本公司是否有核名阶段，及设立公司的周期？",
        answer: "日本没有核名过程，可重名。公司设立周期一般为3至4周即可设立完成。"
    },
    {
        question: "设立日本公司的注册资本金如何要求？",
        answer: "日本对新设立公司的金额无要求，最少1日元即可，无实缴制度。"
    },
    {
        question: "日本公司如何查册？",
        answer: "日本公司可以在国税厅网站查册，凭借公司法人番号、公司名称、注册地址均可查询。"
    },
    {
        question: "日本公司办理完成后所得到的文件有哪些？",
        answer: "日本株式会社的营业执照证明书、法人章、银行章、发票章各一枚、法人印章证明书、法务局登陆的印章卡、定款（章程）。"
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