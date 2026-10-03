<template>
  <main class="personal-content">
    <section class="personal-section intro-section">
      <h2>香港个人开户服务</h2>
      <p>香港个人银行账户适合海外留学、置业、投资、移民及跨境生活支出等场景。我们根据申请人的身份、资金用途和银行政策协助匹配合适的开户方案，具体开户条件与审批结果以银行最终审核为准。</p>
    </section>
    <section class="personal-section">
      <h2>个人账户的主要用途</h2>
      <div class="feature-grid"><article v-for="item in features" :key="item.title"><strong>{{ item.title }}</strong><p>{{ item.text }}</p></article></div>
    </section>
    <section class="personal-section requirements-section">
      <h2>个人开户常用资料</h2>
      <div class="requirement-grid"><div v-for="item in requirements" :key="item" class="requirement">{{ item }}</div></div>
      <p class="note">不同银行的文件清单、住址要求、最低结余和合规问题可能不同，实际以预约银行的最新要求为准。</p>
    </section>
    <section class="personal-section">
      <h2>个人开户办理流程</h2>
      <div class="steps"><div v-for="(item, index) in steps" :key="item.title" class="step"><span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ item.title }}</strong><p>{{ item.text }}</p></div></div>
    </section>
    <section class="personal-section maintenance-section">
      <h2>账户开立后的维护建议</h2>
      <ul><li v-for="item in maintenance" :key="item">{{ item }}</li></ul>
    </section>
    <section class="personal-section bank-section">
      <h2>可咨询的香港个人开户银行</h2>
      <div class="bank-grid"><div v-for="bank in banks" :key="bank.name" class="bank-card"><img :src="bank.img" :alt="bank.name" loading="lazy"><span>{{ bank.name }}</span></div></div>
    </section>
    <section class="personal-section faq-section">
      <h2>香港个人开户常见问题</h2>
      <details v-for="item in faqs" :key="item.q"><summary>{{ item.q }}</summary><p>{{ item.a }}</p></details>
    </section>
  </main>
</template>
<script setup>
import '@/css/bank_personal/hk/Personal_content.css'
const image = (name) => new URL(`../../../assets/img/bank/hk/${name}`, import.meta.url).href
const features = [
  { title: '多币种资金管理', text: '可按银行政策管理港币、人民币、美元等常用币种，便于跨境收支。' },
  { title: '海外生活支付', text: '适用于留学缴费、海外置业、保险及日常消费等合规用途。' },
  { title: '跨境银行服务', text: '使用网上银行、银行卡及汇款服务，具体功能以账户类型为准。' },
  { title: '全球资产配置', text: '为符合银行合规要求的个人提供更便利的财富管理基础。' }
]
const requirements = ['有效内地身份证', '港澳通行证或护照', '入境记录或入境小票', '住址证明或通讯地址资料', '税务居民身份及自我证明', '资金来源与开户用途说明']
const steps = [
  { title: '初步咨询', text: '了解身份、开户用途、资金来源和银行偏好。' },
  { title: '材料预审', text: '整理资料并根据目标银行要求进行补充。' },
  { title: '预约面签', text: '预约香港银行网点，本人按要求赴港核验。' },
  { title: '合规审核', text: '银行完成客户尽职调查及账户审批。' },
  { title: '激活账户', text: '收取账户资料，按指引启用网上银行及银行卡。' }
]
const maintenance = ['保持账户有正常、合理的交易活动，避免长期闲置。', '及时回复银行的客户资料更新和交易调查。', '保留资金来源、交易用途及相关合同票据。', '维护有效的联系方式，遵守最低结余和收费规则。']
const banks = [
  ['香港建设银行（亚洲）','construction.png'], ['香港中国银行','china.jpg'], ['香港交通银行','communications.jpg'], ['香港招商永隆银行','merchants_wing_lung.jpg'], ['香港中信银行','china_citic.jpg'], ['香港汇丰银行','HSBC.jpg'], ['香港创兴银行','chong_xing.jpg'], ['香港星展银行','DBS.jpg'], ['香港恒生银行','hang_seng.jpg'], ['南洋商业银行','NCB.jpg'], ['香港东亚银行','east_asia.jpg'], ['香港大新银行','dah_sing.jpg'], ['华侨银行（香港）','OCBC.jpg'], ['香港花旗银行','citibank.jpg'], ['香港渣打银行','Standard_Chartered.jpg'], ['工银亚洲银行','ICBC.jpg'], ['上海商业银行（香港）','ShangHai.png']
].map(([name, file]) => ({ name, img: image(file) }))
const faqs = [
  { q: '内地居民可以申请香港个人银行账户吗？', a: '部分香港银行接受符合条件的内地居民申请，是否受理及所需资料由银行按客户情况和最新政策审核。' },
  { q: '是否必须本人赴港？', a: '多数传统银行需要本人到香港网点进行身份核验和面签，个别银行是否支持远程流程以其最新安排为准。' },
  { q: '开户需要多长时间？', a: '预约和面签时间取决于银行及资料完整度，面签后还需经过银行合规审核，不能保证固定时限。' },
  { q: '账户长期不用会怎样？', a: '可能触发银行的账户管理、资料更新或风险审查，建议保持合规使用并及时处理银行通知。' }
]
</script>
