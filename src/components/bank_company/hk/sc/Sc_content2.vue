<template>
    <div class="sc_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港渣打银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/Standard_Chartered.jpg" alt="香港渣打银行">
                    <div class="text">
                        <P>渣打银行（又称标准渣打银行、标准银行）是一家总部在伦敦的英国银行。它的业务遍及许多国家，尤其是在亚洲和非洲，在英国的客户却非常少，2004年其利润的30%来自于香港地区。渣打银行的母公司渣打集团有限公司则于伦敦证券交易所及香港交易所上市，亦是伦敦金融时报 100指数成份股之一。渣打银行目前是香港三家发钞银行之一，另外两家分别是中国银行(香港)和汇丰银行(Hongkong and Shanghai Banking Corporation)。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港渣打银行开户优势
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
                        <div class="condition-item">香港公司资料：注册证书、商业登记证、法团成立表格NNC1或NAR1</div>
                        <div class="condition-item">董事及股东个人资料：身份证、通行证或护照</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">业务证明：国内公司营业执照、近三个月流水及销售采购发票各两份</div>
                        <div class="condition-item">特殊情况：服务行业提供服务合同即可；若无国内公司也可正常办理开户</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港渣打银行开户流程
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
                    香港渣打银行常见问题
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
import '@/css/bank_company/hk/sc/Sc_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料预审',
        description: '发送资料至银行进行预审'
    },
    {
        iconId: '#icon-city', 
        title: '预约面签',
        description: '预约渣打地点，按要求面签签字'
    },
    {
        iconId: '#icon-award-line', 
        title: '审批下发',
        description: '审批通过，银行寄出编码器密码信'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '办理完成',
        description: '成功激活账户并完成开户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-exchange-cny-line', 
        title: '资金调拨自由',
        description: '不受外汇管制限制，资金在全球范围内可完全自由调拨'
    },
    {
        iconId: '#icon-world', 
        title: '多币种账户',
        description: '自由兑换各种货币，储蓄保值并有效抵御单币种风险'
    },
    {
        iconId: '#icon-protect', 
        title: '账户操作简便',
        description: '日常操作简便，直接在国内网银操作即可，无需赴港去柜台办理'
    },
    {
        iconId: '#icon-finance', 
        title: '利率品种灵活',
        description: '存款利率及品种不受境内监管限制，大额存款可灵活定制'
    }
]

const faqs = ref([
    {
        question: "渣打银行开户见证是在内地就可以吗？",
        answer: "是的，根据实际情况，选择就近柜台亲临见证。"
    },
    {
        question: "香港渣打银行开户要多久时间？",
        answer: "3-4周"
    },
    {
        question: "香港渣打银行开户对年龄有要求吗？",
        answer: "需18岁以上，有一定收入和资产及良好的信用记录。"
    },
    {
        question: "香港渣打银行有实体卡吗？",
        answer: "有实体卡"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.sc_content2 .content1',
        '.sc_content2 .content2',
        '.sc_content2 .content3',
        '.sc_content2 .content4',
        '.content_bank',
        '.sc_content2 .content6'
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
