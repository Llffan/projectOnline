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
            v-for="service in displayedServices"
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
import '@/css_en/bank_company/common/Link.css'

import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 路由跳转方法
const goToRoute = (routePath) => {
  // Use the route path as provided, which now includes /en/ for English routes
  router.push(routePath)
}

// 定义分类数据
const categories = ref([
  { 
    id: 'hk', 
    name: 'Hong Kong Banks', 
    services: [
      { name: 'CCB (Asia)', route: '/en/bank/hk/constructions' },
      { name: 'China Everbright Bank', route: '/en/bank/hk/everbright' },
      { name: 'Bank of China (Hong Kong)', route: '/en/bank/hk/boc' },
      { name: 'Bank of Communications', route: '/en/bank/hk/communications' },
      { name: 'CMB Wing Lung Bank', route: '/en/bank/hk/cmb-winglung' },
      { name: 'China CITIC Bank', route: '/en/bank/hk/citic' },
      { name: 'HSBC', route: '/en/bank/hk/hsbc' },
      { name: 'Chong Hing Bank', route: '/en/bank/hk/chonghing' },
      { name: 'DBS Bank', route: '/en/bank/hk/dbs' },
      { name: 'Hang Seng Bank', route: '/en/bank/hk/hangseng' },
      { name: 'Nanyang Commercial Bank', route: '/en/bank/hk/ncb' },
      { name: 'Bank of East Asia', route: '/en/bank/hk/bea' },
      { name: 'Dah Sing Bank', route: '/en/bank/hk/dahSing' },
      { name: 'OCBC Bank', route: '/en/bank/hk/ocbc' },
      { name: 'Standard Chartered', route: '/en/bank/hk/sc' },
      { name: 'ICBC (Asia)', route: '/en/bank/hk/icbc' },
      { name: 'Deutsche Bank', route: '/en/bank/hk/deutsche' },
      { name: 'Citibank', route: '/en/bank/hk/citibank-small' },
      { name: 'Shanghai Commercial Bank', route: '/en/bank/hk/shanghai-commercial' },
      { name: 'ZA Bank', route: '/en/bank/hk/za' },
      { name: 'East West Bank', route: '/en/bank/hk/ew' },
      { name: 'Public Bank (Hong Kong)', route: '/en/bank/hk/public' },
      { name: 'UOB', route: '/en/bank/hk/uob' }
    ] 
  },
  { 
    id: 'sg', 
    name: 'Singapore Banks', 
    services: [
      { name: 'OCBC Bank', route: '/en/bank/sg/ocbc' },
      { name: 'HSBC', route: '/en/bank/sg/hsbc' },
      { name: 'Maybank', route: '/en/bank/sg/maybank' },
      { name: 'Standard Chartered', route: '/en/bank/sg/sc' },
      { name: 'UOB', route: '/en/bank/sg/uob' },
      { name: 'DBS Bank', route: '/en/bank/sg/dbs' },
      { name: 'Citibank', route: '/en/bank/sg/citi' },
      { name: 'Aspire Bank', route: '/en/bank/sg/aspire' },
      { name: 'Bank of Singapore', route: '/en/bank/sg/bos' },
      { name: 'Bank of China', route: '/en/bank/sg/boc' }
    ] 
  },
  { 
    id: 'mo', 
    name: 'Macau Banks', 
    services: [
      { name: 'ICBC (Macau)', route: '/en/bank/mo/icbc' },
      { name: 'Well Link Bank', route: '/en/bank/mo/wl' },
      { name: 'ICBC Asia (Macau)', route: '/en/bank/mo/icbc-asia' },
      { name: 'Bank of China (Macau)', route: '/en/bank/mo/boc' },
      { name: 'Luso International Banking', route: '/en/bank/mo/lusobank' },
      { name: 'HSBC (Macau)', route: '/en/bank/mo/hsbc' },
      { name: 'BCP Bank', route: '/en/bank/mo/bcp' },
      { name: 'BNU', route: '/en/bank/mo/bnu' },
      { name: 'CGB (Macau)', route: '/en/bank/mo/cgb' },
      { name: 'OCBC (Macau)', route: '/en/bank/mo/ocbc' }
    ] 
  },
  { 
    id: 'us', 
    name: 'US Banks', 
    services: [
      { name: 'CBI Bank', route: '/en/bank/us/cbi' },
      { name: 'East West Bank', route: '/en/bank/us/ew' },
      { name: 'JPMorgan Chase', route: '/en/bank/us/jpm' },
      { name: 'Cathay Bank', route: '/en/bank/us/cathay' },
      { name: 'Bank of America', route: '/en/bank/us/boa' },
      { name: 'Banc of California', route: '/en/bank/us/banc-cal' },
      { name: 'Arival Bank', route: '/en/bank/us/arival' },
      { name: 'Mercury Bank', route: '/en/bank/us/mercury' },
      { name: 'Axos Bank', route: '/en/bank/us/axos' },
      { name: 'HSBC (USA)', route: '/en/bank/us/hsbc' }
    ] 
  }
])

// 计算当前激活的分类
const personalRouteMatch = computed(() => route.path.match(/^\/en\/bank\/(hk|sg|mo|us)\/personal(?:\/|$)/))

const activeCategory = computed(() => {
  if (personalRouteMatch.value) return personalRouteMatch.value[1]
  for (const cat of categories.value) {
    if (cat.services.some(s => s.route === route.path)) return cat.id
  }
  return 'hk'
})

const selectedCategoryId = ref('hk')
watch(route, () => { selectedCategoryId.value = activeCategory.value })

const selectedCategory = computed(() => categories.value.find(c => c.id === selectedCategoryId.value))
const personalBankSlugs = {
  "hk": {
    "/en/bank/hk/constructions": "constructions",
    "/en/bank/hk/boc": "boc",
    "/en/bank/hk/communications": "communications",
    "/en/bank/hk/cmb-winglung": "cmb-winglung",
    "/en/bank/hk/citic": "citic",
    "/en/bank/hk/hsbc": "hsbc",
    "/en/bank/hk/chonghing": "chonghing",
    "/en/bank/hk/dbs": "dbs",
    "/en/bank/hk/hangseng": "hangseng",
    "/en/bank/hk/ncb": "ncb",
    "/en/bank/hk/bea": "bea",
    "/en/bank/hk/dahSing": "dahsing",
    "/en/bank/hk/ocbc": "ocbc",
    "/en/bank/hk/citi": "citi",
    "/en/bank/hk/sc": "sc",
    "/en/bank/hk/icbc": "icbc",
    "/en/bank/hk/shanghai-commercial": "shanghai-commercial"
  },
  "sg": {
    "/en/bank/sg/ocbc": "ocbc",
    "/en/bank/sg/hsbc": "hsbc",
    "/en/bank/sg/maybank": "maybank",
    "/en/bank/sg/sc": "sc",
    "/en/bank/sg/uob": "uob",
    "/en/bank/sg/dbs": "dbs",
    "/en/bank/sg/citi": "citi",
    "/en/bank/sg/bos": "bos",
    "/en/bank/sg/boc": "boc"
  },
  "mo": {
    "/en/bank/mo/wl": "wl",
    "/en/bank/mo/icbc-asia": "icbc-asia",
    "/en/bank/mo/boc": "boc",
    "/en/bank/mo/lusobank": "lusobank",
    "/en/bank/mo/hsbc": "hsbc",
    "/en/bank/mo/cgb": "cgb",
    "/en/bank/mo/ocbc": "ocbc"
  },
  "us": {
    "/en/bank/us/cbi": "cbi",
    "/en/bank/us/ew": "ew",
    "/en/bank/us/cathay": "cathay",
    "/en/bank/us/boa": "boa",
    "/en/bank/us/arival": "arival",
    "/en/bank/us/axos": "axos",
    "/en/bank/us/hsbc": "hsbc"
  }
}

const displayedServices = computed(() => {
  if (!selectedCategory.value) return []
  const region = personalRouteMatch.value?.[1]
  if (!region || selectedCategory.value.id !== region) return selectedCategory.value.services
  const slugs = personalBankSlugs[region]
  return selectedCategory.value.services
    .filter(service => slugs[service.route])
    .map(service => ({ ...service, route: '/en/bank/' + region + '/personal/' + slugs[service.route] }))
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
