<template>
    <div class="sg_citi_box">
        <Top />
        <CitiContent1 />
        <Link />
        <CitiContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import CitiContent1 from '@/components_en/bank_company/sg/citi/Citi_content1.vue'
import CitiContent2 from '@/components_en/bank_company/sg/citi/Citi_content2.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
import '@/css_en/bank_company/sg/citi/Citi.css'
</script>
