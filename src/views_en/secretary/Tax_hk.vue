<template>
    <!-- Hong Kong tax -->
    <div class="hk_tax_box">
        <Top />
        <TaxHkContent1 />
        <Link />
        <TaxHkContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/secretary/hk_annual/Tax_hk.css'
import Top from '@/components_en/common/Top.vue'
import TaxHkContent1 from '@/components_en/secretary/hk_annual/TaxHk_content1.vue'
import TaxHkContent2 from '@/components_en/secretary/hk_annual/TaxHk_content2.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>