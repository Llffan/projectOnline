<template>
    <div class="restoration_content2">
        <div class="content_box">
            <!-- 1. Introduction Overview -->
            <div class="content1">
                <div class="title">
                    Restoring the core significance of Hong Kong companies
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK.jpg" alt="Hong Kong company recovery">
                    <div class="text">
                        <P>Restoring registration is the only legal way to handle a canceled company's remaining assets, including bank balances, vehicles, properties, and intellectual property.</P>
                        <P>If undisposed assets remain after cancellation, the company must be restored before disposal. Unprocessed assets will be classified as ownerless and permanently transferred to the HK government. Act promptly once unhandled assets are discovered.</P>
                    </div>
                </div>
            </div>

            <!-- 2. Restoration of administrative methods -->
            <div class="content4">
                <div class="title">
                    Method 1: Restore the registration process through administrative means
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

            <!-- 2-Supplementary conditions for the restoration of administrative methods -->
            <div class="content3">
                <div class="title">
                    Applicable conditions for administrative restoration of registration
                </div>
                <div style="text-align: center; font-size: 15px; color: #666; width: 80%; margin: 0 auto 30px auto; line-height: 1.6;">
                    The new Ordinance introduces "administrative restoration," allowing a company's restoration to the register without applying to the Court of First Instance. This excludes companies dissolved via deregistration or winding up (voluntary deregistration still requires a Court application).                </div>
                <div class="intro">
                    <div class="left">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0066cc; text-align: center;">"Local companies" excluded by the Registrar</div>
                        <div class="condition-item">Operating status: The company was operating or carrying on business when its name was removed from the register;</div>
                        <div class="condition-item">No objection to real estate: If there is any real estate in Hong Kong that belongs to the government as unowned property, the government has confirmed that it has no objection to its restoration;</div>
                        <div class="condition-item">Record keeping: the applicant must have delivered relevant documents to the Registrar to reflect the latest status of the company;</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #0066cc; text-align: center;">"Non-Hong Kong company" removed from the register</div>
                        <div class="condition-item">Business place review: At any time within the 6 months before deletion and when the application is made, the company has a business place in Hong Kong;</div>
                        <div class="condition-item">Keeping updated records: The applicant must have delivered relevant documents to the Registrar so that the Registrar’s records reflect the latest situation of the company;</div>
                        <div class="condition-item">Additional conditions imposed by the Registrar: Any other statutory administrative conditions and documents imposed by the Registrar as the Registrar deems appropriate (applicable to both categories).</div>
                    </div>
                </div>
            </div>


            <!-- 3. Court-ordered restoration -->
            <div class="content4" style="margin-top: 50px;">
                <div class="title">
                    Method 2: Apply for a court order to resume the process
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

            <!-- 4. Precautions -->
            <div class="content5">
                <div class="title">
                    Things to note when restoring company registration
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

            <!-- 5. Frequently Asked Questions -->
            <div class="content6">
                <div class="title">
                    Frequently Asked Questions and Policy Answers
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
import '@/css_en/secretary/restoration/Restoration_content2.css'

gsap.registerPlugin(ScrollTrigger)

// Administrative restoration steps
const adminSteps = [
    {
        iconId: '#icon-peoples', 
        title: 'Shareholders/Directors agree',
        description: 'Applies to forcibly canceled companies. Requires unanimous consent of all shareholders or directors.'
    },
    {
        iconId: '#icon-secure-payment-line', 
        title: 'Pay back government fines',
        description: 'Settle all outstanding annual review fees, fines, and tax return penalties up to the cancellation year.'
    },
    {
        iconId: '#icon-upload-one', 
        title: 'Submit application documents',
        description: 'Complete and submit the Administrative Restoration application form to the relevant department.'
    },
    {
        iconId: '#icon-agreement', 
        title: 'Authorization to sign documents',
        description: 'If multiple directors/shareholders, appoint one to sign via power of attorney.'
    }
]

// Court order restoration steps
const courtSteps = [
    {
        iconId: '#icon-cooperative-handshake', 
        title: 'Appoint a Hong Kong lawyer',
        description: 'For voluntarily deregistered companies. File a reinstatement application with the Court of First Instance.'
    },
    {
        iconId: '#icon-gavel', 
        title: 'court investigation',
        description: 'The court investigates and verifies the case, then issues relevant instruction documents.'
    },
    {
        iconId: '#icon-file-success', 
        title: 'Submit information and pay fees',
        description: 'Submit required documents to government and pay all applicable fees after receiving court order.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Government approval resumes',
        description: 'After multi-department review and approval, the company registration and business status are officially restored.'
    }
]

// Important notes
const notes = [
    {
        iconId: '#icon-book', 
        title: 'time period limit',
        description: 'Typically 3-5 months; complex tax cases may take 9-10 months.'
    },
    {
        iconId: '#icon-protection', 
        title: 'Company name conflict',
        description: 'If the old name is taken, the company must change its name within one month after restoration.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Distinguish between logout types',
        description: 'Voluntarily deregistered: court order only. Forcibly struck off: administrative or court order.'
    },
    {
        iconId: '#icon-diamond', 
        title: 'Attribution of remaining assets',
        description: 'If not restored in time, all frozen assets become permanent government property.'
    }
]

const faqs = ref([
    {
        question: "1. Under the new Companies Ordinance (Chapter 622), can any company apply for deregistration or restoration of registration?",
        answer: "no. According to Division 2 of Part 15 of the new Companies Ordinance, only private companies and companies limited by guarantee can apply for deregistration. And the premise must not be any party to the legal proceedings and have no real estate rights in Hong Kong."
    },
    {
        question: "2. How can a dissolved company be restored to registration under the new Companies Ordinance?",
        answer: "A company dissolved due to deregistration may apply to the Court of First Instance for reinstatement of registration. \n\nA company that has been dissolved after its name has been struck off the register of companies by the Registrar of Companies can apply for restoration of registration through a court order or through \"administrative restoration of registration\". \n\nAn application for restoration of company registration by court order can be made to the Court of First Instance in accordance with Section 765 of the new Companies Ordinance."
    },
    {
        question: "3. What is \"administrative restoration of registration\"? Which companies are eligible?",
        answer: "\"Administrative Restoration\" is a new procedure whereby the Registrar of Companies can administratively restore a company to the Companies Register. However, this does not apply to any company. To be eligible, the company's name must have been \"struck out\" from the register of companies by the Registrar of Companies and the company must have been dissolved. Companies dissolved due to \"voluntary revocation\" or liquidation cannot be restored through this administrative method."
    },
    {
        question: "4. Can a dissolved company apply for \"administrative restoration of registration\" at any time?",
        answer: "No. In the case of a dissolved \"local company\", the application must be made within 20 years from the date of dissolution. For \"non-Hong Kong companies\", applications must be made to the authorities within 6 years after the date of delisting."
    },
    {
        question: "5. Who can apply for \"administrative restoration of registration\" for a dissolved company?",
        answer: "The persons who can apply to the Registrar of Companies for \"administrative restoration of registration\" are as follows:\n- in the case of a dissolved local company, they must have been a director or member of the company; and\n- in the case of a non-Hong Kong company, a director or member of the company. \n- 处长一般还会要求申请人提供其获公司的成员授权，以此证实其申请权限等证明文件。"
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
