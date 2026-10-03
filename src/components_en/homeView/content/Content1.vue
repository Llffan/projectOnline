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
                    <h1 class="main-title animated-element">SHI ZHOU TONG</h1>
                    <h2 class="sub-title animated-element">Global Corporate Services Expert</h2>
                    <p class="description animated-element">
                      Focusing on global company registration and overseas bank account opening,<br/>
                      helping enterprises easily expand into international markets,<br/>
                      and unblocking cross-border business operations.
                    </p>
                    <div class="license-info animated-element">Hong Kong TCSP License No. TC010744</div>
                    <div class="button-container animated-element">
                      <button class="learn-more-btn" @click="router.push('/company_en/hk')">Learn More</button>
                    </div>
                  </div>
               </div>
            </el-carousel-item>
            <el-carousel-item key="slide-2">
               <div class="carousel-slide slide-2">
                  <img loading="lazy" :src="images[1]" alt="" draggable="false"/>
                  <div class="slide-content">
                    <h1 class="main-title animated-element">SHI ZHOU TONG</h1>
                    <h2 class="sub-title animated-element">Global Corporate Services Expert</h2>
                    <p class="description animated-element">
                      Focusing on global company registration and overseas bank account opening,<br/>
                      helping enterprises easily expand into international markets,<br/>
                      and unblocking cross-border business operations.
                    </p>
                    <div class="license-info animated-element">Hong Kong TCSP License No. TC010744</div>
                    <div class="button-container animated-element">
                      <button class="learn-more-btn" @click="router.push('/company_en/hk')">Learn More</button>
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
import '@/css_en/homeView/content/Content1.css'
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