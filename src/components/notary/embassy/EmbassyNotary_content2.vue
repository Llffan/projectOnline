<template>
    <div class="embassy_notary_content2">
        <div class="content_box">
            <!-- 1. 公证与认证的核心区别 -->
            <div class="content1">
                <div class="title">
                    公证与认证的核心区别
                </div>
                <div class="intro">
                    <div class="embassy-text-container">
                        <p class="desc-text">
                            “使馆公证认证”通常涉及法律文书在跨国使用时的真实性证明。根据文书的出具国、使用国以及是否属于海牙公约成员国，办理流程和机构有所不同。
                        </p>
                        <div class="comparison-cards">
                            <div class="card notory-card">
                                <div class="card-header">
                                    <div class="icon">⚖️</div>
                                    <h4>公证 (Notarization)</h4>
                                </div>
                                <p>由公证处或公证人办理，证明文书上的签名、印鉴属实或文书内容真实。</p>
                            </div>
                            <div class="card legal-card">
                                <div class="card-header">
                                    <div class="icon">📜</div>
                                    <h4>认证 (Legalization)</h4>
                                </div>
                                <p>由外交部门或驻外使领馆办理。其目的是确认文书上最后一个印鉴或签名的真实性，使文书能在另一国产生法律效力。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. 常见场景及办理流程 -->
            <div class="content2">
                <div class="title">
                    常见场景及办理流程
                </div>
                <div class="intro">
                    <div class="scene-card" v-for="(scene, index) in scenes" :key="index">
                        <div class="card-header">
                            <div class="icon-circle">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="scene.iconId"></use>
                                </svg>
                            </div>
                            <h3>{{ scene.title }}</h3>
                        </div>
                        <div class="card-body">
                            <div class="process-steps-list">
                                <div v-for="(step, sIdx) in scene.steps" :key="sIdx" class="process-step-item">
                                    <span class="step-num">{{ sIdx + 1 }}</span>
                                    <span class="step-text">{{ step }}</span>
                                </div>
                            </div>
                            <p class="notice" v-if="scene.notice"><strong>注意：</strong>{{ scene.notice }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. 使领馆直接办理公证 -->
            <div class="embassy_parallax">
                <div class="parallax_bg">
                    <div class="cover_layer"></div>
                    <div class="text_content">
                        <h2>使领馆直接办理公证</h2>
                        <p class="desc">
                            中国驻外使领馆可直接为旅居海外的中国公民办理部分公证业务。
                        </p>
                    </div>
                </div>
                
                <div class="cards_container">
                    <div class="hague_card" v-for="(item, index) in directServices" :key="index">
                        <div class="icon_wrap">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use>
                            </svg>
                        </div>
                        <span>{{ item.text }}</span>
                    </div>
                </div>
            </div>

            <!-- 选择我们 -->
            <ChooseUs />

            <!-- 4. 办理要点 (FAQ style) -->
            <div class="content6">
                <div class="title">
                    使馆认证办理要点
                </div>
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
import '@/css/notary/embassy/EmbassyNotary_content2.css'
import ChooseUs from '@/components/notary/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const scenes = [
    {
        title: '外国文书送往中国使用',
        iconId: '#icon-world',
        steps: [
            '当地公证：由当地公证人（Notary Public）对文书进行公证。',
            '州务卿认证：送交所属州州务卿（Secretary of State）或相关部门办理认证。',
            '领事认证：最后由中国驻该国使领馆办理领事认证。'
        ],
        notice: '由于中国已加入《海牙公约》，对于同样是成员国的国家（如美国），现多采用办理附加证明书（Apostille）代替传统领事认证。'
    },
    {
        title: '中国文书送往外国使用',
        iconId: '#icon-finance',
        steps: [
            '国内公证：在当地公证处办理涉外公证书。',
            '外交部认证：由中国外交部或其委托的地方外办进行认证。',
            '使馆认证：由文书使用国驻华使领馆办理认证。'
        ]
    }
]

const directServices = [
    { text: '委托书、声明书公证', iconId: '#icon-notes' },
    { text: '指纹、签名属实公证', iconId: '#icon-audit' },
    { text: '海外远程视频公证服务', iconId: '#icon-communication' }
]

const faqs = ref([
    {
        question: "1. 预约与申请",
        answer: "通常需通过外交部认证业务系统或使馆官网预约办理。建议提前了解目的国使馆的具体预约规则，避免耽误行程。"
    },
    {
        question: "2. 办理时间",
        answer: "普通办理通常为 4 个工作日，加急可缩短至 2-3 个工作日。具体时间以使领馆实际签发为准。"
    },
    {
        question: "3. 代办规定",
        answer: "大多数公证认证事项可由他人代办，无需本人亲自到场。但部分特定文书（如指纹公证）可能需要本人亲自到场进行核验。"
    },
    {
        question: "4. 费用及缴费",
        answer: "使馆认证费用包含规费及可能的加急费。大部分使领馆支持在线支付或现场刷卡，具体标准根据文书类型和目的国政策有所不同。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const standardSections = ['.content1', '.content2', '.embassy_parallax', '.choose_us', '.content6'];
    
    standardSections.forEach(section => {
        gsap.fromTo(`.embassy_notary_content2 ${section}`, 
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                scrollTrigger: { trigger: `.embassy_notary_content2 ${section}`, start: 'top 80%', once: true }
            }
        )
    })
})
</script>
