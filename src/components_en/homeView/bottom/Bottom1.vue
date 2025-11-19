<template>
    <div class="bottom_box">
        <div class="bottom_content">
            <div class="bottom_link">
                <div class="link">
                     <a href="/">Home</a>
                     <a href="/1">Company Registration</a>
                     <a href="/2">Bank Accounts</a>
                </div>
                <div class="link">
                    <a href="/3">Notarization</a>
                    <a href="/4">Intellectual Property</a>
                    <a href="/5">Investment Management</a>
                </div>
                <div class="contact_us">
                    <p>Contact Us</p>
                    <p>Address: Room 1413, Building A, Zhongguan Times Square, Nanshan District, Shenzhen</p>
                    <p>Email: yjx@yicomply.com</p>
                    <p>Phone: 400-930-8099</p>
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
import '@/css_en/homeView/bottom/Bottom1.css'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const imgBox = ref(null);
const img1 = ref(null);
const img2 = ref(null);

let imgObserver = null;
let tl = null; // Save animation timeline reference

// Reset elements to initial state
const resetElements = () => {
  if (img1.value && img2.value) {
    // If there's a running animation, kill it first
    if (tl) {
      tl.kill();
      tl = null;
    }
    
    gsap.set(img1.value, { opacity: 0, y: 100 });
    gsap.set(img2.value, { opacity: 0, y: 100 });
  }
};

// Play animation
const playAnimation = () => {
  if (img1.value && img2.value) {
    // Ensure elements are in initial state first
    resetElements();
    
    // Create animation sequence with timeline
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
    }, "-=0.7"); // Overlap with previous animation by 0.3 seconds
  }
};

onMounted(() => {
  // Create Intersection Observer
  imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Play animation when element enters viewport
        playAnimation();
      } else {
        // Reset state when element leaves viewport
        resetElements();
      }
    });
  }, {
    threshold: 0.5 // Lower threshold to make it easier to trigger
  });

  // Observe element
  if (imgBox.value) {
    imgObserver.observe(imgBox.value);
  }
  
  // Initialize element state
  resetElements();
});

onBeforeUnmount(() => {
  if (imgObserver) {
    imgObserver.disconnect();
  }
  
  // Clean up animation
  if (tl) {
    tl.kill();
  }
});
</script>