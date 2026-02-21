<template>
    <div class="dbs_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    香港星展银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/hk/DBS.jpg" alt="">
                    <div class="text">
                        <P>
                            星展银行（DBS）成立于1968年，原名新加坡发展银行，是新加坡最大的商业银行。20世纪90年代末加速海外扩张，先后收购了泰国、菲律宾、印尼、中国香港和台湾的多家商业银行。1998年收购香港广安银行，2001年收购香港道亨银行集团（包括道亨银行及海外信托银行），并于2003年完成合并重组，更名为“星展银行(香港)”。目前，星展银行的最大股东仍为新加坡政府投资部门淡马锡控股有限公司。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    香港星展银行开户优势
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
                        <div class="condition-item">香港公司资料：CI、BR、NNC1/NAR1、M&A</div>
                        <div class="condition-item">董事股东身份证（正反面）及通行证/护照</div>
                        <div class="condition-item">董事股东近3个月个人银行流水</div>
                        <div class="condition-item">董事股东近3个月的住址证明 (水电费单/驾驶证等)</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">国内关联公司的营业执照</div>
                        <div class="condition-item">国内公司近3个月的公司银行流水</div>
                        <div class="condition-item">业务证明：销售/采购合同、发票、报关单/提单各2份</div>
                        <div class="condition-item">公司业务相关资料（如产品目录、网站、主要客户名单等）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    香港星展银行开户流程
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
                    香港星展银行常见问题
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
import '@/css/bank_company/hk/dbs/Dbs_content2.css'
import HK_Cooperative_Bank from '@/components/bank_company/common/HK_Cooperative_Bank.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)



// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-email-push', 
        title: '提交申请',
        description: '客户提交远程视频开户申请邮件。'
    },
    {
        iconId: '#icon-notes', 
        title: '收集资料',
        description: '客户经理收集资料(初审)。'
    },
    {
        iconId: '#icon-phone-call', 
        title: '视频见证',
        description: '视频见证签字。'
    },
    {
        iconId: '#icon-upload-one', 
        title: '提交文件',
        description: '客户提交开户文件及核验副本。'
    },
    {
        iconId: '#icon-accept-email', 
        title: '确认邮件',
        description: '客户回覆银行请求确认邮件。'
    },
    {
        iconId: '#icon-audit', 
        title: '开户审核',
        description: '开户审核(约6-8周)。'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-world', 
        title: '服务范围广泛',
        description: '业务遍及全球多个国家和地区，提供全面的金融服务'
    },
    {
        iconId: '#icon-shield', 
        title: '安全性非常高',
        description: '作为新加坡最大的商业银行，信誉评级高，资金安全有保障'
    },
    {
        iconId: '#icon-finance', 
        title: '没有额度限制',
        description: '转账额度灵活，满足大额资金周转需求'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: '到账速度快',
        description: '跨境汇款效率高，资金到账及时'
    }
]




const faqs = ref([
    {
        question: "星展银行不接受哪些国家的公司或个人开立账户？",
        answer: "公司董事及股东在星展银行任一家分支机构有不良记录的不接受开户；还有公司属于一些高风险国家，如伊拉克、伊朗、朝鲜等的不接受开立账户。注意注册公司名称是否有带有敏感字眼，例如：金融、煤矿、石油等，需要在注册公司时提醒客户，带有此类字眼的公司名称银行开户时可能会被拒绝。"
    },
    {
        question: "香港星展银行开户要多久时间？",
        answer: "6-8周"
    },
    {
        question: "香港星展银行开户的额度是多少？",
        answer: "无限额"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    // ScrollTrigger animations...
    await nextTick()
    
    // Animate content sections including their titles as single units, matching Everbright implementation
    const sections = [
        '.dbs_content2 .content1',
        '.dbs_content2 .content2',
        '.dbs_content2 .content3',
        '.dbs_content2 .content3_1',
        '.dbs_content2 .content4',
        '.dbs_content2 .content5',
        '.content_bank',
        '.dbs_content2 .content6'
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
