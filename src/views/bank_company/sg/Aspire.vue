<template>
    <div class="sg_aspire_box">
        <Top />
        <AspireContent1 />
        <Link />
        <AspireContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import AspireContent1 from '@/components/bank_company/sg/aspire/Aspire_content1.vue'
import AspireContent2 from '@/components/bank_company/sg/aspire/Aspire_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/sg/aspire/Aspire.css'
</script>
