<template>
    <AnimatedSection class="content5">
        <div class="scoll_backImg scoll_common">
            <div class="scoll_cover"></div>
            <div class="cover_content">
                <div class="content_desc">
                    <p>SHI ZHOU TONG provides offshore registration services across more than 60 countries and regions, focusing on company registration, account opening, annual review, accounting and tax filing, and trademark protection.</p>
                    <div class="button" @click="router.push('/company_en/hk')" style="cursor: pointer;">Details<p class="p1">→</p></div>
                </div>
                <div class="content_body">
                    <div class="num_display" ref="coverRef">
                        <div class="num" v-for="(item, idx) in num_display" :key="idx">
                            <span>{{ cover_displayValues[idx] }}</span>+
                            <p>{{ item.desc }}</p>
                        </div>
                    </div>
                    <div class="account_img">
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
                        <img loading="lazy" src="@/assets/img/bank/1.png" alt="">
                        <img loading="lazy" src="@/assets/img/bank/2.jpg" alt="">
                        <img loading="lazy" src="@/assets/img/bank/3.jpg" alt="">
                        <img loading="lazy" src="@/assets/img/bank/4.jpg" alt="">
                        <img loading="lazy" src="@/assets/img/bank/5.jpg" alt="">
                        <img loading="lazy" src="@/assets/img/bank/6.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="scoll_content">
            <div class="scoll_content1">
                <h2>
                    Why Choose SHI ZHOU TONG
                </h2>
                <span>Why Choose SHI ZHOU TONG</span>
            </div>
            <p class="p3">Driven by customer needs and development concepts, to create one-stop international services.</p>
            <div class="scoll_content2">
                <FeatureCard v-for="item in advantages" :key="item.title" :title="item.title" class="advantage">
                    <div class="img">
                        <img loading="lazy" :src="item.imgSrc" :alt="item.title">
                    </div>
                    <div class="text1">
                        {{ item.title }}
                    </div>
                    <div class="text2">
                        {{ item.description }}
                    </div>
                </FeatureCard>
            </div>
        </div>
    </AnimatedSection>
</template>

<script setup>
import AnimatedSection from '@/components_en/common/AnimatedSection.vue'
import FeatureCard from '@/components_en/common/FeatureCard.vue'
import { useCountUp } from '@/composables/useCountUp'
import '@/css_en/homeView/content/Content5.css'
import { useRouter } from 'vue-router'
import { ref } from 'vue'



const router = useRouter()

let num_display = ref([
    {
        initialValue: 40,
        finalValue: 40,
        desc: 'Global Bank Accounts Opened'
    },{
        initialValue: 60,
        finalValue: 60,
        desc: 'Countries for Company Registration'
    },{
        initialValue: 50,
        finalValue: 50,
        desc: 'Countries for Financial License'
    },{
        initialValue: 30,
        finalValue: 30,
        desc: 'Countries for Trademark Registration'
    }
])

const { trigger: coverRef, values: cover_displayValues } = useCountUp(num_display)

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: 'Fast Track Service',
        description: 'Foreign investors can enjoy fast-track services and apply electronically, completing registration in just two weeks.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: 'Rich Experience & Success Cases',
        description: 'With SME development as its core goal, SHI ZHOU TONG has provided professional consulting for numerous enterprises.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: 'Professional Value-added Services',
        description: 'Our overseas teams assist clients with comprehensive financial, tax, and legal services, ensuring high efficiency.'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: 'Dedicated Business Support',
        description: 'Consultants, accountants, and specialists form dedicated teams for one-on-one advisory and progress coordination.'
    }
]

</script>
