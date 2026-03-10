<template>
    <div class="sg_maybank_box">
        <Top />
        <MaybankContent1 />
        <Link />
        <MaybankContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import MaybankContent1 from '@/components_en/bank_company/sg/maybank/Maybank_content1.vue'
import MaybankContent2 from '@/components_en/bank_company/sg/maybank/Maybank_content2.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
import '@/css_en/bank_company/sg/maybank/Maybank.css'
</script>
