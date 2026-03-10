<template>
    <div class="HK_Cooperative_Bank">
        <div class="title">
            Hong Kong Cooperative Banks
        </div>
        <div class="bank-grid">
            <div v-for="(bank, index) in banks" :key="index" class="bank-item">
                <div class="img-box">
                    <img :src="bank.img" :alt="bank.name">
                </div>
                <div class="bank-name">
                    {{ bank.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import '@/css_en/bank_company/common/HK_Cooperative_Bank.css'

// Import images
const construction = new URL('@/assets/img/bank/hk/construction.png', import.meta.url).href
const everbright = new URL('@/assets/img/bank/hk/everbright.jpg', import.meta.url).href
const china = new URL('@/assets/img/bank/hk/china.jpg', import.meta.url).href
const communications = new URL('@/assets/img/bank/hk/communications.jpg', import.meta.url).href
const merchants_wing_lung = new URL('@/assets/img/bank/hk/merchants_wing_lung.jpg', import.meta.url).href
const china_citic = new URL('@/assets/img/bank/hk/china_citic.jpg', import.meta.url).href
const hsbc = new URL('@/assets/img/bank/hk/HSBC.jpg', import.meta.url).href
const chong_xing = new URL('@/assets/img/bank/hk/chong_xing.jpg', import.meta.url).href
const dbs = new URL('@/assets/img/bank/hk/DBS.jpg', import.meta.url).href
const hang_seng = new URL('@/assets/img/bank/hk/hang_seng.jpg', import.meta.url).href
const ncb = new URL('@/assets/img/bank/hk/NCB.jpg', import.meta.url).href
const east_asia = new URL('@/assets/img/bank/hk/east_asia.jpg', import.meta.url).href
const dah_sing = new URL('@/assets/img/bank/hk/dah_sing.jpg', import.meta.url).href
const ocbc = new URL('@/assets/img/bank/hk/OCBC.jpg', import.meta.url).href
const citibank = new URL('@/assets/img/bank/hk/citibank.jpg', import.meta.url).href
const standard_chartered = new URL('@/assets/img/bank/hk/Standard_Chartered.jpg', import.meta.url).href
const icbc = new URL('@/assets/img/bank/hk/ICBC.jpg', import.meta.url).href
const icic = new URL('@/assets/img/bank/hk/ICIC.png', import.meta.url).href
const deutsche = new URL('@/assets/img/bank/hk/Deutsche.png', import.meta.url).href
const citibank2 = new URL('@/assets/img/bank/hk/citibank2.jpg', import.meta.url).href
const shanghai = new URL('@/assets/img/bank/hk/ShangHai.png', import.meta.url).href
const za = new URL('@/assets/img/bank/hk/ZA.png', import.meta.url).href
const eastwest = new URL('@/assets/img/bank/hk/eastwest.jpg', import.meta.url).href
const uob = new URL('@/assets/img/bank/hk/UOB.jpg', import.meta.url).href


const banks = [
    { name: 'CCB (Asia)', img: construction },
    { name: 'China Everbright Bank', img: everbright },
    { name: 'Bank of China (Hong Kong)', img: china },
    { name: 'Bank of Communications', img: communications },
    { name: 'CMB Wing Lung Bank', img: merchants_wing_lung },
    { name: 'China CITIC Bank', img: china_citic },
    { name: 'HSBC', img: hsbc },
    { name: 'Chong Hing Bank', img: chong_xing },
    { name: 'DBS Bank', img: dbs },
    { name: 'Hang Seng Bank', img: hang_seng },
    { name: 'Nanyang Commercial Bank', img: ncb },
    { name: 'Bank of East Asia', img: east_asia },
    { name: 'Dah Sing Bank', img: dah_sing },
    { name: 'OCBC Bank', img: ocbc },
    { name: 'Citibank', img: citibank },
    { name: 'Standard Chartered', img: standard_chartered },
    { name: 'ICBC (Asia)', img: icbc },
    { name: 'ICICI Bank (HK Branch)', img: icic },
    { name: 'Deutsche Bank (HK Branch)', img: deutsche },
    { name: 'Citibank', img: citibank2 },
    { name: 'Shanghai Commercial Bank', img: shanghai },
    { name: 'ZA Bank', img: za },
    { name: 'East West Bank', img: eastwest },
    { name: 'UOB', img: uob }
]
</script>
