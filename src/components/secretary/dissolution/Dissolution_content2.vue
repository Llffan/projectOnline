<template>
    <div class="dissolution_content2">
        <div class="content_box">
            <!-- 1. 简介概述 -->
            <div class="content1">
                <div class="title">
                    香港公司注销指南
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK.jpg" alt="香港公司注销">
                    <div class="text">
                        <P>
                            当您的香港公司不再需要运营时，正确地解散并注销公司是非常重要的法定义务。未合法注销可能导致罚款乃至被诉讼，合理闭业可以切断连带风险。
                        </P>
                        <P>
                            香港公司注销需满足全体股东同意、无未清偿债务、税务合规等条件。其核心流程包括税务清算、提交申请、3个月宪报公告期及注册处最终审批，通常耗时6-8个月，政府涉及规费约1920-2420港元。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 注销条件 -->
            <div class="content5">
                <div class="title">
                    注销核心条件（缺一不可）
                </div>
                <div class="intro">
                    <div v-for="(item, index) in conditionsList" :key="index" class="advantage">
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

            <!-- 3. 具体办理流程步骤 -->
            <div class="content4">
                <div class="title">
                    公司注销办理流程
                </div>
                <div class="intro">
                    <div v-for="(item, index) in processSteps" :key="index" class="advantage">
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

            <!-- 4. 所需必要资料清单 -->
            <div class="content3">
                <div class="title">
                    注销所需材料清单
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">公司文件：需提交公司注册证书、商业登记证扫描件以及最新周年申报表。</div>
                        <div class="condition-item">股东决议书：全体股东签署的同意注销协议，并需注明相关债务处理方案。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">税务证明：税务局颁发的《不反对通知书》、审计报告及税务清缴记录证明。</div>
                        <div class="condition-item">债务声明：公司内外部负债清算完毕的债权债务清单及有关的结清偿还凭证。</div>
                    </div>
                </div>
            </div>

            <!-- 5. 常见问题解答 -->
            <div class="content6">
                <div class="title">
                    关于费用与时间的常见问答
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
                            <div style="white-space: pre-line;">{{ faq.answer }}</div>
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
import '@/css/secretary/dissolution/Dissolution_content2.css'

gsap.registerPlugin(ScrollTrigger)

// Core conditions list
const conditionsList = [
    {
        iconId: '#icon-peoples', 
        title: '股东一致同意',
        description: '公司注销必须取得全体成员（股东）的同意并需签署书面决议书，明确注销意愿'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: '停止运营超3个月',
        description: '公司从未实质开业，或在此之前必须处于停业状态达3个月以上，并且无任何业务交易'
    },
    {
        iconId: '#icon-doc-success', 
        title: '无未清偿债务',
        description: '无尚欠税务、政府规费、员工薪资以及供应商欠款，并可提供全部结清清偿的证明'
    },
    {
        iconId: '#icon-shield-add', 
        title: '税务与合规正常',
        description: '不仅需完成全部税务申报以取得税务局书面首肯，期间还不能涉及任何诉讼或政府调查'
    }
]

// Process steps
const processSteps = [
    {
        iconId: '#icon-audit', 
        title: '税务清算',
        description: '约1-2月，向税务局提交IR1263表等资料清缴税款，取得《不反对通知书》'
    },
    {
        iconId: '#icon-doc-success', 
        title: '申请注销',
        description: '1个月内，持《不反对通知书》向香港公司注册处递交NDR1表格及有关材料并缴费'
    },
    {
        iconId: '#icon-protect', 
        title: '登报公告',
        description: '约3个月，注册处审核后会在宪报上刊登注销公告，公示期内如无反对方可继续进行'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '完成闭结',
        description: '约2-3月，全部通过后注册处将最终发放《注销证书》，标志公司彻底告终，档案保管5年'
    }
]

const faqs = ref([
    {
        question: "公司注销一般需要花多长时间？",
        answer: "通常情况下，如果税务合规且报表清晰齐全，香港公司注销从第一步税务清算至最终拿到注销证书，一般耗时在 6 到 9 个月左右。"
    },
    {
        question: "如果在注销前查出有漏报税款怎么办？",
        answer: "如果有未缴清的税款或没完成的往期审计报税问题，需先把账目补齐并缴纳税款及可能的滞纳金（年利率罚款通常约8%），否则无法取得税务局《不反对撤销注册通知书》。"
    },
    {
        question: "整个注销流程需要政府开支费用吗？",
        answer: "注销本身包含政府杂项规费（诸如NDR1提交费等约420港元，有时加上税局通知费270港元等），通常直接缴纳给政府的总体基本开支预算约在1920-2420港元上下徘徊（未含审计清算补账的第三方服务费）。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.dissolution_content2 .content1',
        '.dissolution_content2 .content5',
        '.dissolution_content2 .content4',
        '.dissolution_content2 .content3',
        '.dissolution_content2 .content6'
    ]

    sections.forEach(section => {
        gsap.from(section, {
            autoAlpha: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                once: true
            }
        })
    })
})
</script>
