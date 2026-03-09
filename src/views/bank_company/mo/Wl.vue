<template>
    <div class="mo_wl_box">
        <Top />
        <WlContent1 />
        <Link />
        <WlContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import WlContent1 from '@/components/bank_company/mo/wl/Wl_content1.vue'
import WlContent2 from '@/components/bank_company/mo/wl/Wl_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/mo/wl/Wl.css'
</script>
