<template>
    <div class="bottom_box">
        <div class="bottom_content">
            <div class="bottom_link">
                <div class="link">
                     <a href="">首页</a>
                     <a href="">全球公司注册</a>
                     <a href="">海外银行开户</a>
                </div>
                <div class="link">
                    <a href="">国际公证认证</a>
                    <a href="">跨境知识产权</a>
                    <a href="">海外投资管理</a>
                </div>
                <div class="contact_us">
                    <p>联系我们</p>
                    <p>地址：深圳市南山区众冠时代广场A座1413</p>
                    <p>邮箱：yjx@yicomply.com</p>
                    <p>电话：400-930-8099</p>
                </div>
                <div class="link_img">

                </div>
            </div>
        </div>
        <div class="bottom_img" ref="imgBox">
            <img ref="img1" class="img1" src="@/assets/img/bottom/footer.png" alt="">
            <img ref="img2" class="img2" src="@/assets/img/bottom/footer2.png" alt="">
        </div>
        <div class="bottom_text">
            © 十洲通（深圳）科技有限公司 版权所有 粤ICP备2021170722号
        </div>
    </div>
</template>

<script setup>
import '@/css/homeView/bottom/Bottom1.css'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const imgBox = ref(null);
const img1 = ref(null);
const img2 = ref(null);

let imgObserver = null;
let tl = null; // 保存动画时间线引用

// 重置元素到初始状态
const resetElements = () => {
  if (img1.value && img2.value) {
    // 如果有正在运行的动画，先杀死它
    if (tl) {
      tl.kill();
      tl = null;
    }
    
    gsap.set(img1.value, { opacity: 0, y: 100 });
    gsap.set(img2.value, { opacity: 0, y: 100 });
  }
};

// 播放动画
const playAnimation = () => {
  if (img1.value && img2.value) {
    // 先确保元素处于初始状态
    resetElements();
    
    // 使用timeline创建动画序列
    tl = gsap.timeline();
    
    tl.to(img1.value, { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power4.out' 
    })
    .to(img2.value, { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power4.out' 
    }, "-=0.7"); // 与前一个动画重叠0.3秒
  }
};

onMounted(() => {
  // 创建 Intersection Observer
  imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 元素进入视口时播放动画
        playAnimation();
      } else {
        // 元素离开视口时重置状态
        resetElements();
      }
    });
  }, {
    threshold: 0.5 // 降低阈值使更容易触发
  });

  // 观察元素
  if (imgBox.value) {
    imgObserver.observe(imgBox.value);
  }
  
  // 初始化元素状态
  resetElements();
});

onBeforeUnmount(() => {
  if (imgObserver) {
    imgObserver.disconnect();
  }
  
  // 清理动画
  if (tl) {
    tl.kill();
  }
});
</script>