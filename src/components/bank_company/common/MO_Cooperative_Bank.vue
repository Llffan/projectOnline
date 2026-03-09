<template>
    <div class="MO_Cooperative_Bank">
        <div class="title">
            澳门合作银行
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
import '@/css/bank_company/common/MO_Cooperative_Bank.css'

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
    { name: '澳门中国银行', img: boc },
    { name: '澳门交通银行', img: bocom },
    { name: '澳门华侨银行', img: ocbc },
    { name: '澳门国际银行', img: luso },
    { name: '大西洋银行', img: bnu },
    { name: '中国工商银行(澳门)', img: icbc },
    { name: '工银亚洲', img: icbc_asia },
    { name: '广发银行(澳门)', img: cgb },
    { name: '澳门汇丰银行', img: hsbc },
    { name: '立桥银行', img: wlb },
    { name: '葡萄牙商业银行', img: bcp }
]
</script>
