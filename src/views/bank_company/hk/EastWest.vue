<template>
    <div class="eastwest_box">
        <Top />
        <EastWestContent1 />
        <Link />
        <EastWestContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import EastWestContent1 from '@/components/bank_company/hk/eastwest/EastWest_content1.vue'
import EastWestContent2 from '@/components/bank_company/hk/eastwest/EastWest_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/eastwest/EastWest.css'
</script>
