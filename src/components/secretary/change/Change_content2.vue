<template>
    <div class="change_content2">
        <div class="content_box">
            <!-- 1. 简介概述 -->
            <div class="content1">
                <div class="title">
                    香港公司变更基本流程
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK.jpg" alt="香港公司变更">
                    <div class="text">
                        <P>
                            在香港，公司股东和董事的变更可以通过简单的程序进行。股东和董事的变更须经过股东会或董事会的决议，随后进行相应的文件申报。这一过程通常包括向香港公司注册处提交相关文件和表格，以及支付响应的费用。
                        </P>
                        <P>
                            转股和转董的操作，不仅是公司结构调整的必要步骤，也是在公司治理中不可或缺的一部分。对于股东的变更，明确新股东和股份分配；对于董事更换，填写表格以完成新的责任承接。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 具体办理流程步骤 -->
            <div class="content4">
                <div class="title">
                    转股与转董详解流程
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

            <!-- 3. 所需必要资料清单 -->
            <div class="content3">
                <div class="title">
                    所需必要资料清单
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">基础资料：公司注册证书副本、现任和新任的董事和股东身份证明。</div>
                        <div class="condition-item">会议证明：董事会或股东会的决议通过文件，以及确定的会议记录。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">地址与财务：股东及董事的地址证明文件（如水电费单、银行对账单）。</div>
                        <div class="condition-item">转让协议：若是股份转让，需提供原股东等签署完成的股份转让协议。</div>
                    </div>
                </div>
            </div>

            <!-- 4. 专业代办优势 -->
            <div class="content5">
                <div class="title">
                    专业秘书公司的优势
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
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

            <!-- 5. 常见问题解答 -->
            <div class="content6">
                <div class="title">
                    常见问题及解答
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
import '@/css/secretary/change/Change_content2.css'

gsap.registerPlugin(ScrollTrigger)

// Process steps
const processSteps = [
    {
        iconId: '#icon-peoples', 
        title: '会议决议',
        description: '召开股东会或董事会，讨论更换事宜并签署形成正式更名决议'
    },
    {
        iconId: '#icon-doc-success', 
        title: '准备文件',
        description: '拟定签署股份转让协议、新任董事及股东的接受任命信等证明'
    },
    {
        iconId: '#icon-upload-one', 
        title: '提交审核',
        description: '填写《公司注册处所需表格》向注册处递交变更申请并缴费'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '成功变更',
        description: '获得公司注册处的审批及批准，并更新股东及其董事名册'
    }
]

// Our advantages
const advantages = [
    {
        iconId: '#icon-protect', 
        title: '规避风险',
        description: '我们拥有专业的团队，熟悉香港公司法律规定，有效规避潜在的法律风险'
    },
    {
        iconId: '#icon-shield-add', 
        title: '一站式服务',
        description: '提供一对一的咨询与一站式处理，全面负责各项文件的材料准备和提交工作'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: '高效省时',
        description: '客户无需亲自奔波于各个政府部门，快速解决，为您节省了时间和精力'
    },
    {
        iconId: '#icon-doc-success', 
        title: '后续跟进',
        description: '及时更新并传达公司的各类登记证书变化情况，消除您的合规隐患'
    }
]

const faqs = ref([
    {
        question: "需要多长时间才能完成变更？",
        answer: "通常情况下，整个变更登记过程从决议形成到获得公司注册处的批准，约需1-2周（一般通常为7个工作日完成），具体时间受公司注册处的实际审批速度影响。"
    },
    {
        question: "如果我在海外，如何办理？",
        answer: "如果股东及董事等人员身在海外，可以通过填写并签署相关的授权书，委托专业秘书公司利用线上及函件进行全程办理，变更进度信息同样也会及时反馈给您。"
    },
    {
        question: "股份转移是否需要提供原股东的同意？",
        answer: "是的，原股东需签署一份转让协议，用来明确表示同意并将指定的部分或者全部股份数量依法转让过户给新股东。"
    },
    {
        question: "办理变更费用一般是多少？",
        answer: "政府的各项变更登记费相对透明，一般只需几百港元左右。选择专业秘书公司代为申请将产生一定范围的服务费，但确保能快速及高效无误地完成好相关的手续办理。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.change_content2 .content1',
        '.change_content2 .content4',
        '.change_content2 .content3',
        '.change_content2 .content5',
        '.change_content2 .content6'
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
