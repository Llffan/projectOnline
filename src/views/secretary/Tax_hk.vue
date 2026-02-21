<template>
    <!-- 香港税务 -->
    <div class="hk_tax_box">
        <Top />
        <TaxHkContent1 />
        <Link />
        <TaxHkContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/hk_annual/Tax_hk.css'
import Top from '@/components/common/Top.vue'
import TaxHkContent1 from '@/components/secretary/hk_annual/TaxHk_content1.vue'
import TaxHkContent2 from '@/components/secretary/hk_annual/TaxHk_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>