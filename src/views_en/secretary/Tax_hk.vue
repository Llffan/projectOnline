<template>
    <!-- Hong Kong tax -->
    <ServicePageLayout>
        <template #hero><TaxHkContent1 /></template>
        <template #content><TaxHkContent2 /></template>
    </ServicePageLayout>
</template>

<script setup>
import '@/css_en/secretary/hk_annual/Tax_hk.css'
import TaxHkContent1 from '@/components_en/secretary/hk_annual/TaxHk_content1.vue'
import TaxHkContent2 from '@/components_en/secretary/hk_annual/TaxHk_content2.vue'
import ServicePageLayout from '@/components_en/secretary/common/ServicePageLayout.vue'
</script>
