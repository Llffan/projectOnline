<template><RegionPersonalPage v-if="config" :config="config" locale="zh" /></template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import RegionPersonalPage from '@/components/bank_personal/common/RegionPersonalPage.vue'
import { regionPersonalConfigs } from '@/components/bank_personal/common/regionPersonalConfig.js'
const props = defineProps({ region: { type: String, required: true } })
import '@/css/bank_company/sg/ocbc/Ocbc.css'
import '@/css/bank_company/sg/ocbc/Ocbc_content1.css'
import '@/css/bank_company/sg/ocbc/Ocbc_content2.css'
import '@/css/bank_company/mo/icbc/Icbc.css'
import '@/css/bank_company/mo/icbc/Icbc_content1.css'
import '@/css/bank_company/mo/icbc/Icbc_content2.css'
import '@/css/bank_company/us/cbi/Cbi.css'
import '@/css/bank_company/us/cbi/Cbi_content1.css'
import '@/css/bank_company/us/cbi/Cbi_content2.css'
import '@/css/bank_company/common/SG_Cooperative_Bank.css'
import '@/css/bank_company/common/MO_Cooperative_Bank.css'
import '@/css/bank_company/common/US_Cooperative_Bank.css'
const route = useRoute()
const config = computed(() => regionPersonalConfigs[props.region || route.params.region])
</script>
