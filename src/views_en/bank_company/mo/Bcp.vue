<template>
    <div class="mo_bcp_box">
        <Top />
        <BcpContent1 />
        <Link />
        <BcpContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import BcpContent1 from '@/components_en/bank_company/mo/bcp/Bcp_content1.vue'
import BcpContent2 from '@/components_en/bank_company/mo/bcp/Bcp_content2.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
import '@/css_en/bank_company/mo/bcp/Bcp.css'
</script>
