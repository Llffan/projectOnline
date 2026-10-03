<template>
  <div :class="config.boxClass">
    <component :is="topComponent" />
    <div :class="config.content1Class">
      <div class="img_box"><img loading="lazy" :src="config.heroImage" :alt="copy.heroTitle"></div>
      <div class="intro"><div class="title">{{ copy.heroTitle }}</div><div class="subtitle">{{ copy.heroSubtitle }}</div><div class="description"><p>{{ copy.heroDescription }}</p></div></div>
    </div>
    <component :is="linkComponent" />
    <div :class="config.content2Class"><div class="content_box">
      <div class="content1"><div class="title">{{ copy.introTitle }}</div><div class="intro"><img loading="lazy" :src="config.accountImage" :alt="copy.heroTitle"><div class="text"><p>{{ copy.introText }}</p></div></div></div>
      <div class="content2"><div class="title">{{ copy.advantagesTitle }}</div><div class="intro"><div v-for="item in copy.advantages" :key="item.title" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div></div>
      <div class="content3"><div class="title">{{ copy.requirementsTitle }}</div><div class="intro"><div class="left"><div v-for="item in copy.requirements.slice(0,3)" :key="item" class="condition-item">{{ item }}</div></div><div class="center"></div><div class="right"><div v-for="item in copy.requirements.slice(3)" :key="item" class="condition-item">{{ item }}</div></div></div></div>
      <component :is="maintenanceComponent" />
      <div class="content4"><div class="title">{{ copy.processTitle }}</div><div class="intro"><div v-for="item in copy.processes" :key="item.title" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div></div>
      <component :is="chooseUsComponent" />
      <div :class="[config.bankClass, 'content_bank']"><div class="title">{{ copy.banksTitle }}</div><div class="bank-grid"><router-link v-for="bank in config.banks" :key="bank.slug" :to="routePrefix + bank.slug" class="bank-item"><div class="img-box"><img loading="lazy" :src="bank.img" :alt="bankName(bank)"></div><div class="bank-name">{{ bankName(bank) }}</div></router-link></div></div>
      <div class="content6"><div class="title">{{ copy.faqTitle }}</div><div class="intro"><div v-for="(faq,index) in copy.faqs" :key="faq.question" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ expanded: expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ expanded: expandedItems[index] }">{{ faq.answer }}</div></div></div></div>
    </div></div>
    <component :is="bottomComponent" />
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import TopZh from '@/components/common/Top.vue'
import TopEn from '@/components_en/common/Top.vue'
import LinkZh from '@/components/bank_company/common/Link.vue'
import LinkEn from '@/components_en/bank_company/common/Link.vue'
import ChooseUsZh from '@/components/bank_company/common/ChooseUs.vue'
import ChooseUsEn from '@/components_en/bank_company/common/ChooseUs.vue'
import MaintenanceZh from '@/components/bank_company/common/MaintenanceGuide.vue'
import MaintenanceEn from '@/components_en/bank_company/common/MaintenanceGuide.vue'
import BottomZh from '@/components/homeView/bottom/Bottom1.vue'
import BottomEn from '@/components_en/homeView/bottom/Bottom1.vue'
const props = defineProps({ config: { type: Object, required: true }, locale: { type: String, required: true } })
const expandedItems = ref({})
const copy = computed(() => props.config.copy[props.locale])
const routePrefix = computed(() => (props.locale === 'en' ? '/en' : '') + '/bank/' + props.config.region + '/personal/')
const topComponent = computed(() => props.locale === 'en' ? TopEn : TopZh)
const linkComponent = computed(() => props.locale === 'en' ? LinkEn : LinkZh)
const chooseUsComponent = computed(() => props.locale === 'en' ? ChooseUsEn : ChooseUsZh)
const maintenanceComponent = computed(() => props.locale === 'en' ? MaintenanceEn : MaintenanceZh)
const bottomComponent = computed(() => props.locale === 'en' ? BottomEn : BottomZh)
const bankName = bank => props.locale === 'en' ? bank.nameEn : bank.name
const toggleFaq = index => { expandedItems.value[index] = !expandedItems.value[index] }
</script>
