<template>
    <div class="mo_bnu_box">
        <Top />
        <BnuContent1 />
        <Link />
        <BnuContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import BnuContent1 from '@/components/bank_company/mo/bnu/Bnu_content1.vue'
import BnuContent2 from '@/components/bank_company/mo/bnu/Bnu_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/mo/bnu/Bnu.css'
</script>
