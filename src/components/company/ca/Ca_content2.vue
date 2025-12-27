<template>
    <div class="ca_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    加拿大公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/ca/CA-2.jpg" alt="">
                    <div class="text">
                        <P>加拿大是一个高度发达的资本主义国家，拥有丰富的自然资源和高度发达的科技，是全球生活水准最高的国家之一。</P>
                        <P>加拿大在教育、政府的透明度、社会自由度、生活品质及经济自由的国际排名都名列前茅，是八国集团、20国集团等重要国际组织的成员国。</P>
                        <P>注册加拿大公司程序便捷、成本低廉，且产品可自由进入北美和英联邦国家市场，为企业提供了广阔的跨国发展机遇。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    加拿大公司注册优势
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
                    条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">拟注册加拿大公司名称（英文）。</div>
                        <div class="condition-item">股东及董事名称、身份证或护照。</div>
                        <div class="condition-item">股东及董事联系电话、联系地址。</div>
                        <div class="condition-item">公司的经营范围（营业范围和地区没有限制）。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">至少一位加拿大公司董事（温哥华地区注册不需提供）。</div>
                        <div class="condition-item">股东/董事需年满18周岁，无国籍限制。</div>
                        <div class="condition-item">公司组织形式：可选择个人独资、合伙或有限责任股份公司。</div>
                        <div class="condition-item">公司制企业（股份公司）：股东以出资额为限，承担有限责任。</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    公司注册流程
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
                    注册加拿大公司常见问题
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
import '@/css/company/ca/Ca_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-agreement',
        title: '签署委托书及交付费用',
        description: '签署委托书、协议并交付费用。'
    },
    {
        iconId: '#icon-message-search',
        title: '提供资料及名称查册',
        description: '提供公司名称、董事股东资料，进行名称查册。'
    },
    {
        iconId: '#icon-notes',
        title: '准备和签署法定文档',
        description: '准备公司章程等法定文档，并安排签署。'
    },
    {
        iconId: '#icon-government-line',
        title: '递交政府部门办理手续',
        description: '向公司注册处递交所有文件，办理相关注册手续。'
    },
    {
        iconId: '#icon-file-success',
        title: '完成注册及领取资料',
        description: '约2-3个月完成注册，领取公司证书、章程等全套资料。'
    },
    {
        iconId: '#icon-positive-dynamics',
        title: '后续年报及纳税申报',
        description: '公司每年需向省政府递交年报，并向联邦税务局交纳入息税。'
    }
]

const advantage = [
    {
        iconId: '#icon-trophy',
        adv: '注册便捷成本低廉，注册资本无要求，公司名称选择自由。'
    },
    {
        iconId: '#icon-earth',
        adv: '产品自由进入北美和英联邦国家，提升企业国际形象。'
    },
    {
        iconId: '#icon-bank-transfer',
        adv: '可在海外银行开设账户，资金进出自由，合理避开外汇管制。'
    },
    {
        iconId: '#icon-award-line',
        adv: '招商引资享有优惠，在内地投资可享受地方政府的优惠政策。'
    },
    {
        iconId: '#icon-degree-hat',
        adv: '建立个人信用等级，对个人或公司信贷、房贷及加拿大移民申请有帮助。'
    },
    {
        iconId: '#icon-team-line',
        adv: '股份公司股东责任有限，公司存续连续性强，股权转让容易。'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '快速通道服务',
        description: '外国投资者注册企业可以享受快速通道服务，并可以通过无纸化电子方式提交申请，仅需二周时间即可完成注册。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '经验丰富，大量成功案例',
        description: '十洲通以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '提供专业增值服务',
        description: '十洲通在境外拥有自己的团队，协助客户提供综合全面的财务、税务、法律等服务，做到"在外有十洲通，更快捷"。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '专业专属商务对接和支持',
        description: '顾问、咨询师、会计师等建立计划小组，负责客户一对一的咨询、案子进度和客户协调计划等服务工作。'
    }
]

const faqs = ref([
    {
        question: "加拿大股份公司有什么特点？",
        answer: "特点包括：股东责任有限，不对超出其股份比例的公司债务负责；公司存在的连续性，股东变更不影响公司存续；股权转让容易。"
    },
    {
        question: "加拿大公司年报包括什么？",
        answer: "每年要向省政府公司注册处递交年报，内容包括：公司董事名单、地址及交纳费用。若两年欠交公司注册费用，公司会被取消。"
    },
    {
        question: "加拿大公司一定要交纳入息税吗？",
        answer: "加拿大公司在注册后，可以经营任何合法生意，但须每季度向加拿大联邦税务局交纳入息税。如果公司暂时未经营，也需要填交报表并告之税务局。"
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