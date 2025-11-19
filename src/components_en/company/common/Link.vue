<template>
  <div class="regions-container">
    <!-- Primary Menu - Horizontal Layout -->
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
    
    <!-- Secondary Content Display Area -->
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

// Route navigation method
const goToRoute = (routePath) => {
  router.push(routePath)
}

// Map country routes to region IDs
const countryToRegionMap = {
  // East Asia
  '/company_en/jp': 'east-asia',
  '/company_en/kr': 'east-asia',
  '/company_en/hk': 'east-asia',
  '/company_en/mo': 'east-asia',
  
  // Southeast Asia
  '/company_en/vn': 'southeast-asia',
  '/company_en/th': 'southeast-asia',
  '/company_en/my': 'southeast-asia',
  '/company_en/id': 'southeast-asia',
  '/company_en/sg': 'southeast-asia',
  
  // North America
  '/company_en/us': 'north-america',
  '/company_en/ca': 'north-america',
  
  // Europe
  '/company_en/uk': 'europe',
  '/company_en/de': 'europe',
  '/company_en/fr': 'europe',
  
  // Offshore Centers
  '/company_en/bvi': 'offshore',
  '/company_en/ky': 'offshore',
  '/company_en/sc': 'offshore',
  '/company_en/mh': 'offshore',
  '/company_en/ws': 'offshore'
}

// Compute the active region
const activeRegion = computed(() => {
  return countryToRegionMap[route.path] || 'east-asia'
})

// Watch route changes and automatically switch to the corresponding region
watch(route, () => {
  selectedRegionId.value = activeRegion.value
})

// Define region data
const regions = ref([
  { 
    id: 'east-asia', 
    name: 'East Asia', 
    countries: [
      { name: 'Japan', route: '/company_en/jp' },
      { name: 'Korea', route: '/company_en/kr' },
      { name: 'HK', route: '/company_en/hk' },
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
      { name: 'USA', route: '/company_en/us' },
      { name: 'Canada', route: '/company_en/ca' }
    ] 
  },
  { 
    id: 'europe', 
    name: 'Europe', 
    countries: [
      { name: 'UK', route: '/company_en/uk' },
      { name: 'Germany', route: '/company_en/de' },
      { name: 'France', route: '/company_en/fr' }
    ] 
  },
  { 
    id: 'offshore', 
    name: 'Offshore Centers', 
    countries: [
      { name: 'BVI', route: '/company_en/bvi' },
      { name: 'Cayman', route: '/company_en/ky' },
      { name: 'Seychelles', route: '/company_en/sc' },
      { name: 'Marshall', route: '/company_en/mh' },
      { name: 'Samoa', route: '/company_en/ws' }
    ] 
  }
])

// Currently selected region
const selectedRegionId = ref('east-asia')

// Computed property: Get the selected region object
const selectedRegion = computed(() => {
  return regions.value.find(region => region.id === selectedRegionId.value)
})

// Check if it's the currently active region
const isActiveRegion = (regionId) => {
  return selectedRegionId.value === regionId
}

// Select region
const selectRegion = (regionId) => {
  selectedRegionId.value = regionId
}

// Select the corresponding region based on current route when component is mounted
onMounted(() => {
  selectedRegionId.value = activeRegion.value
})

</script>