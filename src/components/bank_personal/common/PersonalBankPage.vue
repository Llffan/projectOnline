<template>
  <div ref="root" class="constructions_box">
    <component :is="en ? TopEn : TopZh" />
    <div class="constructions_content1" data-personal-hero>
      <div class="img_box"><img :src="regionConfig.heroImage" :alt="title"></div>
      <div class="intro"><div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
        <div class="description"><p>{{ en ? 'Eligibility, documents and application channels for your personal account.' : '了解个人开户适用条件、资料准备及办理渠道。' }}</p></div>
      </div>
    </div>
    <component :is="en ? LinkEn : LinkZh" />
    <div class="constructions_content2"><div class="content_box">
      <div class="content1" data-personal-section>
        <div class="title">{{ en ? 'Personal Account Eligibility' : '个人账户适用条件' }}</div>
        <div class="intro"><img :src="bank.img" :alt="bankName"><div class="text"><p>{{ copy.eligibility }}</p><p>{{ copy.channel }}</p></div></div>
      </div>
      <div class="content3" data-personal-section>
        <div class="title">{{ en ? 'Personal Application Documents' : '个人申请资料' }}</div>
        <div class="intro">
          <div class="left"><div v-for="item in copy.documents.slice(0, 2)" :key="item" class="condition-item">{{ item }}</div></div>
          <div class="center"></div>
          <div class="right"><div v-for="item in copy.documents.slice(2)" :key="item" class="condition-item">{{ item }}</div><div class="condition-item">{{ en ? 'Check additional requirements for your identity and selected product with the bank.' : '按本人身份及所选产品向银行确认补充要求。' }}</div></div>
        </div>
      </div>
      <div v-if="profile.status !== 'unavailable'" class="content4" :class="{ 'personal-process-four': steps.length === 4 }" data-personal-section>
        <div class="title">{{ en ? 'Application Support Process' : '个人开户对接流程' }}</div>
        <div class="intro"><div v-for="item in steps" :key="item.title" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.icon"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.text }}</div></div></div>
      </div>
      <PersonalMaintenance v-if="profile.status !== 'unavailable'" :locale="locale" data-personal-section />
      <div class="content6" data-personal-section>
        <div class="title">{{ en ? 'Personal Account FAQs' : '个人开户常见问题' }}</div>
        <div class="intro"><div v-for="(faq, index) in faqs" :key="faq.question" class="faq-item">
          <button type="button" class="faq-question" :aria-expanded="!!expanded[index]" @click="expanded[index] = !expanded[index]"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ expanded: expanded[index] }">▼</span></button>
          <div class="faq-answer" :class="{ expanded: expanded[index] }">{{ faq.answer }}</div>
        </div></div>
      </div>

    </div></div>
    <component :is="en ? BottomEn : BottomZh" />
  </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
import TopZh from '@/components/common/Top.vue'
import TopEn from '@/components_en/common/Top.vue'
import LinkZh from '@/components/bank_company/common/Link.vue'
import LinkEn from '@/components_en/bank_company/common/Link.vue'
import BottomZh from '@/components/homeView/bottom/Bottom1.vue'
import BottomEn from '@/components_en/homeView/bottom/Bottom1.vue'
import PersonalMaintenance from './PersonalMaintenance.vue'
import { usePersonalAnimations } from './usePersonalAnimations.js'
import '@/css/bank_company/hk/construction/Constructions.css'
import '@/css/bank_company/hk/construction/Constructions_content1.css'
import '@/css/bank_company/hk/construction/Constructions_content2.css'
const props = defineProps({ bank: { type: Object, required: true }, profile: { type: Object, required: true }, regionConfig: { type: Object, required: true }, locale: { type: String, required: true } })
const root = ref(null)
const expanded = ref({})
const en = computed(() => props.locale === 'en')
const bankName = computed(() => en.value ? props.bank.nameEn : props.bank.name)
const copy = computed(() => props.profile[props.locale])
const title = computed(() => bankName.value + (en.value ? ' Personal Account' : '个人账户开户'))
const subtitle = computed(() => ({ personal: en.value ? 'Personal banking application guide' : '个人银行账户申请指南', private: en.value ? 'Private banking relationship assessment' : '私人银行客户关系评估', pending: en.value ? 'Confirm eligibility with the bank' : '开户资格及材料须向银行确认', unavailable: en.value ? 'Personal service availability' : '个人服务适用范围说明' })[props.profile.status])
const steps = computed(() => en.value ? [
  { icon: '#icon-agreement', title: 'Eligibility review', text: 'Review your identity, residence and personal account purpose.' },
  { icon: '#icon-notes', title: 'Document preparation', text: 'Confirm the selected bank’s documents and fees.' },
  { icon: '#icon-city', title: 'Application channel', text: copy.value.channel },
  { icon: '#icon-audit', title: 'Bank decision', text: 'Respond to additional checks and follow activation instructions after approval.' }
] : [
  { icon: '#icon-agreement', title: '资格评估', text: '了解身份、居住地及个人开户用途，确认适用条件。' },
  { icon: '#icon-notes', title: '资料准备', text: '核对目标银行的个人文件清单及所选产品收费。' },
  { icon: '#icon-city', title: '渠道对接', text: copy.value.channel },
  { icon: '#icon-audit', title: '银行审核', text: '配合补充核验，通过审核后按银行指引启用账户。' }
])
const faqs = computed(() => en.value ? [
  { question: 'Is this suitable for my personal application?', answer: copy.value.eligibility },
  { question: 'Can I apply remotely?', answer: copy.value.channel },
  { question: 'What are the fees and approval time?', answer: 'Confirm the selected product’s charges and balance requirements with the bank before applying. Review time depends on your application and is not guaranteed.' }
] : [
  { question: '是否适合我的个人开户需求？', answer: copy.value.eligibility },
  { question: '是否可以远程办理？', answer: copy.value.channel },
  { question: '费用和审批时间是多少？', answer: '申请前向银行确认所选产品的收费与结余要求；审核时间取决于申请情况，不承诺固定时限或保证获批。' }
])
watch(() => props.bank.slug, () => { expanded.value = {} })
usePersonalAnimations(root, () => props.regionConfig.region + '/' + props.bank.slug + '/' + props.locale)
</script>
<style scoped>
/* Keep button keyboard support while using the existing bank FAQ appearance. */
.faq-question {
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  border-radius: inherit;
  background: transparent;
  text-align: left;
  font-family: inherit;
  cursor: pointer;
}
/* Personal documents use their natural height instead of the company checklist minimum. */
.constructions_content2 .content_box .content3 {
  min-height: 0;
  padding-bottom: 30px;
}
.constructions_content2 .content_box .content3 .intro {
  height: auto;
  flex: none;
}
.constructions_content2 .content_box .content3 .intro .center {
  height: auto;
  align-self: stretch;
  margin: 10px 40px;
}
/* Match the existing four-card support layout: 80% width and 20px gaps. */
.constructions_content2 .content_box .personal-process-four .intro {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  align-items: stretch;
}
.constructions_content2 .content_box .personal-process-four .intro .advantage {
  width: auto;
}
</style>
