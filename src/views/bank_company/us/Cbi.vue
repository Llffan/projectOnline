<template>
    <div class="cbi_box">
        <Top />
        <CbiContent1 />
        <Link />
        <CbiContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import CbiContent1 from '@/components/bank_company/us/cbi/Cbi_content1.vue'
import CbiContent2 from '@/components/bank_company/us/cbi/Cbi_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/us/cbi/Cbi.css'
</script>
