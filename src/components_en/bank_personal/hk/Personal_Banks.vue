<template>
  <div class="HK_Cooperative_Bank">
    <div class="title">Hong Kong Banks Supporting Personal Account Applications</div>
    <div class="bank-grid"><router-link v-for="bank in banks" :key="bank.name" :to="bank.route" class="bank-item"><div class="img-box"><img loading="lazy" :src="bank.img" :alt="bank.name"></div><div class="bank-name">{{ bank.name }}</div></router-link></div>
  </div>
</template>
<script setup>
import '@/css_en/bank_company/common/HK_Cooperative_Bank.css'
const image = (name) => new URL(`../../../assets/img/bank/hk/${name}`, import.meta.url).href
const banks = [['CCB (Asia)','construction.png','constructions'],['Bank of China (Hong Kong)','china.jpg','boc'],['Bank of Communications','communications.jpg','communications'],['CMB Wing Lung Bank','merchants_wing_lung.jpg','cmb-winglung'],['China CITIC Bank','china_citic.jpg','citic'],['HSBC','HSBC.jpg','hsbc'],['Chong Hing Bank','chong_xing.jpg','chonghing'],['DBS Bank','DBS.jpg','dbs'],['Hang Seng Bank','hang_seng.jpg','hangseng'],['Nanyang Commercial Bank','NCB.jpg','ncb'],['Bank of East Asia','east_asia.jpg','bea'],['Dah Sing Bank','dah_sing.jpg','dahsing'],['OCBC Bank (Hong Kong)','OCBC.jpg','ocbc'],['Citibank Hong Kong','citibank.jpg','citi'],['Standard Chartered Hong Kong','Standard_Chartered.jpg','sc'],['ICBC (Asia)','ICBC.jpg','icbc'],['Shanghai Commercial Bank','ShangHai.png','shanghai-commercial']].map(([name,file,slug]) => ({ name, img: image(file), route: '/en/bank/hk/personal/' + slug }))
</script>


