<template>
    <div class="ocbc_box">
        <Top />
        <OcbcContent1 />
        <Link />
        <OcbcContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import OcbcContent1 from '@/components/bank_company/hk/ocbc/Ocbc_content1.vue'
import OcbcContent2 from '@/components/bank_company/hk/ocbc/Ocbc_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/ocbc/Ocbc.css'
</script>
