<template>
    <div class="ew_box">
        <Top />
        <EwContent1 />
        <Link />
        <EwContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import EwContent1 from '@/components/bank_company/us/ew/Ew_content1.vue'
import EwContent2 from '@/components/bank_company/us/ew/Ew_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/us/ew/Ew.css'
</script>
