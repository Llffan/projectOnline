<template>
    <div class="citi_small_box">
        <Top />
        <CitiSmallContent1 />
        <Link />
        <CitiSmallContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import CitiSmallContent1 from '@/components/bank_company/hk/citi_small/CitiSmall_content1.vue'
import CitiSmallContent2 from '@/components/bank_company/hk/citi_small/CitiSmall_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/citi_small/CitiSmall.css'
</script>
