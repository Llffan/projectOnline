<template>
    <!-- 轮播图 -->
    <div class="content1" ref="heroRef" @mousedown="handleStart" @mouseup="handleEnd" @mouseleave="handleEnd" @touchstart.passive="handleStart" @touchend="handleEnd">
        <div class="block text-center" m="t-4">
          <el-carousel 
            ref="carouselRef"
            trigger="click" 
            height="calc(100vh + 82px)" 
            :autoplay="false" 
            indicator-position="none"
            arrow="always"
            @change="handleSlideChange"
            :loop="false"
          >
            <el-carousel-item key="slide-1">
               <div class="carousel-slide slide-1">
                  <img loading="lazy" :src="images[0]" alt="" draggable="false"/>
                  <div class="slide-content">
                    <h1 class="main-title animated-element">十洲通</h1>
                    <h2 class="sub-title animated-element">全球企业服务专业机构</h2>
                    <p class="description animated-element">
                      聚焦全球公司注册与海外银行开户，<br/>
                      助力企业轻松布局国际市场，<br/>
                      打通跨境经营链路
                    </p>
                    <div class="license-info animated-element">香港公司秘书服务牌照（TCSP License）TC010744</div>
                    <div class="button-container animated-element">
                      <button class="learn-more-btn" @click="router.push('/company/hk')">了解更多</button>
                    </div>
                  </div>
               </div>
            </el-carousel-item>
            <el-carousel-item key="slide-2">
               <div class="carousel-slide slide-2">
                  <img loading="lazy" :src="images[1]" alt="" draggable="false"/>
                  <div class="slide-content">
                    <h1 class="main-title animated-element">十洲通</h1>
                    <h2 class="sub-title animated-element">全球企业服务专业机构</h2>
                    <p class="description animated-element">
                      聚焦全球公司注册与海外银行开户，<br/>
                      助力企业轻松布局国际市场，<br/>
                      打通跨境经营链路
                    </p>
                    <div class="license-info animated-element">香港公司秘书服务牌照（TCSP License）TC010744</div>
                    <div class="button-container animated-element">
                      <button class="learn-more-btn" @click="router.push('/company/hk')">了解更多</button>
                    </div>
                  </div>
               </div>
            </el-carousel-item>
          </el-carousel>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import '@/css/homeView/content/Content1.css'
import { useHeroCarousel } from '@/composables/useHeroCarousel'

const router = useRouter()
const images = [
  new URL('@/assets/img/background-img2.png', import.meta.url).href,
  new URL('@/assets/img/background-img1.png', import.meta.url).href,
]
const carouselRef = ref(null)
const heroRef = ref(null)
const { handleSlideChange, handleStart, handleEnd } = useHeroCarousel(carouselRef, heroRef)
</script>