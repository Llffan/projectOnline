<template>
    <div class="HK_Cooperative_Bank">
        <div class="title">
            合作银行
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
import '@/css/bank_company/common/HK_Cooperative_Bank.css'

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
    { name: '香港建设银行(亚洲)', img: construction },
    { name: '香港光大银行', img: everbright },
    { name: '香港中国银行', img: china },
    { name: '香港交通银行', img: communications },
    { name: '香港招商永隆银行', img: merchants_wing_lung },
    { name: '香港中信银行', img: china_citic },
    { name: '香港汇丰银行', img: hsbc },
    { name: '香港创兴银行', img: chong_xing },
    { name: '香港星展银行', img: dbs },
    { name: '香港恒生银行', img: hang_seng },
    { name: '南洋商业银行', img: ncb },
    { name: '香港东亚银行', img: east_asia },
    { name: '香港大新银行', img: dah_sing },
    { name: '华侨银行(香港)', img: ocbc },
    { name: '香港花旗银行', img: citibank },
    { name: '香港渣打银行', img: standard_chartered },
    { name: '工商亚洲银行', img: icbc },
    { name: '印度工商银行(香港分行)', img: icic },
    { name: '德意志银行(香港分行)', img: deutsche },
    { name: '香港小花旗银行', img: citibank2 },
    { name: '上海商业银行(香港)', img: shanghai },
    { name: '香港众安银行', img: za },
    { name: '香港华美银行', img: eastwest },
    { name: '香港大华银行', img: uob }
]
</script>
