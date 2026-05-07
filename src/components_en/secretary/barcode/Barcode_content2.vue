<template>
    <div class="barcode_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    What is product barcode
                </div>
                <div class="intro">
                    <img loading="lazy" src="@/assets/img/company/hk/HK.jpg" alt="">
                    <div class="text">
                        <P>Product barcode (Bar Code) converts digital codes representing product information into special symbols composed of a set of regularly arranged parallel lines. The information it represents is the internationally accepted commodity code.</P>
                        <P>Commodity barcode is the "ID card" of commodities and the "common language" for commodities circulating in the international market. Retailers in many countries around the world are using barcodes, which have become standard in international trade.</P>
                        <P>Whether it is Australia, Hong Kong, the United Kingdom or the United States, companies with barcodes can not only increase product visibility and increase anti-counterfeiting efforts, but also facilitate companies in product delivery and sales management.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    Why use barcodes
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
                    Application conditions and information
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Company information: Basic information and registration certificate of shareholders and directors of the company applying for the company are required.</div>
                        <div class="condition-item">Product information: Provide product category, product name and catalog information.</div>
                        <div class="condition-item">Financial proof: Some countries (such as Australia) require turnover data for the past year.</div>
                        <div class="condition-item">Application quantity: Confirm the number of barcodes that need to be applied for (usually in units of 10, 100, 1000).</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Membership requirements: Applicants usually need to apply to join the local Goods Numbering Association (GS1) membership.</div>
                        <div class="condition-item">Processing time: Generally 8-15 working days (depending on the specific country).</div>
                        <div class="condition-item">Validity period: The validity period of barcode application is usually 1 year.</div>
                        <div class="condition-item">Renewal maintenance: Renewal application must be submitted 3 months before expiration. If it is overdue, it will be cancelled.</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    Scope of application for barcode application
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
            <div class="content5">
                <div class="title">
                    Barcode maintenance and management
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
                        <div class="img">
                            <img loading="lazy" :src="item.imgSrc" :alt="item.title">
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
            <div class="content6">
                <div class="title">
                    Global Barcode FAQ
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
import '@/css_en/secretary/barcode/Barcode_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-consume', 
        title: 'food and beverage',
        description: 'All kinds of pre-packaged food, beverages, alcoholic beverages, local products, etc.'
    },
    {
        iconId: '#icon-natural-mode', 
        title: 'Daily chemicals',
        description: 'Cosmetics, toothpaste, soap, washing powder, pharmaceuticals, etc.'
    },
    {
        iconId: '#icon-user', 
        title: 'Clothing, shoes and hats',
        description: 'All kinds of clothing, footwear, hats and textiles.'
    },
    {
        iconId: '#icon-book', 
        title: 'Cultural and educational books',
        description: 'Books, films, office supplies, cultural, educational and sporting goods.'
    },
    {
        iconId: '#icon-ad-product', 
        title: 'household appliances',
        description: 'TVs, refrigerators, washing machines and various electronic products.'
    },
    {
        iconId: '#icon-gavel', 
        title: 'Daily hardware',
        description: 'Hand tools, scissors, daily plastic and rubber products, etc.'
    }
]

const advantage = [
    {
        iconId: '#icon-world', 
        adv: 'Commercial modernization: Barcodes are the basis for commercial modernization and automation of circulation links.'
    },
    {
        iconId: '#icon-city', 
        adv: 'Entering malls: A necessary condition for products to enter large supermarkets, shopping malls and e-commerce platforms (such as Amazon).'
    },
    {
        iconId: '#icon-shield-add', 
        adv: 'Product anti-counterfeiting: Increase product recognition, prevent counterfeiting, and maintain brand image.'
    },
    {
        iconId: '#icon-view-list', 
        adv: 'Inventory management: It facilitates enterprises to carry out inbound and outbound management, inventory counting, and improve efficiency.'
    },
    {
        iconId: '#icon-secure-payment-line', 
        adv: 'Quick settlement: Scan the barcode at the cashier to settle, reducing customer waiting time.'
    },
    {
        iconId: '#icon-positive-dynamics', 
        adv: 'Structural adjustment: Help manufacturers grasp sales data in a timely manner and adjust product structure.'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: 'Expiration reminder',
        description: 'We have a complete CRM system that will remind customers to renew 3 months before the barcode expires to avoid barcode expiration.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: 'Add code service',
        description: 'A barcode application is usually limited to 1,000 barcodes. If there is not enough, we can assist in applying for additional codes (500 or 1,000 barcodes) from the Barcode Center.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: 'Filing Announcement',
        description: 'Assist enterprises to complete the barcode filing work to ensure the public inquiry and legality of barcode information.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: 'QR code application',
        description: 'Assist in applying for a QR code as a supplement to the barcode, enabling direct scanning of the code to the corporate micro-site to promote online sales.'
    }
]

const faqs = ref([
    {
        question: "What should I do if there are not enough barcodes?",
        answer: "A barcode application usually contains a certain number (such as 1,000). If it is not enough for use in the future, we can help you apply for additional codes to the barcode center. The number of code increases at one time can usually be five hundred or one thousand."
    },
    {
        question: "What should I do if my barcode expires?",
        answer: "The validity period of the barcode is usually 1 year (2 years in some areas) and must be renewed three months before expiration. If the expiration date is exceeded, the barcode will be automatically logged out. If you want to continue using it, you can only go through the application procedures again, and the previous barcode may not be retrieved."
    },
    {
        question: "Why should I apply for barcode and QR code at the same time?",
        answer: "Product barcodes are a necessary condition for products to be placed in offline supermarkets and online malls, and are mainly used for settlement and logistics. The QR code is a supplement to the barcode. By scanning the QR code, consumers can directly access the corporate microsite or product details page, achieving all-round product display and online sales, and enhancing interactivity."
    },
    {
        question: "How long does it take to apply for a global barcode?",
        answer: "The time required to process global (such as Australia) product barcodes generally takes 8-15 working days. After the application is completed, you can obtain the barcode file and print the product barcode on the product packaging."
    }
])

const expandedItems = ref({})

const toggleFaq = (index) => {
    expandedItems.value[index] = !expandedItems.value[index]
}

const advantageRefs = ref([])
const registrationProcessRefs = ref([])

onMounted(async () => {
    await nextTick()
    
    // content1 animation
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

    // content2 animation
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

    // Add animation to each advantage item
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

    // content3 animation
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

    // content4 animation
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

    // Add animation to each registration flow item
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

    // content5 animation
    gsap.from('.content5 .title', {
        scrollTrigger: {
            trigger: '.content5 .title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    })

    const content5Advantages = document.querySelectorAll('.content5 .advantage');
    content5Advantages.forEach((item, index) => {
        gsap.fromTo(item,
            { y: 50, opacity: 0, transition: 'none' },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content5 .intro',
                    start: 'top 80%'
                },
                onComplete: function() {
                    gsap.set(item, { clearProps: "y,opacity,transition" })
                }
            }
        );
    })

    // content6 title animation
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

    // content6 FAQ animation
    const faqItems = document.querySelectorAll('.content6 .faq-item');
    faqItems.forEach((item, index) => {
        // FAQ item enters animation
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