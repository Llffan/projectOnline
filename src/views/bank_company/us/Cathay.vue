<template>
    <div class="cathay_box">
        <Top />
        <CathayContent1 />
        <Link />
        <CathayContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import CathayContent1 from '@/components/bank_company/us/cathay/Cathay_content1.vue'
import CathayContent2 from '@/components/bank_company/us/cathay/Cathay_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/us/cathay/Cathay.css'
</script>
