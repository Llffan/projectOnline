<template>
    <div class="tax_filing_content2">
        <div class="content_box">
            
            <!-- 1. 十洲通专业税务服务 -->
            <div class="content1">
                <div class="title">
                    十洲通专业税务服务
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="税务服务">
                    <div class="text">
                        <p style="font-weight: bold; font-size: 18px;">我们可以为您提供以下专业服务：</p>
                        <ul>
                            <li>编制应课利得税计算表</li>
                            <li>代填报各类型税务报表</li>
                            <li>代回覆香港税务局信函</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 2. 报税办理流程 -->
            <div class="content4">
                <div class="title">
                    报税办理流程
                </div>
                <div class="intro col-3">
                    <div v-for="(item, index) in processSteps" :key="index" class="advantage">
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
            
            <!-- 3. 报税理帐收费标准 -->
            <div class="content1 table-section" style="margin-top: 0;">
                <div class="title">
                    报税理帐收费标准
                </div>
                <table class="pricing-table">
                    <thead>
                        <tr>
                            <th>支单数（年）</th>
                            <th>按月理帐（人民币/每月）</th>
                            <th>全年一次过做帐（人民币）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>10单或以下</td><td>面议</td><td>面议</td></tr>
                        <tr><td>20单</td><td>面议</td><td>面议</td></tr>
                        <tr><td>30单</td><td>面议</td><td>面议</td></tr>
                        <tr><td>40单</td><td>面议</td><td>面议</td></tr>
                        <tr><td>50笔</td><td>面议</td><td>面议</td></tr>
                        <tr><td>60笔</td><td>面议</td><td>面议</td></tr>
                        <tr><td>70笔</td><td>面议</td><td>面议</td></tr>
                        <tr><td>80笔</td><td>面议</td><td>面议</td></tr>
                        <tr><td>90笔及以上</td><td>面议</td><td>面议</td></tr>
                    </tbody>
                </table>
                <div style="text-align: left; font-size: 14px; color: #888; width: 80%; margin: 0 auto; line-height: 1.6;">
                    * 附加项目：（全年）将在年结时附加（年结日未完结官司、每个物业按揭、每个信用证户口、每个分期付款、每项收租物业、非本公司理账的等均面议）。以上只是作为一个参考依据，具体的收费要看到资料后才能报价。我司会综合衡量处理的时间，再报出最合理的准确报价。
                </div>
            </div>

            <!-- 4. 为什么选择我们 -->
            <div class="content5">
                <div class="title">
                    为什么选择我们
                </div>
                <div class="intro col-4">
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-diamond"></use></svg>
                        </div>
                        <div class="text1">实力强大</div>
                        <div class="text2">专注做账报税，执业会计师团队，权威会计事务所。</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-star"></use></svg>
                        </div>
                        <div class="text1">经验丰富</div>
                        <div class="text2">拥有多家公司做账报税及审计企业服务案例。</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-protection"></use></svg>
                        </div>
                        <div class="text1">服务保障与保密</div>
                        <div class="text2">专业做账报税、年审服务，跟踪到位无后顾之忧，保护所有客户信息避免外泄。</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-file-success"></use></svg>
                        </div>
                        <div class="text1">全程透明与规范</div>
                        <div class="text2">符合相关会计准则，每一步进度与客户分享商讨，提供最合理的建议。</div>
                    </div>
                </div>
            </div>

            <!-- 5. 常见问题解答 -->
            <div class="content6">
                <div class="title">
                    税务申报常见问题
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
                            <span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">▼</span>
                        </div>
                        <div class="faq-answer" :class="{ 'expanded': expandedItems[index] }">
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
import '@/css/secretary/tax_filing/Tax_filing_content2.css'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    { iconId: '#icon-agreement', title: '评估、报价签报税协定', description: '双方沟通商洽后，评估情况并签订报税协定，明确服务内容及收费。' },
    { iconId: '#icon-secure-payment-line', title: '预交全部款项', description: '根据有关协议的约定，客户按照规定预交款项以正式启动后期流程。' },
    { iconId: '#icon-folder-success-one', title: '整理税务资料', description: '客户提供相关资料，我司专业税务人员协助整理完善所有记账和凭证。' },
    { iconId: '#icon-peoples', title: '交专业会计师审核', description: '将所有记好帐的财务数据及相关文件交由香港执业核数师审查把关。' },
    { iconId: '#icon-file-success', title: '持审计报告去政府报税', description: '执业会计师持完备的出具法定审计报告递交至香港税务局进行合规报税。' },
    { iconId: '#icon-upload-one', title: '相关档案交客户', description: '完成全部报税等程序后，将政府的申报回执连同所有原始档案安全交还。' }
]


const faqs = ref([
    {
        question: "香港公司不按时缴税有什么后果？",
        answer: "根据《税务条例》第 71(1) 条，依照税务条例条文而征收的税款，须按评税通知书内所指示的方式在该通知书内所指明的日期或之前缴付。若非如此缴付税款，须被当作为拖欠税款。\n\n如在评税通知书上订明的日期后纳税人仍未缴交第一期暂缴税，第二期税款将视为立即到期论。评税通知书内倘未缴付的应缴税总额将全数被视为欠税，税务局得立即予以追讨。\n\n税务局局长可立即根据《税务条例》（第 112 章）第 XII 部的规定，采取法定追税行动（包括征收百分之五附加费、向第三者发出追收税款通知书及进行相关法律行动包括通缉等）以追收欠款。"
    },
    {
        question: "香港公司没报税，受处罚吗？",
        answer: "香港公司法规定，每间香港有限公司，在法定时间内必须要报税，香港税务局会出罚款，如果再不理会，那么香港法院会出法院传票传董事股东出庭，如果董事股东不出庭，就视为藐视法庭，法院会停止该香港公司运作，香港公司的董事要承担相应的法律责任。"
    },
    {
        question: "香港公司的报税周期是怎样的？",
        answer: "香港公司报税周期与大陆不同，不用1个月报1次。\n香港公司是成立到18个月的时候才第一次收到税务局的税表时处理报税，以后是1年报1次（香港公司报税与交税是分开的，报税一定要报但是未必就要交税）。报税的同时符合免税条件的可以申请免税。那么客户会认为是不是这样就等于说香港公司第一年不需要交税了，其实这个里面是错误理解的。因为你公司第一年是否交税是在你公司第一次报税后才判定。如果届时免税没有申请成功的话，税收都是需要补上的，一般是离岸操作贸易，都不需要交税。"
    },
    {
        question: "香港公司按时如实报税有什么好处？",
        answer: "1. 能够如实申报税务有利于公司长期运营\n每年理账可保持良好的会计及核数记录，有利于日后反查账目及管理使用。同时透过核数，提高公司管理质素，了解内部监控制度，保障股东之权益。\n2. 能够享受参加香港展会展位费减半的优惠\n在香港参加展会，如有审计报告和交税证明，可以申请香港贸易发展局给出的展位费减半的优惠。\n3. 亏损持续弥补下年度利润\n香港公司理账报税后，经香港税局核定为亏损，可无限期弥补以后所产生的利润。\n4. 企业资金盘活，利于银行融资\n若公司有连续3年的“审计报告”，并且都是盈利的，这样有利在香港银行信贷审查。可以利用香港公司名下所持有的资产进行银行融资贷款，帮助企业进行资金盘活。\n5. 有利于香港公司开信用证\n香港公司每年都做账审计，有利于开信用证。银行在给客户开具信用证的时候会审查客户历年的审计报告，据此来决定给客户开具信用额度。\n6. 完税证明有利于业务拓展和商业合作\n目前天猫国际的续签和入驻都需要香港公司提供的完税证明，而完税证明则是正常去香港报税后的结果。很多外商都会要求其合作伙伴提供过往的会计及审计记录，以便了解公司的背景及实力，从而考虑是否进行合作或是提供商品。\n7. 有利于公司香港上市\n如果后期企业想要发展香港上市，那么正规合理的税务规划是非常重要的。香港公司的税务报表是公司IPO审查的重要资料之一。"
    },
    {
        question: "香港税务报表是怎样规定的？",
        answer: "公司成立后第18个月内会收到税务局税务申报表；\n\n公司有义务在该报表发出后起1个月内将填写完整的税务申报表连同有关财务报表（利润表、资产负债表），以及雇主填报的薪酬及退休金报表一并递交税务局；\n\n迟交上述税务申报表可能导致处罚；\n\n若公司董事确认该公司并未有业务发展或没有在香港本地获得利润的话，可以向税务局递交豁免申请表。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.tax_filing_content2 .content1',
        '.tax_filing_content2 .content4',
        '.tax_filing_content2 .content5',
        '.tax_filing_content2 .content6'
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
