<template>
    <div class="boa_content2">
        <div class="content_box">
            <!-- 1. 银行简介 & 开户形式 -->
            <div class="content1">
                <div class="title">
                    美国银行简介
                </div>
                <div class="intro">
                    <img src="@/assets/img/bank/us/美国银行.png" alt="美国银行">
                    <div class="text">
                        <P>美国银行（Bank of America，NYSE：BAC）是世界上最大的银行控股公司之一，以资产计是美国第一大商业银行；该行的建立可以追溯到1784年的马萨诸塞州银行，是美国历史第二悠久的银行。美国银行为环球首要的金融服务机构之一，致力提供一应俱全的个人及商业银行服务，服务遍及美国二十一州、哥伦比亚特区及全球三十个国家，为多达数千万个家庭及众多商业客户提供最优质完善的银行服务。</P>
                    </div>
                </div>
            </div>

            <!-- 2. 开户优势 -->
            <div class="content2">
                <div class="title">
                    美国银行开户优势
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
                        <div class="condition-item">公司注册证书</div>
                        <div class="condition-item">联邦税号</div>
                        <div class="condition-item">公司章程</div>
                        <div class="condition-item">董事邮箱地址</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">董事身份证正反面和护照1:1比例扫描件（彩色），董事股东手持护照清晰拍照</div>
                        <div class="condition-item">美国电话号码；（建议加州号码）</div>
                        <div class="condition-item">美国邮寄地址（如我司提供，另支付费用）</div>
                    </div>
                </div>
            </div>

            <!-- 3.1 账户维护指导 -->
            <MaintenanceGuide />

            <!-- 4. 开户流程 -->
            <div class="content4">
                <div class="title">
                    美国银行开户流程
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
            <US_Cooperative_Bank class="content_bank" />

            <!-- 6. 常见问题 -->
            <div class="content6">
                <div class="title">
                    美国银行常见问题
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
import '@/css/bank_company/us/boa/Boa_content2.css'
import US_Cooperative_Bank from '@/components/bank_company/common/US_Cooperative_Bank.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'

gsap.registerPlugin(ScrollTrigger)

// Registration Process
const registrationProcess = [
    {
        iconId: '#icon-notes', 
        title: '第一步',
        description: '确定办理，准备银行备案信息表（我司可以提供）'
    },
    {
        iconId: '#icon-upload-one', 
        title: '第二步',
        description: '提交银行开户所需资料'
    },
    {
        iconId: '#icon-airplane', 
        title: '第三步',
        description: '我们将相关资料提交到美国银行'
    },
    {
        iconId: '#icon-exchange-cny-line', 
        title: '第四步',
        description: '汇入美国开户所需激活款'
    },
    {
        iconId: '#icon-key-one', 
        title: '第五步',
        description: '银行分配账号、网络银行ID密码及发卡 (安全起见需登陆后第一时间修改密码)'
    },
    {
        iconId: '#icon-view-list', 
        title: '第六步',
        description: '开通网上银行查询功能'
    }
]

// Bank Advantages
const advantage = [
    {
        iconId: '#icon-finance', 
        title: '绑定证券账户',
        description: '可以绑定证券账户， 炒美股会更加的方便快捷。'
    },
    {
        iconId: '#icon-diamond', 
        title: '享受金融产品',
        description: '美国作为国际金融中心，银行业发达，可以享受美国本土银行提供的金融产品。'
    },
    {
        iconId: '#icon-award-line', 
        title: '提高公司信誉',
        description: '开立美国账户，可以提高公司形象和可信度，极大增加公司国际竞争力。'
    },
    {
        iconId: '#icon-transaction', 
        title: '功能完备',
        description: '网上银行可轻松提供对账和国际转账的功能，满足资金运用需求。'
    }
]

const faqs = ref([
    {
        question: "现在美国银行开户审核严格吗？",
        answer: "现在比之前开户审核要严格一些，因为近期发生了很多银行诈骗案件，为了安全、谨慎，所以银行对新开户的人审核会严格，但只要资料没有问题，开户成功率还是挺高的，另外在开美国银行账户时，申请人一定要注意多配合银行的顾问，这样开户时间会比较快。"
    },
    {
        question: "美国银行开户要多久时间？",
        answer: "6-8周"
    },
    {
        question: "美国银行电汇汇出手续费是多少？",
        answer: "向美国境内账户汇出： 30美金/笔\n向美国境外账户汇出（外币）： 35美金/笔\n向美国境外账户汇出（美金）： 45美金/笔"
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.boa_content2 .content1',
        '.boa_content2 .content2',
        '.boa_content2 .content3',
        '.boa_content2 .content4',
        '.content_bank',
        '.boa_content2 .content6'
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
