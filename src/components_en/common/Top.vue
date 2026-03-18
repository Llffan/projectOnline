<template>
    <!-- 顶部导航栏 -->
        <div class="top">
            <div class="logo">
                <router-link to="/en">
                    <img src="@/assets/img/logo.png" alt="">
                </router-link>
            </div>
            <div class="links">
                <router-link to="/en" class="nav-link" active-class="active" exact-active-class="exact-active">Home</router-link>
                <div class="nav-dropdown nav-dropdown-1">
                    <router-link to="/company_en/hk" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isCompanyRoute }">Global Company Registration</router-link>
                    <div class="dropdown-menu menu-company">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'east-asia' }">
                            <div class="region-title">East Asia Incorporation</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company_en/jp">Japan Company</router-link>
                                <router-link to="/company_en/kr">South Korea Company</router-link>
                                <router-link to="/company_en/hk">Hong Kong Company</router-link>
                                <router-link to="/company_en/mo">Macao Company</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'southeast-asia' }">
                            <div class="region-title">Southeast Asia Incorporation</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company_en/vn">Vietnam Company</router-link>
                                <router-link to="/company_en/th">Thailand Company</router-link>
                                <router-link to="/company_en/my">Malaysia Company</router-link>
                                <router-link to="/company_en/id">Indonesia Company</router-link>
                                <router-link to="/company_en/sg">Singapore Company</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'north-america' }">
                            <div class="region-title">North America Incorporation</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company_en/us">US Company</router-link>
                                <router-link to="/company_en/ca">Canada Company</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'europe' }">
                            <div class="region-title">Europe Incorporation</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company_en/uk">UK Company</router-link>
                                <router-link to="/company_en/de">Germany Company</router-link>
                                <router-link to="/company_en/fr">France Company</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'offshore' }">
                            <div class="region-title">Offshore Incorporation</div>
                            <div class="region-countries menu-company-countries">
                                <router-link to="/company_en/bvi">BVI Company</router-link>
                                <router-link to="/company_en/ky">Cayman Company</router-link>
                                <router-link to="/company_en/sc">Seychelles Company</router-link>
                                <router-link to="/company_en/mh">Marshall Company</router-link>
                                <router-link to="/company_en/ws">Samoa Company</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-dropdown nav-dropdown-2">
                    <router-link to="/secretary_en/hk-annual" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isSecretaryRoute }">Secretarial Services</router-link>
                    <div class="dropdown-menu menu-secretary">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'annual-review' }">
                            <div class="region-title">Company Annual Review</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary_en/hk-annual">HK Annual Review</router-link>
                                <router-link to="/secretary_en/overseas-annual">Overseas Annual Review</router-link>
                                <router-link to="/secretary_en/barcode">Barcode Service</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'hk-license' }">
                            <div class="region-title">HK License Service</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary_en/hk-msb">HK MSB License</router-link>
                                <router-link to="/secretary_en/telecom">HK Telecom License</router-link>
                                <router-link to="/secretary_en/hk-odi">ODI Filing</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'company-changes' }">
                            <div class="region-title">Company Changes</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary_en/change">Company Change</router-link>
                                <router-link to="/secretary_en/dissolution">Company Deregistration</router-link>
                                <router-link to="/secretary_en/restoration">Company Restoration</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'financial-tax' }">
                            <div class="region-title">Financial & Tax Services</div>
                            <div class="region-countries menu-secretary-countries">
                                <router-link to="/secretary_en/accounting">Accounting & Auditing</router-link>
                                <router-link to="/secretary_en/tax-filing">Tax Filing</router-link>
                                <router-link to="/secretary_en/tax-planning">Tax Planning</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-dropdown nav-dropdown-3">
                    <router-link to="/en/bank/hk/personal" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isBankRoute }">Bank Account Opening</router-link>
                    <div class="dropdown-menu menu-bank">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'bank-hk' }">
                            <div class="region-title">HK Bank Account</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/en/bank/hk/personal">HK Personal Account</router-link>
                                <router-link to="/en/bank/hk/constructions">HK Corporate Account</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'bank-sg' }">
                            <div class="region-title">SG Bank Account</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/sg/personal">SG Personal Account</router-link>
                                <router-link to="/en/bank/sg/ocbc">SG Corporate Account</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'bank-mo' }">
                            <div class="region-title">Macao Bank Account</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/bank/mo/personal">Macao Personal Account</router-link>
                                <router-link to="/en/bank/mo/icbc">Macao Corporate Account</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'bank-us' }">
                            <div class="region-title">US Bank Account</div>
                            <div class="region-countries menu-bank-countries">
                                <router-link to="/en/bank/us/cbi">US Personal Account</router-link>
                                <router-link to="/en/bank/us/cbi">US Corporate Account</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="nav-dropdown nav-dropdown-4">
                    <router-link to="/en/notary/hague" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isCertRoute }">Notary & Apostille</router-link>
                    <div class="dropdown-menu menu-cert">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'cert-global' }">
                            <div class="region-title">International Certification</div>
                            <div class="region-countries menu-cert-countries">
                                <router-link to="/en/notary/hague">Hague Apostille</router-link>
                                <router-link to="/en/notary/embassy">Embassy Legalization</router-link>
                            </div>
                        </div>
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'cert-country' }">
                            <div class="region-title">Country Legalization</div>
                            <div class="region-countries menu-cert-countries">
                                <router-link to="/en/notary/hk">HK Notary</router-link>
                                <router-link to="/en/notary/us">US Notary</router-link>
                                <router-link to="/en/notary/uk">UK Notary</router-link>
                                <router-link to="/en/notary/jp">Japan Notary</router-link>
                                <router-link to="/en/notary/sg">Singapore Notary</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-dropdown nav-dropdown-5">
                    <router-link to="/en/ip/patent" class="nav-link" active-class="active" exact-active-class="exact-active" :class="{ 'exact-active': isIpRoute }">Intellectual Property Services</router-link>
                    <div class="dropdown-menu menu-ip">
                        <div class="region-group" :class="{ 'active-region': activeRegion === 'ip-global' }">
                            <div class="region-countries menu-ip-countries">
                                <router-link to="/en/ip/patent">International Patents</router-link>
                                <router-link to="/en/intellectual/international-trademark">International Trademarks</router-link>
                                <router-link to="/en/intellectual/domestic-trademark">Domestic Trademarks</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-info">
                <div class="website"><a href="/">中文</a></div>
            </div>
        </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'
import '@/css_en/common/Top.css'

const route = useRoute()

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
  '/company_en/ws': 'offshore',
  
  // 秘书服务
  '/secretary_en/hk-annual': 'annual-review',
  '/secretary_en/overseas-annual': 'annual-review',
  '/secretary_en/barcode': 'annual-review',
  '/secretary_en/hk-msb': 'hk-license',
  '/secretary_en/telecom': 'hk-license',
  '/secretary_en/hk-odi': 'hk-license',
  '/secretary_en/change': 'company-changes',
  '/secretary_en/dissolution': 'company-changes',
  '/secretary_en/restoration': 'company-changes',
  '/secretary_en/accounting': 'financial-tax',
  '/secretary_en/tax-filing': 'financial-tax',
  '/secretary_en/tax-planning': 'financial-tax',
  
  // 银行开户
  '/bank/hk/personal': 'bank-hk',
  '/en/bank/hk/personal': 'bank-hk',
  '/bank/hk/constructions': 'bank-hk',
  '/en/bank/hk/constructions': 'bank-hk',
  '/bank/sg/personal': 'bank-sg',
  '/en/bank/sg/ocbc': 'bank-sg',
  '/en/bank/sg/dbs': 'bank-sg',
  '/en/bank/sg/uob': 'bank-sg',
  '/en/bank/sg/hsbc': 'bank-sg',
  '/en/bank/sg/sc': 'bank-sg',
  '/en/bank/sg/maybank': 'bank-sg',
  '/en/bank/sg/citi': 'bank-sg',
  '/en/bank/sg/aspire': 'bank-sg',
  '/en/bank/sg/bos': 'bank-sg',
  '/en/bank/sg/boc': 'bank-sg',
  '/bank/mo/personal': 'bank-mo',
  '/en/bank/mo/icbc': 'bank-mo',
  '/en/bank/mo/wl': 'bank-mo',
  '/en/bank/mo/icbc-asia': 'bank-mo',
  '/en/bank/mo/boc': 'bank-mo',
  '/en/bank/mo/lusobank': 'bank-mo',
  '/en/bank/mo/hsbc': 'bank-mo',
  '/en/bank/mo/bcp': 'bank-mo',
  '/en/bank/mo/bnu': 'bank-mo',
  '/en/bank/mo/cgb': 'bank-mo',
  '/en/bank/mo/ocbc': 'bank-mo',
  '/bank/us/personal': 'bank-us',
  '/bank/us/cbi': 'bank-us',
  '/en/bank/us/cbi': 'bank-us',
  '/en/bank/us/ew': 'bank-us',
  '/en/bank/us/jpm': 'bank-us',
  '/en/bank/us/cathay': 'bank-us',
  '/en/bank/us/boa': 'bank-us',
  '/en/bank/us/banc-cal': 'bank-us',
  '/en/bank/us/arival': 'bank-us',
  '/en/bank/us/mercury': 'bank-us',
  '/en/bank/us/axos': 'bank-us',
  '/en/bank/us/hsbc': 'bank-us',

  // 公证认证
  '/notary/hague': 'cert-global',
  '/notary/embassy': 'cert-global',
  '/notary/hk': 'cert-country',
  '/notary/us': 'cert-country',
  '/notary/uk': 'cert-country',
  '/notary/jp': 'cert-country',
  '/notary/sg': 'cert-country',
  '/en/notary/hague': 'cert-global',
  '/en/notary/embassy': 'cert-global',
  '/en/notary/hk': 'cert-country',
  '/en/notary/us': 'cert-country',
  '/en/notary/uk': 'cert-country',
  '/en/notary/jp': 'cert-country',
  '/en/notary/sg': 'cert-country',

  // 知识产权服务
  '/intellectual/domestic-trademark': 'ip-global',
  '/intellectual/international-trademark': 'ip-global',
  '/intellectual/domestic-patent': 'ip-global',
  '/en/intellectual/domestic-trademark': 'ip-global',
  '/en/intellectual/international-trademark': 'ip-global',
  '/en/ip/patent': 'ip-global'
}

// 核心修复：确保路径以 '/company' 开头，并且路径本身不等于 '/' 或其他非公司路由
const isCompanyRoute = computed(() => route.path.startsWith('/company_en') && route.path !== '/en');
const isSecretaryRoute = computed(() => route.path.startsWith('/secretary_en'));
const isBankRoute = computed(() => route.path.startsWith('/bank') || route.path.startsWith('/en/bank'));
const isCertRoute = computed(() => route.path.startsWith('/notary'));
const isIpRoute = computed(() => route.path.startsWith('/intellectual') || route.path.startsWith('/en/intellectual') || route.path.startsWith('/en/ip'));

// 计算当前激活的区域
const activeRegion = computed(() => {
  const matchedRegion = countryToRegionMap[route.path];
  if (matchedRegion) {
    return matchedRegion;
  }
  if (route.path.startsWith('/company_en')) {
      return 'east-asia'; 
  }
  return null;
})
</script>

<style lang="scss" scoped>
    
</style>