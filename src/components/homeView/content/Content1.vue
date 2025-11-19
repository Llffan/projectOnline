<template>
    <!-- 轮播图 -->
    <div class="content1">
        <div class="block text-center" m="t-4">
          <el-carousel 
            ref="carouselRef"
            trigger="click" 
            height="100vh" 
            :autoplay="false" 
            indicator-position="inside" 
            arrow="always"
            @change="handleSlideChange"
            :loop="false"
          >
            <el-carousel-item key="slide-1" ref="firstSlideRef">
               <div class="carousel-slide slide-1">
                  <img :src="images[0]" alt="" draggable="false"/>
                  <div class="slide-content">
                    <h1 class="main-title animated-element" ref="mainTitleRef">十洲通</h1>
                    <h2 class="sub-title animated-element" ref="subTitleRef">全球企业服务专业机构</h2>
                    <p class="description animated-element" ref="descriptionRef">
                      聚焦全球公司注册与海外银行开户，<br/>
                      助力企业轻松布局国际市场，<br/>
                      打通跨境经营链路
                    </p>
                    <div class="button-container animated-element" ref="buttonContainerRef">
                      <button class="learn-more-btn" ref="learnMoreBtnRef">了解更多</button>
                    </div>
                  </div>
               </div>
            </el-carousel-item>
            <el-carousel-item key="slide-2">
               <div class="carousel-slide slide-2">
                  <img :src="images[1]" alt="" draggable="false"/>
                  <div class="slide-content">
                    <h1 class="main-title animated-element" ref="mainTitleRef2">十洲通</h1>
                    <h2 class="sub-title animated-element" ref="subTitleRef2">全球企业服务专业机构</h2>
                    <p class="description animated-element" ref="descriptionRef2">
                      聚焦全球公司注册与海外银行开户，<br/>
                      助力企业轻松布局国际市场，<br/>
                      打通跨境经营链路
                    </p>
                    <div class="button-container animated-element" ref="buttonContainerRef2">
                      <button class="learn-more-btn" ref="learnMoreBtnRef2">了解更多</button>
                    </div>
                  </div>
               </div>
            </el-carousel-item>
          </el-carousel>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import '@/css/homeView/content/Content1.css'
import gsap from 'gsap'

const images = ref([
  new URL('@/assets/img/background-img2.png', import.meta.url).href,
  new URL('@/assets/img/background-img1.png', import.meta.url).href,
])

const carouselRef = ref(null)
const firstSlideRef = ref(null)
let startX = 0
let endX = 0
let startY = 0
let endY = 0
let isDragging = false

// 动画相关的refs
const mainTitleRef = ref(null)
const subTitleRef = ref(null)
const descriptionRef = ref(null)
const buttonContainerRef = ref(null)
const learnMoreBtnRef = ref(null)

// 第二张幻灯片的refs
const mainTitleRef2 = ref(null)
const subTitleRef2 = ref(null)
const descriptionRef2 = ref(null)
const buttonContainerRef2 = ref(null)
const learnMoreBtnRef2 = ref(null)

// 处理轮播图切换事件
const handleSlideChange = (currentIndex) => {
  // 延迟一小段时间确保DOM已经更新
  setTimeout(() => {
    playSlideAnimation(currentIndex);
  }, 50);
}

// 根据当前幻灯片索引播放对应动画
const playSlideAnimation = (index) => {
  if (index === 0) {
    // 播放第一张幻灯片的动画
    playFirstSlideAnimation();
  } else if (index === 1) {
    // 播放第二张幻灯片的动画
    playSecondSlideAnimation();
  }
}

// 播放第一张幻灯片的动画
const playFirstSlideAnimation = () => {
  // 检查所有需要动画的元素是否存在
  if (!mainTitleRef.value || !subTitleRef.value || !descriptionRef.value || !buttonContainerRef.value) {
    return;
  }

  // 使用GSAP时间线创建连续动画
  const tl = gsap.timeline();

  // 先将所有元素设置为初始状态
  gsap.set([mainTitleRef.value, subTitleRef.value, descriptionRef.value, buttonContainerRef.value], {
    opacity: 0,
    y: 50
  });

  tl.to(mainTitleRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power4.out",
    delay: 0.3
  }).to(subTitleRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out"
  }, "-=0.6").to(descriptionRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out"
  }, "-=0.6").to(buttonContainerRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out"
  }, "-=0.6");
}

// 播放第二张幻灯片的动画
const playSecondSlideAnimation = () => {
  // 检查所有需要动画的元素是否存在
  if (!mainTitleRef2.value || !subTitleRef2.value || !descriptionRef2.value || !buttonContainerRef2.value) {
    return;
  }

  // 使用GSAP时间线创建连续动画
  const tl = gsap.timeline();

  // 先将所有元素设置为初始状态
  gsap.set([mainTitleRef2.value, subTitleRef2.value, descriptionRef2.value, buttonContainerRef2.value], {
    opacity: 0,
    y: 50
  });

  tl.to(mainTitleRef2.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power4.out",
    delay: 0.3
  }).to(subTitleRef2.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out"
  }, "-=0.6").to(descriptionRef2.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out"
  }, "-=0.6").to(buttonContainerRef2.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out"
  }, "-=0.6");
}

// 鼠标/触摸开始事件
const handleStart = (clientX, clientY) => {
  startX = clientX
  startY = clientY
  isDragging = true
}

// 鼠标/触摸移动事件
const handleMove = (clientX, clientY) => {
  if (!isDragging) return
  // 可以在这里添加拖拽时的视觉反馈
}

// 鼠标/触摸结束事件
const handleEnd = (clientX, clientY) => {
  if (!isDragging) return
  isDragging = false
  
  endX = clientX
  endY = clientY
  
  const diffX = endX - startX
  const diffY = Math.abs(endY - startY)
  
  // 判断是否为水平拖拽且拖拽距离足够
  if (Math.abs(diffX) > 50 && diffY < 100) {
    if (diffX > 0 && carouselRef.value) {
      // 向右拖拽，显示上一张
      carouselRef.value.prev()
    } else if (carouselRef.value) {
      // 向左拖拽，显示下一张
      carouselRef.value.next()
    }
  }
}

// 首次挂载时播放动画
onMounted(() => {
  // 初始播放第一张幻灯片的动画
  setTimeout(() => {
    playFirstSlideAnimation();
  }, 100);

  const carouselElement = carouselRef.value?.$el
  if (carouselElement) {
    // 鼠标事件
    carouselElement.addEventListener('mousedown', (e) => handleStart(e.clientX, e.clientY))
    carouselElement.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY))
    carouselElement.addEventListener('mouseup', (e) => handleEnd(e.clientX, e.clientY))
    carouselElement.addEventListener('mouseleave', (e) => {
      if (isDragging) {
        handleEnd(e.clientX, e.clientY)
      }
    })
    
    // 触摸事件
    carouselElement.addEventListener('touchstart', (e) => {
      handleStart(e.touches[0].clientX, e.touches[0].clientY)
    })
    carouselElement.addEventListener('touchmove', (e) => {
      handleMove(e.touches[0].clientX, e.touches[0].clientY)
    })
    carouselElement.addEventListener('touchend', (e) => {
      if (e.changedTouches.length > 0) {
        handleEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      }
    })
  }
})

// 移除事件监听器
onUnmounted(() => {
  const carouselElement = carouselRef.value?.$el
  if (carouselElement) {
    carouselElement.removeEventListener('mousedown', (e) => handleStart(e.clientX, e.clientY))
    carouselElement.removeEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY))
    carouselElement.removeEventListener('mouseup', (e) => handleEnd(e.clientX, e.clientY))
    carouselElement.removeEventListener('mouseleave', (e) => {
      if (isDragging) {
        handleEnd(e.clientX, e.clientY)
      }
    })
    
    carouselElement.removeEventListener('touchstart', (e) => {
      handleStart(e.touches[0].clientX, e.touches[0].clientY)
    })
    carouselElement.removeEventListener('touchmove', (e) => {
      handleMove(e.touches[0].clientX, e.touches[0].clientY)
    })
    carouselElement.removeEventListener('touchend', (e) => {
      if (e.changedTouches.length > 0) {
        handleEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      }
    })
  }
})
</script>

<style lang="scss" scoped>
// 为动画元素添加初始状态
.animated-element {
  opacity: 0;
  transform: translateY(50px);
  transition: none; // 禁用过渡效果，让GSAP完全控制动画
}
</style>