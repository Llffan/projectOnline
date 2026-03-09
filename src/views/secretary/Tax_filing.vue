<template>
  <div class="tax-filing-page">
    <Top />
    <Tax_filing_content1 />
    <Link />
    <Tax_filing_content2 />
    <Bottom1 />
  </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import Tax_filing_content1 from '@/components/secretary/tax_filing/Tax_filing_content1.vue'
import Tax_filing_content2 from '@/components/secretary/tax_filing/Tax_filing_content2.vue'
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
