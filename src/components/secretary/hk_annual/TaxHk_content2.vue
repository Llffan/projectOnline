<template>
    <div class="hk_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    香港税务与年审
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK-2.jpg" alt="">
                    <div class="text">
                        <P>香港做账报税依照香港法律规定，所有的香港公司无论是否有盈利，都需要申报上一年度的经营情况，并由香港税务局依照一定标准，确定该香港公司是否需要缴纳税收。</P>
                        <P>香港是免税港，对进出口商品不征收任何关税，更没有销售税和其他进口费用的征收。这为国际贸易提供了极大的便利，降低了营商成本。</P>
                        <P>关于香港公司报税工作，必须严格遵循法定程序，委托专业的持牌会计师机构进行审计和办理，以确保合规经营，避免不必要的法律风险。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    香港税制优势
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
                    特殊税种与注意事项
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">消费税特例：仅针对酒类、烟草、烃油、甲醇这四类商品征收。</div>
                        <div class="condition-item">酒类税率：根据酒精浓度不同，按三个等级税率征收。</div>
                        <div class="condition-item">从量计征：烟草、烃油等按单位数量的特定税率征收费用。</div>
                        <div class="condition-item">零申报风险：不满足条件强行零申报，将面临高额罚款及监禁。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">必做审计：无论盈亏，每年必须出具审计报告，不能随意零申报。</div>
                        <div class="condition-item">报税周期：首年18个月后申报，之后每年一次（报税不等于交税）。</div>
                        <div class="condition-item">法律责任：未按时报税或瞒税，董事需承担法律责任及高额罚款。</div>
                        <div class="condition-item">地域来源：利润若非香港产生，可申请离岸豁免，无需纳税。</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    报税与做账流程
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
                    我们的优势
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
                    香港税务常见问题
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
// 保持导入路径不变
import '@/css/secretary/hk_annual/TaxHk_content2.css' 

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: '收到税表',
        description: '公司成立18个月收到首份税表，之后每年4月收到。'
    },
    {
        iconId: '#icon-notes', 
        title: '单据整理',
        description: '整理银行月结单、购销合同、费用票据等财务资料。'
    },
    {
        iconId: '#icon-audit', 
        title: '会计做账',
        description: '依据单据编制资产负债表、损益表及总账。'
    },
    {
        iconId: '#icon-government-line', 
        title: '审计核数',
        description: '持牌会计师进行核数，出具法定审计报告。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '计算税金',
        description: '进行税务计算，确认应缴税额或申请税务豁免。'
    },
    {
        iconId: '#icon-bank-line', 
        title: '递交申报',
        description: '签署核数报告及税表，递交税务局完成申报。'
    }
]

const advantage = [
    {
        iconId: '#icon-award-line', 
        adv: '免税港政策：不征收关税、增值税，大大降低贸易成本。'
    },
    {
        iconId: '#icon-city', 
        adv: '地域来源原则：利润若源自香港境外，可申请免税。'
    },
    {
        iconId: '#icon-trophy', 
        adv: '低税率优惠：利得税率低至16.5%，首200万利润仅8.25%。'
    },
    {
        iconId: '#icon-finance', 
        adv: '亏损抵扣：年度亏损可无限期结转，抵扣未来年度利润。'
    },
    {
        iconId: '#icon-airplane', 
        adv: '国际认可：正规审计报告获国际认可，利于融资上市。'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        adv: '完善法制：法律制度健全，税务体系透明，营商环境优越。'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '持牌会计师团队',
        description: '由香港执业会计师(CPA)亲自理账核数，确保审计报告符合香港会计准则及税务条例要求。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '精准税务筹划',
        description: '根据企业实际经营情况，提供合规的税务筹划方案，合理利用豁免政策，降低税务成本。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '零差错合规保障',
        description: '严格把控每一个申报环节，杜绝迟报、漏报风险，避免产生高额罚款及法律责任。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '一站式无忧托管',
        description: '提供从单据整理、记账、审计到填报税表的一站式服务，由专属顾问全程跟进，省时省心。'
    }
]

const faqs = ref([
    {
        question: "香港公司做账以后每年都需要做账吗？",
        answer: "香港税务法规定，香港公司第一年做账开始后，每年无论盈亏都必须需要出审计报告，不能改做零申报。不满足零申报的条件而做0申报，一旦被香港政府查到，是要受到'瞒税'的罚款的，需要承担罚款最高5万港元，另外应缴税款3倍，董事最高监禁3年的法律责任。"
    },
    {
        question: "香港公司没报税，受处罚吗？",
        answer: "香港公司法规定，每间香港有限公司，在法定时间内必须要报税，香港税务局会出罚款，如果再不理会，那么香港法院会出法院传票传董事股东出庭，如果董事股东不出庭，就视为藐视法庭，法院会停止该香港公司运作，香港公司的董事要承担相应的法律责任。"
    },
    {
        question: "香港公司报税周期是怎样的？",
        answer: "香港公司报税周期与大陆不同，不用1个月报1次。香港公司是成立到18个月的时候才第一次收到税务局的税表时处理报税，以后是1年报1次（香港公司报税与交税是分开的，报税一定要报但是未必就要交税）。报税的同时符合免税条件的可以申请免税。如果届时免税没有申请成功的话，税收都是需要补上的。"
    },
    {
        question: "香港公司报税需要注意什么？",
        answer: "任何一家香港有限公司，无论有没有开展业务，也无论有没有盈利，都需要每一年做一份税务审计报告交给香港税务局。核实之后如何你的盈利是境外所得，无论多少您都不需要向香港税务局交纳税费。但是，如果你没有按时提交税务审计报告就是一种违法行为，属于瞒报瞒税。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const advantageRefs = ref([])
const registrationProcessRefs = ref([])

// 保持动画脚本不变
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

    // content2 动画 - 参照其他页面统一动画效果
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

    // 为每个优势项添加动画 - 参照其他页面统一动画效果
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

    // content4 动画 - 参照其他页面统一动画效果
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

    // 为每个注册流程项添加动画 - 参照其他页面统一动画效果
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