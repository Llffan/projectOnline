<template>
    <!-- 香港税务 -->
    <ServicePageLayout>
        <template #hero><TaxHkContent1 /></template>
        <template #content><TaxHkContent2 /></template>
    </ServicePageLayout>
</template>

<script setup>

import TaxHkContent1 from '@/components/secretary/hk_annual/TaxHk_content1.vue'
import TaxHkContent2 from '@/components/secretary/hk_annual/TaxHk_content2.vue'
import ServicePageLayout from '@/components/secretary/common/ServicePageLayout.vue'
</script>
