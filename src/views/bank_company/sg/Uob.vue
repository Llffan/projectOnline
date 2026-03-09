<template>
    <div class="sg_uob_box">
        <Top />
        <UobContent1 />
        <Link />
        <UobContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import UobContent1 from '@/components/bank_company/sg/uob/Uob_content1.vue'
import UobContent2 from '@/components/bank_company/sg/uob/Uob_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/sg/uob/Uob.css'
</script>
