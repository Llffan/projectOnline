<template>
    <div class="sg_notary_content2">
        <div class="content_box">
            <!-- 1. 新加坡公证认证简介 -->
            <div class="content1">
                <div class="title">
                    新加坡公证认证
                </div>
                <div class="intro">
                    <div class="hague-text-container">
                        <p class="desc-text">
                            十洲通为您提供新加坡文件的的全方位法律认证服务。
                        </p>

                        <div class="implication-cards">
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">🌍</div>
                                    <h4>海牙公约认证</h4>
                                </div>
                                <p>新加坡于1987年加入了海牙公约，因此新加坡的文件可以通过海牙认证在<strong>全球超过100个公约成员国使用</strong>。</p>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">⚖️</div>
                                    <h4>新加坡文件要求</h4>
                                </div>
                                <p>新加坡<strong>高等法院</strong>负责海牙认证。各政府部门和授权机构以<strong>英语或者马来语书写的文件可以进行认证</strong>。</p>
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
                            每一个海牙认证（包含发行日期和专属号码）都被登记在册并由专门部门管理，认证证书由各国指定部门出具。
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
                                《无犯罪证明公证》、《出生证明公证》、《学历/学位证书公证》、《学籍/成绩单证明公证》、《结婚/未婚/离婚证明公证》、《同一人公证》、《绿卡公证》、《护照公证》、《驾驶证公证》、《签名公证》、《房地产证公证》、《银行资料公证》、《委托书/授权书公证》、《遗嘱和死亡证明公证》、《判决书公证》等。
                            </p>
                            <p style="margin-top:15px; color:#888; font-size:13px;">注：均可提供多语种翻译公证</p>
                        </div>
                    </div>
                    <div class="doc-card">
                        <div class="card-header">
                            <div class="icon-circle">
                                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-finance"></use></svg>
                            </div>
                            <h3>新加坡公司商事文件</h3>
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

            <!-- 3. 新加坡海牙认证文件样式 -->
            <div class="content3">
                <div class="title">
                    新加坡公证和海牙认证文件样式
                </div>
                <div class="intro image-gallery">
                    <img loading="lazy" src="@/assets/img/notary/sg/1.jpg" alt="样例1">
                    <img loading="lazy" src="@/assets/img/notary/sg/2.jpg" alt="样例2">
                    <img loading="lazy" src="@/assets/img/notary/sg/3.jpg" alt="样例3">
                    <img loading="lazy" src="@/assets/img/notary/sg/4.jpg" alt="样例4">
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
import '@/css/notary/sg/SgNotaryContent2.css'
import ChooseUs from '@/components/notary/common/ChooseUs.vue'

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
        '.sg_notary_content2 .content1',
        '.sg_notary_content2 .content2',
        '.sg_notary_content2 .content3',
        '.sg_notary_content2 .content6'
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
