<template>
  <div class="HK_Cooperative_Bank">
    <div class="title">支持个人开户的香港银行</div>
    <div class="bank-grid"><router-link v-for="bank in banks" :key="bank.name" :to="bank.route" class="bank-item"><div class="img-box"><img loading="lazy" :src="bank.img" :alt="bank.name"></div><div class="bank-name">{{ bank.name }}</div></router-link></div>
  </div>
</template>
<script setup>
import '@/css/bank_company/common/HK_Cooperative_Bank.css'
const image = (name) => new URL(`../../../assets/img/bank/hk/${name}`, import.meta.url).href
const banks = [['香港建设银行（亚洲）','construction.png','constructions'],['香港中国银行','china.jpg','boc'],['香港交通银行','communications.jpg','communications'],['香港招商永隆银行','merchants_wing_lung.jpg','cmb-winglung'],['香港中信银行','china_citic.jpg','citic'],['香港汇丰银行','HSBC.jpg','hsbc'],['香港创兴银行','chong_xing.jpg','chonghing'],['香港星展银行','DBS.jpg','dbs'],['香港恒生银行','hang_seng.jpg','hangseng'],['南洋商业银行','NCB.jpg','ncb'],['香港东亚银行','east_asia.jpg','bea'],['香港大新银行','dah_sing.jpg','dahsing'],['华侨银行（香港）','OCBC.jpg','ocbc'],['香港花旗银行','citibank.jpg','citi'],['香港渣打银行','Standard_Chartered.jpg','sc'],['工银亚洲银行','ICBC.jpg','icbc'],['上海商业银行（香港）','ShangHai.png','shanghai-commercial']].map(([name,file,slug]) => ({ name, img: image(file), route: '/bank/hk/personal/' + slug }))
</script>


