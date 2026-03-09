<template>
    <div class="accounting_content2">
        <div class="content_box">
            
            <!-- 1. 十洲通专业会计及审计服务 -->
            <div class="content1">
                <div class="title">
                    十洲通专业会计及审计服务
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK.jpg" alt="会计及审计服务">
                    <div class="text">
                        <p style="font-weight: bold; font-size: 18px;">我们可以为您提供以下专业服务：</p>
                        <ul>
                            <li>编制公司财务报表</li>
                            <li>编制应课利得税计算表</li>
                            <li>代安排专业服务团队审计账目</li>
                            <li>库存、固定资产及现金盘点</li>
                            <li>编制个人资产审查报告</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 2. 做帐及审计办理流程 -->
            <div class="content4">
                <div class="title">
                    做帐及审计办理流程
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
            
            <!-- 3. 香港有限公司审计所需的资料 -->
            <div class="content5">
                <div class="title">
                    香港有限公司审计所需的资料
                </div>
                <div class="intro col-4">
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-file-success"></use></svg>
                        </div>
                        <div class="text1">财务报表及试算表</div>
                        <div class="text2">试算平衡表、资产负债表和利润表</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-book"></use></svg>
                        </div>
                        <div class="text1">相关帐册</div>
                        <div class="text2">总分类帐，明细分类帐，银行日记帐及现金日记帐</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-folder-success-one"></use></svg>
                        </div>
                        <div class="text1">存货明细帐</div>
                        <div class="text2">详细记录各类存货收发存明细账目</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-agreement"></use></svg>
                        </div>
                        <div class="text1">往来明细账</div>
                        <div class="text2">包含各类债务债权、内部往来等分类明细帐册</div>
                    </div>
                </div>
            </div>

            <!-- 4. 全面审计解决方案 -->
            <div class="content4">
                <div class="title">
                    全面审计解决方案
                </div>
                <div style="text-align: center; font-size: 16px; color: #666; margin-bottom: 20px;">财务、合规、绩效审计一站式达成</div>
                <div class="intro">
                    <div v-for="(item, index) in auditSolutions" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg>
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

            <!-- 5. 法定审计 -->
            <div class="content7">
                <div class="title">
                    香港会计与会计帐目编制 - 法定审计
                </div>
                <div class="intro">
                    <div class="audit-card">
                        <div class="icon-box">
                            <div class="icon-wrapper">
                                <svg class="icon"><use xlink:href="#icon-communication"></use></svg>
                            </div>
                            <span>审查程序与沟通</span>
                        </div>
                        <p>法定审计乃按照香港法例及香港会计师公会所颁布的核数准则而进行。在审计过程中了解客户的行业特性，并对企业的运作模式、管理架构、潜在问题及风险管理等各项因素，作出周详及切实的审计蓝本；而我们在进行审查程序的同时亦会与客户保持密切沟通，务求令客户对本身的企业财务状况有适当了解。</p>
                    </div>

                    <div class="audit-card">
                        <div class="icon-box">
                            <div class="icon-wrapper">
                                <svg class="icon"><use xlink:href="#icon-file-success"></use></svg>
                            </div>
                            <span>准则符合与真实</span>
                        </div>
                        <p>十洲通的审计小组在遵循独立原则的前提下，为企业提供符合核数准则的法定审计报告，并对企业的财务报表及会计记录的真实性、公允性及会计处理方法连贯性发表审计意见。必要时，我们将出具管理建议书，向客户管理层报告重大问题以及如何完善、提高管治水平的参考建议。</p>
                    </div>

                    <div class="audit-card">
                        <div class="icon-box">
                            <div class="icon-wrapper">
                                <svg class="icon"><use xlink:href="#icon-positive-dynamics"></use></svg>
                            </div>
                            <span>深度洞察与方案</span>
                        </div>
                        <p>我们认为审计不只是针对财务资料的审核，更应该关注财务资料背后对企业业务的关联和影响，从而找出问题的症结，提出相应解决方案。我们期望凭借积累对各行业丰富的多维审计经验，结合核数准则，为企业持续提供高质量的数据支持和服务。</p>
                    </div>
                </div>
            </div>

            <!-- 6. 审计收费标准 -->
            <div class="content1 table-section">
                <div class="title">
                    审计费的收费标准
                </div>
                <div style="text-align: center; font-size: 15px; color: #666; width: 80%; margin: 20px auto 10px auto; line-height: 1.6;">
                    以下默认为普通贸易首100单审计报价（审计费 = 审计风险费 + 资料数量附加费）
                </div>
                <table class="pricing-table">
                    <thead>
                        <tr>
                            <th colspan="2">审计风险费 (首100单审计费用)</th>
                        </tr>
                        <tr>
                            <th>营业额/资产值/负责值/单据（年/港币）</th>
                            <th>核数费用（人民币）（由客人提供理账）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>100万或以下</td><td>面议</td></tr>
                        <tr><td>101万至400万</td><td>面议</td></tr>
                        <tr><td>401万至600万</td><td>面议</td></tr>
                        <tr><td>601万至1,000万</td><td>面议</td></tr>
                        <tr><td>1,001万至3,000万</td><td>面议</td></tr>
                        <tr><td>3,001万至5,000万</td><td>面议</td></tr>
                        <tr><td>5,001万至1亿</td><td>面议</td></tr>
                        <tr><td>1亿至3亿</td><td>面议</td></tr>
                        <tr><td>3亿至5亿</td><td>面议</td></tr>
                        <tr><td>5亿以上</td><td>面议</td></tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colspan="2">资料数量附加费</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>期后每100单（少于100也作100计算）</td><td>面议</td></tr>
                    </tbody>
                </table>
                <div style="text-align: left; font-size: 14px; color: #888; width: 80%; margin: 0 auto; line-height: 1.6;">
                    * 以上价目只供参考，视乎实际情况及以双方协定为准。审计的收费是按照资料的数量和营业收入来收取的，需要注意的是，属于代收代付性质的，会按照代收的金额总数来收取审计费。
                </div>
            </div>

            <!-- 8. 为什么选择我们 -->
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
                        <div class="text2">专注做账审计，执业会计师团队，权威会计事务所。</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-star"></use></svg>
                        </div>
                        <div class="text1">经验丰富</div>
                        <div class="text2">拥有多家企业做账报税、核数审计及解决疑难的丰富案例经验。</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-protection"></use></svg>
                        </div>
                        <div class="text1">服务保障与保密</div>
                        <div class="text2">专业服务跟踪到位无后顾之忧，并且彻底保护客户信息避免外泄。</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-file-success"></use></svg>
                        </div>
                        <div class="text1">全程透明与规范</div>
                        <div class="text2">符合相关会计准则，每一步进度及时汇报并提供合理的合规建议。</div>
                    </div>
                </div>
            </div>

            <!-- 9. 常见问题解答 -->
            <div class="content6">
                <div class="title">
                    做账审计常见问题
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
import '@/css/secretary/accounting/Accounting_content2.css'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    { iconId: '#icon-agreement', title: '评估、报价签协定', description: '双方沟通商洽后，评估情况并签订做帐报税协定，明确服务内容及收费。' },
    { iconId: '#icon-secure-payment-line', title: '预交全部款项', description: '根据有关协议的约定，客户按照规定预交款项以正式启动后期的做账服务流程。' },
    { iconId: '#icon-folder-success-one', title: '整理单据进入做帐', description: '客户提供相关资料，我司专业会计整理单据并进入做帐阶段，编制财务数据。' },
    { iconId: '#icon-peoples', title: '交由核数师审计', description: '做帐完毕后，将完整的商业财务总分类账及各类明细账等相关数据交由核数师。' },
    { iconId: '#icon-file-success', title: '出具审计报告', description: '香港执业核数师进行独立的内部审计完毕后，根据审计情况正式出具法定审计报告。' },
    { iconId: '#icon-upload-one', title: '相关档案交客户', description: '完成全部审计等各项程序后，将审计报告连同所有相关原始凭证等档案安全交还给客户。' }
]

const auditSolutions = [
    {
        iconId: '#icon-audit', 
        title: '内部审计',
        description: '关注企业内部财务的真实性、经营效率及战略，向董事会和管理层提供真实报告和改进意见。'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: '经营审计',
        description: '为管理服务的审计，揭示业务是否偏离决策方向，评价人力物力财力是否有效利用并提出建议。'
    },
    {
        iconId: '#icon-protection', 
        title: '合规性审计',
        description: '揭露和查处违规行为，促使其经济活动完全符合国家法律法规、政策及内部控制要求。'
    },
    {
        iconId: '#icon-view-list', 
        title: '流程审计',
        description: '对流程的执行情况及缺陷进行稽查评估，督促其落实，帮助企业的核心运营流程不断优化和改进。'
    },
    {
        iconId: '#icon-security', 
        title: '内部控制系统审计',
        description: '协助建立内部审计机制，就管理层对特定内部控制相关的有效性认定进行专业审核并提供改善方案。'
    },
    {
        iconId: '#icon-diamond', 
        title: '特殊目的审计',
        description: '针对合并、收购、尽职调查、公司估值、库存盘点监控等特定管理目标和企业需求而进行的深度审计。'
    }
]

const faqs = ref([
    {
        question: "香港公司一直零申报，现在补做账审计，会有什么风险？",
        answer: "其实如果现在开始补做账审计，风险是非常小的。主动补做和被查到在香港相关部门来看是截然不同的。"
    },
    {
        question: "为什么有的公司可以不做账？我能不能省下这笔费用？",
        answer: "有的公司之所以每年都不理账，其一是真的没有业务，其二因为合规意识过弱，没意识到长期不做账背后的风险。另外，他们可能往往会侧重于为了给公司节约成本，而往往疏略了公司的合法发展这个层面。"
    },
    {
        question: "香港公司的报税周期是怎样的？",
        answer: "香港公司报税周期与大陆不同，不用1个月报1次。香港公司是成立到18个月的时候才第一次收到税务局的税表，以后是1年报1次。"
    },
    {
        question: "香港公司按时如实做账审计有什么好处？",
        answer: "1. 如实做账审计有利于公司长期运营，保持良好记录，提高管理质素并保障股东权益。\n2. 亏损持续弥补下年度利润，经核实为亏损可无限期弥补。\n3. 企业资金盘活利于银行融资，若有连续3年盈利的“审计报告”有助于信贷审查。\n4. 有利于开信用证，银行审查历年审计报告决定额度。\n5. 有利于业务拓展和商业合作，外商往往会要求查看过往审计记录。\n6. 有利于公司香港上市，规范的审计报告是IPO审查的重要核心资料。"
    }
])

const expandedItems = ref(new Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

onMounted(async () => {
    await nextTick()
    
    const sections = [
        '.accounting_content2 .content1',
        '.accounting_content2 .content4',
        '.accounting_content2 .content5',
        '.accounting_content2 .content6',
        '.accounting_content2 .content7'
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
