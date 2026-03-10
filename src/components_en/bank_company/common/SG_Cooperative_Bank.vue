<template>
    <div class="SG_Cooperative_Bank">
        <div class="title">
            Singapore Cooperative Banks
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
import '@/css_en/bank_company/common/SG_Cooperative_Bank.css'

// Import images
const aspire = new URL('@/assets/img/bank/sg/aspire.png', import.meta.url).href
const china = new URL('@/assets/img/bank/sg/中国银行.png', import.meta.url).href
const ocbc = new URL('@/assets/img/bank/sg/华侨银行.png', import.meta.url).href
const uob = new URL('@/assets/img/bank/sg/大华银行.png', import.meta.url).href
const sg_bank = new URL('@/assets/img/bank/sg/新加披银行.png', import.meta.url).href
const dbs = new URL('@/assets/img/bank/sg/星展银行.png', import.meta.url).href
const hsbc = new URL('@/assets/img/bank/sg/汇丰银行.png', import.meta.url).href
const standard_chartered = new URL('@/assets/img/bank/sg/渣打银行.png', import.meta.url).href
const citibank = new URL('@/assets/img/bank/sg/花旗银行.png', import.meta.url).href
const malaysia = new URL('@/assets/img/bank/sg/马来西亚.png', import.meta.url).href

const banks = [
    { name: 'Aspire Bank', img: aspire },
    { name: 'Bank of China (Singapore)', img: china },
    { name: 'OCBC Bank', img: ocbc },
    { name: 'UOB', img: uob },
    { name: 'Bank of Singapore', img: sg_bank },
    { name: 'DBS Bank', img: dbs },
    { name: 'HSBC', img: hsbc },
    { name: 'Standard Chartered', img: standard_chartered },
    { name: 'Citibank', img: citibank },
    { name: 'Maybank', img: malaysia }
]
</script>
