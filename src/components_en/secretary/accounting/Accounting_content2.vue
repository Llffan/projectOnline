<template>
    <div class="accounting_content2">
        <div class="content_box">
            
            <!-- 1. Shizhoutong professional accounting and auditing services-->
            <div class="content1">
                <div class="title">
                    Shizhoutong Professional Accounting and Auditing Services
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK.jpg" alt="Accounting and auditing services">
                    <div class="text">
                        <p style="font-weight: bold; font-size: 18px;">We can provide you with the following professional services:</p>
                        <ul>
                            <li>Prepare company financial statements</li>
                            <li>Preparation of chargeable profits tax calculation sheet</li>
                            <li>Arrange for a professional service team to audit the accounts on your behalf</li>
                            <li>Inventory, fixed assets and cash counting</li>
                            <li>Prepare personal assets review report</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 2. Accounting and auditing process-->
            <div class="content4">
                <div class="title">
                    Accounting and auditing procedures
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
            
            <!-- 3. Information required for audit of Hong Kong limited company-->
            <div class="content5">
                <div class="title">
                    Information required for audit of Hong Kong limited company
                </div>
                <div class="intro col-4">
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-file-success"></use></svg>
                        </div>
                        <div class="text1">Financial statements and spreadsheets</div>
                        <div class="text2">Trial balance, balance sheet and income statement</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-book"></use></svg>
                        </div>
                        <div class="text1">Related account books</div>
                        <div class="text2">General ledger, subsidiary ledger, bank journal and cash journal</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-folder-success-one"></use></svg>
                        </div>
                        <div class="text1">inventory ledger</div>
                        <div class="text2">Keep detailed records of all types of inventory receipts, receipts and deposits</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-agreement"></use></svg>
                        </div>
                        <div class="text1">current ledger</div>
                        <div class="text2">Contains classified and detailed account books for various types of debts, claims, internal transactions, etc.</div>
                    </div>
                </div>
            </div>

            <!-- 4. Comprehensive audit solutions-->
            <div class="content4">
                <div class="title">
                    Comprehensive audit solution
                </div>
                <div style="text-align: center; font-size: 16px; color: #666; margin-bottom: 20px;">Financial, compliance, and performance audits are accomplished in one stop</div>
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

            <!-- 5. Statutory audit-->
            <div class="content7">
                <div class="title">
                    Hong Kong Accounting and Accounting Preparation - Statutory Audit
                </div>
                <div class="intro">
                    <div class="audit-card">
                        <div class="icon-box">
                            <div class="icon-wrapper">
                                <svg class="icon"><use xlink:href="#icon-communication"></use></svg>
                            </div>
                            <span>Review process and communication</span>
                        </div>
                        <p>Statutory audits were conducted in accordance with Hong Kong laws and the auditing standards promulgated by the Hong Kong Institute of Certified Public Accountants. During the audit process, we understand the characteristics of the client's industry and make a detailed and practical audit blueprint of the company's operating model, management structure, potential problems, risk management and other factors. While we are conducting the review process, we will also maintain close communication with the client to ensure that the client has a proper understanding of the financial status of the company.</p>
                    </div>

                    <div class="audit-card">
                        <div class="icon-box">
                            <div class="icon-wrapper">
                                <svg class="icon"><use xlink:href="#icon-file-success"></use></svg>
                            </div>
                            <span>Criterion compliance and authenticity</span>
                        </div>
                        <p>On the premise of adhering to the principle of independence, Shizhoutong's audit team provides companies with statutory audit reports that comply with auditing standards, and issues audit opinions on the authenticity, fairness and consistency of accounting treatment methods of the company's financial statements and accounting records. When necessary, we will issue a management proposal to report major issues to the client's management and provide reference suggestions on how to improve and improve governance levels.</p>
                    </div>

                    <div class="audit-card">
                        <div class="icon-box">
                            <div class="icon-wrapper">
                                <svg class="icon"><use xlink:href="#icon-positive-dynamics"></use></svg>
                            </div>
                            <span>Deep insights and solutions</span>
                        </div>
                        <p>We believe that auditing is not just about reviewing financial data, but should also focus on the correlation and impact of financial data on corporate business, so as to find out the crux of the problem and propose corresponding solutions. We hope to continue to provide enterprises with high-quality data support and services by relying on our rich multi-dimensional audit experience in various industries and combining it with auditing standards.</p>
                    </div>
                </div>
            </div>

            <!-- 6. Audit fee standards-->
            <div class="content1 table-section">
                <div class="title">
                    Audit fee charging standards
                </div>
                <div style="text-align: center; font-size: 15px; color: #666; width: 80%; margin: 20px auto 10px auto; line-height: 1.6;">
                    The following defaults to the audit quotation for the first 100 orders of general trade (audit fee = audit risk fee + data quantity surcharge)
                </div>
                <table class="pricing-table">
                    <thead>
                        <tr>
                            <th colspan="2">Audit risk fee (first 100 audit fees)</th>
                        </tr>
                        <tr>
                            <th>Turnover/asset value/responsibility/documents (year/HKD)</th>
                            <th>Auditing fee (RMB) (accounting provided by the customer)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1 million or less</td><td>Negotiable</td></tr>
                        <tr><td>1.01 million to 4 million</td><td>Negotiable</td></tr>
                        <tr><td>4.01 million to 6 million</td><td>Negotiable</td></tr>
                        <tr><td>6.01 million to 10 million</td><td>Negotiable</td></tr>
                        <tr><td>10.01 million to 30 million</td><td>Negotiable</td></tr>
                        <tr><td>30.01 million to 50 million</td><td>Negotiable</td></tr>
                        <tr><td>50.01 million to 100 million</td><td>Negotiable</td></tr>
                        <tr><td>100 million to 300 million</td><td>Negotiable</td></tr>
                        <tr><td>300 million to 500 million</td><td>Negotiable</td></tr>
                        <tr><td>More than 500 million</td><td>Negotiable</td></tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colspan="2">Data quantity surcharge</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Every 100 orders after the period (less than 100 are also counted as 100)</td><td>Negotiable</td></tr>
                    </tbody>
                </table>
                <div style="text-align: left; font-size: 14px; color: #888; width: 80%; margin: 0 auto; line-height: 1.6;">
                    * 以上价目只供参考，视乎实际情况及以双方协定为准。审计的收费是按照资料的数量和营业收入来收取的，需要注意的是，属于代收代付性质的，会按照代收的金额总数来收取审计费。
                </div>
            </div>

            <!-- 8. Why choose us-->
            <div class="content5">
                <div class="title">
                    Why choose us
                </div>
                <div class="intro col-4">
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-diamond"></use></svg>
                        </div>
                        <div class="text1">Strong</div>
                        <div class="text2">Focus on accounting and auditing, a team of practicing accountants, and an authoritative accounting firm.</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-star"></use></svg>
                        </div>
                        <div class="text1">Experienced</div>
                        <div class="text2">He has rich case experience in accounting and tax filing, auditing and problem solving for many companies.</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-protection"></use></svg>
                        </div>
                        <div class="text1">Service guarantee and confidentiality</div>
                        <div class="text2">Professional services are tracked in place without worries, and customer information is thoroughly protected from leakage.</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-file-success"></use></svg>
                        </div>
                        <div class="text1">Full transparency and standardization</div>
                        <div class="text2">Comply with relevant accounting standards, report every step of the progress in a timely manner and provide reasonable compliance suggestions.</div>
                    </div>
                </div>
            </div>

            <!-- 9. Frequently Asked Questions-->
            <div class="content6">
                <div class="title">
                    Frequently Asked Questions about Accounting and Auditing
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
import '@/css_en/secretary/accounting/Accounting_content2.css'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    { iconId: '#icon-agreement', title: 'Evaluation, quotation and agreement signing', description: 'After communication and negotiation, both parties will evaluate the situation and sign an accounting and tax filing agreement to clarify the service content and charges.' },
    { iconId: '#icon-secure-payment-line', title: 'Pay all the money in advance', description: 'According to the relevant agreement, the customer pays in advance in accordance with the regulations to officially start the later accounting service process.' },
    { iconId: '#icon-folder-success-one', title: 'Organize documents and enter accounting', description: 'The customer provides relevant information, and our professional accountant organizes the documents and enters the accounting stage to prepare financial data.' },
    { iconId: '#icon-peoples', title: 'To be audited by an auditor', description: 'After the accounting is completed, the complete commercial financial general ledger and various subsidiary accounts and other relevant data will be submitted to the auditor.' },
    { iconId: '#icon-file-success', title: 'Issue audit report', description: 'After the Hong Kong practicing auditors complete the independent internal audit, they will formally issue a statutory audit report based on the audit results.' },
    { iconId: '#icon-upload-one', title: 'Submit relevant files to clients', description: 'After completing all audit and other procedures, the audit report together with all relevant original vouchers and other files will be safely returned to the customer.' }
]

const auditSolutions = [
    {
        iconId: '#icon-audit', 
        title: 'internal audit',
        description: 'Pay attention to the authenticity of the company\'s internal finance, operating efficiency and strategy, and provide true reports and improvement suggestions to the board of directors and management.'
    },
    {
        iconId: '#icon-positive-dynamics', 
        title: 'Operational audit',
        description: 'Audits for management services reveal whether the business deviates from the decision-making direction, evaluate whether human, material and financial resources are effectively utilized and make recommendations.'
    },
    {
        iconId: '#icon-protection', 
        title: 'Compliance audit',
        description: 'Expose and investigate violations to ensure that their economic activities fully comply with national laws, regulations, policies and internal control requirements.'
    },
    {
        iconId: '#icon-view-list', 
        title: 'process audit',
        description: 'Conduct audits and assessments on the execution and defects of processes, supervise their implementation, and help enterprises continuously optimize and improve their core operating processes.'
    },
    {
        iconId: '#icon-security', 
        title: 'Internal control system audit',
        description: 'Assist in establishing an internal audit mechanism, conduct professional reviews on management\'s determination of the effectiveness of specific internal controls and provide improvement plans.'
    },
    {
        iconId: '#icon-diamond', 
        title: 'special purpose audit',
        description: 'In-depth audits for specific management objectives and corporate needs such as mergers, acquisitions, due diligence, company valuations, inventory count monitoring, etc.'
    }
]

const faqs = ref([
    {
        question: "Hong Kong companies have always made zero declarations. Now they are doing a supplementary accounting audit. What are the risks?",
        answer: "In fact, if you start making up the accounting audit now, the risk is very small. Taking the initiative to make up for it and being caught are completely different from the perspective of relevant Hong Kong authorities."
    },
    {
        question: "Why can some companies not keep accounts? Can I save on this cost?",
        answer: "The reason why some companies do not do accounting every year is, firstly, because they really have no business, and secondly, because their awareness of compliance is too weak and they are not aware of the risks behind not doing accounting for a long time. In addition, they may tend to focus on saving costs for the company, but often ignore the legal development of the company."
    },
    {
        question: "What is the tax filing cycle for Hong Kong companies?",
        answer: "The tax filing cycle of Hong Kong companies is different from that of mainland China, and they do not need to file once a month. A Hong Kong company does not receive a tax return from the Inland Revenue Department for the first time until it is 18 months after its establishment. From then on, it will be filed once a year."
    },
    {
        question: "What are the benefits of Hong Kong companies doing accounting audits on time and truthfully?",
        answer: "1. Truthful accounting and auditing are beneficial to the company's long-term operations, maintaining good records, improving management quality and protecting shareholders' rights. \n2. Losses will continue to be offset by profits in the next year, and losses can be offset indefinitely upon verification. \n3. The revitalization of corporate funds is conducive to bank financing. If there is an \"audit report\" with profits for three consecutive years, it will be helpful for credit review. \n4. It is conducive to the issuance of a letter of credit, and the bank will review the audit reports of previous years to determine the amount. \n5. It is conducive to business expansion and commercial cooperation. Foreign investors often ask to see past audit records. \n6. It is conducive to the company's listing in Hong Kong. Standardized audit reports are important core information for IPO review."
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
