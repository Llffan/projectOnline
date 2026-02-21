<template>
    <div class="dahsing_box">
        <Top />
        <DahSingContent1 />
        <Link />
        <DahSingContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import DahSingContent1 from '@/components/bank_company/hk/dahsing/DahSing_content1.vue'
import DahSingContent2 from '@/components/bank_company/hk/dahsing/DahSing_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/dahsing/DahSing.css'
</script>
