<template>
    <div class="za_box">
        <Top />
        <ZaContent1 />
        <Link />
        <ZaContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import ZaContent1 from '@/components/bank_company/hk/za/Za_content1.vue'
import ZaContent2 from '@/components/bank_company/hk/za/Za_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/za/Za.css'
</script>
