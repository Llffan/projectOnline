<template>
    <AnimatedSection class="content4">
        <div class="scoll_backImg scoll_common">
            <div class="scoll_cover"></div>
            <div class="cover_content">
                <div class="content_desc">
                    <h2>
                        我们积累了丰富的经验
                    </h2>
                    <span class="content_en">
                        We Have Accumulated Rich Experience
                    </span>
                </div>
                <div class="content_body" ref="coverRef">
                    <div class="nums_display" v-for="(item, idx) in cover_content" :key="idx">
                        <p><span class="num">{{ cover_displayValues[idx] }}</span>{{item.unit}}</p>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="scoll_content">
            <div class="scoll_content1">
                <div v-for="(item, index) in features" :key="index">
                    <div class="icon_wrapper">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="item.icon"></use> 
                        </svg>
                    </div>

                    <div>
                        <p>
                            {{ item.title }}
                        </p>
                        <span>
                            {{ item.desc }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="scoll_content2">
                <h2>
                    十洲通秘书服务
                </h2>
                <span>Secretarial Service</span>
            </div>
            <p class="p3">在企业发展过程中，专业秘书服务已成为众多企业，尤其是离岸公司实现合规、高效运营的重要保障。作为企业的“贴身助手”，秘书服务不仅能够协助企业处理日常行政及合规事务，还能提供专业、高效的商务支持。<br />选择十洲通秘书服务，让您专注于核心业务发展，其余事务交由我们的专业团队处理，省心、放心、安心。</p>

            <div class="scoll_content3">
                <FeatureCard class="content3_body" v-for="item in content3_body" :key="item.path" :title="item.title" :to="item.path">
                    <img loading="lazy" :src="item.img" :alt="item.title">
                    <p>{{item.title}}</p>
                    <span>{{item.desc}}</span>
                </FeatureCard>
            </div>
        </div>
    </AnimatedSection>
</template>

<script setup>
import AnimatedSection from '@/components/common/AnimatedSection.vue'
import FeatureCard from '@/components/common/FeatureCard.vue'
import { useCountUp } from '@/composables/useCountUp'
import '@/css/homeView/content/Content4.css'


import { ref } from 'vue'



const features = [
    { title: '价格透明', desc: '统一报价，无隐形消费', icon: '#icon-finance' },
    { title: '专业高效', desc: '100人专业团队，效率高', icon: '#icon-award-line' },
    { title: '安全保障', desc: '资料不外泄，安全保密', icon: '#icon-audit' },
    { title: '专业服务', desc: '专业客服1对1服务', icon: '#icon-cooperative-handshake' }
]

let cover_content = ref([
    {
        initialValue: 1,
        finalValue: 1,
        unit: '年',
        desc: '公司注册从业经验'
    },{
        initialValue: 100,
        finalValue: 100,
        unit: '家',
        desc: '成功设立的海外公司'
    },{
        initialValue: 10,
        finalValue: 10,
        unit: '个',
        desc: '成功开通的海外银行账户'
    },{
        initialValue: 10,
        finalValue: 10,
        unit: '个',
        desc: '企业成为长期客户'
    },
])
const { trigger: coverRef, values: cover_displayValues } = useCountUp(cover_content)

let content3_body = ref([
    {
        img: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '全球公司年审',
        desc: '专业团队提供全球公司年审服务，确保您的公司始终符合各地法规要求，及时处理年度报告、财务申报等事务，让您专注于核心业务发展！',
        path: '/secretary/overseas-annual'
    },{
        img: new URL('@/assets/img/account/2.png', import.meta.url).href,
        title: '香港业务服务',
        desc: '深耕香港市场多年，精通公司法例及政府程序，快速响应政策变化，让您的香港公司注册、变更、注销等业务高效完成！',
        path: '/secretary/hk-annual'
    },{
        img: new URL('@/assets/img/account/3.png', import.meta.url).href,
        title: '条形码服务',
        desc: '一站式条形码服务，帮助企业快速获取国际通用商品标识，打通产品进入全球市场的编码关卡，轻松拓展海外业务！',
        path: '/secretary/barcode'
    },{
        img: new URL('@/assets/img/account/4.png', import.meta.url).href,
        title: '境外投资备案',
        desc: '协助企业完成境外投资备案手续，熟悉发改委、商务部、外管局等部门的审批流程，提供全程指导服务，确保您的海外投资合规顺利进行。',
        path: '/secretary/hk-odi'
    },{
        img: new URL('@/assets/img/company/2.png', import.meta.url).href,
        title: '公司注销与恢复',
        desc: '妥善处理公司注销与恢复事宜，专业解决债权债务、税务清算等复杂程序，为企业的战略调整提供可靠支持，确保流程合法合规。',
        path: '/secretary/dissolution'
    }
])

</script>
