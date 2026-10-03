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
                <SectionHeading title="Bank Account Opening" subtitle="Bank Account Opening Service" />
                <div class="intro">
                    With global economic integration, opening overseas accounts has become an important channel for individuals and enterprises' global asset allocation.
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
import '@/css_en/homeView/content/Content3.css'
import { ref } from 'vue'
import AnimatedSection from '@/components_en/common/AnimatedSection.vue'
import SectionHeading from '@/components_en/common/SectionHeading.vue'
import FeatureCard from '@/components_en/common/FeatureCard.vue'

const account_body = ref([
    {
        img: new URL('@/assets/img/account/香港.png', import.meta.url).href,
        title: 'Hong Kong Bank Account',
        desc: 'Offers comprehensive international financial services under mature banking laws, providing flexible business solutions and free capital flow.',
        path: '/en/bank/hk/constructions'
    }, {
        img: new URL('@/assets/img/account/澳门.png', import.meta.url).href,
        title: 'Macao Bank Account',
        desc: 'Enjoy high financial freedom with no foreign exchange controls, offering free capital mobility and highly competitive financing costs.',
        path: '/en/bank/mo/icbc'
    }, {
        img: new URL('@/assets/img/account/新加坡.png', import.meta.url).href,
        title: 'Singapore Bank Account',
        desc: 'Provides both traditional and complex financial solutions to help global businesses efficiently manage international commercial needs.',
        path: '/en/bank/sg/ocbc'
    }, {
        img: new URL('@/assets/img/account/美国.png', import.meta.url).href,
        title: 'US Bank Account',
        desc: 'Enjoy advanced banking benefits, enabling quick North American payment collection, instant settlements, and enhanced commercial credibility.',
        path: '/en/bank/us/cbi'
    }
])
</script>
