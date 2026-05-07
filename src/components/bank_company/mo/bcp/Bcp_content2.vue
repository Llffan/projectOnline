<template>
    <div class="mo_bcp_content2">
        <div class="content_box">
            <!-- 1. 银行简介 -->
            <div class="content1">
                <div class="title">
                    澳门葡萄牙商业银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/葡萄牙商业银行.png" alt="澳门葡萄牙商业银行">
                    <div class="text">
                        <P>
                            葡萄牙商业银行(Banco Comercial Portugues)。是一家葡萄牙银行，该银行成立于1985年，是葡萄牙排行前十银行之一，也是葡萄最大的私人银行。其总部位于波尔图，但其营运总部位于里斯本大奥埃拉斯。它拥有430万世界各地的客户和在葡萄牙拥有超过900家分行。葡萄牙商业银行是泛欧100种股票指数，新行政总裁为努诺·曼努埃尔·席尔瓦·阿马多。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门葡萄牙商业银行开户优势
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

            <!-- 3. 所需资料 (企业开户) -->
            <div class="content3">
                <div class="title">
                    企业开户所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">公司核定文件：公司整套资料备齐（注册证书、商业登记证等）</div>
                        <div class="condition-item">关联业务文件：提供业务合同（与香港、内地公司签的合同也可以）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">面签要求事项：公司董事亲自到澳门面签办理即可</div>
                        <div class="condition-item">结余资金管理：开户后2个月内汇入等值5万港币以启动账户并维持余额</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门葡萄牙商业银行开户流程
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
            <MO_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    澳门葡萄牙商业银行常见问题
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
import '@/css/bank_company/mo/bcp/Bcp_content2.css'
import MO_Cooperative_Bank from '@/components/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '递交预审',
        description: '选择意向后递交资料预审并签合同办理业务'
    },
    {
        iconId: '#icon-user', 
        title: '表单核实',
        description: '填写详细银行调查表格核实相关资质背景'
    },
    {
        iconId: '#icon-airplane', 
        title: '选择面签',
        description: '选择赴澳或不到场亲自办理见证手续手续'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '成功下户',
        description: '赴澳/内地分行当天下户，或邮寄文件2周下户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-phone', 
        title: '远程渠道',
        description: '拥有远程便捷灵活的渠道，支持使用电话和互联网银行服务'
    },
    {
        iconId: '#icon-finance', 
        title: '额度宽泛',
        description: '外资银行，国际汇款方便，无限额账户，汇入汇出无限制'
    },
    {
        iconId: '#icon-good-two', 
        title: '门槛亲和',
        description: '申请开户的准入门槛低且条件容易达成、审核周期相对较短'
    },
    {
        iconId: '#icon-world', 
        title: '多币种收付',
        description: '多币种账户，市面上主流10几种币种都可以接收及汇出'
    }
]

const faqs = ref([
    {
        question: "澳门葡萄牙商业银行开立帐户有哪些优势？",
        answer: "开户属于欧洲帐户，欧洲是世界贸易、经济中心之一，在国际地位上是不可或缺的，拥有欧洲帐户更方便，国际认可度更高。你要从欧元区36个成员国(SEPA)之间转款，只需1欧元的费用，并有一个工作天到达帐。"
    },
    {
        question: "澳门葡萄牙商业银行开户要多久时间？",
        answer: "常规的评估周期约4-6周左右下户。"
    },
    {
        question: "澳门葡萄牙商业银行汇入汇款要手续费吗？",
        answer: "在相应规定的条件下为免费。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_bcp_content2 .content1',
        '.mo_bcp_content2 .content2',
        '.mo_bcp_content2 .content3',
        '.mo_bcp_content2 .content4',
        '.content_bank',
        '.mo_bcp_content2 .content6'
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
