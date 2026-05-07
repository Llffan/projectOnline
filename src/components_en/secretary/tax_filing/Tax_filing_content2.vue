<template>
    <div class="tax_filing_content2">
        <div class="content_box">
            
            <!-- 1. Shizhoutong professional tax services -->
            <div class="content1">
                <div class="title">
                    Shizhoutong professional tax services
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="tax services">
                    <div class="text">
                        <p style="font-weight: bold; font-size: 18px;">We can provide you with the following professional services:</p>
                        <ul>
                            <li>Preparation of chargeable profits tax calculation sheet</li>
                            <li>Fill out various types of tax reports on your behalf</li>
                            <li>Reply to the letter from the Hong Kong Inland Revenue Department</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 2. Tax filing process -->
            <div class="content4">
                <div class="title">
                    Tax filing process
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
            
            <!-- 3. Tax filing and accounting fee standards -->
            <div class="content1 table-section" style="margin-top: 0;">
                <div class="title">
                    Tax filing and accounting fee standards
                </div>
                <table class="pricing-table">
                    <thead>
                        <tr>
                            <th>Number of payments (year)</th>
                            <th>Monthly accounting (RMB/month)</th>
                            <th>One-time accounting for the whole year (RMB)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>10 orders or less</td><td>Negotiable</td><td>Negotiable</td></tr>
                        <tr><td>20 orders</td><td>Negotiable</td><td>Negotiable</td></tr>
                        <tr><td>30 orders</td><td>Negotiable</td><td>Negotiable</td></tr>
                        <tr><td>40 orders</td><td>Negotiable</td><td>Negotiable</td></tr>
                        <tr><td>50 pens</td><td>Negotiable</td><td>Negotiable</td></tr>
                        <tr><td>60 pens</td><td>Negotiable</td><td>Negotiable</td></tr>
                        <tr><td>70 pens</td><td>Negotiable</td><td>Negotiable</td></tr>
                        <tr><td>80 pens</td><td>Negotiable</td><td>Negotiable</td></tr>
                        <tr><td>90 transactions and above</td><td>Negotiable</td><td>Negotiable</td></tr>
                    </tbody>
                </table>
                <div style="text-align: left; font-size: 14px; color: #888; width: 80%; margin: 0 auto; line-height: 1.6;">
                    * Additional Items: Year-end surcharges apply to pending lawsuits, mortgages, L/C accounts, installments, rental properties, and accounts not kept by us (fees negotiable).
The above is for reference only. Exact quotes will be provided after assessing the actual documents and required processing time.                </div>
            </div>

            <!-- 4. Why choose us -->
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
                        <div class="text2">Focus on accounting and tax filing, a team of practicing accountants, and an authoritative accounting firm.</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-star"></use></svg>
                        </div>
                        <div class="text1">Experienced</div>
                        <div class="text2">Has many company accounting, tax filing and auditing corporate service cases.</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-protection"></use></svg>
                        </div>
                        <div class="text1">Service guarantee and confidentiality</div>
                        <div class="text2">Professional accounting and tax filing, annual review services, tracking in place, no worries, and protecting all customer information from leakage.</div>
                    </div>
                    <div class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-file-success"></use></svg>
                        </div>
                        <div class="text1">Full transparency and standardization</div>
                        <div class="text2">Comply with relevant accounting standards, share and discuss every step of the progress with customers, and provide the most reasonable suggestions.</div>
                    </div>
                </div>
            </div>

            <!-- 5. Frequently Asked Questions -->
            <div class="content6">
                <div class="title">
                    Tax filing FAQs
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
import '@/css_en/secretary/tax_filing/Tax_filing_content2.css'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    { iconId: '#icon-agreement', title: 'Assessment, quotation and signing of tax declaration agreement', description: 'After communication and negotiation, both parties will evaluate the situation and sign a tax declaration agreement to clarify the service content and charges.' },
    { iconId: '#icon-secure-payment-line', title: 'Pay all the money in advance', description: 'According to the stipulations in the relevant agreement, the customer pays in advance in accordance with the regulations to officially start the later process.' },
    { iconId: '#icon-folder-success-one', title: 'Organize tax information', description: 'The customer provides relevant information, and our professional tax staff assists in sorting out and completing all accounting and vouchers.' },
    { iconId: '#icon-peoples', title: 'Submit to professional accountant for review', description: 'Submit all accounting financial data and related documents to Hong Kong certified auditors for review.' },
    { iconId: '#icon-file-success', title: 'Bring the audit report to the government to file tax returns', description: 'The certified public accountant shall issue a complete statutory audit report and submit it to the Hong Kong Inland Revenue Department for compliance tax filing.' },
    { iconId: '#icon-upload-one', title: 'Submit relevant files to clients', description: 'After completing all tax filing and other procedures, return the government declaration receipt and all original files safely.' }
]


const faqs = ref([
    {
        question: "What are the consequences if a Hong Kong company fails to pay taxes on time?",
        answer: "Under section 71(1) of the Inland Revenue Ordinance, tax imposed in accordance with the provisions of the Inland Revenue Ordinance shall be paid in the manner directed in the notice of assessment on or before the date specified in the notice. If the tax is not so paid, it shall be deemed to be in arrears. \n\nIf the taxpayer fails to pay the first installment of provisional tax after the date specified in the notice of assessment, the second installment of tax will be deemed to be due immediately. If the total amount of unpaid tax payable in the notice of assessment is deemed to be in arrears, the tax bureau may immediately pursue the claim. \n\nThe Commissioner of Inland Revenue may immediately take statutory tax recovery actions (including imposing a 5% surcharge, issuing tax recovery notices to third parties and conducting relevant legal actions including warrants, etc.) in accordance with the provisions of Part XII of the Inland Revenue Ordinance (Chapter 112) to recover the arrears."
    },
    {
        question: "If a Hong Kong company fails to file tax returns, will it be punished?",
        answer: "The Hong Kong Company Law stipulates that every Hong Kong limited company must file a tax return within the statutory time. The Hong Kong Inland Revenue Department will impose a fine. If it is ignored again, the Hong Kong court will issue a court summons to summon the directors and shareholders to appear in court. If the directors and shareholders do not appear in court, it will be regarded as contempt of court. The court will stop the operation of the Hong Kong company, and the directors of the Hong Kong company will bear corresponding legal responsibilities."
    },
    {
        question: "What is the tax filing cycle for Hong Kong companies?",
        answer: "The tax filing cycle of Hong Kong companies is different from that of mainland China, and they do not need to file once a month. \nHong Kong companies only process tax returns when they receive the tax form from the tax bureau for the first time when they are 18 months old, and then file once a year (tax returns and tax payments for Hong Kong companies are separate. Tax returns must be filed but they are not necessarily required to be paid). Those who meet the tax exemption conditions at the same time as filing taxes can apply for tax exemption. Then customers will think that this is equivalent to saying that Hong Kong companies do not need to pay taxes in the first year. In fact, this is a misunderstanding. Because whether your company pays taxes in the first year is determined after your company files its first tax return. If the application for tax exemption is not successful at that time, the tax will need to be paid. Generally, there is no need to pay tax for offshore operations."
    },
    {
        question: "What are the benefits of Hong Kong companies filing tax returns on time and truthfully?",
        answer: "1. Being able to truthfully declare taxes is beneficial to the company's long-term operations\nAnnual accounting can maintain good accounting and auditing records, which is beneficial to future review of accounts and management. At the same time, through auditing, we can improve the quality of company management, understand the internal control system, and protect the rights and interests of shareholders. \n2. You can enjoy the discount of half the booth fee for participating in Hong Kong exhibitions\nWhen participating in an exhibition in Hong Kong, if you have an audit report and tax payment certificate, you can apply for the discount of half the booth fee given by the Hong Kong Trade Development Council. \n3. Losses continue to make up for the profits of the next year\nAfter the Hong Kong company accounts and files tax returns, it is determined as a loss by the Hong Kong Inland Revenue Department, and the profits generated in the future can be made up indefinitely. \n4. Corporate capital revitalization is conducive to bank financing\nIf the company has \"audit reports\" for three consecutive years and are profitable, this will be beneficial to the credit review of Hong Kong banks. You can use the assets held in the name of a Hong Kong company to obtain bank financing loans to help companies revitalize funds. \n5. It is beneficial for Hong Kong companies to open letters of credit\nHong Kong companies conduct accounting audits every year, which is beneficial for issuing letters of credit. When a bank issues a letter of credit to a customer, it will review the customer's audit reports over the years and decide to issue a credit limit to the customer based on this. \n6. Tax payment certificate is conducive to business expansion and commercial cooperation\nCurrently, Tmall International's renewal and settlement require a tax payment certificate provided by a Hong Kong company, and the tax payment certificate is the result of a normal tax filing in Hong Kong. Many foreign businessmen will ask their partners to provide past accounting and auditing records in order to understand the company's background and strength and consider whether to cooperate or provide goods. \n7. It is conducive to the listing of the company in Hong Kong\nIf the company later wants to develop and be listed in Hong Kong, then formal and reasonable tax planning is very important. The tax statements of Hong Kong companies are one of the important materials for company IPO review."
    },
    {
        question: "What are the regulations for Hong Kong tax reports?",
        answer: "The company will receive the tax return form from the Inland Revenue Department within 18 months after its establishment;\n\nThe company is obliged to submit the completed tax return form together with the relevant financial statements (income statement, balance sheet), and the employer's salary and pension statements to the Inland Revenue Department within 1 month after the issuance of the report;\n\nLate submission of the above tax return form may result in penalties;\n\nIf the company director confirms that the company has no business development or no profits in Hong Kong, it can submit an exemption application form to the Inland Revenue Department."
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
