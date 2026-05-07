<template>
    <div class="patent_content2">
        <div class="content_box">
            
            <!-- 1. 专利服务简介 -->
            <div class="content1">
                <div class="title">专利服务简介</div>
                <div class="intro">
                    <div class="hague-text-container">
                        <p class="desc-text">
                            专利是《保护工业产权巴黎公约》及相关国际条约框架下，保障创新成果、提升企业核心竞争力的法律基石。其核心在于通过“以公开换保护”，赋予发明人对创新技术在特定期限内的排他独占权，防止竞争对手抄袭、模仿，从而确立市场领先地位。
                        </p>
                        <p class="desc-text">
                            对于企业和个人创新者而言，专利服务不仅是法律维权，更是品牌出海与技术变现的关键支撑：
                        </p>

                        <div class="implication-cards">
                            <div class="card outgoing">
                                <div class="card-header">
                                    <div class="icon">💡</div>
                                    <h4>保护核心技术</h4>
                                </div>
                                <p>通过专业的专利申请，将研发成果转化为受法律保护的资产。无论是国内布局还是通过 PCT 国际申请走向全球，都能为技术筑起坚实的“防火墙”。</p>
                            </div>
                            <div class="card incoming">
                                <div class="card-header">
                                    <div class="icon">🌍</div>
                                    <h4>提升商业价值</h4>
                                </div>
                                <p>专利不仅是高新企业认定的硬指标，更是融资、入股、技术许可及转让的重要筹码。在国际贸易中，完备的专利布局能有效化解侵权风险，助推全球化经营。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 专利的类型 -->
            <div class="content4 type-section">
                <div class="title">专利的类型</div>
                <div class="intro col-4">
                    <div v-for="(item, index) in patentTypes" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text1">
                            {{ item.title }}
                        </div>
                        <div class="text2">
                            <p style="font-weight: 600; color: #0037ff7e; margin-bottom: 5px;">{{ item.duration }}</p>
                            {{ item.description }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- 国际专利服务 - 重构布局 -->
            <div class="intl-section">
                <div class="title">国际专利服务</div>
                <div class="intl-groups">
                    <div v-for="(group, groupIdx) in intlGroups" :key="groupIdx" class="intl-group-row">
                        <!-- 服务网格，包含分类卡片作为第一个元素 -->
                        <div class="group-services">
                            <div class="category-card" :class="group.type">
                                <div class="category-name">{{ group.category }}</div>
                            </div>
                            <div v-for="(item, idx) in group.services" :key="idx" class="intl-card">
                                <div class="card-header">
                                    <div class="flag-placeholder" :class="item.iconType">
                                        <span v-if="item.iconType === 'text-badge'">{{ item.iconText }}</span>
                                        <img loading="lazy" v-else-if="item.flag" :src="getFlagUrl(item.flag)" />
                                    </div>
                                    <div class="intl-name">{{ item.name }}</div>
                                </div>
                                <div class="intl-info">
                                    <template v-if="item.lang">
                                        <span>申请语言：{{ item.lang }}</span>
                                        <span>授权时间：{{ item.time }}</span>
                                    </template>
                                    <span v-else class="intl-desc">{{ item.desc }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 申请专利的好处 -->
            <div class="benefit-section content6">
                <div class="title">申请专利的好处</div>
                <div class="intro col-4">
                    <div v-for="(benefit, index) in benefits" :key="index" class="advantage">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="benefit.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text1">{{ benefit.title }}</div>
                        <div class="text2">{{ benefit.desc }}</div>
                    </div>
                </div>
            </div>

            <!-- 申请专利的流程 -->
            <div class="process-section">
                <div class="title">申请专利的流程</div>
                <div style="text-align: center; margin-bottom: 20px; color: #666;">
                    发明专利 (2-3年) | 实用新型 (8-14个月) | 外观设计 (4-6个月)
                </div>
                <div class="process-container">
                    <div class="process-steps">
                        <div v-for="(step, index) in steps" :key="index" class="step">
                            <div class="step-icon">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="step.iconId"></use>
                                </svg>
                            </div>
                            <div class="step-title">{{ step.title }}</div>
                            <div class="step-desc">{{ step.desc }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 选择我们优势 -->
            <ChooseUs />

        </div>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css/ip/patent/PatentContent2.css'
import ChooseUs from '@/components/ip/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const patentTypes = [
    { 
        iconId: '#icon-trophy', 
        title: '发明专利', 
        duration: '保护期限：20年',
        description: '对产品、方法 or 其改进提出的新的技术方案。' 
    },
    { 
        iconId: '#icon-positive-dynamics', 
        title: '实用新型专利', 
        duration: '保护期限：10年',
        description: '对产品形状，构造 or 其结合所提出适于实用的新的技术方案。' 
    },
    { 
        iconId: '#icon-ad-product', 
        title: '外观设计专利', 
        duration: '保护期限：10年',
        description: '对产品形状，图案 or 其结合以及色彩与形状、图案的结合做出新设计。' 
    },
    { 
        iconId: '#icon-earth', 
        title: '国际专利', 
        duration: '保护期限：10-25年',
        description: '可注册单个国家/地区，也可多个国家同时申请（PCT）。' 
    }
]

const intlGroups = [
    {
        category: '热门申请',
        type: 'hot',
        services: [
            { name: 'PCT', iconType: 'text-badge', iconText: 'PCT', desc: '一份申请，多国享有优先权' },
            { name: '巴黎公约', iconType: 'text-badge', iconText: 'WIPO', desc: '指定国家，进入国际市场' },
            { name: '美国', iconType: 'flag', flag: 'us', lang: '英语', time: '2-3年' },
            { name: '欧洲发明', iconType: 'text-badge', iconText: 'EUROPE', lang: '英语/法语/德语', time: '2-5年' },
            { name: '日本', iconType: 'flag', flag: 'jp', lang: '日语', time: '2-3年' },
            { name: '韩国', iconType: 'flag', flag: 'kr', lang: '韩语', time: '2-3年' },
            { name: '澳大利亚', iconType: 'flag', flag: 'au', lang: '英语', time: '2-3年' }
        ]
    },
    {
        category: '授权担保',
        type: 'guarantee',
        services: [
            { name: '卢森堡', iconType: 'flag', flag: 'lu', lang: '英语/法语/德语', time: '6-9个月' },
            { name: '荷兰', iconType: 'flag', flag: 'nl', lang: '英语/荷兰语', time: '2-3年' },
            { name: '比利时', iconType: 'flag', flag: 'be', lang: '法语/德语/荷兰语', time: '1-2年' },
            { name: '法国', iconType: 'flag', flag: 'fr', lang: '法语', time: '2-3年' },
            { name: '德国', iconType: 'flag', flag: 'de', lang: '德语', time: '2-8个月' },
            { name: '日本', iconType: 'flag', flag: 'jp', lang: '日语', time: '2-3年' },
            { name: '欧盟', iconType: 'flag', flag: 'eu', lang: '英语/法语/德语', time: '3个月' }
        ]
    },
    {
        category: '港澳台',
        type: 'hmt',
        services: [
            { name: '中国香港', iconType: 'flag', flag: 'hk', lang: '中文/英语', time: '2-3年' },
            { name: '中国澳门', iconType: 'flag', flag: 'mo', lang: '中文/英语', time: '2-3年' },
            { name: '中国台湾', iconType: 'flag', flag: 'tw', lang: '中文/英语', time: '2-3年' }
        ]
    }
]

// 获取国旗图标 URL
const getFlagUrl = (code) => {
    return `https://flagcdn.com/w80/${code}.png`
}

const benefits = [
    { iconId: '#icon-protection', title: '独占市场', desc: '一种产品只要授予专利权，就等于在市场上具有了独占权。' },
    { iconId: '#icon-security', title: '技术保护', desc: '防止他人模仿本企业开发的新技术、新产品。' },
    { iconId: '#icon-folder-success-one', title: '无形资产', desc: '形成工业产权，具有价值，可作为商品出售 or 转让。' },
    { iconId: '#icon-star', title: '政策奖励', desc: '各地方政府均出台相应文件，对专利申请者进行奖励 or 补助。' }
]

const steps = [
    { iconId: '#icon-communication', title: '在线沟通', desc: '确定专利类型，判定保护范围' },
    { iconId: '#icon-peoples', title: '沟通面谈', desc: '签订保密协议，检索授权前景' },
    { iconId: '#icon-agreement', title: '合作协议', desc: '签订合同，支付费用，撰写文件' },
    { iconId: '#icon-upload-one', title: '递交申请', desc: '确定申请文件，递交并答复OA' },
    { iconId: '#icon-file-success', title: '授权领证', desc: '领证转交，提供免费年费监控' }
]

onMounted(async () => {
    await nextTick()
    
    const commonScrollTrigger = (trigger) => ({
        trigger: trigger,
        start: 'top bottom-=80',
        once: true
    });

    // 专利简介动画
    gsap.from('.patent_content2 .content1', {
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: commonScrollTrigger('.content1')
    })

    // 专利类型动画
    gsap.from('.type-section .advantage', {
        autoAlpha: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: commonScrollTrigger('.type-section')
    })

    // 国际服务动画
    gsap.from('.intl-group-row', {
        autoAlpha: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.intl-groups',
            start: 'top 85%',
            once: true
        }
    })

    // 好处动画
    gsap.from('.benefit-section .advantage', {
        autoAlpha: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: commonScrollTrigger('.benefit-section')
    })

    // 流程动画
    gsap.from('.process-section .step', {
        autoAlpha: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: commonScrollTrigger('.process-section')
    })

    // 强制刷新
    setTimeout(() => {
        ScrollTrigger.refresh()
    }, 500)
})
</script>
