<template><component :is="bankView" v-if="bankView" /></template>
<script setup>
import { computed, defineAsyncComponent, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const views = {
  hk: {
    constructions: () => import('@/views/bank_company/hk/Constructions.vue'), boc: () => import('@/views/bank_company/hk/Boc.vue'), communications: () => import('@/views/bank_company/hk/Communications.vue'), 'cmb-winglung': () => import('@/views/bank_company/hk/CmbWinglung.vue'), citic: () => import('@/views/bank_company/hk/Citic.vue'), hsbc: () => import('@/views/bank_company/hk/Hsbc.vue'), chonghing: () => import('@/views/bank_company/hk/ChongHing.vue'), dbs: () => import('@/views/bank_company/hk/Dbs.vue'), hangseng: () => import('@/views/bank_company/hk/HangSeng.vue'), ncb: () => import('@/views/bank_company/hk/Nanyang.vue'), bea: () => import('@/views/bank_company/hk/Bea.vue'), dahsing: () => import('@/views/bank_company/hk/DahSing.vue'), ocbc: () => import('@/views/bank_company/hk/Ocbc.vue'), citi: () => import('@/views/bank_company/hk/Citi.vue'), sc: () => import('@/views/bank_company/hk/Sc.vue'), icbc: () => import('@/views/bank_company/hk/Icbc.vue'), 'shanghai-commercial': () => import('@/views/bank_company/hk/Shanghai.vue')
  },
  sg: { ocbc: () => import('@/views/bank_company/sg/Ocbc.vue'), hsbc: () => import('@/views/bank_company/sg/Hsbc.vue'), maybank: () => import('@/views/bank_company/sg/Maybank.vue'), sc: () => import('@/views/bank_company/sg/Sc.vue'), uob: () => import('@/views/bank_company/sg/Uob.vue'), dbs: () => import('@/views/bank_company/sg/Dbs.vue'), citi: () => import('@/views/bank_company/sg/Citi.vue'), bos: () => import('@/views/bank_company/sg/Bos.vue'), boc: () => import('@/views/bank_company/sg/Boc.vue') },
  mo: { wl: () => import('@/views/bank_company/mo/Wl.vue'), 'icbc-asia': () => import('@/views/bank_company/mo/IcbcAsia.vue'), boc: () => import('@/views/bank_company/mo/Boc.vue'), lusobank: () => import('@/views/bank_company/mo/Lusobank.vue'), hsbc: () => import('@/views/bank_company/mo/Hsbc.vue'), cgb: () => import('@/views/bank_company/mo/Cgb.vue'), ocbc: () => import('@/views/bank_company/mo/Ocbc.vue') },
  us: { cbi: () => import('@/views/bank_company/us/Cbi.vue'), ew: () => import('@/views/bank_company/us/Ew.vue'), cathay: () => import('@/views/bank_company/us/Cathay.vue'), boa: () => import('@/views/bank_company/us/Boa.vue'), arival: () => import('@/views/bank_company/us/Arival.vue'), axos: () => import('@/views/bank_company/us/Axos.vue'), hsbc: () => import('@/views/bank_company/us/Hsbc.vue') }
}
const loader = computed(() => views[route.params.region]?.[route.params.bank])
const bankView = computed(() => loader.value ? defineAsyncComponent(loader.value) : null)
watchEffect(() => { if (!loader.value) router.replace('/bank/' + (views[route.params.region] ? route.params.region : 'hk') + '/personal') })
</script>
