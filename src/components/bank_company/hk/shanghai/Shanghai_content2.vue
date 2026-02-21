<template>
    <div class="shanghai_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    上海商业银行（香港）简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/ShangHai.png" alt="上海商业银行（香港）">
                    <div class="text">
                        <P>上海商业银行（香港）上海商业银行有限公司于1950年11月在香港注册成立，发展至今逾半个世纪，在香港、内地及海外设有超过50间分行，业务网络遍及英国、美国及上海、深圳等地。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    上海商业银行（香港）开户优势
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
                    开户所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0037ff7e;">企业开户所需资料</div>
                        <div class="condition-item">公司基础资料：公司注册证书、其后的公司更改名称证书及有效商业登记证</div>
                        <div class="condition-item">章程文件：组织章程大纲及细则 / 章程细则</div>
                        <div class="condition-item">股份流转证明（如适用）：若有转让股份，需提供商业性质、商品类型、年度营业额/损益表、供应商及客户合约发票</div>
                        <div class="condition-item">董事资料详述：董事的职业资料、手机号码及电邮地址等联系信息</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0037ff7e;">个人开户所需资料</div>
                        <div class="condition-item">身份证明材料：申请人本人的有效个人身份证</div>
                        <div class="condition-item">通行过境材料：出入境护照或港澳通行证等原件</div>
                        <div class="condition-item">居住地址证明（补充）：如需填写企业配套等业务，请补充有效的居住地址证明</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    上海商业银行（香港）开户流程
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
                    上海商业银行（香港）常见问题
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
import '@/css/bank_company/hk/shanghai/Shanghai_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料整理',
        description: '准备企业或者个人的开户证明材料'
    },
    {
        iconId: '#icon-communication', 
        title: '提交资料',
        description: '递送相关资料给银行机构进行初步预审'
    },
    {
        iconId: '#icon-city', 
        title: '银行面签',
        description: '审核通过后前往指定银行的网点进行面签'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '成功下户',
        description: '顺利完成审批流程并成功下发账户'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-transaction', 
        title: '贸易资金自由',
        description: '无缝对接海外贸易，实现全球资金往来全无外汇管制'
    },
    {
        iconId: '#icon-world', 
        title: '资产高国际化',
        description: '拥有香港银行账户辅助，以便捷地实现全球贸易投资或消费'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: '取现方便自由',
        description: '本地开设的专精账户下发配套现金卡与支票本，可在港自由取现'
    }
]

const faqs = ref([
    {
        question: "上海商业银行（香港）下户时间是多久？",
        answer: "上海商业银行（香港）下户时间是2-3周。"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.shanghai_content2 .content1',
        '.shanghai_content2 .content2',
        '.shanghai_content2 .content3',
        '.shanghai_content2 .content4',
        '.content_bank',
        '.shanghai_content2 .content6'
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
