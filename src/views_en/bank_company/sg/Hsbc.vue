<template>
    <div class="sg_hsbc_box">
        <Top />
        <HsbcContent1 />
        <Link />
        <HsbcContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import HsbcContent1 from '@/components_en/bank_company/sg/hsbc/Hsbc_content1.vue'
import HsbcContent2 from '@/components_en/bank_company/sg/hsbc/Hsbc_content2.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
import '@/css_en/bank_company/sg/hsbc/Hsbc.css'
</script>
