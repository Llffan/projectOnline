<template>
  <div class="accounting-page">
    <Top />
    <Accounting_content1 />
    <Link />
    <Accounting_content2 />
    <Bottom1 />
  </div>
</template>

<script setup>
import Accounting_content1 from '@/components/secretary/accounting/Accounting_content1.vue'
import Accounting_content2 from '@/components/secretary/accounting/Accounting_content2.vue'
import Top from '@/components/common/Top.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>

<style scoped>
.accounting-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
