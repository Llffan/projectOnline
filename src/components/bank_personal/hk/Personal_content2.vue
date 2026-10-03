<template>
  <div class="constructions_content2"><div class="content_box">
    <div class="content1"><div class="title">香港个人银行账户简介</div><div class="intro"><img loading="lazy" src="@/assets/img/account/香港.png" alt="香港个人银行账户"><div class="text"><p>香港个人银行账户适合海外留学、置业、投资、移民及跨境生活支出等场景。账户通常可提供多币种资金管理、网上银行、银行卡和跨境汇款服务，具体功能、开户条件和审批结果以银行最终审核为准。</p></div></div></div>
    <div class="content2"><div class="title">香港个人账户开户优势</div><div class="intro"><div v-for="item in advantages" :key="item.title" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div></div>
    <div class="content3"><div class="title">个人开户常用资料</div><div class="intro"><div class="left"><div v-for="item in requirements.slice(0,3)" :key="item" class="condition-item">{{ item }}</div></div><div class="center"></div><div class="right"><div v-for="item in requirements.slice(3)" :key="item" class="condition-item">{{ item }}</div></div></div></div>
    <MaintenanceGuide />
    <div class="content4"><div class="title">香港个人账户开户流程</div><div class="intro"><div v-for="item in processes" :key="item.title" class="advantage"><div class="img"><svg class="icon" aria-hidden="true"><use :xlink:href="item.iconId"></use></svg></div><div class="text1">{{ item.title }}</div><div class="text2">{{ item.description }}</div></div></div></div>
    <ChooseUs />
    <PersonalBanks class="content_bank" />
    <div class="content6"><div class="title">香港个人开户常见问题</div><div class="intro"><div v-for="(faq,index) in faqs" :key="faq.question" class="faq-item" @click="toggleFaq(index)"><div class="faq-question"><span class="question-text">{{ faq.question }}</span><span class="toggle-icon" :class="{ expanded: expandedItems[index] }">▼</span></div><div class="faq-answer" :class="{ expanded: expandedItems[index] }">{{ faq.answer }}</div></div></div></div>
  </div></div>
</template>
<script setup>
import { ref } from 'vue'
import '@/css/bank_company/hk/construction/Constructions_content2.css'
import MaintenanceGuide from '@/components/bank_company/common/MaintenanceGuide.vue'
import ChooseUs from '@/components/bank_company/common/ChooseUs.vue'
import PersonalBanks from '@/components/bank_personal/hk/Personal_Banks.vue'
const advantages = [{iconId:'#icon-finance',title:'多币种管理',description:'按银行及账户类型管理港币、人民币、美元等常用币种。'},{iconId:'#icon-bank-line',title:'跨境收支',description:'便于处理留学、置业、保险及日常跨境生活支出。'},{iconId:'#icon-airplane',title:'全球使用',description:'通过网上银行、银行卡及汇款服务管理个人资金。'},{iconId:'#icon-folder-success-one',title:'财富管理',description:'为符合合规要求的个人提供海外资产配置基础。'}]
const requirements = ['有效内地身份证','港澳通行证或护照','入境记录或入境小票','住址证明或有效通讯地址资料','税务居民身份及自我证明','资金来源、职业背景与开户用途说明']
const processes = [{iconId:'#icon-agreement',title:'初步咨询',description:'了解身份、开户用途、资金来源和银行偏好。'},{iconId:'#icon-notes',title:'资料预审',description:'按目标银行要求整理并补充个人开户资料。'},{iconId:'#icon-city',title:'预约网点',description:'预约香港银行网点及本人面签时间。'},{iconId:'#icon-audit',title:'银行审核',description:'银行完成身份核验、尽职调查及合规审批。'},{iconId:'#icon-award-line',title:'收取资料',description:'审批通过后按银行安排收取账户及银行卡资料。'},{iconId:'#icon-folder-success-one',title:'激活账户',description:'启用网上银行并按银行要求维护账户。'}]
const faqs = [{question:'内地居民可以申请香港个人银行账户吗？',answer:'部分香港银行接受符合条件的内地居民申请，是否受理及所需资料由银行按客户情况和最新政策审核。'},{question:'是否必须本人赴港办理？',answer:'多数传统银行需要本人到香港网点完成身份核验和面签，具体安排以目标银行要求为准。'},{question:'个人开户需要多长时间？',answer:'预约和审批时间取决于银行、申请人情况及资料完整度，面签后仍需经过银行合规审核，不能保证固定时限。'},{question:'个人账户开立后需要注意什么？',answer:'建议保持合理的账户活动，及时回复银行调查，维护有效联系方式，并保留资金来源和交易用途证明。'}]
const expandedItems = ref({})
const toggleFaq = index => { expandedItems.value[index] = !expandedItems.value[index] }
</script>
