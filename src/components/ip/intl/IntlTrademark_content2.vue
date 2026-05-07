<template>
    <div class="intl_trademark_content2">
        <div class="content_box">
            <!-- 1. 全球商标注册简介 -->
            <div class="content1">
                <div class="title">国际商标服务简介</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/core-business.jpg" alt="全球商标注册" class="intro-img">
                    <div class="text-container">
                        <p class="desc-text">
                            商标是用来区别不同经营者的商品或服务的标志，是企业进行生产、制造、加工、销售、市场拓展和服务的必备条件。商标包括文字、图形、字母、数字、三维标志和颜色组合，以及上述要素的组合，只有经国家商标局核准注册的商标，才受法律保护。
                        </p>
                        <p class="desc-text">
                            中国企业可以通过商标局，根据《国际商标注册马德里协定》和《商标国际注册马德里协定有关议定书》申请国际商标注册、并根据自己的需要在一国、多国或全部成员国内申请保护。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 2. 为什么要注册国际商标 -->
            <div class="content2">
                <div class="title">为什么要注册国际商标</div>
                <div class="intro">
                    <div v-for="(item, index) in benefits" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text1">{{ item.title }}</div>
                        <div class="text2">{{ item.desc }}</div>
                    </div>
                </div>
            </div>

            <!-- 3. 注册国际商标所需资料 -->
            <div class="content3">
                <div class="title">注册国际商标所需资料</div>
                <div class="intro">
                    <div class="materials-grid">
                        <div class="material-card" v-for="(m, i) in materials" :key="i">
                            <div class="card-idx">{{ i + 1 }}</div>
                            <div class="card-title">{{ m.title }}</div>
                            <div class="card-desc">{{ m.desc }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 4. 国际商标注册流程 -->
            <div class="content4">
                <div class="title">国际商标注册流程</div>
                <div class="process-container">
                    <div class="process-steps">
                        <div v-for="(step, index) in steps" :key="index" class="step">
                            <div class="step-num">{{ index + 1 }}</div>
                            <div class="step-text">{{ step }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 选择我们 -->
            <ChooseUs />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">全球商标注册常见问题</div>
                <div class="intro">
                    <div 
                        v-for="(faq, index) in faqs" 
                        :key="index" 
                        class="faq-item"
                        :class="{ 'expanded': expandedItems[index] }"
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
                            v-html="faq.answer"
                        >
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
import '@/css/ip/intl/IntlTrademark_content2.css'
import ChooseUs from '@/components/ip/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
    { iconId: '#icon-earth', title: '拓展海外市场', desc: '全球贸易企业的必经之路，越早拓展海外市场受益越大。' },
    { iconId: '#icon-protection', title: '保护自有品牌', desc: '防止品牌被对手恶意盗用或抢注，有效保护合法权益。' },
    { iconId: '#icon-consume', title: '入驻海外电商', desc: '入驻海外亚马逊、速卖通、eBay、Wish的必备门票。' },
    { iconId: '#icon-diamond', title: '包装国内品牌', desc: '国外商标国内用，提升品牌溢价、形象和竞争力。' }
]

const materials = [
    { title: '申请人资格证明', desc: '公司名义申请提供营业执照复印件；个人名义提供身份证或护照复印件。' },
    { title: '商标图样', desc: '长宽在5cm-10cm之间，JPG格式电子档。' },
    { title: '商品或服务清单', desc: '需严格按照《商标注册用商品和服务分类表》列举。' },
    { title: '商标注册委托书', desc: '由我司提供，用于委托代理商标注册业务。' }
]

const steps = [
    '查询商标能否注册', '提交注册申请', '核实并递交商标局', '商标局形式审查',
    '下发受理书', '实质审查', '公示期', '下发注册证书'
]

const faqs = ref([
    {
        question: "国际商标注册有哪些注意事项？",
        answer: "1. 国际商标注册申请必须与国内商标注册人名称一致。<br/>2. 商标图样必须与国内申请注册的商标图样完全相同。<br/>3. 申请书中的商品或服务不得超过国内申请注册的范围。<br/>4. 超过三个类别的需缴纳附加注册费。<br/>5. 建议在产品出口前办理注册以扫清障碍。"
    },
    {
        question: "哪些可以作为商标使用证据？",
        answer: "1. 规范开具的发票；<br/>2. 明确标注商标名称和注册号的合同或协议；<br/>3. 报纸、杂志、博览会等宣传广告；<br/>4. 标注商品名称的包装物印刷合同；<br/>5. 权威机构出具的产品检验报告。"
    },
    {
        question: "注册美国商标应注意什么？",
        answer: "1. 需要提供每个中文字的读音及英文翻译。<br/>2. 建议普通字体注册以获得更广保护范围。<br/>3. 彩色商标需具体说明每个部分的颜色。<br/>4. 需说明商标在商业、地理描述上是否有特殊含义。"
    },
    {
        question: "英国商标的用途及作用有哪些？",
        answer: "1. 专用权保障企业在英顺利发展品牌。<br/>2. 脱欧后需在英国单独注册以获保护。<br/>3. 是办理质检、卫检、条码等的必备条件。<br/>4. 有助于亚马逊欧洲站品牌备案，防止跟卖。"
    },
    {
        question: "注册澳大利亚商标有什么用处？",
        answer: "1. 进出口贸易：获得大量出口收入的主要保障。<br/>2. 品牌包装：提升澳洲原产产品的品牌形象和溢价。<br/>3. 电商平台：是入驻亚马逊澳大利亚站的必要条件。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = ['.content1', '.content2', '.content3', '.content4', '.content6']
    
    sections.forEach(section => {
        gsap.from(`.intl_trademark_content2 ${section}`, {
            autoAlpha: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: `.intl_trademark_content2 ${section}`,
                start: 'top 85%',
                once: true
            }
        })
    })
})
</script>
