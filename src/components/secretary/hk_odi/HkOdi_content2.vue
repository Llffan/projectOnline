<template>
    <div class="odi_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    什么是境外投资备案（ODI备案）
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK-2.jpg" alt="ODI备案">
                    <div class="text">
                        <P>境外投资备案（Overseas Direct Investment, 简称ODI）是指在中华人民共和国境内依法设立的企业通过新设、并购及其他方式在境外拥有非金融企业或取得既有非金融企业所有权、控制权、经营管理权及其他权益的行为。</P>
                        <P>通俗来讲，国内企业投资境外企业，不论是新设公司、新建项目还是并购股权，只要涉及直接或间接获得境外公司的所有权、控制权、经营管理等，都需要进行ODI备案。</P>
                        <P>需要注意的是，ODI仅针对设立的境外企业，企业境外投资路径上设置的空壳公司不在审核范围之列。同时，如果企业境外投资涉及敏感国家、地区或行业，则需要实行核准管理。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    ODI备案的优势
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage" :ref="el => { if (el) advantageRefs[index] = el }">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text">
                            {{ item.adv }}
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
                        <div class="condition-item">境内公司成立满1年以上（成立不满一年无法提供审计报告者较难通过）。</div>
                        <div class="condition-item">近一年独立第三方会计事务所出具的审计报告不能出现亏损。</div>
                        <div class="condition-item">财务指标良好：净资产回报率建议高于5%，资产负债率建议低于70%。</div>
                        <div class="condition-item">股东背景、资金来源必须真实、合法。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">需准备主申请公司营业执照、章程、审计报告、资金证明等。</div>
                        <div class="condition-item">需准备境外投资交易结构图、境外公司文件及项目介绍。</div>
                        <div class="condition-item">限制投资敏感国家地区（如战乱/未建交）及敏感行业（如房地产/娱乐业）。</div>
                        <div class="condition-item">限制在境外设立无具体实业项目的股权投资基金或投资平台。</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    ODI备案流程
                </div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage" :ref="el => { if (el) registrationProcessRefs[index] = el }">
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
                    ODI备案常见问题
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
import '@/css/secretary/hk_odi/HkOdi_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '前期评估',
        description: '评估企业资质、资金来源合规性及投资项目可行性，制定申报方案。'
    },
    {
        iconId: '#icon-agreement', 
        title: '资料准备',
        description: '协助编制尽职调查报告、可行性研究报告，准备审计报告及法律文书。'
    },
    {
        iconId: '#icon-city', 
        title: '发改委备案',
        description: '向发展和改革委员会提交申请，审核通过后取得《境外投资项目备案通知书》。'
    },
    {
        iconId: '#icon-government-line', 
        title: '商务部备案',
        description: '向商务主管部门提交申请，核准通过后颁发《企业境外投资证书》。'
    },
    {
        iconId: '#icon-bank-line', 
        title: '外汇登记',
        description: '凭核准证书及备案通知书在银行办理外汇登记，开立境外直接投资账户。'
    },
    {
        iconId: '#icon-airplane', 
        title: '实施投资',
        description: '合规完成资金购汇及出境，正式实施境外项目投资及运营。'
    }
]

const advantage = [
    {
        iconId: '#icon-finance', 
        adv: '合规出境：合法完成境内资金出境，实现境外获取外币目的。'
    },
    {
        iconId: '#icon-trophy', 
        adv: '市场开拓：获得当地政策或税务优惠，加快资本积累速度。'
    },
    {
        iconId: '#icon-award-line', 
        adv: '形象提升：提高国内企业形象，增加企业附加价值及经验吸收。'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        adv: '资源整合：有效利用双边市场资源，规避壁垒并优化资源配置。'
    },
    {
        iconId: '#icon-bank-line', 
        adv: '资金补贴：境外资金返程投资可享受省市各级财政资金补贴。'
    },
    {
        iconId: '#icon-city', 
        adv: '资本运作：助力跨境合作、海外融资上市及搭建红筹架构。'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '专业团队',
        description: '拥有资深顾问团队，熟悉ODI备案流程及最新政策要求。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '一站式服务',
        description: '提供从公司注册、审计报告、法律文书到备案申请的全流程服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '高效审批',
        description: '预先评估申请资质，优化申报材料，确保备案通过率和效率。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '合规保障',
        description: '确保资金出境合法合规，避免因违规操作带来的法律风险。'
    }
]

const faqs = ref([
    {
        question: "两个及以上企业如何共同开展境外投资？",
        answer: "如存在两个以上企业共同投资的，由“领投方”（投资金额最大或持股比例最高的一方）统一申报备案。在外汇方面，由各申报主体向所在地外汇局申报。"
    },
    {
        question: "《企业境外投资备案证书》的有效期是什么时候？",
        answer: "自领取《证书》之日起2年内有效。如果在2年内未在境外开展投资，《证书》自动失效。如需继续需重新办理或申请延期。"
    },
    {
        question: "不做ODI备案有什么后果？",
        answer: "投资主体可能被警告、中止投资；资金无法合规出境；境外利润无法返程汇回；无法享受国内补贴；无法完成返程投资或海外上市架构搭建。"
    },
    {
        question: "注册海外公司是否都需要ODI备案？",
        answer: "不一定。ODI适合进行海外业务拓展、实体投资或并购。如果仅注册离岸公司做中转贸易而不涉及直接海外投资，通常不需要ODI。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const advantageRefs = ref([])
const registrationProcessRefs = ref([])

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

    // 为每个优势项添加动画
    advantageRefs.value.forEach((el, index) => {
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

    // 为每个注册流程项添加动画
    registrationProcessRefs.value.forEach((el, index) => {
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