<template>
    <div class="hague_notary_content2">
        <div class="content_box">
            <!-- 1. 服务范围 -->
            <div class="content1">
                <div class="title">
                    海牙认证服务范围
                </div>
                <div class="intro">
                    <div class="hague-text-container">
                        
                        <p class="desc-text">
                            海牙认证是《取消外国公文书认证要求的公约》规定的、用以<strong>简化公文跨国流转手续</strong>的国际证明方式。其核心是“附加证明书 (Apostille)”，一枚加盖或附在公文书上的特殊印章，用以证明文书上签名的真实性、签署人身份及印章属实。
                        </p>
                        <p class="desc-text">
                            对于中国用户而言，最关键的变化是：<strong>自2023年11月7日起，《海牙公约》已在中国正式生效</strong>。这意味着：
                        </p>

                        <div class="implication-cards">
                            <div class="card outgoing">
                                <div class="card-header">
                                    <div class="icon">🚀</div> <!-- Using emoji as quick icon, user can change later or we use svg -->
                                    <h4>文书出国</h4>
                                </div>
                                <p>中国的公文书只需办理一次“附加证明书”，即可送往其他缔约国使用，无需再办理目的国驻华使领馆的领事认证。</p>
                            </div>
                            <div class="card incoming">
                                <div class="card-header">
                                    <div class="icon">📨</div>
                                    <h4>文书来华</h4>
                                </div>
                                <p>其他缔约国公文书送往中国，也只需在该国办理“附加证明书”，无需中国驻当地使领馆的领事认证。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. 海牙认证的范围 -->
            <div class="content2">
                <div class="title">
                    海牙认证的范围
                </div>
                <div class="intro">
                    <div class="doc-card" v-for="(doc, index) in documentTypes" :key="index">
                        <div class="card-header">
                            <div class="icon-circle">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="doc.iconId"></use>
                                </svg>
                            </div>
                            <h3>{{ doc.title }}</h3>
                        </div>
                        <div class="card-body">
                            <p>{{ doc.content }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 海牙认证视察滚动 -->
            <div class="hague_parallax">
                <div class="parallax_bg">
                    <div class="cover_layer"></div>
                    <div class="text_content">
                        <h2>海牙认证所需资料</h2>
                        <p class="desc">
                            海牙公约组织成员国/地区，目前成员国/地区有102个。如德国、法国、韩国、美国、日本、澳大利亚、中国香港 及中国澳门都是公约成员国/地区。但中国大陆并不是海牙公约成员国/地区之一，这时候就需要办理使馆认证。
                        </p>
                    </div>
                </div>
                
                <div class="cards_container">
                    <div class="hague_card">
                        <div class="icon_wrap">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-award-line"></use>
                            </svg>
                        </div>
                        <span>申请人身份证或护照</span>
                    </div>
                    <div class="hague_card">
                        <div class="icon_wrap">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-notes"></use>
                            </svg>
                        </div>
                        <span>申请人信息表</span>
                    </div>
                    <div class="hague_card">
                        <div class="icon_wrap">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-audit"></use>
                            </svg>
                        </div>
                        <span>需认证的文件</span>
                    </div>
                </div>
            </div>

            <!-- 海牙认证程序 -->
            <div class="content5">
                <div class="title">
                    海牙认证程序
                </div>
                <div class="subtitle">Information needed for certification</div>
                <div class="intro">
                    <template v-for="(step, index) in hagueSteps" :key="index">
                        <div class="step-box">
                            {{ step.name }}
                        </div>
                        <div class="arrow" v-if="index < hagueSteps.length - 1">
                            <i class="double-arrow"></i>
                        </div>
                    </template>
                </div>
            </div>

            <!-- 选择我们 -->
            <ChooseUs />

            <!-- 5. 常见问题 -->
            <div class="content6">
                <div class="title">
                    海牙认证常见问题
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
import '@/css/notary/hague/HagueNotary_content2.css'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



const documentTypes = [
    { 
        title: '个人类文件', 
        content: '结婚证认证；出生证认证；离婚书认证；领养；寄养；亲属关系；死亡证明；工作经历；授权书认证；声明书；绿卡认证；护照认证；邀请函；单身证明；判决书；遗嘱；犯罪记录；房产证；成绩单；学历证书；职业资格证书；医学证明；等等均可以办理认证；', 
        iconId: '#icon-notes' 
    },
    { 
        title: '公司类文件', 
        content: '注册证书；法人资格；协议书；合同书；授权书认证；声明书；证明书；委派书；商标证书；资产证明；资信证明；董事信息；股东信息；公司章程；会议记录；公司更名文件；发票；原产地证；报关单；产品证书；产品介绍及其他公司文件等；', 
        iconId: '#icon-finance' 
    },
    { 
        title: '第三方机构类文件', 
        content: '政府网站宣传内容；警署信件；海关报告；政府报告等等；', 
        iconId: '#icon-world' 
    }
]

const certTypes = [
    { title: '海牙国际认证', desc: 'Convention De La Haye Du Octobre 1961。海牙公约成员国/地区，目前成员国/地区有102个。' },
    { title: '国际证书认证', desc: 'International Certificate Of Authentication (apostille)' },
    { title: '公司查册与认证', desc: 'Company Search And Documents Certification' }
]

const hagueSteps = [
    { name: '申请人提交认证文件' },
    { name: '国际律师公证' },
    { name: '高等法院加签/外交部认证' }
]

const commercialCerts = [
    { title: '原产地证明', desc: '签发各类我国出口货物的原产地证、加工装配证明书、转口证明书' },
    { title: 'ATA单证书', desc: '国际通用的海关通关文件' },
    { title: '商事证明书', desc: '各类合同、信用相关的文书、商业委托书、授权书、国家相关机构出具的证明认可等皆可办理（如：原产地证、商业发票、报关单、装箱单、提单、商检证、保险单、ISO证书等）。' },
    { title: '代办领事认证', desc: '领事认证的文件范围十类（如：原产地证、商业发票、报关单、装箱单、提单、商检证、保险单...）' },
    { title: '企业信用', desc: '提供信用认证、企业查询、经贸数据、贸易商机、金融支持、品牌建设等六大版块信用服务。' },
    { title: '品牌认证书', desc: '品牌认证对于提高产品卖点、吸引消费者以及增强企业竞争力都具有极大意义' },
    { title: '不可抗力证明书', desc: '为规范不可抗力事实性证明，确保认证工作合规高效开展，帮助企业维护自身合法权益' }
]

const faqs = ref([
    {
        question: "什么是海牙认证（Apostille）？",
        answer: "海牙认证是指由海牙成员国政府机构统一出具的，对原认证的签发人进行的二级认证，并在认证书上加盖印章或标签。因中国大陆已于2023年正式成为《海牙公约》成员国，缔约国之间跨国流转的文件，均只需办理海牙认证即可，无需再进行繁琐的领事/使馆双认证。"
    },
    {
        question: "海牙认证和使馆认证有什么区别？",
        answer: "主要区别在于流程、时间和适用范围。海牙认证仅需由当地具资质的国际律师或公证人公证，再交由该国高等法院或外交部门加签即告完成，用时短，且可以在所有海牙缔约国通用。使馆认证则在此基础上，还需耗费更多时间送往目的国驻当地代表馆进行最终盖章，且认证书仅限该特定目的国使用。"
    },
    {
        question: "办理海牙认证一般需要多长时间？",
        answer: "不同国家和地区的办理时间会有所差异。通常情况下资料齐全的话，大部分主流国家或地区（如中国香港、美国、英国等）的海牙认证办理时间大约在3-7个工作日左右。极少数特殊文件可能会需要更长的时间开展背景核查。"
    },
    {
        question: "哪些国家可以使用海牙认证？",
        answer: "截至目前，《海牙公约》成员国及地区已超过120个，涵盖了几乎所有主要经济体，包括中国（含香港和澳门地区）、美国、英国、日本、韩国、德国、法国、澳大利亚、俄罗斯等。在这些国家及地区之间互相流转的公证文件，都享受海牙认证的便利待遇。"
    },
    {
        question: "所有的文书都可以办理海牙认证吗？",
        answer: "绝大部分民事及商事文书均可办理。常见的例如个人证件（出生证、结婚证、授权书、无犯罪证明或学位证明等）、公司文件（注册证书、章程、董事名册、商业合同等）。但部分直接涉及海关免税和纯商业通关运作（如报关单）、或是特定政府豁免性质的文书可能除外。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    // Animations for standard sections
    // Note: To avoid ChooseUs flashing, we exclude .choose_us from .content5 since ChooseUs component has both classes.
    const standardSections = ['.content1', '.content2', '.content5:not(.choose_us)', '.choose_us', '.content6'];
    
    standardSections.forEach(section => {
        // Animate the section as a whole so the title, subtitle, and intro appear together
        gsap.fromTo(`.hague_notary_content2 ${section}`, 
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                scrollTrigger: { trigger: `.hague_notary_content2 ${section}`, start: 'top 80%' }
            }
        )
    })
})
</script>
