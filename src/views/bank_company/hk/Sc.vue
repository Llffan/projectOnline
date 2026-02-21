<template>
    <div class="sc_box">
        <Top />
        <ScContent1 />
        <Link />
        <ScContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import ScContent1 from '@/components/bank_company/hk/sc/Sc_content1.vue'
import ScContent2 from '@/components/bank_company/hk/sc/Sc_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/sc/Sc.css'
</script>
