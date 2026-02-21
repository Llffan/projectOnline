<template>
    <div class="nanyang_box">
        <Top />
        <NanyangContent1 />
        <Link />
        <NanyangContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import NanyangContent1 from '@/components/bank_company/hk/nanyang/Nanyang_content1.vue'
import NanyangContent2 from '@/components/bank_company/hk/nanyang/Nanyang_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/nanyang/Nanyang.css'
</script>
