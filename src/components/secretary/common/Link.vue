<template>
  <div class="regions-container">
    <!-- 一级菜单 - 横向排列 -->
    <div class="sidebar-horizontal">
      <div 
        v-for="category in categories" 
        :key="category.id"
        class="menu-item"
        :class="{ active: isActiveCategory(category.id), 'current-region': category.id === activeCategory }"
        @click="selectCategory(category.id)"
      >
        {{ category.name }}
      </div>
    </div>
    
    <!-- 二级内容显示区域 -->
    <div class="content">
        <div v-if="selectedCategory" class="country-grid">
          <div 
            v-for="service in selectedCategory.services" 
            :key="service.name"
            class="country-item"
            :class="{ 'active-country': route.path === service.route }"
            @click="goToRoute(service.route)"
          >
            {{ service.name }}
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import '@/css/secretary/common/Link.css'

import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 路由跳转方法
const goToRoute = (routePath) => {
  router.push(routePath)
}

// 映射路由到分类ID
const routeToCategoryMap = {
  // 公司年审服务
  '/secretary/hk-annual': 'annual',
  '/secretary/overseas-annual': 'annual',
  '/secretary/barcode': 'annual',
  
  // 香港牌照服务
  '/secretary/hk-msb': 'license',
  '/secretary/telecom': 'license',
  '/secretary/hk-odi': 'license',
  
  // 公司变更服务
  '/secretary/dissolution': 'change',
  '/secretary/restoration': 'change',
  
  // 财务税务服务
  '/secretary/accounting': 'finance',
  '/secretary/tax-filing': 'finance',
  '/secretary/tax-planning': 'finance'
}

// 计算当前激活的分类
const activeCategory = computed(() => {
  return routeToCategoryMap[route.path] || 'annual'
})

// 监听路由变化，自动切换到对应的分类
watch(route, () => {
  selectedCategoryId.value = activeCategory.value
})

// 定义分类数据
const categories = ref([
  { 
    id: 'annual', 
    name: '公司年审服务', 
    services: [
      { name: '香港公司年审', route: '/secretary/hk-annual' },
      { name: '海外公司年审', route: '/secretary/overseas-annual' },
      { name: '条形码服务', route: '/secretary/barcode' }
    ] 
  },
  { 
    id: 'license', 
    name: '香港牌照服务', 
    services: [
      { name: '香港MSB牌照', route: '/secretary/hk-msb' },
      { name: '香港电信牌照', route: '/secretary/telecom' },
      { name: '境外投资备案', route: '/secretary/hk-odi' }
    ] 
  },
  { 
    id: 'change', 
    name: '公司变更服务', 
    services: [
      { name: '公司注销', route: '/secretary/dissolution' },
      { name: '公司恢复', route: '/secretary/restoration' }
    ] 
  },
  { 
    id: 'finance', 
    name: '财务税务服务', 
    services: [
      { name: '做账审计', route: '/secretary/accounting' },
      { name: '税务申报', route: '/secretary/tax-filing' },
      { name: '税务规划', route: '/secretary/tax-planning' }
    ] 
  }
])

// 当前选中的分类
const selectedCategoryId = ref('annual')

// 计算属性：获取选中的分类对象
const selectedCategory = computed(() => {
  return categories.value.find(c => c.id === selectedCategoryId.value)
})

// 判断是否为当前激活的分类
const isActiveCategory = (categoryId) => {
  return selectedCategoryId.value === categoryId
}

// 选择分类
const selectCategory = (categoryId) => {
  selectedCategoryId.value = categoryId
}

// 组件挂载时根据当前路由选择对应分类
onMounted(() => {
  selectedCategoryId.value = activeCategory.value
})

</script>