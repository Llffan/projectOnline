<template>
  <div id="app">
    <router-view />
    <SideToolbar />
  </div>
</template>

<script setup>
import SideToolbar from './components/SideToolbar.vue';
</script>

<style>
/* 全局样式确保侧边栏不被遮挡 */
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
