<template>
    <div class="fr_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    France Company Registration
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/company/fr/FR-2.jpg" alt="">
                    <div class="text">
                        <P>France is one of the most highly developed economic nations worldwide, acting as the 3rd largest economy and a key member of the G8 industrialized nations.</P>
                        <P>The brand effect of Franceese companies is recognized globally, especially in sectors such as cosmetics, catering, heavy machinery, and gaming, uniquely benefiting corporate branding and marketing.</P>
                        <P>As a core ally of the US, France’s exceptional corporate infrastructure and deeply robust administrative system ensure a paramount business environment naturally favored by international entrepreneurs.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Advantages
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage" :ref="el => { if (el) advantageRefs[index] = el }">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text">
                            {{ item.adv }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="content3">
                <div class="title">
                    Requirements & Preparation
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Name: Extremely flexible; allows Katakana, Hiragana, Kanja, numbers, and English.</div>
                        <div class="condition-item">Restrictions: Prohibits restricted terms like "Bank", "Trust", "Life Insurance", etc.</div>
                        <div class="condition-item">Capital: No strict limit on registered capital; you can start with as low as 1 JPY.</div>
                        <div class="condition-item">Address: Lease fee included. Entity operation must provide physical business location.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Scope of Business: Most sectors can be legally registered with virtually no limit.</div>
                        <div class="condition-item">Representative: A Franceese representative or resident must be officially appointed.</div>
                        <div class="condition-item">Documents: The investor's personal seal certificate (Notarized) is generally necessary.</div>
                        <div class="condition-item">Visa: Corporate capital ≥ 5M JPY opens up opportunities for a Business Manager Visa.</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    Registration Process
                </div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage" :ref="el => { if (el) registrationProcessRefs[index] = el }">
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
            <ChooseUs />
            <div class="content6">
                <div class="title">
                    Frequently Asked Questions
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
                            {{ faq.answer }}
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
import ChooseUs from '@/components_en/company/common/ChooseUs.vue'
// 保持导入路径不变
import '@/css_en/company/fr/Fr_content2.css' 

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-agreement', 
        title: 'Confirm Company Info',
        description: 'Finalize the proposed company name, address, and Franceese representative.'
    },
    {
        iconId: '#icon-audit', 
        title: 'Prepare Notarization',
        description: 'Organize required documents, such as shareholders\' seal certificates and notarization.'
    },
    {
        iconId: '#icon-notes', 
        title: 'Draft & Notarize Files',
        description: 'A dedicated administrative scrivener prepares all required artifacts and gets them officially notarized.'
    },
    {
        iconId: '#icon-government-line', 
        title: 'Submit to Legal Affairs Bureau',
        description: 'Notarized documents are efficiently submitted to the local Franceese Legal Affairs Bureau for registration.'
    },
    {
        iconId: '#icon-folder-success-one', 
        title: 'Complete Registration & Collect Data',
        description: 'Successfully registered in about 15-20 days, acquiring the business license and corporate seal certificates.'
    },
    {
        iconId: '#icon-bank-line', 
        title: 'Tax Account Opening & Operations',
        description: 'Follow-up processes naturally include tax department banking open, dormancy application if applicable, and annual reviews.'
    }
]

const advantage = [
    {
        iconId: '#icon-award-line', 
        adv: 'Brand Image Advantage: High Franceese brand effect enhances product promotion and global business appeal.'
    },
    {
        iconId: '#icon-city', 
        adv: 'Superb Business Environment: Highly recognized institutional security paired with impeccable law and infrastructure.'
    },
    {
        iconId: '#icon-trophy', 
        adv: 'Flexible Scale & Name: High freedom in naming conventions without substantial boundaries on the scope of industries.'
    },
    {
        iconId: '#icon-finance', 
        adv: 'Limitless Capital Volume: Zero limitations on initial registered capital; registering a business starting from 1 JPY is possible.'
    },
    {
        iconId: '#icon-airplane', 
        adv: 'Potential Visa Pathway: Contributing capital above 5M JPY opens an assured application line for a Business Manager Visa.'
    },
    {
        iconId: '#icon-cooperative-handshake', 
        adv: 'Immigration Stepping-stone: Living and actively operating helps clear pathways to secure a Franceese permanent residency.'
    }
]



const faqs = ref([
    {
        question: "Is there a stringent name approval phase and what is the typical setup timeframe?",
        answer: "There isn't a strict name confirmation phase in France. Duplication is allowed. Registration typically concludes successfully within 3 to 4 weeks."
    },
    {
        question: "What are the core requirements regarding the minimum initial corporate capital?",
        answer: "There are absolutely no restrictions. You can officially register with as minimal as 1 Franceese Yen with no mandatory paid-in regulations."
    },
    {
        question: "How can someone publicly review an established Franceese Corporate profile?",
        answer: "Corporate records can smoothly be traced on the official National Tax Agency portal leveraging the Corporate Number, Name, or localized Registration Address."
    },
    {
        question: "What physical credentials will I obtain once the registration successfully concludes?",
        answer: "Key deliverables prominently include the corporate Business License Certificate, the standard Corporate Seal, Bank Seal, Invoice Seal, Corporate Seal Certificate, Legal Affairs Bureau Login Card, and the verified Articles of Incorporation."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const advantageRefs = ref([])
const registrationProcessRefs = ref([])

// 保持动画脚本不变
onMounted(async () => {
    await nextTick()
    
    // content1 动画
    gsap.from('.content1 .title', {
        scrollTrigger: {
            trigger: '.content1 .title',
            start: 'top 90%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    gsap.from('.content1 .intro', {
        scrollTrigger: {
            trigger: '.content1 .intro',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    })

    // content2 动画 - 参照其他页面统一动画效果
    gsap.from('.content2 .title', {
        scrollTrigger: {
            trigger: '.content2 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    // 为每个优势项添加动画 - 参照其他页面统一动画效果
    advantageRefs.value.forEach((el, index) => {
        gsap.fromTo(el,
            { 
                opacity: 0, 
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content2 .intro',
                    start: 'top 80%'
                }
            }
        )
    })

    // content3 动画
    gsap.from('.content3 .title', {
        scrollTrigger: {
            trigger: '.content3 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    })

    const conditionItems = document.querySelectorAll('.content3 .condition-item');
    conditionItems.forEach((item, index) => {
        gsap.fromTo(item,
            { x: -50, opacity: 0, transition: 'none' },
            { 
                x: 0, 
                opacity: 1, 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content3 .intro',
                    start: 'top 80%'  
                },
                onComplete: function() {
                    gsap.set(item, { clearProps: "x,opacity,transition" })
                }
            }
        );
    });

    // content4 动画 - 参照其他页面统一动画效果
    gsap.from('.content4 .title', {
        scrollTrigger: {
            trigger: '.content4 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    })

    // 为每个注册流程项添加动画 - 参照其他页面统一动画效果
    registrationProcessRefs.value.forEach((el, index) => {
        gsap.fromTo(el,
            { 
                opacity: 0, 
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content4 .intro',
                    start: 'top 80%'
                }
            }
        )
    })



    // content6 标题动画
    gsap.fromTo('.content6 .title',
        { y: 50, opacity: 0, transition: 'none' },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.content6 .title',
                start: 'top 80%'
            },
            onComplete: function() {
                gsap.set('.content6 .title', { clearProps: "y,opacity,transition" })
            }
        }
    );

    // content6 常见问题动画
    const faqItems = document.querySelectorAll('.content6 .faq-item');
    faqItems.forEach((item, index) => {
        // FAQ项进入动画
        gsap.fromTo(item,
            { y: 30, opacity: 0, transition: 'none' },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content6 .intro',
                    start: 'top 85%'
                },
                onComplete: function() {
                    gsap.set(item, { clearProps: "y,opacity,transition" })
                }
            }
        );
    });
})
</script>