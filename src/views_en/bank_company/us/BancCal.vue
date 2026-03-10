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
import '@/css_en/bank_company/us/banc_cal/BancCal.css'
import Top from '@/components_en/common/Top.vue'
import BancCalContent1 from '@/components_en/bank_company/us/banc_cal/BancCal_content1.vue'
import BancCalContent2 from '@/components_en/bank_company/us/banc_cal/BancCal_content2.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
