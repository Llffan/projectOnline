<template>
    <div class="hsbc_box">
        <Top />
        <HsbcContent1 />
        <Link />
        <HsbcContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/bank_company/hk/hsbc/Hsbc.css'
import Top from '@/components/common/Top.vue'
import HsbcContent1 from '@/components/bank_company/hk/hsbc/Hsbc_content1.vue'
import HsbcContent2 from '@/components/bank_company/hk/hsbc/Hsbc_content2.vue'
import Link from '@/components/bank_company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
