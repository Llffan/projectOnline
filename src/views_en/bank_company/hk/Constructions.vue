<template>
    <BankOpeningLayout>
        <template #hero><ConstructionsContent1 /></template>
        <template #content><ConstructionsContent2 /></template>
    </BankOpeningLayout>
</template>

<script setup>
import '@/css_en/bank_company/hk/construction/Constructions.css'
import ConstructionsContent1 from '@/components_en/bank_company/hk/construction/Constructions_content1.vue'
import ConstructionsContent2 from '@/components_en/bank_company/hk/construction/Constructions_content2.vue'
import BankOpeningLayout from '@/components_en/bank_company/common/BankOpeningLayout.vue'
</script>
