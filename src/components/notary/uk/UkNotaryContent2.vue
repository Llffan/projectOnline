<template>
    <div class="uk_notary_content2">
        <div class="content_box">
            <!-- 1. 英国公证认证简介 -->
            <div class="content1">
                <div class="title">
                    英国公证认证
                </div>
                <div class="intro">
                    <div class="hague-text-container">
                        <p class="desc-text">
                            十洲通为您提供英国文件的的全方位法律认证服务，英国公证和英国海牙认证是我们的核心公证认证服务。
                        </p>

                        <div class="implication-cards">
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">📖</div>
                                    <h4>海牙公约背景</h4>
                                </div>
                                <p>《关于取消外国公文书认证的公约》成员国多达120+个，公约成员国之间文件通过海牙认证<strong>相互承认无需领事认证</strong>。</p>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">⚡</div>
                                    <h4>高效便捷</h4>
                                </div>
                                <p>相较领事认证，海牙认证<strong>速度快并且费用较低</strong>。欧洲所有国家均已加入海牙公约，区域内流通无阻。</p>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">📜</div>
                                    <h4>海牙认证标志</h4>
                                </div>
                                <p>抬头用法语书写<strong>“Apostille”</strong>。确认文件签名、地点及盖章的真实性，并包含发行日期和专属号码。</p>
                            </div>
                        </div>

                        <p class="desc-text" style="margin-top:20px;">
                            每一个海牙认证都被登记在册并由专门部门管理，认证证书由各国指定部门出具。当公约成员国文件用于非成员国时，则仍需要进行领事认证。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 2. 常见的公证文件 -->
            <div class="content2">
                <div class="title">
                    常见的公证文件
                </div>
                <div class="intro">
                    <div class="doc-card">
                        <div class="card-header">
                            <div class="icon-circle">
                                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-peoples"></use></svg>
                            </div>
                            <h3>民事文件</h3>
                        </div>
                        <div class="card-body">
                            <p>
                                《英国无犯罪证明公证》、《医学出生证明公证》、《学历/学位证书公证》、《学籍/成绩单证明公证》、《结婚/未婚/离婚证明公证》、《同一人公证》、《绿卡公证》、《护照公证》、《驾驶证公证》、《签名公证》、《房地产证公证》、《银行资料公证》、《委托书/授权书公证》、《遗嘱和死亡证明公证》、《判决书公证》等。
                            </p>
                            <p style="margin-top:15px; color:#888; font-size:13px;">注：均可提供多语种翻译公证</p>
                        </div>
                    </div>
                    <div class="doc-card">
                        <div class="card-header">
                            <div class="icon-circle">
                                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-finance"></use></svg>
                            </div>
                            <h3>英国公司商事文件</h3>
                        </div>
                        <div class="card-body">
                            <p>
                                公司章程（Articles of Incorporation）、公司注册文件（Company registration documents）、股东协议（Shareholder Agreement）、董事会决议（Board Resolutions）、营业执照（Business License）、商业许可证（Business Permit）、存续证明/良好证明（Good Standing）等。
                            </p>
                            <p style="margin-top:15px; color:#888; font-size:13px;">注：均可提供多语种翻译公证</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. 英国海牙认证文件样式 -->
            <div class="content3">
                <div class="title">
                    英国公证和海牙认证文件样式
                </div>
                <div class="intro image-gallery">
                    <img src="@/assets/img/notary/uk/1.jpg" alt="样例1">
                    <img src="@/assets/img/notary/uk/2.jpg" alt="样例2">
                    <img src="@/assets/img/notary/uk/3.jpg" alt="样例3">
                    <img src="@/assets/img/notary/uk/4.jpg" alt="样例4">
                </div>
                <div class="subtitle note-text">
                    * 此样式已经包含公证和海牙认证，仅供参考，实际公证文件或有不同，以实际办理为准。
                </div>
            </div>

            <!-- 6. 订单流程 -->
            <div class="content6">
                <div class="title">
                    订单流程
                </div>
                <div class="intro">
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
            
            <ChooseUs />

        </div>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css/notary/uk/UkNotaryContent2.css'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    {
        iconId: '#icon-communication', 
        title: '联系我们',
        description: '您可以通过多种方式与我们取得联系，告知您的需求，我们为您度身定制一套公证方案。'
    },
    {
        iconId: '#icon-notes', 
        title: '确认文件',
        description: '发送相关需公证文件确认无误后安排签署协议付款。部分需要提供原件、扫描件或安排视频公证等。'
    },
    {
        iconId: '#icon-audit', 
        title: '公证进行',
        description: '我们会一力承担全部的公证认证过程，无需麻烦到您，并随时向您报告公证进度。'
    },
    {
        iconId: '#icon-airplane', 
        title: '等候收件',
        description: '完成公证文件后，我们会根据目的地的不同，安排顺丰、DHL等快递公司为您寄送公证认证原件。'
    }
]

onMounted(async () => {
    await nextTick()
    
    // Animate major sections
    const sections = [
        '.uk_notary_content2 .content1',
        '.uk_notary_content2 .content2',
        '.uk_notary_content2 .content3',
        '.uk_notary_content2 .content6'
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
