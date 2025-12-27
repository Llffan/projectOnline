<template>
    <div class="mo_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">
                    澳门公司注册
                </div>
                <div class="intro">
                    <img src="@/assets/img/company/mo/MO-2.jpg" alt="">
                    <div class="text">
                        <P>澳门特别行政区，位于中国珠江三角洲西岸，毗邻珠海，隔海香港，是国际自由港和世界旅游休闲中心，世界人口密度最高的地区之一。</P>
                        <P>也是世界四大赌城之一，其著名的轻工业、旅游业、酒店业和娱乐场使澳门长盛不衰，成为全球最发达富裕的地区之一。</P>
                        <P>另外，中共中央国务院印发《横琴粤澳深度合作区建设总体方案》，明确了横琴粤澳深度合作区四大战略定位。</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">
                    澳门公司注册优势
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
                    条件和所需资料
                </div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">股东人数：一般2人，最多30人，不限国籍（允许一人有限公司）</div>
                        <div class="condition-item">董事及秘书：须委任一名或多名董事，不限国籍（无须委任法定秘书）</div>
                        <div class="condition-item">注册地址：须提供在澳门的注册地址（我司可提供）</div>
                        <div class="condition-item">注册资本及费用：最少25,000澳门元；政府按实际资本额收取千分之一至千分之四的印花税。</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">拟注册公司名称及经营范围（需查册）</div>
                        <div class="condition-item">股东为个人时：需提供身份证复印件、婚姻状况、配偶姓名及财产制</div>
                        <div class="condition-item">股东为公司时：需提供经公证的商业登记、会议记录及授权书</div>
                        <div class="condition-item">选择开户方式，提供相对应资料</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">
                    公司注册流程
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
                    我们的优势
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
                    注册澳门公司常见问题
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
// 保持导入路径不变
import '@/css/company/mo/Mo_content2.css' 

gsap.registerPlugin(ScrollTrigger)

const registrationProcess = [
    {
        iconId: '#icon-message-search',
        title: '公司名称核查',
        description: '确认名称及经营范围，并进行查册（约3-4个工作天）。'
    },
    {
        iconId: '#icon-agreement',
        title: '签署委托与定金支付',
        description: '客户签署委托协议并支付定金。'
    },
    {
        iconId: '#icon-notes',
        title: '制作法定文件',
        description: '制作法定文档，客户签署后寄回原件。'
    },
    {
        iconId: '#icon-government-line',
        title: '向政府部门提交申请',
        description: '代理向政府部门递交文件，办理相关设立手续。'
    },
    {
        iconId: '#icon-message-success',
        title: '完成注册',
        description: '注册完成，取得注册文件（约21-25个工作天）。'
    },
    {
        iconId: '#icon-file-success',
        title: '支付余款',
        description: '支付余款，领取公司全套资料。'
    }
]

const advantage = [
    {
        iconId: '#icon-finance',
        adv: '低税率优势：采用利润来源地税收原则，境外收入免税，且对大陆投资可享税收优惠。'
    },
    {
        iconId: '#icon-transaction',
        adv: '贸易便利：可借助CEPA享受零关税产品进入大陆的便利，并通过转移价格实现节税。'
    },
    {
        iconId: '#icon-natural-mode',
        adv: '注册要求宽松：注册资本无需实缴到位。'
    },
    {
        iconId: '#icon-balance-two',
        adv: '法制稳定：法制体系健全且稳定。'
    },
    {
        iconId: '#icon-world',
        adv: '国际金融便利：可在世界任何银行开银行账户。'
    },
    {
        iconId: '#icon-award-line',
        adv: '提升品牌形象：有利于建立高信誉度的国际品牌。'
    }
]

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '快速通道服务',
        description: '外国投资者可享受快速通道服务，无纸化电子方式提交申请，仅需二周时间即可完成注册。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '经验丰富，大量成功案例',
        description: '十洲通以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '提供专业增值服务',
        description: '在境外拥有自己的团队，协助客户提供综合全面的财务、税务、法律等服务，做到"外有十洲通，注册更通畅"。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '专业专属商务对接和支持',
        description: '顾问、咨询师、会计师等建立计划小组，负责客户一对一的咨询、案子进度和客户协调计划等服务工作。'
    }
]

const faqs = ref([
    {
        question: "澳门公司注册完成后有哪些资料？",
        answer: "澳门公司全套资料：商业登记证（营业执照）；公司资料登记文件；M1营业税表格；章程；公司设立合同一份，含澳门特别行政区认证；一套公司章。"
    },
    {
        question: "注册澳门公司要提供什么？",
        answer: "1、拟使用的澳门公司商业名称。2、股东资料：身份证明、住址、婚姻状况等，法人股东需提供经公证的会议录。3、注册股本由最低澳门币贰万伍仟元起。4、业务范围。5、被委任人（如有）的个人身份证明资料。"
    },
    {
        question: "澳门公司如何在澳门工商银行开户？",
        answer: "企业银行帐户必须等成立后才能申请，一般要求董事亲自到银行办理。开户前必须办理政府公证处见证副本，确定介绍人以及提交公司注册的相关文件。具体请与昶嘉捷顾问联系。"
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