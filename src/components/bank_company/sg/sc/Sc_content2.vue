<template>
    <div class="sg_sc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    新加坡渣打银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/sg/渣打银行.png" alt="新加坡渣打银行">
                    <div class="text">
                        <P>新加坡渣打银行（Standard Chartered Bank）是渣打国际银行集团的一部分，在新加坡有160年的历史。1999年10月首批获得合格的全行（QFB）执照的国际银行之一，这是对集团在该国长期业务承诺的认可。新加坡渣打银行是全球评级最高的银行之一：标准普尔评级为A，穆迪投资者服务评级为AA3，惠誉评级为A。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    新加坡渣打银行开户优势
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
                        <div class="condition-item">BVI、香港、开曼等海外公司注册资料扫描件</div>
                        <div class="condition-item">关联的大陆/海外公司营业执照等材料</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">所有持股比例大于或等于10%的股东/董事资料</div>
                        <div class="condition-item">完整填写的KYC尽职调查信息表</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    新加坡渣打银行开户流程
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
            <SG_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    新加坡渣打银行常见问题
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
import '@/css/bank_company/sg/sc/Sc_content2.css'
import SG_Cooperative_Bank from '@/components/bank_company/common/SG_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '线上提交预审',
        description: '客户确定服务后线上提交KYC及身份文件申请初审'
    },
    {
        iconId: '#icon-communication', 
        title: '签署付款',
        description: '初审通过确认符合开户资质，签署电子协议并付款'
    },
    {
        iconId: '#icon-city', 
        title: '视频见证',
        description: '律师与客户进行视频审查，确认身份及见证签字'
    },
    {
        iconId: '#icon-airplane', 
        title: '开户办结',
        description: '收到签名文件后联系渣打办理开立并安排激活使用'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-bank-transfer', 
        title: '多币种账户',
        description: '提供包含常见外币等的多币种离岸账户，汇率优势极大'
    },
    {
        iconId: '#icon-world', 
        title: '不受外汇管制',
        description: '资金出境、入境自由，方便跨国企业实现全球资金调拨'
    },
    {
        iconId: '#icon-transaction', 
        title: '支持实体卡',
        description: '开户即带有实体银行卡，满足客户在国内ATM的取现需求'
    },
    {
        iconId: '#icon-good-two', 
        title: '操作简单便捷',
        description: '提供易上手的网银客户端系统，账户日常操作简捷明了'
    }
]

const faqs = ref([
    {
        question: "新加坡渣打银行开户我需要填写什么表格吗？",
        answer: "一份官方的开始表格，只需要签字，基本信息的录入这些脏活累活我们已经全部帮客户做完了。"
    },
    {
        question: "新加坡渣打银行开户要多久时间？",
        answer: "3-4周"
    },
    {
        question: "新加坡渣打银行资金汇回有什么限制？",
        answer: "新加坡渣打全球转账汇款无限制。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sg_sc_content2 .content1',
        '.sg_sc_content2 .content2',
        '.sg_sc_content2 .content3',
        '.sg_sc_content2 .content4',
        '.content_bank',
        '.sg_sc_content2 .content6'
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
