<template>
    <div class="dbs_box">
        <Top />
        <DbsContent1 />
        <Link />
        <DbsContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import DbsContent1 from '@/components/bank_company/hk/dbs/Dbs_content1.vue'
import DbsContent2 from '@/components/bank_company/hk/dbs/Dbs_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/dbs/Dbs.css'
</script>
