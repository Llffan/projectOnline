<template>
  <div class="regions-container">
    <!-- First level menu - arranged horizontally-->
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
    
    <!-- Secondary content display area-->
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
import '@/css_en/secretary/common/Link.css'

import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Route jump method
const goToRoute = (routePath) => {
  router.push(routePath)
}

// Map routes to category IDs
const routeToCategoryMap = {
  // Company annual review service
  '/secretary_en/hk-annual': 'annual',
  '/secretary_en/overseas-annual': 'annual',
  '/secretary_en/barcode': 'annual',
  
  // Hong Kong Licensing Services
  '/secretary_en/hk-msb': 'license',
  '/secretary_en/telecom': 'license',
  '/secretary_en/hk-odi': 'license',
  
  // Company change service
  '/secretary_en/change': 'change',
  '/secretary_en/dissolution': 'change',
  '/secretary_en/restoration': 'change',
  
  // Financial and tax services
  '/secretary_en/accounting': 'finance',
  '/secretary_en/tax-filing': 'finance',
  '/secretary_en/tax-planning': 'finance'
}

// Calculate the currently active category
const activeCategory = computed(() => {
  return routeToCategoryMap[route.path] || 'annual'
})

// Monitor routing changes and automatically switch to the corresponding category
watch(route, () => {
  selectedCategoryId.value = activeCategory.value
})

// Define categorical data
const categories = ref([
  { 
    id: 'annual', 
    name: 'Company annual review service', 
    services: [
      { name: 'Hong Kong company annual review', route: '/secretary_en/hk-annual' },
      { name: 'Overseas company annual review', route: '/secretary_en/overseas-annual' },
      { name: 'barcode service', route: '/secretary_en/barcode' }
    ] 
  },
  { 
    id: 'license', 
    name: 'Hong Kong Licensing Services', 
    services: [
      { name: 'Hong Kong MSB license', route: '/secretary_en/hk-msb' },
      { name: 'Hong Kong telecommunications license', route: '/secretary_en/telecom' },
      { name: 'Overseas investment filing', route: '/secretary_en/hk-odi' }
    ] 
  },
  { 
    id: 'change', 
    name: 'Company change service', 
    services: [
      { name: 'Company change', route: '/secretary_en/change' },
      { name: 'Company cancellation', route: '/secretary_en/dissolution' },
      { name: 'company recovery', route: '/secretary_en/restoration' }
    ] 
  },
  { 
    id: 'finance', 
    name: 'Financial and tax services', 
    services: [
      { name: 'Accounting and auditing', route: '/secretary_en/accounting' },
      { name: 'tax declaration', route: '/secretary_en/tax-filing' },
      { name: 'tax planning', route: '/secretary_en/tax-planning' }
    ] 
  }
])

// Currently selected category
const selectedCategoryId = ref('annual')

// Computed property: Get the selected classification object
const selectedCategory = computed(() => {
  return categories.value.find(c => c.id === selectedCategoryId.value)
})

// Determine whether it is the currently activated category
const isActiveCategory = (categoryId) => {
  return selectedCategoryId.value === categoryId
}

// Select category
const selectCategory = (categoryId) => {
  selectedCategoryId.value = categoryId
}

// When the component is mounted, the corresponding category is selected based on the current route.
onMounted(() => {
  selectedCategoryId.value = activeCategory.value
})

</script>