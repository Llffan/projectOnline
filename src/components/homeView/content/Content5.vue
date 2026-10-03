<template>
    <AnimatedSection class="content5">
        <div class="scoll_backImg scoll_common">
            <div class="scoll_cover"></div>
            <div class="cover_content">
                <div class="content_desc">
                    <p>十洲通提供覆盖60多个国家及地区的全球离岸注册服务，专注于公司注册、开户、年审、做账审计报税和商标品牌保护。</p>
                    <div class="button" @click="router.push('/company/hk')" style="cursor: pointer;">了解详细<p class="p1">→</p></div>
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
                    为什么选择十洲通
                </h2>
                <span>Why Choose SHI ZHOU TONG</span>
            </div>
            <p class="p3">以客户需求和发展理念为驱动力，打造国际一站式服务</p>
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
import AnimatedSection from '@/components/common/AnimatedSection.vue'
import FeatureCard from '@/components/common/FeatureCard.vue'
import { useCountUp } from '@/composables/useCountUp'
import '@/css/homeView/content/Content5.css'
import { useRouter } from 'vue-router'
import { ref } from 'vue'



const router = useRouter()

let num_display = ref([
    {
        initialValue: 40,
        finalValue: 40,
        desc: '全球银行开户'
    },{
        initialValue: 60,
        finalValue: 60,
        desc: '国家企业注册业务'
    },{
        initialValue: 50,
        finalValue: 50,
        desc: '国家金融牌照注册'
    },{
        initialValue: 30,
        finalValue: 30,
        desc: '国家商标注册'
    }
])

const { trigger: coverRef, values: cover_displayValues } = useCountUp(num_display)

const advantages = [
    {
        imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href,
        title: '快速通道服务',
        description: '外国投资者注册企业可以享受快速通道服务，并可以通过无纸化电子方式提交申请，仅需二周时间即可完成注册。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href,
        title: '经验丰富，大量成功案例',
        description: '十洲通以中小企业发展为核心目标，为大量企业提供专业的咨询服务。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href,
        title: '提供专业增值服务',
        description: '十洲通在境外拥有自己的团队，协助客户提供综合全面的财务、税务、法律等服务，做到"在外有十洲通，更快捷"。'
    },
    {
        imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href,
        title: '专业专属商务对接和支持',
        description: '顾问、咨询师、会计师等组成项目小组，负责客户一对一咨询、项目进度跟进和沟通协调。'
    }
]

</script>
