<template>
    <div class="sg_bos_box">
        <Top />
        <BosContent1 />
        <Link />
        <BosContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import BosContent1 from '@/components_en/bank_company/sg/bos/Bos_content1.vue'
import BosContent2 from '@/components_en/bank_company/sg/bos/Bos_content2.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
import '@/css_en/bank_company/sg/bos/Bos.css'
</script>
