<template>
  <ServiceHero class="constructions_content1" v-bind="hero" />
</template>

<script setup>
import ServiceHero from '@/components/common/ServiceHero.vue'
import heroImage from '@/assets/img/company/jp/JP.jpg'

const hero = {
  "title": "香港建设银行（亚洲）",
  "subtitle": "开户服务：企业与个人开户全攻略、开户优势、资料清单、流程及常见问题解答",
  "description": [
    "VIP通道快速预约开户专人全程指导，银行面签前口述辅导品质和品牌均有保证开户确保成功，不成功就退款"
  ],
  "imageAlt": "",
  "language": "zh",
  heroImage,
}
</script>
