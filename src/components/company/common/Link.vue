<template>
  <div class="regions-container">
    <!-- 一级菜单 - 横向排列 -->
    <div class="sidebar-horizontal">
      <div 
        v-for="region in regions" 
        :key="region.id"
        class="menu-item"
        :class="{ active: isActiveRegion(region.id), 'current-region': region.id === activeRegion }"
        @click="selectRegion(region.id)"
      >
        {{ region.name }}
      </div>
    </div>
    
    <!-- 二级内容显示区域 -->
    <div class="content">
        <div v-if="selectedRegion" class="country-grid">
          <div 
            v-for="country in selectedRegion.countries" 
            :key="country.name"
            class="country-item"
            :class="{ 'active-country': route.path === country.route }"
            @click="goToRoute(country.route)"
          >
            {{ country.name }}
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import '@/css/company/common/Link.css'

import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 路由跳转方法
const goToRoute = (routePath) => {
  router.push(routePath)
}

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

// 计算当前激活的区域
const activeRegion = computed(() => {
  return countryToRegionMap[route.path] || 'east-asia'
})

// 监听路由变化，自动切换到对应的区域
watch(route, () => {
  selectedRegionId.value = activeRegion.value
})

// 定义地区数据
const regions = ref([
  { 
    id: 'east-asia', 
    name: '东亚公司注册', 
    countries: [
      { name: '日本', route: '/company/jp' },
      { name: '韩国', route: '/company/kr' },
      { name: '香港', route: '/company/hk' },
      { name: '澳门', route: '/company/mo' },
    ] 
  },
  { 
    id: 'southeast-asia', 
    name: '东南亚公司注册', 
    countries: [
      { name: '越南', route: '/company/vn' },
      { name: '泰国', route: '/company/th' },
      { name: '马来西亚', route: '/company/my' },
      { name: '印度尼西亚', route: '/company/id' },
      { name: '新加坡', route: '/company/sg' }
    ] 
  },
  { 
    id: 'north-america', 
    name: '北美公司注册', 
    countries: [
      { name: '美国', route: '/company/us' },
      { name: '加拿大', route: '/company/ca' }
    ] 
  },
  { 
    id: 'europe', 
    name: '欧洲公司注册', 
    countries: [
      { name: '英国', route: '/company/uk' },
      { name: '德国', route: '/company/de' },
      { name: '法国', route: '/company/fr' }
    ] 
  },
  { 
    id: 'offshore', 
    name: '离岸金融中心', 
    countries: [
      { name: 'BVI', route: '/company/bvi' },
      { name: '开曼', route: '/company/ky' },
      { name: '塞舌尔', route: '/company/sc' },
      { name: '马绍尔', route: '/company/mh' },
      { name: '萨摩亚', route: '/company/ws' }
    ] 
  }
])

// 当前选中的地区
const selectedRegionId = ref('east-asia')

// 计算属性：获取选中的地区对象
const selectedRegion = computed(() => {
  return regions.value.find(region => region.id === selectedRegionId.value)
})

// 判断是否为当前激活的地区
const isActiveRegion = (regionId) => {
  return selectedRegionId.value === regionId
}

// 选择地区
const selectRegion = (regionId) => {
  selectedRegionId.value = regionId
}

// 组件挂载时根据当前路由选择对应地区
onMounted(() => {
  selectedRegionId.value = activeRegion.value
})

</script>