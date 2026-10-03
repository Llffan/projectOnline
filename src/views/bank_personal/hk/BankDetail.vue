<template>
  <component :is="bankView" v-if="bankView" />
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const views = {
  constructions: () => import('@/views/bank_company/hk/Constructions.vue'),
  boc: () => import('@/views/bank_company/hk/Boc.vue'),
  communications: () => import('@/views/bank_company/hk/Communications.vue'),
  'cmb-winglung': () => import('@/views/bank_company/hk/CmbWinglung.vue'),
  citic: () => import('@/views/bank_company/hk/Citic.vue'),
  hsbc: () => import('@/views/bank_company/hk/Hsbc.vue'),
  chonghing: () => import('@/views/bank_company/hk/ChongHing.vue'),
  dbs: () => import('@/views/bank_company/hk/Dbs.vue'),
  hangseng: () => import('@/views/bank_company/hk/HangSeng.vue'),
  ncb: () => import('@/views/bank_company/hk/Nanyang.vue'),
  bea: () => import('@/views/bank_company/hk/Bea.vue'),
  dahsing: () => import('@/views/bank_company/hk/DahSing.vue'),
  ocbc: () => import('@/views/bank_company/hk/Ocbc.vue'),
  citi: () => import('@/views/bank_company/hk/Citi.vue'),
  sc: () => import('@/views/bank_company/hk/Sc.vue'),
  icbc: () => import('@/views/bank_company/hk/Icbc.vue'),
  'shanghai-commercial': () => import('@/views/bank_company/hk/Shanghai.vue')
}
const bankView = computed(() => views[route.params.bank] ? defineAsyncComponent(views[route.params.bank]) : null)
</script>
