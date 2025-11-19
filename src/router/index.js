import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },{
      path: '/en',
      name: 'home_en',
      component: () => import('@/views_en/HomeView.vue'),
    },{
      path: '/company/hk',
      name: 'hk',
      component: () => import('@/views/company/HK.vue'),
    },{
      path: '/company_en/hk',
      name: 'hk_en',
      component: () => import('@/views_en/company/HK.vue'),
    },{
      path: '/company/jp',
      name: 'jp',
      component: () => import('@/views/company/JP.vue'),
    },{
      path: '/company_en/jp',
      name: 'jp_en',
      component: () => import('@/views_en/company/JP.vue'),
    },{
      path: '/company/kr',
      name: 'kr',
      component: () => import('@/views/company/KR.vue'),
    },{
      path: '/company_en/kr',
      name: 'kr_en',
      component: () => import('@/views_en/company/KR.vue'),
    },{
      path: '/company/mo',
      name: 'mo',
      component: () => import('@/views/company/MO.vue'),
    },{
      path: '/company_en/mo',
      name: 'mo_en',
      component: () => import('@/views_en/company/MO.vue'),
    },{
      path: '/company/vn',
      name: 'vn',
      component: () => import('@/views/company/VN.vue'),
    },{
      path: '/company_en/vn',
      name: 'vn_en',
      component: () => import('@/views_en/company/VN.vue'),
    },{
      path: '/company/th',
      name: 'th',
      component: () => import('@/views/company/TH.vue'),
    },{
      path: '/company_en/th',
      name: 'th_en',
      component: () => import('@/views_en/company/TH.vue'),
    },{
      path: '/company/my',
      name: 'my',
      component: () => import('@/views/company/MY.vue'),
    },{
      path: '/company_en/my',
      name: 'my_en',
      component: () => import('@/views_en/company/MY.vue'),
    },{
      path: '/company/id',
      name: 'id',
      component: () => import('@/views/company/ID.vue'),
    },{
      path: '/company_en/id',
      name: 'id_en',
      component: () => import('@/views_en/company/ID.vue'),
    },{
      path: '/company/sg',
      name: 'sg',
      component: () => import('@/views/company/SG.vue'),
    },{
      path: '/company_en/sg',
      name: 'sg_en',
      component: () => import('@/views_en/company/SG.vue'),
    },{
      path: '/company/us',
      name: 'us',
      component: () => import('@/views/company/US.vue'),
    },{
      path: '/company_en/us',
      name: 'us_en',
      component: () => import('@/views_en/company/US.vue'),
    },{
      path: '/company/ca',
      name: 'ca',
      component: () => import('@/views/company/CA.vue'),
    },{
      path: '/company_en/ca',
      name: 'ca_en',
      component: () => import('@/views_en/company/CA.vue'),
    },{
      path: '/company/uk',
      name: 'uk',
      component: () => import('@/views/company/UK.vue'),
    },{
      path: '/company_en/uk',
      name: 'uk_en',
      component: () => import('@/views_en/company/UK.vue'),
    },{
      path: '/company/de',
      name: 'de',
      component: () => import('@/views/company/DE.vue'),
    },{
      path: '/company_en/de',
      name: 'de_en',
      component: () => import('@/views_en/company/DE.vue'),
    },{
      path: '/company/fr',
      name: 'fr',
      component: () => import('@/views/company/FR.vue'),
    },{
      path: '/company_en/fr',
      name: 'fr_en',
      component: () => import('@/views_en/company/FR.vue'),
    },{
      path: '/company/bvi',
      name: 'bvi',
      component: () => import('@/views/company/BVI.vue'),
    },{
      path: '/company_en/bvi',
      name: 'bvi_en',
      component: () => import('@/views_en/company/BVI.vue'),
    },{
      path: '/company/ky',
      name: 'ky',
      component: () => import('@/views/company/KY.vue'),
    },{
      path: '/company_en/ky',
      name: 'ky_en',
      component: () => import('@/views_en/company/KY.vue'),
    },{
      path: '/company/sc',
      name: 'sc',
      component: () => import('@/views/company/SC.vue'),
    },{
      path: '/company_en/sc',
      name: 'sc_en',
      component: () => import('@/views_en/company/SC.vue'),
    },{
      path: '/company/mh',
      name: 'mh',
      component: () => import('@/views/company/MH.vue'),
    },{
      path: '/company_en/mh',
      name: 'mh_en',
      component: () => import('@/views_en/company/MH.vue'),
    },{
      path: '/company/ws',
      name: 'ws',
      component: () => import('@/views/company/WS.vue'),
    },{
      path: '/company_en/ws',
      name: 'ws_en',
      component: () => import('@/views_en/company/WS.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 总是滚动到顶部
    return { top: 0 }
  }
})

export default router