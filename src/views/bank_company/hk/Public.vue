<template>
    <div class="public_box">
        <Top />
        <PublicContent1 />
        <Link />
        <PublicContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import PublicContent1 from '@/components/bank_company/hk/public/Public_content1.vue'
import PublicContent2 from '@/components/bank_company/hk/public/Public_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/public/Public.css'
</script>
