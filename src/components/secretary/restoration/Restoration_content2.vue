<template>
    <div class="restoration_content2">
        <div class="content_box">
            <!-- 1. 简介概述 -->
            <div class="content1">
                <div class="title">
                    恢复香港公司的核心意义
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="香港公司恢复">
                    <div class="text">
                        <P>
                            恢复公司注册是处置其已注销名下资产（如银行账户余额、车辆、物业、知识产权等）的唯一合法途径。
                        </P>
                        <P>
                            若公司董事或股东在主动注销后发现公司名下仍有未处理的资产，需先恢复公司才能继续处置这些资产。如果未及时或放任不管，因已注销公司的资产会被视为无主财产，将永久归属香港政府所有，导致不可逆的实物与资金损失。发现资产未转移时，应尽快启动恢复程序。
                        </P>
                    </div>
                </div>
            </div>

            <!-- 2. 行政方式恢复 -->
            <div class="content4">
                <div class="title">
                    方法一：行政方式恢复注册流程
                </div>
                <div class="intro">
                    <div v-for="(item, index) in adminSteps" :key="index" class="advantage">
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

            <!-- 2-补充. 行政方式恢复适用条件 -->
            <div class="content3">
                <div class="title">
                    以行政方式恢复注册适用条件
                </div>
                <div style="text-align: center; font-size: 15px; color: #666; width: 80%; margin: 0 auto 30px auto; line-height: 1.6;">
                    新条例引入「以行政方式恢复注册」的新程序，在无需按旧条例向原讼法庭申请的前提下恢复列入登记。新程序不适用于因撤销注册或清盘而解散的公司<br />（若是自行撤销，有关人员仍须向法院提出申请）。
                </div>
                <div class="intro">
                    <div class="left">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0066cc; text-align: center;">因被处长剔除之「本地公司」</div>
                        <div class="condition-item">正在营运情况：在有关公司的名称从登记册剔除时，该公司正在营运或经营业务；</div>
                        <div class="condition-item">不动产无异议：如在港有任何归属政府为无主财物的不动产，政府已确认不反对恢复；</div>
                        <div class="condition-item">纪录更新备存：申请人须已向处长交付有关文件，以反映该公司的最新情况；</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0066cc; text-align: center;">被登记册剔除之「非香港公司」</div>
                        <div class="condition-item">营业地点审核：在剔除前的6个月内的任何时间及申请提出时，该公司在香港设有营业地点；</div>
                        <div class="condition-item">纪录更新备存：申请人须已向处长交付有关文件，以使处长之备存反映公司的最新情况；</div>
                        <div class="condition-item">处长附加条件：处长认为合适而附加的任何其他法定行政条件及文件（两类均适用）。</div>
                    </div>
                </div>
            </div>


            <!-- 3. 法庭命令方式恢复 -->
            <div class="content4" style="margin-top: 50px;">
                <div class="title">
                    方法二：申请法庭命令恢复流程
                </div>
                <div class="intro">
                    <div v-for="(item, index) in courtSteps" :key="index" class="advantage">
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

            <!-- 4. 注意事项 -->
            <div class="content5">
                <div class="title">
                    恢复公司注册的注意事项
                </div>
                <div class="intro">
                    <div v-for="(item, index) in notes" :key="index" class="advantage">
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

            <!-- 5. 常见问题解答 -->
            <div class="content6">
                <div class="title">
                    常见问题及政策解答
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
import '@/css/secretary/restoration/Restoration_content2.css'

gsap.registerPlugin(ScrollTrigger)

// Administrative restoration steps
const adminSteps = [
    {
        iconId: '#icon-peoples', 
        title: '股东/董事同意',
        description: '适用条件是被香港政府“强制注销”的公司等。首先所有股东或董事需完全一致同意。'
    },
    {
        iconId: '#icon-secure-payment-line', 
        title: '补缴政府罚款',
        description: '需补齐截至注销当年的年审费用及年审罚款，并结清税表罚款或其他各类政府规定费用。'
    },
    {
        iconId: '#icon-upload-one', 
        title: '提交申请文件',
        description: '需向有关部门填写并提交《本地公司申请以行政方式恢复注册》之规定表格。'
    },
    {
        iconId: '#icon-agreement', 
        title: '授权签署文件',
        description: '若涉及两位及以上董事/股东，需填写有关的授权书，指定其中一人签署恢复相关文件。'
    }
]

// Court order restoration steps
const courtSteps = [
    {
        iconId: '#icon-cooperative-handshake', 
        title: '委托香港律师',
        description: '适用条件是“主动形式”下注销注册的公司。必须向原诉讼法庭委托提交恢复公司的申请。'
    },
    {
        iconId: '#icon-gavel', 
        title: '法院调查',
        description: '法院在正式接收原告律师的相关陈述内容指令，并在彻底地调查审核核实后，将依法签发相关指令文件。'
    },
    {
        iconId: '#icon-file-success', 
        title: '提交资料与缴费',
        description: '申请人在收到发出的法院文件记录后，需要进一步向政府提交所需的资料并依法足额缴纳相关的费用。'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: '政府审批恢复',
        description: '经过层层的政府多重部门（注册处等）进行最后的人工审核并且通过后正式恢复香港公司的初始注册经营状态。'
    }
]

// Important notes
const notes = [
    {
        iconId: '#icon-book', 
        title: '时间周期限制',
        description: '一般正常情况需3~5个月完成全部恢复。若涉及补税报税繁琐，税务情况复杂的公司可能总耗时需9~10个月。'
    },
    {
        iconId: '#icon-protection', 
        title: '公司名称冲突',
        description: '若查出需申请恢复的旧版公司名称已被新注册的其他公司注册占用，那么必须在恢复成立后的“一个月”内限期完成更名。'
    },
    {
        iconId: '#icon-audit', 
        title: '区分注销类型',
        description: '主动注销的公司只能通过“委托律师申请法庭命令”的方式恢复。而被强制注销的公司，可以选择行政方式或法庭命令两者其一来恢复。'
    },
    {
        iconId: '#icon-diamond', 
        title: '名下剩余资产归属',
        description: '逾时未处理也未进行申报和注册恢复程序申请的情况下，公司的全部冻结资产将永久不可撤销地归香港库务署和政府当局所有。'
    }
]

const faqs = ref([
    {
        question: "1. 在新《公司条例》(第622章)下，是否任何公司均可申请撤销注册或恢复注册？",
        answer: "不是。根据新《公司条例》第15部第2分部，只有私人公司及担保有限公司可申请撤销注册。而且前提必须不是法律程序的任一方并且没有在香港的不动产权。"
    },
    {
        question: "2. 在新《公司条例》下，已解散的公司如何恢复注册？",
        answer: "因撤销注册而解散的公司可向原讼法庭申请恢复注册。\n\n被公司注册处处长从公司登记册剔除名称而解散的公司可藉法院命令或藉「以行政方式恢复注册」申请恢复注册。\n\n藉法院命令恢复公司注册的申请可依据新《公司条例》第765条向原讼法庭提出。"
    },
    {
        question: "3. 何谓「以行政方式恢复注册」？哪些公司符合条件？",
        answer: "「以行政方式恢复注册」是一项新程序，公司注册处处长可藉此以行政方式把公司恢复列入公司登记册。但并非任何公司都适用，公司的名称必须已被公司注册处处长从公司登记册“剔除”及公司必须已告解散才符合资格。因“主动撤销”或清盘而解散的公司不可以通过此行政方式恢复。"
    },
    {
        question: "4. 已解散的公司可否随时申请「以行政方式恢复注册」？",
        answer: "不可。就已解散的“本地公司”而言，申请必须于解散日期后的 20 年内提出。就“非香港公司”而言，申请则须于除名日期后的 6 年内向当局提出。"
    },
    {
        question: "5. 谁可就已解散的公司申请「以行政方式恢复注册」？",
        answer: "可向公司注册处处长申请「以行政方式恢复注册」的人士如下：\n- 就已解散的本地公司而言，必须曾经是该公司的董事或成员；及\n- 就非香港公司而言，该公司的董事或成员。\n- 处长一般还会要求申请人提供其获公司的成员授权，以此证实其申请权限等证明文件。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.restoration_content2 .content1',
        '.restoration_content2 .content3',
        '.restoration_content2 .content4',
        '.restoration_content2 .content5',
        '.restoration_content2 .content6'
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
