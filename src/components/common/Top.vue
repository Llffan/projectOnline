<template>
    <!-- 顶部导航栏 -->
        <div class="top">
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="">
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
                    <router-link to="/secretary/hk-annual" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isSecretaryRoute }">秘书服务</router-link>
                    <div class="dropdown-menu menu-secretary">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'annual-review' }">
                            <div class="region-title">公司年审服务</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary/hk-annual">香港公司年审</router-link>
                                <router-link to="/secretary/overseas-annual">海外公司年审</router-link>
                                <router-link to="/secretary/barcode">条形码服务</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'hk-license' }">
                            <div class="region-title">香港牌照服务</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary/hk-msb">香港MSB牌照</router-link>
                                <router-link to="/secretary/telecom">香港电信牌照</router-link>
                                <router-link to="/secretary/hk-odi">境外投资备案</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'company-changes' }">
                            <div class="region-title">公司变更服务</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary/dissolution">公司注销</router-link>
                                <router-link to="/secretary/restoration">公司恢复</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'financial-tax' }">
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
                    <router-link to="/bank/hk/personal" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isBankRoute }">银行开户</router-link>
                    <div class="dropdown-menu menu-bank">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'bank-hk' }">
                            <div class="region-title">香港银行开户</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/hk/personal">香港个人账户</router-link>
                                <router-link to="/bank/hk/company">香港公司账户</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'bank-sg' }">
                            <div class="region-title">新加坡银行开户</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/sg/personal">新加坡个人账户</router-link>
                                <router-link to="/bank/sg/company">新加坡公司账户</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'bank-mo' }">
                            <div class="region-title">澳门银行开户</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/mo/personal">澳门个人账户</router-link>
                                <router-link to="/bank/mo/company">澳门公司账户</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'bank-us' }">
                            <div class="region-title">美国银行开户</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/us/personal">美国个人账户</router-link>
                                <router-link to="/bank/us/company">美国公司账户</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="nav-dropdown nav-dropdown-4">
                    <router-link to="/certification/hague" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isCertRoute }">公证认证</router-link>
                    <div class="dropdown-menu menu-cert">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'cert-global' }">
                            <div class="region-countries menu-cert-countries">
                                <router-link to="/certification/hague">海牙公证认证</router-link>
                                <router-link to="/certification/embassy">使馆公证认证</router-link>
                                <router-link to="/certification/hk">香港公证认证</router-link>
                                <router-link to="/certification/us">美国公证认证</router-link>
                                <router-link to="/certification/uk">英国公证认证</router-link>
                                <router-link to="/certification/jp">日本公证认证</router-link>
                                <router-link to="/certification/sg">新加坡公证认证</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-dropdown nav-dropdown-5">
                    <router-link to="/intellectual/domestic-trademark" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isIpRoute }">知识产权服务</router-link>
                    <div class="dropdown-menu menu-ip">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'ip-global' }">
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
import '@/css/common/Top.css'

const route = useRoute()

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
  '/secretary/barcode': 'annual-review',
  '/secretary/hk-msb': 'hk-license',
  '/secretary/telecom': 'hk-license',
  '/secretary/investment-filing': 'hk-license',
  '/secretary/dissolution': 'company-changes',
  '/secretary/restoration': 'company-changes',
  '/secretary/accounting': 'financial-tax',
  '/secretary/tax-filing': 'financial-tax',
  '/secretary/tax-planning': 'financial-tax',
  
  // 银行开户
  '/bank/hk/personal': 'bank-hk',
  '/bank/hk/company': 'bank-hk',
  '/bank/sg/personal': 'bank-sg',
  '/bank/sg/company': 'bank-sg',
  '/bank/mo/personal': 'bank-mo',
  '/bank/mo/company': 'bank-mo',
  '/bank/us/personal': 'bank-us',
  '/bank/us/company': 'bank-us',

  // 公证认证
  '/certification/hague': 'cert-global',
  '/certification/embassy': 'cert-global',
  '/certification/hk': 'cert-global',
  '/certification/us': 'cert-global',
  '/certification/uk': 'cert-global',
  '/certification/jp': 'cert-global',
  '/certification/sg': 'cert-global',

  // 知识产权服务
  '/intellectual/domestic-trademark': 'ip-global',
  '/intellectual/international-trademark': 'ip-global',
  '/intellectual/domestic-patent': 'ip-global'
}

// 核心修复：确保路径以 '/company' 开头，并且路径本身不等于 '/' 或其他非公司路由
const isCompanyRoute = computed(() => route.path.startsWith('/company') && route.path !== '/');
const isSecretaryRoute = computed(() => route.path.startsWith('/secretary'));
const isBankRoute = computed(() => route.path.startsWith('/bank'));
const isCertRoute = computed(() => route.path.startsWith('/certification'));
const isIpRoute = computed(() => route.path.startsWith('/intellectual'));

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
</script>

<style lang="scss" scoped>
    
</style>