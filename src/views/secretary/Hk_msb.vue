<template>
    <!-- 香港MSO牌照 -->
    <ServicePageLayout>
        <template #hero><HkMsbContent1 /></template>
        <template #content><HkMsbContent2 /></template>
    </ServicePageLayout>
</template>

<script setup>
import '@/css/secretary/hk_msb/Hk_msb.css'
import HkMsbContent1 from '@/components/secretary/hk_msb/HkMsb_content1.vue'
import HkMsbContent2 from '@/components/secretary/hk_msb/HkMsb_content2.vue'
import ServicePageLayout from '@/components/secretary/common/ServicePageLayout.vue'
</script>
