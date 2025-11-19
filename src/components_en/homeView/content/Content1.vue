<template>
    <!-- Carousel -->
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
                    <h1 class="main-title animated-element" ref="mainTitleRef">SHI ZHOU TONG</h1>
                    <h2 class="sub-title animated-element" ref="subTitleRef">Global Enterprise Services</h2>
                    <p class="description animated-element" ref="descriptionRef">
                      Specializing in global company registration<br/>
                      and overseas bank accounts,<br/>
                      helping businesses expand globally
                    </p>
                    <div class="button-container animated-element" ref="buttonContainerRef">
                      <button class="learn-more-btn" ref="learnMoreBtnRef">Learn More</button>
                    </div>
                  </div>
               </div>
            </el-carousel-item>
            <el-carousel-item key="slide-2">
               <div class="carousel-slide slide-2">
                  <img :src="images[1]" alt="" draggable="false"/>
                  <div class="slide-content">
                    <h1 class="main-title animated-element" ref="mainTitleRef2">Shizhoutong</h1>
                    <h2 class="sub-title animated-element" ref="subTitleRef2">Global Enterprise Services</h2>
                    <p class="description animated-element" ref="descriptionRef2">
                      Specializing in global company registration<br/>
                      and overseas bank accounts,<br/>
                      helping businesses expand globally
                    </p>
                    <div class="button-container animated-element" ref="buttonContainerRef2">
                      <button class="learn-more-btn" ref="learnMoreBtnRef2">Learn More</button>
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
import '@/css_en/homeView/content/Content1.css'
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

const mainTitleRef = ref(null)
const subTitleRef = ref(null)
const descriptionRef = ref(null)
const buttonContainerRef = ref(null)
const learnMoreBtnRef = ref(null)

// Second slide refs
const mainTitleRef2 = ref(null)
const subTitleRef2 = ref(null)
const descriptionRef2 = ref(null)
const buttonContainerRef2 = ref(null)
const learnMoreBtnRef2 = ref(null)

const handleSlideChange = (currentIndex) => {
  setTimeout(() => {
    playSlideAnimation(currentIndex);
  }, 50);
}

const playSlideAnimation = (index) => {
  if (index === 0) {
    playFirstSlideAnimation();
  } else if (index === 1) {
    playSecondSlideAnimation();
  }
}


const playFirstSlideAnimation = () => {
  if (!mainTitleRef.value || !subTitleRef.value || !descriptionRef.value || !buttonContainerRef.value) {
    return;
  }

  const tl = gsap.timeline();

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

const playSecondSlideAnimation = () => {
  if (!mainTitleRef2.value || !subTitleRef2.value || !descriptionRef2.value || !buttonContainerRef2.value) {
    return;
  }

  const tl = gsap.timeline();

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

const handleStart = (clientX, clientY) => {
  startX = clientX
  startY = clientY
  isDragging = true
}

const handleMove = (clientX, clientY) => {
  if (!isDragging) return
}

const handleEnd = (clientX, clientY) => {
  if (!isDragging) return
  isDragging = false
  
  endX = clientX
  endY = clientY
  
  const diffX = endX - startX
  const diffY = Math.abs(endY - startY)
  
  if (Math.abs(diffX) > 50 && diffY < 100) {
    if (diffX > 0 && carouselRef.value) {
      carouselRef.value.prev()
    } else if (carouselRef.value) {
      carouselRef.value.next()
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    playFirstSlideAnimation();
  }, 100);

  const carouselElement = carouselRef.value?.$el
  if (carouselElement) {
    carouselElement.addEventListener('mousedown', (e) => handleStart(e.clientX, e.clientY))
    carouselElement.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY))
    carouselElement.addEventListener('mouseup', (e) => handleEnd(e.clientX, e.clientY))
    carouselElement.addEventListener('mouseleave', (e) => {
      if (isDragging) {
        handleEnd(e.clientX, e.clientY)
      }
    })
    
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
.animated-element {
  opacity: 0;
  transform: translateY(50px);
  transition: none;
}
</style>