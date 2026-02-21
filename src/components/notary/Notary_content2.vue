<template>
    <div class="notary_content2">
        <div class="content_box">
            <!-- 1. 服务范围 -->
            <div class="content1">
                <div class="title">
                    昶嘉捷国际公证认证服务范围
                </div>
                <div class="intro">
                    <div class="hague-text-container">
                        <h3>海牙公证认证 (Hague Apostille)</h3>
                        
                        <p class="desc-text">
                            海牙认证是《取消外国公文书认证要求的公约》规定的、用以<strong>简化公文跨国流转手续</strong>的国际证明方式。其核心是“附加证明书 (Apostille)”，一枚加盖或附在公文书上的特殊印章，用以证明文书上签名的真实性、签署人身份及印章属实。
                        </p>

                        <div class="highlight-box">
                            <p>
                                对于中国用户而言，最关键的变化是：<strong>自2023年11月7日起，《海牙公约》已在中国正式生效</strong>。这意味着：
                            </p>
                        </div>

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

            <!-- 2. 文件类型 -->
            <div class="content2">
                <div class="title">
                    公证认证文件类型
                </div>
                <div class="intro">
                    <div class="doc-item" v-for="(doc, index) in documentTypes" :key="index">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="doc.iconId"></use>
                        </svg>
                        <div class="text">
                            <h4>{{ doc.title }}</h4>
                            <p>{{ doc.enTitle }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. 认证类型 -->
            <div class="content3">
                <div class="title">
                    国际认证类型
                </div>
                <div class="intro">
                    <div class="cert-item" v-for="(cert, index) in certTypes" :key="index">
                        <h4>{{ cert.title }}</h4>
                        <p>{{ cert.desc }}</p>
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

            <!-- 4. 商事国际认证 -->
            <div class="content4">
                <div class="title">
                    商事国际认证
                </div>
                <div class="intro">
                    <div class="text-block" v-for="(item, index) in commercialCerts" :key="index">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </div>

            <!-- 5. 常见问题 -->
            <div class="content6">
                <div class="title">
                    国际认证常见问题
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
import '@/css/notary/Notary_content2.css'

gsap.registerPlugin(ScrollTrigger)



const documentTypes = [
    { title: '董事在职证明', enTitle: 'Certificate Of Incumbency', iconId: '#icon-audit' },
    { title: '公司存续证明', enTitle: 'Certificate Of Good Standing', iconId: '#icon-award-line' },
    { title: '个人身份证明核准拷贝', enTitle: 'Certified True Copy Of Id And PPT', iconId: '#icon-notes' },
    { title: '专业推荐信/资信证明', enTitle: 'Professional Reference Letter By Law Firm/Cpa/Banker', iconId: '#icon-finance' }
]

const certTypes = [
    { title: '海牙国际认证', desc: 'Convention De La Haye Du Octobre 1961。海牙公约成员国/地区，目前成员国/地区有102个。' },
    { title: '国际证书认证', desc: 'International Certificate Of Authentication (apostille)' },
    { title: '公司查册与认证', desc: 'Company Search And Documents Certification' }
]

const commercialCerts = [
    { title: '原产地证明', desc: '签发各类我国出口货物的原产地证、加工装配证明书、转口证明书' },
    { title: 'ATA单证书/商事证明书', desc: '国际通用的海关通关文件。各类合同、委托书、许可证、资信证明、ISO证书、商标、专利等。' },
    { title: '代办领事认证', desc: '商业单证（原产地证、发票、提单等）、涉外商贸证明文件（代理协议、营业执照、公证书等）以及民事文件。' },
    { title: '企业信用与品牌认证', desc: '提供信用认证、企业查询、贸易商机；品牌认证对提高产品卖点、增强竞争力具有重要意义。' }
]

const faqs = ref([
    {
        question: "国际公证的应注意哪些事项？",
        answer: "不同国家和地区对公证认证的要求不同，需提前确认使用目的和目的地要求。"
    },
    {
        question: "注册德国公司要公证吗？",
        answer: "通常需要。德国是海牙公约成员国，可能需要海牙认证（Apostille）。具体视用途而定。"
    },
    {
        question: "海外公司公证认证应注意什么？",
        answer: "注意文件的有效期，认证层级（公证人、外交部、使馆），以及翻译件的要求。"
    },
    {
        question: "国际公证申办程序是什么？",
        answer: "通常流程：1. 国际律师公证；2. 高等法院/外交部加签；3. 领事馆认证（非海牙国）。"
    },
    {
        question: "申请国际公证的当事人须提交什么材料？",
        answer: "根据办理事项不同而异。通常需提供申请人身份证或护照、需认证的文件原件/复印件、申请表格等。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    // Animations configuration
    const sections = ['.content1', '.content2', '.content3', '.content4', '.content6'];
    
    sections.forEach(section => {
        gsap.fromTo(`.notary_content2 ${section} .title`, 
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                scrollTrigger: { trigger: `.notary_content2 ${section}`, start: 'top 80%' }
            }
        )
        gsap.fromTo(`.notary_content2 ${section} .intro`, 
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power2.out',
                scrollTrigger: { trigger: `.notary_content2 ${section}`, start: 'top 80%' }
            }
        )
    })
})
</script>
