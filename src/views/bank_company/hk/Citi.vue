<template>
    <div class="citi_box">
        <Top />
        <CitiContent1 />
        <Link />
        <CitiContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import CitiContent1 from '@/components/bank_company/hk/citi/Citi_content1.vue'
import CitiContent2 from '@/components/bank_company/hk/citi/Citi_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/citi/Citi.css'
</script>
