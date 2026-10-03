<template>
    <div class="content3">
        <div class="account_opening">
            <!-- 银行类型 -->
            <div class="account_type">
                <img loading="lazy" class="back_img" src="@/assets/img/company/上海.png" alt="">
                <div class="back_display">
                    <img loading="lazy" src="@/assets/img/bank/1.png" alt="">
                    <img loading="lazy" src="@/assets/img/bank/2.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/3.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/4.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/5.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/6.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/7.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/8.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/9.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/10.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/11.jpg" alt="">
                    <img loading="lazy" src="@/assets/img/bank/12.jpg" alt="">
                </div>
            </div>

            <AnimatedSection class="account_intro">
                <SectionHeading title="银行开户" subtitle="Bank Account Opening Service" />
                <div class="intro">
                    随着全球经济一体化，开设海外账户成为个人和企业进行全球资产配置的重要途径。
                </div>
            </AnimatedSection>
        </div>
        
        <!-- 开户 -->
        <div class="account_body">
            <FeatureCard v-for="item in account_body" :key="item.path" :title="item.title" :to="item.path">
                <div>
                    <img loading="lazy" :src="item.img" alt="">
                    <div>
                        <p class="title1"> {{ item.title }} </p>
                    </div>
                </div>
                <div class="account_desc">
                    {{ item.desc }}
                    <div class="card-more">
                        <p>→</p>
                    </div>
                </div>
            </FeatureCard>
        </div>
    </div>
</template>

<script setup>
import '@/css/homeView/content/Content3.css'
import { ref } from 'vue'
import AnimatedSection from '@/components/common/AnimatedSection.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import FeatureCard from '@/components/common/FeatureCard.vue'

const account_body = ref([
    {
        img: new URL('@/assets/img/account/香港.png', import.meta.url).href,
        title: '香港银行开户',
        desc: '香港作为国际金融中心，银行体系成熟，能够为企业提供多币种账户、跨境收付款和国际贸易结算等服务。我们根据企业业务和资金流向匹配合适的开户方案。',
        path: '/bank/hk/constructions'
    }, {
        img: new URL('@/assets/img/account/澳门.png', import.meta.url).href,
        title: '澳门银行开户',
        desc: '澳门银行账户享有类似香港的金融自由度，无外汇管制且资本可自由流动。澳门金融机构网点分布密集，为客户提供便捷高效的操作体验和具有竞争力的融资成本。',
        path: '/bank/mo/icbc'
    }, {
        img: new URL('@/assets/img/account/新加坡.png', import.meta.url).href,
        title: '新加坡银行开户',
        desc: '新加坡作为国际金融中心，其银行业不仅提供传统存贷款服务，更涵盖复杂的综合性金融解决方案。拥有新加坡银行账户有助于解决企业在当地的各类金融及商务难题。',
        path: '/bank/sg/ocbc'
    }, {
        img: new URL('@/assets/img/account/美国.png', import.meta.url).href,
        title: '美国银行开户',
        desc: '美国作为全球领先的国际金融中心，其银行业高度发达，为企业提供优惠政策支持。开设美国银行账户可便捷接收北美客户款项，实现即时到账且手续费低廉，同时提升企业国际形象与商业信誉。',
        path: '/bank/us/cbi'
    }
])
</script>
