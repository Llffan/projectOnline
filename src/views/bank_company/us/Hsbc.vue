<template>
    <div class="hsbc_box">
        <Top />
        <Hsbc_content1 />
        <Link />
        <Hsbc_content2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'

import Hsbc_content1 from '@/components/bank_company/us/hsbc/Hsbc_content1.vue'
import Hsbc_content2 from '@/components/bank_company/us/hsbc/Hsbc_content2.vue'

import '@/css/bank_company/us/hsbc/Hsbc.css'
</script>
