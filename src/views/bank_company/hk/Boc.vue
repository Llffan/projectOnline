<template>
    <div class="boc_box">
        <Top />
        <BocContent1 />
        <Link />
        <BocContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/bank_company/hk/boc/Boc.css'
import Top from '@/components/common/Top.vue'
import BocContent1 from '@/components/bank_company/hk/boc/Boc_content1.vue'
import BocContent2 from '@/components/bank_company/hk/boc/Boc_content2.vue'
import Link from '@/components/bank_company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
