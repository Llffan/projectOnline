<template>
    <div class="ov_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    海外公司年审与维护
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/bvi/BVI-2.jpg" alt="">
                    <div class="text">
                        <P>海外离岸公司（如BVI、开曼、塞舌尔等）虽然通常享有税务豁免权，但必须遵守注册地的公司法规定，按时进行年度牌照续费和年审工作，以维持公司的法律地位。</P>
                        <P>年审的主要内容包括缴纳政府牌照费、注册代理人费用及注册地址费用等。未能按时年审将导致高额罚款，甚至导致公司被除名，资产被冻结。</P>
                        <P>对于需要维持上市地位或进行国际投融资的企业，保持良好的公司续存状态（Good Standing）至关重要。我们提供一站式的年审服务，确保您的离岸公司长期合规运营。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    离岸公司优势维护
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
                    主要法域年审时间与规定
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">BVI公司(上半年)：1-6月成立的公司，年审需在每年5月31日前完成。</div>
                        <div class="condition-item">BVI公司(下半年)：7-12月成立的公司，年审需在每年11月30日前完成。</div>
                        <div class="condition-item">开曼公司：无论何时成立，年审均需在每年3月31日前完成。</div>
                        <div class="condition-item">塞舌尔公司：以公司成立周年日为准，每年需在周年日前完成年审。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">经济实质申报：BVI与开曼公司需在年审时确认经济实质分类并申报。</div>
                        <div class="condition-item">逾期罚款：逾期1-5个月罚款10%-50%，超过5个月可能面临除名。</div>
                        <div class="condition-item">公司恢复：一旦被除名，恢复公司需缴纳高额政府罚款及律师费。</div>
                        <div class="condition-item">资产风险：被除名的公司资产归政府所有，需恢复后方可处理。</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    年审办理流程
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
                    海外年审常见问题
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
import '@/css/secretary/overseas_annual/TaxOv_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: '年审通知',
        description: '提前2个月发出年审通知，确认公司存续状态及费用。'
    },
    {
        iconId: '#icon-notes', 
        title: '资料确认',
        description: '确认公司董事股东信息有无变更，是否需要申报经济实质。'
    },
    {
        iconId: '#icon-audit', 
        title: '缴纳费用',
        description: '客户支付年审费用，包括政府牌照费及代理服务费。'
    },
    {
        iconId: '#icon-government-line', 
        title: '政府申报',
        description: '向当地注册处递交周年申报表并缴纳政府费用。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '领取文件',
        description: '领取最新的完税证明（Good Standing）或续期文件。'
    },
    {
        iconId: '#icon-bank-line', 
        title: '归档备案',
        description: '将年审文件归档保存，并更新公司注册记录。'
    }
]

const advantage = [
    {
        iconId: '#icon-award-line', 
        adv: '税务豁免权：继续享有离岸豁免权，无需缴纳利得税。'
    },
    {
        iconId: '#icon-city', 
        adv: '信息保密：严格的隐私保护法律，保障董事股东信息安全。'
    },
    {
        iconId: '#icon-trophy', 
        adv: '无外汇管制：资金进出自由，便于国际贸易与投资结算。'
    },
    {
        iconId: '#icon-finance', 
        adv: '运作简便：无需召开周年股东大会，无需递交审计报告（部分地区）。'
    },
    {
        iconId: '#icon-airplane', 
        adv: '上市架构：维持VIE架构或海外上市主体的合法地位。'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        adv: '资产保护：完善的信托法律框架，有效隔离商业风险。'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '全球直连服务',
        description: '直接对接BVI、开曼等当地注册代理人，省去中间环节，效率更高，费用更透明。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '专业合规团队',
        description: '熟悉各国公司法及经济实质法案（ESR），协助客户完成复杂的合规申报工作。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '到期智能提醒',
        description: '拥有完善的CRM系统，提前通知年审到期日，避免因人为疏忽导致的罚款或处罚。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '配套后续服务',
        description: '除年审外，提供公证认证（Apostille）、Incumbency证明申请、代理人证明书等全套服务。'
    }
]

const faqs = ref([
    {
        question: "离岸公司不经营了，可以不年审直接不管吗？",
        answer: "不可以。如果不再经营，应申请正式注销（Strike Off）。直接弃置不管会导致公司欠费，长期欠费会被除名，董事记录会被列入黑名单，影响其在其他离岸司法管辖区的信誉，且公司资产（包括银行账户）可能被冻结归政府所有。"
    },
    {
        question: "BVI公司年审时间是如何规定的？",
        answer: "BVI公司年审时间分为两段：1月至6月注册的公司，年审需在每年5月31日前完成；7月至12月注册的公司，年审需在每年11月30日前完成。逾期将产生高额罚款。"
    },
    {
        question: "什么是经济实质（Economic Substance）申报？",
        answer: "根据BVI、开曼等地的经济实质法案，所有相关实体必须每年申报其从事的相关活动。如果公司从事纯控股以外的九类相关活动（如基金管理、融资租赁等），则必须在当地建立足够的经济实质（如下雇员、场所）。我们在年审时会协助客户进行分类和申报。"
    },
    {
        question: "公司被除名了还可以恢复吗？",
        answer: "可以恢复，但手续繁琐且费用昂贵。需要补交所有欠缴的政府费用、年审费用及罚款，并支付高额的律师费向法院申请恢复令。因此，按时年审是成本最低的维护方式。"
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