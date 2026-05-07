<template>
    <div class="mo_cgb_content2">
        <div class="content_box">
            <!-- 1. 银行简介 -->
            <div class="content1">
                <div class="title">
                    澳门广发银行简介
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/bank/mo/广发银行.png" alt="澳门广发银行">
                    <div class="text">
                        <P>
                            广东发展银行澳门分行，经中国人民银行和澳门政府批准，于1993年11月8日正式在澳门开始营业。位于中国澳门南湾大马路269-275。作为中国商业银行在境外开设的首家分行，该行提供的银行服务有：往来及储蓄存款、外币存款、定期存款、各类工商贷款、出入口押汇、楼宇按揭贷款、国内外汇款、外汇投资、代理各类保险及人民币兑换等。
                        </P>
                        <P>
                            其主要股东为广东省财政厅(42.7%)和中银集团 (14.m%)。该行一向注重为澳门社会各界提供多元化的银行服务，如楼宇分期抵押贷款、外汇投资和支票储蓄等多样化服务。1995年，该行在香港成功地发行了港元大额可转让存款证，资金实力进一步提高。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门广发银行开户优势
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
                        <div class="condition-item">身份证明文件：提供身份证、通行证或入境纸等过关证件</div>
                        <div class="condition-item">地址证明文件：住址证明单据（如水费、电费、物业管理费单）</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">业务与资质介绍：公司介绍信（由相对应的保险公司提供）</div>
                        <div class="condition-item">特殊声明情况：如仅使用身份证进行认证，需在开户时另行签署表格声明</div>
                    </div>
                </div>
            </div>

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门广发银行开户流程
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
                    澳门广发银行常见问题
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
import '@/css/bank_company/mo/cgb/Cgb_content2.css'
import MO_Cooperative_Bank from '@/components/bank_company/common/MO_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '提交预约',
        description: '提交资料和简单个人信息以便排期预约'
    },
    {
        iconId: '#icon-user', 
        title: '预审资料',
        description: '由银行官方机构与渠道团队先进行资质预审'
    },
    {
        iconId: '#icon-airplane', 
        title: '赴澳面签',
        description: '锁定档期后亲自赴澳门分行完成面签与办理'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '邮寄下发',
        description: '账户办理落成后银行邮寄卡片和密码器'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: '综合金融优势',
        description: '有效发挥综合金融特长优势以服务实业与实体经济'
    },
    {
        iconId: '#icon-world', 
        title: '差异定制化',
        description: '利用差异化策略深度服务科创企业项目的全生命周期'
    },
    {
        iconId: '#icon-finance', 
        title: '全品类供给',
        description: '针对科创企业与商业机构提共全品类金融产品供给方案'
    },
    {
        iconId: '#icon-city', 
        title: '多元化服务',
        description: '提供楼宇首按抵押、外汇投资和支票储蓄等多样化服务'
    }
]

const faqs = ref([
    {
        question: "澳门广发银行开户要存多少钱？",
        answer: "客户开户必须存入且保留 10,000 澳门币/港币定期 1 年期，到期本息续存，不可提取。 （另外需买保险，最少一年买300美金，一般买两年）。"
    },
    {
        question: "澳门广发银行存入外币现金要额外收取费用吗？",
        answer: "存入外币现金，首等值 HKD5 万不收费用，若是 > HKD5 万，则需按 0.05% 收取费用。"
    },
    {
        question: "澳门广发银行开户要多久时间？",
        answer: "一般情况下当天下户下卡。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_cgb_content2 .content1',
        '.mo_cgb_content2 .content2',
        '.mo_cgb_content2 .content3',
        '.mo_cgb_content2 .content4',
        '.content_bank',
        '.mo_cgb_content2 .content6'
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
