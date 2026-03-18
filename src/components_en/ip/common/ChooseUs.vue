<template>
    <div class="content5 choose_us">
        <div class="title">
            Why Choose Our IP Services
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
import '@/css_en/ip/common/ChooseUs.css'

const advantages = [
    {
        iconId: '#icon-peoples',
        title: 'Expert Team',
        description: 'Senior trademark and patent consultants with years of experience, providing multi-dimensional brand protection and risk assessment.'
    },
    {
        iconId: '#icon-positive-dynamics',
        title: 'Fast Response',
        description: 'Rapid pre-approval search, real-time progress tracking, and same-day application submission to establish brand priority.'
    },
    {
        iconId: '#icon-earth',
        title: 'Global Presence',
        description: 'Covering 200+ countries and regions with extensive international application experience, helping brands expand global influence.'
    },
    {
        iconId: '#icon-trophy',
        title: 'Result-Oriented',
        description: 'Dedicated to high grant rates, providing full lifecycle monitoring and management from search to enforcement.'
    }
]
</script>
