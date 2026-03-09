<template>
    <div class="banc_cal_box">
        <Top />
        <BancCalContent1 />
        <Link />
        <BancCalContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import BancCalContent1 from '@/components/bank_company/us/banc_cal/BancCal_content1.vue'
import BancCalContent2 from '@/components/bank_company/us/banc_cal/BancCal_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/us/banc_cal/BancCal.css'
</script>
