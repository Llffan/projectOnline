<template><PersonalBankPage v-if="bank && profile && isAvailable" :key="route.fullPath" :bank="bank" :profile="profile" :region-config="config" locale="zh" /></template>
<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PersonalBankPage from '@/components/bank_personal/common/PersonalBankPage.vue'
import { regionPersonalConfigs } from '@/components/bank_personal/common/regionPersonalConfig.js'
import { personalBankProfiles, isListedPersonalBank } from '@/components/bank_personal/common/personalBankProfiles.js'
const route = useRoute()
const router = useRouter()
const config = computed(() => regionPersonalConfigs[route.params.region])
const bank = computed(() => config.value?.banks.find(item => item.slug === route.params.bank))
const profile = computed(() => personalBankProfiles[route.params.region]?.[route.params.bank])
const isAvailable = computed(() => isListedPersonalBank(route.params.region, route.params.bank))
watch(() => [route.params.region, route.params.bank], () => {
  if (!bank.value || !profile.value || !isAvailable.value) router.replace('/bank/' + (config.value ? route.params.region : 'hk') + '/personal')
}, { immediate: true })
</script>
