<template>
    <div class="patent_content2">
        <div class="content_box">
            
            <!-- 1. Introduction -->
            <div class="content1">
                <div class="title">Introduction to Patent Services</div>
                <div class="intro">
                    <div class="hague-text-container">
                        <p class="desc-text">
                            A patent is the legal cornerstone for safeguarding innovation results and enhancing an enterprise's core competitiveness under the framework of the Paris Convention for the Protection of Industrial Property and related international treaties. Its core lies in "disclosure for protection," granting inventors exclusive rights to innovative technology within a specific period to prevent competitors from copying or imitating, thereby establishing market leadership.
                        </p>
                        <p class="desc-text">
                            For enterprises and individual innovators, patent services are not just about legal rights protection, but also a key support for global expansion and technical monetization:
                        </p>

                        <div class="implication-cards">
                            <div class="card outgoing">
                                <div class="card-header">
                                    <div class="icon">💡</div>
                                    <h4>Protect Core Technology</h4>
                                </div>
                                <p>Transform R&D results into legally protected assets through professional patent applications. Whether domestic or global via PCT international applications, build a solid "firewall" for your technology.</p>
                            </div>
                            <div class="card incoming">
                                <div class="card-header">
                                    <div class="icon">🌍</div>
                                    <h4>Enhance Business Value</h4>
                                </div>
                                <p>Patents are not only hard indicators for high-tech enterprise certification but also important bargaining chips for financing, equity, technology licensing, and transfer. In international trade, a sound patent layout effectively resolves infringement risks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Patent Types -->
            <div class="content4 type-section">
                <div class="title">Types of Patents</div>
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

            <!-- International Patent Services -->
            <div class="intl-section">
                <div class="title">International Patent Services</div>
                <div class="intl-groups">
                    <div v-for="(group, groupIdx) in intlGroups" :key="groupIdx" class="intl-group-row">
                        <div class="group-services">
                            <div class="category-card" :class="group.type">
                                <div class="category-name">{{ group.category }}</div>
                            </div>
                            <div v-for="(item, idx) in group.services" :key="idx" class="intl-card">
                                <div class="card-header">
                                    <div class="flag-placeholder" :class="item.iconType">
                                        <span v-if="item.iconType === 'text-badge'">{{ item.iconText }}</span>
                                        <img v-else-if="item.flag" :src="getFlagUrl(item.flag)" />
                                    </div>
                                    <div class="intl-name">{{ item.name }}</div>
                                </div>
                                <div class="intl-info">
                                    <template v-if="item.lang">
                                        <span>Language: {{ item.lang }}</span>
                                        <span>Grant Time: {{ item.time }}</span>
                                    </template>
                                    <span v-else class="intl-desc">{{ item.desc }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Benefits -->
            <div class="benefit-section content6">
                <div class="title">Benefits of Patent Application</div>
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

            <!-- Process -->
            <div class="process-section">
                <div class="title">Application Process</div>
                <div style="text-align: center; margin-bottom: 20px; color: #666;">
                    Invention (2-3Y) | Utility Model (8-14M) | Design (4-6M)
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

            <!-- Why Choose Us -->
            <ChooseUs />

        </div>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/ip/patent/PatentContent2.css'
import ChooseUs from '@/components_en/ip/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const patentTypes = [
    { 
        iconId: '#icon-trophy', 
        title: 'Invention', 
        duration: 'Duration: 20 Years',
        description: 'New technical solutions for products, methods, or improvements.' 
    },
    { 
        iconId: '#icon-positive-dynamics', 
        title: 'Utility Model', 
        duration: 'Duration: 10 Years',
        description: 'New, practical technical solutions for product shape or structure.' 
    },
    { 
        iconId: '#icon-ad-product', 
        title: 'Design', 
        duration: 'Duration: 10 Years',
        description: 'New designs for product shape, pattern, color, or combinations.' 
    },
    { 
        iconId: '#icon-earth', 
        title: 'Global Patent', 
        duration: 'Duration: 10-25 Years',
        description: 'Register in single countries or multiple via PCT applications.' 
    }
]

const intlGroups = [
    {
        category: 'Hot Applications',
        type: 'hot',
        services: [
            { name: 'PCT', iconType: 'text-badge', iconText: 'PCT', desc: 'One application, multi-country priority' },
            { name: 'Paris Convention', iconType: 'text-badge', iconText: 'WIPO', desc: 'Designated countries, enter global markets' },
            { name: 'US', iconType: 'flag', flag: 'us', lang: 'English', time: '2-3Y' },
            { name: 'European Invention', iconType: 'text-badge', iconText: 'EUROPE', lang: 'EN/FR/DE', time: '2-5Y' },
            { name: 'Japan', iconType: 'flag', flag: 'jp', lang: 'Japanese', time: '2-3Y' },
            { name: 'South Korea', iconType: 'flag', flag: 'kr', lang: 'Korean', time: '2-3Y' },
            { name: 'Australia', iconType: 'flag', flag: 'au', lang: 'English', time: '2-3Y' }
        ]
    },
    {
        category: 'Guaranteed Grant',
        type: 'guarantee',
        services: [
            { name: 'Luxembourg', iconType: 'flag', flag: 'lu', lang: 'EN/FR/DE', time: '6-9M' },
            { name: 'Netherlands', iconType: 'flag', flag: 'nl', lang: 'EN/NL', time: '2-3Y' },
            { name: 'Belgium', iconType: 'flag', flag: 'be', lang: 'FR/DE/NL', time: '1-2Y' },
            { name: 'France', iconType: 'flag', flag: 'fr', lang: 'French', time: '2-3Y' },
            { name: 'Germany', iconType: 'flag', flag: 'de', lang: 'German', time: '2-8M' },
            { name: 'Japan', iconType: 'flag', flag: 'jp', lang: 'Japanese', time: '2-3Y' },
            { name: 'EU', iconType: 'flag', flag: 'eu', lang: 'EN/FR/DE', time: '3M' }
        ]
    },
    {
        category: 'HK/MO/TW',
        type: 'hmt',
        services: [
            { name: 'HK, China', iconType: 'flag', flag: 'hk', lang: 'ZH/EN', time: '2-3Y' },
            { name: 'Macao, China', iconType: 'flag', flag: 'mo', lang: 'ZH/EN', time: '2-3Y' },
            { name: 'Taiwan, China', iconType: 'flag', flag: 'tw', lang: 'ZH/EN', time: '2-3Y' }
        ]
    }
]

const getFlagUrl = (code) => {
    return `https://flagcdn.com/w80/${code}.png`
}

const benefits = [
    { iconId: '#icon-protection', title: 'Market Exclusivity', desc: 'A patent grants exclusive rights to the product in the market.' },
    { iconId: '#icon-security', title: 'Technical Shield', desc: 'Prevents others from imitating new technologies or products developed.' },
    { iconId: '#icon-folder-success-one', title: 'Intangible Asset', desc: 'Has value as industrial property; can be sold or transferred.' },
    { iconId: '#icon-star', title: 'Policy Incentives', desc: 'Governments provide incentives or subsidies for patent filers.' }
]

const steps = [
    { iconId: '#icon-communication', title: 'Consultation', desc: 'Determine type and scope of protection' },
    { iconId: '#icon-peoples', title: 'Interview', desc: 'Sign NDAs and search for grant prospects' },
    { iconId: '#icon-agreement', title: 'Agreement', desc: 'Sign contract, pay fees, and draft documents' },
    { iconId: '#icon-upload-one', title: 'Submission', desc: 'Finalize documents, submit and reply to OAs' },
    { iconId: '#icon-file-success', title: 'Granting', desc: 'Collect certificate and annual monitoring' }
]

onMounted(async () => {
    await nextTick()
    
    const commonScrollTrigger = (trigger) => ({
        trigger: trigger,
        start: 'top bottom-=80',
        once: true
    });

    gsap.from('.patent_content2 .content1', {
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: commonScrollTrigger('.patent_content2 .content1')
    })

    gsap.from('.patent_content2 .type-section .advantage', {
        autoAlpha: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: commonScrollTrigger('.patent_content2 .type-section')
    })

    gsap.from('.patent_content2 .intl-group-row', {
        autoAlpha: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.patent_content2 .intl-groups',
            start: 'top 85%',
            once: true
        }
    })

    gsap.from('.patent_content2 .benefit-section .advantage', {
        autoAlpha: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: commonScrollTrigger('.patent_content2 .benefit-section')
    })

    gsap.from('.patent_content2 .process-section .step', {
        autoAlpha: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: commonScrollTrigger('.patent_content2 .process-section')
    })

    setTimeout(() => {
        ScrollTrigger.refresh()
    }, 500)
})
</script>
