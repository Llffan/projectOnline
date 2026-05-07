<template>
    <div class="US_Cooperative_Bank">
        <div class="title">
            US Cooperative Banks
        </div>
        <div class="bank-grid">
            <div v-for="(bank, index) in banks" :key="index" class="bank-item">
                <div class="img-box">
                    <img loading="lazy" :src="bank.img" :alt="bank.name">
                </div>
                <div class="bank-name">
                    {{ bank.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import '@/css_en/bank_company/common/US_Cooperative_Bank.css'

// Import images
const hsbc = new URL('@/assets/img/bank/us/汇丰银行.png', import.meta.url).href
const cbi = new URL('@/assets/img/bank/us/富港银行.png', import.meta.url).href
const ew = new URL('@/assets/img/bank/us/华美银行.png', import.meta.url).href
const jpm = new URL('@/assets/img/bank/us/摩根大通银行.png', import.meta.url).href
const cathay = new URL('@/assets/img/bank/us/国泰银行.png', import.meta.url).href
const boa = new URL('@/assets/img/bank/us/美国银行.png', import.meta.url).href
const banccal = new URL('@/assets/img/bank/us/加州银行.png', import.meta.url).href
const arival = new URL('@/assets/img/bank/us/arival银行.png', import.meta.url).href
const mercury = new URL('@/assets/img/bank/us/水星银行.png', import.meta.url).href
const axos = new URL('@/assets/img/bank/us/axos.png', import.meta.url).href

const banks = [
    { name: 'HSBC (USA)', img: hsbc },
    { name: 'CBI Bank', img: cbi },
    { name: 'East West Bank', img: ew },
    { name: 'JPMorgan Chase', img: jpm },
    { name: 'Cathay Bank', img: cathay },
    { name: 'Bank of America', img: boa },
    { name: 'Banc of California', img: banccal },
    { name: 'Arival Bank', img: arival },
    { name: 'Mercury Bank', img: mercury },
    { name: 'Axos Bank', img: axos }
]
</script>
