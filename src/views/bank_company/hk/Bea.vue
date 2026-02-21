<template>
    <div class="bea_box">
        <Top />
        <BeaContent1 />
        <Link />
        <BeaContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import BeaContent1 from '@/components/bank_company/hk/bea/Bea_content1.vue'
import BeaContent2 from '@/components/bank_company/hk/bea/Bea_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/bea/Bea.css'
</script>
