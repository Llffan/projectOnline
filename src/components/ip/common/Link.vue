<template>
  <div class="regions-container">
    <!-- 一级菜单 - 只有个：知识产权服务 -->
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
    
    <!-- 二级内容：子页面服务 -->
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
import '@/css/ip/common/Link.css'
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 映射路由到分类ID
const routeToCategoryMap = {
  '/intellectual/domestic-trademark': 'ip-service',
  '/intellectual/international-trademark': 'ip-service',
  '/ip/patent': 'ip-service'
}

// 计算当前激活的分类
const activeCategory = computed(() => {
  return routeToCategoryMap[route.path] || 'ip-service'
})

// 监听路由变化，自动切换到对应的分类
watch(route, () => {
  selectedCategoryId.value = activeCategory.value
})

// 定义分类数据
const categories = ref([
  { 
    id: 'ip-service',
    name: '知识产权服务',
    services: [
      { name: '国际专利服务', route: '/ip/patent' },
      { name: '国际商标服务', route: '/intellectual/international-trademark' },
      { name: '国内商标服务', route: '/intellectual/domestic-trademark' }
    ]
  }
])

// 当前选中的分类
const selectedCategoryId = ref('ip-service')

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

// 跳转路由
const goToRoute = (routePath) => {
  router.push(routePath)
}

// 组件挂载时根据当前路由选择对应分类
onMounted(() => {
  selectedCategoryId.value = activeCategory.value
})
</script>
