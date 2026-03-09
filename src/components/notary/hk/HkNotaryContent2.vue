<template>
    <div class="hk_notary_content2">
        <div class="content_box">
            <!-- 1. 香港公证认证简介 -->
            <div class="content1">
                <div class="title">
                    香港公证认证
                </div>
                <div class="intro">
                    <div class="hague-text-container">
                        <p class="desc-text">
                            作为国际金融和贸易中心，香港文件在内地和国际间使用，就需要进行香港公证认证，很多朋友对香港的公证认证不太熟悉，由于文化和制度的不同，内地朋友了解香港公证似乎非常困难，公事通总结香港公证认证的类型如下：
                        </p>
                        
                        <div class="implication-cards">
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">🇨🇳</div>
                                    <h4>文件在中国内地使用</h4>
                                </div>
                                <p>通常需要进行<strong>“中国委托公证人公证+中国法律服务（香港）有限公司加盖转递章”</strong>的流程。</p>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">🌍</div>
                                    <h4>在国外的海牙成员国使用</h4>
                                </div>
                                <p>需要进行<strong>香港海牙认证</strong>。即香港律师公证和高等法院加签的两个步骤。</p>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="icon">🏛️</div>
                                    <h4>在国外的非海牙国使用</h4>
                                </div>
                                <p>需要进行<strong>香港领事认证</strong>。即香港律师公证、高等法院加签和外国驻港使领馆认的证三个步骤。</p>
                            </div>
                        </div>
                        <p class="desc-text" style="margin-top:20px;">
                            香港还有其他一些特殊的公证认证，如香港监事员公证、香港总商会认证、香港厂商会认证、香港中华总商会认证等。
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
                                《无犯罪证明公证》、《医学出生证明公证》、《学历/学位证书公证》、《学籍/成绩单证明公证》、《结婚/未婚/离婚证明公证》、《驾驶证/驾照公证》、《职业资格证明公证》、《身份证/护照/回乡证公证》、《住址证明公证》、《印章/印鉴/签名公证》、《房地产证公证》、《银行资料公证》、《委托书/授权书公证》、《遗嘱和死亡证明公证》、《判决书公证》等。
                            </p>
                        </div>
                    </div>
                    <div class="doc-card">
                        <div class="card-header">
                            <div class="icon-circle">
                                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-finance"></use></svg>
                            </div>
                            <h3>香港公司商事文件</h3>
                        </div>
                        <div class="card-body">
                            <p>
                                注册证书（CI）、商业登记证（BR）：公司章程（MA）、成立法定文件（NNC1表格）、周年申报表（NAR1）、董事/公司秘书及授权代表证明、股本结构、法院命令等。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. 香港海牙认证文件样式 -->
            <div class="content3">
                <div class="title">
                    香港海牙认证文件样式
                </div>
                <div class="intro image-gallery">
                    <img src="@/assets/img/notary/hk/1-1.jpg" alt="样例1">
                    <img src="@/assets/img/notary/hk/1-2.jpg" alt="样例2">
                    <img src="@/assets/img/notary/hk/1-3.jpg" alt="样例3">
                    <img src="@/assets/img/notary/hk/1-4.jpg" alt="样例4">
                </div>
                <div class="subtitle note-text">
                    * 此样式已经包含公证和海牙认证，仅供参考，实际公证文件或有不同，以实际办理为准。
                </div>
            </div>

            <!-- 4. 香港内地转呈认证文件样式 -->
            <div class="content4">
                <div class="title">
                    香港内地转呈认证（中国法律服务香港有限公司）文件样式
                </div>
                <div class="intro image-gallery">
                    <img src="@/assets/img/notary/hk/2-1.jpg" alt="转呈认证样例1">
                    <img src="@/assets/img/notary/hk/2-2.jpg" alt="转呈认证样例2">
                    <img src="@/assets/img/notary/hk/2-3.jpg" alt="转呈认证样例3">
                    <img src="@/assets/img/notary/hk/2-4.jpg" alt="转呈认证样例4">
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
import '@/css/notary/hk/HkNotaryContent2.css'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    {
        iconId: '#icon-communication', 
        title: '联系我们',
        description: '通过电话、微信、邮箱、网站留言等多种方式告知您的需求，我们为您度身定制一套公证方案。'
    },
    {
        iconId: '#icon-notes', 
        title: '确认文件',
        description: '发送相关需公证文件确认，安排签署协议并付款。有可能需原件、扫描件或安排视频签署等。'
    },
    {
        iconId: '#icon-audit', 
        title: '公证进行',
        description: '我们一力承担全部的公证认证过程，无需麻烦到您，并随时向您报告公证办理进度。'
    },
    {
        iconId: '#icon-airplane', 
        title: '等候收件',
        description: '完成公证文件后，我们根据目的地，安排顺丰、DHL等快递为您寄送公证认证文件原件。'
    }
]

onMounted(async () => {
    await nextTick()
    
    // Animate major sections
    const sections = [
        '.hk_notary_content2 .content1',
        '.hk_notary_content2 .content2',
        '.hk_notary_content2 .content3',
        '.hk_notary_content2 .content4',
        '.hk_notary_content2 .content6'
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

    // Remove the old process-steps stagger animation because we use advantage class now.
    // We can add stagger for the advantage blocks if desired, or let the section animation handle it.
})
</script>
