<template>
  <ServiceHero class="constructions_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/hk/HK.jpg'

const hero = {
  "title": "香港个人银行账户开户",
  "subtitle": "银行选择、资料准备、预约面签、合规审核及账户维护",
  "description": [
    "根据申请人的身份、资金用途和银行政策匹配开户方案，协助准备资料并预约香港银行网点。"
  ],
  "imageAlt": "香港个人银行账户开户",
  "language": "zh",
  heroImage,
}
</script>
