<template>
    <div class="mo_lusobank_box">
        <Top />
        <LusobankContent1 />
        <Link />
        <LusobankContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import LusobankContent1 from '@/components/bank_company/mo/lusobank/Lusobank_content1.vue'
import LusobankContent2 from '@/components/bank_company/mo/lusobank/Lusobank_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/mo/lusobank/Lusobank.css'
</script>
