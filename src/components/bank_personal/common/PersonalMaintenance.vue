<template>
  <div class="maintenance_guide">
    <div class="content_box1">
      <div class="title">{{ en ? 'Personal Account Maintenance' : '个人账户维护与费用' }}</div>
      <div class="intro"><div class="materials-grid">
        <div v-for="(item, index) in items" :key="item.title" class="material-card">
          <div class="card-idx">{{ index + 1 }}</div><div class="card-title">{{ item.title }}</div>
          <div class="card-desc"><p>{{ item.text }}</p></div>
        </div>
      </div></div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import '@/css/bank_company/common/MaintenanceGuide.css'
const props = defineProps({ locale: { type: String, default: 'zh' } })
const en = computed(() => props.locale === 'en')
const items = computed(() => en.value ? [
  { title: 'Product fees', text: 'Before applying, confirm the selected personal product’s opening deposit, minimum balance, monthly fee and waiver conditions in the bank’s fee schedule.' },
  { title: 'Transfers and cards', text: 'Check charges for currency conversion, remittances, intermediary banks, ATM withdrawals and card services for your intended use.' },
  { title: 'Personal information', text: 'Keep contact details and tax-residency information current. Respond to bank enquiries and retain evidence of income, funding and payment purposes.' },
  { title: 'Account security', text: 'Complete activation as instructed. Protect passwords and verification codes; do not lend your account or receive unexplained third-party funds.' }
] : [
  { title: '产品收费', text: '申请前核对所选个人产品的初始存款、最低结余、月费及豁免条件，使用银行对应产品的收费表。' },
  { title: '汇款与银行卡', text: '按实际用途确认兑换、汇款、中转行、提款及银行卡服务费用，不将不同产品的费用混用。' },
  { title: '个人资料', text: '及时更新联系方式及税务居民资料，回复银行查询，保留收入、资金来源及付款用途证明。' },
  { title: '账户安全', text: '按银行指引激活账户，妥善保管密码和验证码，不出借账户或代收来源不明的资金。' }
])
</script>
