<template>
    <!-- 顶部导航栏 -->
        <div class="top2" :class="{ 'scrolled': isScrolled }">
            <div class="logo">
                <img :src="logoSrc" alt="">
            </div>
            <div class="links">
                <router-link to="/" class="nav-link" active-class="active" exact-active-class="exact-active">首页</router-link>
                <div class="nav-dropdown">
                    <router-link to="/company/hk" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isCompanyRoute }">全球公司注册</router-link>
                    <div class="dropdown-menu menu1">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'east-asia' }">
                            <div class="region-title">东亚公司注册</div>
                            <div class="region-countries">
                                <router-link to="/company/jp">日本公司注册</router-link>
                                <router-link to="/company/kr">韩国公司注册</router-link>
                                <router-link to="/company/hk">中国香港公司注册</router-link>
                                <router-link to="/company/mo">中国澳门公司注册</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'southeast-asia' }">
                            <div class="region-title">东南亚公司注册</div>
                            <div class="region-countries">
                                <router-link to="/company/vn">越南公司注册</router-link>
                                <router-link to="/company/th">泰国公司注册</router-link>
                                <router-link to="/company/my">马来西亚公司注册</router-link>
                                <router-link to="/company/id">印度尼西亚公司注册</router-link>
                                <router-link to="/company/sg">新加坡公司注册</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'north-america' }">
                            <div class="region-title">北美公司注册</div>
                            <div class="region-countries">
                                <router-link to="/company/us">美国公司注册</router-link>
                                <router-link to="/company/ca">加拿大公司注册</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'europe' }">
                            <div class="region-title">欧洲公司注册</div>
                            <div class="region-countries">
                                <router-link to="/company/uk">英国公司注册</router-link>
                                <router-link to="/company/de">德国公司注册</router-link>
                                <router-link to="/company/fr">法国公司注册</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'offshore' }">
                            <div class="region-title">离岸金融中心</div>
                            <div class="region-countries">
                                <router-link to="/company/bvi">BVI公司注册</router-link>
                                <router-link to="/company/ky">开曼公司注册</router-link>
                                <router-link to="/company/sc">塞舌尔公司注册</router-link>
                                <router-link to="/company/mh">马绍尔公司注册</router-link>
                                <router-link to="/company/ws">萨摩亚公司注册</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link to="/2" class="nav-link" active-class="active" exact-active-class="exact-active">海外银行开户</router-link>
                 <div class="nav-dropdown">
                    <router-link to="/3" class="nav-link" active-class="active" exact-active-class="exact-active">国际公证认证</router-link>
                    <div class="dropdown-menu menu2">
                        <router-link to="/1/f">检测认证</router-link>
                    </div>
                </div>
                <div class="nav-dropdown">
                    <router-link to="/4" class="nav-link" active-class="active" exact-active-class="exact-active">跨境知识产权</router-link>
                    <div class="dropdown-menu menu3">
                        <router-link to="/1/g">日本JTC税号注册</router-link>
                        <router-link to="/1/h">中国香港公司审计</router-link>
                    </div>
                </div>
                <div class="nav-dropdown">
                    <router-link to="/5" class="nav-link" active-class="active" exact-active-class="exact-active">海外投资管理</router-link>
                    <div class="dropdown-menu menu4">
                        <router-link to="/1/i">境外投资备案</router-link>
                        <router-link to="/1/j">境外金融照拍</router-link>
                    </div>
                </div>
            </div>
            <div class="contact-info">
                <div class="phone">400-888-8888</div>
                <div class="website"><a href="/en">English</a></div>
            </div>
        </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'
import '@/css/homeView/top/Top2.css'

const route = useRoute()
const isScrolled = ref(false)

// 判断是否为公司相关路由
// 映射国家路由到区域ID
const countryToRegionMap = {
  // 东亚
  '/company/jp': 'east-asia',
  '/company/kr': 'east-asia',
  '/company/hk': 'east-asia',
  '/company/mo': 'east-asia',
  
  // 东南亚
  '/company/vn': 'southeast-asia',
  '/company/th': 'southeast-asia',
  '/company/my': 'southeast-asia',
  '/company/id': 'southeast-asia',
  '/company/sg': 'southeast-asia',
  
  // 北美
  '/company/us': 'north-america',
  '/company/ca': 'north-america',
  
  // 欧洲
  '/company/uk': 'europe',
  '/company/de': 'europe',
  '/company/fr': 'europe',
  
  // 离岸金融中心
  '/company/bvi': 'offshore',
  '/company/ky': 'offshore',
  '/company/sc': 'offshore',
  '/company/mh': 'offshore',
  '/company/ws': 'offshore'
}

// 判断是否为公司相关路由
const isCompanyRoute = computed(() => {
  return route.path.startsWith('/company/')
})

// 计算当前激活的区域
const activeRegion = computed(() => {
  return countryToRegionMap[route.path] || 'east-asia'
})

// 计算logo图片路径
const logoSrc = computed(() => {
  return isScrolled.value 
    ? new URL('@/assets/img/logo.png', import.meta.url).href 
    : new URL('@/assets/img/logo1.png', import.meta.url).href
})

const handleScroll = () => {
  const content1Element = document.querySelector('.content1')
  
  if (content1Element) {
    const content1Rect = content1Element.getBoundingClientRect()
    const content1Height = content1Rect.height

    const threshold = content1Height * 2 / 3
    
    if (content1Rect.top < -threshold) {
      isScrolled.value = true
    } else {
      isScrolled.value = false
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
    
</style>