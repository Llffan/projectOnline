<template>
    <!-- Overseas company annual review -->
    <div class="ov_tax_box">
        <Top />
        <TaxOvContent1 />
        <Link />
        <TaxOvContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/secretary/overseas_annual/Tax_ov.css'
import Top from '@/components_en/common/Top.vue'
import TaxOvContent1 from '@/components_en/secretary/overseas_annual/TaxOv_content1.vue'
import TaxOvContent2 from '@/components_en/secretary/overseas_annual/TaxOv_content2.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>