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
            v-for="item in selectedRegion.items" 
            :key="item.name"
            class="country-item"
            :class="{ 'active-country': route.path === item.route }"
            @click="goToRoute(item.route)"
          >
            {{ item.name }}
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

// 映射路由到区域ID
const routeToRegionMap = {
  // 国际认证
  '/notary/hague': 'international',
  '/notary/embassy': 'international',

  // 各国公证
  '/notary/hk': 'national',
  '/notary/us': 'national',
  '/notary/uk': 'national',
  '/notary/jp': 'national',
  '/notary/sg': 'national'
}

// 计算当前激活的区域
const activeRegion = computed(() => {
  return routeToRegionMap[route.path] || 'international'
})

// 监听路由变化，自动切换到对应的区域
watch(route, () => {
  selectedRegionId.value = activeRegion.value
})

// 定义地区/服务数据
const regions = ref([
  { 
    id: 'international', 
    name: '国际认证', 
    items: [
      { name: '海牙公证认证', route: '/notary/hague' },
      { name: '使馆公证认证', route: '/notary/embassy' }
    ] 
  },
  { 
    id: 'national', 
    name: '各国公证', 
    items: [
      { name: '香港公证认证', route: '/notary/hk' },
      { name: '美国公证认证', route: '/notary/us' },
      { name: '英国公证认证', route: '/notary/uk' },
      { name: '日本公证认证', route: '/notary/jp' },
      { name: '新加坡公证认证', route: '/notary/sg' }
    ] 
  }
])

// 当前选中的地区
const selectedRegionId = ref('international')

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