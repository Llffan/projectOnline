<template>
    <div class="content5 choose_us">
        <div class="title">
            选择我们开户的优势
        </div>
        <div class="intro">
            <div v-for="(item, index) in advantages" :key="index" class="advantage">
                <div class="img">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.iconId"></use>
                    </svg>
                </div>
                <div class="text1">
                    {{ item.title }}
                </div>
                <div class="text2">
                    {{ item.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import '@/css/bank_company/common/ChooseUs.css'

const advantages = [
    {
        iconId: '#icon-airplane',
        title: '快速开户',
        description: '十洲通与各大银行亲密合作，通过VIP通道快速预约开户，破解开户排期难题。'
    },
    {
        iconId: '#icon-cooperative-handshake',
        title: '专人辅导',
        description: '十洲通专人全程指导，银行面签前口述辅导，巧妙避开银行开户的痛点和难点。'
    },
    {
        iconId: '#icon-trophy',
        title: '品牌保障',
        description: '十洲通作为一家拥有20年行业经验的服务机构，在业界口碑好，品质和品牌均有保证。'
    },
    {
        iconId: '#icon-folder-success-one',
        title: '开户包过',
        description: '十洲通诚信保障，香港各大银行开户确保成功，不成功则退款。'
    }
]
</script>
