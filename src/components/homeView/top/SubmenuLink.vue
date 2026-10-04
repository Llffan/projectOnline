<template>
  <RouterLink :to="to" class="submenu-link">
    <img v-if="flagSrc" :src="flagSrc" class="submenu-flag" alt="" />
    <component v-else :is="icon" class="submenu-icon" aria-hidden="true" />
    <span class="submenu-label"><slot /></span>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import flagBvi from 'flag-icons/flags/4x3/vg.svg'
import flagCa from 'flag-icons/flags/4x3/ca.svg'
import flagDe from 'flag-icons/flags/4x3/de.svg'
import flagFr from 'flag-icons/flags/4x3/fr.svg'
import flagHk from 'flag-icons/flags/4x3/hk.svg'
import flagId from 'flag-icons/flags/4x3/id.svg'
import flagJp from 'flag-icons/flags/4x3/jp.svg'
import flagKr from 'flag-icons/flags/4x3/kr.svg'
import flagKy from 'flag-icons/flags/4x3/ky.svg'
import flagMh from 'flag-icons/flags/4x3/mh.svg'
import flagMo from 'flag-icons/flags/4x3/mo.svg'
import flagMy from 'flag-icons/flags/4x3/my.svg'
import flagSc from 'flag-icons/flags/4x3/sc.svg'
import flagSg from 'flag-icons/flags/4x3/sg.svg'
import flagTh from 'flag-icons/flags/4x3/th.svg'
import flagUk from 'flag-icons/flags/4x3/gb.svg'
import flagUs from 'flag-icons/flags/4x3/us.svg'
import flagVn from 'flag-icons/flags/4x3/vn.svg'
import flagWs from 'flag-icons/flags/4x3/ws.svg'
import {
  BadgeCheck,
  Barcode,
  Building2,
  Calculator,
  CalendarCheck,
  ChartColumnIncreasing,
  FilePenLine,
  Globe,
  Landmark,
  Lightbulb,
  RadioTower,
  ReceiptText,
  RefreshCw,
  Scale,
  Stamp,
  Tags,
  UserRound,
} from '@lucide/vue'

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})

const companyFlagByCountry = {
  jp: flagJp,
  kr: flagKr,
  hk: flagHk,
  mo: flagMo,
  vn: flagVn,
  th: flagTh,
  my: flagMy,
  id: flagId,
  sg: flagSg,
  us: flagUs,
  ca: flagCa,
  uk: flagUk,
  de: flagDe,
  fr: flagFr,
  bvi: flagBvi,
  ky: flagKy,
  sc: flagSc,
  mh: flagMh,
  ws: flagWs,
}

const flagSrc = computed(() => {
  const match = props.to.match(/^\/company(?:_en)?\/([^/]+)$/)
  return match ? companyFlagByCountry[match[1]] : null
})

const icon = computed(() => {
  const { to } = props

  if (to.includes('/company')) return Building2
  if (to.includes('/bank')) return  /\/personal(?:\/|$)/.test(to) ? UserRound : Landmark
  if (to.includes('/notary/hague') || to.includes('/notary/embassy')) return Stamp
  if (to.includes('/notary')) return BadgeCheck
  if (to.includes('/ip/patent')) return Lightbulb
  if (to.includes('trademark')) return Tags
  if (to.includes('hk-annual') || to.includes('overseas-annual')) return CalendarCheck
  if (to.includes('barcode')) return Barcode
  if (to.includes('hk-msb')) return BadgeCheck
  if (to.includes('telecom')) return RadioTower
  if (to.includes('hk-odi')) return Globe
  if (to.includes('/change')) return FilePenLine
  if (to.includes('/dissolution')) return Scale
  if (to.includes('/restoration')) return RefreshCw
  if (to.includes('/accounting')) return Calculator
  if (to.includes('/tax-filing')) return ReceiptText
  if (to.includes('/tax-planning')) return ChartColumnIncreasing

  return BadgeCheck
})
</script>
