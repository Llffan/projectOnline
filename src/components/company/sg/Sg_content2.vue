<template>
    <div class="sg_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    新加坡公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/sg/SG-2.jpg" alt="">
                    <div class="text">
                        <P>新加坡非营利组织基金会，是在新加坡会计与企业发展局(ACRA)登记注册，类型为公众公司。</P>
                        <P>由于非营利组织没有注册资金，不用交税，所以限制比较多，要求比较严格。</P>
                        <P>新加坡以稳定而健全的法律及金融环境著称，在这里注册基金是安全与便捷的首选。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    新加坡公司注册优势
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
                    新加坡公司注册条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">年满18周岁且拥有合法身份的人士可申请</div>
                        <div class="condition-item">股东无限制，可为自然人或法人团体</div>
                        <div class="condition-item">董事会可由一名或多名董事组成</div>
                        <div class="condition-item">但必须至少包括一名本地董事（我司可提供）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">本地董事指新加坡公民、永久居民或准证持有人</div>
                        <div class="condition-item">公司名称（提供多个备选）</div>
                        <div class="condition-item">注册地址（我司可提供）</div>
                        <div class="condition-item">法定秘书（我司可提供）</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    新加坡公司注册流程
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
                    新加坡公司注册常见问题
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
import '@/css/company/sg/Sg_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '第一步 签署交易合同',
        description: '昶嘉捷签署交易合同并支付相关服务金额'
    },
    {
        img: '',
        title: '第二步 准备文件',
        description: '客户按我司要求进行准备，并且发送文件至昶嘉捷'
    },
    {
        img: '',
        title: '第三步 办理注册',
        description: '收到文件后，昶嘉捷团队将开始操办公司注册业务'
    },
    {
        img: '',
        title: '第四步 领取资料',
        description: '注册成功后，领取全套公司注册资料'
    },
    {
        img: '',
        title: '第五步 后续服务',
        description: '提供银行开户、税务申报等后续服务'
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
        adv: '地理位置优越，国际转口贸易中心'
    },
    {
        img: '',
        adv: '快速提升国际品牌形象，知识产权资产管理中心'
    },
    {
        img: '',
        adv: '国际贸易优势，实现真正意义上的离岸贸易'
    },
    {
        img: '',
        adv: '税率优势，多项税务优惠政策'
    },
    {
        img: '',
        adv: '东盟优势，享受东盟10国间零关税自由贸易'
    },
    {
        img: '',
        adv: '享受政策优势，制定系列优惠政策'
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
        question: "新加坡基金会公司为什么要做法律意见书？",
        answer: "根据新加坡金融法和证券法，如果包含有证券性质的虚拟货币需要申请特殊金融牌照，所以需要证明该项目不包含有证券性质，那么就需要律师出具TOKEN非证券化法律意见书，以及证明该项目合法合规的白皮书合规法律意见书，这两者是大部分客户都要做的。"
    },
    {
        question: "新加坡基金会公司从事区块链项目注册新加坡基金会和私人公司有什么区别吗？",
        answer: "新加坡基金会属于非盈利公众担保公司，此类公司对于从事区块链企业来说，更容易获得客户的信任。而且有前期成功的项目做铺垫，所以注册新加坡非盈利基金会比私人公司更适合做区块链项目。"
    },
    {
        question: "新加坡基金会公司注册好之后可以开户吗？",
        answer: "可以开户，但是不建议开户。其次是开这个账户对公司来说没太大用处，这个账户开通之后只能收美金和外币，不能收人民币或者代币，除非您这边客户都是国外的，不然的话也没什么用。"
    },
    {
        question: "新加坡公司注册需要多长时间？",
        answer: "通常情况下，注册新加坡公司需要1-3个工作日。"
    },
    {
        question: "新加坡公司需要年审吗？",
        answer: "是的，新加坡公司每年都需要进行年审，包括递交年度报告和续期商业登记证。"
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