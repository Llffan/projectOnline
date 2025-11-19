<template>
    <!-- Top Navigation Bar -->
        <div class="top">
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="links">
                <router-link to="/en" class="nav-link" active-class="active" exact-active-class="exact-active">Home</router-link>
                <div class="nav-dropdown">
                    <router-link to="/company_en/hk" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isCompanyRoute }">Company Registration</router-link>
                    <div class="dropdown-menu menu1">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'east-asia' }">
                            <div class="region-title">East Asia</div>
                            <div class="region-countries">
                                <router-link to="/company_en/jp">Japan</router-link>
                                <router-link to="/company_en/kr">Korea</router-link>
                                <router-link to="/company_en/hk">Hong Kong</router-link>
                                <router-link to="/company_en/mo">Macao</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'southeast-asia' }">
                            <div class="region-title">Southeast Asia</div>
                            <div class="region-countries">
                                <router-link to="/company_en/vn">Vietnam</router-link>
                                <router-link to="/company_en/th">Thailand</router-link>
                                <router-link to="/company_en/my">Malaysia</router-link>
                                <router-link to="/company_en/id">Indonesia</router-link>
                                <router-link to="/company_en/sg">Singapore</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'north-america' }">
                            <div class="region-title">North America</div>
                            <div class="region-countries">
                                <router-link to="/company_en/us">USA</router-link>
                                <router-link to="/company_en/ca">Canada</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'europe' }">
                            <div class="region-title">Europe</div>
                            <div class="region-countries">
                                <router-link to="/company_en/uk">United Kingdom</router-link>
                                <router-link to="/company_en/de">Germany</router-link>
                                <router-link to="/company_en/fr">France</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'offshore' }">
                            <div class="region-title">Offshore Financial Centers</div>
                            <div class="region-countries">
                                <router-link to="/company_en/bvi">BVI</router-link>
                                <router-link to="/company_en/ky">Cayman</router-link>
                                <router-link to="/company_en/sc">Seychelles</router-link>
                                <router-link to="/company_en/mh">Marshall</router-link>
                                <router-link to="/company_en/ws">Samoa</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link to="/2" class="nav-link" active-class="active" exact-active-class="exact-active">Bank Account</router-link>
                 <div class="nav-dropdown">
                    <router-link to="/3" class="nav-link" active-class="active" exact-active-class="exact-active">Notarization</router-link>
                    <div class="dropdown-menu menu2">
                        <router-link to="/1/f">Testing & Certification</router-link>
                    </div>
                </div>
                <div class="nav-dropdown">
                    <router-link to="/4" class="nav-link" active-class="active" exact-active-class="exact-active">Intellectual Property</router-link>
                    <div class="dropdown-menu menu3">
                        <router-link to="/1/g">Japan JTC Tax</router-link>
                        <router-link to="/1/h">HK Company Audit</router-link>
                    </div>
                </div>
                <div class="nav-dropdown">
                    <router-link to="/5" class="nav-link" active-class="active" exact-active-class="exact-active">Investment Management</router-link>
                    <div class="dropdown-menu menu4">
                        <router-link to="/1/i">Investment Filing</router-link>
                        <router-link to="/1/j">Financial Licenses</router-link>
                    </div>
                </div>
            </div>
            <div class="contact-info">
                <div class="phone">400-888-8888</div>
                <div class="website"><a href="/">中文</a></div>
            </div>
        </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'
import '@/css_en/company/common/Top.css'

const route = useRoute()

// 判断是否为公司相关路由
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

// 判断是否为公司相关路由
const isCompanyRoute = computed(() => {
  return route.path.startsWith('/company_en/')
})

// 计算当前激活的区域
const activeRegion = computed(() => {
  return countryToRegionMap[route.path] || 'east-asia'
})
</script>

<style lang="scss" scoped>
    
</style>