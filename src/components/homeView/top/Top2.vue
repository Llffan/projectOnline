<template>
    <div class="top2" :class="{ 'scrolled': isScrolled }">
            <div class="logo">
                <img :src="logoSrc" alt="">
            </div>
            <div class="links">
                <router-link to="/" class="nav-link" active-class="active" exact-active-class="exact-active">首页</router-link>
                <div class="nav-dropdown nav-dropdown-1">
                    <router-link to="/company/hk" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isCompanyRoute }">全球公司注册</router-link>
                    <div class="dropdown-menu menu-company">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'east-asia' }">
                            <div class="region-title">东亚公司注册</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company/jp">日本公司注册</router-link>
                                <router-link to="/company/kr">韩国公司注册</router-link>
                                <router-link to="/company/hk">中国香港公司注册</router-link>
                                <router-link to="/company/mo">中国澳门公司注册</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'southeast-asia' }">
                            <div class="region-title">东南亚公司注册</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company/vn">越南公司注册</router-link>
                                <router-link to="/company/th">泰国公司注册</router-link>
                                <router-link to="/company/my">马来西亚公司注册</router-link>
                                <router-link to="/company/id">印度尼西亚公司注册</router-link>
                                <router-link to="/company/sg">新加坡公司注册</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'north-america' }">
                            <div class="region-title">北美公司注册</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company/us">美国公司注册</router-link>
                                <router-link to="/company/ca">加拿大公司注册</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'europe' }">
                            <div class="region-title">欧洲公司注册</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company/uk">英国公司注册</router-link>
                                <router-link to="/company/de">德国公司注册</router-link>
                                <router-link to="/company/fr">法国公司注册</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'offshore' }">
                            <div class="region-title">群岛公司注册</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company/bvi">BVI公司注册</router-link>
                                <router-link to="/company/ky">开曼公司注册</router-link>
                                <router-link to="/company/sc">塞舌尔公司注册</router-link>
                                <router-link to="/company/mh">马绍尔公司注册</router-link>
                                <router-link to="/company/ws">萨摩亚公司注册</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-dropdown nav-dropdown-2">
                    <router-link to="/secretary" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': route.path.startsWith('/secretary') }">秘书服务</router-link>
                    <div class="dropdown-menu menu-secretary">
                        <div class="region-group">
                            <div class="region-title">公司年审服务</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary/hk-annual">香港公司年审</router-link>
                                <router-link to="/secretary/overseas-annual">海外公司年审</router-link>
                                <router-link to="/secretary/barcode">条形码服务</router-link>
                            </div>
                        </div>
                        <div class="region-group">
                            <div class="region-title">香港牌照服务</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary/msb">香港MSB牌照</router-link>
                                <router-link to="/secretary/telecom">香港电信牌照</router-link>
                                <router-link to="/secretary/hk-odi">境外投资备案</router-link>
                            </div>
                        </div>
                        <div class="region-group">
                            <div class="region-title">公司变更服务</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary/dissolution">公司注销</router-link>
                                <router-link to="/secretary/restoration">公司恢复</router-link>
                            </div>
                        </div>
                        <div class="region-group">
                            <div class="region-title">财务税务服务</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary/accounting">做账审计</router-link>
                                <router-link to="/secretary/tax-filing">税务申报</router-link>
                                <router-link to="/secretary/tax-planning">税务规划</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-dropdown nav-dropdown-3">
                    <router-link to="/bank" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': route.path.startsWith('/bank') }">银行开户</router-link>
                    <div class="dropdown-menu menu-bank">
                        <div class="region-group">
                            <div class="region-title">香港银行开户</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/hk/personal">香港个人账户</router-link>
                                <router-link to="/bank/hk/constructions">香港公司账户</router-link>
                            </div>
                        </div>
                        <div class="region-group">
                            <div class="region-title">新加坡银行开户</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/sg/personal">新加坡个人账户</router-link>
                                <router-link to="/bank/sg/company">新加坡公司账户</router-link>
                            </div>
                        </div>
                        <div class="region-group">
                            <div class="region-title">澳门银行开户</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/mo/personal">澳门个人账户</router-link>
                                <router-link to="/bank/mo/company">澳门公司账户</router-link>
                            </div>
                        </div>
                        <div class="region-group">
                            <div class="region-title">美国银行开户</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/us/personal">美国个人账户</router-link>
                                <router-link to="/bank/us/company">美国公司账户</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="nav-dropdown nav-dropdown-4">
                    <router-link to="/notary" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': route.path.startsWith('/notary') }">公证认证</router-link>
                    <div class="dropdown-menu menu-cert">
                        <div class="region-group">
                            <div class="region-title">国际认证</div>
                            <div class="region-countries menu-cert-countries">
                                <router-link to="/notary/hague">海牙公证认证</router-link>
                                <router-link to="/notary/embassy">使馆公证认证</router-link>
                            </div>
                        </div>
                        <div class="region-group">
                            <div class="region-title">各国认证</div>
                            <div class="region-countries menu-cert-countries">
                                <router-link to="/notary/hk">香港公证认证</router-link>
                                <router-link to="/notary/us">美国公证认证</router-link>
                                <router-link to="/notary/uk">英国公证认证</router-link>
                                <router-link to="/notary/jp">日本公证认证</router-link>
                                <router-link to="/notary/sg">新加坡公证认证</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-dropdown nav-dropdown-5">
                    <router-link to="/intellectual" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': route.path.startsWith('/intellectual') }">知识产权服务</router-link>
                    <div class="dropdown-menu menu-ip">
                        <div class="region-group">
                            <div class="region-countries menu-ip-countries">
                                <router-link to="/intellectual/domestic-trademark">国内商标服务</router-link>
                                <router-link to="/intellectual/international-trademark">国际商标服务</router-link>
                                <router-link to="/intellectual/domestic-patent">国内专利服务</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-info">
                <div class="phone">400-888-8888</div>
                <div class="website"><a href="/en">English</a></div>
            </div>
        </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'
import '@/css/homeView/top/Top2.css'

const route = useRoute()
const isScrolled = ref(false)

// 映射国家路由到区域ID
const countryToRegionMap = {
  // 东亚
  '/company/jp': 'east-asia',
  '/company/kr': 'east-asia',
  '/company/hk': 'east-asia',
  '/company/mo': 'east-asia',
  
  // 东南亚
  '/company/vn': 'southeast-asia',
  '/company/th': 'southeast-asia',
  '/company/my': 'southeast-asia',
  '/company/id': 'southeast-asia',
  '/company/sg': 'southeast-asia',
  
  // 北美
  '/company/us': 'north-america',
  '/company/ca': 'north-america',
  
  // 欧洲
  '/company/uk': 'europe',
  '/company/de': 'europe',
  '/company/fr': 'europe',
  
  // 离岸金融中心
  '/company/bvi': 'offshore',
  '/company/ky': 'offshore',
  '/company/sc': 'offshore',
  '/company/mh': 'offshore',
  '/company/ws': 'offshore',
  
  // 秘书服务
  '/secretary/hk-annual': 'annual-review',
  '/secretary/overseas-annual': 'annual-review',
  '/secretary/msb': 'hk-license',
  '/secretary/telecom': 'hk-license',
  '/secretary/dissolution': 'company-changes',
  '/secretary/restoration': 'company-changes',
  '/secretary/barcode': 'financial-tax',
  '/secretary/accounting': 'financial-tax',
  '/secretary/tax-filing': 'financial-tax',
  '/secretary/tax-planning': 'financial-tax',
  
  // 知识产权服务
  '/intellectual/domestic-trademark': 'ip-service',
  '/intellectual/international-trademark': 'ip-service',
  '/intellectual/domestic-patent': 'ip-service'
}

// 核心修复：确保路径以 '/company' 开头，并且路径本身不等于 '/' 或其他非公司路由
const isCompanyRoute = computed(() => {
  return route.path.startsWith('/company') && route.path !== '/';
})

// 计算当前激活的区域
const activeRegion = computed(() => {
  const matchedRegion = countryToRegionMap[route.path];
  if (matchedRegion) {
    return matchedRegion;
  }
  if (route.path.startsWith('/company')) {
      return 'east-asia'; 
  }
  return null;
})
// 计算logo图片路径
const logoSrc = computed(() => {
  return isScrolled.value 
    ? new URL('@/assets/img/logo.png', import.meta.url).href 
    : new URL('@/assets/img/logo1.png', import.meta.url).href
})

const handleScroll = () => {
  const content1Element = document.querySelector('.content1')
  
  if (content1Element) {
    const content1Rect = content1Element.getBoundingClientRect()
    const content1Height = content1Rect.height

    const threshold = content1Height * 2 / 3
    
    if (content1Rect.top < -threshold) {
      isScrolled.value = true
    } else {
      isScrolled.value = false
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
    
</style>