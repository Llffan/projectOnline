<template>
    <div class="content5 choose_us">
        <div class="title">
            Why Choose Our Notary & Certification Services
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
import '@/css_en/notary/common/ChooseUs.css'

const advantages = [
    {
        iconId: '#icon-airplane',
        title: 'Global Coverage',
        description: 'Covering Hague members and major countries worldwide, providing one-stop embassy certification services to solve cross-border document issues.'
    },
    {
        iconId: '#icon-cooperative-handshake',
        title: 'Professional Expertise',
        description: 'Our expert team provides full guidance, familiar with international notary rules and processes to provide accurate document solutions.'
    },
    {
        iconId: '#icon-trophy',
        title: 'High Efficiency',
        description: 'Simplified procedures and VIP fast-track channels with close cooperation with authorities to ensure documents are delivered in time.'
    },
    {
        iconId: '#icon-folder-success-one',
        title: 'Security & Privacy',
        description: 'Strict data management to protect client privacy and commercial secrets, ensuring that the process is fully secure and controlled.'
    }
]
</script>
