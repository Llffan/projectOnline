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
import '@/css_en/company/common/Link.css'

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
  '/company_en/jp': 'east-asia',
  '/company_en/kr': 'east-asia',
  '/company_en/hk': 'east-asia',
  '/company_en/mo': 'east-asia',
  
  // 东南亚
  '/company_en/vn': 'southeast-asia',
  '/company_en/th': 'southeast-asia',
  '/company_en/my': 'southeast-asia',
  '/company_en/id': 'southeast-asia',
  '/company_en/sg': 'southeast-asia',
  
  // 北美
  '/company_en/us': 'north-america',
  '/company_en/ca': 'north-america',
  
  // 欧洲
  '/company_en/uk': 'europe',
  '/company_en/de': 'europe',
  '/company_en/fr': 'europe',
  
  // 离岸金融中心
  '/company_en/bvi': 'offshore',
  '/company_en/ky': 'offshore',
  '/company_en/sc': 'offshore',
  '/company_en/mh': 'offshore',
  '/company_en/ws': 'offshore'
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
    name: 'East Asia', 
    countries: [
      { name: 'Japan', route: '/company_en/jp' },
      { name: 'South Korea', route: '/company_en/kr' },
      { name: 'Hong Kong', route: '/company_en/hk' },
      { name: 'Macao', route: '/company_en/mo' },
    ] 
  },
  { 
    id: 'southeast-asia', 
    name: 'Southeast Asia', 
    countries: [
      { name: 'Vietnam', route: '/company_en/vn' },
      { name: 'Thailand', route: '/company_en/th' },
      { name: 'Malaysia', route: '/company_en/my' },
      { name: 'Indonesia', route: '/company_en/id' },
      { name: 'Singapore', route: '/company_en/sg' }
    ] 
  },
  { 
    id: 'north-america', 
    name: 'North America', 
    countries: [
      { name: 'United States', route: '/company_en/us' },
      { name: 'Canada', route: '/company_en/ca' }
    ] 
  },
  { 
    id: 'europe', 
    name: 'Europe', 
    countries: [
      { name: 'United Kingdom', route: '/company_en/uk' },
      { name: 'Germany', route: '/company_en/de' },
      { name: 'France', route: '/company_en/fr' }
    ] 
  },
  { 
    id: 'offshore', 
    name: 'Offshore Sites', 
    countries: [
      { name: 'BVI', route: '/company_en/bvi' },
      { name: 'Cayman', route: '/company_en/ky' },
      { name: 'Seychelles', route: '/company_en/sc' },
      { name: 'Marshall', route: '/company_en/mh' },
      { name: 'Samoa', route: '/company_en/ws' }
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