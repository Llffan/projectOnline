<template>
    <div class="mo_icbc_asia_box">
        <Top />
        <IcbcAsiaContent1 />
        <Link />
        <IcbcAsiaContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import IcbcAsiaContent1 from '@/components/bank_company/mo/icbc_asia/IcbcAsia_content1.vue'
import IcbcAsiaContent2 from '@/components/bank_company/mo/icbc_asia/IcbcAsia_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/mo/icbc_asia/IcbcAsia.css'
</script>
