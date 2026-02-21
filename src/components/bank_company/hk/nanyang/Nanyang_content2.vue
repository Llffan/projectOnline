<template>
    <div class="nanyang_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    南洋商业银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/NCB.jpg" alt="南洋商业银行">
                    <div class="text">
                        <P>
                            南洋商业银行（Nanyang Commercial Bank，NCB）于1949年12月15日由庄世平创办于中国香港，现为中国信达资产管理公司之附属公司。南商本著「以客为先、以礼待人」的服务宗旨及坚守「信誉第一、服务至上」的原则，以立足中国香港、面向世界，服务各地客户为己任。南商通过各种渠道为客户提供方便、快捷、高效、专业的银行服务，本行除在香港各区设有四十一家分行及多家投资服务中心、工商服务中心外，在美国三藩市均设有分行，并在中国内地成立全资附属公司—“南洋商业银行（中国）有限公司”，为客户提供全面银行服务。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    南洋商业银行开户优势
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage">
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

            <!-- 3. 所需资料 -->
            <div class="content3">
                <div class="title">
                    企业开户所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">关联公司资料</div>
                        <div class="condition-item">香港公司资料</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">2套购销合同</div>
                        <div class="condition-item">个人证件</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    南洋商业银行开户流程
                </div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage">
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

            <!-- 5. 我们的优势 -->
            <ChooseUs />

            <!-- 合作银行 -->
            <HK_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    南洋商业银行常见问题
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
import '@/css/bank_company/hk/nanyang/Nanyang_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-upload-one', 
        title: '第一步',
        description: '发资料预审'
    },
    {
        iconId: '#icon-phone-call', 
        title: '第二步',
        description: '预约内地南洋地点'
    },
    {
        iconId: '#icon-agreement', 
        title: '第三步',
        description: '按照要求到分行见证'
    },
    {
        iconId: '#icon-accept-email', 
        title: '第四步',
        description: '内地寄出文件到香港'
    },
    {
        iconId: '#icon-audit', 
        title: '第五步',
        description: '审批成功'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '第六步',
        description: '下户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: '便捷支付',
        description: '可方便的进行国际款项收付'
    },
    {
        iconId: '#icon-world', 
        title: '实时结算',
        description: '国际货币实时结算，不受限制'
    },
    {
        iconId: '#icon-protect', 
        title: '实力雄厚',
        description: '银行实力雄厚，安全有保障'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: '节约成本',
        description: '豁免各项手续费用，节约管理成本'
    }
]



const faqs = ref([
    {
        question: "南洋商业银行没有实体卡影响使用吗？",
        answer: "不受影响，电子账户应有的功能都有的。"
    },
    {
        question: "南洋商业银行开户没有护照可以办理吗？",
        answer: "香港南洋商业银行开户必须使用护照以及签证作为辅助证件。"
    },
    {
        question: "南洋商业银行出入资金方便吗？",
        answer: "方便的，支持EDDA、FPS快捷入金，实时到账免手续费。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    // Animate content sections including their titles as single units
    const sections = [
        '.nanyang_content2 .content1',
        '.nanyang_content2 .content2',
        '.nanyang_content2 .content3',
        '.nanyang_content2 .content3_1',
        '.nanyang_content2 .content4',
        '.nanyang_content2 .content5',
        '.content_bank',
        '.nanyang_content2 .content6'
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
