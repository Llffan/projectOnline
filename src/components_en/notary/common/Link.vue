<template>
  <div class="regions-container">
    <!-- Primary Menu - Horizontal -->
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
    
    <!-- Secondary Content Area -->
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
import '@/css_en/bank_company/common/Link.css'

import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goToRoute = (routePath) => {
  router.push(routePath)
}

// Route to region mapping
const routeToRegionMap = {
  '/en/notary/hague': 'international',
  '/en/notary/embassy': 'international',
  '/en/notary/hk': 'national',
  '/en/notary/us': 'national',
  '/en/notary/uk': 'national',
  '/en/notary/jp': 'national',
  '/en/notary/sg': 'national'
}

const activeRegion = computed(() => {
  return routeToRegionMap[route.path] || 'international'
})

watch(route, () => {
  selectedRegionId.value = activeRegion.value
})

const regions = ref([
  { 
    id: 'international', 
    name: 'International Certification', 
    items: [
      { name: 'Hague Apostille', route: '/en/notary/hague' },
      { name: 'Embassy Legalization', route: '/en/notary/embassy' }
    ] 
  },
  { 
    id: 'national', 
    name: 'Country Notarization', 
    items: [
      { name: 'Hong Kong Notarization', route: '/en/notary/hk' },
      { name: 'US Notarization', route: '/en/notary/us' },
      { name: 'UK Notarization', route: '/en/notary/uk' },
      { name: 'Japan Notarization', route: '/en/notary/jp' },
      { name: 'Singapore Notarization', route: '/en/notary/sg' }
    ] 
  }
])

const selectedRegionId = ref('international')

const selectedRegion = computed(() => {
  return regions.value.find(region => region.id === selectedRegionId.value)
})

const isActiveRegion = (regionId) => {
  return selectedRegionId.value === regionId
}

const selectRegion = (regionId) => {
  selectedRegionId.value = regionId
}

onMounted(() => {
  selectedRegionId.value = activeRegion.value
})

</script>
