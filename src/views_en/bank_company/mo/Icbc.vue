<template>
    <div class="mo_icbc_box">
        <Top />
        <IcbcContent1 />
        <Link />
        <IcbcContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import IcbcContent1 from '@/components_en/bank_company/mo/icbc/Icbc_content1.vue'
import IcbcContent2 from '@/components_en/bank_company/mo/icbc/Icbc_content2.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
import '@/css_en/bank_company/mo/icbc/Icbc.css'
</script>
