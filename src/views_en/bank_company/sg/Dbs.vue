<template>
    <div class="sg_dbs_box">
        <Top />
        <DbsContent1 />
        <Link />
        <DbsContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import DbsContent1 from '@/components_en/bank_company/sg/dbs/Dbs_content1.vue'
import DbsContent2 from '@/components_en/bank_company/sg/dbs/Dbs_content2.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
import '@/css_en/bank_company/sg/dbs/Dbs.css'
</script>
