<template>
    <!-- 海外公司年审 -->
    <div class="ov_tax_box">
        <Top />
        <TaxOvContent1 />
        <Link />
        <TaxOvContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/overseas_annual/Tax_ov.css'
import Top from '@/components/common/Top.vue'
import TaxOvContent1 from '@/components/secretary/overseas_annual/TaxOv_content1.vue'
import TaxOvContent2 from '@/components/secretary/overseas_annual/TaxOv_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>