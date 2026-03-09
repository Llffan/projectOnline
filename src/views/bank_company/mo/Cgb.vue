<template>
    <div class="mo_cgb_box">
        <Top />
        <CgbContent1 />
        <Link />
        <CgbContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import CgbContent1 from '@/components/bank_company/mo/cgb/Cgb_content1.vue'
import CgbContent2 from '@/components/bank_company/mo/cgb/Cgb_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/mo/cgb/Cgb.css'
</script>
