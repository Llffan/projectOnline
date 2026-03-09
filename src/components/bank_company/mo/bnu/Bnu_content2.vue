<template>
    <div class="mo_bnu_content2">
        <div class="content_box">
            <!-- 1. 银行简介 -->
            <div class="content1">
                <div class="title">
                    澳门大西洋银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/mo/大西洋银行.png" alt="澳门大西洋银行">
                    <div class="text">
                        <P>
                            大西洋银行是澳门商业银行之一。原名为“大西洋国海外汇理银行”，总行设在葡萄牙里斯本。澳葡政府在市流通之纸币，均由该银行发行，为葡萄牙在澳门唯一的发钞银行。地点设于新马路与南湾转角处，是一幢独具规模的建筑物。
                        </P>
                        <P>
                            该行所理之业务范围包括对葡萄牙及各地汇款，政府各机关，各商行开户，附设有金库、保险箱，楼高两层。楼下为银行办事处，楼上为行长居住和会议室。大西洋银行一直致力于为澳门和世界各地的个人及企业客户提供优质的银行和金融服务。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    澳门大西洋银行开户优势
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
                        <div class="condition-item">公司基础证件：CR、BR、NNC1/NAR1，公司章程及股权架构表等</div>
                        <div class="condition-item">关联业务文件：提供采购和销售合同各一份，及补充发票INVOICE等证明单据</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">身份与财务证明：董事身份证、通行证，近三个月银行流水及地址证明</div>
                        <div class="condition-item">开户必要表格：签署完整的开户申明表并配合完成KYC核查</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    澳门大西洋银行开户流程
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
                    澳门大西洋银行常见问题
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
import '@/css/bank_company/mo/bnu/Bnu_content2.css'
import MO_Cooperative_Bank from '@/components/bank_company/common/MO_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '递交预审',
        description: '准备电子版资料并发至银行进行初步审核'
    },
    {
        iconId: '#icon-user', 
        title: '审核通过',
        description: '银行审核通过资料并确认开户意向'
    },
    {
        iconId: '#icon-airplane', 
        title: '签字核实',
        description: '客户自行选址签字确认开户协议及相关文件'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '成功下户',
        description: '成功完成账户开通动作，下发账户资料'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-good-two', 
        title: '极速开户',
        description: '无查册费用，审批高效，最快3天、最慢7个工作日即可下户'
    },
    {
        iconId: '#icon-world', 
        title: '国籍包容',
        description: '除高风险国家外，别国董事均可以正常申请开立账户'
    },
    {
        iconId: '#icon-finance', 
        title: '零管理费',
        description: '全年无帐户管理费，无强制预存金额，不绑定理财及保险'
    },
    {
        iconId: '#icon-phone-telephone', 
        title: '远程便捷',
        description: '全程无须过关、不视频不见证，网银操作简便、使用手机短信流动密码'
    }
]

const faqs = ref([
    {
        question: "澳门的银行都可以开通什么币种？",
        answer: "澳门银行都是多币种账户，除了澳门币、美元、港币之外，还包括新西兰元、澳元、日元、港币、欧元、英镑等常见币种，炒股、或者玩基金是一个很好的标配。"
    },
    {
        question: "澳门大西洋银行开户要多久时间？",
        answer: "通常需要 3-7 个工作日即可下户。"
    },
    {
        question: "澳门大西洋银行开户有编码器吗？",
        answer: "没有编码器，网银操作通过手机短信流动密码进行验证。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.mo_bnu_content2 .content1',
        '.mo_bnu_content2 .content2',
        '.mo_bnu_content2 .content3',
        '.mo_bnu_content2 .content4',
        '.content_bank',
        '.mo_bnu_content2 .content6'
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
