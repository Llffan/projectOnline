<template>
    <div class="mo_hsbc_box">
        <Top />
        <HsbcContent1 />
        <Link />
        <HsbcContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import HsbcContent1 from '@/components/bank_company/mo/hsbc/Hsbc_content1.vue'
import HsbcContent2 from '@/components/bank_company/mo/hsbc/Hsbc_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/mo/hsbc/Hsbc.css'
</script>
