<template>
    <div class="content5 choose_us">
        <div class="title">
            选择我们公证认证的优势
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
import '@/css/notary/common/ChooseUs.css'

const advantages = [
    {
        iconId: '#icon-airplane',
        title: '全球覆盖',
        description: '覆盖海牙成员国及全球各大主要国家，提供一站式使领馆认证服务，解决跨境文书难题。'
    },
    {
        iconId: '#icon-cooperative-handshake',
        title: '方案专业',
        description: '资深顾问团队全程指导，熟悉各国公证规则与流程，为您提供精准、高效的文书处理方案。'
    },
    {
        iconId: '#icon-trophy',
        title: '流程高效',
        description: '简化审批环节，开通VIP加急通道，与各级认证部门紧密协作，确保文书在最短时间内交付。'
    },
    {
        iconId: '#icon-folder-success-one',
        title: '安全保密',
        description: '严格执行数据安全管理，全方位保护客户隐私及商业机密，文书流转各环节全程安全可控。'
    }
]
</script>
