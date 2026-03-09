<template>
    <div class="US_Cooperative_Bank">
        <div class="title">
            美国合作银行
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
import '@/css/bank_company/common/US_Cooperative_Bank.css'

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
    { name: '美国汇丰银行', img: hsbc },
    { name: '美国富港银行', img: cbi },
    { name: '美国华美银行', img: ew },
    { name: '美国摩根大通银行', img: jpm },
    { name: '美国国泰银行', img: cathay },
    { name: '美国银行', img: boa },
    { name: '美国加州银行', img: banccal },
    { name: '美国Arival银行', img: arival },
    { name: '美国水星银行', img: mercury },
    { name: '美国Axos银行', img: axos }
]
</script>
