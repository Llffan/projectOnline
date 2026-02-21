<template>
    <div class="icbc_box">
        <Top />
        <IcbcContent1 />
        <Link />
        <IcbcContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import IcbcContent1 from '@/components/bank_company/hk/icbc/Icbc_content1.vue'
import IcbcContent2 from '@/components/bank_company/hk/icbc/Icbc_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/icbc/Icbc.css'
</script>
