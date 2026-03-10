<template>
    <div class="MO_Cooperative_Bank">
        <div class="title">
            Macau Cooperative Banks
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
import '@/css_en/bank_company/common/MO_Cooperative_Bank.css'

// Import images
const boc = new URL('@/assets/img/bank/mo/中国银行.png', import.meta.url).href
const bocom = new URL('@/assets/img/bank/mo/交通银行.png', import.meta.url).href
const ocbc = new URL('@/assets/img/bank/mo/华侨银行.png', import.meta.url).href
const luso = new URL('@/assets/img/bank/mo/国际银行.png', import.meta.url).href
const bnu = new URL('@/assets/img/bank/mo/大西洋银行.png', import.meta.url).href
const icbc = new URL('@/assets/img/bank/mo/工商银行.png', import.meta.url).href
const icbc_asia = new URL('@/assets/img/bank/mo/工银亚洲银行.png', import.meta.url).href
const cgb = new URL('@/assets/img/bank/mo/广发银行.png', import.meta.url).href
const hsbc = new URL('@/assets/img/bank/mo/汇丰银行.png', import.meta.url).href
const wlb = new URL('@/assets/img/bank/mo/立桥银行.png', import.meta.url).href
const bcp = new URL('@/assets/img/bank/mo/葡萄牙商业银行.png', import.meta.url).href


const banks = [
    { name: 'Bank of China (Macau)', img: boc },
    { name: 'Bank of Communications', img: bocom },
    { name: 'OCBC Bank (Macau)', img: ocbc },
    { name: 'Luso International Banking', img: luso },
    { name: 'BNU', img: bnu },
    { name: 'ICBC (Macau)', img: icbc },
    { name: 'ICBC Asia', img: icbc_asia },
    { name: 'CGB (Macau)', img: cgb },
    { name: 'HSBC (Macau)', img: hsbc },
    { name: 'Well Link Bank', img: wlb },
    { name: 'BCP Bank', img: bcp }
]
</script>
