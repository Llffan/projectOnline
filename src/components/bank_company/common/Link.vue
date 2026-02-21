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
import '@/css/bank_company/common/Link.css'

import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 路由跳转方法
const goToRoute = (routePath) => {
  router.push(routePath)
}

// 定义分类数据
const categories = ref([
  { 
    id: 'hk', 
    name: '香港银行', 
    services: [
      { name: '香港建设银行（亚洲）', route: '/bank/hk/constructions' },
      { name: '香港光大银行', route: '/bank/hk/everbright' },
      { name: '香港中国银行', route: '/bank/hk/boc' },
      { name: '香港交通银行', route: '/bank/hk/communications' },
      { name: '香港招商永隆银行', route: '/bank/hk/cmb-winglung' },
      { name: '香港中信银行', route: '/bank/hk/citic' },
      { name: '香港汇丰银行', route: '/bank/hk/hsbc' },
      { name: '香港创兴银行', route: '/bank/hk/chonghing' },
      { name: '香港星展银行', route: '/bank/hk/dbs' },
      { name: '香港恒生银行', route: '/bank/hk/hangseng' },
      { name: '南洋商业银行', route: '/bank/hk/ncb' },
      { name: '香港东亚银行', route: '/bank/hk/bea' },
      { name: '香港大新银行', route: '/bank/hk/dahSing' },
      { name: '华侨银行（香港）', route: '/bank/hk/ocbc' },
      { name: '香港花旗银行', route: '/bank/hk/citi' },
      { name: '香港渣打银行', route: '/bank/hk/sc' },
      { name: '工银亚洲银行', route: '/bank/hk/icbc' },
      { name: '德意志银行（香港分行）', route: '/bank/hk/deutsche' },
      { name: '香港小花旗银行', route: '/bank/hk/citibank-small' },
      { name: '上海商业银行（香港）', route: '/bank/hk/shanghai-commercial' },
      { name: '香港众安银行', route: '/bank/hk/za' },
      { name: '香港华美银行', route: '/bank/hk/ew' },
      { name: '大众银行（香港）银行', route: '/bank/hk/public' },
      { name: '香港大华银行', route: '/bank/hk/uob' }
    ] 
  },
  { 
    id: 'us', 
    name: '美国银行', 
    services: [
      { name: '美国富港银行', route: '/bank/us/cbi' },
      { name: '美国华美银行', route: '/bank/us/ew' },
      { name: '美国摩根大通银行', route: '/bank/us/jpm' },
      { name: '美国国泰银行', route: '/bank/us/cathay' },
      { name: '美国银行', route: '/bank/us/boa' },
      { name: '美国加州银行', route: '/bank/us/banc-cal' },
      { name: '美国Arival银行', route: '/bank/us/arival' },
      { name: '美国水星银行', route: '/bank/us/mercury' },
      { name: '美国Axos银行', route: '/bank/us/axos' },
      { name: '美国汇丰银行', route: '/bank/us/hsbc' }
    ] 
  },
  { 
    id: 'sg', 
    name: '新加坡银行', 
    services: [
      { name: '新加坡华侨银行', route: '/bank/sg/ocbc' },
      { name: '新加坡汇丰银行', route: '/bank/sg/hsbc' },
      { name: '新加坡马来亚银行', route: '/bank/sg/maybank' },
      { name: '新加坡渣打银行', route: '/bank/sg/sc' },
      { name: '新加坡大华银行', route: '/bank/sg/uob' },
      { name: '新加坡星展银行', route: '/bank/sg/dbs' },
      { name: '新加坡花旗银行', route: '/bank/sg/citi' },
      { name: '新加坡Aspire银行', route: '/bank/sg/aspire' },
      { name: '新加坡银行', route: '/bank/sg/bank-of-singapore' },
      { name: '新加坡中国银行', route: '/bank/sg/boc' }
    ] 
  },
  { 
    id: 'mo', 
    name: '澳门银行', 
    services: [
      { name: '澳门工商银行', route: '/bank/mo/icbc' },
      { name: '澳门立桥银行', route: '/bank/mo/wl' },
      { name: '澳门工银亚洲银行', route: '/bank/mo/icbc-asia' },
      { name: '澳门中国银行', route: '/bank/mo/boc' },
      { name: '澳门国际银行', route: '/bank/mo/lusobank' },
      { name: '澳门汇丰银行', route: '/bank/mo/hsbc' },
      { name: '澳门葡萄牙商业银行', route: '/bank/mo/bcp' },
      { name: '澳门大西洋银行', route: '/bank/mo/bnu' },
      { name: '澳门广发银行', route: '/bank/mo/cgb' },
      { name: '澳门华侨银行', route: '/bank/mo/ocbc' },
      { name: '澳门交通银行', route: '/bank/mo/bocom' }
    ] 
  }
])

// 计算当前激活的分类
const activeCategory = computed(() => {
  for (const cat of categories.value) {
    if (cat.services.some(s => s.route === route.path)) {
      return cat.id
    }
  }
  return 'hk' // 默认为香港银行
})

// 当前选中的分类
const selectedCategoryId = ref('hk')

// 监听路由变化，自动切换到对应的分类
watch(route, () => {
  selectedCategoryId.value = activeCategory.value
})

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