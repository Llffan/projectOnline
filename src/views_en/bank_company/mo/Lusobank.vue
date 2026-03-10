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
import Top from '@/components_en/common/Top.vue'
import Link from '@/components_en/bank_company/common/Link.vue'
import LusobankContent1 from '@/components_en/bank_company/mo/lusobank/Lusobank_content1.vue'
import LusobankContent2 from '@/components_en/bank_company/mo/lusobank/Lusobank_content2.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
import '@/css_en/bank_company/mo/lusobank/Lusobank.css'
</script>
