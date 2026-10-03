<template><component :is="bankView" v-if="bankView" /></template>
<script setup>
import { computed, defineAsyncComponent, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const views = {
  hk: {
    constructions: () => import('@/views_en/bank_company/hk/Constructions.vue'), boc: () => import('@/views_en/bank_company/hk/Boc.vue'), communications: () => import('@/views_en/bank_company/hk/Communications.vue'), 'cmb-winglung': () => import('@/views_en/bank_company/hk/CmbWinglung.vue'), citic: () => import('@/views_en/bank_company/hk/Citic.vue'), hsbc: () => import('@/views_en/bank_company/hk/Hsbc.vue'), chonghing: () => import('@/views_en/bank_company/hk/Chonghing.vue'), dbs: () => import('@/views_en/bank_company/hk/Dbs.vue'), hangseng: () => import('@/views_en/bank_company/hk/HangSeng.vue'), ncb: () => import('@/views_en/bank_company/hk/Nanyang.vue'), bea: () => import('@/views_en/bank_company/hk/Bea.vue'), dahsing: () => import('@/views_en/bank_company/hk/DahSing.vue'), ocbc: () => import('@/views_en/bank_company/hk/Ocbc.vue'), citi: () => import('@/views_en/bank_company/hk/Citi.vue'), sc: () => import('@/views_en/bank_company/hk/Sc.vue'), icbc: () => import('@/views_en/bank_company/hk/Icbc.vue'), 'shanghai-commercial': () => import('@/views_en/bank_company/hk/Shanghai.vue')
  },
  sg: { ocbc: () => import('@/views_en/bank_company/sg/Ocbc.vue'), hsbc: () => import('@/views_en/bank_company/sg/Hsbc.vue'), maybank: () => import('@/views_en/bank_company/sg/Maybank.vue'), sc: () => import('@/views_en/bank_company/sg/Sc.vue'), uob: () => import('@/views_en/bank_company/sg/Uob.vue'), dbs: () => import('@/views_en/bank_company/sg/Dbs.vue'), citi: () => import('@/views_en/bank_company/sg/Citi.vue'), bos: () => import('@/views_en/bank_company/sg/Bos.vue'), boc: () => import('@/views_en/bank_company/sg/Boc.vue') },
  mo: { wl: () => import('@/views_en/bank_company/mo/Wl.vue'), 'icbc-asia': () => import('@/views_en/bank_company/mo/IcbcAsia.vue'), boc: () => import('@/views_en/bank_company/mo/Boc.vue'), lusobank: () => import('@/views_en/bank_company/mo/Lusobank.vue'), hsbc: () => import('@/views_en/bank_company/mo/Hsbc.vue'), cgb: () => import('@/views_en/bank_company/mo/Cgb.vue'), ocbc: () => import('@/views_en/bank_company/mo/Ocbc.vue') },
  us: { cbi: () => import('@/views_en/bank_company/us/Cbi.vue'), ew: () => import('@/views_en/bank_company/us/Ew.vue'), cathay: () => import('@/views_en/bank_company/us/Cathay.vue'), boa: () => import('@/views_en/bank_company/us/Boa.vue'), arival: () => import('@/views_en/bank_company/us/Arival.vue'), axos: () => import('@/views_en/bank_company/us/Axos.vue'), hsbc: () => import('@/views_en/bank_company/us/Hsbc.vue') }
}
const loader = computed(() => views[route.params.region]?.[route.params.bank])
const bankView = computed(() => loader.value ? defineAsyncComponent(loader.value) : null)
watchEffect(() => { if (!loader.value) router.replace('/en/bank/' + (views[route.params.region] ? route.params.region : 'hk') + '/personal') })
</script>
