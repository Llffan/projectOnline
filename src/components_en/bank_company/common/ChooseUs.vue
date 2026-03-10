<template>
    <div class="content5 choose_us">
        <div class="title">
            Advantages of Opening an Account with Us
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
import '@/css_en/bank_company/common/ChooseUs.css'

const advantages = [
    {
        iconId: '#icon-airplane',
        title: 'Fast Account Opening',
        description: 'Shizhoutong cooperates closely with major banks to quickly schedule account opening through VIP channels, solving the problem of long scheduling times.'
    },
    {
        iconId: '#icon-cooperative-handshake',
        title: 'Dedicated Guidance',
        description: 'Dedicated personnel from Shizhoutong provide full guidance and oral coaching before bank interviews, cleverly avoiding difficulties.'
    },
    {
        iconId: '#icon-trophy',
        title: 'Brand Guarantee',
        description: 'As a service agency with 20 years of industry experience, Shizhoutong has a good reputation in the industry, guaranteeing quality and brand.'
    },
    {
        iconId: '#icon-folder-success-one',
        title: 'Guaranteed Success',
        description: 'Shizhoutong promises integrity protection, ensuring successful account opening in major Hong Kong banks, with a refund if unsuccessful.'
    }
]
</script>
