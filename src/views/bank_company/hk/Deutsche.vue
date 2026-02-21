<template>
    <div class="deutsche_box">
        <Top />
        <DeutscheContent1 />
        <Link />
        <DeutscheContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import DeutscheContent1 from '@/components/bank_company/hk/deutsche/Deutsche_content1.vue'
import DeutscheContent2 from '@/components/bank_company/hk/deutsche/Deutsche_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/deutsche/Deutsche.css'
</script>
