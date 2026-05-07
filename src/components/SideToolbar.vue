<template>
  <div class="side-toolbar-container">
    <!-- WeChat Item -->
    <div class="toolbar-item" @mouseenter="showWechat = true" @mouseleave="showWechat = false">
      <div class="icon-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </div>
      <span class="label">微信</span>
      
      <!-- WeChat QR Popup -->
      <transition name="fade">
        <div v-if="showWechat" class="qr-popup">
          <img loading="lazy" src="@/assets/img/联系我们.jpg" alt="微信联系我们" />
          <p>扫一扫联系我们</p>
          <div class="arrow"></div>
        </div>
      </transition>
    </div>

    <!-- Back to Top -->
    <div class="toolbar-item back-to-top" @click="scrollToTop">
      <div class="icon-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </div>
      <span class="label">回顶部</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showWechat = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.side-toolbar-container {
  position: fixed;
  right: 0;
  top: calc(50% + 54px);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow: visible;
}

.toolbar-item {
  width: 44px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  text-decoration: none;
  color: #555;
  background: #ffffff;
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.back-to-top {
  margin-top: 8px;
}

.toolbar-item:hover {
  background-color: #2b85fb;
  color: #ffffff;
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.label {
  font-size: 10px;
  line-height: 1;
}

/* WeChat QR Popup */
.qr-popup {
  position: absolute;
  right: 54px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 140px;
  text-align: center;
}

.qr-popup img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
}

.qr-popup p {
  margin: 0;
  font-size: 12px;
  color: #666;
}

.qr-popup .arrow {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: white;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(10px);
}
</style>
