<template>
    <div class="cmb_winglung_box">
        <Top />
        <CmbWinglungContent1 />
        <Link />
        <CmbWinglungContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/bank_company/hk/cmb_winglung/CmbWinglung.css'
import Top from '@/components/common/Top.vue'
import CmbWinglungContent1 from '@/components/bank_company/hk/cmb_winglung/CmbWinglung_content1.vue'
import CmbWinglungContent2 from '@/components/bank_company/hk/cmb_winglung/CmbWinglung_content2.vue'
import Link from '@/components/bank_company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
