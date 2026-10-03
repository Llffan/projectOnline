<template>
  <ServicePageLayout class="tax-filing-page">
    <template #hero><Tax_filing_content1 /></template>
    <template #content><Tax_filing_content2 /></template>
  </ServicePageLayout>
</template>

<script setup>
import Tax_filing_content1 from '@/components/secretary/tax_filing/Tax_filing_content1.vue'
import Tax_filing_content2 from '@/components/secretary/tax_filing/Tax_filing_content2.vue'
import ServicePageLayout from '@/components/secretary/common/ServicePageLayout.vue'
</script>

<style scoped>
.tax-filing-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
