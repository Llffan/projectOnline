<template>
    <div class="content5 choose_us">
        <div class="title">
            选择我们知识产权服务的优势
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
import '@/css/ip/common/ChooseUs.css'

const advantages = [
    {
        iconId: '#icon-peoples',
        title: '专家团队',
        description: '资深商标/专利顾问团队，深耕知识产权领域多年，提供多维度的品牌保护与风险评估方案。'
    },
    {
        iconId: '#icon-positive-dynamics',
        title: '响应迅速',
        description: '极速预核准检索，专人实时跟进进度，最快可实现申请当天递交，确立品牌优先权。'
    },
    {
        iconId: '#icon-earth',
        title: '全球布局',
        description: '业务覆盖全球 200 多个国家和地区，具备丰富的国际申请经验，助力企业品牌稳健出海。'
    },
    {
        iconId: '#icon-trophy',
        title: '结果导向',
        description: '以高授权率为核心追求，提供从检索、申请到维权的全生命周期监控管理，保障资产安全。'
    }
]
</script>
