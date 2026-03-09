<template>
    <div class="mo_icbc_asia_content2">
        <div class="content_box">
            <!-- 1. 银行简介 -->
            <div class="content1">
                <div class="title">
                    澳门工银亚洲银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/mo/工银亚洲银行.png" alt="澳门工银亚洲银行">
                    <div class="text">
                        <P>
                            澳门工银的前身是诚兴银行，于1972年成立，曾经是澳门第三大的银行。2009年，工商银行收购该银行79.9％股份，使其成为工商银行子公司。中国工商银行是第一家在大中华区发行预付借记卡的银行。它经营106家分行，包括在深圳专门从事外币批发业务的分行，在新加坡设有分行，并在厦门和台北设有代表处。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门工银亚洲银行开户优势
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
                        <div class="condition-item">香港公司全套资料（包括CR证书、BR证书、NNC1、公司章程和印章）</div>
                        <div class="condition-item">大陆居民合法身份证原件以及港澳通行证</div>
                        <div class="condition-item">3个月内的水电气费账单、银行月结单等地址证明资料</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国内公司的购销合同、贸易账户流水、贸易单据</div>
                        <div class="condition-item">香港海关入境时的过境小票</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门工银亚洲银行开户流程
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

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    澳门工银亚洲银行常见问题
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
import '@/css/bank_company/mo/icbc_asia/IcbcAsia_content2.css'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '资料发送',
        description: '受理网点整理相关开户资料并发送至工银亚洲'
    },
    {
        iconId: '#icon-communication', 
        title: '致电核实',
        description: '审核客户资料完整齐备后，工银亚洲客户服务中心将致电您核实相关资料'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '权限开通',
        description: '电话确认后的第2个工作日，开通您申请的网银/电话银行服务'
    },
    {
        iconId: '#icon-airplane', 
        title: '收取卡片',
        description: '电话确认后的7～10个工作日左右，您将收到由工银亚洲快递寄送的银行卡'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-positive-dynamics', 
        title: '直参港股',
        description: '工银亚洲的理财账户可以直接参与港股投资，不需要找当地券商开户，非常方便'
    },
    {
        iconId: '#icon-peoples', 
        title: '国内背景',
        description: '工银亚洲银行是国内工商银行在香港的分支机构，受到国内人士的青睐'
    },
    {
        iconId: '#icon-bank-transfer', 
        title: '互转免手续费',
        description: '通过内地工行APP转账到工银亚洲账户免除手续费，且转账实时到账'
    },
    {
        iconId: '#icon-transaction', 
        title: '费用优惠与快捷',
        description: '转账不需要提供证明文件，比较方便快捷人性化'
    }
]

const faqs = ref([
    {
        question: "如何获得工银亚洲密码器的激活码？",
        answer: "账户开通后工银亚洲会将激活码直接发送到客户预留的手机号码上。\n\n如客户未收到电子密码器激活码或误删除电子密码器激活码，请拨打香港本地客服电话（852）21895588或内地工行客户电话95588转7-7-2-1接到香港客服申请重新发送激活码至客户手机。\n\n如果多次未收到，请客户检查手机设置是否已自动拦截收到的激活码短信或致电通讯服务商查询。"
    },
    {
        question: "澳门工银亚洲银行开户要多久时间？",
        answer: "当天下户下卡"
    },
    {
        question: "澳门工银亚洲银行开户要提前预约的吗？",
        answer: "要的，提前3-5天工作日预约。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_icbc_asia_content2 .content1',
        '.mo_icbc_asia_content2 .content2',
        '.mo_icbc_asia_content2 .content3',
        '.mo_icbc_asia_content2 .content4',
        '.mo_icbc_asia_content2 .content6'
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
