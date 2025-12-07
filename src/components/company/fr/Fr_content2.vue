<template>
    <div class="fr_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    法国公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/fr/FR-2.jpg" alt="">
                    <div class="text">
                        <P>法国是最发达国家之一，实行自由贸易政策，与欧盟内各国及美国建立了紧密关系，商品能自由便捷地在欧美销售。</P>
                        <P>随着中欧贸易深化和协定落地，中欧双方市场将更加开放。欧洲市场，特别是法国，是我们未来最重要的市场之一。</P>
                        <P>在欧盟VAT代扣代缴政策实施后，注册法国公司能以自我申报方式缴税，将极大减轻非欧盟卖家商品销售的增值税负担。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    法国公司注册优势
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
                        <div class="condition-item">公司成员要求：至少一位年满18周岁的法人和股东，可为同一人。</div>
                        <div class="condition-item">董事/股东国籍：法人和股东没有国籍限制，可为在法居住者或境外非法国籍人士。</div>
                        <div class="condition-item">法定秘书：要求必须有一位法定秘书（法籍自然人或法团公司）。</div>
                        <div class="condition-item">注册地址：必须位于法国，合规真实，我司提供巴黎市中心商业地址。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">注册资本：最低1欧元，SARL类型无需实缴，可先注册后开户。</div>
                        <div class="condition-item">公司名称：可以是法语或英文，不能和已注册的名称相同或相似。</div>
                        <div class="condition-item">名称限制：特殊字眼如“银行”、“保险”等敏感行业需取得相关牌照。</div>
                        <div class="condition-item">公司章程：必须根据法律要求具备公司章程（注册时一并出具）。</div>
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
                    注册法国公司常见问题
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
import '@/css/company/fr/Fr_content2.css' 

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        img: '',
        title: '填写委托书及签署协议',
        description: '填写注册委托书、签署办理协议，并准备公司名称。'
    },
    {
        img: '',
        title: '准备公证文件',
        description: '准备公司成员、法定秘书及地址证明文件等全套资料。'
    },
    {
        img: '',
        title: '安排银行开户及验资',
        description: '安排到CIC银行（或其他银行）开户及验资（SARL类型可先注册后开户）。'
    },
    {
        img: '',
        title: '提交公司章程及文件公证',
        description: '准备公司章程，并在法院进行商业登记。'
    },
    {
        img: '',
        title: '政府部门审核及登报',
        description: '政府部门办理相关手续，审核完成后进行登报公示。'
    },
    {
        img: '',
        title: '完成注册及领取资料',
        description: '约15个工作日完成注册，获得KBIS、TVA/EOR号、章程等全套资料。'
    }
]

const advantage = [
    {
        img: '',
        adv: '减轻欧盟内商品销售增值税负担，可选择自我申报。'
    },
    {
        img: '',
        adv: '注册维护成本低、管理方便、政策宽松，流程简单。'
    },
    {
        img: '',
        adv: '有利于打造国际品牌，国际诚信度和法律地位高。'
    },
    {
        img: '',
        adv: '有助于减少企业成本，减少采购中间环节和贸易壁垒。'
    },
    {
        img: '',
        adv: '国际法律地位高，受欧洲联盟保护，利于迅速提升企业形象。'
    },
    {
        img: '',
        adv: '可自由在法国境内或境外经营，并可于法国境内外设立公司银行账号。'
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
        question: "注册法国公司需要准备什么资料？",
        answer: "所需材料包括：《咨询服务合约》、股东身份证复印件或护照、委托书、无犯罪记录证明、营业执照副本复印件、公司简介、公司名称（备选）、注册资本到位证明、地址证明、公司章程、法定董事身份证明/资信证明等。"
    },
    {
        question: "法国公司需要做审核报告吗？",
        answer: "公司每年需委任当地会计师做公司审核报告，除非公司满足以下任一条件可免：雇员少于50名；营业额低于2千万法朗；资产净值低于1千万法朗。"
    },
    {
        question: "法国公司税制如何？",
        answer: "法国公司税金包括年度基税（IFA，必缴税种，约750欧元/年）、营业税（TP，各地税率不同，巴黎市区约5.5%）和增值税（TVA，全国统一税率19.6%）。"
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