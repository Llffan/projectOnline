<template>
  <div class="regions-container">
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
import '@/css_en/ip/common/Link.css'
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const routeToCategoryMap = {
  '/en/intellectual/domestic-trademark': 'ip-service',
  '/en/intellectual/international-trademark': 'ip-service',
  '/en/ip/patent': 'ip-service'
}

const activeCategory = computed(() => {
  return routeToCategoryMap[route.path] || 'ip-service'
})

watch(route, () => {
  selectedCategoryId.value = activeCategory.value
})

const categories = ref([
  { 
    id: 'ip-service',
    name: 'Intellectual Property Services',
    services: [
      { name: 'International Patents', route: '/en/ip/patent' },
      { name: 'International Trademarks', route: '/en/intellectual/international-trademark' },
      { name: 'Domestic Trademarks', route: '/en/intellectual/domestic-trademark' }
    ]
  }
])

const selectedCategoryId = ref('ip-service')

const selectedCategory = computed(() => {
  return categories.value.find(c => c.id === selectedCategoryId.value)
})

const isActiveCategory = (categoryId) => {
  return selectedCategoryId.value === categoryId
}

const selectCategory = (categoryId) => {
  selectedCategoryId.value = categoryId
}

const goToRoute = (routePath) => {
  router.push(routePath)
}

onMounted(() => {
  selectedCategoryId.value = activeCategory.value
})
</script>
