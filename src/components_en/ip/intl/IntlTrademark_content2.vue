<template>
    <div class="intl_trademark_content2">
        <div class="content_box">
            <!-- 1. Introduction -->
            <div class="content1">
                <div class="title">Overview of International Trademarks</div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/core-business.jpg" alt="Global Trademark Registration" class="intro-img">
                    <div class="text-container">
                        <p class="desc-text">
                            A trademark is a sign used to distinguish the goods or services of different operators. It is an essential requirement for production, manufacturing, marketing, and services. Trademarks can include words, graphics, letters, numbers, 3D signs, and color combinations. Legal protection is only granted to trademarks approved by the trademark office.
                        </p>
                        <p class="desc-text">
                            Enterprises can apply for international registration through the Madrid Agreement and the Madrid Protocol, seeking protection in one, multiple, or all member countries according to their needs.
                        </p>
                    </div>
                </div>
            </div>

            <!-- 2. Benefits -->
            <div class="content2">
                <div class="title">Why Register Internationally</div>
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

            <!-- 3. Required Materials -->
            <div class="content3">
                <div class="title">Required Materials</div>
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

            <!-- 4. Registration Process -->
            <div class="content4">
                <div class="title">Registration Process</div>
                <div class="process-container">
                    <div class="process-steps">
                        <div v-for="(step, index) in steps" :key="index" class="step">
                            <div class="step-num">{{ index + 1 }}</div>
                            <div class="step-text">{{ step }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why Choose Us -->
            <ChooseUs />

            <!-- 6. FAQs -->
            <div class="content6">
                <div class="title">Global Trademark FAQs</div>
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
import '@/css_en/ip/intl/IntlTrademark_content2.css'
import ChooseUs from '@/components_en/ip/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
    { iconId: '#icon-earth', title: 'Global Expansion', desc: 'The inevitable choice for global trade companies; earlier expansion leads to greater benefits.' },
    { iconId: '#icon-protection', title: 'Brand Protection', desc: 'Prevents brand squatting or theft by competitors, protecting your legal rights effectively.' },
    { iconId: '#icon-consume', title: 'E-commerce Entry', desc: 'A mandatory requirement for entering platforms like Amazon, AliExpress, eBay, and Wish.' },
    { iconId: '#icon-diamond', title: 'Brand Premium', desc: 'Use international trademarks to enhance brand premiums, image, and competitiveness.' }
]

const materials = [
    { title: 'Applicant Eligibility', desc: 'Copy of business license for companies; ID or passport copy for individuals.' },
    { title: 'Trademark Specimen', desc: 'Electronic file (JPG), between 5cm-10cm in length and width.' },
    { title: 'List of Goods/Services', desc: 'Listed strictly according to the International Classification of Goods and Services (NICE).' },
    { title: 'Power of Attorney', desc: 'Provided by our agency to authorize us to handle your trademark registration.' }
]

const steps = [
    'Check Availability', 'Submit Application', 'Verify & Forward to Office', 'Formal Examination',
    'Issue of Receipt', 'Substantive Review', 'Publication Period', 'Issue of Certificate'
]

const faqs = ref([
    {
        question: "What should I be aware of in international registration?",
        answer: "1. The applicant name must match the domestic owner.<br/>2. The specimen must be identical to the domestic version.<br/>3. The list of goods/services must not exceed the domestic scope.<br/>4. Additional fees apply for more than three classes.<br/>5. It is recommended to register before exporting products."
    },
    {
        question: "What can be used as evidence of trademark use?",
        answer: "1. Formally issued invoices;<br/>2. Contracts/agreements specifying the name and registration number;<br/>3. Ads in newspapers, magazines, or exhibitions;<br/>4. Printing contracts for packaging with the product name;<br/>5. Inspection reports from authoritative institutions."
    },
    {
        question: "Key points for US Trademark registration?",
        answer: "1. Pronunciation and translation required for non-English marks.<br/>2. Standard character marks recommended for broader protection.<br/>3. Detailed color descriptions required for color marks.<br/>4. Meaning of the mark in commerce or geography must be disclosed."
    },
    {
        question: "Uses and benefits of UK Trademarks?",
        answer: "1. Exclusive rights ensure smooth business development in the UK.<br/>2. Post-Brexit, separate UK registration is necessary for protection.<br/>3. Mandatory for quality/health inspections and barcodes.<br/>4. Essential for Amazon Europe brand registry to prevent hijacks."
    },
    {
        question: "Why register an Australian Trademark?",
        answer: "1. Export Trade: Major guarantee for export revenue.<br/>2. Brand Value: Enhances the premium image of products from Australia.<br/>3. E-commerce: Necessary for entering Amazon Australia."
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
        const el = `.intl_trademark_content2 ${section}`
        gsap.fromTo(el, 
            { 
                autoAlpha: 0, 
                y: 50 
            }, 
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                    // 动画完成后清除 GSAP 注入的 inline style，回归纯 CSS 布局
                    onComplete: () => gsap.set(el, { clearProps: "transform,opacity" })
                }
            }
        )
    })
})
</script>