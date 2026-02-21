<template>
    <div class="telecom_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    香港电讯牌照
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK-2.jpg" alt="香港电讯">
                    <div class="text">
                        <P>依据《香港电讯条例》第9条：除「无线电商牌照(放宽限制)」持牌人外，任何人士如要将无线发送器输入或输出香港，必需持有由通信事务管理局（“管理局”）所批给的许可证。</P>
                        <P>香港电讯牌照是出口手机等电讯产品时，需要提供给海关做通关放行的资料之一。香港对无线电发射器具的进出口实施法律管制，《电讯条例》规定进出口手提电话的人士必须持有许可证或无线电商牌照。</P>
                        <P>大部分电讯牌照都需要以集团名义申请，如有特殊原因，也可以个人名义去办理申请。我们提供从资料准备、牌照申请到年度续期的一站式服务。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    主要牌照类别
                </div>
                <div class="intro">
                    <div v-for="(item, index) in licenseTypes" :key="index" class="advantage" :ref="el => { if (el) licenseTypesRefs[index] = el }">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text">
                            {{ item.title }}
                        </div>
                        <div class="desc">
                            {{ item.description }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="content3">
                <div class="title">
                    申请条件与要求
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="header-title">A. 船舶电台牌照</div>
                        <div class="condition-item">必需提交香港海事处发出的香港商船注册证书影印本。</div>
                        <div class="condition-item">由认可帐务机构发出的处置船舶无线电通信帐户确认文件。</div>
                        <div class="condition-item">原有的船舶无线电台牌照及无线电装置记录。</div>
                        <div class="condition-item">填妥的国际电联通知书(船舶电台)。</div>
                        <div class="condition-item">公司申请需提供商业登记证；个人申请需提供身份证或护照。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                         <div class="header-title">B. 无线电商牌照(放宽限制)</div>
                        <div class="condition-item">只能以有限公司名义申请。</div>
                        <div class="condition-item">进出口手机、对讲机或具备WIFI功能的电子产品必需要用到。</div>
                        <div class="condition-item">提供香港公司注册证书(CI)及商业登记证(BR)。</div>
                        <div class="condition-item">申请表格需加盖香港公司小圆章及签名。</div>
                        <div class="condition-item">申请人(董事)的身份证复印件。</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    申请流程 (无线电商牌照)
                </div>
                <div class="intro">
                    <div v-for="(item, index) in processSteps" :key="index" class="advantage" :ref="el => { if (el) processStepsRefs[index] = el }">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
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
                    我们的服务优势
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
                        <div class="img">
                            <img :src="item.imgSrc" :alt="item.title">
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
                    常见问答
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
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css/secretary/telecom/Telecom_content2.css'

gsap.registerPlugin(ScrollTrigger)

const licenseTypes = [
    {
        iconId: '#icon-city', 
        title: '传送者牌照',
        description: '主要涉及铺设电讯线和网络线、固定网络电话或流动电话等业务。目前政府不新发牌照，只能靠转让获得。'
    },
    {
        iconId: '#icon-airplane', 
        title: '公共无线电通讯牌照',
        description: '适用于大型商业用途，例如小巴终点站、机场传呼等公共无线电通讯服务。'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        title: '服务商牌照',
        description: '分为三类：基于本地语音电话服务（I/II类）、基于网络增值及流动通信服务（III类）。'
    },
    {
        iconId: '#icon-notes', 
        title: '其他/类别牌照',
        description: '针对特定仪器申请的专属牌照，如船舶电台牌照、无线电商牌照（进出口手机必备）。'
    }
]

const processSteps = [
    {
        iconId: '#icon-notes', 
        title: '资料准备',
        description: '协助客户准备香港公司全套材料、申请表格及申请人证件。'
    },
    {
        iconId: '#icon-audit', 
        title: '递交申请',
        description: '向通信事务管理局正式提交申请文件，并跟进受理情况。'
    },
    {
        iconId: '#icon-government-line', 
        title: '部门审核',
        description: '部门进行资料审核，正常情况下约需7-10个工作日。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '成功获批',
        description: '审核通过，领取无线电商牌照(放宽限制)或船舶电台牌照。'
    },
    {
        iconId: '#icon-agreement', 
        title: '年度续期',
        description: '牌照有效期为一年，期满前需安排续费续期，以免被取消。'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '专业高效',
        description: '熟悉香港电讯条例及申请流程，确保资料准备准确无误，快速完成申请。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '一站式服务',
        description: '提供从公司注册、牌照申请到后续年审续期的一站式商务服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '成功率高',
        description: '拥有丰富的牌照申请经验，提前规避风险，确保持牌成功。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '贴心售后',
        description: '建立客户档案，专人跟进，提前提醒牌照续期，避免因逾期导致牌照失效。'
    }
]

const faqs = ref([
    {
        question: "哪些产品进出口需要用到无线电牌照？",
        answer: "一般进出口手机、对讲机或具备WIFI功能的电子产品（如智能家居设备等）必需要用到无线电商牌照(放宽限制)。"
    },
    {
        question: "香港电讯牌照有效期是多久？",
        answer: "香港电讯牌照的有效期通常为1年。持牌人须在到期前续费续期。如果在1个月内未续期，牌照将被取消。"
    },
    {
        question: "哪些情况可以豁免申请牌照？",
        answer: "以下情况可豁免：(1) 过境物品及航空转运货物；(2) 纯粹转运货物；(3) 供个人应用的无线电通信器具。"
    },
    {
        question: "没有香港公司可以申请吗？",
        answer: "大部分电讯牌照（如无线电商牌照）都需要以有限公司名义申请。如船舶电台牌照等特殊情况可以个人名义申请，但商务用途建议使用公司。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const licenseTypesRefs = ref([])
const processStepsRefs = ref([])

onMounted(async () => {
    await nextTick()
    
    // content1 动画
    gsap.from('.content1 .title', {
        scrollTrigger: {
            trigger: '.content1 .title',
            start: 'top 90%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    gsap.from('.content1 .intro', {
        scrollTrigger: {
            trigger: '.content1 .intro',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    })

    // content2 动画
    gsap.from('.content2 .title', {
        scrollTrigger: {
            trigger: '.content2 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    licenseTypesRefs.value.forEach((el, index) => {
        gsap.fromTo(el,
            { 
                opacity: 0, 
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content2 .intro',
                    start: 'top 80%'
                }
            }
        )
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
        duration: 0.8,
        ease: 'power2.out'
    })

    processStepsRefs.value.forEach((el, index) => {
        gsap.fromTo(el,
            { 
                opacity: 0, 
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content4 .intro',
                    start: 'top 80%'
                }
            }
        )
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

    // content6 动画
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

    const faqItems = document.querySelectorAll('.content6 .faq-item');
    faqItems.forEach((item, index) => {
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
