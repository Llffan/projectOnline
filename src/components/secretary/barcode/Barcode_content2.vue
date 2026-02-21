<template>
    <div class="barcode_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    什么是商品条码
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/hk/HK.jpg" alt="">
                    <div class="text">
                        <P>商品条码（Bar Code）是将表示商品信息的数字代码转换成由一组规则排列的平行线条构成的特殊符号。它所表示的信息就是国际通用的商品代码。</P>
                        <P>商品条码是商品的“身份证”，是商品流通于国际市场的“共同语言”。全球多个国家的零售商都在使用条码，这已经成为国际贸易的标配。</P>
                        <P>无论是澳大利亚、香港、英国还是美国，企业拥有条形码，不仅可以提高产品知名度，增加防伪力度，还能方便企业进行产品出厂和销售管理。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    为何要使用条码
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
                    申请条件与资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">公司信息：需提供申请公司股东、董事的基本信息及注册证书。</div>
                        <div class="condition-item">产品资料：提供产品类别、货品名称及目录信息。</div>
                        <div class="condition-item">财务证明：部分国家（如澳大利亚）需提供近一年的营业额数据。</div>
                        <div class="condition-item">申请数量：确认需要申请的条码数量（通常以10, 100, 1000为单位）。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">会员要求：申请人通常需申请加入当地货品编码协会（GS1）会员。</div>
                        <div class="condition-item">办理时间：一般为8-15个工作日（视具体国家而定）。</div>
                        <div class="condition-item">有效期：条码申请的有效期通常为1年。</div>
                        <div class="condition-item">续费维护：需在到期前3个月提出续费申请，逾期将被注销。</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    条码申请适用范围
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
                    条码维护与管理
                </div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
                        <div class="img">
                            <img :src="item.imgSrc" :alt="item.title">
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
                    全球条形码常见问题
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
import '@/css/secretary/barcode/Barcode_content2.css'

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-shopping-cart', 
        title: '食品饮料',
        description: '各类预包装食品、饮料、酒类、土特产品等。'
    },
    {
        iconId: '#icon-pills', 
        title: '日用化工',
        description: '化妆品、牙膏、香皂、洗衣粉、医药品等。'
    },
    {
        iconId: '#icon-T-shirt', 
        title: '服装鞋帽',
        description: '各类服装、鞋袜、帽子及纺织品。'
    },
    {
        iconId: '#icon-book', 
        title: '文教图书',
        description: '图书、胶卷、办公用品、文教体育用品。'
    },
    {
        iconId: '#icon-tv', 
        title: '家用电器',
        description: '电视机、冰箱、洗衣机及各类电子产品。'
    },
    {
        iconId: '#icon-tools', 
        title: '日用五金',
        description: '手工工具、剪刀、日用塑料及橡胶制品等。'
    }
]

const advantage = [
    {
        iconId: '#icon-global-line', 
        adv: '商业现代化：条形码是实现商业现代化和流通环节自动化的基础。'
    },
    {
        iconId: '#icon-store', 
        adv: '进驻商城：商品入驻大型超市、商场及电商平台（如亚马逊）的必要条件。'
    },
    {
        iconId: '#icon-shield-check', 
        adv: '产品防伪：增加产品辨识度，防止假冒伪劣，维护品牌形象。'
    },
    {
        iconId: '#icon-inventory', 
        adv: '库存管理：方便企业进行出入库管理，库存盘点，提高效率。'
    },
    {
        iconId: '#icon-scan', 
        adv: '快速结算：收银台扫描条码即可结算，减少顾客等待时间。'
    },
    {
        iconId: '#icon-data', 
        adv: '结构调整：帮助制造商及时掌握销售数据，调整产品结构。'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '到期提醒',
        description: '我们拥有完善的CRM系统，会在条码到期前3个月提醒客户续费，避免条码失效。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '增码服务',
        description: '条形码一次申请通常为1000条，如不够使用，我们可协助向条码中心申请增码（500或1000条）。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '备案公告',
        description: '协助企业完成条码的备案工作，确保条码信息的公开查询与合法性。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '二维码申请',
        description: '协助申请二维码作为条形码的补充，实现扫码直达企业微站，促进在线销售。'
    }
]

const faqs = ref([
    {
        question: "条形码不够用了怎么办？",
        answer: "条形码一次申请通常包含一定数量（如1000条）。如果后期不够使用，可以由我们帮您向条码中心提出增码申请。一次增码的数量通常可以是五百或者一千。"
    },
    {
        question: "条形码过期了怎么办？",
        answer: "条形码的有效期通常是1年（部分地区2年），必须在到期之前三个月进行续展。如果超过期限，条形码会自动注销。如果想要继续使用，只能重新办理申请手续，且之前的条码可能无法找回。"
    },
    {
        question: "为什么要同时申请条形码与二维码？",
        answer: "商品条码是商品入驻线下商超和网上商城的必要条件，主要用于结算和物流。二维码则是条形码的补充，消费者通过扫描二维码可以直接访问企业微站或产品详情页，实现产品的全方位展示和在线销售，增强互动性。"
    },
    {
        question: "申请全球条形码需要多长时间？",
        answer: "办理全球（如澳大利亚）商品条形码所需时间一般为8-15个工作日。申请完毕后，您即可获得条码文件，将商品条形码印制在产品包装上使用。"
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

    // content2 动画
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

    // 为每个优势项添加动画
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

    // content4 动画
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

    // 为每个注册流程项添加动画
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

    // content5 动画
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